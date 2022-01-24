/*!
 * LumiJS JavaScript Library
 * https://lumi.js.org
 *
 * Copyright (c) 2020 Sunay Komarla
 * Released under The MIT License (MIT)
 * https://opensource.org/licenses/MIT
 */
var Lumi = function () {
  throw new Error("LumiJS: Method not provided");
};
Lumi.canvas = document.createElement("CANVAS");
Lumi.canvas.id = "canvas";
Lumi.canvas.width = 400;
Lumi.canvas.height = 400;
document.body.appendChild(Lumi.canvas);
const ctx = Lumi.canvas.getContext("2d");
document.body.style.overflow = "hidden";
Lumi.canvasCheck = {
  width: "normal",
  height: "normal"
};
Lumi.camera = {
  view: "top",
};
Lumi.gravity = 0;
Lumi.objects = [];
Lumi.include = function () { };
/**
 * Checks if two objects are colliding
 * @method Lumi.checkCollision
 * @param {object} obj1 The first collision object
 * @param {object} obj2 The second collision object
 * @return {}
 */
Lumi.checkCollision = function (obj1, obj2) {
  return obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y
};
Lumi.object = class {
  constructor(x, y, w, h, config) {
    if (!config) {
      config = {
        id: 0,
        restitution: 0,
        collision: {
          collide: true,
          affect: true,
        },
        mass: 1,
        color: "#000000",
      };
    }
    if (typeof config.id === "undefined") {
      config.id = 0;
    }
    if (typeof config.restitution === "undefined") {
      config.restitution = 0;
    }
    if (typeof config.collision === "undefined") {
      config.collision = {
        collide: true,
        affect: true,
      };
    }
    if (typeof config.collision.collide === "undefined") {
      config.collision.collide = true;
    }
    if (typeof config.collision.affect === "undefined") {
      config.collision.affect = true;
    }
    if (typeof config.mass === "undefined") {
      config.mass = 1;
    }
    if (typeof config.color === "undefined") {
      config.color = "#000000";
    }
    this.id = config.id;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;
    this.color = config.color;
    this.restitution = config.restitution;
    this.collision = config.collision;
    this.gravity = 0;
    this.mass = config.mass;
    this.velocity = {
      x: 0,
      y: 0,
      increase: {
        x: 0,
        y: 0,
      }
    };
  }
  getMidX() {
    return this.halfWidth + this.x;
  }
  getMidY() {
    return this.halfHeight + this.y;
  }
  getTop() {
    return this.y;
  }
  getLeft() {
    return this.x;
  }
  getRight() {
    return this.x + this.width;
  }
  getBottom() {
    return this.y + this.height;
  }
  addXVel(vel) {
    this.velocity.x += vel;
  }
  addYVel(vel) {
    this.velocity.y += vel;
  }
  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;
    if (this.y <= window.innerHeight - this.height) {
      this.gravity = Lumi.gravity;
    } else {
      this.velocity.increase.y = 0;
      this.gravity = 0;
      this.y = window.innerHeight - this.height;
    }
    if (Lumi.camera.view === "side" && this.mass !== 0) {
      this.y += this.gravity * this.mass + this.velocity.increase.y;
      this.velocity.increase.y++;
    }
    for (var i = 0; i < Lumi.objects.length; i++) {
      if (this === Lumi.objects[i]) {
        continue;
      }
      if (!this.collision.collide || !Lumi.objects[i].collision.collide) {
        continue;
      }
      if (Lumi.checkCollision(this, Lumi.objects[i])) {
        if (this.collision.affect) {
          if (this.y < Lumi.objects[i].y + this.height) {
            this.velocity.increase.y = 0;
            this.gravity = 0;
            this.y = Lumi.objects[i].y - this.height;
          }
          Lumi.resolveCollision(this, Lumi.objects[i]);
        }
      }
    }
  }
};
Lumi.rect = class extends Lumi.object {
  constructor(x, y, w, h, config) {
    super(x, y, w, h, config);
    this.type = "rect";
    this.render = "rect";
  }
};
Lumi.ellipse = class extends Lumi.object {
  constructor(x, y, w, h, config) {
    super(x, y, w, h, config);
    this.type = "ellipse";
    this.render = "ellipse";
  }
};
Lumi.sprite = class extends Lumi.object {
  constructor(img, x, y, w, h, config) {
    super(x, y, w, h, config);
    this.type = "rect";
    this.render = "img";
    this.img = img;
  }
};
Lumi.light = class extends Lumi.object {
  constructor(x, y, r, config) {
    if (!config) {
      config = {
        id: 0,
        restitution: 0,
        collision: {
          collide: false,
          affect: false,
        },
        mass: 0,
        color: "rgba(255, 255, 0, 1)",
      };
    }

    if (typeof config.id === "undefined") {
      config.id = 0;
    }

    if (typeof config.restitution === "undefined") {
      config.restitution = 0;
    }

    if (typeof config.collision === "undefined") {
      config.collision = {
        collide: false,
        affect: false,
      };
    }

    if (typeof config.collision.collide === "undefined") {
      config.collision.collide = false;
    }

    if (typeof config.collision.affect === "undefined") {
      config.collision.affect = false;
    }

    if (typeof config.mass === "undefined") {
      config.mass = 1;
    }
  
    if (typeof config.color === "undefined") {
      config.color = "rgba(255, 255, 0, 1)";
    }
    super(x, y, r / 2, r / 2, config);
    this.id = config.id;
    this.type = "rect";
    this.render = "light";
    this.x = x;
    this.y = y;
    this.radius = r;
    this.width = r;
    this.height = r;
    this.color = config.color;
    this.mass = 0;
    this.velocity = {
      x: 0,
      y: 0,
      increase: {
        x: 0,
        y: 0,
      }
    };
  }
};
/**
 * Adds a rectangle to the canvas
 * @method Lumi.addRect
 * @param {number} x The X-Coordinate of the rectangle.
 * @param {number} y The Y-Coordinate of the rectangle.
 * @param {number} width The Width of the rectangle.
 * @param {number} height The Height of the rectangle.
 * @param {object} config (Optional) The settings for this rectangle containing restitution (how much velocity and object will retain on impact), collision.collide (if it can be collided with), collision.affect (if it is affected by collisions), mass, and color.
 * @return {number} The position of this object in the "objects" array.
 */
