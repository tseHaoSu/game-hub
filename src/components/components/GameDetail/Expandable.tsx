import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const Expandable = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  if (!children) return null;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <>
      <Text>
        {summary}
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme={"yellow"}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read less" : "Read more"}
        </Button>
      </Text>
    </>
  );
};

export default Expandable;
