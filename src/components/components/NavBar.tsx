import logo from "@/assets/GameHubResources/Logo/logo.webp"
import { HStack, Image, Text } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} alt="GameHub" boxSize='60px' />
        <Text> NavBar</Text>
    </HStack>
  )
}

export default NavBar

