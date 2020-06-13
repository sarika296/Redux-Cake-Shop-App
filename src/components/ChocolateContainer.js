import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyChocolate } from "../redux"

function ChocolateContainer(props) {
    const [quantity, setQuantity] = useState(1)
    return (
        <div>
            <h2>Number of chocolates - {props.numOfChocolates} </h2>
            <input type='text' value={quantity} onChange={e => setQuantity(e.target.value)} />
            <button onClick= {() => quantity<=props.numOfChocolates ? props.buyChocolate(quantity) : props.buyChocolate(0) }>Buy {quantity} Chocolate</button>
        </div>
    )
} 

const mapStateToProps = state => {
    return{
        numOfChocolates:state.chocolate.numOfChocolates
     }
}

const mapDispatchToProps = dispatch => {
    return {
        buyChocolate: (quantity) => dispatch(buyChocolate(quantity))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ChocolateContainer);