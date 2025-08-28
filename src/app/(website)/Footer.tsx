'use client';
import { Grid, Row, Column, Heading, Text, Container } from '@umami/react-zen';
import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import SocialMedia from '@/components/SocialMedia';

const data = [
  {
    title: 'Product',
    items: [
      { text: 'Features', href: '/features' },
      { text: 'Analytics', href: 'https://analytics.imoogleai.xyz/?ref=oravo-nav-footer' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { text: 'Community', href: '/community' },
      { text: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Company',
    items: [
      { text: 'About', href: '/about' },
      { text: 'Contact', href: '/contact' },
      { text: 'Privacy', href: '/privacy' },
      { text: 'Terms', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <Row as="footer" backgroundColor="2" paddingY="8">
      <Container>
        <Grid
          columns={{ xs: '1fr', md: '1fr minmax(auto, 200px) minmax(auto, 200px) auto' }}
          gap="6"
          marginBottom="6"
        >
          <Column>
            <CompanyLogo />
          </Column>
          {data.map(({ title, items }) => (
            <Column key={title} gap>
              <Heading size="1">{title}</Heading>
              {items.map(({ text, href, target }) => (
                <Link
                  key={text}
                  href={href}
                  target={target || href.startsWith('http') ? '_blank' : undefined}
                >
                  {text}
                </Link>
              ))}
            </Column>
          ))}
        </Grid>
        <Row justifyContent="space-between">
          <SocialMedia />
          <Text size="1">&copy; {new Date().getFullYear()} Oravo Analytics, Inc.</Text>
        </Row>
      </Container>
    </Row>
  );
}
