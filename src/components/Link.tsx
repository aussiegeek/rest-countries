import styled from "styled-components/macro";
import { Link } from "@reach/router";

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ButtonLink = styled(Link)`
  background: ${(props): string => props.theme.element.background};
  text-decoration: none;
  color: ${(props): string => props.theme.text};
  min-width: 100px;
  height: 32px;
  line-height: 32px;
  display: inline-block;
  text-align: center;
  box-shadow: ${(props): string => props.theme.element.shadow};
`;
