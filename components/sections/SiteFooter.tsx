import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { company } from '@/content/siteContent';

export function SiteFooter() {
  return (
    <footer className="border-t border-line/80 bg-surface-alt/70 py-10">
      <Container className="flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {company.agency} · {company.offerName}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={`mailto:${company.email}`} className="font-medium transition hover:text-deep">
            {company.email}
          </Link>
          <Link href={`tel:${company.phoneHref}`} className="font-medium transition hover:text-deep">
            {company.phoneDisplay}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
