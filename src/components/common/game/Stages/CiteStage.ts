import "phaser";
import { BaseScene } from "./BaseScene";
export class CityScene extends BaseScene {
  platforms: Phaser.Physics.Arcade.StaticGroup;
  map: Phaser.Tilemaps.Tilemap;
  constructor() {
    super("CityScene");
  }
  preload(): void {}
  create(): void {
    console.log("CityScene created");

    this.map = this.make.tilemap({ key: "tilemap-data" });
    const tiles = this.map.addTilesetImage("tilemap");
    const layerGround = this.map.createLayer("Ground", tiles!, 0, 0);
    const layerRoad = this.map.createLayer("Road", tiles!, 0, 0);
    const layerBuildings = this.map.createLayer("Buildings", tiles!, 0, 0);
    const layerCarsParking = this.map.createLayer("Cars-parking", tiles!, 0, 0);
    const layerCars = this.map.createLayer("Cars", tiles!, 0, 0);
    const layerTrees = this.map.createLayer("Trees", tiles!, 0, 0);
    layerGround?.setScale(2);
    layerRoad?.setScale(2);
    layerBuildings?.setScale(2);
    layerCarsParking?.setScale(2);
    layerCars?.setScale(2);
    layerTrees?.setScale(2);
  }
  init(): void {}
  update(): void {}
}
