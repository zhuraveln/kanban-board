import React from 'react'

import { NavBar } from './components/NavBar/NavBar'
import { ProjectList } from './components/ProjectList/ProjectList'

import classes from './styles/App.module.scss'

function App() {
  return (
    <>
      {/* Navigation bar */}
      <NavBar />
      <div className={classes.container}>
        {/* Project List */}
        <ProjectList />
      </div>
    </>
  )
}

export default App
