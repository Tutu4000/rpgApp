import classes from "./CharacterSheet.module.css";
import { useState, useEffect } from "react";
import Attribute from "./Attribute";
import Skills from "./Skills";
import RaceInput from "./Race";
import ClassInput from "./Class";
export default function CharacterSheet({
  selectedCharacter,
  onCharacterChange,
}) {
  const [character, setCharacter] = useState(selectedCharacter);

  useEffect(() => {
    setCharacter(selectedCharacter);
  }, [selectedCharacter]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCharacter((prevCharacter) => {
      const updatedCharacter = {
        ...prevCharacter,
        [name]: value,
      };
      onCharacterChange(updatedCharacter);
      return updatedCharacter;
    });
  }

  function handleAttributeChange(attribute, value) {
    setCharacter((prevCharacter) => {
      const updatedCharacter = {
        ...prevCharacter,
        attributes: {
          ...prevCharacter.attributes,
          [attribute]: value,
        },
      };
      onCharacterChange(updatedCharacter);
      return updatedCharacter;
    });
  }

  function handleSkillChange(event) {
    const skillName = event.target.name;
    const isChecked = event.target.checked;
    console.log(skillName);
    console.log(isChecked);
    setCharacter((prevCharacter) => {
      let updatedSkills;
      if (isChecked) {
        updatedSkills = prevCharacter.skills.includes(skillName)
          ? [...prevCharacter.skills]
          : [...prevCharacter.skills, skillName];
      } else {
        updatedSkills = prevCharacter.skills.filter(
          (skill) => skill !== skillName
        );
      }
      const updatedCharacter = {
        ...prevCharacter,
        skills: updatedSkills,
      };
      onCharacterChange(updatedCharacter);
      return updatedCharacter;
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className={classes["character-sheet"]}>
      <form onSubmit={handleSubmit}>
        <div className={classes.row}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={character.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Player:</label>
          <input
            type="text"
            id="player"
            name="player"
            value={character.player}
            onChange={handleChange}
            required
          />

          <ClassInput value={character.class} onChange={handleChange} />

          <label htmlFor="level">Level:</label>
          <input
            type="number"
            id="level"
            name="level"
            value={character.level}
            onChange={handleChange}
            required
            min="1"
          />

          <RaceInput value={character.race} onChange={handleChange} />
        </div>
        <div className={classes.row}>
          <div className={classes.columns}>
            <div className={classes.attributes}>
              <h1> Attributes </h1>
              <Attribute
                label="Strength"
                value={character.attributes.strength}
                onChange={(e) =>
                  handleAttributeChange("strength", e.target.value)
                }
              />
              <Attribute
                label="Dexterity"
                value={character.attributes.dexterity}
                onChange={(e) =>
                  handleAttributeChange("dexterity", e.target.value)
                }
              />
              <Attribute
                label="Constitution"
                value={character.attributes.constitution}
                onChange={(e) =>
                  handleAttributeChange("constitution", e.target.value)
                }
              />
              <Attribute
                label="Intelligence"
                value={character.attributes.intelligence}
                onChange={(e) =>
                  handleAttributeChange("intelligence", e.target.value)
                }
              />
              <Attribute
                label="Wisdom"
                value={character.attributes.wisdom}
                onChange={(e) =>
                  handleAttributeChange("wisdom", e.target.value)
                }
              />
              <Attribute
                label="Charisma"
                value={character.attributes.charisma}
                onChange={(e) =>
                  handleAttributeChange("charisma", e.target.value)
                }
              />
            </div>
          </div>
          <Skills
            handleSkillChange={handleSkillChange}
            selectedSkills={character.skills}
          />
          <div className={classes.inventory}>
            <div className={classes["row-closer"]}>
              <Attribute
                label="Life"
                type="number"
                id="life"
                name="life"
                value={character.life}
                onChange={handleChange}
                required
              />
              <Attribute
                label="Armor Class"
                type="number"
                id="armorClass"
                name="armorClass"
                value={character.armorClass}
                onChange={handleChange}
                required
              />
            </div>

            <h2>Inventory</h2>
            <textarea
              style={{ height: "100%" }}
              type="text"
              name="inventory"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
