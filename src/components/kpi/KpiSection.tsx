import KpiCard from './KpiCard';
import { kpiData } from '@/data/kpiData';

export default function KpiSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpiData.map((item) => (
        <KpiCard key={item.title} data={item} />
      ))}
    </section>
  );
}
