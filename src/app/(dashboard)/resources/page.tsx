'use client';

import { mockResources } from '@/data/mock-resources';
import { ExternalLink, CheckCircle, ArrowUp, BookOpen } from 'lucide-react';
import GlassPanel from '@/components/ui/GlassPanel';
import Badge from '@/components/ui/Badge';

export default function ResourcesPage() {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950"><BookOpen className="w-5 h-5 text-brand-500" /></div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Resource Library</h1>
            <p className="text-sm text-gray-500">Curated and verified resources</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockResources.map((r) => (
            <GlassPanel key={r.id} className="p-5 hover:shadow-lg transition-all group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{r.title}</h3>
                {r.is_verified && <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{r.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">{r.tags.slice(0, 3).map((t) => <Badge key={t}>{t}</Badge>)}</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-gray-400"><ArrowUp className="w-3 h-3" /><span>{r.upvotes}</span></div>
                {r.url && <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline">Visit <ExternalLink className="w-3 h-3" /></a>}
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </div>
  );
}
