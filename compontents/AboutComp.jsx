import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react"
import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
    FcLock,
    FcTreeStructure,
    FcKey,
    FcBullish
} from "react-icons/fc"
import {FaBalanceScaleRight} from "react-icons/fa"

const Card = ({ heading, description, icon, href }) => {
    return (
        <Box
            maxW={{ base: "full", md: "275px" }}
            w={"full"}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
        >
            <Stack align={"start"} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={"center"}
                    justify={"center"}
                    color={"white"}
                    rounded={"full"}
                    bg={useColorModeValue("gray.100", "gray.700")}
                >
                    {icon}
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{heading}</Heading>
                    <Text mt={1} fontSize={"sm"}>
                        {description}
                    </Text>
                </Box>
                <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
                    Learn more
                </Button>
            </Stack>
        </Box>
    )
}

export default function gridListWith() {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
                <Heading fontSize={{ base: "3xl", sm: "4xl" }} fontWeight={"bold"}>
                    We stand for:
                </Heading>
                <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>

                </Text>
            </Stack>

            <Container maxW={"5xl"} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    <Card
                        heading={"Security"}
                        icon={<Icon as={FcLock} w={10} h={10} />}
                        description={
                            "Security is our priroty. Everything we do is happening ob blockchain, with your permition."
                        }
                        href={"#"}
                    />
                    <Card
                        heading={"Rebalancing"}
                        icon={<Icon as={FaBalanceScaleRight} w={10} h={10} />}
                        description={
                            "Your assets are not sleeping. They are always where they can earn the most, and also lose the least."
                        }
                        href={"#"}
                    />
                    <Card
                        heading={"PoS"}
                        icon={<Icon as={FcTreeStructure} w={10} h={10} />}
                        description={
                            "Our algorithm works with Proof-of-Stake blnNFT which act as a share in the total portfolio."
                        }
                        href={"#"}
                    />
                    <Card
                        heading={"Yours"}
                        icon={<Icon as={FcKey} w={10} h={10} />}
                        description={
                            "Your assets are always a click away. In return you get blnNFT, that you can always sell back for the current value."
                        }
                        href={"#"}
                    />
                    <Card
                        heading={"Advantageous"}
                        icon={<Icon as={FcBullish} w={10} h={10} />}
                        description={
                            "RebalanceNetwork has a advatage over other porfolio managments, because it relies on market sytuation, and calulation. Also we allways keep it simple."
                        }
                        href={"#"}
                    />
                </Flex>
            </Container>
        </Box>
    )
}
