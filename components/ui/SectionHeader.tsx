import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  title: string;
  description?: string;
  kicker?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({
  title,
  description,
  kicker,
  align = 'left'
}: SectionHeaderProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {kicker ? (
        <p className="mb-3 inline-flex rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">
          {kicker}
        </p>
      ) : null}
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
