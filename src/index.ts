class Scene {
  canvas: HTMLCanvasElement;
  options: {
    gravity?: Number
  };

  constructor (canvas: HTMLCanvasElement, options: Object = { gravity: 1 }) {
    this.canvas = canvas;
    this.options = options;
  }
}

class Body {
  width: Number;
  height: Number;
  restitution: Number;
  collision: {
    layer?: Number
  };
  mass: Number;

  constructor () {
  }
}

class Camera {
  x: Number;
  y: Number;

  options: {
    follow?: typeof Body,
    followBounds?: {
      x: Number,
      y: Number
    },
    active?: Boolean,
  };

  constructor(x: Number, y: Number, options: Object) {
    this.x = x;
    this.y = y;
    this.options = options;
  }
}

export var Lumi = {
  Scene: Scene,
  Camera: Camera
};