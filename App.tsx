import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto"
import { ThemeProvider } from "styled-components/native"

import theme from "./src/theme"

import { StatusBar } from "react-native"
import { Loading } from "./src/components/Loading"
import { SignIn } from "./src/screens/SignIn"

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <SignIn />
    </ThemeProvider>
  )
}
