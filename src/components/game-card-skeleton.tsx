import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="300px">
        <Card.Body>
          <SkeletonText></SkeletonText>
        </Card.Body>
      </Skeleton>
    </Card.Root>
  );
};

export default GameCardSkeleton;
