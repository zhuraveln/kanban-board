import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import { rootReducer } from './rootReducer'
import { loadFromLocalStorage, saveToLocalStorage } from '../utils'

// Load from local storage
const persistedState = loadFromLocalStorage('kanban')

// Redux store
export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools()
)

// Save to local storage
store.subscribe(() => saveToLocalStorage(store.getState(), 'kanban'))

// RootState types
export type RootState = ReturnType<typeof store.getState>
// Actions types
export type AppDispatch = typeof store.dispatch
