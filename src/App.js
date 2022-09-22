import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Credits} from "./components/Credits";

function App() {
    /*const [offsetY, setOffsetY] = useState(0);

    const handleOnScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);

        return () => window.removeEventListener('scroll', handleOnScroll);
    }, []);*/

    return (
      <div className="App">
          <ChakraProvider>
              <NavBar />
              <Banner />
              <Skills />
              <Projects/>
              <Credits />
          </ChakraProvider>
      </div>
    );
}

export default App;
