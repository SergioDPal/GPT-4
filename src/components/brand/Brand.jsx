import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <section className="gpt4__brand section__padding">
    <section>
      <img
        src={google}
        alt="google"
      />
    </section>
    <section>
      <img
        src={slack}
        alt="slack"
      />
    </section>
    <section>
      <img
        src={atlassian}
        alt="atlassian"
      />
    </section>
    <section>
      <img
        src={dropbox}
        alt="dropbox"
      />
    </section>
    <section>
      <img
        src={shopify}
        alt="shopify"
      />
    </section>
  </section>
);

export { Brand };
