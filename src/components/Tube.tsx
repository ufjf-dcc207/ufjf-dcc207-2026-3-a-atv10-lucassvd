import "./Tube.css";
import type { Tube as TubeType } from "../types/game";
import Ball from "./Ball";
import { useGame } from "../context/GameContext";

type TubeProps = {
  tube: TubeType;
};

function Tube({ tube }: TubeProps) {
  const { state, selectTube } = useGame();

  const isSelected = state.selectedTube === tube.id;

  return (
    <div
      className={`tube ${isSelected ? "selected" : ""}`}
      onClick={() => selectTube(tube.id)}
    >
      {tube.balls.map((ball, index) => (
        <Ball key={index} color={ball} />
      ))}
    </div>
  );
}

export default Tube;