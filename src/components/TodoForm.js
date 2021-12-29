import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';

const ModalWrapper = styled.div`
    width: 500px;
    height: 200px;
    background: #FFF;
    border-radius: 10px;
    margin: auto;
    top: 50%;
`
const StyledForm = styled.div`
    display: inline-block; 
    justify-content: center;
    align-items: center;
    color: #A4A0A0;
`
const StyledFormElements = styled.div`
    display: flex; 
    padding: 10px;

`

const StyledLabel = styled.label`
    padding: 5px;
`
const StyledInput = styled.div`
    display: flex;
`

const StyledBtnTask = styled.button`
    padding: 10px;
    border-radius: 7px;
    background: #FF3F3F;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 120px;
    height: 30px;
    justify-content: center;
    align-items: center;
    display: flex;

   & hover: {
    opacity: 0.2;
   }
`
const BtnText = styled.p`
   font-size: 1rem;
   justify-content: center;
    align-items: center;
    display: flex;
    font-weight: 600;

`
const BtnImage = styled.img`
   width: 15px;
   height: 15px;
   margin-left: 5px;
   justify-content: center;
    align-items: center;
    display: flex;

`
function TodoForm({props}) {
    const [input, setInput] = useState('');
    const [category, setCategory] = useState('');
    

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name == "input"){
            setInput(value)
        } else{
            setCategory(value)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.floor(Math.random() * 1000),
          text: input, category
        });
        setInput('');
        setCategory('');
        console.log("handleSubmit");
      };

return (
    <ModalWrapper>
            <StyledForm onSubmit={handleSubmit}>
                
               <StyledFormElements> 
                    <StyledLabel> Task </StyledLabel>
                   <StyledInput>
                       <input
                        type='text'
                        value={input}
                        placeholder="What's your task?" 
                        onChange={handleChange} 
                        name="input"/> 
                    </StyledInput>
                </StyledFormElements>

                <StyledFormElements> 
                    <StyledLabel> Category </StyledLabel>
                   <StyledInput>
                       <input
                        type='text'
                        value={category}
                        placeholder="Add a category for a task" 
                        onChange={handleChange} 
                        name="category"/> 
                    </StyledInput>
                </StyledFormElements>

                
                <StyledFormElements> 
                    <StyledBtnTask onClick={handleSubmit} type='submit'>
                        <BtnText>New Task</BtnText>
                        <BtnImage src={'./images/plus-vector.png'} alt="plus"/>
                    
                    </StyledBtnTask> 
                </StyledFormElements>
                
            </StyledForm>
           
        </ModalWrapper>
        )
}

export default TodoForm;
