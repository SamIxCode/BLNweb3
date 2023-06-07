import React from 'react'
import { useColorMode, IconButton } from '@chakra-ui/react'

import { SunIcon, MoonIcon, WarningIcon } from '@chakra-ui/icons'

const Darkmode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <header>
            <IconButton onClick={toggleColorMode} size={'lg'}
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </IconButton>
        </header>
    )
}


export default Darkmode