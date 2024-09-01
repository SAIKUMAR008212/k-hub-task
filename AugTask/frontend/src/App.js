import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className='header1'>K-Hub React Practice App</div>
        <div className='header2'></div>
        <div className='header3'></div>
      </header>
      <div className="content">
        <div className="statistics">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="about-data">
          <div className="about-header">
            <FontAwesomeIcon icon={faDatabase} />
            <p>About the Data</p>
          </div>
          <div className="about-text">
            Write ~150 to 200 word introduction to your chosen data set
          </div>
        </div>
      </div>
      <footer className="app-footer">
        <div className='footer1'>
          <a href="https://github.com/SAIKUMAR008212" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div className='footer2'>
          <p>2023 © Copyright Raj Reddy Center For Technology And Society. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
