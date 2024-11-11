import React from 'react';
import { Bell, Star, MessageSquare, Gift } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Notifications = () => {
  const notifications = [
    {
      icon: Star,
      title: 'New Features Available',
      description: 'Check out our latest AI capabilities',
      time: '2h ago'
    },
    {
      icon: MessageSquare,
      title: 'Chat Summary Ready',
      description: 'Your latest conversation summary is ready',
      time: '4h ago'
    },
    {
      icon: Gift,
      title: 'Special Offer',
      description: 'Get 20% off on premium subscription',
      time: '1d ago'
    }
  ];

  return (
    <div className="flex-1 flex flex-col h-screen pb-24">
      <PageHeader title="Notifications" icon={Bell} />
      
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          {notifications.map(({ icon: Icon, title, description, time }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl"
            >
              <div className="p-2 bg-emerald-900/50 rounded-lg">
                <Icon size={20} className="text-emerald-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
                <p className="text-xs text-gray-500 mt-1">{time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;