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
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
`;

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 10px;

    strong {
        color: #fff;
        padding-right: 10px;
    }
`;

export const BarButton = styled.a`
    background: none;
    border: 0;
    padding-left: 10px;
    padding-right: 10px;
`;
