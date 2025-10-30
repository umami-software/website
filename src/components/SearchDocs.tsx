'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './SearchDocs.module.css';
import classNames from 'classnames';

export default function SearchDocs({ navigation }: { navigation: any }) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);

  const allPages: { title: string; url: string; section?: string }[] = [];

  Object.keys(navigation).forEach((sectionKey) => {
    const sections = navigation[sectionKey];
    sections.forEach((sec: any) => {
      if (sec.pages) {
        sec.pages.forEach((p: any) =>
          allPages.push({
            title: p.label,
            url: p.url,
            section: sec.title || sectionKey,
          })
        );
      }
    });
  });

  const results =
    query.trim() === ''
      ? []
      : allPages
          .filter(
            (p) =>
              p.title.toLowerCase().includes(query.toLowerCase()) &&
              query.trim() !== ' '
          )
          .filter(
            (page, index, self) =>
              index === self.findIndex((p) => p.title === page.title)
          );

  useEffect(() => setSelectedIndex(-1), [query]);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setQuery('');
        setSelectedIndex(-1);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          window.location.href = results[selectedIndex].url;
        }
        break;
    }
  };

  useEffect(() => {
    if (selectedIndex >= 0 && resultsRef.current) {
      const selectedElement = resultsRef.current.children[
        selectedIndex
      ] as HTMLElement;
      selectedElement?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedIndex]);

  return (
    <div className={styles['search-docs-container']}>
      <div
        className={classNames(styles['search-wrapper'], {
          [styles.focused]: isFocused,
        })}
      >
        <svg
          className={styles['search-icon']}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className={styles['search-input']}
        />

        {query && (
          <button
            onClick={() => {
              setQuery('');
              setSelectedIndex(-1);
            }}
            className={styles['clear-button']}
            aria-label="Clear search"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}

        <kbd className={styles['keyboard-hint']}>⌘K</kbd>
      </div>

      {query && (
        <div className={styles['search-results-wrapper']}>
          {results.length > 0 ? (
            <ul className={styles['search-results']} ref={resultsRef}>
              {results.map((r, idx) => (
                <li
                  key={`${r.url}-${idx}`}
                  className={classNames(styles['result-item'], {
                    [styles.selected]: selectedIndex === idx,
                  })}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <Link href={r.url} className={styles['result-link']}>
                    <div className={styles['result-content']}>
                      <span className={styles['result-title']}>{r.title}</span>
                      {r.section && (
                        <span className={styles['result-section']}>
                          {r.section}
                        </span>
                      )}
                    </div>
                    <svg
                      className={styles['arrow-icon']}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles['no-results']}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <p>
                No results found for &ldquo;<strong>{query}</strong>&ldquo;
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
