import React from "react";
import { Container, Img, Content } from "./style";
import noimg from "../../assets/img/noimg.jpeg";
import category from "../../assets/img/category.png";
import { Blur } from "../CategoryCard/style";

const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={category || noimg} />
      <Blur />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};

export default CategoryCard;
