import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Subjects from './screens/Subjects'
import Videos from './screens/Videos'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Subjects />
        </Route>
        <Route path="/subjects/:slug?">
          <Videos />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
