import dayjs from 'dayjs'

export const testBoard = [
  {
    id: 'lb57o0r4dnc2apyt1qe',
    name: 'test',
    columns: [
      {
        id: 'lbasdgvaw7h8ostgupotncl',
        name: 'Queue',
        tasks: [
          {
            description: 'description for task 1',
            id: 'lb57w721tstgupfdbfotncl',
            title: 'task in Queue',
            dateCreation: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm'),
            targetDate: dayjs('12.05.2022 18:00', 'DD.MM.YYYY H:mm')
          }
        ]
      },
      {
        id: 'lasvasv7w723tbostgupotncl',
        name: 'Development',
        tasks: [
          {
            description: 'description for task 1',
            id: 'lb57w7h8ostgsdvsdbotncl',
            title: 'task in Development',
            dateCreation: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm'),
            targetDate: dayjs('12.05.2022 18:00', 'DD.MM.YYYY H:mm')
          }
        ]
      },
      {
        id: 'lb57w7h8ostgupasvvaasvqwg1cl',
        name: 'Done',
        tasks: [
          {
            description: 'description for task 1',
            id: 'lb571ngf8ostgupotncl',
            title: 'task in Done',
            dateCreation: dayjs('12.01.2022 18:00', 'DD.MM.YYYY H:mm'),
            targetDate: dayjs('12.05.2022 18:00', 'DD.MM.YYYY H:mm')
          }
        ]
      }
    ]
  }
]