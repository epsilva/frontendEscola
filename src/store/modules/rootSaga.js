import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import menu from './menu/sagas';
import actions from './actions/sagas';
import subject from './subject/sagas';
import userSubject from './userSubject/sagas';

export default function* rootSaga() {
    return yield all([auth, user, menu, actions, subject, userSubject]);
}
