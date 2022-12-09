import dayjs, { Dayjs } from 'dayjs'

/** Formatting date by dayjs */
export const dateFormat = (date: Dayjs) => {
  return dayjs(date).format('DD.MM.YYYY H:mm')
}
