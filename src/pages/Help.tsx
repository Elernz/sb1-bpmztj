import React from 'react';
import { HelpCircle, Book, MessageCircle, Mail } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SettingsItem from '../components/SettingsItem';

const Help = () => {
  return (
    <div className="flex-1 flex flex-col h-screen pb-24">
      <PageHeader title="Help & Support" icon={HelpCircle} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-4 space-y-4">
          <div className="bg-gray-800/50 rounded-xl overflow-hidden">
            <SettingsItem
              icon={Book}
              title="User Guide"
              description="Learn how to use VivoBot effectively"
            />
            <SettingsItem
              icon={MessageCircle}
              title="FAQ"
              description="Frequently asked questions"
            />
            <SettingsItem
              icon={Mail}
              title="Contact Support"
              description="Get help from our team"
            />
          </div>
          
          <div className="bg-emerald-900/20 p-4 rounded-xl">
            <h3 className="font-medium mb-2">Need immediate help?</h3>
            <p className="text-sm text-gray-400 mb-4">
              Our support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <button className="w-full bg-emerald-500 text-white py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;