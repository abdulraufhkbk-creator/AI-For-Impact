'use client';

import { cn } from '@/lib/utils';
import { ChatMessage } from '@/types/chat';
import { Bot, User, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState } from 'react';

export default function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user';
  const [feedback, setFeedback] = useState<string | null>(null);

  return (
    <div className={cn('flex gap-3 px-4 py-2 animate-fade-up', isUser ? 'flex-row-reverse' : 'flex-row')}>
      <div
        className={cn(
          'flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full',
          isUser ? 'bg-brand-600 text-white' : 'bg-brand-100 dark:bg-brand-900'
        )}
      >
        {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-brand-600 dark:text-brand-400" />}
      </div>

      <div className="max-w-[75%] space-y-1">
        <div
          className={cn(
            'rounded-2xl px-4 py-3 text-sm leading-relaxed',
            isUser ? 'bg-brand-600 text-white rounded-br-md' : 'glass rounded-bl-md text-gray-800 dark:text-gray-200'
          )}
        >
          {message.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) return <h3 key={i} className="font-bold text-base mt-2 mb-1">{line.replace('## ', '')}</h3>;
            if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-semibold">{line.replace(/\*\*/g, '')}</p>;
            if (line.startsWith('- ')) return <div key={i} className="flex gap-2 ml-1"><span>•</span><span>{line.replace('- ', '')}</span></div>;
            if (line.match(/^\d+\.\s/)) return <p key={i} className="ml-1">{line}</p>;
            if (line === '') return <br key={i} />;
            return <p key={i}>{line}</p>;
          })}
        </div>

        {!isUser && (
          <div className="flex items-center gap-1 ml-1">
            <button onClick={() => setFeedback('helpful')} className={cn('p-1 rounded-lg transition-colors', feedback === 'helpful' ? 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800')}>
              <ThumbsUp className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => setFeedback('not_helpful')} className={cn('p-1 rounded-lg transition-colors', feedback === 'not_helpful' ? 'text-red-500 bg-red-50 dark:bg-red-900/20' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800')}>
              <ThumbsDown className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
