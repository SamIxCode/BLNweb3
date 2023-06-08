import { Container } from "@chakra-ui/react";
import NavbarContainer from "../../compontents/NavbarContainer";
import StatsGridWithImage from "../../compontents/AboutComp";
import CallToActionWithAnnotation from "../../compontents/AboutHero";
import SmallCentered from "../../compontents/FooterComponent";
export default function about() {
    return (
        <>
            <Container
                maxW={"7xl"}>
                <NavbarContainer />
                <CallToActionWithAnnotation />

                <StatsGridWithImage />
            </Container>
            <SmallCentered />
        </>
    )
}