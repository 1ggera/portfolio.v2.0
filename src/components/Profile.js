import React from 'react'
import { useMediaQuery } from '@chakra-ui/react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'

function Profile(){

  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{ base:"100vh", md: "130vh", lg:"130vh", xl: "130h" }} ml={"1"}>
      <Box alignSelf="center" px="10" py="16" mb="2">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl" mb="2">+2</Heading>
        <Text fontWeight="bold" fontSize="2xl" color="gray.400" mb="10" ml="2">
          Years of experience development frontend and studying programming systems.
        </Text>
      </Box>
      <Box alignSelf="center" px="12" py="8" >
        <Text fontWeight="bold" fontSize="2xl" mt="18">
          I like work with JavaScript, React, CSS, NextJS and currently C# and SQL.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
          <Flex alignSelf="center" alignItems={"center"} rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "cyan.400", }}>
          <Icon color="white" p="4" as={DiAndroid} w="24" h="24" ></Icon>
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Tiendas online
            </Text>
          </Flex>

          <Flex alignSelf="center" rounded="xl" alignItems={"center"} direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "cyan.400", }}>
            <Icon color="white" p="4" as={DiCodeigniter} w="24" h="24"></Icon>
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Apps
            </Text>
          </Flex>

          <Flex alignSelf="center" alignItems={"center"} rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "cyan.400", }}>
          <Icon as={DiWebplatform} color="white" h="24" w="24" p="4"></Icon>
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Data Systems
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
export default Profile;