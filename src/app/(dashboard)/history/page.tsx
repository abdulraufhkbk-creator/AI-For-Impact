'use client';

import { mockConversations } from '@/data/mock-conversations';
import { formatRelativeTime } from '@/lib/utils';
import { Clock, MessageCircle, GraduationCap, Briefcase, Heart, Scale } from 'lucide-react';
import GlassPanel from '@/components/ui/GlassPanel';
import Badge from '@/components/ui/Badge';

const icons: Record<string, React.ElementType> = { general: MessageCircle, education: GraduationCap, career: Briefcase, health: Heart, legal: Scale };
const colors: Record<string, 'default' | 'info' | 'success' | 'warning' | 'danger'> = { general: 'default', education: 'info', career: 'success', health: 'danger', legal: 'warning' };

export default function HistoryPage() {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950"><Clock className="w-5 h-5 text-brand-500" /></div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Conversation History</h1>
            <p className="text-sm text-gray-500">{mockConversations.length} conversations</p>
          </div>
        </div>
        <div className="space-y-3">
          {mockConversations.map((conv) => {
            const Icon = icons[conv.category] || MessageCircle;
            return (
              <GlassPanel key={conv.id} className="p-4 hover:shadow-lg transition-all cursor-pointer hover:scale-[1.01]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800"><Icon className="w-5 h-5 text-gray-500" /></div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{conv.title}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{conv.message_count} messages · {formatRelativeTime(conv.updated_at)}</p>
                    </div>
                  </div>
                  <Badge variant={colors[conv.category] || 'default'}>{conv.category}</Badge>
                </div>
              </GlassPanel>
            );
          })}
        </div>
      </div>
    </div>
  );
}
