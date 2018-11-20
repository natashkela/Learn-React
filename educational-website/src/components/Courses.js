import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import Course from './courses/Course'
import Css from './courses/CSS'
import Html from './courses/HTML'
import JavaScript from './courses/JavaScript'
const Courses = () => (
  <BrowserRouter>
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>

    <Route path="/courses/html" component={Html} />
    <Route path="/courses/css" component={Css} />
    <Route path="/courses/javascript" component={JavaScript} />
  </div>
  </BrowserRouter>
);

export default Courses;