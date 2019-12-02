import 'milligram'
import React from 'react'
import ReactDOM from 'react-dom'
import {css} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Topics from './pages/Topics'
import Videos from './pages/Videos'

import useThemeState from './hooks/useThemeState'

const AppContainer = ({children}) => (
  <main
    className="container"
    css={css`
      max-width: 45em;
    `}
  >
    {children}
  </main>
)

function App() {
  const [currentTheme, setCurrentTheme] = useThemeState()
  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <Switch>
          <AppContainer>
            <Route exact path="/">
              <Topics />
            </Route>
            <Route path="/topics/:slug?">
              <Videos />
            </Route>
          </AppContainer>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
