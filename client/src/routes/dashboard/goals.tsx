import { createFileRoute } from '@tanstack/react-router';
import { withLayout } from '@/layouts/layout-manager';
import { Plus, Target, CheckCircle, Clock } from 'lucide-react';

function GoalsComponent() {
  const goals = [
    {
      id: 1,
      title: 'Complete React Certification',
      description: 'Finish the advanced React course and get certified',
      status: 'in-progress',
      progress: 75,
      dueDate: '2024-03-15',
      category: 'Skills'
    },
    {
      id: 2,
      title: 'Land Senior Developer Role',
      description: 'Secure a senior developer position at a tech company',
      status: 'in-progress',
      progress: 40,
      dueDate: '2024-06-01',
      category: 'Career'
    },
    {
      id: 3,
      title: 'Build Portfolio Website',
      description: 'Create a professional portfolio showcasing my projects',
      status: 'completed',
      progress: 100,
      dueDate: '2024-01-30',
      category: 'Portfolio'
    },
    {
      id: 4,
      title: 'Network with 50 Professionals',
      description: 'Connect with industry professionals on LinkedIn',
      status: 'pending',
      progress: 0,
      dueDate: '2024-04-30',
      category: 'Networking'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-600" />;
      default:
        return <Target className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Career Goals</h1>
          <p className="text-gray-600">Track and manage your career objectives</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Goal
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{goals.length}</p>
            <p className="text-sm text-gray-600">Total Goals</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{goals.filter(g => g.status === 'completed').length}</p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{goals.filter(g => g.status === 'in-progress').length}</p>
            <p className="text-sm text-gray-600">In Progress</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-600">{goals.filter(g => g.status === 'pending').length}</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
        </div>
      </div>

      {/* Goals List */}
      <div className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                {getStatusIcon(goal.status)}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(goal.status)}`}>
                      {goal.status.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">
                      {goal.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{goal.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Due: {new Date(goal.dueDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Goals = withLayout(GoalsComponent, 'dashboard');

export const Route = createFileRoute('/dashboard/goals')({
  component: Goals,
});