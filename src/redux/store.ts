import { createStore } from 'redux'
import { rootReducer } from './reducers'
import { useDispatch } from 'react-redux'

export const store = createStore(rootReducer)

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
