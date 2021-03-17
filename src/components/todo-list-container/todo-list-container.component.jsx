import React from "react";
import { ToDosListContainer } from "./todo-list-container.styles";
import ToDoItem from "../todo-item/todo-item.component";

const ToDoListContainer = ({ toDos }) => (
  <ToDosListContainer>
    
    {toDos.length > 0 ? toDos.map(({id,task}) => (
      <ToDoItem key={id} task={task} />
    )) : 'No Task Found'}
  </ToDosListContainer>
);

export default ToDoListContainer;
