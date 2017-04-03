import * as types from '../constants/actionTypes'

const initialState = {
  isFetching: false,
  items: []
}

export default function tvShows(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_USER_TV_SHOWS:
      return Object.assign({}, state, {
        isFetching: true
      })
      case types.RECEIVE_USER_TV_SHOWS:
        return Object.assign({}, state, {
          isFetching: false,
          items: [...action.shows]
        })
    default:
      return state
  }
}

