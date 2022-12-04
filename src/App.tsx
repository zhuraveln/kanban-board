import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar/NavBar'
import { BoardsList } from './components/BoardsList/BoardsList/BoardsList'
import { Board } from './components/Board/Board/Board'

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
    </>
  )
}

export default App
