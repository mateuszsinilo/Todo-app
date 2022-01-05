import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const ModalWrapper = styled.div`
  width: 500px;
  height: 200px;
  background: #fff;
  border-radius: 10px;
  margin: auto;
  top: 50%;

  @media (max-width: 640px) {
    width: 400px;
    height: 200px;
  }

`;

const StyledForm = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  color: #a4a0a0;
`;
const StyledFormElements = styled.div`
  display: block;
  padding: 10px;
`;

const StyledLabel = styled.label`
  padding: 5px;
  color: #A4A0A0;
  font-size: 0.8rem;
  font-weight: bold;
`;
const StyledInput = styled.div`
  display: flex;
`;
const CustomInput = styled.input`
  background-color: transparent;
  border: none; 
  border-bottom: 1px solid black;
  font-size: 1rem;
  padding: 5px;
  width: 300px;
  font-weight: bold;
  outline: none;

  ::placeholder {
  font-size: 0.8rem;
  color: #A4A0A0;
  }
`
const StyledBtnTask = styled.button`
  padding: 10px;
  border-radius: 7px;
  background: #ff3f3f;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 120px;
  height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;

  &: hover {
    opacity: 0.95;
    transform: scale(1.05);
  }
`;
const BtnText = styled.p`
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: 600;
`;
const BtnImage = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
function TodoForm({ onSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'text') {
      setText(value);
    } else {
      setCategory(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: uuid(),
      text: text,
      category: category
    });

    if (text ==='' && category ==='') {
      alert("Opisz swoje zadanie")
    } else {
    setText('');
    setCategory('');
    console.log('handleSubmit');
  }};

  return (
    <ModalWrapper>
      <StyledForm onSubmit={handleSubmit}>
      
        <StyledFormElements>
        
          <StyledLabel> New Task: </StyledLabel>
          <StyledInput>
            <CustomInput
              type="text"
              value={text}
              placeholder="What's your task?"
              onChange={handleChange}
              name="text"
            />
          </StyledInput>
        </StyledFormElements>
      

        <StyledFormElements>
          <StyledLabel> Category: </StyledLabel>
          <StyledInput>
            <CustomInput
              type="text"
              value={category}
              placeholder="Add a category for a task"
              onChange={handleChange}
              name="category"
            />
          </StyledInput>
        </StyledFormElements>

        <StyledFormElements>
          <StyledBtnTask onClick={handleSubmit} type="submit">
            <BtnText>New Task</BtnText>
            <BtnImage src={'./images/plus-vector.png'} alt="plus" />
          </StyledBtnTask>
        </StyledFormElements>
      </StyledForm>
    </ModalWrapper>
  );
}

export default TodoForm;
