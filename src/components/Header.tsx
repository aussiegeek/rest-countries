import React, { ReactElement } from "react";
import styled from "styled-components";
import { UnstyledLink } from "./Link";

const HeaderDiv = styled.div`
  background: ${(props): string => props.theme.element.background};
  padding: 20px 10px;
  box-shadow: ${(props): string => props.theme.headerShadow};
`;

const SiteName = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: ${(props): string => props.theme.text};
`;

export default function Header(): ReactElement {
  return (
    <>
      <HeaderDiv>
        <UnstyledLink to="/">
          <SiteName>Where in the world?</SiteName>
        </UnstyledLink>
      </HeaderDiv>
    </>
  );
}
