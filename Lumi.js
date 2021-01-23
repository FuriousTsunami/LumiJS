var Lumi = function () {
  console.error("LumiJS: Lumi has no object to work with");
};
Lumi.canvas = document.createElement("CANVAS");
Lumi.canvas.id = "canvas";
document.body.appendChild(Lumi.canvas);
const ctx = Lumi.canvas.getContext("2d");
document.body.style.overflow = "hidden";
Lumi.canvasCheck = {
  width: "normal",
  height: "normal"
};
Lumi.objects = [];
Lumi.random = function (min, max) {
  return Math.random() * (max - min) + min;
}
Lumi.checkCollision = function (obj1, obj2) {
  if (obj1.type !== "ellipse" && obj2.type !== "ellipse") {
    if (
      obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y
    ) {
      return true;
    } else {
      return false;
    }
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
      color: "#000000",
    };
  }
  if (!config.restitution) {
    config.restitution = 0;
  }
  if (!config.collision) {
    config.collision =  {
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
  if (!config.color) {
    config.color = "#000000";
  }
  this.type = "rect";
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.color = config.color;
  this.restitution = config.restitution;
  this.collision = config.collision;
  this.velocity = {
    x: 0,
    y: 0,
  };

	/**
	 * Adds an X Velocity
	 * @method this.addXVel
	 * @param {number} The velocity at which to accelerate
	 * @return {}
	 */
  this.addXVel = function (vel) {
    this.velocity.x += vel;
  };
	/**
	 * Adds a Y Velocity
	 * @method this.addYVel
	 * @param {number} The velocity at which to accelerate
	 * @return {}
	 */
  this.addYVel = function (vel) {
    this.velocity.y += vel;
  };
  this.update = function () {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    for (var i = 0; i < Lumi.objects.length; i++) {
      if (this == Lumi.objects[i]) {
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
Lumi.ellipse = function (x, y, r, config) {
  if (!config) {
    config = {
      restitution: 0,
      collision: {
        collide: true,
        affect: true,
      },
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
  if (!config.color) {
    config.color = "#000000";
  }
  this.type = "ellipse";
  this.x = x;
  this.y = y;
  this.radius = r;
  this.color = config.color;
  this.restitution = config.restitution;
  this.collision = config.collision;
  this.velocity = {
    x: 0,
    y: 0,
  };
	/**
	 * Adds an X Velocity
	 * @method this.addXVel
	 * @param {number} The velocity at which to accelerate
	 * @return {}
	 */
  this.addXVel = function (vel) {
    this.velocity.x += vel;
  };
	/**
	 * Adds a Y Velocity
	 * @method this.addYVel
	 * @param {number} The velocity at which to accelerate
	 * @return {}
	 */
  this.addYVel = function (vel) {
    this.velocity.y += vel;
  };
  this.update = function () {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    for (var i = 0; i < Lumi.objects.length; i++) {
      if (this == Lumi.objects[i]) {
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
Lumi.img = function (img, x, y, width, height, config) {
  if (!config) {
    config = {
      restitution: 0,
      collision: {
        collide: true,
        affect: true,
      },
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
  this.type = "img";
  this.img = img;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.restitution = config.restitution;
  this.collision = config.collision;
  this.velocity = {
    x: 0,
    y: 0,
  };
	/**
	 * Adds an X Velocity
	 * @method this.addXVel
	 * @param {number} The velocity at which to accelerate
	 * @return {}
	 */
  this.addXVel = function (vel) {
    this.velocity.x += vel;
  };
	/**
	 * Adds a Y Velocity
	 * @method this.addYVel
	 * @param {number} The velocity at which to accelerate
	 * @return {}
	 */
  this.addYVel = function (vel) {
    this.velocity.y += vel;
  };
  this.update = function () {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    for (var i = 0; i < Lumi.objects.length; i++) {
      if (this == Lumi.objects[i]) {
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
/**
 * Adds a rectangle to the canvas
 * @method Lumi.addRect
 * @param {number} x The X-Coordinate of the rectangle.
 * @param {number} y The Y-Coordinate of the rectangle.
 * @param {number} width The Width of the rectangle.
 * @param {number} height The Height of the rectangle.
 * @param {object} config (Optional) The settings for this rectangle containing mass, maxVel.x, maxVel.y, restitution (how much velocity and object will retain on impact), collision (if it can be collided with, static (if it is affected by gravity), and color.
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
 * @param {object} config (Optional) The settings for this ellipse containing mass, maxVel.x, maxVel.y, restitution (how much velocity and object will retain on impact), collision (if it can be collided with, static (if it is affected by gravity), and color.
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
 * @param {object} config (Optional) The settings for this image containing mass, maxVel.x, maxVel.y, restitution (how much velocity and object will retain on impact), collision (if it can be collided with, static (if it is affected by gravity), and color.
 * @return {number} The position of this object in the "objects" array.
 */
Lumi.addImg = function (img, x, y, width, height, config) {
  Lumi.objects.push(new Lumi.img(img, x, y, width, height, config));
  return Lumi.objects[Lumi.objects.length - 1];
};
/**
 * Resolves an elastic collision between player and obstacle
 * @method Lumi.resolveCollision
 * @param {object} player The Player that has collided
 * @param {object} entity The Obstacle
 * @return {}
 */
Lumi.resolveCollision = function (obj1, obj2) {
  if (!Lumi.checkCollision(obj1, obj2)) {
    console.error("LumiJS: Obj1 and Obj2 aren't colliding.");
  }
  if ("obj1 colliding on the right or left") {
    if (obj1.velocity.x > 0) {
      while (Lumi.checkCollision(obj1, obj2)) {
        obj1.x--;
      }
    } 
    else if (obj1.velocity.x < 0) {
      while (Lumi.checkCollision(obj1, obj2)) {
        obj1.x++;
      }
    }
  } 
  else if ("obj1 colliding on top or bottom") {
    if (obj1.velocity.y > 0) {
      while (Lumi.checkCollision(obj1, obj2)) {
        obj1.y--;
      }
    }
    else if (obj1.velocity.y < 0) {
      while (Lumi.checkCollision(obj1, obj2)) {
        obj1.y++;
      }
    }
  }
};
/**
 * Configures variables to run the Engine and Renderer.
 * @method Lumi.config
 * @param {number} canvasWidth The canvas width. Can be "fitToWindow"
 * @param {number} canvasHeight The canvas height. Can be "fitToWindow"
 * @return {}
 */
Lumi.config = function (canvasWidth, canvasHeight) {
  if (!canvasWidth) {
    canvasWidth = 400;
  }
  if (canvasWidth == "fitToWindow") {
    canvasWidth = window.innerWidth;
    Lumi.canvasCheck.width = "fitToWindow";
  }
  if (!canvasHeight) {
    canvasHeight = 400;
  }
  if (canvasHeight == "fitToWindow") {
    canvasHeight = window.innerHeight;
    Lumi.canvasCheck.height = "fitToWindow";
  }
  Lumi.canvas.width = canvasWidth;
  Lumi.canvas.height = canvasHeight;
};
Lumi.resize = function () {
  if (Lumi.canvasCheck.width == "fitToWindow") {
    Lumi.canvas.width = window.innerWidth;
  }
  if (Lumi.canvasCheck.height == "fitToWindow") {
    Lumi.canvas.height = window.innerHeight;
  }
};
window.onresize = Lumi.resize;
Lumi.renderFrame = function () {
  scrollTo(10, 10);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (var i = 0; i < Lumi.objects.length; i++) {
    if (Lumi.objects[i].type === "rect") {
      ctx.fillStyle = Lumi.objects[i].color;
      ctx.fillRect(
        Lumi.objects[i].x,
        Lumi.objects[i].y,
        Lumi.objects[i].width,
        Lumi.objects[i].height,
      );
      Lumi.objects[i].update();
      ctx.fillStyle = "#000000";
    } else if (Lumi.objects[i].type === "ellipse") {
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
    } else if (Lumi.objects[i].type === "img") {
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