import { useState, useRef } from "react";
import { IRefPhaserGame, PhaserGame } from "./PhaserGame";

const GameWrapper = ({ config }: { config: Phaser.Types.Core.GameConfig }) => {
  // The sprite can only be moved in the MainMenu Scene
  const [canMoveSprite, setCanMoveSprite] = useState(true);
  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef<IRefPhaserGame | null>(null);
  // Event emitted from the PhaserGame component
  const currentScene = (scene: Phaser.Scene) => {};

  return (
    <div id="wrapper">
      <PhaserGame
        ref={phaserRef}
        config={config}
        currentActiveScene={currentScene}
      />
    </div>
  );
};
export default GameWrapper;
