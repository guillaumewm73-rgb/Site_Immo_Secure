import Link from 'next/link';
import { BoltIcon, BellIcon, CalendarIcon, MessageIcon, PlugIcon, RepeatIcon } from '@/components/ui/Icons';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ctaLabels, deliverablesContent } from '@/content/siteContent';

const icons = [MessageIcon, CalendarIcon, RepeatIcon, BellIcon, BoltIcon, PlugIcon];

export function DeliverablesSection() {
  return (
    <section className="section-space bg-white">
      <Container>
        <SectionHeader
          kicker="Ce que vous recevez"
          title={deliverablesContent.title}
          description={deliverablesContent.description}
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliverablesContent.items.map((item, index) => {
            const Icon = icons[index] ?? BoltIcon;
            return (
              <article key={item.title} className="panel p-5 transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card">
                <div className="inline-flex rounded-lg border border-line bg-surface p-2 text-deep">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="#contact" className="btn-primary w-full sm:w-auto">
            {ctaLabels.primary}
          </Link>
        </div>
      </Container>
    </section>
  );
}
