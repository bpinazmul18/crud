import { ADD_GAME, SET_GAMES, GAME_FETCHED } from "../action/actions";

const gamesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GAME:
      return [...state, action.game];

    case GAME_FETCHED:
      const index = state.findIndex((item) => item._id === action.game._id);

      if (index > -1) {
        return state.map((item) => {
          if (item._id === action.game._id) return action.game;
          return item;
        });
      } else {
        return [...state, action.game];
      }

    case SET_GAMES:
      return action.games;

    default:
      return state;
  }
};

export default gamesReducer;
