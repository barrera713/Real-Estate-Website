import React from 'react';
import { connect } from 'react-redux';
import { fetchSaleProperties } from '../Actions/BuyActions';
import Card from './Card';



class ForSaleCard extends React.Component {

    componentDidMount() {
        this.props.fetchSaleProperties()
    }

    render() {

        return (
            this.props.properties.map(i => {
                if(i.rent === false)
                return <Card property={i} /> 
            })
        )
    }
    

}

const mapStateToProps = state => ({
    properties: state.forSale.sellData
})

export default connect(mapStateToProps, { fetchSaleProperties })(ForSaleCard);
