import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import {Home, Foo, Bar} from './Pages';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/foo">Foo</Link></li>
                <li><NavLink to="/bar">Bar</NavLink></li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/foo" component={Foo} />
              <Route exact path="/bar" component={Bar} />
            </Switch>
        </Router>


      </div>
    );
  }
}

export default App;