Lumi.addRect = function (x, y, width, height, config) {
  Lumi.objects.push(new Lumi.rect(x, y, width, height, config));
  return Lumi.objects[Lumi.objects.length - 1];
};
/**
 * Adds an ellipse to the canvas
 * @method Lumi.addEllipse
 * @param {number} x The X-Coordinate of the ellipse.
 * @param {number} y The Y-Coordinate of the ellipse.
 * @param {number} radius The Radius of the ellipse.
 * @param {object} config (Optional) The settings for this rectangle containing restitution (how much velocity and object will retain on impact), collision.collide (if it can be collided with), collision.affect (if it is affected by collisions), mass, and color.
 * @return {number} The position of this object in the "objects" array.
 */
Lumi.addEllipse = function (x, y, width, height, config) {
  Lumi.objects.push(new Lumi.ellipse(x, y, width, height, config));
  return Lumi.objects[Lumi.objects.length - 1];
};
/**
 * Adds an image to the canvas
 * @method Lumi.addSprite
 * @param {element} img The Image to render.
 * @param {number} x The X-Coordinate of the image.
 * @param {number} y The Y-Coordinate of the image.
 * @param {number} width The Width of the image.
 * @param {number} height The Height of the image.
 * @param {object} config (Optional) The settings for this rectangle containing restitution (how much velocity and object will retain on impact), collision.collide (if it can be collided with), collision.affect (if it is affected by collisions), mass, and color.
 * @return {number} The position of this object in the "objects" array.
 */
Lumi.addSprite = function (img, x, y, width, height, config) {
  Lumi.objects.push(new Lumi.sprite(img, x, y, width, height, config));
  return Lumi.objects[Lumi.objects.length - 1];
};
/**
 * Adds a light to the canvas
 * @method Lumi.addLight
 * @param {number} x The X-Coordinate of the light.
 * @param {number} y The Y-Coordinate of the light.
 * @param {number} radius The Radius of the light.
 * @param {object} config (Optional) The settings for this light containing restitution (how much velocity and object will retain on impact), collision.collide (if it can be collided with), collision.affect (if it is affected by collisions), mass, and color.
 * @return {number} The position of this object in the "objects" array.
 */
Lumi.addLight = function (x, y, radius, config) {
  Lumi.objects.push(new Lumi.light(x, y, radius, config));
  return Lumi.objects[Lumi.objects.length - 1];
};
/**
 * Resolves an elastic collision between player and obstacle
 * @method Lumi.resolveCollision
 * @param {object} obj1 The first object that has collided
 * @param {object} obj2 The second object that has collided
 * @return {}
 */
