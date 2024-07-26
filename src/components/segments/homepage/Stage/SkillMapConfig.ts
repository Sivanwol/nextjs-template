import "phaser";
import { CityScene } from "./Stages/CiteStage";
import { BootScene } from "./Stages/BootScene";

export function createGame(config: Phaser.Types.Core.GameConfig) {
  const game = new Phaser.Game(config);
}

export const SkillMapConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
  },
  scene: [BootScene, CityScene],
  input: {
    keyboard: true,
  },
  dom: {
    createContainer: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0, x: 0 },
    },
  },
};
