import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Board, BoardsList, Modal, NavBar } from './components'

import classes from './styles/App.module.scss'

const App: React.FC = () => {
  return (
    <>
      {/* Navigation bar */}
      <NavBar />

      <div className={classes.container}>
        <Routes>
          {/* Boards List */}
          <Route path='/' element={<BoardsList />} />

          {/* Board */}
          <Route path='/board/:id' element={<Board />} />

          {/* Page Not Found */}
          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </div>

      {/* Modal window */}
      <Modal />
    </>
  )
}

export default App
