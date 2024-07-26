/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import RunGame from "./Game";
import { EventBus } from "./EventBus";

export interface IRefPhaserGame {
  game: Phaser.Game | null;
  scene: Phaser.Scene | null;
}

interface IProps {
  currentActiveScene?: (scene_instance: Phaser.Scene) => void;
  config: Phaser.Types.Core.GameConfig;
}
export const PhaserGame = forwardRef<IRefPhaserGame, IProps>(
  function PhaserGame({ currentActiveScene, config }, ref) {
    const game = useRef<Phaser.Game | null>(null!);
    const refElem = "game-container";
    const loadGame = async () => {
      if (typeof window !== "object") {
        return;
      }

      var gameObj = RunGame(refElem, config);
      game.current = gameObj;
      if (typeof ref === "function") {
        ref({ game: game.current, scene: null });
      } else if (ref) {
        ref.current = { game: game.current, scene: null };
      }
      game.current.scene.start("BootScene");
      return null;
    };
    useEffect(() => {
      loadGame().catch(console.error);
      EventBus.on("current-scene-ready", (scene_instance: Phaser.Scene) => {
        if (currentActiveScene && typeof currentActiveScene === "function") {
          currentActiveScene(scene_instance);
        }
        if (typeof ref === "function") {
          ref({ game: game.current, scene: scene_instance });
        } else if (ref) {
          ref.current = { game: game.current, scene: scene_instance };
        }
      });
      return () => {
        console.log("destroying game!");
        game.current?.destroy(true);
        EventBus.removeListener("current-scene-ready");
      };
    }, [loadGame, currentActiveScene, config, ref]);

    return <div id={refElem}></div>;
  },
);
