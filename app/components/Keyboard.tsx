import {Kbd, HStack, VStack} from "@chakra-ui/react";

type Props = {
  characters: string[][];
};

export function Keyboard({characters}: Props) {
  return (
    <VStack spacing={3}>
      {characters.map((row) => (
        <HStack key={row[0]} spacing={3}>
          {row.map((char) => (
            <Kbd key={char}>{char}</Kbd>
          ))}
        </HStack>
      ))}
    </VStack>
  );
}
