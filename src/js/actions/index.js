import { GET_DATA, CREATE_POST, FETCH_POST } from '../constants';
import axios from 'axios';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=Dennis4353";

export const fetchData = () => {

    const data = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: GET_DATA,
        payload: data
    }
}

export const createPost = (values, callback) => {

    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}

export const fetchPost = id => {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST, 
        payload: request
    }
}