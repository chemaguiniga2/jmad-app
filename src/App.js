import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';







function App() {


  
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
