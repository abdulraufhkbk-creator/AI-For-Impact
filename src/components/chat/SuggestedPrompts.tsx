'use client';

import { GraduationCap, Briefcase, Heart, Scale, BookOpen, HelpCircle } from 'lucide-react';

const prompts = [
  { icon: GraduationCap, label: 'Find scholarships', prompt: 'Help me find scholarship opportunities for college', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400' },
  { icon: Briefcase, label: 'Build my resume', prompt: 'Help me create a strong resume for job applications', color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-400' },
  { icon: Heart, label: 'Health resources', prompt: 'Help me find free or low-cost health clinics', color: 'text-rose-600 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-400' },
  { icon: Scale, label: 'Legal assistance', prompt: 'Where can I find free legal aid?', color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400' },
  { icon: BookOpen, label: 'Learn to code', prompt: 'I want to learn programming. Where should I start?', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400' },
  { icon: HelpCircle, label: 'Community help', prompt: 'Help me find community resources for food and housing', color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20 dark:text-cyan-400' },
];

export default function SuggestedPrompts({ onSelect }: { onSelect: (p: string) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto px-4">
      {prompts.map((item) => (
        <button
          key={item.label}
          onClick={() => onSelect(item.prompt)}
          className="glass group flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${item.color}`}>
            <item.icon className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
