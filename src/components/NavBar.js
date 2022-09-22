import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    Stack, Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import logo from '../assets/img/logo.png';
import {useState, useEffect} from "react";


// CHAKRA UI VERSION

export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [hideNavbar, setHideNavbar] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY >= 1400) {
                setHideNavbar(true);
            } else {
                setHideNavbar(false);
            }

            if(window.scrollY > 25) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    } , []);

    function onUpdateActiveLink(value) {
        setActiveLink(value);
    }

    const NavLinks = () => (
        <>
            <Link
                px={2}
                py={1}
                rounded={'md'}
                color={activeLink === 'home' ? '#ffffff' : '#c2c2c2'}
                onClick={()=>onUpdateActiveLink('home')}
                _hover={{
                    color: '#ffffff',
                }}
                href={'#home'}
            >
                Home
            </Link>
            <Link
                px={2}
                py={1}
                rounded={'md'}
                color={activeLink === 'skills'? '#fff' : '#c2c2c2'}
                onClick={()=>onUpdateActiveLink('skills')}
                _hover={{
                    color: '#ffffff',
                }}
                href={'#skills'}
            >
                Skills
            </Link>
            <Link
                px={2}
                py={1}
                rounded={'md'}
                color={activeLink === 'projects'? '#fff' : '#c2c2c2'}
                onClick={()=>onUpdateActiveLink('projects')}
                _hover={{
                    color: '#ffffff',
                }}
                href={'#projects'}
            >
                Projects
            </Link>
            <Link
                px={2}
                py={1}
                rounded={'md'}
                color={activeLink === 'credits'? '#fff' : '#c2c2c2'}
                onClick={()=>onUpdateActiveLink('credits')}
                _hover={{
                    color: '#ffffff',
                }}
                href={'#credits'}
            >
                Credits
            </Link>
        </>
    );

    return (
        <Box
            px={10} w={'full'} position={'fixed'}
            bg={scrolled? '#121212' : 'transparent'} transition={'background-color 0.25s ease-in-out'}
            visibility={hideNavbar? 'hidden' : 'visible'}
            zIndex={999}
        >
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    variant={'unstyled'}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Link href={'#'}>
                        <Image src={logo} alt={'Logo'} h={'3rem'} w={'3rem'} />
                    </Link>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        <NavLinks/>
                    </HStack>
                </HStack>
                <Flex alignItems={'center'} columnGap={4}>
                    <IconButton
                        as={Link}
                        href={'https://www.linkedin.com/in/anas-barbouch/'} target={'_blank'}
                        aria-label={'linkedin'}
                        variant={'ghost'}
                        _hover={{
                            textColor: 'black',
                            bg: 'white',
                        }}
                        icon={<FaLinkedin/>}
                        fontSize={'3xl'}
                        transition={'text-color 0.5s ease-in-out, background 0.5s'}
                        isRound
                    />
                    <IconButton
                        as={Link}
                        href={'https://github.com/OAXP'} target={'_blank'}
                        aria-label={'github'}
                        variant={'ghost'}
                        _hover={{
                            textColor: 'black',
                            bg: 'white',
                        }}
                        icon={<FaGithub/>}
                        fontSize={'3xl'}
                        transition={'text-color 0.5s ease-in-out, background 0.5s'}
                        isRound
                    />
                    {/*<Button
                        variant={'outline'}
                        size={'lg'}
                        _hover={{
                            textColor: 'black',
                            bg: 'white',
                        }}
                        transition={'background-color 0.3s ease-in-out'}
                        borderRadius={'none'}
                    >
                        Action
                    </Button>*/}
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }} backgroundColor={'#121212'}>
                    <Stack as={'nav'} spacing={4}>
                        <NavLinks/>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}