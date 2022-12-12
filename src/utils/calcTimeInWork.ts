import dayjs, { Dayjs } from 'dayjs'

/** Calculate day and hours in work */
export const calcTimeInWork = (createdAt: Dayjs) => {
  const daysInWork = dayjs().diff(createdAt, 'day') // days in work
  const hoursInWork = dayjs().diff(createdAt, 'hour') // hours in work
  const timeInWork = `${daysInWork} day ${hoursInWork - daysInWork * 24} hour` // days and hours in work

  return timeInWork
}
