import React from 'react';
import { useQuery } from '@apollo/client'
import Stop from './components/Stop'
import STOP_V6104_QUERY from './queries'

function App() {
  const { loading, error, data } = useQuery(STOP_V6104_QUERY, { variables: { limit: 1 } })
 
  if (loading) return 'Loading...'
  if (error) return 'Something went wrong :('

  return (
    <Stop stop = {data.stops[0]}/>
  )
}

export default App;
