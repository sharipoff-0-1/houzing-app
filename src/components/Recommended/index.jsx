import React, { useState, useEffect } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  dots: true,

  appendDots: (dots) => <h1>{dots}</h1>,
};

export const Recommended = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }, []);
  console.log(data);

  return (
    <Container>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <HouseCard
              gap={10}
              onClick={() => navigate(`/properties?category${value?.id}`)}
              data={value}
              key={value.id}
            />
          );
        })}
      </Slider>
    </Container>
  );
};
export default Recommended;
