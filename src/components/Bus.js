import React from 'react';

const Bus = ({ bus, time }) => {
  let secondsToArrival = 0;

  if (time < bus.realtimeArrival) {
    secondsToArrival = bus.realtimeArrival - time;
  } else {
    // bus arriving after midnight (next day), current time is before
    secondsToArrival = bus.realtimeArrival + bus.serviceDay - Math.floor(Date.now() / 1000);
  }

  let minutesToArrival = 0;
  if (secondsToArrival > 59) {
    minutesToArrival = Math.floor(secondsToArrival / 60);
  }

  return (
    <div> {minutesToArrival} minutes {secondsToArrival - minutesToArrival * 60} seconds </div> 
  )
  }

  export default Bus;
