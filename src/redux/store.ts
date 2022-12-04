import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './rootReducer'

// Redux store
export const store = createStore(rootReducer, composeWithDevTools())

// Types of actions for dispatch
export type AppDispatch = typeof store.dispatch
