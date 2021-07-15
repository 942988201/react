import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from "redux-thunk";
import createSageMiddleware from "redux-saga";
import saga from "./sagas.js"
const sagaMiddleware = createSageMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(
    reducer,
    enhancer
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(saga)
export default store;