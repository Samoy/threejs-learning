import {DirectionalLight, HemisphereLight} from "three";

function createLights() {
    // 创建一个环境光光源
    const ambientLight = new HemisphereLight('white', 'darkslategrey', 5);
    // 创建一个平行光光源
    const mainLight = new DirectionalLight('white', 5);
    mainLight.position.set(10, 10, 10);
    return {
        ambientLight, mainLight
    };
}

export {
    createLights
}