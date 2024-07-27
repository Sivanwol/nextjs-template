"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import RunGame from "./Game";
import { EventBus } from "./EventBus";

export interface IRefPhaserGame {
  game: Phaser.Game | null;
  scene: Phaser.Scene | null;
}

const isSSR = () => typeof window === "undefined";
interface IProps {
  currentActiveScene?: (scene_instance: Phaser.Scene) => void;
  config: Phaser.Types.Core.GameConfig;
  startScene?: string;
}
export const PhaserGame = forwardRef<IRefPhaserGame, IProps>(
  function PhaserGame({ currentActiveScene, config, startScene }, ref) {
    const game = useRef<Phaser.Game | null>(null!);
    const refElem = "game-container";
    useLayoutEffect(() => {
      // if (!isSSR()) return;
      if (game.current === null) {
        game.current = RunGame(refElem, config);
        if (startScene) {
          game.current.scene.start(startScene);
        }
        if (typeof ref === "function") {
          ref({ game: game.current, scene: null });
        } else if (ref) {
          ref.current = { game: game.current, scene: null };
        }
      }
      return () => {
        if (game.current) {
          console.log("destroying game!");
          game.current.destroy(true);
          if (game.current !== null) {
            game.current = null;
          }
        }
      };
    }, [config, ref]);
    useEffect(() => {
      // if (!isSSR()) return;
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
    }, [currentActiveScene, config, ref]);

    return <div id={refElem}></div>;
  },
);
