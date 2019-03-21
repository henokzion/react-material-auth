import { AUTH_SIGNUP } from "../actions/types";

const DEFAULT_STATE = {
    isAuthenticated : false,
    token : '',
    errorMessage : ''
}

export default(state = DEFAULT_STATE, action) => {
    switch(action.token){
        case AUTH_SIGNUP:
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: ''}
        default:
            return state
}

    }