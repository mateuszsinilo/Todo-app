import React, { useState } from 'react';
import GlobalStyle from './GlobalStyles';
import {
  StyledNav,
  StyledLogo,
  StyledHeader,
  StyledMiddle,
  StyledButton,
  StyledImg,
  StyledEmpty
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

  return (
    <>
      <GlobalStyle />

      <StyledNav>
        <StyledLogo src={'./images/logo-app.svg'} alt="logo" />
        <StyledHeader>You've got {} tasks to do</StyledHeader>
        <StyledEmpty></StyledEmpty>
      </StyledNav>

      <TodoList tasks={tasks} />

      <StyledMiddle>Get started and add some tasks!</StyledMiddle>

      {showModal && <Modal save={addTask} />}

      <StyledButton onClick={openModal}>
        <StyledImg src={'./images/plus-app.png'} alt="plus" />
      </StyledButton>
    </>
  );
}

export default App;
