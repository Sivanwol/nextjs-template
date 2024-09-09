"use client";
import { useRef } from "react";
import { IRefPhaserGame, PhaserGame } from "./PhaserGame";
import { fetchConfig } from "./configs";

const GameWrapper = ({
  config,
  startScene,
}: {
  config: string;
  startScene?: string;
}) => {
  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef<IRefPhaserGame | null>(null);
  // Event emitted from the PhaserGame component
  const currentScene = (scene: Phaser.Scene) => {};
  const configObj = fetchConfig(config);
  if (!configObj) {
    throw new Error(`No config found for ${config}`);
  }
  return (
    <div id="wrapper">
      <PhaserGame
        ref={phaserRef}
        config={configObj!}
        startScene={startScene}
        currentActiveScene={currentScene}
      />
    </div>
  );
};
export default GameWrapper;
