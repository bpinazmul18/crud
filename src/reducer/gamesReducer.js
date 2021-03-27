import { ADD_GAME, SET_GAMES } from "../action/actions";

const gamesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GAME:
      return [...state, action.game];

    case SET_GAMES:
      return action.games;

    default:
      return state;
  }
};

export default gamesReducer;
