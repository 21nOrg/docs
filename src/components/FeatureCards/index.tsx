import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureCardItem = {
  title: string;
  description?: string;
  icon?: string;
  link?: string;
};

function FeatureCard({ title, description, link }: FeatureCardItem) {
  return (
    <a className={clsx('col col--6', styles.featureCard)}
    href={link}    
    >
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {description && (
          <p className={styles.cardDescription}>{description}</p>
        )}
      </div>
    </a>
  );
}

export default function FeatureCards({ cards }: { cards: FeatureCardItem[] }): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {cards.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
