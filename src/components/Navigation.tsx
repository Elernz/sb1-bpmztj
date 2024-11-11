import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, MessageSquare, Library, Settings, Bell, HelpCircle, Users, BookOpen, Star, UserCircle } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: MessageSquare, path: '/chat', label: 'Chat' },
    { icon: Library, path: '/library', label: 'Library' },
    { icon: Users, path: '/assistants', label: 'Assistants' },
    { icon: BookOpen, path: '/resources', label: 'Learn' },
    { icon: Bell, path: '/notifications', label: 'Notifications' },
    { icon: UserCircle, path: '/profile', label: 'Profile' },
    { icon: Settings, path: '/settings', label: 'Settings' },
    { icon: HelpCircle, path: '/help', label: 'Help' },
    { icon: Star, path: '/feedback', label: 'Feedback' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-emerald-800/30 px-4 py-2">
      <div className="max-w-md mx-auto grid grid-cols-5 gap-1">
        {navItems.slice(0, 5).map(({ icon: Icon, path, label }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
              location.pathname === path
                ? 'text-emerald-400 bg-emerald-900/20'
                : 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-900/10'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;