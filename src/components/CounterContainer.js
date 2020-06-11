import React, { useState } from 'react'
import { connect } from 'react-redux'
import { storeMoney } from "../redux"

function CounterContainer(props) {
    const [number, setNumber] = useState()
    return (
        <div> 
            <h2>Total Money - {props.totalMoney} </h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick= {() => props.storeMoney(number)}>Total Money</button>
        </div>
    )
} 

const mapStateToProps = state => {
    return{
        totalMoney: state.counter.totalMoney
     }
}

const mapDispatchToProps = dispatch => {
    return {
        storeMoney: (number) => dispatch(storeMoney(number))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);