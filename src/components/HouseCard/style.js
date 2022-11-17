import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

const Container = styled.div`
  width: 380px;
  height: 430px;

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
  padding-top: 24px;
  padding: 12px 20px;
  background: #fff;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 16px;
`;

Details.Item = styled.div`
  display: flex;
  align-items: ${({ footer }) => !footer && "center"};
  flex-direction: column;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
`;

const Divider = styled.div`
  height: 1px;
  background: #e6e9ec;
  width: 100%;
`;

const Icons = styled.img``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(love)`
  width: 35px;
  height: 35px;
  padding: 7px;
  border-radius: 50%;
  background: #f6f8f9;
  margin-left: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

export { Container, Img, Content, Details, Icons, Divider };
