import * as Matter from "matter-js";

class CollisionShape extends Matter.Body {
  constructor() {
    super();
  }

  setCollisionMask() {

  }
}

const Physics = {
  CollisionShape
};

export default Physics;
