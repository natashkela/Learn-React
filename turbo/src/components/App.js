import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

//App Components
import Home from './Home';
import About from './About';
import Contact from './Contact';
const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>
);

export default App;
