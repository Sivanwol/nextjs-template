import "phaser";

const RunGame = (parent: string, config: Phaser.Types.Core.GameConfig) =>
  new Phaser.Game({ ...config, parent });
export default RunGame;
