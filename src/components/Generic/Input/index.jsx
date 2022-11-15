import React from "react";
import { Container } from "./style";

export const Input = ({
  type,
  handleClick,
  placeholder,
  name,
  value,
  defaultValue,
  width,
  height,
}) => {
  return (
    <Container
      defaultValue={defaultValue}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleClick}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input;
