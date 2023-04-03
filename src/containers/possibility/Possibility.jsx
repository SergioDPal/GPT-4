import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <section
    className="gpt4__possibility section__padding"
    id="possibility"
  >
    <section className="gpt4__possibility-image">
      <img
        src={possibilityImage}
        alt="possibility"
      />
    </section>
    <section className="gpt4__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </section>
  </section>
);

export default Possibility;