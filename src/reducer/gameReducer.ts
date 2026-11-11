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

type GameAction =
  | { type: "SELECT_TUBE"; tubeId: number }
  | { type: "RESET_GAME" };

const CAPACITY = 4;

function checkVictory(tubes: GameState["tubes"]): boolean {
  return tubes.every(
    (tube) =>
      tube.balls.length === 0 ||
      (tube.balls.length === CAPACITY &&
        tube.balls.every((ball) => ball === tube.balls[0]))
  );
}

export function gameReducer(
  state: GameState,
  action: GameAction
): GameState {
  switch (action.type) {
    case "SELECT_TUBE": {
      const clickedTube = state.tubes.find(
        (tube) => tube.id === action.tubeId
      );

      if (!clickedTube || state.hasWon) return state;

      if (state.selectedTube === null) {
        if (clickedTube.balls.length === 0) return state;

        return {
          ...state,
          selectedTube: action.tubeId,
        };
      }

      if (state.selectedTube === action.tubeId) {
        return {
          ...state,
          selectedTube: null,
        };
      }

      const source = state.tubes.find(
        (tube) => tube.id === state.selectedTube
      );

      if (!source || source.balls.length === 0) return state;

      const ball = source.balls[source.balls.length - 1];

      const canMove =
        clickedTube.balls.length < CAPACITY &&
        (clickedTube.balls.length === 0 ||
          clickedTube.balls[clickedTube.balls.length - 1] === ball);

      if (!canMove) return state;

      const newTubes = state.tubes.map((tube) => {
        if (tube.id === source.id) {
          return {
            ...tube,
            balls: tube.balls.slice(0, -1),
          };
        }

        if (tube.id === clickedTube.id) {
          return {
            ...tube,
            balls: [...tube.balls, ball],
          };
        }

        return tube;
      });

      return {
        ...state,
        tubes: newTubes,
        selectedTube: null,
        moves: state.moves + 1,
        hasWon: checkVictory(newTubes),
      };
    }

    case "RESET_GAME":
      return initialState;

    default:
      return state;
  }
}