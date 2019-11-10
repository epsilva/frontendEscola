import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose, MdAdd, MdDelete } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import LoadBook from '~/components/LoadBlack';
import {
    requestIsOpenModalTeachers,
    requestIsOpenModalSubject,
} from '~/store/modules/actions/actions';
import FormModalTeacherSubject from '~/pages/Teacher/FormTeatcherSubject';
import {
    selectSubjectByUserRequest,
    insertSubjectUserRequest,
} from '~/store/modules/userSubject/actions';
import api from '~/services/api';

import {
    Modal,
    Container,
    ContainerTitle,
    Title,
    ButtonClose,
    ListSubjects,
    Subject,
    Header,
    ContainerTable,
} from './styles';

export default function FormTeacher({ provider }) {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.actions.isOpenModalTeacher);
    const subjects = useSelector(state => state.userSubject.subject);
    const isLoading = useSelector(state => state.userSubject.isLoading);
    const isOpenSubject = useSelector(
        state => state.actions.isOpenModalSubject
    );

    useEffect(() => {
        async function loadSubjects() {
            if (provider.id) {
                const response = await api.get(`userSubjects/${provider.id}`);
                dispatch(selectSubjectByUserRequest(response.data));
            }
        }

        loadSubjects();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [provider, subjects]);

    function handleCloseModal() {
        dispatch(requestIsOpenModalTeachers(isOpen));
    }

    function handlRelationTeacherSubject() {
        dispatch(requestIsOpenModalSubject(isOpenSubject));
    }

    function handleDelete(subject) {
        const listSubject = [];

        subjects.map(sub => {
            if (subject.id !== sub.id) {
                listSubject.push(sub.id);
            }
        });

        const providerSubject = {
            userId: provider.id,
            subjects: listSubject,
        };

        dispatch(insertSubjectUserRequest(providerSubject));
    }

    return (
        <Modal isOpen={isOpen}>
            <FormModalTeacherSubject provider={provider} />
            <Container isOpen={isOpen}>
                <ContainerTitle>
                    <Title>Professor</Title>
                    <ButtonClose type="button" onClick={handleCloseModal}>
                        <MdClose size={20} color="#333" />
                    </ButtonClose>
                </ContainerTitle>

                <Form initialData={provider}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Nome Compelo"
                        disabled
                    />
                    <Input
                        type="text"
                        name="registration"
                        placeholder="Matrícula"
                        disabled
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        disabled
                    />

                    <Header>
                        <strong>Disciplinas</strong>
                        <button
                            type="button"
                            onClick={handlRelationTeacherSubject}
                        >
                            <MdAdd size={20} color="#FFF" />
                        </button>
                    </Header>
                    <ContainerTable>
                        <table>
                            {isLoading ? (
                                <LoadBook />
                            ) : (
                                <ListSubjects>
                                    {subjects.map(subject => (
                                        <Subject key={subject.id}>
                                            {subject.name}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleDelete(subject)
                                                }
                                            >
                                                {subjects.length > 1 && (
                                                    <MdDelete
                                                        size={20}
                                                        color="#fb6f91"
                                                    />
                                                )}
                                            </button>
                                        </Subject>
                                    ))}
                                </ListSubjects>
                            )}
                        </table>
                    </ContainerTable>
                </Form>
            </Container>
        </Modal>
    );
}
