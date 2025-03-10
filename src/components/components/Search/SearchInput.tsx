import { InputGroup } from "@/components/ui/input-group";
import useGameQueryStore from "@/store";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  //selector so that dependent onyl wit the search text
  const setSearchText = useGameQueryStore((state) => state.setSearchText);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup width="100%">
        <Input ref={ref} placeholder="Search games..." borderRadius={20} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
