import React, { Component } from 'react';
import './index.css'
import Home from './Home';
import AddAccount from './AddAccount';
import { Link, BrowserRouter, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddAccount} />
      </BrowserRouter>
    );
  }
}
export default App;