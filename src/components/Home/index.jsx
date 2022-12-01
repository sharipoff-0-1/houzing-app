import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel";
import Recomended from "../Recommended";
import Why from "../Why";
import Category from "../Category";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recomended />
      <Why />
      <Category />
    </Container>
  );
};

export default Home;
