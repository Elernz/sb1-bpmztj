import React from 'react';
import { Users, Code, Languages, Calculator, Palette, BookOpen } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Assistants = () => {
  const assistants = [
    { icon: Code, title: 'Code Assistant', description: 'Help with programming and debugging' },
    { icon: Languages, title: 'Language Tutor', description: 'Learn new languages effectively' },
    { icon: Calculator, title: 'Math Helper', description: 'Solve complex mathematical problems' },
    { icon: Palette, title: 'Creative Assistant', description: 'Get help with design and creativity' },
    { icon: BookOpen, title: 'Study Buddy', description: 'Academic support and study tips' }
  ];

  return (
    <div className="flex-1 flex flex-col h-screen pb-24">
      <PageHeader title="Specialized Assistants" icon={Users} />
      
      <div className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
          {assistants.map(({ icon: Icon, title, description }) => (
            <button
              key={title}
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors"
            >
              <div className="p-3 bg-emerald-900/50 rounded-xl">
                <Icon size={24} className="text-emerald-400" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assistants;