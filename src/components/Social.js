import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa"

function Social(){
  return (
    <HStack spacing="14">
      <IconButton as={FaGithub} boxSize="50" _hover={{ bgGradient: "linear(to-r, cyan.400, purple.500)" }} borderRadius={'51%'} onClick={() => window.open("https://github.com/1ggera")}></IconButton>

      <IconButton as={FaLinkedin} boxSize="50" borderRadius={'15%'} _hover={{ bgGradient: "linear(to-r, cyan.400, purple.500)" }} onClick={() => window.open("https://www.linkedin.com/in/gera-garcia")}></IconButton>

      <IconButton as={FaBehance} boxSize="50" borderRadius={'15%'} _hover={{ bgGradient: "linear(to-r, cyan.400, purple.500)" }} padding={'1%'} onClick={() => window.open("https://www.behance.net/geragarciadigital")}></IconButton>

      <IconButton as={FaInstagram} boxSize="49" borderRadius={'32%'} _hover={{ bgGradient: "linear(to-r, cyan.400, purple.500)" }} ></IconButton>
    </HStack>
  )
}
export default Social;