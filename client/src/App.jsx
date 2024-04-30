import React from 'react';
import './App.css';
import useTrips from './hooks/useTrips';
import Header from './components/Header';
import Tripcard from './components/Tripcard';


function App() {
  const { searchTerm, setSearchTerm, results, error } = useTrips();



  return (
    <div className="app">
      <Header title="เที่ยวไหนดี" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />      
      <div className="results-container">
        {results.map(trip => (
          <Tripcard key={trip.eid} trip={trip} handleTagClick={handleTagClick} />
        ))}
      </div>     
     
    </div>
  );
}

export default App;


