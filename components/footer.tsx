import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <Box bg={"black"} textColor="white">
      <Container maxW={1400}>
        <SimpleGrid
          textAlign={{ base: "center", lg: "start" }}
          gap={"5"}
          py={"30"}
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        >
          <Box pb={"15"}>
            <Heading pb={"15"}>About Us</Heading>

            <Image
            m={{ base: "auto", lg: "0" }}
              src={"/panaverse-small-logo.png"}
              alt="panaverse"
              width={"150"}
              height={"150"}
            ></Image>

            <Text pr={{ base: "0", lg: "50" }} textColor={"gray.300"} pt="10">
              Certified Web 3.0 and Metaverse Developer A One and Quarter Years
              Panaverse DAO Earn as you Learn Program Getting Ready for the Next
              Generation of the Internet
            </Text>
          </Box>

          <Box pb={"15"}>
            <Heading>Pages</Heading>
            <Grid textColor={"gray.300"} pt={"5"}>
              <Link href={"/"}>Home</Link>
              <Link href={"https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"}>Syllabus</Link>
              <Link href={"/about"}>About</Link>
              {/* <Link href={""}>Explore</Link>
              <Link href={""}>Courses</Link> */}
            </Grid>
          </Box>

          <Box pb={"15"}>
            <Heading>Follow US</Heading>
            <Grid textColor={"gray.300"} pt={"5"}>
              <Link href={"https://www.youtube.com/@panaverse"}>Youtube</Link>
              <Link href={"https://www.linkedin.com/company/panaverse/"}>linkedin</Link>
              <Link href={"https://www.facebook.com/groups/piaic/"}>Facebook</Link>
              <Link href={"https://twitter.com/Panaverse_edu"}>Twitter</Link>
              <Link href={"https://github.com/panaverse"}>Git Hub</Link>
            </Grid>
          </Box>

          <Box pb={"15"}>
            <Heading>Contact US</Heading>
            <Grid textColor={"gray.300"} pt={"5"}>
              <Text>+92 308 2220203</Text>
              <Text>education@piaic.org</Text>
              <Text>Pakistan</Text>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
