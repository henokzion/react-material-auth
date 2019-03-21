import axios from 'axios';

import { AUTH_SIGNUP } from "./types";

const BaseUrl = "http://localhost:8000"

export const  signup = data => {
    return async dispatch => {
        try {
            const res = await axios.post(`${BaseUrl}/signup`, data)
            dispatch({
                type : AUTH_SIGNUP,
                payload : res.data.token
            });

            localStorage.setItem("JWT_TOKEN", res.data.token);
        } catch (error) {
            console.error('err', error);
        }
    }
}