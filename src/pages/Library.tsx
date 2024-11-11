import React from 'react';
import { Library as LibraryIcon, Book, Code, Brain, Palette } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Library = () => {
  const categories = [
    { icon: Book, title: 'Education', count: 42 },
    { icon: Code, title: 'Programming', count: 35 },
    { icon: Brain, title: 'Psychology', count: 28 },
    { icon: Palette, title: 'Arts & Culture', count: 31 }
  ];

  return (
    <div className="flex-1 flex flex-col h-screen pb-24">
      <PageHeader title="Topic Library" icon={LibraryIcon} />
      
      <div className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
          {categories.map(({ icon: Icon, title, count }) => (
            <button
              key={title}
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors"
            >
              <div className="p-3 bg-emerald-900/50 rounded-xl">
                <Icon size={24} className="text-emerald-400" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-gray-400">{count} topics</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;