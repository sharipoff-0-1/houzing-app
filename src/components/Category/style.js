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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 32px;
`;

export { Container, Content };
