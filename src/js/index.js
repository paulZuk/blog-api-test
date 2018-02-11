import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/index';
import promise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';
import PostIndex from './components/PostIndex';


const store = createStore(
    rootReducer, 
    applyMiddleware(promise)
);

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <div>
                <Route path="/" component={PostIndex} />
            </div>
        </BrowserRouter>
    </Provider>,    

    document.getElementById('root')
);