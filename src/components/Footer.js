import { HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import { Image } from '@chakra-ui/react'
import gerag from '../assets/img/gerag.png'

function Footer(){
  return (
    <HStack>
      <Image boxSize="45" src={gerag} isRound="true" mt={1} p={2} alt='Gera Garcia'/>
      
      <Text position={"center"}>GG Digital<br/>© 2022</Text>
    
    </HStack>
  )
}
export default Footer;