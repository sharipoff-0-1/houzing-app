import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel";
import Category from "../Category";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <Category />
    </Container>
  );
};

export default Home;
