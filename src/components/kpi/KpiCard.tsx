import { KPI } from '@/types/dashboard';
import { memo } from 'react';

interface Props {
  data: KPI;
}

function KpiCard({ data }: Props) {
  const positive = data.change >= 0;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <p className="text-gray-500 text-sm">{data.title}</p>

      {/* Format number with commas */}
      <h3 className="text-2xl font-bold mt-2">
        {data.value.toLocaleString()}
      </h3>

      <span
        className={`text-sm mt-3 inline-block ${
          positive ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {positive ? '▲' : '▼'} {Math.abs(data.change)}%
      </span>
    </div>
  );
}

// Memoize for performance
export default memo(KpiCard);
