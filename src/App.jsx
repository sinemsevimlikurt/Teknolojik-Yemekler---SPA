import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage'
import React from "react";
import Success from './pages/Success';
import OrderPizza from './pages/OrderPizza';

function App() {

  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/order" component={OrderPizza}/>
        <Route path="/success" component={Success}/>
      </Switch>
    </Router>
    </>
  )
}

export default App
