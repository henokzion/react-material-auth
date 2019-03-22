import axios from 'axios';

import {
    AUTH_SIGNUP,
    AUTH_ERROR,
    AUTH_LOGIN,
    AUTH_LOGOUT
} from "./types";

const BaseUrl = "http://localhost:8000"

export const signup = data => {
    return async dispatch => {
        try {
            const res = await axios.post(`${BaseUrl}/signup`, data)
            dispatch({
                type: AUTH_SIGNUP,
                payload: res.data.token
            });

            localStorage.setItem("JWT_TOKEN", res.data.token);
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: "signup error"
            })
        }
    }
}

export const login = data => {
    return async dispatch => {
        try {
            const res = await axios.post(`${BaseUrl}/login`, data)
            dispatch({
                type: AUTH_LOGIN,
                payload: res.data.token
            });

            localStorage.setItem("JWT_TOKEN", res.data.token);
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: "LOGIN error"
            })
        }
    }
}
export const logout = () => {
    return async dispatch => {
        localStorage.removeItem("JWT_TOKEN")
        dispatch({
                type: AUTH_LOGOUT,
                payload: ''
            });
    }
}

export const loginWithGoogle = data => {
    return async dispatch => {
        try {
            const res = await axios.post(`${BaseUrl}/oauth/google`, data)
            dispatch({
                type: AUTH_LOGIN,
                payload: res.data.token
            });

            localStorage.setItem("JWT_TOKEN", res.data.token);
        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: "LOGIN error"
            })
        }
    }
}