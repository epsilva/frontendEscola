import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    width: 600px;
    height: 200px;
    background: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
    display: ${props => (props.isOpen ? 'block' : 'none')};
    flex-direction: column;

    form {
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;

        span {
            color: #fb6f91;
            align-self: flex-start;
            font-weight: bold;
            position: relative;
        }

        input {
            background: rgba(5, 5, 5, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            margin: 0 0 10px;
        }

        > div {
            display: flex;
            justify-content: flex-end;
            padding-top: auto;

            button {
                margin: 5px 0 0;
                height: 50px;
                width: 50px;
                font-weight: bold;
                color: #fff;
                border: 0;
                border-radius: 50%;
                font-size: 16px;
                margin-left: 10px;
                justify-content: center;
                align-items: center;
                display: flex;
            }
        }
    }
`;

export const ButtonCancel = styled.button`
    background: #fb6f91;
    transition: background 0.2s;
    &:hover {
        background: ${darken(0.03, '#fb6f91')};
    }
`;

export const ButtonSave = styled.button`
    background: #3b9eff;
    transition: background 0.2s;
    &:hover {
        background: ${darken(0.03, '#3b9eff')};
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
`;
