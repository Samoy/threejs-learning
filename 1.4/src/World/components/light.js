import {DirectionalLight} from "three";

function createLights() {
    // 创建一个平行光光源
    const light = new DirectionalLight('white', 8);

    return light;
}

export {
    createLights
}