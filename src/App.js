import React, {useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import Stop from './components/Stop'
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

  return (
    <div>
      <Stop stop = {data.stops[0]} time = {currentTime}/>
      <button onClick={() => updateTime()}>Update!</button>
    </div>
  ) 
  
}

export default App;