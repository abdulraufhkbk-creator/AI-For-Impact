'use client';

import { Menu, Sparkles, Settings, LogOut } from 'lucide-react';
import ThemeToggle from '@/components/shared/ThemeToggle';
import Avatar from '@/components/ui/Avatar';
import { useState } from 'react';

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-gradient hidden sm:inline">AI for Impact</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <div className="relative">
          <button onClick={() => setShowMenu(!showMenu)} className="p-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
            <Avatar name="Demo User" size="sm" />
          </button>
          {showMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
              <div className="absolute right-0 top-12 z-50 w-56 glass-strong rounded-xl p-2 animate-fade-up">
                <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 mb-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Demo User</p>
                  <p className="text-xs text-gray-500">demo@example.com</p>
                </div>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Settings className="w-4 h-4" /> Settings
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
