import React from 'react';
import Bus from './Bus';

const Stop = ({ stop }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Bus towards</td>
            <td>Arriving in</td>
            <td>To stop</td>
          </tr>
        </thead>
        {stop.stoptimesWithoutPatterns.map(b =>
        <tbody  key={b.headsign}>
          <tr>
            <td>{b.headsign}</td> 
            <td><Bus bus = {b}></Bus></td>
            <td>{stop.name} {stop.code}</td>
          </tr>
        </tbody>
        )}
      </table>
    </div>
    )
  }

  export default Stop;
