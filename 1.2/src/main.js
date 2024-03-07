import {
    BoxBufferGeometry, // 几何体
    Color, // 颜色
    Mesh, // 网格
    MeshBasicMaterial, // 材质
    PerspectiveCamera, // 透视相机
    Scene, // 场景
    WebGLRenderer // 渲染器
} from 'three'

const container = document.querySelector('#scene-container');

// 创建一个场景
const scene = new Scene();
// 设置场景的背景色
scene.background = new Color('skyblue');

// 相机的视锥体角度
const fov = 35;
// 相机的长宽比
const aspect = container.clientWidth / container.clientHeight;
// 相机的近裁剪面
const near = 0.1;
// 相机的远裁剪面
const far = 100;
// 创建一个透视相机
const camera = new PerspectiveCamera(fov, aspect, near, far);
// 设置相机的位置
camera.position.set(0, 0, 10);
// 创建一个立方体几何体
const geometry = new BoxBufferGeometry(2, 2, 2);
// 创建一个基本材质
const material = new MeshBasicMaterial();
// 创建一个网格
const cube = new Mesh(geometry, material);
// 添加网格到场景中
scene.add(cube);
// 创建一个渲染器
const renderer = new WebGLRenderer();
// 设置渲染器的尺寸
renderer.setSize(container.clientWidth, container.clientHeight);
// 设置渲染器的像素比
renderer.setPixelRatio(window.devicePixelRatio);
// 添加渲染器的DOM元素到页面中
container.append(renderer.domElement);
// 开始渲染场景
renderer.render(scene, camera);