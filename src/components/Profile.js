import React from 'react'
import { useMediaQuery } from '@chakra-ui/react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'

function Profile(){

  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{ base:"100vh", md: "130vh", lg:"130vh", xl: "130h" }} ml={"1"}>
      <Box alignSelf="center" px="10" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">+2</Heading>
        <Text fontSize="2xl" color="gray.400">Years of experience</Text>
      </Box>
      <Box alignSelf="center" px="14" py="16">
        <Text fontWeight="bold" fontSize="2xl">Developer and Student of Programming of Informatics Systems specialized in movile first design.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
          <Flex alignSelf="center" rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "cyan.400", }}>
          <Icon color="white" p="4" as={DiAndroid} w="24" h="24" ></Icon>
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              React Native App
            </Text>
          </Flex>

          <Flex alignSelf="center" rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "cyan.400", }}>
            <Icon color="white" p="4" as={DiCodeigniter} w="24" h="24"></Icon>
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Ecommerce Responsive
            </Text>
          </Flex>

          <Flex alignSelf="center" rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "cyan.400", }}>
          <Icon as={DiWebplatform} color="white" h="24" w="24" p="4"></Icon>
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Blogs
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
export default Profile;