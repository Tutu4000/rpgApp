import { useState, useEffect } from "react";
import { newCharacter, getCharacters } from "../../dummy-character";

function useCharacterData() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const charactersData = localStorage.getItem("characterData");
    if (charactersData) {
      const initialCharacters = JSON.parse(charactersData);
      setCharacters(initialCharacters);
      setSelectedCharacter(initialCharacters[0] || null);
    }
  }, []);

  const selectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  const handleNewCharacter = () => {
    const id = newCharacter();
    const updatedCharacters = getCharacters();
    setCharacters(updatedCharacters);

    const newSelectedCharacter = updatedCharacters.find(
      (char) => char.id === id
    );
    setSelectedCharacter(newSelectedCharacter);
  };

  const onCharacterChange = (updatedCharacter) => {
    const updatedCharacters = characters.map((char) =>
      char.id === updatedCharacter.id ? updatedCharacter : char
    );
    setCharacters(updatedCharacters);
    localStorage.setItem("characterData", JSON.stringify(updatedCharacters));
  };

  const handleDeleteCharacter = (characterId) => {
    const updatedCharacters = characters.filter(
      (char) => char.id !== characterId
    );
    setCharacters(updatedCharacters);
    localStorage.setItem("characterData", JSON.stringify(updatedCharacters));
    if (selectedCharacter?.id === characterId) {
      setSelectedCharacter(updatedCharacters[0] || null);
    }
  };

  return {
    characters,
    setCharacters,
    selectedCharacter,
    setSelectedCharacter,
    selectCharacter,
    handleNewCharacter,
    onCharacterChange,
    handleDeleteCharacter,
  };
}

export default useCharacterData;
