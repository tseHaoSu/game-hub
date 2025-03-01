import { SkeletonText } from "@/components/ui/skeleton";
import { Card, Skeleton } from "@chakra-ui/react";

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
