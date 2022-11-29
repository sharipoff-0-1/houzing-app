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
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export { Container, Content };
