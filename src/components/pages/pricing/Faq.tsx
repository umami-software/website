import { Icon, Icons } from 'react-basics';
import styles from './Faq.module.css';
import { useState } from 'react';

const questions = [
  {
    question: 'Does Umami Cloud have a free tier?',
    answer: `Yes! Umami Cloud's Hobby plan is completely free. Great for personal projects and low traffic websites.`,
  },
  {
    question: 'How does the free trial work?',
    answer: `Umami Cloud's free trial will last for 14 days from the purchase date. The trial gives you full access to all features in that plan.
      At the end of the trial, you will be billed the regular amount. You can cancel your trial at any time within the trial period for no cost.`,
  },
  {
    question: 'How will I be billed?',
    answer: `Billing occurs on either a monthly or annual basis. 
    If you upgraded to a paid plan via a trial, your first invoice will arrive after your trial period ends.`,
  },
  {
    question: 'How is usage measured?',
    answer: `Usage is measured by counting hits to a website and any custom events or custom event data stored. Each website hit counts as one event. If you save
    event data, each data property stored counts as one event.`,
  },
  {
    question: 'Where are your servers located?',
    answer: `Umami Cloud servers are located in the EU and adhere to GDPR regulations.`,
  },
  {
    question: 'Can I export my data?',
    answer: `Yes, all of your data can be exported from Umami Cloud.`,
  },
];

export default function Faq() {
  return (
    <div className={styles.faq}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.questions}>
        {questions.map(({ question, answer }) => {
          return (
            <Question key={question} question={question}>
              {answer}
            </Question>
          );
        })}
      </div>
    </div>
  );
}

const Question = ({ question, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.question} onClick={() => setExpanded(state => !state)}>
      <div>
        <Icon className={styles.icon} rotate={expanded ? 0 : -90}>
          <Icons.ChevronDown />
        </Icon>
        {question}
      </div>
      {expanded ? <div className={styles.answer}>{children}</div> : null}
    </div>
  );
};
