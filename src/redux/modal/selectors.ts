import { RootState } from '../store'

/** Selector for getting all boards from state */
export const modalSelector = (state: RootState) => state.modal
