import "@pixi/mixin-get-global-position";
import { IRendererOptions as _IRendererOptions, Renderer as _Renderer, Texture as _Texture, Ticker as _Ticker } from "@pixi/core";
import { Sprite as _Sprite } from "@pixi/sprite";
export declare class Sprite extends _Sprite {
  constructor(texture?: _Texture);
  get globalX(): number;
  get globalY(): number;
  get centerX(): number;
  get centerY(): number;
  get halfWidth(): number;
  get halfHeight(): number;
}
export declare class Body {
  x: number;
  y: number;
  constructor(x?: number, y?: number);
}
export declare class Entity {
  body: Body;
  sprite: Sprite;
  constructor(body: Body, sprite: Sprite);
}
export declare class Scene {
  renderer: _Renderer;
  ticker: _Ticker;
  constructor(rendererOptions: _IRendererOptions);
}
/**
 * Global Lumi object
 * @public
 */
declare const Lumi: {
  Sprite: typeof Sprite;
  Body: typeof Body;
  Entity: typeof Entity;
  Scene: typeof Scene;
};
export default Lumi;
// # sourceMappingURL=index.d.ts.map
