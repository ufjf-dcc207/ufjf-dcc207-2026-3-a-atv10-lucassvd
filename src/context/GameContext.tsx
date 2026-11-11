import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";

import {
  gameReducer,
  initialState,
} from "../reducer/gameReducer";

import type { GameState } from "../types/game";

type GameContextType = {
  state: GameState;
  selectTube: (tubeId: number) => void;
  resetGame: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

type GameProviderProps = {
  children: ReactNode;
};

export function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  function selectTube(tubeId: number) {
    dispatch({ type: "SELECT_TUBE", tubeId });
  }

  function resetGame() {
    dispatch({ type: "RESET_GAME" });
  }

  return (
    <GameContext.Provider value={{ state, selectTube, resetGame }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGame deve ser usado dentro de GameProvider");
  }

  return context;
}