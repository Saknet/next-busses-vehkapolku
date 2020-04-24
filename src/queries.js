import { gql } from '@apollo/client'

const STOP_V6104_QUERY = gql`
  query {
    stops(name: "V6104") {
      gtfsId
      name
      code
      stoptimesWithoutPatterns {
        realtimeArrival
        serviceDay
        headsign
      }
    }
  }
  `
export default STOP_V6104_QUERY;
