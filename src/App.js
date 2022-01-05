import React, { useState } from 'react';
import GlobalStyle from './GlobalStyles';
import {
  StyledNav,
  StyledLogo,
  StyledHeader,
  StyledMiddle,
  StyledButton,
  StyledImg,
  StyledEmpty,
  StyledTaskCounter
} from './components/Main';
import { Modal } from './components/Modal';
import TodoList from './components/TodoList';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const addTask = (task) => {
    const temp = [...tasks];
    temp.push(task);
    setTasks(temp);
    setShowModal(false);
  };

  const deleteTask = (taskId) => {
    const newTaskList = tasks.filter(task => task.id !== taskId);
    setTasks(newTaskList);
  };

  return (
    <>
      <GlobalStyle />

      <StyledNav>
        <StyledLogo src={'./images/logo-app.svg'} alt="logo" />
        <StyledHeader>You've got <StyledTaskCounter> {tasks.length} tasks </StyledTaskCounter> to do </StyledHeader>
        <StyledEmpty></StyledEmpty>
      </StyledNav>

      <TodoList tasks={tasks} deleteTask={deleteTask}/>
      {tasks.length === 0 ? <StyledMiddle>Get started and add some tasks!</StyledMiddle> : null }
      
      
      {showModal && <Modal save={addTask} />}

      <StyledButton onClick={openModal}>
        <StyledImg src={'./images/plus-app.png'} alt="plus" />
      </StyledButton>
    </>
  );
}

export default App;
