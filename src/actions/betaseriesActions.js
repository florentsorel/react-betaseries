import * as types from '../constants/actionTypes'
import * as betaseries from '../betaseries'

export function fetchUserTvShows() {
  return dispatch => {
    dispatch(requestUserTvShows())

    return betaseries.getMemberInfo()
      .then(response => {
        dispatch(receiveUserTvShows(response.data.member.shows))
      })
  }
}

export function fetchTvShow(id) {
  return dispatch => {
    dispatch(requestTvShow(id))
  }
}

// USER TV SHOWS
function requestUserTvShows() {
  return {
    type: types.REQUEST_USER_TV_SHOWS
  }
}

function receiveUserTvShows(shows) {
  return {
    type: types.RECEIVE_USER_TV_SHOWS,
    shows
  }
}

// TV SHOW
function requestTvShow() {
  return {
    type: types.REQUEST_TV_SHOW
  }
}

function receiveTvShow(show) {
  return {
    type: types.RECEIVE_TV_SHOW,
    show
  }
}