import styled from "styled-components/macro";

export const Heading1 = styled.h1`
  font-weight: 700;
  font-size: 22px;
  margin: 0;
  color: ${(props): string => props.theme.text};

  @media (min-width: 700px) {
    font-size: 32px;
  }
`;

export const Heading2 = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${(props): string => props.theme.text};
`;

export const Heading3 = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: ${(props): string => props.theme.text};
`;
