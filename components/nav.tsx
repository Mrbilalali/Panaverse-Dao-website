import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Nav() {
  return (
    <Box boxShadow={"lg"}>
      <Container maxW={1400}>
        <SimpleGrid
          templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }} >
          <Box>
            <Image
              src={"/red-p-logo-text_dao_croped.png"}
              alt="panaverse-Logo"
              m={"5"}
              w={"100"}
              h="90"
            ></Image>
          </Box>

          <Flex
            display={{ base: "none", lg: "flex" }}
            placeItems="center"
            gap={10}
            color="black"
            fontSize={18}
            fontWeight="semibold"
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"}>Syllabus</Link>
            {/* <Link href={""}>Explore</Link>
            <Link href={""}>Courses</Link> */}
          </Flex>
          <Box display={{ base: "none", lg: "flex" }}>
            <Button mt={10} float={"right"} colorScheme="red" size={"lg"}>
              <Link href={"https://www.piaic.org/"}>Apply Now</Link>
            </Button>
          </Box>

          <Box pt={"10"} display={{ base: "initial", lg: "none" }}>
            <Menu>
              <MenuButton
                float={"right"}
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>
                  <Link href={"/"}>Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/about"}>About</Link>
                </MenuItem>
                <MenuItem><Link href={"https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"}>Syllabus</Link></MenuItem>
                {/* <MenuItem><Link href={""}>Explore</Link></MenuItem> */}
                {/* <MenuItem><Link href={""}>Courses</Link></MenuItem> */}
                <MenuItem>
                  <Link href={"https://www.piaic.org/"}>Apply Now</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
