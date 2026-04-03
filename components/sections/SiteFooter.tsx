import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { company } from '@/content/siteContent';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-deep py-10 text-white">
      <Container className="flex flex-col gap-4 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {company.agency} · {company.offerName}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={`mailto:${company.email}`} className="font-medium transition hover:text-white">
            {company.email}
          </Link>
          <Link href={`tel:${company.phoneHref}`} className="font-medium transition hover:text-white">
            {company.phoneDisplay}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
