import { useParams } from "react-router-dom";
import { Container } from "./style";

export const HouseItem = () => {
  const params = useParams();
  return (
    <Container>
      <h1>HouseItem</h1>
    </Container>
  );
};

export default HouseItem;
