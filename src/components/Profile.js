import React from 'react'
import { useMediaQuery } from '@chakra-ui/react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'

function Profile(){

  const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{ base:"100vh", md: "130vh", lg:"130vh", xl: "130h" }} >
      <Box alignSelf="center" px="12" py="16">
        <Heading fontWieght="extrabold" color="cyan.500" size="4xl">
          4+
        </Heading>
        <Text fontSize="2xl" color="gray.400">Years of experience</Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">Student of Programming of Informatics Systems and developer, specialised in movile first design.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "cyan.400", }}>
          <Icon color="white" p="4" as={DiAndroid} w="24" h="24" ></Icon>
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Android Apps
            </Text>
          </Flex>

          <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "cyan.400", }}>
            <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24"></Icon>
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Web Apps
            </Text>
          </Flex>

          <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "cyan.400", }}>
          <Icon as={DiWebplatform} color="white" h="24" w="24" p="4"></Icon>
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Web platforms
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
export default Profile;