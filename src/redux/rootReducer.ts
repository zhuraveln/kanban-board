import { combineReducers } from 'redux'
import { boardReducer } from './boardReducer'

export const rootReducer = combineReducers({ boards: boardReducer })

export type RootState = ReturnType<typeof rootReducer>
