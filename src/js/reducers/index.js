import { combineReducers } from 'redux';
import PostsReducer from './post_reducer';

export const rootReducer = combineReducers({
    posts: PostsReducer
});