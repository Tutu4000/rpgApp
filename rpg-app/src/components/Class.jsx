import React, { useState, useEffect } from 'react';
import { fetchClasses } from '../../dndApi'; // Adjust the import path as necessary

function ClassInput({ value, onChange }) {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function setupClasses(){
        const fetchedClasses = await fetchClasses();
        const results = fetchedClasses.results;
        setClasses(results);
    }
    setupClasses();
  }, []);

  return (
    <>
      <label htmlFor="class">Class:</label>
      <input
        list="classes"
        id="class"
        name="class"
        type='text'
        value={value}
        onChange={onChange}
        required
      />
      <datalist id="classes">
        {classes.map((cls) => (
          <option key={cls.name} value={cls.name} />
        ))}
      </datalist>
    </>
  );
}

export default ClassInput;