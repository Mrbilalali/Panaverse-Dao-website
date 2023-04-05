"use client";
import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { cards } from "@/components/(Data)/CardData";

export default function Syllabus() {
  return (
    <>
      <Box pt={"30px"}>
        <Container maxW={1400}>
          <Center flexDir="column">
            <Heading size="2xl">Course Syllabus</Heading>
            <Text mt={"20px"} textAlign="center" px={{ base: "20px", lg: "130px" }}>
              The first three quarters are shared by all specialties and are
              dedicated to studying Object-Oriented Programming and cutting-edge
              Full-Stack Web 2.0 development. It is going to be a
              fifteen-month-long hybrid program that includes both onsite and
              online classes and is divided into five quarters of 13 weeks each
            </Text>
          </Center>

          <Center flexDir="column" mt={"20px"}>
            <Heading>Common in All</Heading>
            <Text textAlign="center" px={{ base: "20px", lg: "130px" }}>
              Every participant of the program will start by completing the
              following three core courses:
            </Text>
          </Center>

          <Center>
            <Flex display={{ lg: "flex", base: "grid" }} mt={"30px"} gap="20px">
              <Box
                textAlign={"center"}
                p="30px"
                boxShadow={"dark-lg"}
                borderRadius="20px"
                width={"290px"}
              >
                <Heading>Quater I</Heading>
                <Text pt={"5px"}>
                  CS-101: Object-Oriented Programming using TypeScript and
                  Typescript for React
                </Text>
              </Box>
              <Box
                textAlign={"center"}
                p="30px"
                boxShadow={"dark-lg"}
                borderRadius="20px"
                width={"290px"}
              >
                <Heading>Quater II</Heading>
                <Text pt={"5px"}>
                  W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using
                  Next.js 13 and Cloud Development Kit (CDK) for Terraform
                </Text>
              </Box>
              <Box
                textAlign={"center"}
                p="30px"
                boxShadow={"dark-lg"}
                borderRadius="20px"
                width={"290px"}
              >
                <Heading>Quater III</Heading>
                <Text pt={"5px"}>
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development
                </Text>
              </Box>
            </Flex>
          </Center>

          <Center flexDir="column" mt={"40px"}>
            <Heading>Specialized Tracks</Heading>
            <Text textAlign="center" px={{ base: "20px", lg: "130px" }}>
            After completing the first three quarters the participants will select one or more specializations consisting of two courses each:
            </Text>
          </Center>

        </Container>

        <Container
          maxW={1400}
          mt="30px"
          pb="50px"
          bgSize="cover"
          bgAttachment={"fixed"}
          bgImage="./img/3d-render-modern-network.jpg"
        >
          {cards.map((data) => (
            <Box key={data.id} pt={"40px"}>
              <Center textColor={"white"} flexDir="column" mt={"50px"}>
                <Heading textAlign={"center"}>{data.heading}</Heading>
                <Text
                  fontWeight={"medium"}
                  mt={"20px"}
                  textAlign="center"
                  px={{ base: "10px", lg: "130px" }}
                >
                  {data.text}
                </Text>
              </Center>

              <Center>
                <Flex display={{ lg: "flex", base: "grid" }} mt={"30px"} gap="20px">
                  <Box
                    bgColor={"white"}
                    textAlign={"center"}
                    p="50px"
                    boxShadow={"dark-lg"}
                    borderRadius="20px"
                    width={"350px"}
                  >
                    <Heading>{data.heading2}</Heading>
                    <Text fontWeight={"medium"} pt={"5px"}>
                      {data.text2}
                    </Text>
                  </Box>
                  <Box
                    bgColor={"white"}
                    textAlign={"center"}
                    p="50px"
                    boxShadow={"dark-lg"}
                    borderRadius="20px"
                    width={"350px"}
                  >
                    <Heading>{data.heading3}</Heading>
                    <Text fontWeight={"medium"} pt={"5px"}>
                      {data.text3}
                    </Text>
                  </Box>
                </Flex>
              </Center>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}
