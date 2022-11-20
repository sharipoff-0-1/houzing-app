import React, { useEffect, useState } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import { useLocation } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }, [search]);
  return (
    <Container>
      {data.map((value) => {
        return <HouseCard data={value} key={value.id} />;
      })}
    </Container>
  );
};

export default Properties;
