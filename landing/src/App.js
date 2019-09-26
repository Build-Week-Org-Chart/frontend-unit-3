import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import landing from './components/landing';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';

import LoginForm from './components/onboarding/loginForm';
import SignupForm from './components/onboarding/signupForm'

import CharacterList from './components/cardList/employeeList'
import Dashboard from './components/dashboard';

// const protectRoute = Component => props => {
//   if (localStorage.getItem('token')) {
//     return <Component {...props} />;
//   } else {
//     return <Redirect to="/login" />;
//   }
// }

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path='/' component={landing}/>
          <Route path='/login' component={LoginForm} />
          <Route path='/signup' component={SignupForm} />

          <PrivateRoute path="/login" component={Login} />

          <Route path='/dashboard' component={Dashboard}/>
      </Router>
    </div>
  );
}

export default App;
