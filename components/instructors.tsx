import { Box, Center, Container, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function Instructors() {
  return (
    <Box>
      <Container maxW={1400}>
        <Center>
          <Heading>Our Instructors</Heading>
        </Center>
        <Flex my={"10"} gap={"10"} flexDir={{lg:"row", base: "column"}}>
          <Box>
            <Center>
              <Image borderRadius={"full"} alt="zia khan" width="90" height={"90"} src="/avatar/Zia_Khan.jpg"></Image>
            </Center>
              <Heading textAlign={"center"} size="md">Zia Khan</Heading>
              <Text textAlign={"center"} px="30px" fontSize={"sm"}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
          </Box>
          <Box>
            <Center>
              <Image borderRadius={"full"} alt="Zeeshan Hanif" width="90" height={"90"} src="/avatar/Zeeshan_Hanif.jpg"></Image>
            </Center>
              <Heading textAlign={"center"} size="md">Zeeshan Hanif</Heading>
              <Text textAlign={"center"} px="30px" fontSize={"sm"}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
          </Box>
          <Box>
            <Center>
              <Image borderRadius={"full"} alt="Daniyal_Nagori" width="90" height={"90"} src="/avatar/Daniyal_Nagori.jpg"></Image>
            </Center>
              <Heading textAlign={"center"} size="md">Daniyal Nagori</Heading>
              <Text textAlign={"center"} px="30px" fontSize={"sm"}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
          </Box>
          <Box>
            <Center>
              <Image borderRadius={"full"} alt="Adil_Altaf" width="90" height={"90"} src="/avatar/Adil_Altaf.jpg"></Image>
            </Center>
              <Heading textAlign={"center"} size="md">Adil Altaf</Heading>
              <Text textAlign={"center"} px="30px" fontSize={"sm"}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
          </Box>
          <Box>
            <Center>
              <Image borderRadius={"full"} alt="Hira_khan" width="90" height={"90"} src="/avatar/Hira_khan.jpg"></Image>
            </Center>
              <Heading textAlign={"center"} size="md">Hira Khan</Heading>
              <Text textAlign={"center"} px="30px" fontSize={"sm"}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
          </Box>
         
          
        </Flex>
      </Container>
    </Box>
  );
}
