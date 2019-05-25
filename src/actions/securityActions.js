import axios from "axios";
import { GET_ERRORS } from "./types";

export const createNewUser = (newUser, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/users/register", newUser);
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data    
        });
    }
}

