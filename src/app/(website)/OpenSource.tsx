import { Column, Row } from '@umami/react-zen';
import GitHubStats from '@/app/(website)/GitHubStats';
import TextBlock from '@/components/TextBlock';
import LinkButton from '@/components/LinkButton';
import { GITHUB_URL } from '@/lib/constants';

export default function OpenSource() {
  return (
    <Column gap="lg">
      <TextBlock size="lg" align="center">
        <header>Contribute</header>
        <h2>Powered by open source</h2>
        <p>
          Umami is proudly open source. Thousands of developers worldwide can share and contribute
          to the Umami experience.
        </p>
      </TextBlock>
      <Row alignItems="center" justifyContent="center" gap="md">
        <LinkButton href="/docs" variant="outline">
          Read documentation
        </LinkButton>
        <LinkButton href={GITHUB_URL} variant="outline" target="_blank">
          View code repository
        </LinkButton>
      </Row>
      <GitHubStats />
    </Column>
  );
}
