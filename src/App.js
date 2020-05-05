import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import home  from './pages/home';
import about  from './pages/about';
import contact  from './pages/contact';
import errorPage  from './pages/errorPage';

function App() {
  return (
    <Router>
        <div className="App">
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">ABout</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
        <Switch>
            <Route path="/" exact strict component={home}/>
            <Route path="/about" component={about}/>
            <Route path="/contact" component={contact}/>
            <Route component={errorPage} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
