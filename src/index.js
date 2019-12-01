import 'milligram'
import React from 'react'
import ReactDOM from 'react-dom'

import {css} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Topics from './pages/Topics'
import Videos from './pages/Videos'

import * as mq from './media-queries'

import useThemeState from './hooks/useThemeState'

function App() {
  const [currentTheme, setCurrentTheme] = useThemeState()
  return (
    <ThemeProvider theme={currentTheme}>
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
    </ThemeProvider>
  )
}

export default App

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
