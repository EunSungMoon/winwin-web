import { ThemeProvider } from "styled-components"
import theme from './components/theme/color'

function MyApp({ Component, pageProps }) {
console.log(theme.colors)
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
