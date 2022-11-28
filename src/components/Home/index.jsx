import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel";
import Recomended from "../Recommended";
import Category from "../Category";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recomended />
      <Category />
    </Container>
  );
};

export default Home;
