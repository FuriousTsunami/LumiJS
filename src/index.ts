import * as PIXI from "./pixiConfig";
// import Physics from "./physics";

class Sprite extends PIXI.Sprite {
	constructor(texture?: PIXI.Texture) {
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

class Body {
	x: number;
	y: number;
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
}

class Entity {
	body: Body;
	sprite: Sprite;
	constructor(body: Body, sprite: Sprite) {
		this.body = body;
		this.sprite = sprite;
	}
}

class Scene {
	renderer: PIXI.Renderer;
	ticker: PIXI.Ticker;
	// physics: Physics;
	constructor(rendererOptions: PIXI.IRenderOptions) {
		this.renderer = new PIXI.Renderer(rendererOptions);
		this.ticker = new PIXI.Ticker();
		this.ticker.stop();
		// this.physics = new Physics();
	}
}

export const Lumi = {
	Sprite,
	Body,
	Entity,
	Scene,
};
