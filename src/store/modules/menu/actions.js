export function openMenu(isOpen) {
    return {
        type: '@menu/OPEN_CLOSE_MENU',
        isOpen
    };
}