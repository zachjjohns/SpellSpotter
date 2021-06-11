export const getSpells = async () => {
  const response = await fetch('https://www.dnd5eapi.co/api/spells');
  const data = errorHandler(response);
  return data
}

export const getSingleSpell = async (spellName) => {
  const response = await fetch(`https://www.dnd5eapi.co/api/spells/${spellName}`);
  const data = await errorHandler(response);
  return data
}

export const errorHandler = (response) => {
  if (!response.ok) {
    throw new Error(response.message)
  } else {
    return response.json()
  }
}