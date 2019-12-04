import 'milligram'
import React from 'react'
import ReactDOM from 'react-dom'
import {css, Global} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Topics from './pages/Topics'
import Videos from './pages/Videos'

import useThemeState from './hooks/useThemeState'

function App() {
  const [currentTheme, setCurrentTheme] = useThemeState()
  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <Switch>
          <Global
            styles={css`
              body {
                background-color: ${currentTheme.app.background};
                transition: background-color 0.2s;
              }
            `}
          />
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

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
