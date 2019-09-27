import React from 'react';



const Card = (props) => {

    const { property } = props
    
    return (<div>
        <div className="card">
            <img className="card-img" src={property.photo} alt="img"/>
            <h4 className="card-header">{property.price}</h4>
            {property.address}
            {property.city, property.state}
        </div>
        </div>)
}



export default Card;

