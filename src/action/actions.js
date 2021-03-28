export const SET_GAMES = "SET_GAMES";
export const ADD_GAME = "ADD_GAME";
export const GAME_FETCHED = "GAME_FETCHED";

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

export const setGames = (games) => {
  return {
    type: SET_GAMES,
    games,
  };
};

export const addGame = (game) => {
  return {
    type: ADD_GAME,
    game,
  };
};

export const gameFetch = (game) => {
  return {
    type: GAME_FETCHED,
    game,
  };
};

//post request
export const saveGame = (data) => (dispatch) => {
  return fetch("/api/games", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleResponse)
    .then((data) => dispatch(addGame(data.game)));
};

//get request
export const fetchGames = () => (dispatch) => {
  return fetch("/api/games")
    .then((res) => res.json())
    .then((data) => dispatch(setGames(data.games)));
};

export const fetchGame = (id) => (dispatch) => {
  return fetch(`/api/games/${id}`)
    .then((res) => res.json())
    .then((data) => dispatch(gameFetch(data.game)));
};
