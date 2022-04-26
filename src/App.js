import { IconButton } from "@chakra-ui/button";
import { Flex, VStack, Heading, Spacer} from "@chakra-ui/layout";

import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
<<<<<<< HEAD
import Footer from "./components/Footer";
// <<<<<<< HEAD
// =======
// import Footer from "./components/Social";
// >>>>>>> 9540da3 (carga de imagenes y config footer)
=======
import Footer from "./components/Social";
>>>>>>> 9540da3354582730028ff703c02260da04a0fef5

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={7}>
      <Flex w="100%">
        <Heading pb="2" size="xl" fontWeight='semibold' color="cyan.500" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>
          GG Digital
        </Heading>
      
        <Spacer></Spacer>

          <IconButton ml={2} icon={<FaLinkedin />} isRound="true" onClick={toggleColorMode} > </IconButton>

          <IconButton ml={2} icon={<FaInstagram />} isRound="true" onClick={toggleColorMode}></IconButton>

          <IconButton ml={2} icon={<FaGithub />} isRound="true" onClick={toggleColorMode}></IconButton>

          <IconButton ml={2} icon={ isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        
      </Flex>
        <Header></Header>
        <Spacer ></Spacer>
        <Social></Social>
        <Profile></Profile>
        <Spacer></Spacer>
        <Footer></Footer>
<<<<<<< HEAD
        
=======
>>>>>>> 9540da3354582730028ff703c02260da04a0fef5
    </VStack>
  );
}

export default App;
