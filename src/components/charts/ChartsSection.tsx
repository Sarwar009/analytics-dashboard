'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useFilterStore } from '@/store/filterStore';
import { revenueData, ordersData, userData } from '@/data/chartData';
import SkeletonCard from '@/components/ui/SkeletonCard';
import { trafficData } from '@/data/trafficData';
import { fakeFetch } from '@/utils/fakeApi';

const COLORS = ['#60a5fa', '#34d399', '#fbbf24', '#f87171'];

export default function ChartsSection() {
  const { dateRange, userType } = useFilterStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [charts, setCharts] = useState({
    revenue: revenueData,
    orders: ordersData,
    users: userData,
    traffic: trafficData,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);

        const resRevenue = await fakeFetch(revenueData);
        const resOrders = await fakeFetch(ordersData);
        const resUsers = await fakeFetch(userData);
        const resTraffic = await fakeFetch(trafficData);

        // Simple filter simulation
        let multiplier = 1;
        if (dateRange === '7days') multiplier = 0.2;
        if (dateRange === '30days') multiplier = 0.5;

        setCharts({
          revenue: resRevenue.map((d) => ({ ...d, revenue: Math.round(d.revenue * multiplier) })),
          orders: resOrders.map((d) => ({ ...d, orders: Math.round(d.orders * multiplier) })),
          users: resUsers.map((d) => ({ ...d, value: Math.round(d.value * multiplier) })),
          traffic: resTraffic,
        });
      } catch (err) {
        setError(String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dateRange, userType]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {[1, 2, 3, 4].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
      {/* Revenue Line Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-semibold mb-4">Revenue Over Time</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={charts.revenue}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Orders Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-semibold mb-4">Orders Per Month</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={charts.orders}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="orders" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* User Distribution Pie Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-semibold mb-4">User Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={charts.users} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90}>
              {charts.users.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Traffic Source Pie Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-semibold mb-4">Traffic Source</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={charts.traffic} dataKey="value" nameKey="name" outerRadius={90}>
              {charts.traffic.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
