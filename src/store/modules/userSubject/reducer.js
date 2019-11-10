import { produce } from 'immer';

const INITIAL_STATE = {
    subject: [],
    userSubjects: {},
    isLoading: true,
};

export default function subject(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@userSubject/SELECT_SUBJECT_BY_USER_SUCCESS': {
                draft.subject = action.payload.subject;
                draft.isLoading = false;
                break;
            }
            case '@userSubject/INSERT_SUBJECT_USER_SUCCESS': {
                draft.userSubject = action.payload.userSubject;
                draft.isLoading = false;
                break;
            }
            case '@userSubject/SUBJECT_USER_FAILURE': {
                draft.subject = null;
                draft.isLoading = false;
                break;
            }
            default:
        }
    });
}
