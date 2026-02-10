import { KPI } from '@/types/dashboard';

interface Props {
  data: KPI;
}

export default function KpiCard({ data }: Props) {
  const isPositive = data.change >= 0;

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition">
      
      <p className="text-gray-500 text-sm">
        {data.title}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {data.value}
      </h3>

      <div className="flex items-center gap-2 mt-4">
        <span
          className={`text-sm font-medium ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isPositive ? '▲' : '▼'} {Math.abs(data.change)}%
        </span>
        <span className="text-xs text-gray-400">
          vs last period
        </span>
      </div>

    </div>
  );
}
