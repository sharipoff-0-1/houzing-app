import styled from "styled-components";
import { ReactComponent as cardMassage } from "../../assets/icons/cardMassage.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  background-color: #f5f7fc;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  padding: 96px 130px;
  margin-top: 40px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 434px;
`;

const Icon = styled.div``;

Icon.Email = styled(cardMassage)`
  & path {
    fill: #0061df;
  }
`;
Icon.Maps = styled(cardMaps)``;
Icon.House = styled(cardHouse)``;
Icon.Calculator = styled(calculator)``;

export { Container, Content, Wrapper, Icon };
