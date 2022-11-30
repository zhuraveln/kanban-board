import React from 'react'

import { IModalProps } from './types'

import classes from './Modal.module.scss'

export const Modal: React.FC<IModalProps> = ({
  active,
  setActive,
  title,
  children
}) => {
  return (
    <div
      className={active ? `${classes.root} ${classes.active}` : classes.root}
      onClick={() => setActive(false)}
    >
      <div className={classes.window} onClick={e => e.stopPropagation()}>
        {/* Title for modal window */}
        <div className={classes.title}>{title}</div>

        {/* Content into modal window */}
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  )
}
