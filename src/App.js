import React from 'react';

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT4,
  Header,
} from './containers';
import { CTA, Brand, NavBar } from './components';

import './App.css';

const App = () => (
  <section className="App">
    <section className="gradient__bg">
      <NavBar />
      <Header />
    </section>
    <Brand />
    <WhatGPT4 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </section>
);

export default App;
