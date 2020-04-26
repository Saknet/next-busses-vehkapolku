import React, {useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import Bus from './components/Bus'
import STOP_V6104_QUERY from './queries'

function App() {
  const currentTime = parseInt(new Date().getSeconds(), 10) + parseInt(new Date().getHours(), 10) * 60 * 60 + parseInt(new Date().getMinutes(), 10)  * 60;
  const [time, setTime] = useState(new Date());

  const { loading, error, data, refetch, networkStatus  } = useQuery(STOP_V6104_QUERY, { 
    variables: { limit: 1 }
  });

  function updateTime() {
    refetch();
    setTime(new Date());
  }
 
  if (networkStatus === 4) return 'Refetching!';
  if (loading) return 'Loading...'
  if (error) return `Error! ${error}`;

  const stop = data.stops[0];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Bus number</td>
            <td>Towards</td>
            <td>Arriving in</td>
            <td>To stop</td>
          </tr>
        </thead>
        {stop.stoptimesWithoutPatterns.map(b =>
        <tbody  key={b.headsign}>
          <tr>
            <td>{b.trip.route.shortName}</td>
            <td>{b.headsign}</td> 
            <td><Bus bus = {b} time = {currentTime}></Bus></td>
            <td>{stop.name} {stop.code}</td>
          </tr>
        </tbody>
        )}
      </table>
      <button onClick={() => updateTime()}>Update!</button>
    </div>
  )
}

export default App;