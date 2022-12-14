import dayjs, { Dayjs } from 'dayjs'

/** Formatting date by dayjs */
export const dateFormat = (date: Dayjs | null | undefined) => {
  if (date) {
    return dayjs(date).format('D.MM.YYYY (H:mm)')
  }
}

/** Formatting date by dayjs for date-time-picker */
export const dateFormatPicker = (date: Dayjs | null | undefined) => {
  if (date) {
    return dayjs(date).format('YYYY-MM-DDThh:mm')
  }
}
