'use client';
import DashboardLayout from '@/components/layout/DashboardLayout';
import FilterBar from '@/components/ui/FilterBar';
import KpiSection from '@/components/kpi/KpiSection';
import dynamic from 'next/dynamic';
import { Role } from '@/types/role';

const ChartsWrapper = dynamic(() => import('@/components/charts/ChartsSection'), { ssr: false });

export default function Home() {
  const role: Role = 'admin';

  return (
    <DashboardLayout>
      <FilterBar />
      <KpiSection />
      <ChartsWrapper />
    </DashboardLayout>
  );
}
