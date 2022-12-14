import {
  FormCreateBoard,
  FormCreateTask,
  FormUpdateBoard,
  FormUpdateTask,
  Task
} from '..'

export enum ModalContentTypes {
  FORM_CREATE_BOARD = 'FORM_CREATE_BOARD',
  FORM_CREATE_TASK = 'FORM_CREATE_TASK',
  FORM_UPDATE_BOARD = 'FORM_UPDATE_BOARD',
  FORM_UPDATE_TASK = 'FORM_UPDATE_TASK',
  FULL_TASK = 'FULL_TASK'
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
    case ModalContentTypes.FULL_TASK:
      modalEl = <Task />
      break
    case ModalContentTypes.FORM_UPDATE_TASK:
      modalEl = <FormUpdateTask />
      break
    case ModalContentTypes.FORM_UPDATE_BOARD:
      modalEl = <FormUpdateBoard />
      break

    default:
      modalEl = <></>
  }
  return modalEl
}
