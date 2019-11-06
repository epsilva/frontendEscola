import { takeLatest, put, all } from 'redux-saga/effects';
import { successIsOpen } from './actions';

export function* openClose({ payload }) {
    const { isOpen } = payload;

    yield put(successIsOpen(isOpen));
}

export default all([takeLatest('@menu/REQUEST_IS_OPEN', openClose)]);
