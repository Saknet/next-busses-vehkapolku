import React from 'react';
import Bus from './Bus';

const Stop = ({ stop, time }) => {
  if (!stop.stoptimesWithoutPatterns) {
    stop.stoptimesWithoutPatterns = [];
  }

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
            <td><Bus bus = {b} time = {time}></Bus></td>
            <td>{stop.name} {stop.code}</td>
          </tr>
        </tbody>
        )}
      </table>
    </div>
    )
  }

  export default Stop;
