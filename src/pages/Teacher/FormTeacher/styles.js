import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    width: 600px;
    height: 400px;
    background: #fff;
    display: ${props => (props.isOpen ? 'block' : 'none')};
    flex-direction: column;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);

    form {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;

        input {
            background: rgba(5, 5, 5, 0.1);
            border: 0;
            height: 44px;
            padding: 0 15px;
            margin: 0 0 10px;
        }
    }
`;

export const Modal = styled.div`
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    align-items: center;
    justify-content: center;
`;

export const ContainerTitle = styled.div`
    border-bottom: 1px solid #eee;
    height: 50px;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 5px;
    background: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
`;

export const Title = styled.strong`
    font-size: 24px;
    padding-left: 30px;
    color: #333;
`;

export const ButtonClose = styled.button`
    border: none;
    background: #fff;
    width: 40px;
    height: 40px;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.2);
    }
`;

export const ListSubjects = styled.tbody`
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style: none;

    td {
        width: 100%;
    }
`;

export const Subject = styled.tr`
    padding-left: 10px;
    height: 30px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    &:nth-child(even) {
        background-color: ${darken(0.2, '#fff')};
    }

    strong {
        color: #333;
    }

    button {
        border: none;
        background: none;
        margin-right: 20px;
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Header = styled.div`
    background: #3b9eff;
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    justify-content: space-between;

    strong {
        color: #fff;
        font-size: 16px;
    }

    button {
        border: none;
        height: 30px;
        display: flex;
        background: none;
        justify-content: center;
        align-items: center;
    }
`;

export const ContainerTable = styled.div`
    overflow: auto;
    height: 35%;
    background: ${darken(0.1, '#fff')};
    margin-top: 2px;

    table {
        width: 100%;
    }
`;
