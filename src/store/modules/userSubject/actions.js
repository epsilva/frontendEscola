export function selectSubjectByUserRequest(subject) {
    return {
        type: '@userSubject/SELECT_SUBJECT_BY_USER_REQUEST',
        payload: { subject },
    };
}

export function selectSubjectByUserSuccess(subject) {
    return {
        type: '@userSubject/SELECT_SUBJECT_BY_USER_SUCCESS',
        payload: { subject },
    };
}

export function insertSubjectUserRequest(userSubject) {
    return {
        type: '@userSubject/INSERT_SUBJECT_USER_REQUEST',
        payload: { userSubject },
    };
}

export function insertSubjectUserSuccess(userSubject) {
    return {
        type: '@userSubject/INSERT_SUBJECT_USER_SUCCESS',
        payload: { userSubject },
    };
}

export function subjectFailure() {
    return {
        type: '@userSubject/SUBJECT_USER_FAILURE',
    };
}
