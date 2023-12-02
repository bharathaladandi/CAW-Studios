import { createStore } from 'redux';
import { ProductReducer } from './Product.reducers';
import { composeWithDevTools } from "redux-devtools-extension";


export const store = createStore(
    ProductReducer,
    composeWithDevTools()
);
