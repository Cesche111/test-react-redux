import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers.js';
import {composeWithDevTools} from 'redux-devtools-extension';

const middlewares = [thunk];

const appReducers = combineReducers(reducers);


const store = createStore(appReducers, composeWithDevTools(
    applyMiddleware(...middlewares),
));

export default store
