import React from 'react';
import { Link } from 'react-router-dom';
import { MdFace } from 'react-icons/md';

import { Container, ProfileContainer } from './styles';
import Menu from '~/components/Menu';

export default function Header() {
    return (
        <Container>
            <div>
                <Menu />
            </div>

            <ProfileContainer>
                <strong>Esdras Pinheiro</strong>
                <Link to="/profile">
                    <MdFace size={36} color="#FFF" />
                </Link>
            </ProfileContainer>
        </Container>
    );
}
