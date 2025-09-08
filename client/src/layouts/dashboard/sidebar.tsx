import React from 'react';
import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Calendar,
  FileText,
  Home,
  Settings,
  Users,
  Briefcase,
  Target,
} from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'Career Goals',
    href: '/dashboard/goals',
    icon: Target,
  },
  {
    title: 'Job Applications',
    href: '/dashboard/applications',
    icon: Briefcase,
    badge: '12',
  },
  {
    title: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
  },
  {
    title: 'Calendar',
    href: '/dashboard/calendar',
    icon: Calendar,
  },
  {
    title: 'Documents',
    href: '/dashboard/documents',
    icon: FileText,
  },
  {
    title: 'Network',
    href: '/dashboard/network',
    icon: Users,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

const DashboardSidebar: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-900">Career Compass</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
                '[&.active]:bg-blue-100 [&.active]:text-blue-700'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="flex-1">{item.title}</span>
              {item.badge && (
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
          <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;