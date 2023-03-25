import { FormProvider, useFormContext } from "react-hook-form"
import { ThemeProvider } from "styled-components"
import theme from './components/theme/color'

function MyApp({ Component, pageProps }) {
  const form = useFormContext()

  return (
    <FormProvider {...form}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </FormProvider>
  )
}

export default MyApp
