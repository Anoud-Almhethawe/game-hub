import { Image, SimpleGrid, Box, Grid } from "@chakra-ui/react";
import usScreenshots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}
const ScreenShoots = ({ gameId }: Props) => {
  const { data } = usScreenshots(gameId);
  console.log();

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map(s => (
          <Image key={s.id} src={s.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ScreenShoots;
