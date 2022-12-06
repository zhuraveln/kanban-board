import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './rootReducer'

// Redux store
export const store = createStore(rootReducer, composeWithDevTools())

// RootState types
export type RootState = ReturnType<typeof store.getState>
// Actions types
export type AppDispatch = typeof store.dispatch
