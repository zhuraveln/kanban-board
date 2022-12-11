import { FormCreateBoard, FormCreateTask, FormUpdateTask, Task } from '..'
import { ModalContentTypes } from './types'

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

    default:
      modalEl = <></>
  }
  return modalEl
}
