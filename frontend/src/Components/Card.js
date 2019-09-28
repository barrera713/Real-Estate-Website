import React from 'react';



const Card = (props) => {

    const { property } = props

    const handleClick = () => {
        alert('ugabuga!')
    }
    
    return (
        <div className="card">
            <img className="card-img" src={property.photo} alt="img"/>
            <div className="card-text">
                <h3>${property.price} {property.rooms} BDS</h3>
                <h4>{property.address}</h4>
                <p>{property.city}, {property.state}</p>
                <button onClick={handleClick} className="save-button">Favorite</button>
            </div>
        </div>
        )
}



export default Card;

