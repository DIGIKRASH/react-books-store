import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'


const composeEngancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEngancer()
)



export default store