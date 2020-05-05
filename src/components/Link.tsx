import styled from "styled-components";
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
  display: inline-block;
  text-align: center;
  margin: 20px 0;
  box-shadow: ${(props): string => props.theme.element.shadow};
`;
