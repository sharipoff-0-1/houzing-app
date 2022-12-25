import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import {
  Container,
  Content,
  Section,
  Icons,
  Details,
  OldPrice,
  Description,
} from "./style";

export const HouseItem = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const request = useRequest();

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }, [params?.id]);
  return (
    <Container>
      <Section>
        <Content>
          <Content.Title large>{data?.name}</Content.Title>
          <div className="info">
            {data?.city}, {data?.address}, {data?.country}
          </div>
        </Content>
        <Content flex>
          <Icons.Share /> <Icons.Title>Share</Icons.Title>
          <Icons.Love /> <Icons.Title>Save</Icons.Title>
        </Content>
      </Section>
      <Section>
        <Details>
          <Icons.Bed />
          <Details.Title className="info">
            Bed {data?.houseDetails?.beds || 0}
          </Details.Title>
          <Icons.Bath />
          <Details.Title className="info">
            Bath {data?.houseDetails?.bath || 0}
          </Details.Title>
          <Icons.Car />
          <Details.Title className="info">
            Garage {data?.houseDetails?.garage || 0}
          </Details.Title>
          <Icons.Ruler />
          <Details.Title className="info">
            Area {data?.houseDetails?.area || 0} m<sup>2</sup>
          </Details.Title>
        </Details>
        <Content>
          <Content flex>
            <OldPrice>${data?.price}/mo</OldPrice>
            <h2 className="title">${data?.salePrice}/mo</h2>
          </Content>
          <div style={{ textAlign: "end" }} className="info">
            Est.Mortgage
          </div>
        </Content>
      </Section>
      <Content.Title>Description</Content.Title>
      <Description className="info">{data?.description}</Description>
    </Container>
  );
};

export default HouseItem;
