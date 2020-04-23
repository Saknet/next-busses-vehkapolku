import React from 'react';
import { gql, useQuery } from '@apollo/client'
import Stop from './components/Stop'

const STOPS = gql`
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

const App = () => {
  let result = useQuery(STOPS)

  if (result.loading) {
    return <div>loading...</div>
  }

  if (result.error) {
    return <div>something went wrong :(</div>
  }


  return (
    <Stop stop = {result.data.stops[0]}/>
  )
}

export default App;
