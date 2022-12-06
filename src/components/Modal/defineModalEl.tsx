import { FormCreateBoard, FormCreateTask } from '..'

// Modal Content Types
export enum ModalContentTypes {
  FORM_CREATE_BOARD = 'FORM_CREATE_BOARD',
  FORM_CREATE_TASK = 'FORM_CREATE_TASK'
}

export const defineModalEl = (
  modalContentTypes: ModalContentTypes | null
): JSX.Element => {
  let modalEl = null
  switch (modalContentTypes) {
    case ModalContentTypes.FORM_CREATE_BOARD:
      modalEl = <FormCreateBoard />
      break
    case ModalContentTypes.FORM_CREATE_TASK:
      modalEl = <FormCreateTask />
      break

    default:
      modalEl = <></>
  }
  return modalEl
}
