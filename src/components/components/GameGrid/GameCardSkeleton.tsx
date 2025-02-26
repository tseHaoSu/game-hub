import { Card, Skeleton } from "@chakra-ui/react";
import React from "react";
import { SkeletonText } from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root
      height="100%"
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
