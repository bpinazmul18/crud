export const SET_GAMES = "SET_GAMES";

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

//post request
export const saveGame = (data) => (dispatch) => {
  return fetch("/api/games", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleResponse);
};

//get request
export const fetchGames = () => (dispatch) => {
  return fetch("/api/games")
    .then((res) => res.json())
    .then((data) => dispatch(setGames(data.games)));
};
