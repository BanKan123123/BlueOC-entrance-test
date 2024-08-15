import {applyMiddleware, createStore} from 'redux';
import { apiReducer } from './reducers/api.reducer';
import { apiMiddleware } from './middleware/api.middleware';

export const store = createStore(apiReducer, applyMiddleware(apiMiddleware));