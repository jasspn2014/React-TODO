import { HomePageContainer } from "./homepage.styles";
import CustomInput from "../custom-input/custom-input.component";
import React, { useState } from "react";
import ToDoListContainer from "../todo-list-container/todo-list-container.component";
import CustomButton from "../custom-button/custom-button.component";

const HomePage = () => {
  const [toDos, setToDos] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [task, setTask] = useState("");
  
  const addTaskToToDos = (e) => {
    if (task.length > 0) {
      setToDos([...toDos, { id: toDos.length, task: task }]);
    } else {
      alert("Please Enter Some Data");
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "add") {
      setTask(e.target.value);
    } else if (e.target.name === "search") {
      setSearchField(e.target.value);
    }
  };

  const filteredToDos = toDos.filter(toDo =>{
    return toDo.task.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
    <HomePageContainer>
      <CustomInput name="add" type="text" placeholder="Add new Item" handleChange={handleChange} />
      <CustomButton handleClick={addTaskToToDos}>Add a Task</CustomButton>
      <CustomInput name="search" type="search" placeholder="Search Item" handleChange={handleChange} />
      <ToDoListContainer toDos={filteredToDos} />
    </HomePageContainer>
  );
};

export default HomePage;
