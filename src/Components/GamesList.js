const GamesList = ({ games }) => {
  const emptyMessage = <p>There are no games collection yet.</p>;

  const gamesList = <p>games list</p>;
  return <div>{games.length === 0 ? emptyMessage : gamesList}</div>;
};

export default GamesList;
