import * as PIXI from "./pixiConfig";
import Collision from "./collision";

class Scene {
  renderer: PIXI.Renderer;
  ticker: PIXI.Ticker;
  collision: Collision;
  constructor (rendererOptions: Object) {
    this.renderer = new PIXI.Renderer(rendererOptions);
    this.ticker = new PIXI.Ticker();
    this.ticker.stop();
    this.collision = new Collision(PIXI);
  }
}

export var Lumi = {
  Scene: Scene,
};
