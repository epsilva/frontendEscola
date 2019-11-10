import React from 'react';
import { Link } from 'react-router-dom';
import { MdFace } from 'react-icons/md';

import { useSelector } from 'react-redux';
import { Container, ProfileContainer } from './styles';
import Menu from '~/components/Menu';

export default function Header() {
    const user = useSelector(state => state.user.profile);

    return (
        <Container>
            <div>
                <Menu />
            </div>

            <ProfileContainer>
                <div>
                    <strong>{user.name}</strong>
                    <span>{user.registration}</span>
                </div>
                <Link to="/profile">
                    {user.avatar ? (
                        <img src={user.avatar.url} alt={user.avatar.name} />
                    ) : (
                        <MdFace size={36} color="#FFF" />
                    )}
                </Link>
            </ProfileContainer>
        </Container>
    );
}
