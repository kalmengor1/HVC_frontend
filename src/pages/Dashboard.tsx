import {
  User,
  Banknote,
  PlusCircle,
  CreditCard,
  CheckCircle,
  XCircle,
  FileText,
} from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
import FinancialCard from "../components/dashboard/FinancialCard";
import AttendanceCard from "../components/dashboard/AttendanceCard";
import ParticipationChart from "../components/dashboard/ParticipationChart";

const pieData = [
  { name: "Asistencia", value: 60, color: "#4fa8e2" },
  { name: "Inasistencia", value: 20, color: "#f5e642" },
  { name: "Excusas", value: 20, color: "#ef4444" },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-6">
        {/* User Info */}
        <div className="flex items-center space-x-2.5 px-2">
          <div className="text-brand-text shrink-0">
            <User className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-base font-bold text-brand-text leading-tight">
              Nombre Nombre Apellido Apel
            </h2>
            <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
              Socio
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          <FinancialCard
            title="Saldo"
            value="Q. 0.00"
            icon={<Banknote className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />}
            bgColor="bg-brand-secondary"
            textColor="text-[#1f1c00]"
            iconColor="text-[#4e4800]"
          />
          <FinancialCard
            title="Cargo"
            value="Q. 0.00"
            icon={<PlusCircle className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />}
            bgColor="bg-brand-primary"
          />
          <FinancialCard
            title="Abono"
            value="Q. 0.00"
            icon={<CreditCard className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />}
            bgColor="bg-[#3a7fb0]"
          />

          <AttendanceCard
            title="Asistencias"
            value="0"
            icon={<CheckCircle className="w-5 h-5 text-green-600" strokeWidth={2} />}
          />
          <AttendanceCard
            title="Inasistencias"
            value="0"
            icon={<XCircle className="w-5 h-5 text-red-500" strokeWidth={2} />}
          />
          <AttendanceCard
            title="Excusas"
            value="0"
            icon={<FileText className="w-5 h-5 text-gray-400" strokeWidth={2} />}
          />
        </div>

        <ParticipationChart data={pieData} />
      </div>
    </DashboardLayout>
  );
}
