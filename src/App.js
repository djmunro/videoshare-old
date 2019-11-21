import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Topics from './screens/Topics'
import Videos from './screens/Videos'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Topics />
        </Route>
        <Route path="/topics/:slug?">
          <Videos />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
