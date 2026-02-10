'use client';

import { useEffect, useState } from 'react';
import KpiCard from './KpiCard';
import SkeletonCard from '@/components/ui/SkeletonCard';
import { kpiData } from '@/data/kpiData';
import { useFilterStore } from '@/store/filterStore';
import { KPI } from '@/types/dashboard';

// Simple fake API with delay
function fakeFetch<T>(data: T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(data);
      } else {
        reject('Failed to fetch KPI data');
      }
    }, 1000);
  });
}

export default function KpiSection() {
  const { dateRange, userType } = useFilterStore();
  const [data, setData] = useState<KPI[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);

        const res = await fakeFetch(kpiData);

        // Apply simple filter logic for demo
        const filteredData = res.map((item) => {
          let multiplier = 1;
          if (dateRange === '7days') multiplier = 0.2;
          if (dateRange === '30days') multiplier = 0.5;

          let value = Number(item.value);

          // For user type, just demo adjustment
          if (userType !== 'all') {
            value = Math.round(value * multiplier);
          } else {
            value = Math.round(value * multiplier);
          }

          return { ...item, value };
        });

        setData(filteredData);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data?.map((item) => (
        <KpiCard key={item.title} data={item} />
      ))}
    </div>
  );
}
