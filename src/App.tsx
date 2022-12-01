import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar/NavBar'
import { ProjectsList } from './components/ProjectsList/ProjectsList'
import { ProjectBoard } from './components/ProjectBoard/ProjectBoard'

import classes from './styles/App.module.scss'

const App: React.FC = () => {
  return (
    <>
      {/* Navigation bar */}
      <NavBar />

      <div className={classes.container}>
        <Routes>
          {/* Projects List */}
          <Route path='/' element={<ProjectsList />} />

          {/* Project Board */}
          <Route path='/board/:id' element={<ProjectBoard />} />

          {/* Page Not Found */}
          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default App
