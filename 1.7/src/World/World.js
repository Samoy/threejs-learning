import {createCamera} from "./components/camera";
import {createCube} from "./components/cube";
import {createScene} from "./components/scene";
import {createLights} from "./components/light";

import {createRenderer} from "./systems/renderer";
import {Resizer} from "./systems/Resizer";
import {Loop} from './systems/Loop'

class World {
    #camera;
    #renderer;
    #scene;
    #loop;

    constructor(container) {
        this.#camera = createCamera();
        this.#scene = createScene();
        this.#renderer = createRenderer();
        this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
        container.append(this.#renderer.domElement);
        const cube = createCube();
        const light = createLights();
        this.#loop.updatables.push(cube);
        this.#scene.add(cube, light);
        const resizer = new Resizer(container, this.#camera, this.#renderer);
    }

    render() {
        this.#renderer.render(this.#scene, this.#camera);
    }

    start() {
        this.#loop.start();
    }

    stop() {
        this.#loop.stop();
    }

}

export {
    World
}