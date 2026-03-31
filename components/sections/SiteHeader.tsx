import Image from 'next/image';
import Link from 'next/link';
import { company, ctaLabels, navLinks } from '@/content/siteContent';
import { Container } from '@/components/ui/Container';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-white/92 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-3 sm:h-20 sm:gap-4">
        <Link href="#top" className="group inline-flex items-center gap-2.5 sm:gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl shadow-soft sm:h-10 sm:w-10">
            <Image
              src="/logo-bolt.svg"
              alt="Logo Immo Secure"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-ink">{company.agency}</span>
            <span className="hidden text-xs text-slate-500 sm:inline">{company.offerName}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
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
            className="hidden rounded-full border border-line px-4 py-2 text-xs font-semibold text-steel transition hover:border-steel/50 hover:text-deep sm:inline-flex"
          >
            {company.phoneDisplay}
          </Link>
          <Link href="#contact" className="btn-primary px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm">
            <span className="sm:hidden">Diagnostic</span>
            <span className="hidden sm:inline">{ctaLabels.secondary}</span>
          </Link>
        </div>
      </Container>
    </header>
  );
}
