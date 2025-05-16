import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";

const SortSelector = () => {
  //   const { data, error } = usePlatform();
  //   if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {/* {selectedPlatform?.name || "Platforms"} */}
          Order by: Relevance
          <BsChevronDoubleDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item key="" value="1"></Menu.Item>
            <Menu.Item key="" value="2"></Menu.Item>
            <Menu.Item key="" value="3"></Menu.Item>
            <Menu.Item key="" value="4"></Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
