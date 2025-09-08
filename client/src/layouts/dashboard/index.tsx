import React from 'react';
import type { ReactNode } from 'react';
import DashboardHeader from './header';
import DashboardSidebar from './sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <DashboardHeader />
      </header>

      {/* Main Content Area */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r shadow-sm">
          <DashboardSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;