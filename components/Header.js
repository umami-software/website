// Packages
import Link from 'next/link';
import classNames from 'classnames';

// Own (components, utils, etc.)
import CompanyLogo from 'components/CompanyLogo';
import HamburgerButton from 'components/HamburgerButton';
import { REPO_URL } from 'lib/constants';
import GitHub from 'assets/github.svg';

// Styles
import styles from 'components/Header.module.css';

const LINKS = [
  {
    href: '/features',
    children: 'Features',
  },
  {
    href: '/docs',
    children: 'Docs',
  },
  {
    href: '/community',
    children: 'Community',
  },
  {
    href: '/pricing',
    children: 'Pricing',
  },
]

export default function Header() {
  return (
    <header>
      <article className={classNames('container', styles.header)}>
        <section className={styles.title}>
          <CompanyLogo />
        </section>
        <nav className={styles.links}>
          {LINKS.map((link) => <Link key={link.children} {...link} />)}
        </nav>
        <section className={styles.buttons}>
          <Link href={REPO_URL}>
            <a target="_blank">
              <GitHub />
            </a>
          </Link>
        </section>
        <HamburgerButton />
      </article>
    </header>
  );
}
