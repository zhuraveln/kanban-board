import { RootState } from '../redux/store'

/** Load from Local Storage by key  */
export function loadFromLocalStorage(key: string) {
  try {
    const serializedState = localStorage.getItem(key)

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (err) {
    console.log(err)
  }
}

/** Save to Local Storage by key */
export function saveToLocalStorage(state: RootState, key: string) {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem(key, serializedState)
  } catch (err) {
    console.log(err)
  }
}
