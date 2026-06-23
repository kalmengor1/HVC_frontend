import { Link, useLocation } from "react-router-dom";
import { navItems } from "./Sidebar";

export default function BottomNav() {
  const location = useLocation();
  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 z-50 px-2 py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <ul className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.name} className="flex-1">
              <Link
                to={item.path}
                className={`flex flex-col items-center justify-center p-1 ${
                  isActive ? "text-brand-primary" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <item.icon className="w-6 h-6 mb-1" strokeWidth={isActive ? 2 : 1.5} />
                <span className="text-[10px] font-medium leading-none text-center">
                  {item.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
