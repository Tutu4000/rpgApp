const BASE_URL = "https://www.dnd5eapi.co";

export async function fetchClasses() {
  try {
    let res = await fetch(BASE_URL + "/api/classes");
    if (!res.ok) {
      throw new Error("Http error fetching classes!");
    }
    let classes = await res.json();
    return classes;
  } catch (error) {
    console.error("Fetch error: " + error.message);
  }
}

export async function fetchSpells(){
    try {
        let res = await fetch(BASE_URL + "/api/spells");
        if (!res.ok) {
          throw new Error("Http error fetching spells!");
        }
        let spells = await res.json();
        return spells;
      } catch (error) {
        console.error("Fetch error: " + error.message);
      }
}

export async function fetchSkills(){
    try {
        let res = await fetch(BASE_URL + "/api/skills");
        if (!res.ok) {
          throw new Error("Http error fetching skills!");
        }
        let skills = await res.json();
        return skills;
      } catch (error) {
        console.error("Fetch error: " + error.message);
      }
}

export async function fetchRaces(){
  try {
      let res = await fetch(BASE_URL + "/api/races");
      if (!res.ok) {
        throw new Error("Http error fetching races!");
      }
      let races = await res.json();
      return races;
    } catch (error) {
      console.error("Fetch error: " + error.message);
    }
}

