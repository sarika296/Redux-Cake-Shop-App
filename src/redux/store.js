import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../redux/rootReducer'
import logger from 'redux-logger'

const store= createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)) )

export default store 