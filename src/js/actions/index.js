import { GET_DATA } from '../constants';
import axios from 'axios';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=Dennis4353";

export const fetchData = () => {

    const data = axios.get(`${ROOT_URL}/posts${API_KEY}`)

    return {
        type: GET_DATA,
        payload: data
    }
}