import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from "../redux"

function CakeContainer(props) {
    const [quantity, setQuantity] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes} </h2>
            <input type='text' value={quantity} onChange={e => setQuantity(e.target.value)} />
            <button onClick= {() => quantity<=props.numOfCakes ? props.buyCake(quantity) : props.buyCake(0) }>Buy {quantity} Cake</button>
        </div>
    )
} 

const mapStateToProps = state => {
    return{
        numOfCakes:state.cake.numOfCakes
     }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (quantity) => dispatch(buyCake(quantity))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)