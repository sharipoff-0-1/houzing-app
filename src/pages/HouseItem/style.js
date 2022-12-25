import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: var(--padding);
  width: 100%;
  max-width: var(--width);
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  text-align: start;
  flex-direction: ${({ flex }) => !flex && "column"};
  align-items: ${({ flex }) => flex && "center"};
`;

const OldPrice = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  padding: 0 8px 12px 0;
  text-decoration-line: line-through;
  color: #696969;
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 32px;

  letter-spacing: -0.02em;
  color: #0d263b;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`;

Details.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 24px 0 8px;
`;

const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;

Icons.Share = styled(share)`
  display: flex;
  padding: 5px;
  background: #f6f8f9;
  border-radius: 13px;
  width: 40px;
  height: 40px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Love = styled(love)`
  display: flex;
  padding: 5px;
  background: #f6f8f9;
  border-radius: 13px;
  width: 40px;
  height: 40px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Icons.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

const Description = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;

export { Container, Content, Section, Icons, Details, OldPrice, Description };
