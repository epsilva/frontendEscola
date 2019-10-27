export default function menu(state = [], action) {
    switch (action.type) {
        case '@menu/OPEN_CLOSE_MENU':
            return action.isOpen
        default:
            return state;
    }
}