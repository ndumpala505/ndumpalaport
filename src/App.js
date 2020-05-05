import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import home  from './pages/Home';
import about  from './pages/About';
import contact  from './pages/Contact';
import errorPage  from './pages/ErrorPage';

function App() {
  return (
    <Router>
        <div className="App">
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
