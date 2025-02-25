import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge size="lg" borderRadius={4} colorPalette={color} px={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
