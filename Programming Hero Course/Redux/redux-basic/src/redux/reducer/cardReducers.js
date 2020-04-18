import {ADD_TO_CART} from '../actions/cartActions';

const initialState = {
    cart: []
}

const cardReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                cart: []
            }
        default:
            return state;
    }
}