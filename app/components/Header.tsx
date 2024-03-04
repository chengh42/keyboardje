import Image from "next/image";
import {HStack} from "@chakra-ui/react";
import {ThemeToggle} from "./ThemeToggle";

export function Header() {
  return (
    <HStack justify="end" className="w-full md:px-24" gap={5}>
      <ThemeToggle />
      <a
        href="https://github.com/chengh42/keyboardje"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="./github-mark.svg"
          alt="GitHub repository"
          className="dark:invert"
          width={25}
          height={6}
        />
      </a>
    </HStack>
  );
}
