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
    <div className={cn('max-w-4xl', align === 'center' && 'mx-auto text-center')}>
      {kicker ? (
        <p
          className={cn(
            'mb-4 inline-flex rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em]',
            theme === 'light' && 'border border-line/80 bg-white/95 text-steel shadow-soft',
            theme === 'dark' && 'border border-white/20 bg-white/10 text-white/80'
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          'text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl',
          theme === 'light' && 'text-ink',
          theme === 'dark' && 'text-white'
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 max-w-3xl text-pretty text-base leading-relaxed sm:text-lg lg:text-xl',
            align === 'center' && 'mx-auto',
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
