import { produce } from 'immer';

const INITIAL_STATE = {
    isOpen: false,
};

export default function menu(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@menu/REQUEST_IS_OPEN': {
                draft.isOpen = !state.isOpen;
                break;
            }
            case '@menu/SUCCESS_IS_OPEN': {
                draft.isOpen = !state.isOpen;
                break;
            }
            default:
        }
    });
}
