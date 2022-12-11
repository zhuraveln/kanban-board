import React from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { modalSelector } from '../../redux/modal/selectors'
import { closeModal } from '../../redux/modal/actions'

import { defineModalEl } from './defineModalEl'

import classes from './Modal.module.scss'

export const Modal: React.FC = () => {
  const dispatch = useAppDispatch()
  const { isModalOpen, modalContent } = useAppSelector(modalSelector)

  return (
    <div
      className={
        isModalOpen ? `${classes.root} ${classes.active}` : classes.root
      } // backdrop
      onClick={() => dispatch(closeModal())}
    >
      {/* Modal window */}
      <div className={classes.window} onClick={e => e.stopPropagation()}>
        <div className={classes.content}>{defineModalEl(modalContent)}</div>
      </div>
    </div>
  )
}
