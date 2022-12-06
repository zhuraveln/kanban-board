import { FormCreateBoard, FormCreateTask, FullTask } from '..'
import { ModalContentTypes } from '../../redux/modal/actions'

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
      modalEl = <FullTask />
      break

    default:
      modalEl = <></>
  }
  return modalEl
}
