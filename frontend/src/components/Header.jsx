import React from "react";
import { Heading, Flex, Divider } from "@chakra-ui/react";
function Header() {
  return (
    <div>
      <Flex
        os="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="0.5rem"
        bg="gray.400"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="sm">
            Todos
          </Heading>
          <Divider />
        </Flex>
      </Flex>
    </div>
  );
}

export default Header;
