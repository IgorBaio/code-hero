import { CHARACTER_NAME, CHARACTER_POPULATE } from "./types";

export const characterName = (name) => {
  return {
    type: CHARACTER_NAME,
    payload: name,
  };
};
export const characterPopulate = (characters) => {
  console.log('characters', characters)
  return {
    type: CHARACTER_POPULATE,
    payload: characters,
  };
};
