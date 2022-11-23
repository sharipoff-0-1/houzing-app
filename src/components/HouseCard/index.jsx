import React from "react";
import { Container, Img, Content, Details, Icons, Divider } from "./style";
import noimg from "../../assets/img/noimg.jpeg";

const HouseCard = ({ data = {} }) => {
  const {
    city,
    country,
    description,
    houseDetails,
    price,
    salePrice,
    attachments,
    address,
    category,
  } = data;
  // console.log(data);
  return (
    <Container>
      <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
      <Content>
        <div className="subTitle">
          {city}, {country}, {description}
        </div>
        <div className="info">
          {address || "Unknown"} - {""} {category?.name}{" "}
          {houseDetails?.room || "unknown"} rooms
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed {houseDetails?.beds || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">Bath {houseDetails?.bath || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">Garage {houseDetails?.garage || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">
              Area {houseDetails?.area || 0} m<sup>2</sup>
            </div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">${salePrice}/mo</div>
          <div className="subTitle">${price}/mo</div>
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
