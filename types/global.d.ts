import { IRendererOptions } from "@pixi/core";
import { Renderer } from "@pixi/core";
import { Sprite as Sprite_2 } from "@pixi/sprite";
import { Texture } from "@pixi/core";
import { Ticker } from "@pixi/core";

declare class Body_2 {
  x: number;
  y: number;
  constructor(x?: number, y?: number);
}
export { Body_2 as Body };

export declare class Entity {
  body: Body_2;
  sprite: Sprite;
  constructor(body: Body_2, sprite: Sprite);
}

/**
 * Global Lumi object
 * @public
 */
declare const Lumi: {
  Sprite: typeof Sprite;
  Body: typeof Body_2;
  Entity: typeof Entity;
  Scene: typeof Scene;
};
export default Lumi;

export declare class Scene {
  renderer: Renderer;
  ticker: Ticker;
  constructor(rendererOptions: IRendererOptions);
}

export declare class Sprite extends Sprite_2 {
  constructor(texture?: Texture);
  get globalX(): number;
  get globalY(): number;
  get centerX(): number;
  get centerY(): number;
  get halfWidth(): number;
  get halfHeight(): number;
}

export { };
