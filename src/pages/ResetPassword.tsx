import React, { useState } from "react";
import { User, CreditCard, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [cui, setCui] = useState("");
  const navigate = useNavigate();

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !cui) {
      toast.error("Por favor completa todos los campos.");
      return;
    }

    // Simulación de recuperación de contraseña
    toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
      loading: "Enviando instrucciones...",
      success: () => {
        setTimeout(() => navigate("/"), 2000);
        return "Se han enviado las instrucciones a tu correo";
      },
      error: "Error al enviar instrucciones",
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

        {/* Formulario de recuperación */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-brand-surface md:bg-white relative overflow-y-auto">
          <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-100 md:border-none md:shadow-none z-10">
            <div className="flex flex-col items-center mb-8">
              <img
                src="/Logo.webp"
                alt="HVC Logo"
                className="w-36 h-36 mb-4 object-contain"
              />
              <h2 className="text-2xl font-bold text-brand-text mb-1 text-center">
                Recuperar Contraseña
              </h2>
              <p className="text-sm text-gray-500 text-center max-w-[280px]">
                Ingresa tu correo y CUI para recibir las instrucciones de reinicio.
              </p>
            </div>

            <form onSubmit={handleReset} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-brand-text mb-1.5 ml-1"
                >
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-sm placeholder:text-gray-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cui"
                  className="block text-xs font-semibold text-brand-text mb-1.5 ml-1"
                >
                  CUI (Documento de Identificación)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <CreditCard className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                  </div>
                  <input
                    id="cui"
                    type="text"
                    placeholder="Ingresa tu CUI sin guiones"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all text-sm placeholder:text-gray-400"
                    value={cui}
                    onChange={(e) => setCui(e.target.value)}
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#4fa8e2] hover:bg-[#3a7fb0] text-white font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] text-sm cursor-pointer"
                >
                  Enviar Instrucciones
                </button>
              </div>

              <div className="flex justify-center mt-6">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-1.5" />
                  Volver al inicio de sesión
                </Link>
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
