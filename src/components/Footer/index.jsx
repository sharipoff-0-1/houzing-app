import React from "react";
import { Container, Content, Icon } from "./style";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Email width /> 329 Queensberry Street, North Melbourne VIC 3051,
          Australia.
        </Content.Item>
        <Content.Item>
          {" "}
          <Icon.Phone />
          123 456 7890
        </Content.Item>
        <Content.Item>
          <Icon.Email />
          support@houzing.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Discover</Content.Title>
        <Content.Item>Chicago</Content.Item>
        <Content.Item>Los Angels</Content.Item>
        <Content.Item>Virginia</Content.Item>
        <Content.Item>Mexico</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>Apartments</Content.Item>
        <Content.Item>Condos</Content.Item>
        <Content.Item>Houses</Content.Item>
        <Content.Item>Offices</Content.Item>
        <Content.Item>Retail</Content.Item>
        <Content.Item>Villas</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>About us</Content.Item>
        <Content.Item>Terms & Conditions</Content.Item>
        <Content.Item>Support</Content.Item>
        <Content.Item>Contact</Content.Item>
      </Content>
    </Container>
  );
};
export default Footer;
