import { Card, Skeleton } from "@chakra-ui/react";
import React from "react";
import { SkeletonText } from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root width={350} overflow="hidden" boxShadow="xl">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
