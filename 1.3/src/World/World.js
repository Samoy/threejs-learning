import {createCamera} from "./components/camera";
import {createCube} from "./components/cube";
import {createScene} from "./components/scene";

import {createRenderer} from "./systems/renderer";
import {Resizer} from "./systems/Resizer";

class World {
    #camera;
    #renderer;
    #scene;

    constructor(container) {
        this.#camera = createCamera();
        this.#scene = createScene();
        this.#renderer = createRenderer();
        container.append(this.#renderer.domElement);
        const cube = createCube();
        this.#scene.add(cube);
        const resizer = new Resizer(container, this.#camera, this.#renderer);
    }

    render() {
        this.#renderer.render(this.#scene, this.#camera);
    }
}

export {
    World
}