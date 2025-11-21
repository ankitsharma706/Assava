import { useEffect, useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme'


const STORAGE_KEY = 'assava-theme'


export default function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved || 'light'
    } catch (e) {
      return 'light'
    }
  })


  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, themeName) } catch (e) { }
  }, [themeName])


  const theme = themeName === 'light' ? lightTheme : darkTheme


  const toggleTheme = (next) => {
    if (next) setThemeName(next)
    else setThemeName(t => (t === 'light' ? 'dark' : 'light'))
  }


  return (
    <SCThemeProvider theme={{ ...theme, toggleTheme }}>
      {children}
    </SCThemeProvider>
  )
}