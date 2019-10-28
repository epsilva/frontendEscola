export default function auth(state = [], action) {
    console.log(action.user)
    switch (action.type) {
        case '@auth/LOGIN':
            return action.user
        default:
            return state;
    }
}