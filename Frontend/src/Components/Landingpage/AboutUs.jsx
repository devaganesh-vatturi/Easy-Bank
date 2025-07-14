import React from 'react';
import '../../Styles/AboutUs.css'; // 👈 Adjust path based on your structure
import Header from './Header';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">👨‍💻 About Me & This Project</h1>

      <section className="about-section">
        <h2 className="about-subtitle">👋 Hey, I'm Deva Ganesh Vatturi</h2>
        <p className="about-text">
          I’m a passionate full-stack developer who enjoys building clean, scalable, and practical web applications.
          This platform you're exploring is a result of my constant learning and interest in building real-world projects.
        </p>
        <p className="about-text">
          Feel free to check out my portfolio to see more of my work: <br />
          <a 
            href="https://devaganeshvatturi.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="about-link"
          >
            🔗 Visit My Portfolio
          </a>
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">💡 About This Project</h2>
        <p className="about-text">
          I initially started this project as a backend API practice after learning CRUD operations using Node.js and Express.
          The idea was to simulate core banking operations like creating users, managing accounts, and processing transactions.
        </p>
        <p className="about-text">
          But as I progressed, I asked myself — "Why stop here? Why not build an interface around it?"<br />
          That thought led me to design and implement a full-fledged frontend using React, integrating roles like employee and account holder, and making it a complete banking ecosystem.
        </p>
        <p className="about-text">
          What began as a backend exercise turned into a full-stack web application that handles role-based operations, authentication, UI workflows, and more.
        </p>
        <p className="about-text">
          This project is a reflection of my growth from writing backend APIs to deploying fully interactive, real-world full-stack applications. 💪
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
