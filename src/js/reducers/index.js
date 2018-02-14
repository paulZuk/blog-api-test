import { combineReducers } from 'redux';
import PostsReducer from './post_reducer';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
});