import React from 'react';
import styled from 'styled-components';

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }
`

;
export const StyledLogo = styled.img`
  cursor: pointer;

`;

export const StyledHeader = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: 700;
  font-size: 2.3rem;

  @media (max-width: 760px) {
    font-size: 1.6rem;
    padding: 5px;
    display: flex;
  }

`;

export const StyledTaskCounter = styled.p`
  display: flex;
  color: #ff3f3f;
  margin: 2px;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;

  @media (max-width: 760px) {
    font-size: 1.6rem;
    padding: 5px;
    display: flex;
  }
`
export const StyledEmpty = styled.div`
  width: 120px;
`;
export const StyledMiddle = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #a4a0a0;
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 20%;

  @media (max-width: 760px) {
    padding-top: 50%;
    position: relative;
  }
`;
export const StyledButton = styled.button`
  background: #ff3f3f;
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

  @media (max-width: 640px) {
    width: 70px;
    height: 70px;
  }
`;
export const StyledImg = styled.img`
  width: 45px;
  height: 45px;
`;

const Main = () => {
  return <></>;
};

export default Main;
