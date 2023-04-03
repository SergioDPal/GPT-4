import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <section
    className="gpt4__header section__padding"
    id="home"
  >
    <main className="gpt4__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with GPT-4 OpenAI
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>

      <section className="gpt4__header-content__input">
        <input
          type="email"
          placeholder="Your Email Address"
        />
        <button type="button">Get Started</button>
      </section>

      <section className="gpt4__header-content__people">
        <img
          src={people}
          alt="people"
        />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </section>
    </main>

    <section className="gpt4__header-image">
      <img
        src={ai}
        alt="ai"
      />
    </section>
  </section>
);

export default Header;
