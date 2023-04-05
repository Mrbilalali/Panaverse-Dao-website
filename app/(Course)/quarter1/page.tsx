"use client";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Outline, Outline2, quiz } from "@/components/(Data)/DataQuarter1";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";
// import { cards } from "@/components/Data";

export default function Syllabus() {
  return (
    <>
      <Box bgAttachment={"fixed"} bgImage="/halftone-background-with-circles_23-2148907689.avif">
        <Container maxW={1400}>
          <Flex
            pt={{ lg: "150px", base: "30" }}
            pb="100"
            px={{ lg: "40px", base: "5" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box
              bg={"blackAlpha.500"}
              py="20"
              textColor={"white"}
              flexBasis={"50%"}
              px="40px"
              rounded={"3xl"}
            >
              <Button colorScheme="whiteAlpha">
                <Text>Core Track</Text>
              </Button>
              <Heading size={"2xl"}>Common in All Specializations</Heading>
              <Text pt={"10"}>
                Every participant of the program will start by completing the
                following three core courses:
              </Text>
              <Button mt={"10"} size={"lg"} colorScheme="red">
                <Link href="https://www.piaic.org/">Enroll Now</Link>
              </Button>
            </Box>

            <Box
              ml={{ lg: "70px", base: "0" }}
              mt={{ lg: "auto", base: "0px" }}
              flexBasis={"50%"}
            >
              <Image
                src={"/Hand coding-bro.png"}
                alt="panaverse"
                width={"500"}
                height={"500"}
              ></Image>
            </Box>
          </Flex>
        </Container>
      </Box>
      {/*c */}
      <Box pb={"40px"} bgAttachment="fixed" pt={"30px"}>
        <Container p={"30px"} bg={"white"} rounded={"3xl"} maxW={1400}>
          <Heading textAlign={"center"} size={"3xl"}>
            Quarter I (Core)
          </Heading>

          <Box textAlign={"left"} flexDir="column">
            <Heading mt={"30px"} size="lg">
              CS-101: Object-Oriented Programming using TypeScript
            </Heading>
            <Heading mt={"20px"} size={"md"}>
              Course Description:
            </Heading>
            <Text mt={"10px"} pr={{ base: "20px", lg: "350px" }}>
              We will start the program by learning the fundamentals of
              Object-Oriented programming using JavaScript and TypeScript. We
              will also understand the latest Web trends i.e. Web 3.0 and
              Metaverse concepts and try to understand their working from the
              perspective of the users.
            </Text>
          </Box>

          {/* outline Box */}
          <Box textAlign={"left"} flexDir="column">
            <Heading mt={"30px"} size="lg">
              Course Outline:
            </Heading>

            {Outline.map((data) => (
              <Box key={data.id}>
                <Heading mt={"20px"} size={"md"}>
                  {data.heading}
                </Heading>

                <Text
                  mt={"10px"}
                  pr={{ base: "20px", lg: "350px" }}
                  color="blue"
                  fontWeight={"semibold"}
                >
                  <Link href={data.link}>{data.text}</Link>{" "}
                </Text>

                <Text
                  mt={"10px"}
                  pr={{ base: "20px", lg: "350px" }}
                  color="blue"
                  fontWeight={"semibold"}
                >
                  <Link href={data.link2}>{data.text2}</Link>
                </Text>

                <Text
                  mt={"10px"}
                  pr={{ base: "20px", lg: "350px" }}
                  fontWeight={"semibold"}
                >
                  {data.text3}
                </Text>
              </Box>
            ))}
          </Box>

          {/* Quiz typescript */}

          <Box textAlign={"left"} flexDir="column">
            <Heading mt={"40px"} size="lg">
              Fundamentals of JavaScript and Node.js Quiz{" "}
            </Heading>

            {quiz.map((data) => (
              <Box key={data.id}>
                <Heading mt={"20px"} size={"md"}>
                  {data.heading}
                </Heading>
                <Text
                  mt={"10px"}
                  pr={{ base: "20px", lg: "350px" }}
                  fontWeight={"semibold"}
                >
                  {data.text}
                </Text>
                <Text
                  mt={"10px"}
                  pr={{ base: "20px", lg: "350px" }}
                  fontWeight={"semibold"}
                >
                  {data.text1}
                </Text>
                <Text
                  mt={"10px"}
                  pr={{ base: "20px", lg: "350px" }}
                  fontWeight={"semibold"}
                >
                  {data.text2}
                </Text>
                <Text
                  mt={"10px"}
                  pr={{ base: "20px", lg: "350px" }}
                  color="blue"
                  fontWeight={"semibold"}
                >
                  <Link href={data.link3}>{data.text3}</Link>{" "}
                </Text>
              </Box>
            ))}
          </Box>

          {/* outline 2 continue Box */}
          <Box textAlign={"left"} flexDir="column">
            <Heading mt={"30px"} size="lg">
              4. Object-Oriented Programming with TypeScript
            </Heading>

            {Outline2.map((data) => (
              <Box key={data.id}>
                <Heading mt={"20px"} size={"md"}>
                  {data.heading}
                </Heading>

                <Text
                  mt={"10px"}
                  pr={{ base: "20px", lg: "350px" }}
                  color="blue"
                  fontWeight={"semibold"}
                >
                  <Link href={data.link}>{data.text}</Link>{" "}
                </Text>

                <Text
                  mt={"10px"}
                  pr={{ base: "20px", lg: "350px" }}
                  color="blue"
                  fontWeight={"semibold"}
                >
                  <Link href={data.link2}>{data.text2}</Link>
                </Text>

                <Text
                  mt={"10px"}
                  pr={{ base: "20px", lg: "350px" }}
                  fontWeight={"semibold"}
                >
                  {data.text3}
                </Text>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
