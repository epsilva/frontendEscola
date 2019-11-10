import { produce } from 'immer';

const INITIAL_STATE = {
    subject: [],
};

export default function subject(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@subject/INSERT_SUBJECT_SUCCESS': {
                draft.subject = action.payload.subject;
                break;
            }
            case '@subject/UPDATE_SUBJECT_SUCCESS': {
                draft.subject = action.payload.subject;
                break;
            }
            case '@subject/DELETE_SUBJECT_SUCCESS': {
                draft.subject = action.payload.subject;
                break;
            }
            case '@subject/SUBJECT_FAILURE': {
                draft.subject = null;
                break;
            }
            default:
        }
    });
}
