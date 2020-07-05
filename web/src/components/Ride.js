import React, {useState} from 'react';
import './Ride.css';
import calculateFare from '../services/calculateFare';

const Ride = ({id, distance, startTime, duration}) => {
  const fare = calculateFare(distance, startTime, duration);
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    window.confirm(new Date(duration * 1000).toISOString().substr(11, 8) + ' - ' + startTime);
    setClicked(true);
  };
  return (
    <div className={distance > 2 ? 'Ride-box-red' : 'Ride-box'} onClick={onClick}>
      <div className="Ride-row">
                Ride ID: {id}
      </div>
      <div className="Ride-row">
                Fare: {fare}
      </div>
      <div className="Ride-row">
        { clicked ? 'Clicked': ' '}
      </div>
    </div>
  );
};

export default Ride;
