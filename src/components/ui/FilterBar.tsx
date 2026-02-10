'use client';

import { useFilterStore } from '@/store/filterStore';

export default function FilterBar() {
  const { dateRange, userType, setDateRange, setUserType } = useFilterStore();

  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row gap-4 justify-between mb-6">
      {/* Date Range Buttons */}
      <div className="flex gap-2">
        <FilterButton label="Last 7 Days" active={dateRange === '7days'} onClick={() => setDateRange('7days')} />
        <FilterButton label="Last 30 Days" active={dateRange === '30days'} onClick={() => setDateRange('30days')} />
        <FilterButton label="Last 12 Months" active={dateRange === '12months'} onClick={() => setDateRange('12months')} />
      </div>

      {/* User Type Dropdown */}
      <select
        value={userType}
        onChange={(e) => setUserType(e.target.value as any)}
        className="border rounded-md px-3 py-2"
      >
        <option value="all">All Users</option>
        <option value="free">Free</option>
        <option value="premium">Premium</option>
        <option value="enterprise">Enterprise</option>
      </select>
    </div>
  );
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm transition ${
        active ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
}
