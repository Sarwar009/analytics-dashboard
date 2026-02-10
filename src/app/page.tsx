import DashboardLayout from '@/components/layout/DashboardLayout';
import KpiSection from '@/components/kpi/KpiSection';

export default function Home() {
  return (
    <DashboardLayout>
      <KpiSection />

      <div className="mt-10 text-gray-400">
        Charts coming next...
      </div>
    </DashboardLayout>
  );
}
