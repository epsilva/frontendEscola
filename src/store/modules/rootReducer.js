import { combineReducers } from 'redux';

import menu from './menu/reducer';
import auth from './auth/reducer';

export default combineReducers({
    menu,
    auth
});
