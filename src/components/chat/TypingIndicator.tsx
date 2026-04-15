export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900">
        <span className="text-xs font-bold text-brand-600 dark:text-brand-400">AI</span>
      </div>
      <div className="glass rounded-2xl rounded-bl-md px-4 py-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-typing" />
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-typing" style={{ animationDelay: '200ms' }} />
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-typing" style={{ animationDelay: '400ms' }} />
        </div>
      </div>
    </div>
  );
}
