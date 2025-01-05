import React from 'react';
import ReactDOM from 'react-dom/client';

import "./assets/styles/background.css"
import "./assets/styles/contact.css"
import "./assets/styles/experience.css"
import "./assets/styles/feature.css"
import "./assets/styles/header.css"
import "./assets/styles/index.css"
import "./assets/styles/landing.css"
import "./assets/styles/other.css"
import "./assets/styles/skills.css"
import "/node_modules/primeflex/primeflex.css"

import Header from "./components/Header";
import Landing from "./components/Landing";
import Background from './components/Background';
import Skills from "./components/Skills";
import Experience from './components/Experience';
import Feature from "./components/Feature";
import Other from "./components/Other";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="root">
      <Header />
      <Landing />
      <Background />
      <Skills />
      <Experience />
      <Feature />
      <Other />
      <Contact />
    </div>
  </React.StrictMode>
);