import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyChocolate } from "../redux"

function ChocolateContainer(props) {
    const [number, setNumber] = useState()
    return (
        <div>
            <h2>Number of chocolates - {props.numOfChocolates} </h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick= {() => props.buyChocolate(number)}>Buy {number} Chocolate</button>
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
        buyChocolate: (number) => dispatch(buyChocolate(number))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ChocolateContainer);