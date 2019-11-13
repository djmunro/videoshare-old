import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Subjects from "./components/Subjects";
import Videos from "./components/Videos";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Subjects />
        </Route>
        <Route path="/subject/:slug">
          <Videos />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
