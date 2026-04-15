'use client';

import { useState } from 'react';
import { Settings, Shield, Bell, Globe, Trash2 } from 'lucide-react';
import GlassPanel from '@/components/ui/GlassPanel';
import Button from '@/components/ui/Button';

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} className={`relative w-11 h-6 rounded-full transition-colors ${on ? 'bg-brand-600' : 'bg-gray-300 dark:bg-gray-700'}`}>
      <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${on ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
  );
}

export default function SettingsPage() {
  const [consent, setConsent] = useState(true);
  const [notifs, setNotifs] = useState(false);
  const [lang, setLang] = useState('en');

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950"><Settings className="w-5 h-5 text-brand-500" /></div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Settings</h1>
            <p className="text-sm text-gray-500">Manage preferences and privacy</p>
          </div>
        </div>

        <div className="space-y-4">
          <GlassPanel className="p-5">
            <div className="flex items-center gap-3 mb-4"><Shield className="w-5 h-5 text-brand-500" /><h2 className="text-base font-semibold text-gray-900 dark:text-white">Privacy & Data</h2></div>
            <div className="flex items-center justify-between mb-4">
              <div><p className="text-sm font-medium text-gray-800 dark:text-gray-200">Data Collection Consent</p><p className="text-xs text-gray-500 mt-0.5">Allow anonymized data to improve the service</p></div>
              <Toggle on={consent} onToggle={() => setConsent(!consent)} />
            </div>
            <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
              <Button variant="danger" size="sm"><Trash2 className="w-4 h-4" />Delete All My Data</Button>
              <p className="text-xs text-gray-400 mt-2">Permanently deletes all conversations and profile data.</p>
            </div>
          </GlassPanel>

          <GlassPanel className="p-5">
            <div className="flex items-center gap-3 mb-4"><Bell className="w-5 h-5 text-brand-500" /><h2 className="text-base font-semibold text-gray-900 dark:text-white">Notifications</h2></div>
            <div className="flex items-center justify-between">
              <div><p className="text-sm font-medium text-gray-800 dark:text-gray-200">Push Notifications</p><p className="text-xs text-gray-500 mt-0.5">Alerts about new resources</p></div>
              <Toggle on={notifs} onToggle={() => setNotifs(!notifs)} />
            </div>
          </GlassPanel>

          <GlassPanel className="p-5">
            <div className="flex items-center gap-3 mb-4"><Globe className="w-5 h-5 text-brand-500" /><h2 className="text-base font-semibold text-gray-900 dark:text-white">Language</h2></div>
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
              <option value="zh">中文</option>
            </select>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
