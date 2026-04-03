import Link from 'next/link';
import { ArrowRightIcon, BoltIcon } from '@/components/ui/Icons';
import { company, ctaLabels, navLinks } from '@/content/siteContent';
import { Container } from '@/components/ui/Container';

export function SiteHeader() {
  return (
    <header className="relative z-50 px-4 pt-4 sm:fixed sm:inset-x-0 sm:top-0 sm:px-6">
      <Container>
        <div className="flex items-center justify-between gap-3 py-1 sm:h-20 sm:rounded-full sm:border sm:border-line/80 sm:bg-white/90 sm:px-6 sm:shadow-soft">
          <Link
            href="#top"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-3 py-2 shadow-soft sm:gap-3 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-deep/10 bg-white shadow-soft sm:h-11 sm:w-11">
              <span className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-deep text-white">
                <BoltIcon className="h-4 w-4" />
              </span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-[0.08em] text-ink">{company.agency}</span>
              <span className="hidden text-xs text-steel sm:inline">{company.offerName}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 rounded-full border border-line bg-white px-5 py-3 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-steel transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="#contact" className="btn-primary px-4 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm">
              <span className="sm:hidden">Diagnostic</span>
              <span className="hidden items-center gap-2 sm:inline-flex">
                {ctaLabels.secondary}
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
