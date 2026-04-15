import { cn, getAvatarColor } from '@/lib/utils';

export default function Avatar({
  name,
  size = 'md',
  className,
}: {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const sizes = { sm: 'w-8 h-8 text-xs', md: 'w-10 h-10 text-sm', lg: 'w-14 h-14 text-lg' };
  const initials = name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className={cn('rounded-full flex items-center justify-center font-semibold', sizes[size], getAvatarColor(name), className)}>
      {initials}
    </div>
  );
}
