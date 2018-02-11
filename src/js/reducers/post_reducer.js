import { GET_DATA } from '../constants';
import _ from 'lodash';

export default (state = {}, action) => {
    switch(action.type) {
        case GET_DATA:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}