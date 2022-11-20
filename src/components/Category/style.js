import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;

  display: flex;
  flex-direction: column;
  position: relative;

  padding: 96px 130px;
  margin: auto;
`;

const Img = styled.img`
  width: 100%;
  min-height: 571px;
`;

const Blur = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
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

export { Container, Img, Blur, Content };
