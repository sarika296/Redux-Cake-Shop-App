import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import chocolateReducer from './chocolate/chocolateReducer'
import userReducer from './user/userReducer'
import counterReducer from './counter/counterReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    chocolate: chocolateReducer,
    counter: counterReducer,
    user: userReducer
})

export default rootReducer