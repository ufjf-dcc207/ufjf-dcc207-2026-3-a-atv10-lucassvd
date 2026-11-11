import "./Game.css";
import { useGame } from "../context/GameContext";
import Tube from "./Tube";

function Game() {
  const { state, resetGame } = useGame();

  return (
    <main className="game">
      <h1>Magic Sort</h1>

      <p>Movimentos: {state.moves}</p>

      <section className="tubes">
        {state.tubes.map((tube) => (
          <Tube key={tube.id} tube={tube} />
        ))}
      </section>

      {state.hasWon && <h2>Parabéns! Você venceu!</h2>}

      <button onClick={resetGame}>Reiniciar</button>
    </main>
  );
}

export default Game;