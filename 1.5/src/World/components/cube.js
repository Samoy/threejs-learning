import {
    BoxBufferGeometry, MathUtils,
    Mesh,
    MeshStandardMaterial
} from 'three';
import {color} from "three/examples/jsm/libs/dat.gui.module";

function createCube() {
    // create a geometry
    const geometry = new BoxBufferGeometry(2, 2, 2);
    // create a default (white) Basic material
    const material = new MeshStandardMaterial({
        color: 'purple'
    });

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material);
    cube.position.x = -0.5;
    cube.position.y = -0.1;
    cube.position.z = 1;
    //
    // // equivalent to:
    // // cube.position.set(-0.5, -0.1, 1);
    //
    cube.scale.x = 1.25;
    cube.scale.y = 0.25;
    cube.scale.z = 0.5;
    //
    // // equivalent to:
    // // cube.scale.set(1.25, 0.25, 0.5);
    //
    // // to rotate using degrees, they must
    // // first be converted to radians
    cube.rotation.x = MathUtils.degToRad(-60);
    cube.rotation.y = MathUtils.degToRad(-45);
    cube.rotation.z = MathUtils.degToRad(60);


    return cube;
}

export {createCube};