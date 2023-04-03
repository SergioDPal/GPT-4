import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const BaseMenu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt4">What is GPT4?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section className="gpt4__navbar">
      <section className="gpt4__navbar-links">
        <section className="gpt4__navbar-links_logo">
          <img
            src={logo}
            alt="logo"
          />
          <p>GPT-4</p>
        </section>
        <section className="gpt4__navbar-links_container">
          <BaseMenu />
        </section>
      </section>
      <section className="gpt4__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </section>
      <section className="gpt4__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <section className="gpt4__navbar-menu_container scale-up-center">
            <section className="gpt4__navbar-menu_container-links">
              <BaseMenu />
            </section>
            <section className="gpt4__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </section>
          </section>
        )}
      </section>
    </section>
  );
};

export { NavBar };
