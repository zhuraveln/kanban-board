import {
  CloseModalAction,
  ModalActionsTypes,
  SetModalContentAction
} from './types'

// Modal Content Types
export enum ModalContentTypes {
  FORM_CREATE_BOARD = 'FORM_CREATE_BOARD',
  FORM_CREATE_TASK = 'FORM_CREATE_TASK',
  FORM_UPDATE_TASK = 'FORM_UPDATE_TASK',
  FULL_TASK = 'FULL_TASK'
}

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
