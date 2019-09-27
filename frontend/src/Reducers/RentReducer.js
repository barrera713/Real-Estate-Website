import { FOR_RENT } from '../Actions/types';

const initiateState = {
    rentData:[]
}

export default function( state = initiateState, action ) {
    switch (action.type) {
        case FOR_RENT: 
        return {
            ...state,
            rentData: action.payload
        };
        default: 
        return state;
    }
}