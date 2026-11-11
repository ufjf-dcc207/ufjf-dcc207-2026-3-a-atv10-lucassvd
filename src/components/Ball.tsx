import "./Ball.css";
import type { BallColor } from "../types/game";

type BallProps = {
  color: BallColor;
};

function Ball({ color }: BallProps) {
  return <div className={`ball ${color}`} />;
}

export default Ball;