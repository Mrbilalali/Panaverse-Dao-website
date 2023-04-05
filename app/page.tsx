"use client"
import Footer from "@/components/footer";
import Main from "@/components/main";
import Nav from "@/components/nav";
import { ChakraProvider } from "@chakra-ui/react";

import React from 'react'

export default function Home() {
  return (
 
      <ChakraProvider>
      {/* <Nav/> */}
      <Main/>
      {/* <Footer/> */}
      </ChakraProvider>
  
 
  )
}