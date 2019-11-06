import React from 'react';
import { MdReorder } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ContainerMenu, MenuList, Badge } from './styles';
import { requestIsOpen } from '~/store/modules/menu/actions';

export default function Menu() {
    const listMenu = [
        {
            id: 1,
            icon: <GiTeacher size={30} color="#eee" />,
            title: 'Professores',
            path: '/',
        },
    ];

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.menu.isOpen);

    function handleToggleVisible() {
        dispatch(requestIsOpen(!isOpen));
    }

    return (
        <Container>
            <divtitle>
                <Badge onClick={handleToggleVisible}>
                    <MdReorder color="#FFF" size={35} />
                </Badge>
                <strong>Minha Escola</strong>
            </divtitle>

            <ContainerMenu visible={isOpen}>
                <MenuList>
                    {listMenu.map(menu => (
                        <li key={menu.id}>
                            <Link to={menu.path}>
                                {menu.icon}
                                <strong>{menu.title}</strong>
                            </Link>
                        </li>
                    ))}
                </MenuList>
            </ContainerMenu>
        </Container>
    );
}
