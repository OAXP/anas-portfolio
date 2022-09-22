import {
    Box, Flex, Image
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const Skills = () => {
  return (
      <Box
          id={'skills'}
          w={'full'}
          position={'relative'}
          pt={'50px'}
          bg={'linear-gradient(180deg, rgba(9,0,47,1) 0%, rgba(61,54,92,1) 55%, rgba(116,116,116,0.9416141456582633) 100%)'}
          textAlign={'center'}
          borderRadius={'64px 64px 0 0'}
          mt={'-60px'}
          pb={'60px'}
      >
          <Flex
              direction={'column'}
              gap={5}
              pb={7}
              align={'center'}
          >
              <Box fontSize={'45px'} fontWeight={'extrabold'} >Skills</Box>
              <Box
                  color={'#B8B8B8'} fontSize={'18px'}
                  letterSpacing={'0.8px'} m={'14px 0 75px 0'}
                  w={'70%'}
              >
                  Here is a list of some technologies that I learned since I started programming. I am a curious person
                  so I explored several areas in IT, whether it's front-end, back-end or full-stack.
              </Box>
              <Carousel responsive={responsive} infinite={true} className={'skill-slider'}>
                  <Box>
                      <Image src={'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'} alt={'image'} h={'10rem'} m={'0 auto 15px auto'}/>
                      <Box
                          fontSize={'x-large'}
                          fontWeight={'bold'}
                      >
                          C++
                      </Box>
                  </Box>
                  <Box>
                      <Image src={'https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg'} alt={'image'} h={'10rem'} m={'0 auto 15px auto'}
                             pointerEvents={'none'} userSelect={'none'}
                      />
                      <Box
                          fontSize={'x-large'}
                          fontWeight={'bold'}
                      >
                          Java
                      </Box>
                  </Box>
                  <Box>
                      <Image borderRadius={'full'} src={'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'} alt={'image'} h={'10rem'} m={'0 auto 15px auto'}/>
                      <Box
                          fontSize={'x-large'}
                          fontWeight={'bold'}
                      >
                          Javascript
                      </Box>
                  </Box>
                  <Box>
                      <Image src={'https://www.w3.org/html/logo/downloads/HTML5_Badge.svg'} alt={'image'} h={'10rem'} m={'0 auto 15px auto'}
                             pointerEvents={'none'} userSelect={'none'}
                      />
                      <Box
                          fontSize={'x-large'}
                          fontWeight={'bold'}
                      >
                          HTML
                      </Box>
                  </Box>
                  <Box>
                      <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png'} alt={'image'} h={'10rem'} m={'0 auto 15px auto'}
                             pointerEvents={'none'} userSelect={'none'}
                      />
                      <Box
                          fontSize={'x-large'}
                          fontWeight={'bold'}
                      >
                          CSS
                      </Box>
                  </Box>
                  <Box>
                      <Image src={'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'} alt={'image'} h={'10rem'} m={'0 auto 15px auto'}
                             pointerEvents={'none'} userSelect={'none'}
                      />
                      <Box
                          fontSize={'x-large'}
                          fontWeight={'bold'}
                      >
                          ReactJS
                      </Box>
                  </Box>
                  <Box>
                      <Image src={'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg'} alt={'image'} h={'10rem'} m={'0 auto 15px auto'}
                             pointerEvents={'none'} userSelect={'none'}
                      />
                      <Box
                          fontSize={'x-large'}
                          fontWeight={'bold'}
                      >
                          Git
                      </Box>
                  </Box>
                  <Box>
                      <Image src={'https://www.php.net/images/logos/new-php-logo.svg'} alt={'image'} h={'10rem'} m={'0 auto 15px auto'}
                             pointerEvents={'none'} userSelect={'none'}
                      />
                      <Box
                          fontSize={'x-large'}
                          fontWeight={'bold'}
                      >
                          PHP
                      </Box>
                  </Box>
                  <Box>
                      <Image src={'https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg'} alt={'image'} h={'10rem'} m={'0 auto 15px auto'}
                             pointerEvents={'none'} userSelect={'none'}
                      />
                      <Box
                          fontSize={'x-large'}
                          fontWeight={'bold'}
                      >
                          Arduino
                      </Box>
                  </Box>
                  <Box>
                      <Image src={'https://user-images.githubusercontent.com/5421823/62779159-4cf76880-baaa-11e9-8318-e20a1aaa913a.png'} alt={'image'} h={'10rem'} m={'0 auto 15px auto'}
                             pointerEvents={'none'} userSelect={'none'}
                      />
                      <Box
                          fontSize={'x-large'}
                          fontWeight={'bold'}
                      >
                          Assembly x86
                      </Box>
                  </Box>
              </Carousel>
          </Flex>
          {/*<Image src={colorSharp} alt={"Sharp color"} top={'28%'} position={'absolute'} bottom={0} w={'30%'}/>*/}
      </Box>
  )
}
