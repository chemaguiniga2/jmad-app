import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';







function App() {


  
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
