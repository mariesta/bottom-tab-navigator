import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";

import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
