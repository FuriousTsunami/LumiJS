var Lumi = function () {
  console.error("LumiJS: Lumi has no object to work with");
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
  follow: "none",
  type: "top",
};
Lumi.gravity = 0;
Lumi.objects = [];
/**
	* Checks if two objects are colliding
	* @method Lumi.checkCollision
	* @param {object} obj1 The first collision object
  * @param {object} obj2 The second collision object
	* @return {}
 */
Lumi.checkCollision = function (obj1, obj2) {
  if (obj1.type === "rect" && obj2.type === "rect") {
    if (obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y) {
      return true;
    }
  } else if (obj1.type === "rect" && obj2.type === "ellipse") {
    var distX = Math.abs(obj2.x - obj1.x - obj1.width / 2);
    var distY = Math.abs(obj2.y - obj1.y - obj1.height / 2);

    if (distX > (obj1.width / 2 + obj2.radius)) { return false; }
    if (distY > (obj1.height / 2 + obj2.radius)) { return false; }

    if (distX <= (obj1.width / 2)) { return true; }
    if (distY <= (obj1.height / 2)) { return true; }

    var dx = distX - obj1.width / 2;
    var dy = distY - obj1.height / 2;
    return (dx * dx + dy * dy <= (obj2.radius * obj2.radius));
  } else if (obj1.type === "ellipse" && obj2.type === "ellipse") {
    var dx = obj1.x - obj2.x;
    var dy = obj1.y - obj2.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < obj1.radius + obj2.radius) {
      return true;
    } else {
      return false;
    }
  } else if (obj1.type === "ellipse" && obj2.type === "rect") {
    var distX = Math.abs(obj1.x - obj2.x - obj2.width / 2);
    var distY = Math.abs(obj1.y - obj2.y - obj2.height / 2);

    if (distX > (obj2.width / 2 + obj1.radius)) { return false; }
    if (distY > (obj2.height / 2 + obj1.radius)) { return false; }

    if (distX <= (obj2.width / 2)) { return true; }
    if (distY <= (obj2.height / 2)) { return true; }

    var dx = distX - obj2.width / 2;
    var dy = distY - obj2.height / 2;
    return (dx * dx + dy * dy <= (obj1.radius * obj1.radius));
  } else {
    return false;
  }
};
Lumi.rect = function (x, y, w, h, config) {
  if (!config) {
    config = {
      restitution: 0,
      collision: {
        collide: true,
        affect: true,
      },
      mass: 1,
      color: "#000000",
    };
  }
  if (!config.restitution) {
    config.restitution = 0;
  }
  if (!config.collision) {
    config.collision = {
      collide: true,
      affect: true,
    }
  }
  if (!config.collision.collide) {
    config.collision.collide = true;
  }
  if (!config.collision.affect) {
    config.collision.affect = true;
  }
  if (!config.mass) {
    config.mass = 1;
  }
  if (!config.color) {
    config.color = "#000000";
  }
  this.type = "rect";
  this.render = "rect";
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
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

	/**
	 * Adds an X Velocity
	 * @method this.addXVel
	 * @param {number} vel The velocity at which to accelerate
	 * @return {}
	 */
  this.addXVel = function (vel) {
    this.velocity.x += vel;
  };
	/**
	 * Adds a Y Velocity
	 * @method this.addYVel
	 * @param {number} vel The velocity at which to accelerate
	 * @return {}
	 */
  this.addYVel = function (vel) {
    this.velocity.y += vel;
  };
  this.update = function () {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    if (this.y <= window.innerHeight - this.height) {
      this.gravity = Lumi.gravity;
    } else {
      this.velocity.increase.y = 0;
      this.gravity = 0;
    }
    if (Lumi.camera.type === "side") {
      this.y += this.gravity * this.mass + this.velocity.increase.y;
      this.velocity.increase.y ++;
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
          }
          Lumi.resolveCollision(this, Lumi.objects[i]);
        }
      }
    }
  };
};
Lumi.ellipse = function (x, y, r, config) {
  if (!config) {
    config = {
      restitution: 0,
      collision: {
        collide: true,
        affect: true,
      },
      mass: 1,
      color: "#000000",
    };
  }
  if (!config.restitution) {
    config.restitution = 0;
  }
  if (!config.collision) {
    config.collision = {
      collide: true,
      affect: true,
    }
  }
  if (!config.collision.collide) {
    config.collision.collide = true;
  }
  if (!config.collision.affect) {
    config.collison.affect = true;
  }
  if (!config.mass) {
    config.mass = 1;
  }
  if (!config.color) {
    config.color = "#000000";
  }
  this.type = "ellipse";
  this.render = "ellipse";
  this.x = x;
  this.y = y;
  this.radius = r;
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
	/**
	 * Adds an X Velocity
	 * @method this.addXVel
	 * @param {number} vel The velocity at which to accelerate
	 * @return {}
	 */
  this.addXVel = function (vel) {
    this.velocity.x += vel;
  };
	/**
	 * Adds a Y Velocity
	 * @method this.addYVel
	 * @param {number} vel The velocity at which to accelerate
	 * @return {}
	 */
  this.addYVel = function (vel) {
    this.velocity.y += vel;
  };
  this.update = function () {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    if (this.y <= window.innerHeight - this.radius) {
      this.gravity = Lumi.gravity;
    } else {
      this.velocity.increase.y = 0;
      this.gravity = 0;
    }
    if (Lumi.camera.type === "side") {
      this.y += this.gravity * this.mass + this.velocity.increase.y;
      this.velocity.increase.y ++;
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
          Lumi.resolveCollision(this, Lumi.objects[i]);
        }
      }
    }
  };
};
Lumi.img = function (img, x, y, w, h, config) {
  if (!config) {
    config = {
      restitution: 0,
      collision: {
        collide: true,
        affect: true,
      },
      mass: 1,
      color: "#000000",
    };
  }
  if (!config.restitution) {
    config.restitution = 0;
  }
  if (!config.collision) {
    config.collision = {
      collide: true,
      affect: true,
    }
  }
  if (!config.collision.collide) {
    config.collision.collide = true;
  }
  if (!config.collision.affect) {
    config.collision.affect = true;
  }
  if (!config.mass) {
    config.mass = 1;
  }
  if (!config.color) {
    config.color = "#000000";
  }
  this.type = "rect";
  this.render = "img";
  this.img = img;
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
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

	/**
	 * Adds an X Velocity
	 * @method this.addXVel
	 * @param {number} vel The velocity at which to accelerate
	 * @return {}
	 */
  this.addXVel = function (vel) {
    this.velocity.x += vel;
  };
	/**
	 * Adds a Y Velocity
	 * @method this.addYVel
	 * @param {number} vel The velocity at which to accelerate
	 * @return {}
	 */
  this.addYVel = function (vel) {
    this.velocity.y += vel;
  };
  this.update = function () {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    if (this.y <= window.innerHeight - this.height) {
      this.gravity = Lumi.gravity;
    } else {
      this.velocity.increase.y = 0;
      this.gravity = 0;
    }
    if (Lumi.camera.type === "side") {
      this.y += this.gravity * this.mass + this.velocity.increase.y;
      this.velocity.increase.y ++;
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
          }
          Lumi.resolveCollision(this, Lumi.objects[i]);
        }
      }
    }
  };
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
Lumi.addEllipse = function (x, y, radius, config) {
  Lumi.objects.push(new Lumi.ellipse(x, y, radius, config));
  return Lumi.objects[Lumi.objects.length - 1];
}
/**
 * Adds an image to the canvas
 * @method Lumi.addImg
 * @param {element} img The Image to render.
 * @param {number} x The X-Coordinate of the image.
 * @param {number} y The Y-Coordinate of the image.
 * @param {number} width The Width of the image.
 * @param {number} height The Height of the image.
 * @param {object} config (Optional) The settings for this rectangle containing restitution (how much velocity and object will retain on impact), collision.collide (if it can be collided with), collision.affect (if it is affected by collisions), mass, and color.
 * @return {number} The position of this object in the "objects" array.
 */
