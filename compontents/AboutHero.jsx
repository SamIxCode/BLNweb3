import Head from "next/head"
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon
} from "@chakra-ui/react"

export default function CallToActionWithAnnotation() {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Box w={"100%"} mb={"150px"}>

                <Box display={""}
                    as={Box}
                    textAlign={"left"}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                    mx={9}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "5xl", md: "6xl" }}
                        lineHeight={"110%"}
                        mb={5}
                    >
                        About <br />
                        <Text as={"span"} color={"blue.400"}>
                            RebalanceNetwork
                        </Text>
                    </Heading>
                    <Text color={"gray.300"}>
                        RebalanceNetwork is a first of its kind platform where you asssets are maaged autonemously, without human input, and at the same time are a click away from you. Thanks to blnNFT technology, you never hate to worry about your assets again.

                    </Text>

                </Box>
            </Box>
        </>
    )
}


