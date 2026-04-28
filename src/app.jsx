import React, { useState, useEffect, useMemo } from 'react';
import { 
  LayoutDashboard, Users, School, Upload, Download, 
  Search, CheckCircle, Clock, AlertCircle, X, Plus, 
  MessageSquare, ChevronRight, FileSpreadsheet, BarChart3,
  TrendingUp, TrendingDown, Minus, Menu, PieChart, Activity,
  Trash2, PlusCircle
} from 'lucide-react';

// --- FIREBASE IMPORTS ---
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, doc, setDoc, deleteDoc, writeBatch, query, where } from 'firebase/firestore';

// --- CONFIGURACIÓN DE FIREBASE ---
const firebaseConfig = {
  apiKey: "AIzaSyDkGPd6MDL29Z8LY3EhPMLEXU_Q3_D8jLc",
  authDomain: "seguimiento-coaches.firebaseapp.com",
  projectId: "seguimiento-coaches",
  storageBucket: "seguimiento-coaches.firebasestorage.app",
  messagingSenderId: "782682130999",
  appId: "1:782682130999:web:5651867d9579d873cecdb2",
  measurementId: "G-PFED0LN5EQ"
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

export default function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [schools, setSchools] = useState([]);
  
  // Estados de UI
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  // Estados de Selección Múltiple (Eliminar)
  const [selectedRows, setSelectedRows] = useState([]);

  // Estados de Filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCoach, setFilterCoach] = useState('Todos');
  const [filterRegion, setFilterRegion] = useState('Todas');
  const [filterStatus, setFilterStatus] = useState('Todos');
  const [filterProb, setFilterProb] = useState('Todas');
  
  const [isUploading, setIsUploading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const initAuth = async () => {
      try {
        await signInAnonymously(auth);
      } catch (error) {
        console.error("Error al autenticar:", error);
      } finally {
        setAuthLoading(false);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const schoolsRef = collection(db, 'users', user.uid, 'schools');
    const unsubSchools = onSnapshot(schoolsRef, 
      (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSchools(data);
      },
      (error) => console.error("Error obteniendo colegios:", error)
    );
    return () => unsubSchools();
  }, [user]);

  // Listas Únicas para Filtros
  const coaches = useMemo(() => [...new Set(schools.map(s => s.coach).filter(Boolean))], [schools]);
  const regions = useMemo(() => [...new Set(schools.map(s => s.region).filter(Boolean))], [schools]);

  // Aplicación de Múltiples Filtros
  const filteredSchools = useMemo(() => {
    return schools.filter(school => {
      const matchSearch = school.name?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCoach = filterCoach === 'Todos' || school.coach === filterCoach;
      const matchRegion = filterRegion === 'Todas' || school.region === filterRegion;
      const matchStatus = filterStatus === 'Todos' || (school.gestionType || 'MANTENIMIENTO') === filterStatus;
      const matchProb = filterProb === 'Todas' || (school.renewal || 'NO DEFINIDA') === filterProb;
      
      return matchSearch && matchCoach && matchRegion && matchStatus && matchProb;
    });
  }, [schools, searchTerm, filterCoach, filterRegion, filterStatus, filterProb]);

  // Estadísticas Globales (Afectadas por los filtros)
  const stats = useMemo(() => {
    const totalSchools = filteredSchools.length;
    let totalActions = 0, completed = 0, progress = 0, pending = 0, highRenewal = 0, firmados = 0;

    filteredSchools.forEach(s => {
      totalActions += (Number(s.completedActions) || 0) + (Number(s.progressActions) || 0) + (Number(s.pendingActions) || 0);
      completed += Number(s.completedActions) || 0;
      progress += Number(s.progressActions) || 0;
      pending += Number(s.pendingActions) || 0;
      if (s.renewal === 'ALTA') highRenewal++;
      if (s.renewal === 'FIRMADO') firmados++;
    });

    const completionRate = totalActions > 0 ? Math.round((completed / totalActions) * 100) : 0;
    return { totalSchools, totalActions, completed, progress, pending, highRenewal, firmados, completionRate };
  }, [filteredSchools]);

  // Función para agrupar tablas del Dashboard
  const getBreakdownBy = (key) => {
    const groups = {};
    filteredSchools.forEach(s => {
      const val = s[key] || 'Sin definir';
      if (!groups[val]) groups[val] = { FIRMADO: 0, ALTA: 0, MEDIA: 0, BAJA: 0, 'NO DEFINIDA': 0, total: 0 };
      const status = s.renewal || 'NO DEFINIDA';
      if(groups[val][status] !== undefined) {
        groups[val][status] += 1;
      }
      groups[val].total++;
    });
    return Object.entries(groups).map(([name, data]) => ({ name, ...data })).sort((a,b) => b.total - a.total);
  };

  const breakdownCoach = useMemo(() => getBreakdownBy('coach'), [filteredSchools]);
  const breakdownRegion = useMemo(() => getBreakdownBy('region'), [filteredSchools]);
  const breakdownLinea = useMemo(() => getBreakdownBy('businessLine'), [filteredSchools]);

  // --- OPERACIONES CRUD (EDICIÓN, ELIMINACIÓN Y CARGA) ---

  // Actualización rápida de probabilidad (inline edit)
  const updateInlineProbabilidad = async (schoolId, newValue) => {
    if (!user) return;
    await setDoc(doc(db, 'users', user.uid, 'schools', schoolId), {
      renewal: newValue,
      updatedAt: new Date().toISOString()
    }, { merge: true });
  };

  // Eliminación Masiva con doble confirmación
  const handleDeleteSelected = async () => {
    if (selectedRows.length === 0) return;
    const confirm1 = window.confirm(`Estás a punto de ELIMINAR ${selectedRows.length} colegio(s). ¿Estás seguro?`);
    if (!confirm1) return;
    const confirm2 = window.confirm(`DOBLE CONFIRMACIÓN: Esta acción es irreversible. ¿Deseas borrar los datos definitivamente?`);
    if (!confirm2) return;

    try {
      let batch = writeBatch(db);
      let count = 0;
      for (const id of selectedRows) {
        batch.delete(doc(db, 'users', user.uid, 'schools', id));
        count++;
        if (count >= 490) {
          await batch.commit();
          batch = writeBatch(db);
          count = 0;
        }
      }
      if (count > 0) await batch.commit();
      setSelectedRows([]);
    } catch (error) {
      console.error("Error eliminando:", error);
      alert("Hubo un error al eliminar los colegios.");
    }
  };

  const toggleRowSelection = (id) => {
    setSelectedRows(prev => prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]);
  };

  const toggleAllRows = () => {
    if (selectedRows.length === filteredSchools.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredSchools.map(s => s.id));
    }
  };

  // Carga de Excel (Ultra-robusto)
  const handleFileUpload = async (e) => {
    if (!user) return;
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        const bstr = evt.target.result;
        const wb = window.XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const rawData = window.XLSX.utils.sheet_to_json(ws);

        let batch = writeBatch(db);
        let operationCount = 0;

        for (const row of rawData) {
          const getVal = (names) => {
            const foundKey = Object.keys(row).find(k => names.includes(k.toLowerCase().trim()));
            return foundKey ? row[foundKey] : null;
          };

          const schoolId = getVal(['id']) || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
          const schoolData = {
            name: getVal(['colegio', 'nombre']) || 'Sin Nombre',
            calendar: getVal(['calendario', 'cal']) || 'Sin definir',
            classification: getVal(['clasificacion', 'tipo']) || 'Sin definir',
            businessLine: getVal(['lineanegocio', 'linea']) || 'Sin definir',
            coach: getVal(['coach', 'entrenador']) || 'Sin Asignar',
            region: getVal(['regional', 'region', 'zona']) || 'Sin Región',
            completedActions: Number(getVal(['acciones hechas', 'completedactions']) || 0),
            progressActions: Number(getVal(['acciones progreso', 'progressactions']) || 0),
            pendingActions: Number(getVal(['acciones pendientes', 'pendingactions']) || 0),
            renewal: getVal(['probabilidad', 'renewal']) || 'NO DEFINIDA',
            gestionType: getVal(['status', 'gestiontype', 'tipo gestion']) || 'MANTENIMIENTO',
            updatedAt: new Date().toISOString()
          };

          batch.set(doc(db, 'users', user.uid, 'schools', String(schoolId)), schoolData, { merge: true });
          operationCount++;

          if (operationCount >= 450) {
            await batch.commit();
            batch = writeBatch(db);
            operationCount = 0;
          }
        }
        if (operationCount > 0) await batch.commit();

        setIsUploading(false);
        e.target.value = null;
        alert(`¡Sincronización exitosa! Procesados ${rawData.length} registros.`);
      } catch (error) {
        console.error("Error crítico de sincronización:", error);
        setIsUploading(false);
        alert("Error de conexión. Verifica el formato del archivo.");
      }
    };
    reader.readAsBinaryString(file);
  };

  const downloadTemplateAndData = () => {
    if (!window.XLSX) return;
    const exportData = schools.map(s => ({
      ID: s.id, colegio: s.name, calendario: s.calendar, clasificacion: s.classification,
      lineaNegocio: s.businessLine, coach: s.coach, regional: s.region,
      'STATUS': s.gestionType, 'Probabilidad': s.renewal, 
      'Acciones Hechas': s.completedActions, 'Acciones Progreso': s.progressActions, 'Acciones Pendientes': s.pendingActions
    }));
    const ws = window.XLSX.utils.json_to_sheet(exportData.length ? exportData : [{ ID: "123", colegio: "Base", STATUS: "MANTENIMIENTO", Probabilidad: "ALTA" }]);
    const wb = window.XLSX.utils.book_new();
    window.XLSX.utils.book_append_sheet(wb, ws, "Colegios");
    window.XLSX.writeFile(wb, "Data_CRM_Completa.xlsx");
  };

  if (authLoading) return <div className="min-h-screen flex items-center justify-center bg-slate-950 text-cyan-400 font-semibold tracking-widest uppercase">Inicializando Sistema...</div>;

  return (
    <div className="flex h-screen bg-[#0B1120] font-sans text-slate-200 overflow-hidden relative selection:bg-cyan-500/30">
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}/>}

      {/* SIDEBAR NEON TECH */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-[#0F172A] border-r border-slate-800 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.5)] z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-slate-800/50">
          <h1 className="text-2xl font-black tracking-tight flex items-center gap-2 text-white">
            <Activity className="text-cyan-400" size={28} />
            Coach<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Track</span>
          </h1>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
        </div>
        <p className="px-6 text-slate-500 text-xs font-semibold tracking-wider uppercase mt-4 mb-2">Panel de Control</p>
        <nav className="flex-1 px-4 space-y-2 mt-2">
          <button onClick={() => { setCurrentView('dashboard'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${currentView === 'dashboard' ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}><BarChart3 size={20} /> Dashboard Visual</button>
          <button onClick={() => { setCurrentView('schools'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${currentView === 'schools' ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}><School size={20} /> Gestión de Datos</button>
        </nav>
        <div className="p-4 border-t border-slate-800 space-y-3 bg-[#0B1120]/50">
          <div className="relative">
            <input type="file" accept=".xlsx, .xls, .csv" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" onChange={handleFileUpload} disabled={isUploading}/>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl text-sm font-bold text-white transition-all shadow-[0_0_15px_rgba(8,145,178,0.4)]">
              {isUploading ? <Clock className="animate-spin" size={18} /> : <Upload size={18} />} Sincronizar Excel
            </button>
          </div>
          <button onClick={downloadTemplateAndData} className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-700 hover:bg-slate-800 hover:text-white rounded-xl text-sm font-medium text-slate-400 transition-colors"><FileSpreadsheet size={16} /> Exportar Reporte</button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {/* TOPBAR MULTI-FILTRO OSCURA */}
        <header className="bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 shrink-0 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex w-full md:w-auto items-center gap-3">
              <button className="md:hidden p-2 text-slate-400 hover:text-white" onClick={() => setIsMobileMenuOpen(true)}><Menu size={24} /></button>
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                <input type="text" placeholder="Buscar colegio..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-1.5 w-full rounded-lg border border-slate-700 bg-slate-900/50 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
            </div>
            
            {/* FILTROS GLOBALES (Afectan a Dashboard y Directorio) */}
            <div className="flex flex-wrap items-center justify-end gap-2 w-full md:w-auto">
              <select value={filterCoach} onChange={(e) => setFilterCoach(e.target.value)} className="px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-900/50 text-xs text-slate-300 focus:border-cyan-500 outline-none">
                <option value="Todos">Coach: Todos</option>
                {coaches.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)} className="px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-900/50 text-xs text-slate-300 focus:border-cyan-500 outline-none">
                <option value="Todas">Región: Todas</option>
                {regions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-900/50 text-xs text-slate-300 focus:border-cyan-500 outline-none">
                <option value="Todos">STATUS: Todos</option>
                <option value="MANTENIMIENTO">MANTENIMIENTO</option>
                <option value="RENOVACIÓN">RENOVACIÓN</option>
              </select>
              <select value={filterProb} onChange={(e) => setFilterProb(e.target.value)} className="px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-900/50 text-xs text-slate-300 focus:border-cyan-500 outline-none">
                <option value="Todas">Prob: Todas</option>
                <option value="FIRMADO">FIRMADO</option>
                <option value="ALTA">ALTA</option>
                <option value="MEDIA">MEDIA</option>
                <option value="BAJA">BAJA</option>
                <option value="NO DEFINIDA">NO DEFINIDA</option>
              </select>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-6 custom-scrollbar">
          {currentView === 'dashboard' ? (
            <div className="space-y-8 max-w-7xl mx-auto animate-in fade-in duration-300">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-wide">Métricas Globales</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
                  <StatCard title="Entidades Filtradas" value={stats.totalSchools} icon={<School size={20} className="text-blue-400" />} color="bg-blue-500/10" borderColor="border-blue-500/20" />
                  <StatCard title="Avance Acciones" value={`${stats.completionRate}%`} icon={<TrendingUp size={20} className="text-cyan-400" />} color="bg-cyan-500/10" borderColor="border-cyan-500/20" />
                  <StatCard title="Colegios Firmados" value={stats.firmados} icon={<CheckCircle size={20} className="text-purple-400" />} color="bg-purple-500/10" borderColor="border-purple-500/20" />
                  <StatCard title="Prob. ALTA" value={stats.highRenewal} icon={<TrendingUp size={20} className="text-emerald-400" />} color="bg-emerald-500/10" borderColor="border-emerald-500/20" />
                  <StatCard title="Acc. Pendientes" value={stats.pending} icon={<AlertCircle size={20} className="text-rose-400" />} color="bg-rose-500/10" borderColor="border-rose-500/20" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mt-10 mb-4 border-b border-slate-800 pb-2">Matriz de Probabilidades (Basado en filtros)</h3>
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <BreakdownTable title="Por Línea de Negocio" data={breakdownLinea} icon={<PieChart size={18} className="text-fuchsia-400" />} />
                <BreakdownTable title="Por Regional" data={breakdownRegion} icon={<PieChart size={18} className="text-amber-400" />} />
                <BreakdownTable title="Rendimiento de Coaches" data={breakdownCoach} icon={<Users size={18} className="text-cyan-400" />} />
              </div>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-wide">Directorio de Colegios</h2>
                  <p className="text-slate-400 text-sm mt-1">Mostrando {filteredSchools.length} colegio(s).</p>
                </div>
                <div className="flex gap-3">
                  {selectedRows.length > 0 && (
                    <button onClick={handleDeleteSelected} className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 text-rose-400 px-4 py-2 rounded-lg text-sm font-bold hover:bg-rose-500 hover:text-white transition-all">
                      <Trash2 size={16} /> Eliminar ({selectedRows.length})
                    </button>
                  )}
                  <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-[0_0_10px_rgba(8,145,178,0.3)] transition-all">
                    <PlusCircle size={16} /> Nuevo
                  </button>
                </div>
              </div>

              <div className="bg-[#0F172A] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-slate-800 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="bg-[#151E32] border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400">
                      <th className="p-4 w-10 text-center">
                        <input type="checkbox" onChange={toggleAllRows} checked={selectedRows.length > 0 && selectedRows.length === filteredSchools.length} className="rounded border-slate-600 bg-slate-900 accent-cyan-500 w-4 h-4" />
                      </th>
                      <th className="p-4 font-semibold">Colegio</th>
                      <th className="p-4 font-semibold">Región / Línea</th>
                      <th className="p-4 font-semibold text-center">Avance CoachHub</th>
                      <th className="p-4 font-semibold text-center">STATUS</th>
                      <th className="p-4 font-semibold text-center">Probabilidad</th>
                      <th className="p-4 font-semibold text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {filteredSchools.map((school) => {
                      const total = (Number(school.completedActions)||0) + (Number(school.progressActions)||0) + (Number(school.pendingActions)||0);
                      const pct = total > 0 ? Math.round(((Number(school.completedActions)||0) / total) * 100) : 0;
                      const isSelected = selectedRows.includes(school.id);
                      
                      return (
                        <tr key={school.id} className={`hover:bg-slate-800/40 transition-colors group ${isSelected ? 'bg-cyan-900/10' : ''}`}>
                          <td className="p-4 text-center">
                            <input type="checkbox" checked={isSelected} onChange={() => toggleRowSelection(school.id)} className="rounded border-slate-600 bg-slate-900 accent-cyan-500 w-4 h-4 cursor-pointer" />
                          </td>
                          <td className="p-4">
                            <div className="font-bold text-slate-200 text-sm max-w-[250px] truncate" title={school.name}>{school.name}</div>
                            <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Coach: <span className="text-cyan-400 font-medium">{school.coach}</span></div>
                          </td>
                          <td className="p-4">
                            <div className="text-xs text-slate-300 font-medium">{school.region}</div>
                            <div className="text-[9px] text-fuchsia-400 bg-fuchsia-400/10 border border-fuchsia-400/20 inline-block px-1.5 py-0.5 rounded mt-1 font-bold uppercase tracking-wider">{school.businessLine}</div>
                          </td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-16 lg:w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: `${pct}%` }} />
                              </div>
                              <span className="text-xs font-bold text-slate-300 w-8">{pct}%</span>
                            </div>
                            <div className="flex gap-1.5 justify-center mt-1.5 text-[9px] font-mono text-slate-500">
                              <span className="flex items-center gap-1 text-emerald-400/70" title="Hechas"><CheckCircle size={10}/>{school.completedActions || 0}</span>
                              <span className="flex items-center gap-1 text-amber-400/70" title="Progreso"><Clock size={10}/>{school.progressActions || 0}</span>
                              <span className="flex items-center gap-1 text-rose-400/70" title="Pendientes"><AlertCircle size={10}/>{school.pendingActions || 0}</span>
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <span className={`text-[10px] font-black px-2 py-1 rounded border tracking-widest uppercase ${school.gestionType === 'RENOVACIÓN' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                              {school.gestionType || 'MANTENIMIENTO'}
                            </span>
                          </td>
                          <td className="p-4 text-center">
                            {/* SELECTOR INLINE DE PROBABILIDAD */}
                            <select 
                              value={school.renewal || 'NO DEFINIDA'}
                              onChange={(e) => updateInlineProbabilidad(school.id, e.target.value)}
                              className={`text-xs font-bold px-2 py-1.5 rounded-lg border bg-slate-900 focus:outline-none cursor-pointer tracking-wider uppercase
                                ${school.renewal === 'FIRMADO' ? 'text-purple-400 border-purple-500/30' :
                                  school.renewal === 'ALTA' ? 'text-emerald-400 border-emerald-500/30' : 
                                  school.renewal === 'MEDIA' ? 'text-amber-400 border-amber-500/30' : 
                                  school.renewal === 'BAJA' ? 'text-rose-400 border-rose-500/30' : 'text-slate-400 border-slate-700'}`}
                            >
                              <option value="FIRMADO" className="text-purple-400 bg-slate-900">FIRMADO</option>
                              <option value="ALTA" className="text-emerald-400 bg-slate-900">ALTA</option>
                              <option value="MEDIA" className="text-amber-400 bg-slate-900">MEDIA</option>
                              <option value="BAJA" className="text-rose-400 bg-slate-900">BAJA</option>
                              <option value="NO DEFINIDA" className="text-slate-400 bg-slate-900">NO DEFINIDA</option>
                            </select>
                          </td>
                          <td className="p-4 text-right">
                            <button onClick={() => { setSelectedSchool(school); setIsModalOpen(true); }} className="p-2 bg-slate-800 border border-slate-700 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 rounded-lg transition-all shadow-sm">
                              Editar
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    {filteredSchools.length === 0 && <tr><td colSpan="7" className="p-8 text-center text-slate-500 font-mono text-sm uppercase">No hay colegios que coincidan con los filtros.</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* MODAL DETALLE COLEGIO */}
      {isModalOpen && selectedSchool && (
        <SchoolDetailModal school={selectedSchool} onClose={() => { setIsModalOpen(false); setSelectedSchool(null); }} db={db} userId={user.uid} />
      )}

      {/* MODAL NUEVO COLEGIO */}
      {isAddModalOpen && (
        <AddSchoolModal onClose={() => setIsAddModalOpen(false)} db={db} userId={user.uid} coaches={coaches} regions={regions} />
      )}
    </div>
  );
}

// --- SUBCOMPONENTES ---

function StatCard({ title, value, icon, color, borderColor }) {
  return (
    <div className={`p-4 md:p-5 rounded-2xl border ${borderColor} bg-[#0F172A] shadow-lg flex flex-col relative overflow-hidden`}>
      <div className={`absolute -right-4 -top-4 w-20 h-20 ${color} rounded-full blur-2xl opacity-50`}></div>
      <div className="flex justify-between items-start mb-3"><div className={`p-2 rounded-xl bg-slate-900 border border-slate-800 ${color.replace('10', '20')}`}>{icon}</div></div>
      <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider relative z-10">{title}</h3>
      <div className="text-2xl font-black text-white mt-1 tracking-tight relative z-10">{value}</div>
    </div>
  );
}

function BreakdownTable({ title, data, icon }) {
  return (
    <div className="bg-[#0F172A] rounded-2xl border border-slate-800 shadow-lg overflow-hidden flex flex-col relative">
      <div className="p-4 bg-[#151E32] border-b border-slate-800 flex items-center gap-3">
        <div className="p-1.5 bg-slate-900 rounded-lg border border-slate-800">{icon}</div>
        <h3 className="font-bold text-slate-200 text-sm">{title}</h3>
      </div>
      <div className="p-0 overflow-auto flex-1 max-h-[320px] custom-scrollbar">
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 bg-[#0F172A] shadow-sm z-10">
            <tr className="text-slate-500 text-[9px] uppercase tracking-wider border-b border-slate-800">
              <th className="p-3 font-semibold">Categoría</th>
              <th className="p-3 font-semibold text-center text-purple-400">FIRM</th>
              <th className="p-3 font-semibold text-center text-emerald-400">ALTA</th>
              <th className="p-3 font-semibold text-center text-amber-400">MED</th>
              <th className="p-3 font-semibold text-center text-rose-400">BAJA</th>
              <th className="p-3 font-semibold text-center text-white">Tot</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-3 font-medium text-slate-300 text-xs truncate max-w-[120px]" title={row.name}>{row.name}</td>
                <td className="p-3 text-center text-purple-400 font-bold bg-purple-500/5">{row.FIRMADO}</td>
                <td className="p-3 text-center text-emerald-400 font-bold bg-emerald-500/5">{row.ALTA}</td>
                <td className="p-3 text-center text-amber-400 font-bold bg-amber-500/5">{row.MEDIA}</td>
                <td className="p-3 text-center text-rose-400 font-bold bg-rose-500/5">{row.BAJA}</td>
                <td className="p-3 text-center font-black text-cyan-400 bg-cyan-500/5">{row.total}</td>
              </tr>
            ))}
            {data.length === 0 && <tr><td colSpan="6" className="p-4 text-center text-slate-600 text-xs uppercase tracking-widest">Sin datos</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RenewalBadge({ status }) {
  const styles = {
    FIRMADO: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    ALTA: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    MEDIA: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    BAJA: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    "NO DEFINIDA": "bg-slate-800 text-slate-400 border-slate-700"
  };
  const currentStyle = styles[status] || styles["NO DEFINIDA"];
  return <span className={`px-2 py-1 rounded border text-[10px] uppercase tracking-wider font-bold ${currentStyle}`}>{status || "ND"}</span>;
}

// --- MODAL AGREGAR COLEGIO ---
function AddSchoolModal({ onClose, db, userId, coaches, regions }) {
  const [formData, setFormData] = useState({
    name: '', coach: coaches[0] || 'Sin Asignar', region: regions[0] || 'Sin Región', 
    businessLine: 'Compartir', calendar: 'A', classification: 'AA'
  });

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return alert("El nombre es obligatorio");
    const newId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    await setDoc(doc(db, 'users', userId, 'schools', newId), {
      ...formData,
      completedActions: 0, progressActions: 0, pendingActions: 0,
      renewal: 'NO DEFINIDA', gestionType: 'MANTENIMIENTO',
      updatedAt: new Date().toISOString()
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#0F172A] border border-slate-800 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-5 border-b border-slate-800 bg-[#151E32] flex justify-between items-center">
          <h2 className="text-lg font-bold text-white flex items-center gap-2"><PlusCircle size={20} className="text-cyan-400"/> Nuevo Registro</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white"><X size={20}/></button>
        </div>
        <form onSubmit={handleSave} className="p-6 space-y-4">
          <div><label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">Nombre del Colegio</label><input type="text" autoFocus required value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none" placeholder="Ej. Gimnasio Moderno"/></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">Coach Asignado</label><select value={formData.coach} onChange={e=>setFormData({...formData, coach: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none">{coaches.map(c=><option key={c} value={c}>{c}</option>)}<option value="Otro">Otro...</option></select></div>
            <div><label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">Región / Zona</label><select value={formData.region} onChange={e=>setFormData({...formData, region: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none">{regions.map(r=><option key={r} value={r}>{r}</option>)}<option value="Otra">Otra...</option></select></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">Línea de Negocio</label><input type="text" value={formData.businessLine} onChange={e=>setFormData({...formData, businessLine: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none" /></div>
            <div><label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">Clasificación</label><input type="text" value={formData.classification} onChange={e=>setFormData({...formData, classification: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none" /></div>
          </div>
          <div className="pt-4 flex justify-end gap-3"><button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-800 text-sm font-bold transition-all">Cancelar</button><button type="submit" className="px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold shadow-[0_0_15px_rgba(8,145,178,0.4)] transition-all">Crear Entidad</button></div>
        </form>
      </div>
    </div>
  );
}

// --- MODAL DETALLE (EDICIÓN AVANZADA) ---
function SchoolDetailModal({ school, onClose, db, userId }) {
  const [editing, setEditing] = useState(false);
  const [comments, setComments] = useState([]);
  
  // States editables
  const [formData, setFormData] = useState({
    name: school.name, coach: school.coach, region: school.region,
    businessLine: school.businessLine, calendar: school.calendar, classification: school.classification,
    gestionType: school.gestionType || 'MANTENIMIENTO', renewal: school.renewal || 'NO DEFINIDA',
    completedActions: school.completedActions || 0, progressActions: school.progressActions || 0, pendingActions: school.pendingActions || 0
  });

  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const q = query(collection(db, 'users', userId, 'comments'), where("schoolId", "==", school.id));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(data.sort((a,b) => b.createdAt - a.createdAt));
    });
    return () => unsub();
  }, [db, userId, school.id]);

  const handleSaveStats = async () => {
    await setDoc(doc(db, 'users', userId, 'schools', school.id), {
      ...formData, 
      completedActions: Number(formData.completedActions), progressActions: Number(formData.progressActions), pendingActions: Number(formData.pendingActions),
      updatedAt: new Date().toISOString()
    }, { merge: true });
    setEditing(false);
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    await setDoc(doc(db, 'users', userId, 'comments', Date.now().toString()), { schoolId: school.id, text: newComment, status: 'OPEN', createdAt: Date.now(), resolvedAt: null });
    setNewComment("");
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-end bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0F172A] border-l border-slate-800 w-full max-w-md h-full shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col relative animate-in slide-in-from-right-full">
        <div className="p-6 border-b border-slate-800 bg-[#151E32]">
          {!editing ? (
            <h2 className="text-xl font-bold text-white pr-6 leading-tight">{formData.name}</h2>
          ) : (
            <input type="text" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-bold mb-2" />
          )}
          
          <div className="text-xs text-slate-400 mt-3 grid grid-cols-2 gap-y-2 gap-x-4">
            <p>Coach: {!editing ? <span className="font-semibold text-cyan-400">{formData.coach}</span> : <input type="text" value={formData.coach} onChange={e=>setFormData({...formData, coach:e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded px-1 text-white" />}</p>
            <p>Línea: {!editing ? <span className="font-semibold text-cyan-400">{formData.businessLine}</span> : <input type="text" value={formData.businessLine} onChange={e=>setFormData({...formData, businessLine:e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded px-1 text-white" />}</p>
            <p>Región: {!editing ? <span className="font-semibold text-slate-300">{formData.region}</span> : <input type="text" value={formData.region} onChange={e=>setFormData({...formData, region:e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded px-1 text-white" />}</p>
            <p>C/C: {!editing ? <span className="font-semibold text-slate-300">{formData.calendar}/{formData.classification}</span> : <input type="text" value={formData.classification} onChange={e=>setFormData({...formData, classification:e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded px-1 text-white" />}</p>
          </div>
          <button onClick={onClose} className="p-2 bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 rounded-full transition-colors absolute top-4 right-4"><X size={18} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 pb-24 custom-scrollbar">
          <section className="bg-[#151E32]/50 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="flex justify-between items-center mb-5 relative z-10">
              <h3 className="font-bold text-slate-200 flex items-center gap-2"><Activity size={18} className="text-cyan-400"/> Parámetros de Registro</h3>
              {!editing ? <button onClick={() => setEditing(true)} className="text-xs font-bold text-cyan-400 hover:text-cyan-300 tracking-wider uppercase">Modificar Todo</button>
               : <div className="flex gap-3"><button onClick={() => setEditing(false)} className="text-xs font-semibold text-slate-500 uppercase hover:text-white">Cancelar</button><button onClick={handleSaveStats} className="text-xs font-bold text-emerald-400 uppercase hover:text-emerald-300">Guardar</button></div>}
            </div>

            {editing ? (
              <div className="space-y-4 relative z-10">
                <div className="grid grid-cols-2 gap-3"><label className="text-xs font-bold text-slate-500 uppercase mt-2">STATUS</label><select value={formData.gestionType} onChange={e=>setFormData({...formData, gestionType: e.target.value})} className="bg-slate-900 border border-slate-700 text-white rounded px-2 py-1.5 text-sm focus:border-cyan-500 outline-none"><option value="MANTENIMIENTO">MANTENIMIENTO</option><option value="RENOVACIÓN">RENOVACIÓN</option></select></div>
                <div className="grid grid-cols-2 gap-3"><label className="text-xs font-bold text-slate-500 uppercase mt-2">Probabilidad</label><select value={formData.renewal} onChange={e=>setFormData({...formData, renewal: e.target.value})} className="bg-slate-900 border border-slate-700 text-white rounded px-2 py-1.5 text-sm focus:border-cyan-500 outline-none"><option value="FIRMADO">FIRMADO</option><option value="ALTA">ALTA</option><option value="MEDIA">MEDIA</option><option value="BAJA">BAJA</option><option value="NO DEFINIDA">NO DEFINIDA</option></select></div>
                <hr className="border-slate-800 my-4" />
                <div className="grid grid-cols-2 items-center gap-3"><label className="text-xs font-bold text-emerald-500 uppercase">Ejecutadas</label><input type="number" min="0" value={formData.completedActions} onChange={e=>setFormData({...formData, completedActions: e.target.value})} className="bg-slate-900 border border-emerald-500/30 text-emerald-400 rounded px-3 py-1.5 w-full text-sm outline-none focus:border-emerald-500" /></div>
                <div className="grid grid-cols-2 items-center gap-3"><label className="text-xs font-bold text-amber-500 uppercase">En Curso</label><input type="number" min="0" value={formData.progressActions} onChange={e=>setFormData({...formData, progressActions: e.target.value})} className="bg-slate-900 border border-amber-500/30 text-amber-400 rounded px-3 py-1.5 w-full text-sm outline-none focus:border-amber-500" /></div>
                <div className="grid grid-cols-2 items-center gap-3"><label className="text-xs font-bold text-rose-500 uppercase">Pendientes</label><input type="number" min="0" value={formData.pendingActions} onChange={e=>setFormData({...formData, pendingActions: e.target.value})} className="bg-slate-900 border border-rose-500/30 text-rose-400 rounded px-3 py-1.5 w-full text-sm outline-none focus:border-rose-500" /></div>
              </div>
            ) : (
              <div className="space-y-5 relative z-10">
                <div className="flex gap-2">
                  <span className={`px-2 py-1 rounded border text-[10px] uppercase tracking-wider font-bold ${formData.gestionType === 'RENOVACIÓN' ? 'bg-purple-500/10 text-purple-400 border-purple-500/30' : 'bg-blue-500/10 text-blue-400 border-blue-500/30'}`}>{formData.gestionType}</span>
                  <RenewalBadge status={formData.renewal} />
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/20"><div className="text-2xl font-black text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">{formData.completedActions}</div><div className="text-[9px] uppercase tracking-widest font-bold text-emerald-600 mt-1">Hechas</div></div>
                  <div className="bg-amber-500/5 p-3 rounded-xl border border-amber-500/20"><div className="text-2xl font-black text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">{formData.progressActions}</div><div className="text-[9px] uppercase tracking-widest font-bold text-amber-600 mt-1">Curso</div></div>
                  <div className="bg-rose-500/5 p-3 rounded-xl border border-rose-500/20"><div className="text-2xl font-black text-rose-400 drop-shadow-[0_0_8px_rgba(251,113,133,0.5)]">{formData.pendingActions}</div><div className="text-[9px] uppercase tracking-widest font-bold text-rose-600 mt-1">Espera</div></div>
                </div>
              </div>
            )}
          </section>

          <section>
            <h3 className="font-bold text-slate-200 flex items-center gap-2 mb-4"><MessageSquare size={18} className="text-cyan-400"/> Log de Seguimiento</h3>
            <form onSubmit={handleAddComment} className="flex gap-2 mb-5">
              <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Registrar evento o nota..." className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              <button type="submit" disabled={!newComment.trim()} className="bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 p-2.5 rounded-lg hover:bg-cyan-500 hover:text-white disabled:opacity-30 transition-all"><Plus size={20} /></button>
            </form>

            <div className="space-y-3">
              {comments.length === 0 ? <p className="text-center text-xs text-slate-600 py-6 font-mono tracking-widest uppercase">Sin registros</p> : 
                comments.map(c => {
                  const isResolved = c.status === 'RESOLVED';
                  return (
                    <div key={c.id} className={`p-3.5 rounded-xl border transition-all ${isResolved ? 'bg-slate-900/50 border-slate-800' : 'bg-[#151E32] border-slate-700 shadow-md'}`}>
                      <div className="flex gap-3 items-start">
                        <button onClick={async () => await setDoc(doc(db,'users',userId,'comments',c.id), {...c, status: isResolved?'OPEN':'RESOLVED', resolvedAt: isResolved?null:Date.now()},{merge:true})} className={`mt-0.5 shrink-0 transition-all hover:scale-110 ${isResolved ? 'text-emerald-500/50' : 'text-slate-600 hover:text-emerald-400'}`}><CheckCircle size={18} /></button>
                        <div className="flex-1">
                          <p className={`text-sm ${isResolved ? 'text-slate-500 line-through decoration-slate-600' : 'text-slate-300'}`}>{c.text}</p>
                          <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-500 font-mono">
                            <span>{new Date(c.createdAt).toLocaleDateString('es-CO')}</span>
                            {isResolved && c.resolvedAt && <span className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">Check: {new Date(c.resolvedAt).toLocaleDateString('es-CO')}</span>}
                          </div>
                        </div>
                        <button onClick={async () => await deleteDoc(doc(db,'users',userId,'comments',c.id))} className="text-slate-600 hover:text-rose-400 opacity-0 md:group-hover:opacity-100 transition-opacity p-1"><X size={14} /></button>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}