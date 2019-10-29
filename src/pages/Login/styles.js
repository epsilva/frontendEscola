import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
`;

export const ContainerLeft = styled.div`
  background: #999;
  float: left;
  width: 130%;
  height: 100%;
`;

export const ContainerRight = styled.div`
  float: left;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.form`
  width: 100%;
  padding-top: 50%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 48px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  border: 0;
  border-radius: 4px;
  height: 48px;
  font-size: 16px;
  background: #616161;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;
