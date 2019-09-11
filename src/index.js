import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



import { createStore, compose, applyMiddleware } from 'redux'
import appReducers from './reducers/store';
import {Provider} from 'react-redux' ;
import thunk from 'redux-thunk';
// tích hợp Middleware 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    appReducers,
    composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
