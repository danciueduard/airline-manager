import { createContext } from "react";

const GameContext = createContext();

function GameProvider({ children }) {
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
}

export default GameProvider;
