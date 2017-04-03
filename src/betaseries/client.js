import axios from 'axios'
import * as config from '../constants/config'
import * as betaseries from '../constants/betaseries'

export default axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'X-BetaSeries-Key': betaseries.API_KEY
  },
  params: {
    access_token: betaseries.ACCESS_TOKEN
  }
})