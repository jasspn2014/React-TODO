import { useState } from "react";
import { ToDoItemContainer } from "./todo-item.styles";

const ToDoItem = ({ task }) => {
  const [isDone, setisDone] = useState(false);
  return (
    <ToDoItemContainer isDone={isDone} onClick={() => setisDone(!isDone)}>
      {task}
    </ToDoItemContainer>
  );
};

export default ToDoItem;
