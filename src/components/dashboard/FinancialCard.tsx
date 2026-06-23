import type { ReactNode } from "react";

interface FinancialCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  bgColor: string;
  textColor?: string;
  iconColor?: string;
}

export default function FinancialCard({
  title,
  value,
  icon,
  bgColor,
  textColor = "text-white",
  iconColor,
}: FinancialCardProps) {
  return (
    <div
      className={`${bgColor} rounded-2xl p-3 md:p-5 flex flex-col shadow-sm min-h-[90px] md:min-h-[160px] ${textColor}`}
    >
      <div className={`flex items-center mb-2 shrink-0 ${iconColor || ""}`}>
        <div className="mr-1">{icon}</div>
        <span className="text-xs md:text-sm font-semibold">{title}</span>
      </div>
      <div className="flex-1 flex items-center justify-center text-sm md:text-2xl font-bold text-center w-full">
        {value}
      </div>
    </div>
  );
}
