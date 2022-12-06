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
import Sport from './Sport';


function App() {


  return (
    <div >
      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path="/baseball">
          <Sport sport={"MLB"}/>
        </Route>

        <Route exact path="/football">
          <Sport sport={"NFL"}/>
        </Route>

        <Route exact path="/basketball">
          <Sport sport={"NBA"}/>
        </Route>

        <Route exact path="/hockey">
          <Sport sport={"NHL"}/>
        </Route>

        <Route exact path="/">
          <AllPlayers />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
