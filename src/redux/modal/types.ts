import { ModalContentTypes } from '../../components/Modal/types'

// Interface for Board State
export interface ModalState {
  isModalOpen: boolean
  modalContent: ModalContentTypes | null
}

// Modal Actions Types
export enum ModalActionsTypes {
  SET_MODAL_CONTENT_TYPE = 'SET_MODAL_CONTENT_TYPE',
  CLOSE_MODAL = 'CLOSE_MODAL'
}

// Types for Modal Actions
export type ModalAction = CloseModalAction | SetModalContentAction

// Interface for Set Modal Content and open modal
export interface SetModalContentAction {
  type: ModalActionsTypes.SET_MODAL_CONTENT_TYPE
  payload: ModalContentTypes
}

// Interface for Close Modal Action
export interface CloseModalAction {
  type: ModalActionsTypes.CLOSE_MODAL
}
