import {createCamera} from './components/camera.js';
import {createLights} from './components/lights.js';
import {createScene} from './components/scene.js';
import {loadBirds} from "./components/birds/birds";

import {createControls} from './systems/controls.js';
import {createRenderer} from './systems/renderer.js';
import {Resizer} from './systems/Resizer.js';
import {Loop} from './systems/Loop.js';


class World {
    #camera;
    #renderer;
    #scene;
    #loop;
    #controls;

    constructor(container) {
        this.#camera = createCamera();
        this.#renderer = createRenderer();
        this.#scene = createScene();
        this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
        container.append(this.#renderer.domElement);

        this.#controls = createControls(this.#camera, this.#renderer.domElement);
        const {ambientLight, mainLight} = createLights();

        this.#loop.updatables.push(this.#controls);
        this.#scene.add(ambientLight, mainLight);

        const resizer = new Resizer(container, this.#camera, this.#renderer);
    }

    async init() {
        const {parrot, flamingo, stork} = await loadBirds();
        this.#controls.target.copy(parrot.position);

        this.#scene.add(parrot, flamingo, stork);
    }

    render() {
        renderer.render(this.#scene, this.#camera);
    }

    start() {
        this.#loop.start();
    }

    stop() {
        this.#loop.stop();
    }
}

export {World};
