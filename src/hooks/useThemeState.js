import {useState} from 'react'

import {lightTheme, darkTheme} from '../themes/themes'

const useThemeState = () => {
  const [theme, setTheme] = useState(lightTheme)
  const setCurrentTheme = () => {
    theme.name === 'light' ? setTheme(darkTheme) : setTheme(lightTheme)
  }
  return [theme, setCurrentTheme]
}
export default useThemeState
