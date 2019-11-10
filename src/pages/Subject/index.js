import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdNoteAdd, MdSearch, MdEdit, MdDelete } from 'react-icons/md';
import api from '~/services/api';
import FormSubject from './FormSubject';
import { requestIsOpenModalSubject } from '~/store/modules/actions/actions';
import { deleteSubjectRequest } from '~/store/modules/subject/actions';
import LoadBook from '~/components/LoadWhite';

import {
    Container,
    SearchBar,
    ListSubject,
    SubjectItem,
    ContainerForm,
    ContainerTable,
    ContainerRightLeft,
    ContainerSearchBar,
    TitleBar,
} from './styles';

export default function Subject() {
    const dispatch = useDispatch();
    const menuIsOpen = useSelector(state => state.menu.isOpen);
    const modalIsOpen = useSelector(state => state.actions.isOpenModalSubject);
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState({});
    const [load, setLoad] = useState(false);
    const subject = useSelector(state => state.subject.subject);

    useEffect(() => {
        async function loadSubjects() {
            setLoad(true);
            const response = await api.get('subjects');

            setSubjects(response.data);
            setLoad(false);
        }

        loadSubjects();
    }, [subject]);

    async function handleSearch(e) {
        setLoad(true);
        const subject = {
            name: e.target.value,
        };
        const response = await api.get('subjects', { params: subject });
        setSubjects(response.data);
        setLoad(false);
    }

    function handlClickSubject(selectSubject) {
        // setSelectedSubject(selectSubject);
    }

    function handleOpenForm() {
        setSelectedSubject({});
        dispatch(requestIsOpenModalSubject(modalIsOpen));
    }

    function handleOpenFormEdit(subjectSelected) {
        setSelectedSubject(subjectSelected);
        dispatch(requestIsOpenModalSubject(modalIsOpen));
    }

    function handleDelete(subjectSelected) {
        dispatch(deleteSubjectRequest(subjectSelected));
    }

    return (
        <Container isOpen={menuIsOpen}>
            <FormSubject subject={selectedSubject} />
            <ContainerSearchBar>
                <SearchBar>
                    <i>
                        <MdSearch size={40} />
                    </i>
                    <input
                        type="text"
                        placeholder="Pesquisar disciplina"
                        onChange={handleSearch}
                    />
                    <button type="button" onClick={handleOpenForm}>
                        <MdNoteAdd size={40} color="#FFF" />
                    </button>
                </SearchBar>
                <TitleBar>
                    <strong>{selectedSubject.name}</strong>
                </TitleBar>
            </ContainerSearchBar>
            <ContainerRightLeft>
                <ContainerTable>
                    {load ? (
                        <LoadBook />
                    ) : (
                        <table>
                            <ListSubject>
                                {subjects.map(subject => (
                                    <SubjectItem
                                        key={subject.id}
                                        onClick={() =>
                                            handlClickSubject(subject)
                                        }
                                    >
                                        <td>
                                            <strong>{subject.name}</strong>
                                        </td>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleOpenFormEdit(subject)
                                                }
                                            >
                                                <MdEdit
                                                    size={30}
                                                    color="#3b9eff"
                                                />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleDelete(subject)
                                                }
                                            >
                                                <MdDelete
                                                    size={30}
                                                    color="#fb6f91"
                                                />
                                            </button>
                                        </div>
                                    </SubjectItem>
                                ))}
                            </ListSubject>
                        </table>
                    )}
                </ContainerTable>
                <ContainerForm />
            </ContainerRightLeft>
        </Container>
    );
}
