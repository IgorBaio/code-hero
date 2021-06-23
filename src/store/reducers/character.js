import { CHARACTER_NAME, CHARACTER_POPULATE } from "../actions/types";
import DataCharacters from "../../Data";
const INITIAL_STATE = {
  character: "",
  characters: DataCharacters,
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTER_NAME:
      state.character = action.payload;
      return state;
    case CHARACTER_POPULATE:
      state.characters = action.payload;
      return state;
    default:
      return state;
  }
};

export default characterReducer;
