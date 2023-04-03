import React from 'react';
import { Feature } from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Phasellus ac tortor ac urna tincidunt efficitur. Fusce pulvinar odio dui, et mollis felis convallis in. Praesent diam est, posuere eget libero eget.',
  },
  {
    title: 'Become the tended active',
    text: 'Vivamus molestie auctor diam, eu lacinia tellus feugiat ut. Cras lacus urna, convallis ut mauris ultrices.',
  },
  {
    title: 'Think of a good filler',
    text: ' Cras ut odio quis tortor placerat blandit. Nam hendrerit tellus non nunc aliquet malesuada. Nulla facilisi. Etiam sagittis, nibh eget varius vestibulum.',
  },
  {
    title: "Or don't think at all",
    text: 'Suspendisse non accumsan quam. In augue purus, molestie ullamcorper fringilla id, pharetra vitae eros. Vestibulum justo odio, ullamcorper ut nulla quis, viverra laoreet lacus.',
  },
];

const Features = () => (
  <section
    className="gpt4__features section__padding"
    id="features"
  >
    <header className="gpt4__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </header>
    <main className="gpt4__features-container">
      {featuresData.map((item, index) => (
        <Feature
          title={item.title}
          text={item.text}
          key={item.title + index}
        />
      ))}
    </main>
  </section>
);

export default Features;
