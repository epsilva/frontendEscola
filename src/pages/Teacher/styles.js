import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

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
    /* background: #424242; */
    padding-top: 100px;
    justify-content: center;
    overflow: scroll;
`;

export const ListTeacher = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;
    padding-top: 20px;
`;

export const Teacher = styled.li`
    display: flex;
    flex-direction: row;
    background: #3b9eff;
    border-radius: 4px;
    padding: 20px;
    height: 150px;
    width: 100%;
    cursor: pointer;
    transition: animation 0.82;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;
        padding-top: 10px;

        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }
        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }
    }

    &:hover {
        animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }

    img {
        border: 2px;
        border-radius: 50%;
        height: 80px;
        width: 80px;
        align-self: center;
        max-width: 250px;
    }
`;

export const TitleSubject = styled.strong`
    font-size: 16px;
    line-height: 20px;
    margin-top: 5px;
`;

export const Header = styled.header`
    background: #fb6f91;
    width: 100%;
    height: 80px;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    border-radius: 4px;

    i {
        position: absolute;
    }

    button {
        border: none;
        margin-right: 20px;
        margin-left: 20px;
        border-radius: 4px;
        width: 100px;
        height: 44px;
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
