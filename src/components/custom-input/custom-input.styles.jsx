import styled from "styled-components";

export const CustomInputContainer = styled.input`
  padding: 10px;
  width: 300px;
  ${(props) =>
    props.type === "search" &&
    `
        width:200px;
        float:right;`
    }
`;
