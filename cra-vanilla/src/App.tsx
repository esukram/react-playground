import * as React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import {Home, Foo, Bar} from './components/Pages';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Nav />

      <main>
        <Switch>
          <Route exact path="/foo" component={Foo} />
          <Route exact path="/bar" component={Bar} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
};

export default App;
