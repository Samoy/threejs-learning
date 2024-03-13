import {AnimationMixer} from "three";

function setupModel(data) {
    const model = data.scene.children[0];
    // 找到动画剪辑
    const clip = data.animations[0];
    // 创建动画混合器
    const mixer = new AnimationMixer(model);
    // 创建动作
    const action = mixer.clipAction(clip);
    action.startAt(1)
        .setEffectiveTimeScale(1)
        .halt(6)
        .play();
    model.tick = (delta) => {
        mixer.update(delta);
    }
    return model;
}

export {
    setupModel
}
