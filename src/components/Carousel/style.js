import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  height: 571px;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 17px;
  background: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (left ? " rotate(90deg)" : " rotate(-90deg)")};
  right: ${({ left }) => !left && "20px"};
  left: ${({ left }) => left && "20px"};
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.3);
  }
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

Content.Title = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

Content.Desc = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
`;

Content.Price = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export { Container, Arrow, Img, Blur, Content };
