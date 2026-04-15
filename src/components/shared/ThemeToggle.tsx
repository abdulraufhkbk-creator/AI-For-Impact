'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'flex items-center justify-center w-10 h-10 rounded-xl transition-all hover:bg-gray-100 dark:hover:bg-gray-800',
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className={cn('w-5 h-5 absolute transition-all', theme === 'light' ? 'rotate-0 scale-100 text-amber-500' : 'rotate-90 scale-0')} />
      <Moon className={cn('w-5 h-5 absolute transition-all', theme === 'dark' ? 'rotate-0 scale-100 text-brand-400' : '-rotate-90 scale-0')} />
    </button>
  );
}
