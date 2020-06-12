import { BUY_CAKE } from '../cake/cakeTypes'
import { BUY_CHOCOLATE } from '../chocolate/chocolateTypes'
import { BUY_ICECREAM } from '../iceCream/iceCreamTypes'

const initialState = {
    totalMoney: 0
}

const counterReducer = (state = initialState, action ) => {
    switch(action.type) {

        case BUY_CAKE : return {
            totalMoney: state.totalMoney + action.cost
        }

        case BUY_CHOCOLATE : return {
            totalMoney: state.totalMoney + action.cost
        }

        case BUY_ICECREAM : return {
            totalMoney: state.totalMoney + action.cost
        }

        default: return state
    }
}

export default counterReducer 