Lumi.resolveCollision = function (obj1, obj2) {
  var pMidX = obj1.getMidX();
  var pMidY = obj1.getMidY();
  var aMidX = obj2.getMidX();
  var aMidY = obj2.getMidY();
  var dx = (aMidX - pMidX) / obj2.halfWidth;
  var dy = (aMidY - pMidY) / obj2.halfHeight;
  var absDX = Math.abs(dx);
  var absDY = Math.abs(dy);
  if (Math.abs(absDX - absDY) < 0.1) {
    if (dx < 0) {
      if (obj1.type === "rect") {
        obj1.x = obj2.getRight();
      }
      else if (obj1.type === "ellipse") {
        obj1.x = obj2.getRight() + obj1.width;
      }
    } else {
      obj1.x = obj2.getLeft() - obj1.width;
    }
    if (dy < 0) {
      obj1.y = obj2.getBottom();
      obj1.jumping = true;
      while (checkCollision(obj2)) {
        obj1.y++;
      }
    } else {
      obj1.jumping = false;
      obj1.y = obj2.getTop() - obj1.height;
    }
    if (Math.random() < 0.5) {
      obj1.velocity.x = -obj1.velocity.x * obj2.restitution;
    } else {
      obj1.velocity.y = -obj1.velocity.y * obj2.restitution;
    }
  } else if (absDX > absDY) {
    if (dx < 0) {
      if (obj1.type === "rect") {
        obj1.x = obj2.getRight();
      }
      else if (obj1.type === "ellipse") {
        obj1.x = obj2.getRight() + obj1.width;
      }
    } else {
      obj1.x = obj2.getLeft() - obj1.width;
    }
    obj1.velocity.x = -obj1.velocity.x * obj2.restitution;
  } else {
    if (dy < 0) {
      obj1.y = obj2.getBottom();
      while (checkCollision(obj2)) {
        obj1.y++;
      }
    } else {
      obj1.jumping = false;
      obj1.y = obj2.getTop() - obj1.height;
    }
    obj1.velocity.y = -obj1.velocity.y * obj2.restitution;
  }
};
/**
 * Configures variables to run the Engine and Renderer.
 * @method Lumi.config
 * @param {object} config A JSON object containing all the configurations for the LumiJS engine, such as canvas (contains "width" and "height", which indicate the canvas width and height. Can be fitToWindow), camera (contains "view", which indicates the view of the camera and can be "top" or "side"), and gravity (the amount of gravity for the engine)
 * @return {}
 */
Lumi.config = function (config) {
  if (typeof config.canvas.width === "undefined") {
    config.canvas.width = 400;
  }
  if (config.canvas.width === "fitToWindow") {
    config.canvas.width = window.innerWidth;
    Lumi.canvasCheck.width = "fitToWindow";
  }
  if (typeof config.canvas.height === "undefined") {
    config.canvas.height = 400;
  }
  if (config.canvas.height === "fitToWindow") {
    config.canvas.height = window.innerHeight;
    Lumi.canvasCheck.height = "fitToWindow";
  }
  if (typeof config.camera === "undefined") {
    config.camera = {
      view: "top",
    };
  }
  if (typeof config.gravity === "undefined") {
    config.gravity = 0;
  }
  if (typeof config.include === "undefined") {
    config.include = function () { };
  }
  Lumi.canvas.width = config.canvas.width;
  Lumi.canvas.height = config.canvas.height;
  Lumi.camera = config.camera;
  Lumi.gravity = config.gravity;
  Lumi.include = config.include;
};
Lumi.resize = function () {
  if (Lumi.canvasCheck.width === "fitToWindow") {
    Lumi.canvas.width = window.innerWidth;
  }
  if (Lumi.canvasCheck.height === "fitToWindow") {
    Lumi.canvas.height = window.innerHeight;
  }
};
window.onresize = Lumi.resize;
Lumi.renderFrame = function () {
  scrollTo(10, 10);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  if (typeof Lumi.include === "function") {
    Lumi.include();
  }
  for (var i = 0; i < Lumi.objects.length; i++) {
    if (Lumi.objects[i].render === "rect") {
      ctx.fillStyle = Lumi.objects[i].color;
      ctx.fillRect(
        Lumi.objects[i].x,
        Lumi.objects[i].y,
        Lumi.objects[i].width,
        Lumi.objects[i].height
      );
      Lumi.objects[i].update();
      ctx.fillStyle = "#000000";
    } else if (Lumi.objects[i].render === "ellipse") {
      ctx.beginPath();
      ctx.ellipse(
        Lumi.objects[i].x,
        Lumi.objects[i].y,
        Lumi.objects[i].width,
        Lumi.objects[i].height,
        0,
        0,
        Math.PI * 2,
        false
      );
      ctx.fillStyle = Lumi.objects[i].color;
      ctx.fill();
      Lumi.objects[i].update();
      ctx.fillStyle = "#000000";
    } else if (Lumi.objects[i].render === "img") {
      ctx.drawImage(
        Lumi.objects[i].img,
        Lumi.objects[i].x,
        Lumi.objects[i].y,
        Lumi.objects[i].width,
        Lumi.objects[i].height
      );
      Lumi.objects[i].update();
    } else if (Lumi.objects[i].render === "light") {
      var fill = ctx.createRadialGradient(
        Lumi.objects[i].x,
        Lumi.objects[i].y,
        0,
        Lumi.objects[i].x,
        Lumi.objects[i].y,
        Lumi.objects[i].radius
      );
      fill.addColorStop(0, Lumi.objects[i].color);
      fill.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.beginPath();
      ctx.fillStyle = fill;
      ctx.arc(
        Lumi.objects[i].x,
        Lumi.objects[i].y,
        Lumi.objects[i].radius,
        0,
        Math.PI * 2,
        false
      );
      ctx.fill();
      Lumi.objects[i].update();
      ctx.fillStyle = "#000000";
    }
  }
};
/**
 * Starts engine and renderer
 * @method Lumi.init
 * @return {}
 */
Lumi.init = function () {
  requestAnimationFrame(Lumi.init);
  Lumi.renderFrame();
};