import DashboardLayout from '@/components/layout/DashboardLayout';
import KpiSection from '@/components/kpi/KpiSection';
import ChartsSection from '@/components/charts/ChartsSection';

export default function Home() {
  return (
    <DashboardLayout>
      <KpiSection />
      <ChartsSection />
    </DashboardLayout>
  );
}
