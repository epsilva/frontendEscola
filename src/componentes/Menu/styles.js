import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateX(-200px);
  }

  to {
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-200px);
  }
`;

export const Container = styled.div`
  margin-left: 2px;
  background: #6d6d6d;
  border: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 0;
  margin: auto;
  display: inline-block;
  visibility: ${props => (props.isOpen ? "hidden" : "visible")};
  animation: ${props => (props.isOpen ? fadeOut : fadeIn)} 0.6s forwards;
  transition: visibility 0.6s;
  padding-top: 80px;
`;

export const ProductList = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;

    li {
        display: flex;
        flex-direction: row;
        width: 180px;
        padding: 10px;
        padding-left: 30px;
        cursor: pointer;
        
        transition: background 0.2s;
        &:hover {
            background: #616161;
        }
        strong {
        color: #eee;
        font-weight: bold;
        padding-top: 8px;
        
        }
    }
`;
