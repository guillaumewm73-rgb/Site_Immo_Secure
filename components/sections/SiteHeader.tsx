import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { company, ctaLabels, navLinks } from '@/content/siteContent';
import { Container } from '@/components/ui/Container';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-5 md:px-6">
      <Container>
        <div className="flex items-center justify-between gap-3 rounded-[1.75rem] border border-line/80 bg-white/92 px-4 py-3 shadow-soft backdrop-blur md:flex-wrap md:px-5 lg:h-20 lg:flex-nowrap lg:rounded-full lg:py-1 xl:px-6">
          <Link
            href="#top"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-3 py-2 shadow-soft sm:gap-3 md:order-1 md:bg-transparent md:px-0 md:py-0 md:shadow-none"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-deep/10 bg-white shadow-soft sm:h-11 sm:w-11">
              <Image
                src="/logo.png"
                alt="Logo Immo Secure"
                width={44}
                height={44}
                priority
                className="h-full w-full rounded-2xl object-cover"
                sizes="44px"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-[0.08em] text-ink">{company.agency}</span>
              <span className="hidden text-xs text-steel lg:inline">{company.offerName}</span>
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-5 rounded-full border border-line bg-white px-4 py-2.5 md:order-3 md:flex md:w-full lg:order-2 lg:w-auto lg:flex-1 lg:gap-5 lg:px-4 lg:py-2.5 xl:gap-7 xl:px-5 xl:py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-steel transition-colors duration-200 hover:text-accent laptop:text-[13px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 md:order-2 md:ml-auto lg:order-3 lg:ml-0">
            <Link
              href="#contact"
              className="btn-primary px-4 py-2.5 text-xs md:px-5 md:py-3 md:text-sm lg:px-4 xl:px-6"
            >
              <span className="md:hidden">{ctaLabels.short}</span>
              <span className="hidden items-center gap-2 md:inline-flex xl:hidden">
                {ctaLabels.short}
                <ArrowRightIcon className="h-4 w-4" />
              </span>
              <span className="hidden items-center gap-2 xl:inline-flex">
                {ctaLabels.primary}
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
