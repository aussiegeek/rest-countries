import React from "react";
import styled from "styled-components/macro";
import { UnstyledLink } from "./Link";

const HeaderDiv = styled.div`
  background: ${(props): string => props.theme.element.background};
  padding: 20px 56px;
  box-shadow: ${(props): string => props.theme.headerShadow};

  @media (min-width: 700px) {
    padding: auto 80px;
  }
`;

const SiteName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${(props): string => props.theme.text};

  @media (min-width: 700px) {
    font-size: 24px;
  }
`;

const Header: React.FC = () => (
  <HeaderDiv>
    <UnstyledLink to="/">
      <SiteName>Where in the world?</SiteName>
    </UnstyledLink>
  </HeaderDiv>
);

export default Header;
