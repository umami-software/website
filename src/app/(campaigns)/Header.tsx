'use client';
import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import LinkButton from '@/components/LinkButton';
import useQueryString from '@/components/hooks/useQueryString';
import { CLOUD_URL } from '@/lib/constants';

export default function Header() {
  const query = useQueryString({ ref: 'umami-landing-page' });

  return (
    <header className="flex min-h-[100px] items-center justify-between">
      <CompanyLogo />
      <nav className="flex mx-10 justify-end flex-1">
        <Link href="/pricing">Pricing</Link>
      </nav>
      <div className="block self-center" data-umami-event="lp-get-started-button">
        <LinkButton href={`${CLOUD_URL}/signup${query}`} variant="primary">
          Get started
        </LinkButton>
      </div>
    </header>
  );
}
