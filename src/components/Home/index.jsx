import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel";
import Recomended from "../Recommended";
import Why from "../Why";
import Recent from "../Recent";
import Banner from "../Banner";
import Category from "../Category";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recomended />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </Container>
  );
};

export default Home;
