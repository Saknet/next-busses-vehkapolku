import React from 'react';
import Bus from './Bus'

const Stop = ({ stop }) => {
    return (
      <div>
        {stop.stoptimesWithoutPatterns.map(b =>
          <div key={b.headsign}>
            <Bus bus = {b} stopName = {stop.name} stopCode = {stop.code}/>
          </div>  
        )}
      </div>
    )
  }

  export default Stop;
