import styled from "styled-components";
import { ReactComponent as LogoImg } from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colorPrimary);
  color: #fff;
  padding: var(--padding);
  height: 64px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #1482c9;
  }
`;
const Logo = styled(LogoImg)`
  width: 30px;
  margin-right: 12px;
  & {
    path {
      fill: #fff;
    }
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 0 32px;
`;

export { Container, Wrapper, Section, Logo, Link };
