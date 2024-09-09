import "phaser";
import { CityScene } from "../Stages/CiteStage";
import { BootScene } from "../Stages/BootScene";
const SkillMapConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
    min: {
      width: 270,
      height: 480,
    },
  },
  scene: [BootScene, CityScene],
  input: {
    keyboard: true,
  },
  dom: {
    createContainer: true,
  },
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0, x: 0 },
    },
  },
};
export default SkillMapConfig;
