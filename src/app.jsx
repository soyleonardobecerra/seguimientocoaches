import React, { useState, useEffect, useMemo } from 'react';
import { 
  LayoutDashboard, Users, School, Upload, Download, 
  Search, CheckCircle, Clock, AlertCircle, X, Plus, 
  MessageSquare, ChevronRight, FileSpreadsheet, BarChart3,
  TrendingUp, TrendingDown, Minus, Menu, PieChart
} from 'lucide-react';

// --- FIREBASE IMPORTS ---
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, doc, setDoc, deleteDoc, writeBatch, query, where } from 'firebase/firestore';

// --- TU CONFIGURACIÓN REAL DE FIREBASE ---
const firebaseConfig = {
  apiKey: "AIzaSyDkGPd6MDL29Z8LY3EhPMLEXU_Q3_D8jLc",
  authDomain: "seguimiento-coaches.firebaseapp.com",
  projectId: "seguimiento-coaches",
  storageBucket: "seguimiento-coaches.firebasestorage.app",
  messagingSenderId: "782682130999",
  appId: "1:782682130999:web:5651867d9579d873cecdb2",
  measurementId: "G-PFED0LN5EQ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

export default function App() {
  // Estado de Autenticación
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Estados de Datos
  const [schools, setSchools] = useState([]);
  
  // Estados de UI
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCoach, setFilterCoach] = useState('Todos');
  const [filterRegion, setFilterRegion] = useState('Todas');
  
  // Estado para el modal de carga y menú móvil
  const [isUploading, setIsUploading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cargar script de XLSX dinámicamente para procesar Excel
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  // --- FIREBASE AUTHENTICATION (Ingreso Anónimo) ---
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
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // --- OBTENER DATOS DE FIRESTORE ---
  useEffect(() => {
    if (!user) return;

    // Ruta limpia de producción: users/{userId}/schools
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

  // --- DERIVACIONES Y CÁLCULOS ---
  const coaches = useMemo(() => [...new Set(schools.map(s => s.coach).filter(Boolean))], [schools]);
  const regions = useMemo(() => [...new Set(schools.map(s => s.region).filter(Boolean))], [schools]);

  const filteredSchools = useMemo(() => {
    return schools.filter(school => {
      const matchSearch = school.name?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCoach = filterCoach === 'Todos' || school.coach === filterCoach;
      const matchRegion = filterRegion === 'Todas' || school.region === filterRegion;
      return matchSearch && matchCoach && matchRegion;
    });
  }, [schools, searchTerm, filterCoach, filterRegion]);

  const stats = useMemo(() => {
    const totalSchools = filteredSchools.length;
    let totalActions = 0;
    let completed = 0;
    let progress = 0;
    let pending = 0;
    let highRenewal = 0;

    filteredSchools.forEach(s => {
      totalActions += (Number(s.completedActions) || 0) + (Number(s.progressActions) || 0) + (Number(s.pendingActions) || 0);
      completed += Number(s.completedActions) || 0;
      progress += Number(s.progressActions) || 0;
      pending += Number(s.pendingActions) || 0;
      if (s.renewal === 'ALTA') highRenewal++;
    });

    const completionRate = totalActions > 0 ? Math.round((completed / totalActions) * 100) : 0;

    return { totalSchools, totalActions, completed, progress, pending, highRenewal, completionRate };
  }, [filteredSchools]);

  // --- FUNCIÓN PARA AGRUPAR DATOS DEL DASHBOARD (ALTA, MEDIA, BAJA) ---
  const getBreakdownBy = (key) => {
    const groups = {};
    filteredSchools.forEach(s => {
      const val = s[key] || 'Sin definir';
      if (!groups[val]) groups[val] = { ALTA: 0, MEDIA: 0, BAJA: 0, 'NO DEFINIDA': 0, total: 0 };
      const status = s.renewal || 'NO DEFINIDA';
      groups[val][status] = (groups[val][status] || 0) + 1;
      groups[val].total++;
    });
    return Object.entries(groups).map(([name, data]) => ({ name, ...data })).sort((a,b) => b.total - a.total);
  };

  const breakdownCoach = useMemo(() => getBreakdownBy('coach'), [filteredSchools]);
  const breakdownRegion = useMemo(() => getBreakdownBy('region'), [filteredSchools]);
  const breakdownLinea = useMemo(() => getBreakdownBy('businessLine'), [filteredSchools]);

  // --- MANEJO DE ARCHIVOS EXCEL (ADAPTADO A TU BASE DE DATOS) ---
  const handleFileUpload = async (e) => {
    if (!user) return;
    const file = e.target.files[0];
    if (!file) return;

    if (!window.XLSX) {
      alert("La librería de Excel se está cargando. Intenta de nuevo en un segundo.");
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        const bstr = evt.target.result;
        const wb = window.XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = window.XLSX.utils.sheet_to_json(ws);

        let batch = writeBatch(db);
        let operationCount = 0;

        for (const row of data) {
          const schoolId = row.ID ? String(row.ID) : `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
          
          // Mapeo con los encabezados exactos que enviaste
          const schoolData = {
            name: row.colegio || row.Colegio || 'Sin Nombre',
            calendar: row.calendario || row.Calendario || 'Sin definir',
            classification: row.clasificacion || row.Clasificacion || 'Sin definir',
            businessLine: row.lineaNegocio || row.LineaNegocio || 'Sin definir',
            coach: row.coach || row.Coach || 'Sin Asignar',
            region: row.regional || row.Regional || 'Sin Región',
            
            // Datos operativos internos (si no vienen en el excel, empiezan en 0 o Mantenimiento)
            completedActions: Number(row.completedActions || 0),
            progressActions: Number(row.progressActions || 0),
            pendingActions: Number(row.pendingActions || 0),
            renewal: row.renewal || row['Probabilidad'] || 'NO DEFINIDA', // ALTA/MEDIA/BAJA
            gestionType: row.gestionType || row['Tipo Gestion'] || 'MANTENIMIENTO', // RENOVACIÓN/MANTENIMIENTO
            updatedAt: new Date().toISOString()
          };

          const docRef = doc(db, 'users', user.uid, 'schools', schoolId);
          batch.set(docRef, schoolData, { merge: true });
          operationCount++;

          if (operationCount >= 490) {
            await batch.commit();
            batch = writeBatch(db);
            operationCount = 0;
          }
        }
        
        if (operationCount > 0) {
          await batch.commit();
        }

        setIsUploading(false);
        e.target.value = null;
        setIsMobileMenuOpen(false);
        alert("¡Base de datos cargada exitosamente!");
      } catch (error) {
        console.error("Error procesando Excel:", error);
        setIsUploading(false);
        alert("Hubo un error procesando el archivo. Revisa que el formato sea correcto.");
      }
    };
    reader.readAsBinaryString(file);
  };

  const downloadTemplateAndData = () => {
    if (!window.XLSX) return;
    
    const exportData = schools.map(s => ({
      ID: s.id,
      colegio: s.name,
      calendario: s.calendar,
      clasificacion: s.classification,
      lineaNegocio: s.businessLine,
      coach: s.coach,
      regional: s.region,
      'Probabilidad': s.renewal,
      'Tipo Gestion': s.gestionType,
      'Acciones Completadas': s.completedActions || 0,
      'Acciones Progreso': s.progressActions || 0,
      'Acciones Pendientes': s.pendingActions || 0
    }));

    if (exportData.length === 0) {
      exportData.push({
        ID: "12345",
        colegio: "Colegio Ejemplo",
        calendario: "A",
        clasificacion: "Premium",
        lineaNegocio: "Bilingüismo",
        coach: "Juan Pérez",
        regional: "Norte"
      });
    }

    const ws = window.XLSX.utils.json_to_sheet(exportData);
    const wb = window.XLSX.utils.book_new();
    window.XLSX.utils.book_append_sheet(wb, ws, "Colegios");
    window.XLSX.writeFile(wb, "Data_Coaches_Colegios.xlsx");
  };

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-indigo-600 font-semibold">Conectando con Firebase...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-800 overflow-hidden relative">
      
      {/* OVERLAY PARA MENÚ MÓVIL */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-indigo-900 text-white flex flex-col shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <LayoutDashboard className="text-indigo-400" />
            CoachTrack<span className="text-indigo-400 text-sm align-top font-black">CRM</span>
          </h1>
          <button className="md:hidden text-indigo-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <p className="px-6 text-indigo-300 text-xs -mt-3 mb-4">Panel de Coordinación</p>

        <nav className="flex-1 px-4 space-y-2 mt-2">
          <button 
            onClick={() => { setCurrentView('dashboard'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${currentView === 'dashboard' ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}
          >
            <BarChart3 size={20} /> Dashboard
          </button>
          <button 
            onClick={() => { setCurrentView('schools'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${currentView === 'schools' ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}
          >
            <School size={20} /> Gestión de Colegios
          </button>
        </nav>

        <div className="p-4 border-t border-indigo-800 space-y-3">
          <div className="relative">
            <input 
              type="file" 
              accept=".xlsx, .xls, .csv" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileUpload}
              disabled={isUploading}
            />
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-700 hover:bg-indigo-600 rounded-lg text-sm font-medium transition-colors">
              {isUploading ? <Clock className="animate-spin" size={16} /> : <Upload size={16} />}
              {isUploading ? 'Cargando...' : 'Subir Excel'}
            </button>
          </div>
          <button 
            onClick={downloadTemplateAndData}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-indigo-600 hover:bg-indigo-800 rounded-lg text-sm font-medium transition-colors"
          >
            <FileSpreadsheet size={16} /> Exportar / Plantilla
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {/* TOPBAR */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shrink-0">
          <div className="flex items-center gap-2 md:gap-4 flex-1">
            <button 
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Buscar colegio..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-48 lg:w-64 transition-all"
              />
            </div>
            <select 
              value={filterCoach} 
              onChange={(e) => setFilterCoach(e.target.value)}
              className="px-2 md:px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-[120px] md:max-w-none"
            >
              <option value="Todos">Coaches</option>
              {coaches.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select 
              value={filterRegion} 
              onChange={(e) => setFilterRegion(e.target.value)}
              className="px-2 md:px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-[120px] md:max-w-none"
            >
              <option value="Todas">Regiones</option>
              {regions.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          
          <div className="flex items-center gap-3 ml-4">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200 shrink-0">
              CO
            </div>
            <span className="text-sm font-medium text-gray-600 hidden md:block">Coordinador</span>
          </div>
        </header>

        {/* SCROLLABLE AREA */}
        <div className="flex-1 overflow-auto p-4 md:p-8">
          
          {currentView === 'dashboard' ? (
            <div className="space-y-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Panorama General</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4">
                  <StatCard title="Total Colegios" value={stats.totalSchools} icon={<School size={24} className="text-blue-600" />} color="bg-blue-50" borderColor="border-blue-200" />
                  <StatCard title="% Avance Acciones" value={`${stats.completionRate}%`} subtitle="Global" icon={<TrendingUp size={24} className="text-indigo-600" />} color="bg-indigo-50" borderColor="border-indigo-200" />
                  <StatCard title="Colegios Renov. ALTA" value={stats.highRenewal} icon={<CheckCircle size={24} className="text-emerald-600" />} color="bg-emerald-50" borderColor="border-emerald-200" />
                  <StatCard title="Acciones Pendientes" value={stats.pending} icon={<AlertCircle size={24} className="text-rose-600" />} color="bg-rose-50" borderColor="border-rose-200" />
                </div>
              </div>

              {/* NUEVAS TABLAS DE DESGLOSE (BI) */}
              <h3 className="text-xl font-bold text-gray-800 mt-10 mb-4">Métricas de Renovación</h3>
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <BreakdownTable title="Por Línea de Negocio" data={breakdownLinea} icon={<PieChart size={18} className="text-indigo-500" />} />
                <BreakdownTable title="Por Regional" data={breakdownRegion} icon={<PieChart size={18} className="text-indigo-500" />} />
                <BreakdownTable title="Por Coach" data={breakdownCoach} icon={<Users size={18} className="text-indigo-500" />} />
              </div>

            </div>
          ) : (
            <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Directorio de Colegios</h2>
                  <p className="text-gray-500 text-sm mt-1">Selecciona un colegio para editar progreso y notas.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                      <th className="p-4 font-semibold">Colegio</th>
                      <th className="p-4 font-semibold">Región / Línea</th>
                      <th className="p-4 font-semibold text-center">Avance</th>
                      <th className="p-4 font-semibold text-center">Gestión / Prob.</th>
                      <th className="p-4 font-semibold text-right">Detalle</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredSchools.map((school) => {
                      const total = (Number(school.completedActions)||0) + (Number(school.progressActions)||0) + (Number(school.pendingActions)||0);
                      const pct = total > 0 ? Math.round(((Number(school.completedActions)||0) / total) * 100) : 0;
                      
                      return (
                        <tr key={school.id} className="hover:bg-gray-50 transition-colors group">
                          <td className="p-4">
                            <div className="font-semibold text-gray-800">{school.name}</div>
                            <div className="text-xs text-gray-400 mt-0.5">Coach: {school.coach}</div>
                          </td>
                          <td className="p-4">
                            <div className="text-sm text-gray-700">{school.region}</div>
                            <div className="text-xs text-indigo-600 bg-indigo-50 inline-block px-2 py-0.5 rounded mt-1">{school.businessLine}</div>
                          </td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${pct}%` }} />
                              </div>
                              <span className="text-sm font-bold text-gray-700 w-8">{pct}%</span>
                            </div>
                            <div className="flex gap-2 justify-center mt-2 text-[10px] font-medium text-gray-500">
                              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> {school.completedActions || 0}</span>
                              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> {school.progressActions || 0}</span>
                              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-rose-500"></div> {school.pendingActions || 0}</span>
                            </div>
                          </td>
                          <td className="p-4 text-center space-y-2">
                            <div>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${school.gestionType === 'RENOVACIÓN' ? 'bg-purple-100 text-purple-800 border-purple-200' : 'bg-blue-100 text-blue-800 border-blue-200'}`}>
                                {school.gestionType || 'MANTENIMIENTO'}
                              </span>
                            </div>
                            <div>
                              <RenewalBadge status={school.renewal} />
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <button 
                              onClick={() => { setSelectedSchool(school); setIsModalOpen(true); }}
                              className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors inline-flex"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    {filteredSchools.length === 0 && (
                      <tr>
                        <td colSpan="5" className="p-8 text-center text-gray-500">
                          No se encontraron colegios con los filtros actuales.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* MODAL DETALLE COLEGIO */}
      {isModalOpen && selectedSchool && (
        <SchoolDetailModal 
          school={selectedSchool} 
          onClose={() => { setIsModalOpen(false); setSelectedSchool(null); }}
          db={db}
          userId={user.uid}
        />
      )}
    </div>
  );
}

// --- SUBCOMPONENTES DE UI ---

function StatCard({ title, value, subtitle, icon, color, borderColor }) {
  return (
    <div className={`p-4 md:p-6 rounded-2xl border ${borderColor} bg-white shadow-sm flex flex-col`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${color}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="text-2xl md:text-3xl font-black text-gray-800 mt-1">{value}</div>
      {subtitle && <p className="text-xs text-gray-400 mt-2">{subtitle}</p>}
    </div>
  );
}

// NUEVO SUBCOMPONENTE: Tabla de desglose para el dashboard
function BreakdownTable({ title, data, icon }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
        {icon}
        <h3 className="font-bold text-gray-800">{title}</h3>
      </div>
      <div className="p-0 overflow-auto flex-1 max-h-[300px]">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-white text-gray-400 text-xs border-b">
              <th className="p-3 font-medium">Categoría</th>
              <th className="p-3 font-medium text-center text-emerald-600">ALTA</th>
              <th className="p-3 font-medium text-center text-yellow-600">MED</th>
              <th className="p-3 font-medium text-center text-rose-600">BAJA</th>
              <th className="p-3 font-medium text-center font-bold">Tot</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-3 font-semibold text-gray-700 truncate max-w-[120px]">{row.name}</td>
                <td className="p-3 text-center text-emerald-700 font-medium bg-emerald-50/30">{row.ALTA}</td>
                <td className="p-3 text-center text-yellow-700 font-medium bg-yellow-50/30">{row.MEDIA}</td>
                <td className="p-3 text-center text-rose-700 font-medium bg-rose-50/30">{row.BAJA}</td>
                <td className="p-3 text-center font-black text-gray-800 bg-gray-50/50">{row.total}</td>
              </tr>
            ))}
            {data.length === 0 && <tr><td colSpan="5" className="p-4 text-center text-gray-400">Sin datos</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RenewalBadge({ status }) {
  const styles = {
    ALTA: "bg-emerald-100 text-emerald-800 border-emerald-200",
    MEDIA: "bg-yellow-100 text-yellow-800 border-yellow-200",
    BAJA: "bg-rose-100 text-rose-800 border-rose-200",
    "NO DEFINIDA": "bg-gray-100 text-gray-600 border-gray-200"
  };
  const currentStyle = styles[status] || styles["NO DEFINIDA"];
  
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold border ${currentStyle}`}>
      {status || "NO DEFINIDA"}
    </span>
  );
}

// --- MODAL DETALLE / CHECKLIST (CON NUEVAS OPCIONES) ---
function SchoolDetailModal({ school, onClose, db, userId }) {
  const [editing, setEditing] = useState(false);
  const [comments, setComments] = useState([]);
  
  const [comp, setComp] = useState(school.completedActions || 0);
  const [prog, setProg] = useState(school.progressActions || 0);
  const [pend, setPend] = useState(school.pendingActions || 0);
  const [renewal, setRenewal] = useState(school.renewal || 'NO DEFINIDA');
  const [gestionType, setGestionType] = useState(school.gestionType || 'MANTENIMIENTO');
  
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (!editing) {
      setComp(school.completedActions || 0);
      setProg(school.progressActions || 0);
      setPend(school.pendingActions || 0);
      setRenewal(school.renewal || 'NO DEFINIDA');
      setGestionType(school.gestionType || 'MANTENIMIENTO');
    }
  }, [school, editing]);

  useEffect(() => {
    const commentsRef = collection(db, 'users', userId, 'comments');
    const q = query(commentsRef, where("schoolId", "==", school.id));
    
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      data.sort((a,b) => b.createdAt - a.createdAt);
      setComments(data);
    });

    return () => unsub();
  }, [db, userId, school.id]);

  const handleSaveStats = async () => {
    const docRef = doc(db, 'users', userId, 'schools', school.id);
    await setDoc(docRef, {
      ...school,
      completedActions: Number(comp),
      progressActions: Number(prog),
      pendingActions: Number(pend),
      renewal: renewal,
      gestionType: gestionType,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    setEditing(false);
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const commentId = Date.now().toString();
    const docRef = doc(db, 'users', userId, 'comments', commentId);
    
    await setDoc(docRef, {
      schoolId: school.id,
      text: newComment,
      status: 'OPEN',
      createdAt: Date.now(),
      resolvedAt: null
    });
    
    setNewComment("");
  };

  const toggleCommentStatus = async (comment) => {
    const docRef = doc(db, 'users', userId, 'comments', comment.id);
    const isNowResolved = comment.status === 'OPEN';
    
    await setDoc(docRef, {
      ...comment,
      status: isNowResolved ? 'RESOLVED' : 'OPEN',
      resolvedAt: isNowResolved ? Date.now() : null
    }, { merge: true });
  };

  const deleteComment = async (commentId) => {
    const docRef = doc(db, 'users', userId, 'comments', commentId);
    await deleteDoc(docRef);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-in slide-in-from-right-full duration-300 relative">
        <div className="p-4 md:p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-start">
          <div className="pr-8">
            <h2 className="text-xl font-bold text-gray-900 leading-tight">{school.name}</h2>
            <div className="text-xs text-gray-500 mt-2 grid grid-cols-2 gap-2">
              <p>Coach: <span className="font-semibold text-indigo-600">{school.coach}</span></p>
              <p>Línea: <span className="font-semibold text-indigo-600">{school.businessLine}</span></p>
              <p>Región: <span className="font-semibold text-gray-700">{school.region}</span></p>
              <p>Cal/Clas: <span className="font-semibold text-gray-700">{school.calendar} / {school.classification}</span></p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-100 text-gray-500 transition-colors absolute top-4 right-4">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-8 pb-24">
          <section className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <BarChart3 size={18} className="text-indigo-500"/> Clasificación y Avance
              </h3>
              {!editing ? (
                <button onClick={() => setEditing(true)} className="text-xs font-semibold text-indigo-600 hover:underline">Editar</button>
              ) : (
                <div className="flex gap-2">
                  <button onClick={() => setEditing(false)} className="text-xs font-semibold text-gray-500 hover:underline">Cancelar</button>
                  <button onClick={handleSaveStats} className="text-xs font-semibold text-emerald-600 hover:underline">Guardar</button>
                </div>
              )}
            </div>

            {editing ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <label className="text-xs font-bold text-gray-600 uppercase">Tipo Gestión</label>
                  <select value={gestionType} onChange={e=>setGestionType(e.target.value)} className="border rounded px-2 py-1 text-sm font-semibold">
                    <option value="MANTENIMIENTO">MANTENIMIENTO</option>
                    <option value="RENOVACIÓN">RENOVACIÓN</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <label className="text-xs font-bold text-gray-600 uppercase">Prob. Cierre</label>
                  <select value={renewal} onChange={e=>setRenewal(e.target.value)} className="border rounded px-2 py-1 text-sm font-semibold">
                    <option value="ALTA">ALTA</option>
                    <option value="MEDIA">MEDIA</option>
                    <option value="BAJA">BAJA</option>
                    <option value="NO DEFINIDA">NO DEFINIDA</option>
                  </select>
                </div>
                
                <hr className="my-2" />
                
                <div className="grid grid-cols-2 items-center gap-4">
                  <label className="text-sm font-medium text-emerald-700">Acc. Hechas</label>
                  <input type="number" min="0" value={comp} onChange={e=>setComp(e.target.value)} className="border rounded px-3 py-1.5 w-full text-sm" />
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <label className="text-sm font-medium text-yellow-700">Acc. Progreso</label>
                  <input type="number" min="0" value={prog} onChange={e=>setProg(e.target.value)} className="border rounded px-3 py-1.5 w-full text-sm" />
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <label className="text-sm font-medium text-rose-700">Acc. Pendientes</label>
                  <input type="number" min="0" value={pend} onChange={e=>setPend(e.target.value)} className="border rounded px-3 py-1.5 w-full text-sm" />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded text-xs font-bold border ${school.gestionType === 'RENOVACIÓN' ? 'bg-purple-100 text-purple-800 border-purple-200' : 'bg-blue-100 text-blue-800 border-blue-200'}`}>
                    {school.gestionType || 'MANTENIMIENTO'}
                  </span>
                  <RenewalBadge status={school.renewal} />
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center mt-4">
                  <div className="bg-emerald-50 p-2 md:p-3 rounded-lg border border-emerald-100">
                    <div className="text-xl md:text-2xl font-black text-emerald-600">{school.completedActions || 0}</div>
                    <div className="text-[9px] md:text-[10px] uppercase font-bold text-emerald-800 mt-1">Hechas</div>
                  </div>
                  <div className="bg-yellow-50 p-2 md:p-3 rounded-lg border border-yellow-100">
                    <div className="text-xl md:text-2xl font-black text-yellow-600">{school.progressActions || 0}</div>
                    <div className="text-[9px] md:text-[10px] uppercase font-bold text-yellow-800 mt-1">Progreso</div>
                  </div>
                  <div className="bg-rose-50 p-2 md:p-3 rounded-lg border border-rose-100">
                    <div className="text-xl md:text-2xl font-black text-rose-600">{school.pendingActions || 0}</div>
                    <div className="text-[9px] md:text-[10px] uppercase font-bold text-rose-800 mt-1">Faltan</div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section>
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4">
              <MessageSquare size={18} className="text-indigo-500"/> Notas y Checklist
            </h3>
            
            <form onSubmit={handleAddComment} className="flex gap-2 mb-4">
              <input 
                type="text" 
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Añadir seguimiento..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              <button type="submit" disabled={!newComment.trim()} className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors">
                <Plus size={20} />
              </button>
            </form>

            <div className="space-y-3">
              {comments.length === 0 ? (
                <p className="text-center text-sm text-gray-400 py-4 italic">No hay notas para este colegio.</p>
              ) : (
                comments.map(comment => {
                  const isResolved = comment.status === 'RESOLVED';
                  const dateStr = new Date(comment.createdAt).toLocaleDateString('es-CO', { day: '2-digit', month: 'short' });
                  
                  return (
                    <div key={comment.id} className={`p-3 rounded-lg border transition-all ${isResolved ? 'bg-gray-50 border-gray-200' : 'bg-white border-indigo-100 shadow-sm'}`}>
                      <div className="flex gap-3 items-start">
                        <button 
                          onClick={() => toggleCommentStatus(comment)}
                          className={`mt-0.5 shrink-0 transition-colors ${isResolved ? 'text-emerald-500 hover:text-gray-400' : 'text-gray-300 hover:text-emerald-500'}`}
                        >
                          <CheckCircle size={20} className={isResolved ? 'fill-emerald-50' : ''} />
                        </button>
                        <div className="flex-1">
                          <p className={`text-sm ${isResolved ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                            {comment.text}
                          </p>
                          <div className="flex items-center gap-3 mt-2 text-[10px] text-gray-400 flex-wrap">
                            <span>Reportado: {dateStr}</span>
                            {isResolved && comment.resolvedAt && (
                              <span className="text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">
                                Resuelto el {new Date(comment.resolvedAt).toLocaleDateString('es-CO')}
                              </span>
                            )}
                          </div>
                        </div>
                        <button onClick={() => deleteComment(comment.id)} className="text-gray-300 hover:text-red-500 md:opacity-0 md:group-hover:opacity-100 transition-opacity p-1">
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}