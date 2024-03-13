import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {setupModel} from "./setupModel";
import parrotImg from '../../../../assets/models/Parrot.glb'
import flamingoImg from '../../../../assets/models/Flamingo.glb'
import storkImg from '../../../../assets/models/Stork.glb'

async function loadBirds() {
    const loader = new GLTFLoader();
    const [parrotData, flamingoData, storkData] = await Promise.all([
        loader.loadAsync(parrotImg),
        loader.loadAsync(flamingoImg),
        loader.loadAsync(storkImg),
    ])
    const parrot = setupModel(parrotData);
    parrot.position.set(0, 0, 2.5);
    const flamingo = setupModel(flamingoData);
    flamingo.position.set(7.5, 0, -10);
    const stork = setupModel(storkData);
    stork.position.set(0, -2.5, -10);
    return {
        parrot,
        flamingo,
        stork
    }
}

export {
    loadBirds
}
