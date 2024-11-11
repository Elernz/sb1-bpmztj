import React from 'react';
import { UserCircle, Mail, Key, Bookmark, Clock, LogOut } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SettingsItem from '../components/SettingsItem';

const Profile = () => {
  return (
    <div className="flex-1 flex flex-col h-screen pb-24">
      <PageHeader title="Profile" icon={UserCircle} />
      
      <div className="p-4">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-3">
            <UserCircle size={64} className="text-white" />
          </div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-400">Free Plan</p>
        </div>

        <div className="bg-gray-800/50 rounded-xl overflow-hidden">
          <SettingsItem
            icon={Mail}
            title="Email"
            value="john@example.com"
          />
          <SettingsItem
            icon={Key}
            title="Change Password"
          />
          <SettingsItem
            icon={Bookmark}
            title="Saved Items"
            description="View your bookmarked conversations"
          />
          <SettingsItem
            icon={Clock}
            title="Chat History"
            description="View your past conversations"
          />
          <SettingsItem
            icon={LogOut}
            title="Sign Out"
            description="Log out of your account"
          />
        </div>

        <button className="mt-6 w-full bg-emerald-500 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
          Upgrade to Premium
        </button>
      </div>
    </div>
  );
};

export default Profile;