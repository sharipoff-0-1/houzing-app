import React from "react";
import { Container, Content, Wrapper, Icon } from "./style";

export const Why = () => {
  return (
    <Container>
      <Content>
        <h1 className="title">Why Choose Us</h1>
        <h1 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </h1>
      </Content>
      <Wrapper>
        <Content>
          <Icon.Email />
        </Content>
        <Content>
          <Icon.House />
        </Content>
        <Content>
          <Icon.Calculator />
        </Content>
        <Content>
          <Icon.Maps />
        </Content>
      </Wrapper>
    </Container>
  );
};
export default Why;
