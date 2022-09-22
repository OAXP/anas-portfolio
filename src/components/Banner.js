/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from "react";
import {
    Box, Button,
    Flex, Image,
} from "@chakra-ui/react";
import {BsArrowRightCircle} from 'react-icons/bs';
import headerImg from "../assets/img/header-img.svg";
import bgImg from "../assets/img/banner-bg.jpg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Student", "Passionate", "Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
      <Box
          id={'home'}
          bgImg={bgImg} bgSize={'cover'} bgRepeat={'no-repeat'} bgPos={'top center'}
          mt={0} p={'100px 0 100px 0'}
      >
          <Box w={'full'} h={'100vh'} filter={'blur(300px)'} bg={'whiteAlpha.400'} zIndex={0} position={'absolute'} />
          <Flex
              align={'center'}
              mx={12}
              direction={['column', 'column', 'row']}
          >
              <Flex flex={2} direction={'column'} align={'center'} gap={4} maxW={['100%', '100%', '70%', '50%']}>
                  <Box
                      as={"span"}
                      border={'1px solid rgba(255, 255, 255, 0.5)'}
                      p={'8px 10px'}
                      bg={'linear-gradient(90deg, rgba(0,255,34,0.5) 0%, rgba(102,177,132,0.5) 55%, rgba(102,229,255,0.5) 100%)'}
                      fontSize={'2xl'}
                      display={'inline-block'}
                      maxW={'max-content'}
                  >
                      Welcome to my Portfolio
                  </Box>
                  <Box
                      fontSize={'7xl'}
                      fontWeight={'extrabold'}
                      lineHeight={'normal'}
                  >
                      {`Hi I'm Anas,`}<Box>a {text}</Box>
                  </Box>
                  <Box as={"p"}
                       color={'#fff'}
                       fontSize={'md'}
                       letterSpacing={'wider'}
                       lineHeight={'tall'}
                       textShadow={'4px 4px 15px #151515'}
                       w={'96%'}
                  >
                      My name is Anas Barbouch and I am currently a full-time student at Polytechnique de Montréal in
                      Computer Engineering. This is a website I made with React to learn more about it and to introduce
                      myself. Welcome!
                  </Box>
                  <Flex w={'full'}>
                      <Button
                          as={"a"}
                          href={'https://www.linkedin.com/in/anas-barbouch/'}
                          target={'_blank'}
                          colorScheme={'unstyled'}
                          fontSize={20}
                          onClick={()=>console.log('connect')}
                      >
                          Let's connect <BsArrowRightCircle size={25} style={{marginLeft: '10'}}/>
                      </Button>
                  </Flex>
              </Flex>
              <Box flex={1}>
                  <Image src={headerImg} alt={'header image'} minW={'sm'}/>
              </Box>
          </Flex>
      </Box>
    );
}