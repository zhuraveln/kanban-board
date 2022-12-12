import { ModalContentTypes } from '../../components/Modal/defineModalEl'
import {
  CloseModalAction,
  ModalActionsTypes,
  SetModalContentAction
} from './types'

// Action for set modal content and open modal
export const setModalContent = (
  payload: ModalContentTypes
): SetModalContentAction => ({
  type: ModalActionsTypes.SET_MODAL_CONTENT_TYPE,
  payload
})

// Action for close modal
export const closeModal = (): CloseModalAction => ({
  type: ModalActionsTypes.CLOSE_MODAL
})
