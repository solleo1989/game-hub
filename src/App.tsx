import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Button colorScheme="red">Button</Button>
      <Button colorPalette="red">Button</Button>
      <Button colorPalette="blue" variant="outline">
        Button
      </Button>
      <Button colorPalette="green" variant="surface">
        Button
      </Button>
      <Button colorPalette="yellow" variant="subtle">
        Button
      </Button>
    </>
  );
};

export default App;
