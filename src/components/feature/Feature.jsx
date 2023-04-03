import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <section className="gpt4__features-container__feature">
    <section className="gpt4__features-container__feature-title">
      <section />
      <h1>{title}</h1>
    </section>
    <section className="gpt4__features-container_feature-text">
      <p>{text}</p>
    </section>
  </section>
);

export { Feature };
