'use client';
import { useState } from 'react';
import { Icon, Icons } from '@umami/react-zen';
import styles from './Questions.module.css';
import TextBlock from '@/components/TextBlock';

const questions = [
  {
    question: 'Is Oravo really free?',
    answer: `Yes! Oravo is completely free with no hidden costs, no subscription fees, and no usage limits. You get unlimited events, websites, team members, and data retention at no cost.`,
  },
  {
    question: 'Do I need to provide a credit card?',
    answer: `No credit card required! Simply sign up with your email and start using Oravo immediately. There are no payment details needed since the service is completely free.`,
  },
  {
    question: 'Are there any usage limits?',
    answer: `No, there are no usage limits. You can track unlimited pageviews, custom events, websites, and have unlimited team members. All features are included in the free plan.`,
  },
  {
    question: 'Where are your servers located?',
    answer: `Oravo Cloud servers are located in the US and EU and adhere to GDPR and CCPA regulations for maximum privacy and compliance.`,
  },
  {
    question: 'Can I export my data?',
    answer: `Yes, all of your data can be exported from Oravo Cloud at any time. Your data belongs to you and you have full control over it.`,
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
