import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Animation1 from "./animations/Animation1";
import "./App.css";

const App = () => {
 return (
  <div>
   <Router>
    <Switch>
     <Route exact path="/">
      <Animation1 />
     </Route>
    </Switch>
   </Router>
  </div>
 );
};

export default App;
