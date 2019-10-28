import styled, { keyframes } from "styled-components";

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
  padding-left: ${props => (props.isOpen ? "20px" : "180px")};
  padding-right: 20px;
  padding-bottom: 20px;
  transition: padding-left 0.6s;
  background: #424242;
  padding-top: 100px;
  justify-content: center;
  overflow: scroll;
`;

export const ListSubject = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;
`;

export const ItemSubject = styled.li`
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 4px;
    padding: 20px;
    height: 200px;
    width: 100%;
    cursor: pointer;
    transition: animatio 0.82;

    &:hover {
      animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }

`;

export const TitleSubject = styled.strong`
  font-size: 16px;
  line-height: 20px;
  margin-top: 5px;
`;
