import { BarChart3 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ParticipationData {
  name: string;
  value: number;
  color: string;
}

interface ParticipationChartProps {
  data: ParticipationData[];
}

export default function ParticipationChart({ data }: ParticipationChartProps) {
  return (
    <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-brand-primary text-white px-5 py-3 flex items-center">
        <BarChart3 className="w-5 h-5 mr-2" />
        <h3 className="font-semibold">Participación</h3>
      </div>
      <div className="p-3 md:p-5 flex flex-row items-center">
        {/* Leyenda */}
        <div className="w-1/4 flex flex-col space-y-2">
          {data.map((entry) => (
            <div
              key={entry.name}
              className="flex items-center text-[10px] md:text-xs text-gray-600 leading-tight"
            >
              <span
                className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mr-1.5 shrink-0"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="truncate">{entry.name}</span>
            </div>
          ))}
        </div>

        {/* Gráfico */}
        <div className="w-3/4 h-48 md:h-80 relative min-w-0 min-h-[192px] md:min-h-[320px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
            minWidth={0}
            minHeight={0}
          >
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius="95%"
                dataKey="value"
                stroke="none"
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                }) => {
                  const RADIAN = Math.PI / 180;
                  // Calcular el radio para posicionar el texto en el medio de la rebanada
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={14}
                      fontWeight="bold"
                    >
                      {`${value}%`}
                    </text>
                  );
                }}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
