import { SearchIcon } from "@chakra-ui/icons";
import { Input, Text, InputGroup, InputRightElement } from "@chakra-ui/react";

export default function SearchBar() {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div style={{ display: "flex", justifyContent:"space-between" }}>
        <div>
          <Text fontSize="1.6rem" fontWeight="900">
            Top Email Sending and Testing Resources
          </Text>
        </div>
        <div>
          <InputGroup>
            <Input width="600px" placeholder="Search.." size="lg" />
            <InputRightElement
              cursor="pointer"  
              pointerEvents="none"
              children={<SearchIcon color="gray.700" />}
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
