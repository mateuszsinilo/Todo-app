import React, {useState} from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import { StyledMiddle } from './Main';
export const Modal = ({showModal, save}) => {


        
    

return (
        <>

            
        {showModal ? <TodoForm onSubmit/> : null } 


        </>
    )

}