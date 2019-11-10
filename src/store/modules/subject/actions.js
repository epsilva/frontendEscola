export function insertSubjectRequest(subject) {
    return {
        type: '@subject/INSERT_SUBJECT_REQUEST',
        payload: { subject },
    };
}

export function insertSubjectSuccess(subject) {
    return {
        type: '@subject/INSERT_SUBJECT_SUCCESS',
        payload: { subject },
    };
}

export function updateSubjectRequest(subject) {
    return {
        type: '@subject/UPDATE_SUBJECT_REQUEST',
        payload: { subject },
    };
}

export function updateSubjectSuccess(subject) {
    return {
        type: '@subject/UPDATE_SUBJECT_SUCCESS',
        payload: { subject },
    };
}

export function deleteSubjectRequest(subject) {
    return {
        type: '@subject/DELETE_SUBJECT_REQUEST',
        payload: { subject },
    };
}

export function deleteSubjectSuccess(subject) {
    return {
        type: '@subject/DELETE_SUBJECT_SUCCESS',
        payload: { subject },
    };
}

export function subjectFailure() {
    return {
        type: '@subject/SUBJECT_FAILURE',
    };
}
