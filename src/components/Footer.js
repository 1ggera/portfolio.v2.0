import { HStack, Text } from '@chakra-ui/layout'
import React from 'react'
import { Image } from '@chakra-ui/react'
import gerag from '../assets/img/gerag.png'

function Footer(){
  return (
    <HStack>
<<<<<<< HEAD
      <Image boxSize="50" src={gerag} isRound="true" mt={1} p={2} alt='Gera Garcia'/>
=======
      <Image boxSize="50" src={gerag} isRound="true" p={1} alt='Gera Garcia'/>
>>>>>>> 9540da3354582730028ff703c02260da04a0fef5
      
      <Text position={"center"}>GG Digital<br/>© 2022</Text>
    
    </HStack>
  )
}
export default Footer;