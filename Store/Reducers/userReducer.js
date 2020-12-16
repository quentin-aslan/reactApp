const initialState = {
    user: {
        username: '',
        jwt: ''
    }
}

/**
 * @description Modifie les informations global de l'utilisateur
 * @param state
 * @param action
 * @returns {{jwt: string, username: string}|{jwt: (string|*), username: (string|void|T|string|*)}}
 */
function toggleUserDatas(state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'UPDATE_USER':
            nextState = {
                user: {
                    username: action.value.username,
                    jwt: action.value.jwt
                }
            }
            return nextState || state;
        default:
            return state;
    }
}

export default toggleUserDatas;