import React, { Component } from 'react';
import './index.css'
import Home from './Home';
import AddAccount from './AddAccount';
import { BrowserRouter, Route } from 'react-router-dom';
import EditAccount from './EditAccount';
import Login from './Login';
import SignUp from './SignUp';
import ProtectedRoute from './ProtectedRoute';
class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <ProtectedRoute component={Home} path="/" exact/>
        <ProtectedRoute component={AddAccount} path="/add" exact/>
        <ProtectedRoute component={EditAccount} path="/edit/:id" exact/>
        <Route component={Login} path="/login" exact/>
        <Route component={SignUp} path="/register" exact/>
      </BrowserRouter>
    );
  }
}
export default App;