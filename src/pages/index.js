import { Inter } from "next/font/google";

import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import {
  Box,
  Center,
  Stack,
  AbsoluteCenter,
  Heading,
  Flex,
  Spacer,
  Image,
  Text,
  Wrap,
  WrapItem,
  Button,
  Card,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Container,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";

import { ArrowUpIcon } from "@chakra-ui/icons";
import NavbarContainer from "../../compontents/NavbarContainer";
const inter = Inter({ subsets: ["latin"] });
import SmallCentered  from "../../compontents/FooterComponent";
export default function Home() {
  return (
    <>
      <Container maxW={"6xl"}
      >
        <NavbarContainer />
        <Box w="100%" h={"800px"}>
          <Flex
            justify={["space-evenly"]}
            align={"center"}
            h={{ lg: "80%", md: "80%", sm: "80%", base: "auto" }}
            flexDirection={"row"}
            flexWrap={["wrap", "wrap", "nowrap"]}
          >
            <Box pb={7}>
              <Image
                src={"./Logo_FINE__1_-removebg-preview-transformed.png"}
                boxSize={{
                  sm: "300px",
                  base: "150px",
                  lg: "400px",
                  md: "400px",
                }}
                maxWidth={"100%"}
                objectFit={"contain"}
              ></Image>
            </Box>

            <Box pb={6}>
              <Stack direction={"column"}>
                <Heading
                  size="4xl"
                  bgColor={"#dedae3"}
                  fontSize={{ lg: "120px", md: "90px", base: "60px" }}
                  bgClip="text"
                >
                  Rebalance
                </Heading>
                <Heading
                  size="4xl"
                  bgColor={"#8b19fc"}
                  fontSize={{ lg: "120px", md: "90px", base: "50px" }}
                  bgClip="text"
                >
                  <a class="rebalance"></a>Network
                </Heading>
              </Stack>
              <Text
                fontWeight={"bold"}
                fontSize={{ lg: "18px", base: "14px" }}
                maxW={"400px"}
                pt={"5"}
                pl={"2"}
              >
                Decentralized proof-of-stake NFT #Crypto portfolio management.
                Be a step ahead with automatically rebalanced portfolio.
              </Text>
            </Box>
          </Flex>

          <Box h={"auto"} pt={"30px"}>
            <Flex
              justify={"center"}
              align={"center"}
              flexDirection={["column", "row"]}
              flexWrap={["wrap", "wrap", "nowrap"]}
            >
              <Box>
                <Button
                  rightIcon={<FiArrowUpRight size={"30px"} />}
                  size={{ lg: "lg", md: "lg" }}
                  w={{ lg: "200px", base: "150px" }}
                  h={{ lg: "70px", md: "70px", base: "50px" }}
                  rounded={"30px"}
                  fontSize={{ lg: "20px", base: "15px" }}
                  mx="40px"
                  my="10px"
                >
                  Open Testnet
                </Button>
              </Box>

              <Box>
                <Button
                  rightIcon={<FiArrowDown size={"30px"} />}
                  size={{ lg: "lg", md: "md" }}
                  w={{ lg: "200px", base: "150px" }}
                  h={{ lg: "70px", md: "70px", base: "50px" }}
                  rounded={"30px"}
                  fontSize={{ lg: "20px", base: "15px" }}
                  mx="40px"
                  my="10px"
                >
                  Learn More
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box mb={"200px"}>
            {/* added a margin bottom after all cards are displayed wherea footer wpudl be displayed  */}
            <Flex align={"center"} justify={"center"} mt={"100px"}>
              <Card w="80%" p={0} borderRadius={0} rounded={20}>
                <CardBody>
                  <Stack mt="6" spacing="3" direction={["column", "row"]}>
                    <Box>
                      <Heading size={["md", "2xl", "3xl"]} noOfLines={1}>
                        RebalanceNetwork
                      </Heading>
                      <Divider color={"grey"} />
                      <Text mt={5}>
                        We at RebalanceNetwork believe that you should own your
                        portfolio. If someone bans you from withdrawing your
                        assets... are they really yours? Or when you open
                        Twitter and see that coin XYZ made 50% gains, do you
                        think to yourself, "if I paid more attention I could
                        have caught it?" That is why we are building a solution
                        that will be secure and fully in your control, allowing
                        your money to move where it can earn more.
                      </Text>
                      <Box mt={6}>
                        <Heading size={["sm", "md", "lg"]}>
                          Focus on safety.
                        </Heading>
                        <Text mt={6}>
                          This sofa is perfect for modern tropical spaces,
                          baroque inspired spaces, earthy toned spaces and for
                          people who love a chic design with a sprinkle of
                          vintage design.
                        </Text>
                      </Box>
                      <Box mt={6}>
                        <Heading size={["sm", "md", "lg"]}>You own it.</Heading>
                        <Text mt={6}>
                          You can control and interact with your portfolio at
                          any time. It is all on-chain which means that nobody
                          else has control over your assets. You can withdraw or
                          buy more at anytime. Thanks to blnNFT.
                        </Text>
                      </Box>
                      <Box mt={6}>
                        <Heading size={["sm", "md", "lg"]}>Portfolio.</Heading>
                        <Text mt={6}>
                          The portfolio will be a basket of different currencies
                          based on their market cap, and performance. This
                          basket will be changed regularly - that does not mean
                          that it must be changed. also the different weights in
                          the portfolio of the currencies can change that is
                          what we call <strong>rebalancing.</strong>
                        </Text>
                      </Box>
                    </Box>
                    <Box width={"800px"} mx={8} pl={7}>
                      <Image src={"./assets/blnNetworkImage.png"} />
                    </Box>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter></CardFooter>
              </Card>
            </Flex>

            <Flex align={"center"} justify={"center"} mt={"100px"}>
              <Card w="80%" p={0} borderRadius={0} rounded={20}>
                <CardBody>
                  <Stack mt="6" spacing="3" direction={["column", "row"]}>
                    <Box></Box>
                    <Box>
                      <Heading size={["md", "2xl", "3xl"]} noOfLines={1}>
                        blnNFT
                      </Heading>
                      <Divider color={"grey"} />
                      <Text mt={5}>
                        Your portfolio will be managed by a algorithm. That is
                        where blnNFT come to play. Think of it as a share. You
                        can own as many blnNFTs as you want. They themselves do
                        not hold any value , they hold the value of assets
                        behind it.
                      </Text>
                      <Box mt={6}>
                        <Heading size={["sm", "md", "lg"]}>
                          Buliding stone.
                        </Heading>
                        <Text mt={6}>
                          blnNFT is a building stone of our project. It acts as
                          a share in the portfolio that you own, and can at any
                          time sell or buy. Nobody can take the value from you.
                        </Text>
                      </Box>
                      <Box mt={6}>
                        <Heading size={["sm", "md", "lg"]}>
                          Create your invesments.
                        </Heading>
                        <Text mt={6}>
                          We will provide a way for you to set recurring buys,
                          and also a value where you want to sell. Meaning that
                          you can invest monthly to the best earning
                          cryptocurrencies.
                        </Text>
                      </Box>
                      <Box mt={6}>
                        <Heading size={["sm", "md", "lg"]}>
                          No nonsence.
                        </Heading>
                        <Text mt={6}>
                          Our blnNFT is a non fungible way of proving a stake in
                          the portfolio. There will be no scarcity or rarity in
                          place. NFT is not just an image that could cost
                          millions or a few cents. We are utilizing its full
                          potential.
                        </Text>
                      </Box>
                    </Box>
                    <Box width={"800px"} mx={8} pl={7}>
                      <Image src={"./assets/blnNFTImage.png"} />
                    </Box>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>{/* footer  */}</CardFooter>
              </Card>
            </Flex>

            <Flex align={"center"} justify={"center"} mt={"100px"} mb={""}>
              <Card w="80%" p={0} borderRadius={0} rounded={20}>
                <CardBody>
                  <Stack mt="6" spacing="3" direction={["column", "row"]}>
                    <Box></Box>
                    <Box>
                      <Heading size={["md", "2xl", "3xl"]} noOfLines={1}>
                        blnAPP
                      </Heading>
                      <Divider color={"grey"} />
                      <Text mt={5}>
                        For a customer it might be a harsh process to go through
                        every time he wants to buy or sell the blnNFT without a
                        app. That is why we committed to creating a app that
                        will provide a dashboard and a place to interact with
                        you NFTs.
                      </Text>
                      <Box mt={6}>
                        <Heading size={["sm", "md", "lg"]}>Dashboard.</Heading>
                        <Text mt={6}>
                          Any user will be able to see the value of his
                          portfolio and other metrics. Like the total value of
                          the portfolio, how much is the portfolio earning, and
                          the basket of currencies the portfolio consists of.
                        </Text>
                      </Box>
                      <Box mt={6}>
                        <Heading size={["sm", "md", "lg"]}>
                          Interaction with blnNFT.
                        </Heading>
                        <Text mt={6}>
                          Here you will be able to interact with the smart
                          contract. Sell, buy, set recurring buys (and sells) as
                          you wish. Because it is your money. And you can do
                          whatever you want with it. But if you want to use just
                          the main functionalities, you can. It’s up to you.
                        </Text>
                      </Box>
                    </Box>
                    <Box width={"800px"} mx={8} pl={7}>
                      <Image src={"./assets/blnAppImage.png"} />
                    </Box>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>{/* footer  */}</CardFooter>
              </Card>
            </Flex>
          </Box>
          <SmallCentered />
        </Box>
        
      </Container>
    </>
  );
}
