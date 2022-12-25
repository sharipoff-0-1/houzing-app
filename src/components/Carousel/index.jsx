import React, { useRef } from "react";
import { Img, Arrow, Container, Blur, Content } from "./style";
import { Carousel } from "antd";

import img1 from "../../assets/img/house1.png";
import img2 from "../../assets/img/house2.png";

export const GenCarousel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {};

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc className="subChild">
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Desc>
        <Content.Price className="subTitle">$5,250 / month</Content.Price>
      </Content>
      <Arrow left="true" onClick={onMove} data-name="left" />
      <Arrow onClick={onMove} data-name="right" />
    </Container>
  );
};
export default GenCarousel;
