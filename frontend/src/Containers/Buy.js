import React from 'react';
import ForSaleCard from '../Components/ForSaleCard';
import { connect } from 'react-redux';
import { fetchSaleProperties } from '../Actions/BuyActions';

function Buy() {
    return (
        <div>
            <ForSaleCard />
        </div>
    )
}

export default Buy

