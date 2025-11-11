'use client';
import { useState, useRef, useEffect } from 'react';
import { Icon, Icons } from '@umami/react-zen';
import styles from './Questions.module.css';
import TextBlock from '@/components/TextBlock';

const questions = [
  {
    question: 'How is usage measured?',
    answer: `Usage is measured by counting pageviews to a website plus any custom events or custom event properties stored. 
    Each website pageview counts as one event. If you save
    event properties, each data property stored counts as one event.`,
  },
  {
    question: 'How does the free trial work?',
    answer: `Umami Cloud's free trial will last for 14 days from the purchase date. The trial gives you full access to all features in that plan.
      At the end of the trial, you will be billed the regular amount. You can cancel your trial at any time within the trial period for no cost.`,
  },
  {
    question: 'How will I be billed?',
    answer: `Billing occurs on a monthly basis and you can cancel at any time. 
    If you upgraded to a paid plan via a trial, your first invoice git checkout will arrive after your trial period ends.`,
  },
  {
    question: 'Where are your servers located?',
    answer: `Umami Cloud servers are located in the US and EU and adhere to GDPR and CCPA regulations.`,
  },
  {
    question: 'Can I export my data?',
    answer: `Yes, all of your data can be exported from Umami Cloud.`,
  },
];

export default function Questions() {
  return (
    <>
      <TextBlock align="center">
        <h2>Frequently asked questions</h2>
      </TextBlock>
      <div className={styles.questions}>
        {questions.map(({ question, answer }) => (
          <AccordionItem key={question} question={question} answer={answer} />
        ))}
      </div>
    </>
  );
}

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(expanded ? contentRef.current.scrollHeight : 0);
    }
  }, [expanded]);

  const toggle = () => setExpanded(prev => !prev);

  return (
    <div
      className={styles.item}
      onClick={toggle}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
    >
      <div className={styles.header}>
        <span className={styles.question}>{question}</span>
        <Icon className={`${styles.icon} ${expanded ? styles.rotated : ''}`} size="sm">
          <Icons.Chevron />
        </Icon>
      </div>
      <div className={styles.content} style={{ height }} aria-hidden={!expanded}>
        <div ref={contentRef} className={styles.answer}>
          {answer}
        </div>
      </div>
    </div>
  );
};
