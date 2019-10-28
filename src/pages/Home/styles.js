import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  z-index: -1;
  padding-left: ${props => (props.isOpen ? "20px" : "180px")};
  transition: padding-left 0.6s;
  background: #424242;
`;
