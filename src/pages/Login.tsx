import React, { useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Por favor completa todos los campos.");
      return;
    }

    // Simulación de inicio de sesión
    toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
      loading: "Iniciando sesión...",
      success: () => {
        setTimeout(() => navigate("/dashboard"), 100);
        return "Sesión iniciada correctamente";
      },
      error: "Error al iniciar sesión",
    });
  };

  return (
    <div className="h-[100dvh] w-full overflow-hidden flex flex-col bg-brand-surface font-sans">
      
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Sección de imagen para escritorio */}
        <div className="hidden md:flex md:w-1/2 bg-brand-surface relative overflow-hidden">
          <img
            src="/Inicio.webp"
            alt="Virgen de Concepción"
            className="absolute inset-0 w-full h-full object-cover drop-shadow-2xl"
          />
        </div>

        {/* Formulario de inicio de sesión */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-brand-surface md:bg-white relative overflow-y-auto">
        <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-100 md:border-none md:shadow-none z-10">
          <div className="flex flex-col items-center mb-8">
            <img
              src="/Logo.webp"
              alt="HVC Logo"
              className="w-36 h-36 mb-4 object-contain"
            />
            <h2 className="text-2xl font-bold text-brand-text mb-1 text-center">
              Iniciar Sesión
            </h2>
            <p className="text-sm text-gray-500 text-center max-w-[280px]">
              Hermandad de la Consagrada Imagen de La Virgen de Concepción
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-brand-text mb-1.5 ml-1"
              >
                Usuario
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                </div>
                <input
                  id="email"
                  type="text"
                  placeholder="Correo electrónico o usuario"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-sm placeholder:text-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-brand-text mb-1.5 ml-1"
              >
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  className="w-full pl-11 pr-11 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-sm placeholder:text-gray-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" strokeWidth={1.5} />
                  ) : (
                    <Eye className="h-5 w-5" strokeWidth={1.5} />
                  )}
                </button>
              </div>
              <div className="flex justify-end mt-2">
                <Link
                  to="/reset-password"
                  className="text-xs text-gray-500 hover:text-brand-primary font-medium transition-colors cursor-pointer"
                >
                  ¿Olvidó su contraseña?
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" fullWidth variant="primary">
                Iniciar Sesión
              </Button>
            </div>
          </form>
        </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="w-full bg-[#0f4c81] text-white py-4 flex flex-col items-center justify-center text-xs z-20 shrink-0">
        <p className="font-semibold mb-0.5">
          Todos los derechos reservados 2026
        </p>
        <p className="text-white/80">Desarrollado por</p>
      </div>
    </div>
  );
}
