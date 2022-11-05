import { useColorMode} from '@chakra-ui/color-mode';
import { Stack, Circle, Flex, Box, Text} from '@chakra-ui/layout';
import { useMediaQuery, Button, Image } from '@chakra-ui/react';
import React from 'react'

function Header(){

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle mt={14} mr={5} position="absolute" bg="blue.100" opacity="0.1" w="225px" h="225px" alignSelf="flex-end"/>
      
      {/* config por si la pantalla es small */}
      <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">

        {/* caja estilizada q contiene el texto */}
        <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
          <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>

          {/* en este texto agrego un gradiente 'to right' con tres colores. bgClip ->adhiere el gradiente al texto */}
          <Text fontSize="5xl" fontWeight="bold" mr={12} color="cyan.500" bgGradient="linear(to-r, cyan.400, blue.600, purple.800)" bgClip='text'>Gerardo Garcia</Text>

          {/* descripción */}
          <Text mr={6} color={isDark ? "gray.200" : "gray.500"} fontSize="2xl"></Text>

          <Button mt={8} colorScheme="blue" onClick={() => window.open("https://www.linkedin.com/in/gera-garcia")}>Contact me</Button>
        </Box>

        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full' backgroundColor="transparent" boxShadow="lg" boxSize="225px" src="https://bit.ly/imag_portfolio_glitch" zIndex={2}>
        </Image>
      </Flex>

    </Stack>
    
  )
}
export default Header;