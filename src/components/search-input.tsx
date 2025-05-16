import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input
        borderRadius={25}
        placeholder="Search games..."
        variant="outline"
        size="lg"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
