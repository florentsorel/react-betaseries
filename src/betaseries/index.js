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

export function getTvShow(id) {
  return client.get(
    'shows/display', {
      params: {
        id: id
      }
    }
  )
}