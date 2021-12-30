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
`;
const StyledForm = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  color: #a4a0a0;
`;
const StyledFormElements = styled.div`
  display: flex;
  padding: 10px;
`;

const StyledLabel = styled.label`
  padding: 5px;
`;
const StyledInput = styled.div`
  display: flex;
`;

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

  & hover: {
    opacity: 0.2;
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
    setText('');
    setCategory('');
    console.log('handleSubmit');
  };

  return (
    <ModalWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormElements>
          <StyledLabel> Task </StyledLabel>
          <StyledInput>
            <input
              type="text"
              value={text}
              placeholder="What's your task?"
              onChange={handleChange}
              name="text"
            />
          </StyledInput>
        </StyledFormElements>

        <StyledFormElements>
          <StyledLabel> Category </StyledLabel>
          <StyledInput>
            <input
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
