import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: fit-content;
`;

const Img = styled.img`
  width: 100%;
  min-height: 571px;
`;

const Blur = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
`;

const Content = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #fff;
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  max-width: 555px;
  width: 100%;
`;

export { Container, Img, Blur, Content };
