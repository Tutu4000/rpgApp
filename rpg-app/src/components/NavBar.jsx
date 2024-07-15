import React from "react";
import CharButton from "./CharButton";
import { exportCharacters, importCharacters } from "../../dummy-character";

const NavBar = ({
  characters,
  selectCharacter,
  selected,
  handleNewCharacter,
  handleDeleteCharacter,
}) => {
  const handleExportCharacters = () => {
    const encodedCharacters = exportCharacters();
    //Copy to clipboard
    navigator.clipboard.writeText(encodedCharacters).then(
      () => {
        alert("Characters exported and copied to clipboard.");
      },
      (err) => {
        console.error("Could not copy characters to clipboard: ", err);
      }
    );
  };

  const handleImportCharacters = () => {
    const encodedCharacters = prompt(
      "Paste the encoded characters string here:"
    );
    if (encodedCharacters) {
      importCharacters(encodedCharacters);
      alert("Characters imported successfully.");
      location.reload();
      
    }
  };

  return (
    <>
      <div className="characters">
        <h1>Characters</h1>
        <div className="char-buttons">
          {characters.map((character) => (
            <React.Fragment key={character.id}>
              <CharButton
                onClick={() => selectCharacter(character)}
                onDelete={() => handleDeleteCharacter(character.id)}
                isSelected={selected === character.id}
                player={character.player}
              >
                {character.name}
              </CharButton>
            </React.Fragment>
          ))}
          <button onClick={handleNewCharacter}> Add Character +</button>
          <button onClick={handleExportCharacters}>Export Characters</button>
          <button onClick={handleImportCharacters}>Import Characters</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
