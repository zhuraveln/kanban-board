import React from 'react'
import { mainLogo } from '../../assets'

import classes from './NavBar.module.scss'

export const NavBar: React.FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src={mainLogo} alt='logo' />
        <h1>kanban board</h1>
      </div>
    </div>
  )
}
