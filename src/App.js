import './App.css';
import React from 'react';
import Header from './Header';
import AllPlayers from './AllPlayers';
import NavBar from './NavBar';
import Football from './Football';
import {Route, Switch } from "react-router-dom"
import Basketball from './Basketball';
import Baseball from './Baseball';
import Hockey from './Hockey';


function App() {


  return (
    <div >
      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path="/baseball">
          <Baseball/>
        </Route>

        <Route exact path="/football">
          <Football />
        </Route>

        <Route exact path="/basketball">
          <Basketball  />
        </Route>

        <Route exact path="/hockey">
          <Hockey/>
        </Route>

        <Route exact path="/">
          <AllPlayers />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
