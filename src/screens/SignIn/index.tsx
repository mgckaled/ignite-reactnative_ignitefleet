import { ImageSourcePropType } from "react-native"

import { Container, Slogan, Title } from "./styles"

import backgroundImg from "../../assets/background.png"

export function SignIn() {
  return (
    <Container source={backgroundImg as ImageSourcePropType}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veículos</Slogan>
    </Container>
  )
}
