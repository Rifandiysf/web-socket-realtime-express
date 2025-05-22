
const init = {
    init: true,
    token: null,
    user: null,
    message: null,
    err: null
}

const authReducer = (state = init, action) => {
    switch(action?.type) {
        case 'AUTH_INIT': 
            return init
        case 'AUTH_PROFILE_SUCCESS':
            return {
                ...state,
                user: action?.payload?.data
            }
        case 'AUTH_LOGIN_SUCCESS':
            return {
                ...state,
                token: action?.payload?.token
            }
        case 'AUTH_LOGIN_FAIL':
            return {
                ...state,
                err: action?.payload?.error
            }
        case 'AUTH_PROFILE_FAIL':
            return {
                ...state,
                err: action?.payload?.error
            }
        default:
            return state
    }
}

export default authReducer