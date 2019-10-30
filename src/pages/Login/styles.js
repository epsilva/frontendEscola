import styled from "styled-components";
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
`;

export const ContainerLeft = styled.div`
  background: #292b36;
  display: flex;
  float: left;
  width: 130%;
  height: 100%;
  justify-content: center;

  div {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
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
  background: #292b36;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  &:hover {
      background: ${darken(0.03, '#292b36')}
  }
  
`;

export const LogoImg = styled.img`
  width: 20%;
  height: 10%;
`;

export const LogoName = styled.strong`
  color: #EEE;
  font-size: 34px;
  height: 5%;
`;

export const SloganName = styled.span`
  color: #EEE;
  font-size: 14px;
`;

export const LogoEscolaImg = styled.img`
  height: 20%;
`;
