import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { selectSubjectByUserSuccess, subjectFailure } from './actions';

export function* insertSubjectUser({ payload }) {
    try {
        const { userSubject } = payload;

        yield call(api.post, 'userSubjects', userSubject);

        toast.success('Operação realizada com sucesso');
    } catch (err) {
        toast.error('Erro na requisição, confira seus dados!');

        yield put(subjectFailure());
    }
}

export function* selectSubjectByUser({ payload }) {
    try {
        const { subject } = payload;

        yield put(selectSubjectByUserSuccess(subject));
    } catch (err) {
        toast.error('Erro na requisição, confira seus dados!');
        yield put(subjectFailure());
    }
}

export default all([
    takeLatest('@userSubject/INSERT_SUBJECT_USER_REQUEST', insertSubjectUser),
    takeLatest(
        '@userSubject/SELECT_SUBJECT_BY_USER_REQUEST',
        selectSubjectByUser
    ),
]);