Lumi.addImg = function (img, x, y, width, height, config) {
  Lumi.objects.push(new Lumi.img(img, x, y, width, height, config));
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
  if (!Lumi.checkCollision(obj1, obj2)) {
    console.error("LumiJS: Obj1 and Obj2 aren't colliding.");
  }
  if (obj1.velocity.x > 0) {
    while (Lumi.checkCollision(obj1, obj2)) {
      obj1.x--;
    }
    obj1.addXVel(-1 * (obj1.velocity.x * obj2.restitution));
  }
  else if (obj1.velocity.x < 0) {
    while (Lumi.checkCollision(obj1, obj2)) {
      obj1.x++;
    }
    obj1.addXVel(obj1.velocity.x * obj2.restitution);
  }
  if (obj1.velocity.y > 0) {
    while (Lumi.checkCollision(obj1, obj2)) {
      obj1.y--;
    }
    obj1.addYVel(-1 * (obj1.velocity.y * obj2.restitution));
  }
  else if (obj1.velocity.y < 0) {
    while (Lumi.checkCollision(obj1, obj2)) {
      obj1.y++;
    }
    obj1.addYVel(obj1.velocity.y * obj2.restitution);
  }
};
/**
 * Configures variables to run the Engine and Renderer.
 * @method Lumi.config
 * @param {number} canvasWidth The canvas width. Can be "fitToWindow"
 * @param {number} canvasHeight The canvas height. Can be "fitToWindow"
 * @param {object} camera An object for the camera settings, including "follow" which indicates which object it should follow, and "type", which indicates if the view should be from the top, or from the side.
 * @return {}
 */
Lumi.config = function (canvasWidth, canvasHeight, gravity, camera) {
  if (!canvasWidth) {
    canvasWidth = 400;
  }
  if (canvasWidth === "fitToWindow") {
    canvasWidth = window.innerWidth;
    Lumi.canvasCheck.width = "fitToWindow";
  }
  if (!canvasHeight) {
    canvasHeight = 400;
  }
  if (canvasHeight === "fitToWindow") {
    canvasHeight = window.innerHeight;
    Lumi.canvasCheck.height = "fitToWindow";
  }
  if (!camera) {
    camera = {
      follow: "none",
      type: "top",
    }
  }
  if (!gravity) {
    gravity = 0;
  }
  Lumi.canvas.width = canvasWidth;
  Lumi.canvas.height = canvasHeight;
  Lumi.camera = camera;
  Lumi.gravity = gravity;
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
  for (var i = 0; i < Lumi.objects.length; i++) {
    if (Lumi.objects[i].render === "rect") {
      ctx.fillStyle = Lumi.objects[i].color;
      ctx.fillRect(
        Lumi.objects[i].x,
        Lumi.objects[i].y,
        Lumi.objects[i].width,
        Lumi.objects[i].height,
      );
      Lumi.objects[i].update();
      ctx.fillStyle = "#000000";
    } else if (Lumi.objects[i].render === "ellipse") {
      ctx.beginPath();
      ctx.arc(
        Lumi.objects[i].x,
        Lumi.objects[i].y,
        Lumi.objects[i].radius,
        0,
        2 * Math.PI,
        false,
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
        Lumi.objects[i].height,
      );
      Lumi.objects[i].update();
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