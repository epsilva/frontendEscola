import React from 'react';
import { MdPersonAdd, MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, ListTeacher, Teacher, Header } from './styles';

export default function Home() {
    const menuIsOpen = useSelector(state => state.menu.isOpen);

    return (
        <Container isOpen={menuIsOpen}>
            <Header>
                <i>
                    <MdSearch size={40} />
                </i>
                <input type="text" placeholder="Pesquisar professor" />
                <button type="button">
                    <MdPersonAdd size={40} color="#FFF" />
                </button>
            </Header>
            <ListTeacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
                <Teacher>
                    <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt=""
                    />
                    <div>
                        <strong>Esdras Pinheiro</strong>
                        Disciplina: <span>Matemática</span>
                    </div>
                </Teacher>
            </ListTeacher>
        </Container>
    );
}
