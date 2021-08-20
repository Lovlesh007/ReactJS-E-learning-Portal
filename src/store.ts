import { createStore, compose, Store, applyMiddleware } from 'redux'
import rootReducers from './reducers/rootreducer'
import thunk from 'redux-thunk';


const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(thunk))
const store: Store = createStore(rootReducers, enhancer)

export type RootState = ReturnType<typeof rootReducers>

export default store