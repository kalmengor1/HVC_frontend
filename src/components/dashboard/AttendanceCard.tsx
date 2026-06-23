import type { ReactNode } from "react";

interface AttendanceCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

export default function AttendanceCard({
  title,
  value,
  icon,
}: AttendanceCardProps) {
  return (
    <div className="bg-gray-200 rounded-2xl p-3 md:p-5 flex flex-col items-center justify-center text-center shadow-sm">
      <div className="mb-1">{icon}</div>
      <span className="text-[10px] md:text-sm font-semibold text-gray-600 mb-1 break-words w-full">
        {title}
      </span>
      <div className="text-lg md:text-2xl font-bold text-gray-800">{value}</div>
    </div>
  );
}
