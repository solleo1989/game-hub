import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorPalette={color} fontSize="20px" paddingX={3} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
