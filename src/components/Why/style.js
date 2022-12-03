import styled from "styled-components";
import { ReactComponent as cardMassage } from "../../assets/icons/cardMassage.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: auto;
  margin-top: 96px;
  background-color: #f5f7fc;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: ${({ wide }) => (wide ? `${wide}px` : `${235}px`)};
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0px 130px;
  margin-top: 40px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.div``;

Icon.Email = styled(cardMassage)`
  margin-bottom: 24px;
  & path {
    fill: #0061df;
  }
`;
Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;
Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;

export { Container, Content, Wrapper, Icon };
