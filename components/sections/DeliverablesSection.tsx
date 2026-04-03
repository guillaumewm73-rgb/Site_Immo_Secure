import Link from 'next/link';
import { ArrowRightIcon, BoltIcon, BellIcon, CalendarIcon, MessageIcon, PlugIcon, RepeatIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ctaLabels, deliverablesContent } from '@/content/siteContent';

const icons = [MessageIcon, CalendarIcon, RepeatIcon, BellIcon, BoltIcon, PlugIcon];

export function DeliverablesSection() {
  return (
    <section className="section-space section-tint">
      <Container>
        <SectionHeader
          kicker="Ce que vous recevez"
          title={deliverablesContent.title}
          description={deliverablesContent.description}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {deliverablesContent.items.map((item, index) => {
            const Icon = icons[index] ?? BoltIcon;
            return (
              <article key={item.title} className="metric-card p-6 sm:p-7">
                <div className="icon-chip">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="#contact" className="btn-primary w-full sm:w-auto">
            {ctaLabels.primary}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
