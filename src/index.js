import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './style.css';

import { BrowserRouter, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ContactMePage from './pages/ContactMePage';
import ProjectsPage from './pages/ProjectsPage';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route exact path="/" component={IntroPage} />
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/skills" component={SkillsPage} />
    <Route exact path="/projects" component={ProjectsPage} />
    <Route exact path="/contact-me" component={ContactMePage} />
  </BrowserRouter>,
  document.querySelector('#root')
);

serviceWorker.register();
