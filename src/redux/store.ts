import { createStore } from 'redux'

const initialState = {
  project: []
}
//@ts-ignore
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_NEW_PROJECT':
      return { ...state, project: [...state.project, action.payload] }

    default:
      return state
  }
}

//@ts-ignore
export const store = createStore(reducer)
