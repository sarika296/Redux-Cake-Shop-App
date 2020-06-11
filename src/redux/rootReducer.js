import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import chocolateReducer from './chocolate/chocolateReducer'
import counterReducer from './counter/counterReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    chocolate: chocolateReducer,
    counter: counterReducer
})

export default rootReducer