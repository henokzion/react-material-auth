import axios from 'axios';

const BaseUrl = "http://localhost:8000"

export const  signup = data => {
    return async dispatch => {
        try {
            const res = await axios.post(`${BaseUrl}/signup`, data)
            console.log(res)
        } catch (error) {
            
        }
    }
}