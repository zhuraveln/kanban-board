import dayjs from 'dayjs'
import { PriorityTypes } from '../components/Forms/FormCreateBoard/types'

export const testBoard = [
  {
    id: 'lb57o0r4dnc2apyt1qe',
    name: 'test',
    tasksCounter: 3,
    columns: [
      {
        id: 'lbasdgvaw7h8ostgupotncl',
        name: 'Queue',
        tasks: [
          {
            id: 'lb57w721tstgupfdbfotncl',
            number: 1,
            title: 'task in Queue',
            description: 'description for task 1',
            dateCreation: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm'),
            targetDate: dayjs('12.05.2022 18:00', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.LOW
          }
        ]
      },
      {
        id: 'lasvasv7w723tbostgupotncl',
        name: 'Development',
        tasks: [
          {
            id: 'lb57w7h8ostgsdvsdbotncl',
            title: 'task in Development',
            number: 2,
            description: 'description for task 1',
            dateCreation: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm'),
            targetDate: dayjs('12.05.2022 18:00', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.LOW
          }
        ]
      },
      {
        id: 'lb57w7h8ostgupasvvaasvqwg1cl',
        name: 'Done',
        tasks: [
          {
            id: 'lb571ngf8ostgupotncl',
            number: 3,
            title: 'task in Done',
            description: 'description for task 1',
            dateCreation: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm'),
            targetDate: dayjs('12.05.2022 18:00', 'DD.MM.YYYY H:mm'),
            priority: PriorityTypes.LOW
          }
        ]
      }
    ]
  }
]
