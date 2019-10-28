export function auth(user) {
    return {
        type: '@menu/OPEN_CLOSE_MENU',
        user
    };
}