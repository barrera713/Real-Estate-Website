import { combineReducers } from 'redux';
import BuyReducer from './BuyReducer';
import RentReducer from './RentReducer';

export const reducers = combineReducers({
    forSale: BuyReducer, 
    forRent: RentReducer
})

