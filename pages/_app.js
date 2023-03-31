import { ThemeProvider } from "styled-components"
import theme from '../components/theme/color'
import { Provider } from "jotai"

function MyApp({ Component, pageProps }) {

  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>

  )
}

export default MyApp
