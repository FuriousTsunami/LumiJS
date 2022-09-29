class Scene {
  canvas: HTMLCanvasElement;
  options: Object;
  constructor (canvas: HTMLCanvasElement, options: Object) {
    this.canvas = canvas;
    this.options = options;
  }
}

export default {
  Scene: Scene
};