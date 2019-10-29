import styled from "styled-components";

export const Container = styled.header`
  display: none;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index: 1;
  background: #1b1b1b;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
`;

export const ToogleButton = styled.button`
  background: none;
  border: 0;
  padding-left: 10px;
  padding-right: 10px;
`;
