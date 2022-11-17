import React from "react";
import { Container, Img, Content, Details, Icons, Divider } from "./style";
import noimg from "../../assets/img/noimg.jpeg";

const HouseCard = ({ url, title }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice View"}</div>
        <div className="info">Quincy St, Brooklyn, NY, USA</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed 1</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">bath 1</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">Garage 1</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">Ruler 1</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
