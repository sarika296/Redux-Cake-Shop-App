import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from "../redux"

function IceCreamContainer(props) {
    const [number, setNumber] = useState()
    return (
        <div>
            <h2>Number of ice-creams - {props.numOfIceCreams} </h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick= {() => props.buyIceCream(number)}>Buy {number} Ice Cream</button>
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
        buyIceCream: (number) => dispatch(buyIceCream(number))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);