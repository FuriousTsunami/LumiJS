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
Lumi.gravity = 0;
Lumi.random = function (min, max) {
  return Math.random() * (max - min) + min;
}
Lumi.checkCollision = function (obj1, obj2) {
  if (obj1.type == "rect" && obj2.type == "rect") {
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
      mass: 1,
      maxVel: {
        x: 45,
        y: 45,
      },
      restitution: 0,
      static: false,
      collision: true,
      color: "#000000",
      collisionType: "dynamic",
    };
  }
  if (!config.mass) {
    config.mass = 1;
  }
  if (!config.maxVel) {
    config.maxVel = {
      x: 45,
      y: 45,
    };
  }
  if (!config.maxVel.x) {
    config.maxVel.x = 45;
  }
  if (!config.maxVel.y) {
    config.maxVel.y = 45;
  }
  if (!config.restitution) {
    config.restitution = 0;
  }
  if (!config.static) {
    config.static = false;
  }
  if (!config.collision) {
    config.collision = true;
  }
  if (!config.color) {
    config.color = "#000000";
  }
  if (!config.collisionType) {
    config.collisionType = "dynamic";
  }
  this.type = "rect";
  this.collisionType = config.collisionType;
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.halfWidth = this.width / 2;
  this.halfHeight = this.height / 2;
  this.color = config.color;
  this.restitution = config.restitution;
  this.static = config.static;
  this.collision = config.collision;
  this.mass = config.mass;
  this.velocity = {
    x: 0,
    y: 0,
    increase: {
      x: 0,
      y: 0,
    }
  };
  this.gravity = Lumi.gravity;
  this.maxVel = {
    x: config.maxVel.x,
    y: config.maxVel.y
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
  this.getMidX = function () {
    return this.halfWidth + this.x;
  }
  this.getMidY = function () {
    return this.halfHeight + this.y;
  }
  this.getTop = function () {
    return this.y;
  }
  this.getLeft = function () {
    return this.x;
  }
  this.getRight = function () {
    return this.x + this.width;
  }
  this.getBottom = function () {
    return this.y + this.height;
  }
  this.update = function () {
    this.halfWidth = this.width * 0.5;
    this.halfHeight = this.height * 0.5;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    if (this.y <= window.innerHeight - this.height) {
      this.gravity = Lumi.gravity;
      if (this.velocity.x >= this.maxVel.x) {
        this.velocity.x = this.maxVel.x;
        this.velocity.increase.x = 0;
      }
      if (this.velocity.y >= this.maxVel.y) {
        this.velocity.y = this.maxVel.y;
        this.velocity.increase.y = 0;
      } else {
        if (!this.static) {
          this.velocity.y = this.gravity * this.mass + this.velocity.increase.y;
          this.velocity.increase.y += 1;
        }
      }
    } else {
      this.velocity.increase.y = 0;
      this.gravity = 0;
      this.y = window.innerHeight - this.height;
    }
    for (var i = 0; i < Lumi.objects.length; i++) {
      if (this == Lumi.objects[i]) {
        continue;
      }
      if (!this.collision || !Lumi.objects[i].collision) {
        continue;
      }
      if (Lumi.checkCollision(this, Lumi.objects[i])) {
        if (this.getMidY() < Lumi.objects[i].getMidY()) {
          this.velocity.increase.y = 0;
          this.gravity = 0;
        }
        Lumi.resolveCollision(this, Lumi.objects[i]);
      }
    }
  };
};
Lumi.ellipse = function (x, y, r, config) {
  if (!config) {
    config = {
      mass: 1,
      maxVel: {
        x: 45,
        y: 45,
      },
      restitution: 0,
      static: false,
      collision: true,
      color: "#000000",
      collisionType: "dynamic",
    };
  }
  if (!config.mass) {
    config.mass = 1;
  }
  if (!config.maxVel) {
    config.maxVel = {
      x: 45,
      y: 45,
    };
  }
  if (!config.maxVel.x) {
    config.maxVel.x = 45;
  }
  if (!config.maxVel.y) {
    config.maxVel.y = 45;
  }
  if (!config.restitution) {
    config.restitution = 0;
  }
  if (!config.static) {
    config.static = false;
  }
  if (!config.collision) {
    config.collision = true;
  }
  if (!config.color) {
    config.color = "#000000";
  }
  if (!config.collisionType) {
    config.collisionType = "dynamic";
  }
  this.type = "ellipse";
  this.collisionType = config.collisionType;
  this.x = x;
  this.y = y;
  this.radius = r;
  this.color = config.color;
  this.restitution = config.restitution;
  this.static = config.static;
  this.collision = config.collision;
  this.mass = config.mass;
  this.velocity = {
    x: 0,
    y: 0,
    increase: {
      x: 0,
      y: 0,
    }
  };
  this.gravity = Lumi.gravity;
  this.maxVel = {
    x: config.maxVel.x,
    y: config.maxVel.y
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
  this.getMidX = function () {
    return this.x;
  }
  this.getMidY = function () {
    return this.y;
  }
  this.getTop = function () {
    return this.y - this.radius;
  }
  this.getLeft = function () {
    return this.x - this.radius;
  }
  this.getRight = function () {
    return this.x + this.radius;
  }
  this.getBottom = function () {
    return this.y + this.radius;
  }
  this.update = function () {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    if (this.y <= window.innerHeight - this.radius) {
      this.gravity = Lumi.gravity;
      if (this.velocity.x >= this.maxVel.x) {
        this.velocity.x = this.maxVel.x;
        this.velocity.increase.x = 0;
      }
      if (this.velocity.y >= this.maxVel.y) {
        this.velocity.y = this.maxVel.y;
        this.velocity.increase.y = 0;
      } else {
        if (!this.static) {
          this.velocity.y = this.gravity * this.mass + this.velocity.increase.y;
          this.velocity.increase.y += 1;
        }
      }
    } else {
      this.velocity.increase.y = 0;
      this.gravity = 0;
      this.y = window.innerHeight - this.radius;
    }
    for (var i = 0; i < Lumi.objects.length; i++) {
      if (this == Lumi.objects[i]) {
        continue;
      }
      if (!this.collision || !Lumi.objects[i].collision) {
        continue;
      }
      if (Lumi.checkCollision(this, Lumi.objects[i])) {
        if (this.getMidY() < Lumi.objects[i].getMidY()) {
          this.velocity.increase.y = 0;
          this.gravity = 0;
        }
        Lumi.resolveCollision(this, Lumi.objects[i]);
      }
    }
  };
};
/**
 * Adds a rectangle to the canvas
 * @method Lumi.addRect
 * @param {number} x The X-Coordinate of the rectangle.
 * @param {number} y The Y-Coordinate of the rectangle.
 * @param {number} width The Width of the rectangle
 * @param {number} height The Height of the rectangle
 * @param {object} config (Optional) The settings for this rectangle containing mass, maxVel.x, maxVel.y, restitution (how much velocity and object will retain on impact), collision (if it can be collided with, static (if it is affected by gravity), and color.
 * @return {number} The position of this object in the "objects" array.
 */
Lumi.addRect = function (x, y, width, height, config) {
  Lumi.objects.push(new Lumi.rect(x, y, width, height, config));
  return Lumi.objects[Lumi.objects.length - 1];
};
Lumi.addEllipse = function (x, y, radius, config) {
  Lumi.objects.push(new Lumi.ellipse(x, y, radius, config));
  return Lumi.objects[Lumi.objects.length - 1];
}
/**
 * Resolves an elastic collision between player and obstacle
 * @method Lumi.resolveCollision
 * @param {object} player The Player that has collided
 * @param {object} entity The Obstacle
 * @return {}
 */
Lumi.resolveCollision = function (player, entity) {
  if (!Lumi.checkCollision(player, entity)) {
    console.error("LumiJS: No Collision To Resolve");
    return;
  }
  if (player.collisionType == "dynamic" && entity.collisionType == "fixed") {
    var pMidX = player.getMidX();
    var pMidY = player.getMidY();
    var aMidX = entity.getMidX();
    var aMidY = entity.getMidY();
    var dx = (aMidX - pMidX) / entity.halfWidth;
    var dy = (aMidY - pMidY) / entity.halfHeight;
    var absDX = Math.abs(dx);
    var absDY = Math.abs(dy);

    if (Math.abs(absDX - absDY) < 0.1) {
      if (dx < 0) {
        player.x = entity.getRight();
      } else {
        player.x = entity.getLeft() - player.width;
      }

      if (dy < 0) {
        player.y = entity.getBottom();
      } else {
        player.y = entity.getTop() - player.height;
      }

      if (Math.random() < 0.5) {
        player.velocity.x = -player.velocity.x * entity.restitution;

        if (Math.abs(player.velocity.x) < 0.0004) {
          player.velocity.x = 0;
        }
      } else {
        player.velocity.y = -player.velocity.y * entity.restitution;
        if (Math.abs(player.velocity.y) < 0.0004) {
          player.velocity.y = 0;
        }
      }

    } else if (absDX > absDY) {
      if (dx < 0) {
        player.x = entity.getRight();
      } else {
        player.x = entity.getLeft() - player.width;
      }

      player.velocity.x = -player.velocity.x * entity.restitution;

      if (Math.abs(player.velocity.x) < 0.0004) {
        player.velocity.x = 0;
      }

    } else {
      if (dy < 0) {
        player.y = entity.getBottom();
      } else {
        player.velocity.y = 0;
        player.y = entity.getTop() - player.height;
      }

      player.velocity.y = -player.velocity.y * entity.restitution;
      if (Math.abs(player.velocity.y) < 0.0004) {
        player.velocity.y = 0;
      }
    }
  } else if (player.type == "dynamic" && entity.type == "dynamic") {
    var pMidX = player.getMidX();
    var pMidY = player.getMidY();
    var aMidX = entity.getMidX();
    var aMidY = entity.getMidY();
    var dx = (aMidX - pMidX) / entity.halfWidth;
    var dy = (aMidY - pMidY) / entity.halfHeight;
    var absDX = Math.abs(dx);
    var absDY = Math.abs(dy);

    if (Math.abs(absDX - absDY) < 0.1) {
      if (dx < 0) {
        player.x = entity.getRight();
      } else {
        player.x = entity.getLeft() - player.width;
      }

      if (dy < 0) {
        player.y = entity.getBottom();
      } else {
        player.y = entity.getTop() - player.height;
      }

      if (Math.random() < 0.5) {
        player.velocity.x = -player.velocity.x * entity.restitution;

        if (Math.abs(player.velocity.x) < 0.0004) {
          player.velocity.x = 0;
        }
      } else {
        player.velocity.y = -player.velocity.y * entity.restitution;
        if (Math.abs(player.velocity.y) < 0.0004) {
          player.velocity.y = 0;
        }
      }

    } else if (absDX > absDY) {
      if (dx < 0) {
        player.x = entity.getRight();
      } else {
        player.x = entity.getLeft() - player.width;
      }

      player.velocity.x = -player.velocity.x * entity.restitution;

      if (Math.abs(player.velocity.x) < 0.0004) {
        player.velocity.x = 0;
      }

    } else {
      if (dy < 0) {
        player.y = entity.getBottom();
      } else {
        player.velocity.y = 0;
        player.y = entity.getTop() - player.height;
      }

      player.velocity.y = -player.velocity.y * entity.restitution;
      if (Math.abs(player.velocity.y) < 0.0004) {
        player.velocity.y = 0;
      }
    }
  }
};
/**
 * Configures variables to run the Engine and Renderer.
 * @method Lumi.config
 * @param {number} canvasWidth The canvas width. Can be "fitToWindow"
 * @param {number} canvasHeight The canvas height. Can be "fitToWindow"
 * @param {number} gravity (Optional) The gravity for the Engine.
 * @return {}
 */
Lumi.config = function (canvasWidth, canvasHeight, gravity) {
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
  if (!gravity) {
    gravity = 0;
  }
  Lumi.canvas.width = canvasWidth;
  Lumi.canvas.height = canvasHeight;
  Lumi.gravity = gravity;
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