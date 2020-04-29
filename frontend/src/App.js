import React, { useState } from 'react';
import auth from './firebase';
import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './components/About'
import Table from './components/Table'


function App() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
    
    
  });
  const handleLogout = () => {
    auth.signOut().then(() => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };

  return (

      <div>
        <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About' exact component={About}/>
          <Route path='/Table' exact component={Table}/>
         
        </Switch>
  
      </Router>
      </div>
    )
}

export default App;