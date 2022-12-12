import React from 'react'

import classes from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h1>kanban board</h1>
      </div>
    </div>
  )
}
