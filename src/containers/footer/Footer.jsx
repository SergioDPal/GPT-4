import React from 'react';
import gpt4Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <section className="gpt4__footer section__padding">
    <header className="gpt4__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </header>

    <section className="gpt4__footer-btn">
      <p>Request Early Access</p>
    </section>

    <main className="gpt4__footer-links">
      <section className="gpt4__footer-links_copyright">
        <section className="gpt4__footer-links_logo">
          <img
            src={gpt4Logo}
            alt="gpt4_logo"
          />
          <p>GPT 4</p>
        </section>
        <p>
          15008, A Coruña <br /> All Rights Reserved
        </p>
      </section>
      <section className="gpt4__footer-links_section">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </section>
      <section className="gpt4__footer-links_section">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </section>
      <section className="gpt4__footer-links_section">
        <h4>Get in touch</h4>
        <p>15008, A Coruña</p>
        <p>+34 648718775</p>
        <p>sergio.diazpallas@gmail.com</p>
      </section>
    </main>

    <footer className="gpt4__footer-copyright">
      <p>@2023 GPT-4. All rights reserved.</p>
    </footer>
  </section>
);

export default Footer;
