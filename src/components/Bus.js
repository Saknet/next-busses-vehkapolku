import React from 'react';

const currentTime = parseInt(new Date().getSeconds(), 10) + parseInt(new Date().getHours(), 10) * 60 * 60 + parseInt(new Date().getMinutes(), 10)  * 60;

const Bus = ({ bus }) => {
  let secondsToArrival = 0;

  if (currentTime < bus.realtimeArrival) {
    secondsToArrival = bus.realtimeArrival - currentTime;
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
