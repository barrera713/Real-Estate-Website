import { FOR_SALE } from './types';

export const fetchSaleProperties = () => dispatch => {
    console.log('in action')
   fetch('http://localhost:3000/properties')
   .then(res => res.json())
   .then( properties => 
    dispatch({
       type: FOR_SALE,
       payload: properties
   }));
    
}