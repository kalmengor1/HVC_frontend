import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, UserCircle, LogOut, Home } from "lucide-react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isProfile = location.pathname === "/perfil";

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shrink-0 shadow-sm z-10 relative">
      <h1 className="text-xl font-bold text-brand-text">Consagrada Chapetona</h1>
      <div className="relative">
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="text-brand-text flex items-center hover:opacity-75 transition-opacity"
        >
          <Menu className="w-7 h-7" strokeWidth={1.5} />
        </button>

        {showMenu && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setShowMenu(false)}
            ></div>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 py-1 z-50 overflow-hidden">
              <button 
                onClick={() => {
                  setShowMenu(false);
                  navigate(isProfile ? "/dashboard" : "/perfil");
                }}
                className="w-full flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {isProfile ? (
                  <>
                    <Home className="w-4 h-4 mr-2 text-gray-500" strokeWidth={1.5} />
                    Inicio
                  </>
                ) : (
                  <>
                    <UserCircle className="w-4 h-4 mr-2 text-gray-500" strokeWidth={1.5} />
                    Perfil
                  </>
                )}
              </button>
              <div className="border-t border-gray-100 my-1"></div>
              <button 
                onClick={() => {
                  setShowMenu(false);
                  navigate("/");
                }} 
                className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 font-medium transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2 text-red-500" strokeWidth={1.5} />
                Cerrar sesión
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
