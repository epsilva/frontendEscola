export function requestIsOpen(isOpen) {
    return {
        type: '@menu/REQUEST_IS_OPEN',
        payload: { isOpen },
    };
}

export function successIsOpen(isOpen) {
    return {
        type: '@menu/SUCCSESS_IS_OPEN',
        payload: { isOpen },
    };
}
