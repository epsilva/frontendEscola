import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdCancel, MdSave } from 'react-icons/md';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import Select from '~/components/ComboBox';
import { requestIsOpenModalSubject } from '~/store/modules/actions/actions';
import { insertSubjectUserRequest } from '~/store/modules/userSubject/actions';
import api from '~/services/api';

import {
    Container,
    Modal,
    ContainerTitle,
    Title,
    ButtonClose,
    ButtonSave,
    ButtonCancel,
    ContainerButton,
} from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('A disciplina é obrigatória'),
});

export default function FormTeatcherSubject({ provider }) {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.actions.isOpenModalSubject);
    const [subjects, setSubjects] = useState([]);
    const userSubjects = useSelector(state => state.userSubject.subject);

    useEffect(() => {
        async function loadSubjects() {
            const response = await api.get('subjects');

            setSubjects(response.data);
        }

        loadSubjects();
    }, []);

    function handleCloseModal() {
        dispatch(requestIsOpenModalSubject(isOpen));
    }

    async function clickSubmit({ name }) {
        const listSubject = [];

        userSubjects.map(sub => {
            listSubject.push(sub.id);
        });
        listSubject.push(name);

        const providerSubject = {
            userId: provider.id,
            subjects: listSubject,
        };

        dispatch(insertSubjectUserRequest(providerSubject));
        handleCloseModal();
    }

    return (
        <Modal isOpen={isOpen}>
            <Container isOpen={isOpen}>
                <ContainerTitle>
                    <Title>Disciplina</Title>
                    <ButtonClose type="button" onClick={handleCloseModal}>
                        <MdClose size={20} color="#333" />
                    </ButtonClose>
                </ContainerTitle>

                <Form schema={schema} onSubmit={clickSubmit}>
                    <Select
                        name="name"
                        placeholder="Disciplina"
                        options={subjects}
                    />

                    <ContainerButton>
                        <ButtonSave type="submit">
                            <MdSave size={32} color="#fff" />
                        </ButtonSave>
                        <ButtonCancel type="button" onClick={handleCloseModal}>
                            <MdCancel size={32} color="#fff" />
                        </ButtonCancel>
                    </ContainerButton>
                </Form>
            </Container>
        </Modal>
    );
}
