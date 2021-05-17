import Home from "./Home";
import Graph from "./Graph";
import React from "react";
import {Switch,Route, Redirect} from "react-router-dom";

import "./styles.css";
import Navbar from "./Navbar";
import Statewisedata from "./Statewisedata";


function App() {
  return (
    <>
    <div >

      <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/graph" component={Graph} />
        <Route exact path="/statewisedata" component={Statewisedata} />
    


        <Redirect to="/" />
        </Switch>

    

    </div>
    </>
  );
}

export default App;
