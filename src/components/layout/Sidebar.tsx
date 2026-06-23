import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Megaphone, Users, FileText, CalendarCheck, LogOut, UserCircle } from "lucide-react";

export const navItems = [
  { name: "Inicio", path: "/dashboard", icon: Home },
  { name: "Convocatorias", path: "/convocatorias", icon: Megaphone },
  { name: "Comisiones", path: "/comisiones", icon: Users },
  { name: "Estado de cuenta", path: "/estado-cuenta", icon: FileText },
  { name: "Reservas", path: "/reservas", icon: CalendarCheck },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 shrink-0">
      <div className="p-6 flex flex-col items-center border-b border-gray-100">
        <img src="/Logo.webp" alt="Logo" className="w-20 h-20 object-contain mb-2" />
        <h2 className="text-center font-bold text-brand-primary-dark leading-tight">
          Consagrada<br />Chapetona
        </h2>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-brand-primary text-white font-medium shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" strokeWidth={isActive ? 2 : 1.5} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Acciones de Usuario (Perfil y Cerrar Sesión) */}
      <div className="p-4 border-t border-gray-100 space-y-1.5 shrink-0 bg-gray-50/50">
        <button 
          onClick={() => navigate("/perfil")}
          className="w-full flex items-center px-3 py-2.5 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-xl transition-all font-medium border border-transparent hover:border-gray-200"
        >
          <UserCircle className="w-5 h-5 mr-3 text-gray-500" strokeWidth={1.5} />
          Perfil
        </button>
        <button 
          onClick={() => navigate("/")}
          className="w-full flex items-center px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 hover:shadow-sm rounded-xl transition-all font-medium border border-transparent hover:border-red-100"
        >
          <LogOut className="w-5 h-5 mr-3 text-red-500" strokeWidth={1.5} />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
