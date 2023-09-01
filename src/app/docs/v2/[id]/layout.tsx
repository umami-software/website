'use client';
import { Column, Row } from 'react-basics';
import Menu from '../../Menu';

export default function DocsLayout({ children }) {
  return (
    <Row className="docs">
      <Column defaultSize={3} xs={12} sm={12} md={12}>
        <Menu />
      </Column>
      <Column defaultSize={9} xs={12} sm={12} md={12}>
        <article style={{ padding: '0 20px' }}>{children}</article>
      </Column>
    </Row>
  );
}
