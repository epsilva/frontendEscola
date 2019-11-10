import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import menu from './menu/reducer';
import actions from './actions/reducer';
import subject from './subject/reducer';
import userSubject from './userSubject/reducer';

export default combineReducers({
    auth,
    user,
    menu,
    actions,
    subject,
    userSubject,
});
