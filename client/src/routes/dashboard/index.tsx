import { createFileRoute } from '@tanstack/react-router';
import { withLayout } from '@/layouts/layout-manager';
import { BarChart3, Briefcase, Target, TrendingUp } from 'lucide-react';

function DashboardComponent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your career progress overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Applications</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <Briefcase className="h-8 w-8 text-blue-600" />
          </div>
          <p className="text-xs text-green-600 mt-2">+2 from last week</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Career Goals</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <Target className="h-8 w-8 text-green-600" />
          </div>
          <p className="text-xs text-green-600 mt-2">3 completed this month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Interview Rate</p>
              <p className="text-2xl font-bold text-gray-900">25%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-600" />
          </div>
          <p className="text-xs text-green-600 mt-2">+5% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Network Connections</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <BarChart3 className="h-8 w-8 text-orange-600" />
          </div>
          <p className="text-xs text-green-600 mt-2">+12 this week</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Applications</h3>
          <div className="space-y-3">
            {[
              { company: 'Tech Corp', position: 'Senior Developer', status: 'Interview Scheduled', date: '2 days ago' },
              { company: 'StartupXYZ', position: 'Full Stack Engineer', status: 'Application Sent', date: '5 days ago' },
              { company: 'BigTech Inc', position: 'Software Engineer', status: 'Under Review', date: '1 week ago' },
            ].map((app, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium text-gray-900">{app.position}</p>
                  <p className="text-sm text-gray-600">{app.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-600">{app.status}</p>
                  <p className="text-xs text-gray-500">{app.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Tasks</h3>
          <div className="space-y-3">
            {[
              { task: 'Prepare for Tech Corp interview', due: 'Tomorrow', priority: 'High' },
              { task: 'Update LinkedIn profile', due: 'This week', priority: 'Medium' },
              { task: 'Follow up with StartupXYZ', due: 'Next week', priority: 'Low' },
            ].map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium text-gray-900">{task.task}</p>
                  <p className="text-sm text-gray-600">Due: {task.due}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  task.priority === 'High' ? 'bg-red-100 text-red-800' :
                  task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Dashboard = withLayout(DashboardComponent, 'dashboard');

export const Route = createFileRoute('/dashboard/')({
  component: Dashboard,
});