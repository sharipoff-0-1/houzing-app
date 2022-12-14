import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Container } from "./style";

export const HouseItem = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const request = useRequest();

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${params?.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  }, [params?.id]);

  console.log(params, "param");

  return (
    <Container>
      <h1>HouseItem</h1>
    </Container>
  );
};

export default HouseItem;
