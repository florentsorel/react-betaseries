import * as types from '../constants/actionTypes'
import * as betaseries from '../betaseries'

// Exécuté lorsque le composant UserTvShowsContainer est monté
export function fetchUserTvShows() {
  return dispatch => {
    dispatch(requestUserTvShows())

    return betaseries.getMemberInfo()
      .then(response => {
        dispatch(receiveUserTvShows(response.data.member.shows))
      })
  }
}

// Marque un épisode comme vu
export function onMarkAsSeen(tvShowId) {
  return dispatch => {
    dispatch(requestLastEpisodeNotSeen(tvShowId))

    return betaseries.getLastEpisodeUnseen(tvShowId)
      .then(response => response.data.shows[0].unseen[0].id)
      .then(betaseries.postEpisodeAsSeen)
      .then(() => betaseries.getTvShow(tvShowId))
      .then(show => dispatch(receiveTvShow(show.data.show)))
  }
}

// Sort une série des archive
export function onUnarchive(tvShowId) {
  return dispatch => {
    dispatch(requestRemoveTvShowFromArchive(tvShowId))

    return betaseries.deleteShowArchive(tvShowId)
      .then(response => dispatch(receiveTvShow(response.data.show)))
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
function receiveTvShow(show) {
  return {
    type: types.RECEIVE_TV_SHOW,
    payload: {
      show
    }
  }
}

// Permet de définir le début du chargement
function requestLastEpisodeNotSeen(tvShowId) {
  return {
    type: types.REQUEST_LAST_EPISODE_NOT_SEEN,
    payload: {
      id: tvShowId
    }
  }
}

function requestRemoveTvShowFromArchive(tvShowId) {
  return {
    type: types.REQUEST_REMOVE_TV_SHOW_FROM_ARCHIVE,
    payload: {
      id: tvShowId
    }
  }
}