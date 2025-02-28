import { InputGroup } from "@/components/ui/input-group";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup width="100%">
        <Input ref={ref} placeholder="Search games..." borderRadius={20} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
