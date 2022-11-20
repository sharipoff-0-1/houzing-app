import React from "react";
import { Container, Img, Content } from "./style";
import noimg from "../../assets/img/noimg.jpeg";
import category from "../../assets/img/category.png";
import { Blur } from "../CategoryCard/style";

const CategoryCard = ({ data = {} }) => {
  const { name } = data;
  // console.log(data);
  return (
    <Container>
      <Img src={category || noimg} />
      <Blur />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};

export default CategoryCard;
