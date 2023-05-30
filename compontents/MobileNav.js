import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Box, Center, Stack, AbsoluteCenter, Heading, Flex, Spacer, Image, Text, Wrap, WrapItem, Button, Input } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'

import Darkmode from './Darkmode'
const MobileNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Stack direction={'row-reverse'} px={5}>
                <Box>
                    <IconButton ref={btnRef} color={'white'} onClick={onOpen} icon={<GiHamburgerMenu />} background={'transparent'} fontsize={'40px'}>
                        Open
                    </IconButton>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Menu</DrawerHeader>

                            <DrawerBody>
                            <Stack spacing={8} px={8} py={3} mx={'auto'} pt={6} bg={'whiteAlpha.300'} rounded={'md'} direction={'column-reverse'} >


<Box rounded={'md'} >
    <Button colorScheme='gray' variant='outline' fontSize='auto' p={5} size={'lg'}>
        About
    </Button>
</Box>
{/* darkmode switch */}


<Box rounded={'md'} >
    <Button colorScheme='gray' variant='outline' fontSize='lg' p={5} size={'lg'}>
        Whitepaper
    </Button>
</Box>

<Box rounded={'md'} size='lg'>
    <Darkmode />
</Box>
</Stack>
                            </DrawerBody>

                            <DrawerFooter>
                                
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Box>
            </Stack>
        </>
    )
}

export default MobileNav