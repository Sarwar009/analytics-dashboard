import DashboardLayout from '@/components/layout/DashboardLayout';
import KpiSection from '@/components/kpi/KpiSection';
import ChartsSection from '@/components/charts/ChartsSection';
import FilterBar from '@/components/ui/FilterBar';

export default function Home() {
  return (
    <DashboardLayout>
      <FilterBar />
      <KpiSection />
      <ChartsSection />
    </DashboardLayout>
  );
}
