import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose, MdSave, MdCancel } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { requestIsOpenModalSubject } from '~/store/modules/actions/actions';
import {
    insertSubjectRequest,
    updateSubjectRequest,
} from '~/store/modules/subject/actions';

import {
    Modal,
    Container,
    ContainerTitle,
    Title,
    ButtonClose,
    ButtonSave,
    ButtonCancel,
} from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome da disciplina é obrigatório'),
});

export default function FormSubject({ subject }) {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.actions.isOpenModalSubject);

    function handleCloseModal() {
        dispatch(requestIsOpenModalSubject(isOpen));
    }

    function handleSubmit({ name }) {
        if (subject && subject.id) {
            const newSubject = {
                id: subject.id,
                name,
            };
            dispatch(updateSubjectRequest(newSubject));
        } else {
            dispatch(insertSubjectRequest({ name }));
        }
    }

    return (
        <Modal isOpen={isOpen}>
            <Container isOpen={isOpen}>
                <ContainerTitle>
                    <Title>Disciplna</Title>
                    <ButtonClose type="button" onClick={handleCloseModal}>
                        <MdClose size={20} color="#333" />
                    </ButtonClose>
                </ContainerTitle>
                <Form
                    schema={schema}
                    initialData={subject}
                    onSubmit={handleSubmit}
                >
                    <Input type="text" name="name" placeholder="Disciplna" />
                    <div>
                        <ButtonSave type="submit">
                            <MdSave size={32} color="#fff" />
                        </ButtonSave>
                        <ButtonCancel type="button" onClick={handleCloseModal}>
                            <MdCancel size={32} color="#fff" />
                        </ButtonCancel>
                    </div>
                </Form>
            </Container>
        </Modal>
    );
}
