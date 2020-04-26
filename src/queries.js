import { gql } from 'apollo-boost';

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
        trip {
        route {
          shortName
        }
      }
      }
    }
  }
  `
export default STOP_V6104_QUERY;
