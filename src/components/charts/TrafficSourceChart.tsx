'use client';

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { trafficData } from '@/data/trafficData';

const COLORS = ['#22c55e', '#6366f1', '#0ea5e9', '#f97316'];

export default function TrafficSourceChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="font-semibold mb-4">
        Traffic Source
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={trafficData}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
          >
            {trafficData.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
