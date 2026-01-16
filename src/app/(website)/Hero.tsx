'use client';
import { Button, Column, Heading, Row, Text } from '@umami/react-zen';
import Link from 'next/link';
import ContentImage from '@/components/ContentImage';
import useQueryString from '@/components/hooks/useQueryString';
import { CLOUD_URL } from '@/lib/constants';
import Companies from './Companies';

export default function Hero() {
  const query = useQueryString({ ref: 'umami-hero' });

  return (
    <Column gap="6" className="mt-[100px]" alignItems="center">
      <Heading size="6" align="center">
        The modern analytics platform
        <br /> for effortless insights.
      </Heading>
      <Text color="muted" size="4" as="p">
        Umami makes it easy to collect, analyze, and understand your website data &mdash; so you can
        focus on <strong>growth</strong>
      </Text>
      <Row justifyContent="center" gap="3" style={{ zIndex: 1 }}>
        <Button variant="primary" size="lg" asChild>
          <Link href={`${CLOUD_URL}/signup${query}`} data-umami-event="get-started-button">
            Get started
          </Link>
        </Button>
      </Row>
      <div className="max-w-[800px] mx-auto perspective-[2000px] preserve-3d text-center pt-10 [&_img]:rounded-[10px] [&_img]:w-full [&_img]:h-auto [&_img]:self-center [&_img]:[transform:rotateX(35deg)_rotateY(-20deg)_rotateZ(5deg)_translateZ(120px)] [&_img]:shadow-[0_10px_20px_rgba(0,0,0,0.3)] [&_img]:origin-center [&_img]:[mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_70%,rgba(0,0,0,0))] [&_img]:border [&_img]:border-black/20">
        <ContentImage src="/images/app.jpg" />
      </div>
      <Companies />
    </Column>
  );
}
