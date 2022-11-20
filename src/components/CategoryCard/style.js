import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 280px;
  min-width: 230px;

  max-height: 380px;
  min-height: 250px;

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 3px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 3px;
`;

const Blur = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #fff;
  border-radius: 3px;
`;

const Content = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #fff;
`;

// const Content = styled.div`
//   display: flex;
//   flex-direction: ${({ footer }) => (footer ? "row" : "column")};
//   justify-content: ${({ footer }) => footer && "space-between"};
//   padding-top: 24px;
//   padding: 12px 20px;
//   background: #fff;
// `;

const Icons = styled.img``;

export { Container, Img, Content, Icons, Blur };
