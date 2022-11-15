import React from "react";
import { Container } from "./style";

export const Button = ({ children, type, handleClick, width, height }) => {
  return (
    <Container onClick={handleClick} type={type} width={width} height={height}>
      {children || "Button"}
    </Container>
  );
};

export default Button;
