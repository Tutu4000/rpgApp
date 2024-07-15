
export function getCharacters() {
  return JSON.parse(localStorage.getItem("characterData"));
}

export function updateCharacter(id, newCharacter) {
  const charactersData = localStorage.getItem("characterData");
  const characters = charactersData ? JSON.parse(charactersData) : [];
  const index = characters.findIndex((char) => char.id === id);
  if (index !== -1) {
    characters[index] = newCharacter;
    localStorage.setItem("characterData", JSON.stringify(characters));
  }
}

export function newCharacter() {
  const charactersData = localStorage.getItem("characterData");
  const characters = charactersData ? JSON.parse(charactersData) : [];
  const newChar = {
    id: Math.random(),
    name: "New Char",
    class: "Not set",
    level: 1,
    inventory: "", 
    skills: [],
    race: "Not set",
    player: "New Player",
    life: 1,
    armorClass: 1,
    attributes: {
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 1,
    },
  };
  const updatedCharacters = [...characters, newChar];
  localStorage.setItem("characterData", JSON.stringify(updatedCharacters));
  return newChar.id;
}

export function exportCharacters() {
  let storageObject = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    storageObject[key] = value;
  }
  const jsonString = JSON.stringify(storageObject);
  const base64Encoded = btoa(jsonString);
  return base64Encoded;
}

export function importCharacters(base64Encoded) {
  const jsonString = atob(base64Encoded);
  const characters = JSON.parse(jsonString);
  Object.keys(characters).forEach(key => {
    localStorage.setItem(key, characters[key]);
  });
}