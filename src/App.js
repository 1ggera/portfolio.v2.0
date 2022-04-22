import { IconButton } from "@chakra-ui/button";
import { Flex, VStack, Heading, Spacer} from "@chakra-ui/layout";

import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={7}>
      <Flex w="100%">
        <Heading ml="1" pb="2" size="xl" fontWeight='semibold' color="cyan.500" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>
          GG Digital
        </Heading>
      
        <Spacer></Spacer>

          <IconButton ml={2} icon={<FaLinkedin />} isRound="true" onClick={toggleColorMode} > </IconButton>

          <IconButton ml={2} icon={<FaInstagram />} isRound="true" onClick={toggleColorMode}></IconButton>

          <IconButton ml={2} icon={<FaGithub />} isRound="true" onClick={toggleColorMode}></IconButton>

          <IconButton ml={6} icon={ isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        
      </Flex>
        <Header></Header>
        <Spacer ></Spacer>
        <Social></Social>
        <Profile></Profile>
        <Spacer></Spacer>
        <Footer></Footer>
        
    </VStack>
  );
}

export default App;
