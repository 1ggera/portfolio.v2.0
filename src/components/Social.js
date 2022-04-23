import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa"

function Social(){
  return (
    <HStack spacing="8">
      <IconButton as={FaGithub} boxSize="50" p="1" _hover={{ bgGradient: "linear(to-r, cyan.400, purple.500)" }} borderRadius={'50%'} onClick={() => window.open("https://github.com/1ggera")} ></IconButton>

      <IconButton as={FaLinkedin} boxSize="50" borderRadius={'15%'} _hover={{ bgGradient: "linear(to-r, cyan.400, purple.500)" }} onClick={() => window.open("https://www.linkedin.com/in/gera-garcia")} padding={'2%'}></IconButton>

      <IconButton as={FaBehance} boxSize="50" borderRadius={'15%'} _hover={{ bgGradient: "linear(to-r, cyan.400, purple.500)" }} padding={'2%'} onClick={() => window.open("https://www.behance.net/geragarciadigital")}></IconButton>

      <IconButton as={FaInstagram} boxSize="50" padding={'1%'} borderRadius={'32%'} _hover={{ bgGradient: "linear(to-r, cyan.400, purple.500)" }} onClick={() => window.open("https://www.instagram.com/digital.gera/")}></IconButton>
    </HStack>
  )
}
export default Social;