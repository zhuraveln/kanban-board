import dayjs, { Dayjs } from 'dayjs'

/** Calculate day and hours in work */
export const calcTimeInWork = (createdAt: Dayjs) => {
  const daysInWork = dayjs().diff(createdAt, 'day') // days in work
  const hoursInWork = dayjs().diff(createdAt, 'hour') // hours in work
  const timeInWork = `${daysInWork} d ${hoursInWork - daysInWork * 24} h` // days and hours in work

  return timeInWork
}
