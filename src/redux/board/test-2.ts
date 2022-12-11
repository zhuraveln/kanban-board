export type Board1 = {
  id: string
  name: string
  columns: [
    {
      id: string
      name: string
      tasks: [
        {
          id: string
          name: string
          comments: [
            {
              id: string
              body: string
              parentId: string | null
            }
          ]
          subtasks: [
            {
              id: string
              name: string
            }
          ]
        }
      ]
    }
  ]
}

// export type Board = {
//   id: string
//   name: string
// }

// export type Column = {
//   id: string
//   name: string
//   boardId: string
// }

// export type Task = {
//   id: string
//   name: string
//   boardId: string
//   columnId: string
// }

// export type Subtask = {
//   id: string
//   name: string
//   taskId: string
// }

// export type Comment = {
//   id: string
//   body: string
//   taskId: string
//   parentId: string | null
// }

export type Board = {
  id: string
  name: string
}

export type Boards = {
  [key: string]: {
    name: string
    columns: [string[]]
  }
}

export type Column = {
  id: string
  name: string
  boardId: string
}

export type Task = {
  id: string
  name: string
  boardId: string
  columnId: string
}

export type Subtask = {
  id: string
  name: string
  taskId: string
}

export type Comment = {
  id: string
  body: string
  taskId: string
  parentId: string | null
}
