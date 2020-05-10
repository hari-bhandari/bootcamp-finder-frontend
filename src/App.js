import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AuthState from './context/AuthState'
import './App.css';
import Navbar from './Components/layouts/Navbar'
import Home from './Components/pages/Home'
import Login from './Components/pages/Login'

function App() {
  return (
    <AuthState>
    <Router>
            <Fragment>
                <Navbar/>
                <Switch>
                  <Route exact path={'/'} component={Home}/>
                  <Route exact path={'/login'} component={Login}/>
                </Switch>
            </Fragment>
        </Router>
        </AuthState>
  );
}

export default App;
