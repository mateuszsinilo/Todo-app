import React from 'react'
import styled from 'styled-components'


export const StyledNav = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
`
export const StyledLogo = styled.img`
    cursor: pointer;

    `

export const StyledHeader = styled.div`
    justify-content: center;
    display: flex;
    font-weight: 700;
    font-size: 2.3rem;
`
export const StyledEmpty = styled.div`
    width: 120px;
    
`
export const StyledMiddle = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    color: #A4A0A0;
    font-size: 1.5rem;
    font-weight: 600;
    padding-top: 12%;
`
export const StyledButton = styled.button`
    background: #FF3F3F;
    color: #fff;
    border-radius: 50%;
    border: none;
    position: absolute;
    width: 80px;
    height: 80px;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
    
    &: hover {
        opacity: 0.95;
        transform: scale(1.05);
    }
    
`
export const StyledImg = styled.img`
    width: 45px;
    height: 45px;


`


const Main = () => {
    return (
        <>
        
        </>
    )
}

export default Main
