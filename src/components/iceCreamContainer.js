import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from "../redux"

function IceCreamContainer(props) {
    const [quantity, setQuantity] = useState(1)
    return (
        <div>
            <h2>Number of ice-creams - {props.numOfIceCreams} </h2>
            <input type='text' value={quantity} onChange={e => setQuantity(e.target.value)} />
            <button onClick= {() => quantity<=props.numOfIceCreams ? props.buyIceCream(quantity) : props.buyIceCream(0) }>Buy {quantity} Ice Cream</button>
        </div>
    )
} 

const mapStateToProps = state => {
    return{
        numOfIceCreams:state.iceCream.numOfIceCreams
     }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: (quantity) => dispatch(buyIceCream(quantity))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);