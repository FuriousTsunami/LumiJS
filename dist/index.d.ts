declare class Scene {
    canvas: HTMLCanvasElement;
    options: {
        gravity?: Number;
    };
    constructor(canvas: HTMLCanvasElement, options?: Object);
}
interface test {
    x: Number;
    y: Number;
}
declare class Camera {
    x: Number;
    y: Number;
    options: {
        follow?: test;
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
