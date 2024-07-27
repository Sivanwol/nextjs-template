import "phaser";
export abstract class BaseScene extends Phaser.Scene {
  public static SCENE_KEY: string;
  constructor(key: string) {
    super({
      key,
    });
    BaseScene.SCENE_KEY = key;
  }
  abstract preload(): void;
  abstract create(): void;
  abstract init(): void;
  abstract update(): void;
}
