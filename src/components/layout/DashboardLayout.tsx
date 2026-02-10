'use client';

import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} />

      <div className="flex-1">
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
