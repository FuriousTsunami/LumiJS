import * as PIXI from "./pixiConfig";
declare class Sprite extends PIXI.Sprite {
    constructor(texture?: PIXI.Texture);
    get globalX(): number;
    get globalY(): number;
    get centerX(): number;
    get centerY(): number;
    get halfWidth(): number;
    get halfHeight(): number;
}
declare class Body {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
}
declare class Entity {
    body: Body;
    sprite: Sprite;
    constructor(body: Body, sprite: Sprite);
}
declare class Scene {
    renderer: PIXI.Renderer;
    ticker: PIXI.Ticker;
    constructor(rendererOptions: PIXI.IRenderOptions);
}
export declare const Lumi: {
    Sprite: typeof Sprite;
    Body: typeof Body;
    Entity: typeof Entity;
    Scene: typeof Scene;
};
export {};
//# sourceMappingURL=index.d.ts.map