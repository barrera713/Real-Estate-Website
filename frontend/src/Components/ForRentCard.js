import React from 'react';
import { connect } from 'react-redux';
import { fetchSaleProperties } from '../Actions/BuyActions';



class ForRentCard extends React.Component {

    componentDidMount() {
        this.props.fetchSaleProperties()
    }

    render() {
        console.log(this.props.properties)

        const properties = this.props.properties

        let card = properties.map(i => {
            if(i.rent === true)
            return (<div>
                <img src={i.photo} />
                <h1>{i.state}</h1>
            </div>
            )
        });

        return (
            <div>
                {card}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    properties: state.forSale.sellData
})

export default connect(mapStateToProps, { fetchSaleProperties })(ForRentCard);
