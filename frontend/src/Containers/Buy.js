import React from 'react';
import PropertCard from '../Components/PropertyCard';
import { connect } from 'react-redux';
import { fetchSaleProperties } from '../Actions/BuyActions';

function Buy() {
    return (
        <div>
            <PropertCard />
        </div>
    )
}

export default Buy

