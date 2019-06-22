import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setJWT from "../securityutils/setJWT";
import jwt_decode from "jwt-decode";

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

export const login = LoginRequest => async dispatch => {
    try {
      // post => Login Request
        const res = await axios.post("http://localhost:8080/api/users/login", LoginRequest);
    // extract token from res.data
    const { token } = res.data;
    // store the token in the localStorage
    localStorage.setItem("jwtToken", token);
    // set our token in header ***
    setJWT(token);
    // decode token on React
    const decoded = jwt_decode(token);
    // dispatch to our securityReducer
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWT(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
      });
}

