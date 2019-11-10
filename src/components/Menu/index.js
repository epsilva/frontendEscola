import React from 'react';
import { MdReorder, MdSchool } from 'react-icons/md';
import { GiTeacher, GiBookshelf } from 'react-icons/gi';
import { FaChair } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    ContainerMenu,
    MenuList,
    Badge,
    DivTitleBar,
} from './styles';
import { requestIsOpen } from '~/store/modules/menu/actions';

export default function Menu() {
    const listMenu = [
        {
            id: 1,
            icon: <GiTeacher size={30} color="#eee" />,
            title: 'Professores',
            path: '/teachers',
        },
        {
            id: 2,
            icon: <GiBookshelf size={30} color="#eee" />,
            title: 'Disciplinas',
            path: '/subject',
        },
        {
            id: 3,
            icon: <FaChair size={30} color="#eee" />,
            title: 'Classes',
            path: '/classroom',
        },
        {
            id: 4,
            icon: <MdSchool size={30} color="#eee" />,
            title: 'Alunos',
            path: '/Student',
        },
    ];

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.menu.isOpen);

    function handleToggleVisible() {
        dispatch(requestIsOpen(!isOpen));
    }

    function handleClick(path) {
        return path;
    }

    return (
        <Container>
            <DivTitleBar>
                <Badge onClick={handleToggleVisible}>
                    <MdReorder color="#FFF" size={35} />
                </Badge>
                <strong>Minha Escola</strong>
            </DivTitleBar>

            <ContainerMenu visible={isOpen}>
                <MenuList>
                    {listMenu.map(menu => (
                        <li key={menu.id}>
                            <Link to={() => handleClick(menu.path)}>
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
