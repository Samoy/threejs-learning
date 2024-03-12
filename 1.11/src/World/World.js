import {createCamera} from "./components/camera";
import {createMeshGroup} from "./components/meshGroup";
import {createScene} from "./components/scene";
import {createLights} from "./components/light";

import {createControls} from "./systems/controls";
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
        const controls = createControls(this.#camera, this.#renderer.domElement);
        controls.addEventListener('change', () => {
            this.render();
        })
        this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
        container.append(this.#renderer.domElement);
        const meshGroup = createMeshGroup();
        const {ambientLight, mainLight} = createLights();
        this.#loop.updatables.push(controls, meshGroup);
        this.#scene.add(ambientLight, mainLight, meshGroup);
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