import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

//App Components
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Cars from './Cars';
import CarDetail from './CarDetail';
import Blog from './Blog';
import BlogPost from './BlogPost';
const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/cars" component={Cars} />
      <Route path="/car-detail" component={CarDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog-post" component={BlogPost} />
    </div>
  </BrowserRouter>
);

export default App;
