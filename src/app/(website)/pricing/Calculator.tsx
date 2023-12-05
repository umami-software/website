'use client';
import { useState } from 'react';
import { Radio, RadioGroup, Dropdown, Item } from 'react-basics';
import classNames from 'classnames';
import styles from './Calculator.module.css';

const tiers = [
  { price: 0, events: '10K' },
  { price: 9, events: '100K' },
  { price: 19, events: '250K' },
  { price: 29, events: '500K' },
  { price: 49, events: '1M' },
  { price: 99, events: '2.5M' },
  { price: 189, events: '5M' },
  { price: 369, events: '10M' },
  { price: 899, events: '25M' },
  { price: 1699, events: '50M' },
  { price: null, events: '50M+' },
];

export default function Calculator() {
  const [tier, setTier] = useState(0);
  const [billing, setBilling] = useState('Monthly');
  const selected = tiers[tier];
  const isAnnual = billing === 'Annual';

  const handleBillingSelect = value => {
    setBilling(value);
  };

  const handleTierSelect = value => {
    setTier(value);
  };

  console.log('selectedKey', billing);

  return (
    <div className={styles.calculator}>
      <div className={styles.body}>
        <h1>Pro plan pricing</h1>
        <div className={styles.billing}>
          <RadioGroup
            className={styles.radio}
            name="billing"
            items={['Monthly', 'Annual']}
            selectedKey={billing}
            onSelect={handleBillingSelect}
            layout="horizontal"
          >
            {item => {
              return <Radio key={item}>{item}</Radio>;
            }}
          </RadioGroup>
          {isAnnual && <div className={styles.tag}>20% savings</div>}
        </div>
        <div className={styles.slider}>
          <input
            className={styles.range}
            type="range"
            min="0"
            max={tiers.length - 1}
            value={tier}
            onChange={e => handleTierSelect(e.target.value)}
          />
          <div className={styles.ticks}>
            {tiers.map(({ events }, index) => (
              <div
                key={index}
                className={classNames(styles.tick, { [styles.selected]: +tier === index })}
                onClick={() => handleTierSelect(index)}
              >
                {events}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.select}>
          <h3>Monthly events</h3>
          <Dropdown
            className={styles.dropdown}
            items={tiers}
            value={tiers[tier].events}
            onChange={key => handleTierSelect(key)}
          >
            {({ events }, index) => <Item key={index}>{events}</Item>}
          </Dropdown>
        </div>
        <div className={styles.result}>
          <div className={styles.events}>
            Up to <strong>{selected.events}</strong> events / month
          </div>
          <div className={styles.price}>
            {isAnnual && selected.price !== null && (
              <span className={styles.strike}>{`$${(selected.price * 12).toLocaleString()}`}</span>
            )}
            <strong>
              {selected.price !== null
                ? `$${Math.floor(selected.price * (isAnnual ? 12 * 0.8 : 1)).toLocaleString()}`
                : 'Contact us'}
            </strong>
            {selected.price !== null && <span>{` / ${isAnnual ? 'year' : 'month'}`}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
