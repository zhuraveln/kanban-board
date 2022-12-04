import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'

/** Custom hook for TS types Redux Dispatch  */
export const useAppDispatch: () => AppDispatch = useDispatch
