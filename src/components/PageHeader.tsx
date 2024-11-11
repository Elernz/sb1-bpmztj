import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  icon?: LucideIcon;
  showBack?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, icon: Icon, showBack = true }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900/95 backdrop-blur-sm border-b border-emerald-800/30 p-4">
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-emerald-400"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        {Icon && <Icon className="text-emerald-400" size={24} />}
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;