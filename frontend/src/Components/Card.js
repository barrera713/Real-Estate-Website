import React from 'react';
import { Button } from 'reactstrap';



const Card = (props) => {

    const { property } = props

    const handleClick = () => {
        console.log('ugabuga!');
    };
    
    return (
        <div className="card">
            <img className="card-img" src={property.photo} alt="img"/>
            <div className="card-text">
                <h3>${property.price} {property.rooms} BDS</h3>
                <h4>{property.address}</h4>
                <p>{property.city}, {property.state}</p>
                <button onClick={handleClick} color="primary" className="save-btn">Save</button>
            </div>
        </div>
        )
}



export default Card;

