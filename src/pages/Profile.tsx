import { User, Mail, Phone, MapPin, Calendar, CreditCard, Cake } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-brand-text mb-2">Mi Perfil</h2>

        {/* Encabezado del Perfil */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-row items-center gap-3 md:gap-5">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0f4c81] rounded-full flex items-center justify-center shrink-0">
            <User
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              strokeWidth={1.5}
            />
          </div>
          <div className="text-left flex-1 min-w-0">
            <h3 className="text-base md:text-xl font-bold text-gray-900 leading-tight truncate">
              Nombre Nombre Apellido Apel
            </h3>
            <p className="text-[10px] md:text-xs text-[#0f4c81] font-bold mt-0.5">
              Socio Activo
            </p>
          </div>
        </div>

        {/* Detalles - Cuadro Único */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 text-lg">
            Información
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="bg-gray-50 p-1.5 rounded-lg shrink-0">
                  <CreditCard
                    className="w-5 h-5 text-gray-500"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5 leading-none">
                    CUI
                  </p>
                  <p className="text-sm font-semibold text-gray-900 leading-none">
                    1234 56789 0101
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-gray-50 p-1.5 rounded-lg shrink-0">
                  <Cake
                    className="w-5 h-5 text-gray-500"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5 leading-none">
                    Fecha de Nacimiento
                  </p>
                  <p className="text-sm font-semibold text-gray-900 leading-none">
                    10 de Mayo, 1990
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-gray-50 p-1.5 rounded-lg shrink-0">
                  <Calendar
                    className="w-5 h-5 text-gray-500"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5 leading-none">
                    Fecha de Ingreso
                  </p>
                  <p className="text-sm font-semibold text-gray-900 leading-none">
                    15 de Agosto, 2021
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="bg-gray-50 p-1.5 rounded-lg shrink-0">
                  <Mail className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5 leading-none">
                    Correo Electrónico
                  </p>
                  <p className="text-sm font-semibold text-gray-900 break-all leading-none">
                    socio@ejemplo.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-gray-50 p-1.5 rounded-lg shrink-0">
                  <Phone className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5 leading-none">
                    Teléfono
                  </p>
                  <p className="text-sm font-semibold text-gray-900 leading-none">
                    +502 1234-5678
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="bg-gray-50 p-1.5 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5 leading-none">
                    Dirección
                  </p>
                  <p className="text-sm font-semibold text-gray-900 leading-none">
                    Ciudad de Guatemala, Guatemala
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
