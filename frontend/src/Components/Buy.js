import React from 'react';
import { connect } from 'react-redux';
import { fetchSaleProperties } from '../Actions/BuyActions';


class Buy extends React.Component {

    componentWillMount() {
        this.props.fetchSaleProperties()
    }

    render() {
        return (
            <div>
                <h1>Buy</h1>
            </div>
        )
    }    
}

const mapStateToProps = state => ({
    properties: state.forSale.sellData
})

export default connect(mapStateToProps, { fetchSaleProperties })(Buy);


