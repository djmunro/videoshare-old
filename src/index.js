import 'milligram'
import React from 'react'
import ReactDOM from 'react-dom'
import {css, Global} from '@emotion/core'
import {withTheme, ThemeProvider} from 'emotion-theming'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Topics from './pages/Topics'
import Videos from './pages/Videos'

import useThemeState from './hooks/useThemeState'

const makeGlobalStyles = theme => css`
  body {
    background-color: ${theme.app.background};
    transition: background-color 0.2s;
  }
`

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
))

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
      <GlobalStyles />
    </ThemeProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
