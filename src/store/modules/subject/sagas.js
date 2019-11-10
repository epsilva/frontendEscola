import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
    deleteSubjectSuccess,
    insertSubjectSuccess,
    updateSubjectSuccess,
    subjectFailure,
} from './actions';

export function* insertSubject({ payload }) {
    try {
        const { name } = payload.subject;
        const subject = {
            name,
        };

        const response = yield call(api.post, 'subjects', subject);

        toast.success('Operação realizada com sucesso');

        yield put(insertSubjectSuccess(response.data));
    } catch (err) {
        toast.error('Erro ao realizar operação, confira seus dados!');

        yield put(subjectFailure());
    }
}

export function* updateSubject({ payload }) {
    try {
        const { id, name } = payload.subject;
        const subject = {
            id,
            name,
        };
        const response = yield call(api.put, 'subjects', subject);

        toast.success('Operação realizada com sucesso');

        yield put(updateSubjectSuccess(response.data));
    } catch (err) {
        toast.error('Erro ao realizar operação, confira seus dados!');

        yield put(subjectFailure());
    }
}

export function* deleteSubject({ payload }) {
    try {
        const { subject } = payload;

        const response = yield call(api.delete, `subjects/${subject.id}`);
        toast.success('Operação realizada com sucesso');

        yield put(deleteSubjectSuccess(response.data));
    } catch (err) {
        toast.error('Erro ao realizar operação, confira seus dados!');

        yield put(subjectFailure());
    }
}

export default all([
    takeLatest('@subject/INSERT_SUBJECT_REQUEST', insertSubject),
    takeLatest('@subject/UPDATE_SUBJECT_REQUEST', updateSubject),
    takeLatest('@subject/DELETE_SUBJECT_REQUEST', deleteSubject),
]);
