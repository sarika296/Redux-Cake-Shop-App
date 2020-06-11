import React from 'react'
import { connect } from 'react-redux'
import { storeMoney } from "../redux"

function CounterContainer(props) {
    return (
        <div> 
            <h2>Total Money To The Counter</h2>
            <p style={{fontSize:20}}>Total Money - {props.totalMoney} </p>
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