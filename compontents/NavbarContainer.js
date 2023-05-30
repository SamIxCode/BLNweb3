import { useMediaQuery } from "@chakra-ui/react"
import Navbar from "./Navbar"
import MobileNav from "./MobileNav"

// import the different Navbar components



export default function NavbarContainer() {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    return (
        <>
            {isLargerThan768 ? (
                // render the DesktopNavbar component if the screen is larger than 768px
                <Navbar />
            ) : (
                // render the MobileNavbar component if the screen is smaller than 768px
                <MobileNav />
            )}
        </>
    )
}
