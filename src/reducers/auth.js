import {
    AUTH_SIGNUP,
    AUTH_ERROR,
    AUTH_LOGIN,
    AUTH_LOGOUT
} from "../actions/types";

const DEFAULT_STATE = {
    isAuthenticated: false,
    token: '',
    errorMessage: ''
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case AUTH_SIGNUP:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                errorMessage: ''
            }
        case AUTH_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        case AUTH_LOGIN:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                errorMessage: ''
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                token: '',
                isAuthenticated: false,
                errorMessage: ''
            }
        default:
            return state
    }

}