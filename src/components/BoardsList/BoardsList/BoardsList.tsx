import React from 'react'
import { useSelector } from 'react-redux'
import { boardsSelector } from '../../../redux/selectors'
import { BoardCard } from '../BoardCard/BoardCard'
import { FormCreateBoard } from '../../Forms/FormCreateBoard/FormCreateBoard'
import { Modal } from '../../Modal/Modal'
import { Button } from '../../UI/Button/Button'

import classes from './BoardsList.module.scss'

export const BoardsList: React.FC = () => {
  // State for Modal window
  const [modalActive, setModalActive] = React.useState(false)

  // Getting all boards from Redux state
  const { boards } = useSelector(boardsSelector)

  return (
    <div className={classes.root}>
      {/* Create board area */}
      <div className={classes.createArea}>
        <Button onClick={() => setModalActive(true)}>Create board +</Button>
      </div>

      {/* Board list */}
      <div className={classes.boardList}>
        {boards.map((board, index) => (
          <BoardCard {...board} key={board.id} boardIndex={index} />
        ))}
      </div>

      {/* Modal window for create new Board */}
      <Modal
        title={'Create Board'}
        active={modalActive}
        setActive={setModalActive}
      >
        <FormCreateBoard setModalActive={setModalActive} />
      </Modal>
    </div>
  )
}
