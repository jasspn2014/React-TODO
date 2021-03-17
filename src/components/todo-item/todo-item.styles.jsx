import styled from "styled-components";

export const ToDoItemContainer = styled.div`
  width: 80vw;
  background-color: crimson;
  color: white;
  margin: 0 0 10px 0;
  padding: 20px;
  cursor: pointer;

  ${({isDone}) => (isDone ? `background-color:grey; color:white;  text-decoration: line-through; transition:all .5s ease;` : "")}
`;
