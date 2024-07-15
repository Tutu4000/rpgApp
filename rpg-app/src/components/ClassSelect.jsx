import { useState, useEffect } from "react";
import { fetchClasses } from "../../../dndApi";

const ClassSelect = ({ selectedClass, onClassChange }) => {
  const [classesList, setClassesList] = useState([]);

  useEffect(() => {
    async function fetchLocalClasses() {
      const classes = await fetchClasses();
      setClassesList(classes.result); // Adjust based on your API's response structure
    }

    fetchLocalClasses();
  }, []);

  return (
    <select
      id="class"
      name="class"
      required
      value={selectedClass}
      onChange={onClassChange}
    >
      {classesList.map((classItem) => (
        <option key={classItem.id} value={classItem.name}>
          {classItem.name}
        </option>
      ))}
    </select>
  );
};

export default ClassSelect;
