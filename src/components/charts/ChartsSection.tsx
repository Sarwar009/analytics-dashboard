import RevenueLineChart from './RevenueLineChart';
import OrdersBarChart from './OrdersBarChart';
import UserPieChart from './UserPieChart';

export default function ChartsSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
      <RevenueLineChart />
      <OrdersBarChart />
      <UserPieChart />
    </section>
  );
}
