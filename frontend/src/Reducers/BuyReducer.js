import { FOR_SALE } from '../Actions/types';

const initiateState = {
    sellData: []
};

export default function( state = initiateState, action ) {
    switch (action.type) {
        case FOR_SALE: 
        console.log('in reducer')
            return {
                ...state,
                sellData: action.payload
            };
        default: 
        return state;
    }
}