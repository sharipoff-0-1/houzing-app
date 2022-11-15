import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = forwardRef(
  (
    {
      type,
      handleClick,
      placeholder,
      name,
      value,
      defaultValue,
      width,
      height,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          defaultValue={defaultValue}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={handleClick}
          type={type}
          width={width}
          height={height}
          icon={icon}
        />
      </Wrapper>
    );
  }
);

export default Input;
