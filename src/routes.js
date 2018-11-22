import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';

export default (
<HashRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/menu" component={Menu} />
    <Route path="/contact" component={Contact} />
    <Route path="/gallery" component={Gallery} />
  </Switch>
</HashRouter>
)