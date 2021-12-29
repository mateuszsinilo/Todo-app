import React, {useState} from "react";
import styled from "styled-components";
import { Modal } from "./Modal";
import TodoForm from "./TodoForm";


const StyledTaskWrapper = styled.div`
    justify-content: center;
    padding-top: 10px;
`
const StyledTodoBox = styled.div`
    padding-top:5px;
    margin-top: 20px;
    display: flex; 
    justify-content: center;
    margin: auto;
    width: 800px;
    height: 45px;
    border-radius: 10px;
    background-color: #fff;
    align-items: center;
`

const StyledTodoTask = styled.p`
    color: #000;
    font-size: 1rem;
    font-weight: 600;
`

const StyledTodoCategory = styled.p`
    padding-left: 20px;
    color: #FF3F3F;
    font-weight: 600;
`



function TodoList() {
    const [taskList, setTaskList] = useState([])



    return (
     
        <>
        <StyledTaskWrapper>
            <StyledTodoBox> 
                <StyledTodoTask> Go to the meeting</StyledTodoTask> 
                <StyledTodoCategory>Business</StyledTodoCategory>
            </StyledTodoBox>
        </StyledTaskWrapper>

           <StyledTaskWrapper>
            <StyledTodoBox> 
                <StyledTodoTask>Go play basketball with a friends </StyledTodoTask> 
                <StyledTodoCategory>Family and Friends</StyledTodoCategory>
            </StyledTodoBox>
        </StyledTaskWrapper>
        
    
        </>
       
    )
}

export default TodoList; 