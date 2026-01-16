'use client';
import { Button, Row } from '@umami/react-zen';
import Link from 'next/link';
import TextBlock from '@/components/TextBlock';
import { CLOUD_URL } from '@/lib/constants';
import useQueryString from '@/components/hooks/useQueryString';

export default function QuickStart() {
  const query = useQueryString({ ref: 'umami-quickstart' });
  const url = `${CLOUD_URL}/signup${query}`;

  return (
    <div className="grid gap-[30px] p-5">
      <TextBlock align="center" size="lg">
        <header>Simple setup</header>
        <h2>Get up and running in minutes</h2>
      </TextBlock>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
        <div className="flex flex-col items-center text-center">
          <div className="text-xl font-bold rounded-full bg-base-2 flex items-center justify-center w-[60px] h-[60px] self-center">
            1
          </div>
          <div className="text-lg font-bold my-[var(--spacing-6)]">Sign up</div>
          <div className="text-font-muted">
            Create a <Link href={url}>free</Link> account on Umami Cloud.
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-xl font-bold rounded-full bg-base-2 flex items-center justify-center w-[60px] h-[60px] self-center">
            2
          </div>
          <div className="text-lg font-bold my-[var(--spacing-6)]">Install tracking code</div>
          <div className="text-font-muted">
            Add our privacy-friendly tracking code to your website.
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-xl font-bold rounded-full bg-base-2 flex items-center justify-center w-[60px] h-[60px] self-center">
            3
          </div>
          <div className="text-lg font-bold my-[var(--spacing-6)]">View your data</div>
          <div className="text-font-muted">
            Data will start appearing on your dashboard immediately. It&apos;s that easy.
          </div>
        </div>
      </div>
      <Row justifyContent="center">
        <Button variant="primary" size="lg" asChild>
          <a href={url}>Get started</a>
        </Button>
      </Row>
    </div>
  );
}
