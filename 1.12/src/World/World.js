import {createCamera} from "./components/camera";
import {createScene} from "./components/scene";
import {Train} from './components/Train/Train.js';
import {createLights} from "./components/light";


import {createControls} from "./systems/controls";
import {createRenderer} from "./systems/renderer";
import {Resizer} from "./systems/Resizer";
import {Loop} from './systems/Loop'
import {createAxesHelper, createGridHelper} from "./components/helpers";

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
        const train = new Train();
        const {ambientLight, mainLight} = createLights();
        this.#loop.updatables.push(controls, train);
        this.#scene.add(ambientLight, mainLight, train);
        const resizer = new Resizer(container, this.#camera, this.#renderer);
        this.#scene.add(createAxesHelper(), createGridHelper());
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