declare class Scene {
    canvas: HTMLCanvasElement;
    options: {
        gravity?: Number;
    };
    constructor(canvas: HTMLCanvasElement, options?: Object);
}
declare class Body {
    width: Number;
    height: Number;
    restitution: Number;
    collision: {
        layer?: Number;
    };
    mass: Number;
    constructor();
}
declare class Camera {
    x: Number;
    y: Number;
    options: {
        follow?: typeof Body;
        followBounds?: {
            x: Number;
            y: Number;
        };
        active?: Boolean;
    };
    constructor(x: Number, y: Number, options: Object);
}
export declare var Lumi: {
    Scene: typeof Scene;
    Camera: typeof Camera;
};
export {};
