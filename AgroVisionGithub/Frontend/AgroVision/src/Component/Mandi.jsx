import React, { useState, useEffect } from 'react';
import mandirice from './ricemandi';

function Mandi() {
  const [filteredMandi, setFilteredMandi] = useState([]);
  const district = localStorage.getItem("Address");

  useEffect(() => {
    if (district) {
      const filteredData = mandirice.filter(mandi => mandi["Market Name"] === district);
      setFilteredMandi(filteredData);
    }
  }, [district]);

  return (
    <div>
      <h1>Mandi in {district}</h1>
      {filteredMandi.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>State Name</th>
              <th>District Name</th>
              <th>Market Name</th>
              <th>Variety</th>
              <th>Arrivals (Tonnes)</th>
              <th>Min Price (Rs./Quintal)</th>
              <th>Max Price (Rs./Quintal)</th>
              <th>Modal Price (Rs./Quintal)</th>
              <th>Reported Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredMandi.map((mandi, index) => (
              <tr key={index}>
                <td>{mandi["State Name"]}</td>
                <td>{mandi["District Name"]}</td>
                <td>{mandi["Market Name"]}</td>
                <td>{mandi["Variety"]}</td>
                <td>{mandi["Arrivals (Tonnes)"]}</td>
                <td>{mandi["Min Price (Rs./Quintal)"]}</td>
                <td>{mandi["Max Price (Rs./Quintal)"]}</td>
                <td>{mandi["Modal Price (Rs./Quintal)"]}</td>
                <td>{mandi["Reported Date"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No mandi data found for this district.</p>
      )}
    </div>
  );
}

export default Mandi;
