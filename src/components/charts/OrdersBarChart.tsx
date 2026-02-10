'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ordersData } from '@/data/chartData';

export default function OrdersBarChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="font-semibold mb-4">
        Orders Per Month
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={ordersData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orders" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
