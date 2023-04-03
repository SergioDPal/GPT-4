import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <section className="gpt4__blog-container_article">
    <section className="gpt4__blog-container_article-image">
      <img
        src={imgUrl}
        alt="blog_image"
      />
    </section>
    <section className="gpt4__blog-container_article-content">
      <section>
        <p>{date}</p>
        <h3>{text}</h3>
      </section>
      <p>Read Full Article</p>
    </section>
  </section>
);

export { Article };
