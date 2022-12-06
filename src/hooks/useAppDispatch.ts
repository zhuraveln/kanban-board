import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'

/** Custom hook for TS typed Redux Dispatch  */
export const useAppDispatch = () => useDispatch<AppDispatch>()
