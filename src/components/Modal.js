import React from 'react';
import TodoForm from './TodoForm';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
`;
export const Modal = ({ save }) => {
  return (
    <Overlay>
      <ModalWrapper>
        <TodoForm onSubmit={save} />
      </ModalWrapper>
    </Overlay>
  );
};
