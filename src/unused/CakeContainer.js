import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from "../redux"

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes} </h2>
            <button onClick= {props.buyCake}>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

//connect By Hook

/*
import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch =  useDispatch()
    return(
        <div>
        <h2>Num of cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer

*/