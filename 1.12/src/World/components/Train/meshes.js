import {Group, Mesh} from 'three';

import {createGeometries} from './geometries.js';
import {createMaterials} from './materials.js';

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    const top = new Mesh(geometries.top, materials.body);
    top.position.set(1.5, 2.25, 0);

    const bottom = new Mesh(geometries.bottom, materials.body);
    bottom.position.set(1.5, 0.5, 0);

    // 柱子1
    const cylinder = new Mesh(geometries.cylinder, materials.detail);
    cylinder.position.set(0.6, 1.5, 0.65);
    // 柱子2
    const cylinder2 = cylinder.clone();
    cylinder2.position.set(2.4, 1.5, 0.65);
    // 柱子3
    const cylinder3 = cylinder.clone();
    cylinder3.position.set(2.4, 1.5, -0.65);
    // 柱子4
    const cylinder4 = cylinder.clone();
    cylinder4.position.set(0.6, 1.5, -0.65);
    const cabin = new Group();
    cabin.add(cylinder, cylinder2, cylinder3, cylinder4);

    const chimney = new Mesh(geometries.chimney, materials.detail);
    chimney.position.set(-2, 1.9, 0);

    const nose = new Mesh(geometries.nose, materials.body);
    nose.position.set(-1, 1, 0);
    nose.rotation.z = Math.PI / 2;

    const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
    smallWheelRear.position.y = 0.5;
    smallWheelRear.rotation.x = Math.PI / 2;

    const smallWheelCenter = smallWheelRear.clone();
    smallWheelCenter.position.x = -1;

    const smallWheelFront = smallWheelRear.clone();
    smallWheelFront.position.x = -2;

    const bigWheel = smallWheelRear.clone();
    bigWheel.position.set(1.5, 0.9, 0);
    bigWheel.scale.set(2, 1.25, 2);

    // 轨道
    const track = new Mesh(geometries.track, materials.body);
    track.rotation.z = Math.PI / 2;
    track.position.set(0, 0, 0.4);

    const track2 = track.clone();
    track2.position.set(0, 0, -0.4);

    // 创建枕木
    const pillar = new Mesh(geometries.pillar, materials.detail);
    pillar.rotation.x = Math.PI / 2;
    const pillars = new Group();
    for (let i = -2.4; i < 2.6; i+=0.3) {
        const newPillar = pillar.clone();
        newPillar.position.set(i, 0, 0);
        pillars.add(newPillar);
    }
    return {
        cabin,
        top,
        bottom,
        nose,
        chimney,
        smallWheelRear,
        smallWheelCenter,
        smallWheelFront,
        bigWheel,
        track,
        track2,
        pillars
    };
}

export {createMeshes};