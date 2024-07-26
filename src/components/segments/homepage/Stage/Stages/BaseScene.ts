import "phaser";
export abstract class BaseScene extends Phaser.Scene {
  constructor(key: string) {
    super({
      key,
    });
  }
  abstract preload(): void;
  abstract create(): void;
  abstract init(): void;
  abstract update(): void;
}
