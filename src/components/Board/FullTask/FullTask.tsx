import dayjs from 'dayjs'
import React from 'react'
import { useAppSelector } from '../../../hooks'
import { currentTaskSelector } from '../../../redux/board/selectors'

import classes from './FullTask.module.scss'

export const FullTask: React.FC = () => {
  // Getting current Task from Redux state
  const task = useAppSelector(currentTaskSelector())

  // Calculation days and hours in work
  const daysInWork = dayjs().diff(task?.dateCreation, 'day')
  const hoursInWork = dayjs().diff(task?.dateCreation, 'hour')
  const timeInWork = `${daysInWork} d ${hoursInWork - daysInWork * 24} h`
  return (
    <>
      <div className={classes.root}></div>
      <div className={classes.decription}>{task?.description}</div>
      <div>
        Date Creation: {dayjs(task?.dateCreation).format('DD.MM.YYYY H:mm')}
      </div>
      <div>
        Target Date: {dayjs(task?.targetDate).format('DD.MM.YYYY H:mm')}
      </div>
      <div>Day in work: {timeInWork}</div>
    </>
  )
}
