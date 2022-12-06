import { combineReducers } from 'redux'
import { boardReducer } from './board/boardReducer'
import { modalReducer } from './modal/modalReducer'

export const rootReducer = combineReducers({
  board: boardReducer,
  modal: modalReducer
})
