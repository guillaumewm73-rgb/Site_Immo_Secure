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
            'mb-4 inline-flex rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] laptop:px-3.5',
            theme === 'light' && 'border border-accent/15 bg-accent-soft/60 text-accent shadow-soft',
            theme === 'dark' && 'border border-white/12 bg-white/10 text-white/75'
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          'text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.95rem] xl:text-5xl',
          theme === 'light' && 'text-ink',
          theme === 'dark' && 'text-white'
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 max-w-3xl text-pretty text-base leading-relaxed sm:text-lg lg:text-[1.12rem] xl:text-xl',
            align === 'center' && 'mx-auto',
            theme === 'light' && 'text-steel',
            theme === 'dark' && 'text-white/80'
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
