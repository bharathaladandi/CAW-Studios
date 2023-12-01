import { createStore } from 'redux';
import { ProductReducer } from './Product.reducers';


export const store = createStore(
    ProductReducer
);
