'use client';

import dynamic from 'next/dynamic';
import AdminOnlyChart from './AdminOnlyChart';
import { Role } from '@/types/role';

const ChartsSection = dynamic(
  () => import('./ChartsSection'),
  { ssr: false }
);

interface Props {
  role: Role;
}

export default function ChartsWrapper({ role }: Props) {
  return (
    <div className="mt-10 space-y-6">
      {/* Lazy-loaded charts */}
      <ChartsSection />

      {/* Role-based rendering */}
      {role === 'admin' && <AdminOnlyChart />}
    </div>
  );
}
