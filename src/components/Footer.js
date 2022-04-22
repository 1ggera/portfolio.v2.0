import { HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import { Image } from '@chakra-ui/react'
import gerag from '../assets/img/gerag.png'

function Footer(){
  return (
    <HStack>
      <Image boxSize="50" src={gerag} isRound="true" p={1} alt='Gera Garcia'/>
      
      <Text position={"center"}>GG Digital<br/>© 2022</Text>
    
    </HStack>
  )
}
export default Footer;