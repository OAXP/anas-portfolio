import {useRef, useState} from "react";
import {Box, IconButton, Flex, Image} from "@chakra-ui/react";
import {ChevronRightIcon, ChevronUpIcon} from "@chakra-ui/icons";

import landscape from "../assets/landscape/Landscape.webm";
import landscapeR from "../assets/landscape/LandscapeR.webm";
import landscapeMp4 from "../assets/landscape/Landscape.mp4";
import landscapeRMp4 from "../assets/landscape/LandscapeR.mp4";
import animation from "../assets/landscape/animation.webp";
import Draggable from "react-draggable";
import useScrollBlock from "../util/useScrollBlock";


export const Projects = () => {
    const videoRef = useRef(null);
    const videoReRef = useRef(null);
    const projectRef = useRef(null);
    const characterRef = useRef(null);
    const characterImgRef = useRef(null);
    const pickmeRef = useRef(null);

    const [isReverse, setIsReverse] = useState(false);
    const [blockScroll, allowScroll]  = useScrollBlock();
    const [colliding, setColliding] = useState(null);
    const [transition, setTransition] = useState(false);
    const [index, setIndex] = useState(0);
    const projects = [
        {
            title: 'Scarla',
            description: 'A dating-like social media to meet other players.',
            image: 'https://user-images.githubusercontent.com/54373272/117571779-f6172c80-b09d-11eb-874c-15e64cc112bc.png',
            link: 'https://github.com/OAXP/scarla-project',
        },
        {
            title: 'Ski Game',
            description: 'A simple ski game where you have to collect points.',
            image: 'https://user-images.githubusercontent.com/26018596/190713172-44cc770d-ea87-4813-9aab-1af74b837a09.png',
            link: 'https://github.com/OAXP/Ski_Game',
        },
        {
            title: 'Road to Chef',
            description: 'Winner app from Code to Give Hackthon, Morgan Stanley.',
            image: 'https://media.discordapp.net/attachments/419665886140432385/1022270629044559933/unknown.png',
            link: 'https://www.morganstanley.com/press-releases/morgan-stanley-code-to-give-hackathon/',
        },
        {
            title: 'Spaceship Game',
            description: 'A simple spaceship game where you have to collect asteroids.',
            image: 'https://user-images.githubusercontent.com/26018596/190771570-146906b6-81db-458a-9949-0f3543fb04f6.png',
            link: 'https://github.com/OAXP/Spaceship_Game',
        },
    ];

    /*const [direction, setDirection] = useState({way: 1, angle: 0});

    const changeAngle = (angle) => {
        setDirection(prevState => {
            return {...prevState, angle}
        });
    }

    const changeWay = (way) => {
        setDirection(prevState => {
            return {...prevState, way}
        });
    }*/

    const handleStart = () => {
        characterImgRef.current.style.transform = `scalex(${isReverse? -1 : 1})`;
        pickmeRef.current.style.display = 'none';
        blockScroll();
        if(isReverse) {
            if(!videoReRef.current.ended) {
                videoReRef.current.play();
            }
        } else {
            if(!videoRef.current.ended) {
                videoRef.current.play();
            }
        }
    }

    const handleStop = () => {
        characterImgRef.current.style.transform = `scalex(${isReverse? -1 : 1}) rotate(-45deg)`;
        pickmeRef.current.style.display = '';
        allowScroll();
        if(isReverse) {
            if(!videoReRef.current.ended) {
                videoReRef.current.pause();
            }
        } else {
            if(!videoRef.current.ended) {
                videoRef.current.pause();
            }
        }
    }

    function handleDrag(data) {
        if(data.deltaX !== 0) {
            const rect = projectRef.current.getBoundingClientRect();
            const rect2 = characterRef.current.getBoundingClientRect();
            if(
                rect.x + rect.width >= rect2.x &&
                rect.x <= rect2.x + rect2.width &&
                rect.y + rect.height >= rect2.y &&
                rect.y <= rect2.y + rect2.height
            ) {
                setColliding(true);
            } else {
                if(colliding !== null)
                setColliding(false);
            }
        }
    }

    const Project = ({title, description, image, link}) => {
        return (
            <Flex
                w={'400px'} h={'350px'}
                position={'relative'} top={'25%'} ref={projectRef}
                justify={'center'} align={'center'}
            >
                <Flex
                    className={"project2"} data-colliding={colliding} backgroundColor={'whiteAlpha.500'} w={'300px'} h={'300px'}
                    borderRadius={'3xl'} position={'absolute'} opacity={0} data-transition={transition}
                    onAnimationEnd={()=>{
                        if(transition){setTransition(false); allowScroll();}
                    }}
                />
                <Flex
                    className={"project1"} data-colliding={colliding} backgroundColor={'#afefdd'} w={'300px'} h={'300px'}
                    borderRadius={'3xl'} position={'absolute'} opacity={0} data-transition={transition}
                />
                <Flex
                    bg={'linear-gradient(90deg, rgba(0,255,34,0.5) 0%, rgba(102,177,132,0.5) 55%, rgba(102,229,255,0.5) 100%)'}
                    className={"project"} data-colliding={colliding}
                    w={'300px'} h={'300px'} borderRadius={'3xl'} opacity={colliding? 1:0}
                    align={'center'} justify={'space-between'} overflow={'hidden'}
                    position={'absolute'} direction={'column'} data-transition={transition}
                    as={"a"} href={link} target={'_blank'} pointerEvents={colliding? '': 'none'}
                >
                    <Box>
                        <Box
                            fontSize={'large'}
                            fontWeight={'bold'}
                            noOfLines={1}
                            mt={5}
                        >
                            {title}
                        </Box>
                        <Box
                            fontSize={'md'}
                            noOfLines={3}
                            minH={'4.5rem'}
                        >
                            {description}
                        </Box>
                    </Box>
                    <Box w={'100%'} h={'100%'} backgroundColor={'brown'}
                         backgroundImage={image} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}
                    />
                </Flex>
                <Flex w={'full'} justify={'right'} opacity={colliding? 1:0} pointerEvents={colliding? '': 'none'}>
                    <IconButton
                        colorScheme='blackAlpha'
                        aria-label={'next'}
                        icon={<ChevronRightIcon/>} fontSize={'xl'} isRound
                        onClick={()=>{
                            blockScroll();
                            setTransition(true);
                            setIndex((index)=>(index + 1) % projects.length);
                        }}
                    />
                </Flex>
            </Flex>
        );
    }

    return (
      <Box
          id={'projects'}
          w={'full'}
      >
          <Flex
              w={'full'}
              align={'center'}
              direction={'column'}
          >
              <Box
                  w={'full'}
                  h={'100vh'}
                  align={'center'}
                  position={'sticky'}
                  top={0}
              >
                  <Box position={'relative'} h={'full'}>
                      <Box display={isReverse ? '' : 'none'}>
                          <video
                              preload={'auto'} muted
                              style={{
                                  position: "absolute",
                                  width: '100%', height: '100vh',
                                  objectFit: "cover" }}
                              playsInline
                              onEnded={()=> {
                                  setIsReverse(false);
                                  videoReRef.current.currentTime = 0;
                              }}
                              ref={videoReRef}
                          >
                              <source type={'video/webm'} src={landscapeR}/>
                              <source type={'video/mp4'} src={landscapeRMp4}/>
                          </video>
                      </Box>
                      <Box display={isReverse ? 'none' : ''}>
                          <video
                              preload={'auto'} muted
                              style={{
                                  position: "absolute",
                                  width: '100%', height: '100vh',
                                  objectFit: "cover" }}
                              playsInline
                              onEnded={()=> {
                                  setIsReverse(true);
                                  videoRef.current.currentTime = 0;
                              }}
                              ref={videoRef}
                          >
                              <source type={'video/webm'} src={landscape}/>
                              <source type={'video/mp4'} src={landscapeMp4}/>
                          </video>
                      </Box>
                      <Box
                          fontSize={'45px'} fontWeight={'extrabold'}
                          position={'relative'} top={0} textColor={'black'}
                      >
                          My Projects
                      </Box>
                      <Project
                          title={projects[index].title}
                          description={projects[index].description}
                          image={projects[index].image}
                          link={projects[index].link}
                      />
                      <Draggable
                          bounds={'parent'}
                          onStart={() => handleStart()}
                          onDrag={(e, data)=>handleDrag(data)}
                          onStop={() => handleStop()}
                      >
                          <Box position={'absolute'} cursor={'all-scroll'} ref={characterRef}>
                              <Image
                                  ref={characterImgRef}
                                  transform={`scalex(${isReverse? -1 : 1}) rotate(-45deg)`}
                                  transition={'transform 0.4s'}
                                  src={animation} alt={'bg'} w={'100px'}/>
                              <Box bottom={0} left={3} position={'absolute'} ref={pickmeRef}>
                                  <ChevronUpIcon />
                                  <Box>Move me</Box>
                              </Box>
                          </Box>
                      </Draggable>
                  </Box>
              </Box>
          </Flex>
      </Box>
    )
}