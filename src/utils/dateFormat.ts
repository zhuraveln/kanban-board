import dayjs, { Dayjs } from 'dayjs'

/** Formatting date by dayjs */
export const dateFormat = (date: Dayjs | null | undefined) => {
  if (date) {
    return dayjs(date).format('D.MM.YYYY (H:mm)')
  }
}
