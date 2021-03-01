import React, { useState } from 'react';

const GameContext = React.createContext();

export function GameProvider({ children }) {
  const [gameData, setGameData] = useState({});

  const updateGameData = (newData) => setGameData({ ...gameData, ...newData });
  const resetGameData = () => setGameData({});

  return (
    <GameContext.Provider
      value={{
        gameData,
        updateGameData,
        resetGameData,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
