import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    position: fixed;
    width: 100%;
    z-index: 1;
    background: #3b9eff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
`;

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 13px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        strong {
            font-size: 16px;
            color: #fff;
            padding-right: 10px;
        }

        span {
            font-size: 12px;
            color: #fff;
            padding-right: 10px;
        }
    }

    img {
        width: 45px;
        height: 45px;
        max-width: 250;
        border-radius: 50%;
    }
`;

export const BarButton = styled.a`
    background: none;
    border: 0;
    padding-left: 10px;
    padding-right: 10px;
`;
