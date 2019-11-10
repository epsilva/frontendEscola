import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

const shake = keyframes`
  /* 10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  } */

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
    position: static;
    padding-left: ${props => (props.isOpen ? '180px' : '20px')};
    padding-right: 20px;
    padding-bottom: 20px;
    transition: padding-left 0.6s;
    padding-top: 100px;
    justify-content: center;
    overflow: hidden;
`;

export const ContainerTable = styled.div`
    overflow: auto;
    width: 100%;
    height: 89%;
    background: ${lighten(0.04, '#eaeaeb')};
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;

    table {
        width: 100%;
    }
`;

export const SearchBar = styled.div`
    background: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 80px;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;

    i {
        position: absolute;
    }

    input {
        padding: 0 50px;
        width: 100%;
        font-size: 18px;
    }

    button {
        border: none;
        margin-left: 20px;
        border-radius: 50%;
        width: 56px;
        height: 56px;
        display: flex;
        background: #3b9eff;
        justify-content: center;
        align-items: center;
    }

    input {
        padding: 0 50px;
        width: 100%;
        font-size: 18px;
    }
`;

export const ListSubject = styled.tbody`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    list-style: none;
    padding-top: 20px;
    width: 100%;
    padding-bottom: 20px;
`;

export const SubjectItem = styled.tr`
    display: flex;
    flex-direction: row;
    background: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    padding: 20px;
    height: 150px;
    width: 100%;
    cursor: pointer;
    transition: animation 0.82;

    &:hover {
        animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }

    div {
        align-self: flex-end;
        display: flex;
        width: 100%;
        justify-content: flex-end;

        button {
            border: 0;
        }
    }
`;

export const ContainerRightLeft = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`;

export const ContainerForm = styled.div`
    overflow: auto;
    width: 100%;
    height: 89%;
    background: ${lighten(0.04, '#eaeaeb')};
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
    margin-left: 20px;
    display: none;
`;

export const ContainerSearchBar = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    width: 100%;
`;

export const TitleBar = styled.div`
    width: 100%;
    background: ${lighten(0.04, '#eaeaeb')};
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    justify-content: center;
    display: none;
    align-items: center;

    strong {
        color: #333;
        font-size: 68px;
    }
`;
