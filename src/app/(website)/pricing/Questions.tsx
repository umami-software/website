'use client';
import { useState } from 'react';
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
    answer: `Oravo Cloud's free trial will last for 14 days from the purchase date. The trial gives you full access to all features in that plan.
      At the end of the trial, you will be billed the regular amount. You can cancel your trial at any time within the trial period for no cost.`,
  },
  {
    question: 'How will I be billed?',
    answer: `Billing occurs on a monthly basis and you can cancel at any time. 
    If you upgraded to a paid plan via a trial, your first invoice git checkout will arrive after your trial period ends.`,
  },
  {
    question: 'Where are your servers located?',
    answer: `Oravo Cloud servers are located in the US and EU and adhere to GDPR and CCPA regulations.`,
  },
  {
    question: 'Can I export my data?',
    answer: `Yes, all of your data can be exported from Oravo Cloud.`,
  },
];

export default function Questions() {
  return (
    <>
      <TextBlock align="center">
        <h2>Frequently asked questions</h2>
      </TextBlock>
      <div className={styles.questions}>
        {questions.map(({ question, answer }) => {
          return (
            <Question key={question} question={question}>
              {answer}
            </Question>
          );
        })}
      </div>
    </>
  );
}

const Question = ({ question, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.question} onClick={() => setExpanded(state => !state)}>
      <div className={styles.text} data-oravo-event="faq-question-click">
        {question}
        <Icon className={styles.icon} rotate={expanded ? 90 : 0} size="sm">
          <Icons.Chevron />
        </Icon>
      </div>
      {expanded ? <div className={styles.answer}>{children}</div> : null}
    </div>
  );
};
