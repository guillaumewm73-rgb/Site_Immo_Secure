import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  title: string;
  description?: string;
  kicker?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
};

export function SectionHeader({
  title,
  description,
  kicker,
  align = 'left',
  theme = 'light'
}: SectionHeaderProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {kicker ? (
        <p
          className={cn(
            'mb-3 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]',
            theme === 'light' && 'border border-line bg-white text-steel',
            theme === 'dark' && 'border border-white/20 bg-white/10 text-white/85'
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          'text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl',
          theme === 'light' && 'text-ink',
          theme === 'dark' && 'text-white'
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-pretty text-base leading-relaxed sm:text-lg',
            theme === 'light' && 'text-slate-600',
            theme === 'dark' && 'text-white/80'
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
