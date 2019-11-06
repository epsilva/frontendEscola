import styled, { keyframes } from 'styled-components';
import { lighten, darken } from 'polished';

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

export const Badge = styled.button`
    background: none;
    border: 0;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
`;

export const Container = styled.div`
    position: relative;

    > divtitle {
        display: flex;
        align-items: center;

        > strong {
            font-size: 24px;
            color: #fff;
            padding-right: 10px;
        }
    }
`;

export const ContainerMenu = styled.div`
    margin-left: 0;
    background: ${lighten(0.05, '#3b9eff')};
    border: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 155px;
    position: fixed;
    z-index: 1;
    display: flex;
    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
    animation: ${props => (props.visible ? fadeIn : fadeOut)} 0.6s forwards;
    transition: visibility 0.6s;
    padding-top: 20px;
    margin-top: 0.5%;
`;

export const MenuList = styled.div`
    position: absolute;
    list-style: none;
    display: block;
    padding-left: 2px;

    li {
        display: flex;
        flex-direction: row;
        border-radius: 2px;
        width: 155px;
        height: 55px;
        align-content: center;
        cursor: pointer;

        transition: background 0.2s;
        &:hover {
            background: ${darken(0.05, '#3b9eff')};
        }
        strong {
            color: #eee;
            font-weight: bold;
            padding-left: 10px;
            align-self: center;
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;
