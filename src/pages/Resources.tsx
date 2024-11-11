import React from 'react';
import { BookOpen, Video, FileText, Lightbulb } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Resources = () => {
  const resources = [
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Learn through interactive video content',
      count: '24 videos'
    },
    {
      icon: FileText,
      title: 'Articles & Guides',
      description: 'In-depth written resources',
      count: '56 articles'
    },
    {
      icon: Lightbulb,
      title: 'Tips & Tricks',
      description: 'Quick learning snippets',
      count: '38 tips'
    }
  ];

  return (
    <div className="flex-1 flex flex-col h-screen pb-24">
      <PageHeader title="Learning Resources" icon={BookOpen} />
      
      <div className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
          {resources.map(({ icon: Icon, title, description, count }) => (
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
                <p className="text-xs text-emerald-400 mt-1">{count}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;