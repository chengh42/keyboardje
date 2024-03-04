"use client";

import {characters} from "./constants";
import {Keyboard} from "./components/Keyboard";
import {ChakraProvider, VStack} from "@chakra-ui/react";
import {Header} from "./components/Header";

export default function Home() {
  return (
    <ChakraProvider>
      <main>
        <VStack justifyContent="space-between" className="min-h-screen md:p-24">
          <Header />
          <Keyboard characters={characters} />
        </VStack>
      </main>
    </ChakraProvider>
  );
}
