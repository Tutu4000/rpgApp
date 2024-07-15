import React, { useState, useEffect } from 'react';
import { fetchRaces } from '../../dndApi'; 

function RaceInput({ value, onChange }) {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    async function setupClasses(){
        const fetchedClasses = await fetchRaces();
        const results = fetchedClasses.results;
        setRaces(results);
    }
    setupClasses();
  }, []);

  return (
    <>
      <label htmlFor="race">Race:</label>
      <input
        list="races"
        id="race"
        name="race"
        type='text'
        value={value}
        onChange={onChange}
        required
      />
      <datalist id="races">
        {races.map((cls) => (
          <option key={cls.name} value={cls.name} />
        ))}
      </datalist>
    </>
  );
}



export default RaceInput;