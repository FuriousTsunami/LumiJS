// import mixins first as they modify other pixi.js classes directly
import "@pixi/mixin-get-global-position";

// _ prefix is used for pixi.js imports to avoid naming conflicts
import {
  IRendererOptions as _IRendererOptions,
  Renderer as _Renderer,
  Texture as _Texture,
  Ticker as _Ticker,
} from "@pixi/core";

import {
  Sprite as _Sprite
} from "@pixi/sprite";

// physics class import
// import Physics from "./physics";

export class Sprite extends _Sprite {
  constructor(texture?: _Texture) {
    super(texture);
    this.texture = texture;
  }

  get globalX() {
    return this.getGlobalPosition().x;
  }

  get globalY() {
    return this.getGlobalPosition().y;
  }

  get centerX() {
    return this.x + (this.width / 2);
  }

  get centerY() {
    return this.y + (this.height / 2);
  }

  get halfWidth() {
    return this.width / 2;
  }

  get halfHeight() {
    return this.height / 2;
  }
}

export class Body {
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

export class Entity {
  body: Body;
  sprite: Sprite;
  constructor(body: Body, sprite: Sprite) {
    this.body = body;
    this.sprite = sprite;
  }
}

export class Scene {
  renderer: _Renderer;
  ticker: _Ticker;
  // physics: Physics;
  constructor(rendererOptions: _IRendererOptions) {
    this.renderer = new _Renderer(rendererOptions);
    this.ticker = new _Ticker();
    this.ticker.stop();
    // this.physics = new Physics();
  }
}

/**
 * Global Lumi object
 */
const Lumi = {
  Sprite,
  Body,
  Entity,
  Scene,
};

export default Lumi;
