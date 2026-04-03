import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { benefits, ctaLabels } from '@/content/siteContent';
import { ArrowRightIcon, BoltIcon, CalendarIcon, ChartIcon, CheckIcon, ShieldIcon, UserGearIcon } from '@/components/ui/Icons';

const icons = [ChartIcon, CalendarIcon, UserGearIcon, CheckIcon, BoltIcon, ShieldIcon];

export function BenefitsSection() {
  return (
    <section id="benefices" className="section-space">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          <div className="panel overflow-hidden border border-white/90 bg-gradient-to-br from-deep to-[#132741] p-7 text-white shadow-card sm:p-8">
            <SectionHeader
              title="Ce que vous gagnez concrètement"
              description="Plus de signatures, moins de pertes, un suivi commercial net."
              kicker="Bénéfices"
              theme="dark"
            />

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.5rem] border border-white/12 bg-white/10 px-5 py-4 text-sm font-medium text-white/90">
                Un système qui rend votre réactivité visible pour le prospect et soutenable pour l’équipe.
              </div>
              <div className="rounded-[1.5rem] border border-white/12 bg-white/10 px-5 py-4 text-sm font-medium text-white/90">
                Une page plus lisible, plus forte, plus conversion pour faire comprendre la valeur sans effort.
              </div>
            </div>

            <Link href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-deep shadow-soft transition duration-300 ease-smooth hover:-translate-y-1 hover:bg-slate-100 sm:w-auto sm:text-base">
              {ctaLabels.primary}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = icons[index] ?? CheckIcon;
              return (
                <article
                  key={benefit.title}
                  className="metric-card p-6"
                >
                  <div className="icon-chip">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink sm:text-xl">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
