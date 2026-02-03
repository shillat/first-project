// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Hi, I'm Naigaga Shillah.</h1>
        <p>I'm a Software Developer building modern web experiences with React Js.</p>
        <div className="cta-buttons">
          <a href="/projects" className="btn-primary">View My Work</a>
          <a href="https://github.com/shillat" className="btn-secondary">GitHub</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
