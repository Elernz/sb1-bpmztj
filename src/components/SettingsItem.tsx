import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

interface SettingsItemProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  onClick?: () => void;
  toggle?: boolean;
  value?: string;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  icon: Icon,
  title,
  description,
  onClick,
  toggle,
  value
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 hover:bg-gray-800/30 transition-colors"
    >
      <div className="p-2 bg-gray-800 rounded-lg">
        <Icon size={20} className="text-emerald-400" />
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-medium">{title}</h3>
        {description && (
          <p className="text-sm text-gray-400">{description}</p>
        )}
      </div>
      {toggle ? (
        <div className={`w-11 h-6 rounded-full p-1 transition-colors ${
          value === 'on' ? 'bg-emerald-500' : 'bg-gray-700'
        }`}>
          <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
            value === 'on' ? 'translate-x-5' : ''
          }`} />
        </div>
      ) : value ? (
        <span className="text-sm text-gray-400">{value}</span>
      ) : (
        <ChevronRight size={20} className="text-gray-400" />
      )}
    </button>
  );
};

export default SettingsItem;