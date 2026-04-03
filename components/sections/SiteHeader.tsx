import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { company, ctaLabels, navLinks } from '@/content/siteContent';
import { Container } from '@/components/ui/Container';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3 rounded-full border border-white/80 bg-white/80 px-4 shadow-soft backdrop-blur-xl sm:h-20 sm:px-6">
          <Link href="#top" className="group inline-flex items-center gap-2.5 sm:gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white shadow-soft sm:h-11 sm:w-11">
              <Image
                src="/logo-bolt.svg"
                alt="Logo Immo Secure"
                width={44}
                height={44}
                className="h-full w-full object-cover"
                priority
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-[0.08em] text-ink">{company.agency}</span>
              <span className="hidden text-xs text-slate-500 sm:inline">{company.offerName}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 rounded-full border border-line/80 bg-surface-alt/70 px-5 py-3 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-deep"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={'tel:' + company.phoneHref}
              className="hidden rounded-full border border-line/90 bg-white/90 px-4 py-2.5 text-xs font-semibold text-steel shadow-soft transition hover:-translate-y-0.5 hover:border-deep/15 hover:text-deep sm:inline-flex"
            >
              {company.phoneDisplay}
            </Link>
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
