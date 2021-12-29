import React, {useState} from "react";
import GlobalStyle from './GlobalStyles'
import { StyledNav, StyledLogo, StyledHeader, StyledMiddle, StyledButton, StyledImg, StyledEmpty } from "./components/Main";
import { Modal } from "./components/Modal";
import TodoList from "./components/TodoList";


function App() {
   
  const [showModal, setShowModal] = useState(false); 
  

  const openModal = () => {
    setShowModal(prev => !prev)
  }


  return (
    <>
    <GlobalStyle/>

      <StyledNav>

        <StyledLogo src={'./images/logo-app.svg'} alt="logo"/>
        <StyledHeader>You've got {} tasks to do</StyledHeader>
        <StyledEmpty></StyledEmpty>

      </StyledNav>

            <TodoList />

        <StyledMiddle>Get started and add some tasks!</StyledMiddle>
             
      {<Modal showModal={showModal}setShowModal={setShowModal} />}
     

    <StyledButton onClick={openModal} >
          
        <StyledImg src={'./images/plus-app.png'} alt="plus"/>
    
    </StyledButton>

    </>
  );
}

export default App;
