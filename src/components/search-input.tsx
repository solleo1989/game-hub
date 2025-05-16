import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={searchRef}
          borderRadius={25}
          placeholder="Search games..."
          variant="outline"
          size="lg"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
