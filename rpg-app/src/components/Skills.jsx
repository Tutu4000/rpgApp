import { useEffect, useState } from "react";
import Skill from "./Skill";
import { fetchSkills } from "../../dndApi";
import classes from "./CharacterSheet.module.css";


export default function Skills({ handleSkillChange, selectedSkills }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function setupSkills() {
      const fetchedSkills = await fetchSkills();
      setSkills(fetchedSkills.results);

    }
    setupSkills();
  }, []);
  const selectedSkillsLowercase = selectedSkills.map(skill => skill.toLowerCase());

  return (
    <div className={classes.attributes}>
      <h1>Skills</h1>
      {skills.map((skill, index) =>
       (
        <Skill
          handleSkillChange={handleSkillChange}
          key={index}
          category={skill.name}
          isSelected={selectedSkillsLowercase.includes(skill.name.toLowerCase())}
        >
          {skill.name}
        </Skill>
      ))}
    </div>
  );
}
