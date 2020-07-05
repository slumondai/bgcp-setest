import React, {useState, useEffect} from 'react';
import './App.css';
import Ride from './components/Ride';
// import { fetchRides } from './services/apiCall'

const App = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    window.fetch('http://localhost:8081/rides')
        .then((response) => response.json())
        .then((data) => setRides(data))
        .catch(console.log);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        WELCOME TO THIS FAKE TAXI APP !
      </header>
      <div className="App-body">
        { rides.map((ride, index) => <Ride key={index} {...ride}/>) }
      </div>
    </div>
  );
};

export default App;
