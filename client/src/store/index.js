import { createStore } from 'redux'

const INITIAL_STATE = {
  isLoading: false
}

function reducer (state = INITIAL_STATE, action) {
  // console.log(action)
  if (action.type === 'isLoading') {
    state.isLoading = true
  } else {
    state.isLoading = false
  }
  // console.log(state)
  return state
}

export default createStore(reducer)
