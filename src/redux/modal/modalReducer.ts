import { ModalAction, ModalActionsTypes, ModalState } from './types'

const initialState: ModalState = {
  isModalOpen: false,
  modalContent: null
}

export const modalReducer = (
  state = initialState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    //----------------------------------------------------------------

    // SET MODAL CONTENT AND OPEN MODAL
    case ModalActionsTypes.SET_MODAL_CONTENT_TYPE:
      return { ...state, modalContent: action.payload, isModalOpen: true }

    //----------------------------------------------------------------

    // CLOSE MODAL
    case ModalActionsTypes.CLOSE_MODAL:
      return { ...state, isModalOpen: false }

    //----------------------------------------------------------------

    default:
      return state
  }
}
