
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Darkmode from './Darkmode'
import { Box, Stack, HStack, Button, Center, VisuallyHidden, useMediaQuery } from '@chakra-ui/react'
const Navbar = () => {
    return (
        <>

            <Stack spacing={8} px={8} py={3} mx={'auto'} pt={6} bg={'whiteAlpha.300'} rounded={'md'} direction={'row-reverse'} >


                <Box rounded={'md'} >
                    <Button as={"a"} colorScheme='gray' variant='outline' fontSize='auto' p={5} size={'lg'} href={"/"}>
                        Home
                    </Button>
                </Box>

                <Box rounded={'md'} >
                    <Button as={"a"} colorScheme='gray' variant='outline' fontSize='auto' p={5} size={'lg'} href={"/about"}>
                        About
                    </Button>
                </Box>
                {/* darkmode switch */}


                <Box rounded={'md'} >
                    <Button as={"a"} colorScheme='gray' variant='outline' fontSize='lg' p={5} size={'lg'} href={'https://whitepaper.io/coin/rebalancenetwork'} target='_blank'>
                        Whitepaper
                    </Button>
                </Box>
                <Box rounded={'md'} >
                    <Button as={"a"} colorScheme='gray' variant='outline' fontSize='lg' p={5} size={'lg'}>
                        Docs
                    </Button>
                </Box>

                <Box rounded={'md'} size='lg'>
                    <Darkmode />
                </Box>
            </Stack>


        </>
    )
}

export default Navbar