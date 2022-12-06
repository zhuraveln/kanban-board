import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../redux/store'

/** Custom hook for TS typed Redux Selector  */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
