import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers(reducers);
const middleware = [thunk];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;