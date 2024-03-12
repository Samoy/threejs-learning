import {BoxBufferGeometry, CylinderBufferGeometry, Group} from 'three';

function createGeometries() {
    const top = new BoxBufferGeometry(2, 0.5, 1.5);
    const bottom = new BoxBufferGeometry(2, 0.5, 1.5);
    // 柱子
    const cylinder = new CylinderBufferGeometry(0.1, 0.1, 1.5, 12);
    const nose = new CylinderBufferGeometry(0.75, 0.75, 3, 12);
    const wheel = new CylinderBufferGeometry(0.4, 0.4, 1, 16);
    const chimney = new CylinderBufferGeometry(0.3, 0.1, 0.5);
    // 轨道
    const track = new CylinderBufferGeometry(0.1, 0.1, 5, 16);
    // 枕木
    const pillar = new CylinderBufferGeometry(0.1, 0.1, 1, 16);
    return {
        track,
        cylinder,
        top,
        bottom,
        nose,
        wheel,
        chimney,
        pillar,
    }
}

export {createGeometries}