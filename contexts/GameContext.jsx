import React, { useState } from 'react';

const GameContext = React.createContext();

export function GameProvider({ children }) {
  const [formData, setFormData] = useState({});

  const updateFormData = (newData) => setFormData({ ...formData, ...newData });
  const resetFormData = () => setFormData({});

  return (
    <GameContext.Provider
      value={{
        formData,
        updateFormData,
        resetFormData,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContext;
