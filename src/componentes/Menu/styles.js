import styled, { keyframes, css } from 'styled-components';

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
    background: #EEE;
    width: 200px;
    height: 100vmax;
    border: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);

    display: inline-block;
    visibility: ${props => props.isOpen ? 'hidden' : 'visible'};
    animation: ${props => props.isOpen ? fadeOut : fadeIn} 0.6s forwards;
    transition: visibility 0.6s;    
`;
