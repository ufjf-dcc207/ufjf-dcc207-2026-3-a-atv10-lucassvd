export type BallColor =
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "purple";

export type Tube = {
  id: number;
  balls: BallColor[];
};

export type GameState = {
  tubes: Tube[];
  selectedTube: number | null;
  moves: number;
  hasWon: boolean;
};