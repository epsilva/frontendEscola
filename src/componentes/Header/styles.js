import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index: 1;
  background: #1976d2;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
`;

export const ToogleButton = styled.button`
    background: none;
    border: 0
`;