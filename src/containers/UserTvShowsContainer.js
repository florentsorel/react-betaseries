import React, {
  Component
} from 'react'
import { connect } from 'react-redux'
import { fetchUserTvShows } from '../actions/betaseriesActions'
import TvShows from '../components/TvShows'


const getVisibleTvShows = (shows, filter) => {
  switch (filter) {
    case 'current':
      return shows.filter(show => !show.user.archived)
    case 'archived':
      return shows.filter(show => show.user.archived && show.user.status != 0 && show.user.status != 100)
    case 'not-started':
      return shows.filter(show => show.user.archived && show.user.status == 0)
    case 'finished':
      return shows.filter(show => show.user.archived && show.user.status == 100)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

class UserTvShowsContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUserTvShows())
  }

  render() {
    const { isFetching, tvShows, filter } = this.props
    return (
      <TvShows filter={filter} isFetching={isFetching} shows={tvShows} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.tvShows.isFetching,
  tvShows: getVisibleTvShows(state.tvShows.items, ownProps.filter),
})

export default connect(mapStateToProps)(UserTvShowsContainer)