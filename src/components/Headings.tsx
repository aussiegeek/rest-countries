import styled from "styled-components/macro";

// eslint-disable-next-line import/prefer-default-export
export const Heading1 = styled.h1`
  font-weight: 800;
  margin: 0;
  color: ${(props): string => props.theme.text};
`;
