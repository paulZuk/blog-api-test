import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/index';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostIndex from './components/PostIndex.js';
import PostNew from './components/PostNew.js';


const store = createStore(
    rootReducer, 
    applyMiddleware(promise)
);

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={PostIndex} />
                <Route path="/posts/new" component={PostNew} />
            </Switch>
        </BrowserRouter>
    </Provider>,    

    document.getElementById('root')
);