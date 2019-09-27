import React from 'react';
import { connect } from 'react-redux';
import { fetchSaleProperties } from '../Actions/BuyActions';
import  Card from './Card';



class ForRentCard extends React.Component {

    componentDidMount() {
        this.props.fetchSaleProperties()
    }


    render() {

        return (
        <div className="row">
            <div className="column">
            {this.props.properties.map(i => {
                if(i.rent === true)
                return <Card property={i} /> 
            })}
            </div>
        </div>
        )
    }

}

const mapStateToProps = state => ({
    properties: state.forSale.sellData
})

export default connect(mapStateToProps, { fetchSaleProperties })(ForRentCard);
