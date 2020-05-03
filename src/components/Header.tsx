import React, { ReactElement } from "react";
import styled from "styled-components";
import { UnstyledLink } from "./Link";

const HeaderDiv = styled.div`
  background: ${(props): string => props.theme.element.background};
  padding: 20px 10px;
`;

const Separator = styled.div`
  background: linear-gradient(
    hsl(0, 0%, 93%),
    ${(props): string => props.theme.element.background}
  );
  width: 100%;
  height: 5px;
  margin-bottom: 20px;
`;

const SiteName = styled.div`
  font-size: 14px;
  font-weight: 800;
`;

export default function Header(): ReactElement {
  return (
    <>
      <HeaderDiv>
        <UnstyledLink to="/">
          <SiteName>Where in the world?</SiteName>
        </UnstyledLink>
      </HeaderDiv>
      <Separator />
    </>
  );
}
