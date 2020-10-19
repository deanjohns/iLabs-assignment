import cartListReducer from './cartlist';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    cartList: cartListReducer,
})

export default allReducers;