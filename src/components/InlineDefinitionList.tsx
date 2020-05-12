import styled from "styled-components/macro";

const InlineDefinitionList = styled.dl`
  color: ${(props): string => props.theme.text};
  margin: 0;
  line-height: 2;
  dt,
  dd {
    display: inline;
  }

  dt,
  dt:after {
    font-weight: 600;
  }

  dt:after {
    content: ": ";
  }

  dd {
    margin-left: 0;
    font-weight: 300;
  }
`;

export default InlineDefinitionList;
