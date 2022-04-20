import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa"

function Social(){
  return (
    <HStack spacing="24">
      <IconButton as={FaGithub} boxSize="50" borderRadius={'51%'} onClick={() => window.open("https://github.com/1ggera")}></IconButton>
      <IconButton as={FaLinkedin} boxSize="50" borderRadius={'15%'} onClick={() => window.open("https://www.linkedin.com/in/gera-garcia")}></IconButton>
      <IconButton as={FaBehance} boxSize="50" borderRadius={'15%'} padding={'1%'} onClick={() => window.open("https://www.behance.net/geragarciadigital")}></IconButton>
      <IconButton as={FaInstagram} boxSize="49" borderRadius={'32%'}></IconButton>
    </HStack>
  )
}
export default Social;