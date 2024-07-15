import NavBar from "./components/NavBar";
import CharacterSheet from "./components/CharacterSheet";
import useCharacterData from "./components/useCharacter";
function App() {
  const {
    characters,
    selectedCharacter,
    selectCharacter,
    handleNewCharacter,
    onCharacterChange,
    handleDeleteCharacter,
  } = useCharacterData();

  return (
    <div style={{ display: "flex" }}>
      {characters !== null && characters.length > 0 ? (
        <>
          <NavBar
            selected={selectedCharacter ? selectedCharacter.id : null}
            selectCharacter={selectCharacter}
            handleNewCharacter={handleNewCharacter}
            characters={characters}
            handleDeleteCharacter={handleDeleteCharacter}
          />
          <CharacterSheet
            selectedCharacter={selectedCharacter}
            onCharacterChange={onCharacterChange}
          />
        </>
      ) : (
        <button className="start-button" onClick={handleNewCharacter}>
          Start App
        </button>
      )}
    </div>
  );
}

export default App;
