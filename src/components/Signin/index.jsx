import React, { useState } from "react";
import { Container, Content } from "./style";
import { useNavigate } from "react-router-dom";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

export const SignIn = () => {
  const navigate = useNavigate();
  const request = useRequest();
  const [body, setBody] = useState({});
  const [error, setError] = useState(false);

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
    setError(false);
  };

  const info = () => {
    message.info("Successfully logged in");
  };

  const onSubmit = async () => {
    console.log(body);
    request({ url: `/public/auth/login`, method: "POST", body, me: true }).then(
      (res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
        }
        info();
      }
    );
  };

  return (
    <Container>
      <Content>
        <div className="subTitle">Sign in</div>
        <Input onChange={onChange} placeholder="email" type="email" />
        <Input onChange={onChange} placeholder="password" type="password" />
        <Button handleClick={onSubmit} width={"%"}>
          {" "}
          Log in
        </Button>
      </Content>
    </Container>
  );
};
export default SignIn;
