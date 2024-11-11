import React from 'react';
import { Settings as SettingsIcon, Bell, Moon, Globe, Shield, HelpCircle, Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SettingsItem from '../components/SettingsItem';

const Settings = () => {
  return (
    <div className="flex-1 flex flex-col h-screen pb-24">
      <PageHeader title="Settings" icon={SettingsIcon} />
      
      <div className="flex-1 overflow-auto">
        <div className="divide-y divide-gray-800">
          <SettingsItem
            icon={Bell}
            title="Notifications"
            description="Manage your notification preferences"
            toggle
            value="on"
          />
          <SettingsItem
            icon={Moon}
            title="Dark Mode"
            description="Toggle dark/light theme"
            toggle
            value="on"
          />
          <SettingsItem
            icon={Globe}
            title="Language"
            description="Choose your preferred language"
            value="English"
          />
          <SettingsItem
            icon={Shield}
            title="Privacy & Security"
            description="Manage your privacy settings"
          />
          <SettingsItem
            icon={HelpCircle}
            title="Help & Support"
            description="Get help with VivoBot"
          />
          <SettingsItem
            icon={Info}
            title="About"
            description="Version 1.0.0"
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;