import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';
import TodoForm from './TodoForm';

const StyledTaskWrapper = styled.div`
  justify-content: center;
  padding-top: 10px;
  align-items: center;

`;
const StyledTodoBox = styled.div`
  padding-top: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 800px;
  height: 45px;
  border-radius: 10px;
  background-color: #fff;
  align-items: center;

  @media (max-width: 640px) {
    width: 400px;
  }
`;

const StyledTrashIcon = styled.img`
  width: 14px;
  height: 16px;
  margin-right:3px;
  cursor: pointer;
`

const StyledInputDone = styled.input`
  align-items: center;
`
const StyledTodoTask = styled.p`
  color: #A4A0A0;
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 760px) {
    font-size: 0.7rem;
`;

const StyledTodoCategory = styled.p`
  padding-left: 20px;
  color: #ff3f3f;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75rem;
  
  @media (max-width: 760px) {
    font-size: 0.6rem;
`;

function TodoList({ tasks, setTasks = [] }) {
  
  const deleteTask = () => {
  
    setTasks(tasks.filter((task) => task.id !== task.id));
    
  };

  return (

    <>
      {tasks.length > 0 &&
        tasks.map((task, id) => (
          <StyledTaskWrapper key={task.id}>
            <StyledTodoBox >
           <StyledTrashIcon img src={'./images/trash-icon.png'} onClick={deleteTask} /> 
            <StyledInputDone type="checkbox"/>
              <StyledTodoTask> {task.text}</StyledTodoTask>
              <StyledTodoCategory>{task.category}</StyledTodoCategory>
            </StyledTodoBox>
          </StyledTaskWrapper>
        ))}
  
    </>
  );
}

export default TodoList;
