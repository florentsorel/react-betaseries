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
    case types.REQUEST_LAST_EPISODE_NOT_SEEN:
      return {...state, items: state.items.map((tvShow) => {
        if (action.payload.id !== tvShow.id) {
          return tvShow
        }
        return {
          ...tvShow,
          isFetching: true
        }
      })}
    case types.REQUEST_TV_SHOW:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.RECEIVE_TV_SHOW:
      return state.map(item => item.id === action.show.id ? action.show : item)
    default:
      return state
  }
}

