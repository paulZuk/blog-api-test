import { GET_DATA, FETCH_POST } from '../constants';
import _ from 'lodash';

export default (state = {}, action) => {
    switch(action.type) {
        case GET_DATA:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState =  { ...state };

            // newState[post.id] = post;
            // return newState;

            return { ...state, [action.payload.data.id]:action.payload.data };
        
        default:
            return state;
    }
}