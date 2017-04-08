import client from './client';

export function getMemberInfo(summary = 0, only = 'shows') {
  return client.get(
    'members/infos', {
      params: {
        summary: summary,
        only: only
      }
    }
  )
}

export function getLastEpisodeUnseen(tvShowId) {
  return client.get(
    'episodes/list', {
      params: {
        showId: tvShowId,
        limit: 1
      }
    }
  )
}

export function postEpisodeAsSeen(episodeId) {
  return client.post(
    'episodes/watched', {
      id: episodeId
    }
  )
}

export function getTvShow(id) {
  return client.get(
    'shows/display', {
      params: {
        id: id
      }
    }
  )
}