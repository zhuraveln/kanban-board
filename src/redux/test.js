const state = [
  {
    title: 'task 1'
  },
  {
    title: 'task 2'
  },
  {
    title: 'task 3'
  },
  {
    title: 'task 4'
  }
]

const immutableSwap = (items, firstIndex, secondIndex) => {
  const result = [...items];
  [result[firstIndex], result[secondIndex]] = [result[secondIndex], result[firstIndex]];
  return result;
}

const swapped = immutableSwap(state, 0, 3);

console.log("Swapped:", swapped);
console.log("Original:", state);

tasks: [
  ...column.tasks.map((task, index) => {
    if (index === destination.index) {
      return column.tasks[source.index]
    } else if (index === source.index) {
      return column.tasks[destination.index]
    } else {
      return task
    }
  })
]