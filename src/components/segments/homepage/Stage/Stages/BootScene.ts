import "phaser";
import { BaseScene } from "./BaseScene";
import packLoader from "./pack.json";
export class BootScene extends BaseScene {
  private loadingBar: Phaser.GameObjects.Graphics = this.add.graphics();
  private progressBar: Phaser.GameObjects.Graphics = this.add.graphics();

  constructor() {
    super("BootScene");
  }
  preload(): void {
    this.createLoadingbar();
    this.load.on(
      "progress",
      (value: number) => {
        this.progressBar.clear();
        this.progressBar.fillStyle(0xfff6d3, 1);
        this.progressBar.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 2 - 16,
          (this.cameras.main.width / 2) * value,
          16,
        );
      },
      this,
    );
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
    // @ts-ignore
    this.load.pack("preload", packLoader, "preload");
  }
  create(): void {}
  init(): void {}
  update(): void {
    this.scene.start("CityScene");
  }
  private createLoadingbar(): void {
    this.loadingBar = this.add.graphics();
    this.loadingBar.fillStyle(0x5dae47, 1);
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4,
      20,
    );
    this.progressBar = this.add.graphics();
  }
}
