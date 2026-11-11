import type { GameState } from "../types/game";

export const initialState: GameState = {
  tubes: [
    {
      id: 0,
      balls: ["red", "blue", "green", "yellow"],
    },
    {
      id: 1,
      balls: ["blue", "red", "yellow", "green"],
    },
    {
      id: 2,
      balls: ["green", "yellow", "red", "blue"],
    },
    {
      id: 3,
      balls: ["yellow", "green", "blue", "red"],
    },
    {
      id: 4,
      balls: [],
    },
    {
      id: 5,
      balls: [],
    },
  ],
  selectedTube: null,
  moves: 0,
  hasWon: false,
};