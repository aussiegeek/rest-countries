import styled from "styled-components";
import { Link } from "@reach/router";

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: black;
  outline: 1px solid #ddd;
  min-width: 100px;
  display: inline-block;
  text-align: center;
  margin: 20px 0;
`;
