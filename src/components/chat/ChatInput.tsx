'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ChatInput({ onSend, isLoading }: { onSend: (msg: string) => void; isLoading: boolean }) {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setValue('');
    if (ref.current) ref.current.style.height = 'auto';
  };

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${Math.min(ref.current.scrollHeight, 160)}px`;
    }
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-strong flex items-end gap-2 rounded-2xl p-2">
          <textarea
            ref={ref}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKey}
            onInput={handleInput}
            placeholder="Ask about education, career, health resources..."
            rows={1}
            className="flex-1 resize-none bg-transparent text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none py-2 px-2 max-h-40"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={!value.trim() || isLoading}
            className={cn(
              'flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200',
              value.trim() && !isLoading
                ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md active:scale-95'
                : 'bg-gray-100 text-gray-400 dark:bg-gray-800 cursor-not-allowed'
            )}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">
          AI responses are informational only. Always verify with professionals.
        </p>
      </div>
    </div>
  );
}
