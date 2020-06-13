import React from 'react'
import { connect } from 'react-redux'

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

export default connect(mapStateToProps)(CounterContainer);