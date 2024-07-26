import { useEffect } from "react";
import RunGame from "./Game";

const GameWrapper = ({ config }: { config: Phaser.Types.Core.GameConfig }) => {
  const refElem = "game-container";

  const loadGame = async () => {
    if (typeof window !== "object") {
      return;
    }

    const game = RunGame(refElem, config);
    game.scene.start("BootScene");
    return;
  };
  useEffect(() => {
    loadGame().catch(console.error);
  }, [loadGame]);

  return <div id={refElem}></div>;
};
export default GameWrapper;
