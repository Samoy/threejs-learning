# 探索Three.js

本项目是学习Three.js的练习项目，主要学习Three.js的基本用法。代码目录根据[探索Three.js](https://discoverthreejs.com/zh/book/)
章节命名。例如1.1章，代码目录为`1.1`。

## 1.1 Three.js 应用的结构

地址：<http://localhost:5173/1.1/index.html>

## 1.2 你的第一个Three.js场景

地址：<http://localhost:5173/1.2/index.html>

## 1.3 介绍世界应用程序

地址：<http://localhost:5173/1.3/index.html>

### 挑战

#### 简单

1. Q：更改场景背景的颜色。您可以输入任何标准颜色名称，例如红色、绿色、紫色等，以及一些不常见的名称，例如海蓝宝石或珊瑚色。你能猜出
   140 个 CSS 颜色名称中的多少个？
    <details>
    <summary>查看答案</summary>
    A：在<code>World/components/scene.js</code>中做如下修改:<br>
    <code>
      scene.background = new Color('你想替换的颜色');
    </code>
    </details>

#### 中等

1. Q：将立方体更改为其他形状，例如矩形、球体、三角形或圆环。（提示： 在文档中搜索“BufferGeometry”。）
   <details>
    <summary>查看答案</summary>
    A：在<code>World/components/cube.js</code>中做如下修改:<br>
   矩形:
    <pre>
      const geometry = new BoxBufferGeometry(2, 1, 2);
    </pre>
   球体:
   <pre>
     const geometry = new SphereBufferGeometry(1, 10, 10);
   </pre>
   三角形:
   <pre>
   const geometry = new BufferGeometry();
   const vertices = new Float32Array([
        -1.0, -1.0, 0.0,
        1.0, -1.0, 0.0,
        1.0, 1.0, 0.0,
   ]);
   geometry.setAttribute('position', new BufferAttribute(vertices, 3));
   </pre>
   圆环:
   <pre>
   const geometry = new TorusGeometry(1, 0.1, 100, 100);
   </pre>
   </details>
2. Q：添加第二个立方体并使用`mesh.position.set(x, y, z)`移动它（您需要找出从`createCube`
   函数返回两个多维数据集的某种方法，或者添加第二个模块，如cube2.js）。
   <details>
    <summary>查看答案</summary>
    A：在<code>World/components/cube.js</code>中做如下修改:
    <pre>
    const geometry1 = new BoxBufferGeometry(2, 1, 2);
    const material1 = new MeshBasicMaterial();
    const cube1 = new Mesh(geometry1, material1);
    const geometry2 = new RoundedBoxGeometry(1,1);
    const material2 = new MeshBasicMaterial();
    const cube2 = new Mesh(geometry2, material2);
    cube2.position.set(2, -2, 0)
    return [cube1, cube2];
    </pre>
   在<code>World/components/world.js</code>中做如下修改:
   <pre>
   const [cube1, cube2] = createCube();
   this.#scene.add(cube1, cube2);
   </pre>
   </details>

#### 困难

1. Q：向 HTML 页面添加一个按钮，并延迟渲染场景，直到单击该按钮。无需 对 World 应用程序进行任何更改即可执行此操作。相反，在
   index.html 中创建按钮并在 main.js 中设置它。
   <details>
   <summary>查看答案</summary>
   在<code>index.html</code>中做如下修改: <br>
   <pre>
   <button id="load">加载</button>
   </pre>
   在<code>main.js</code>中做如下修改: <br>
   <pre>
   document.querySelector('#load').onclick = () => {
    main();
   };
   </pre>
   </details>

## 1.4 基于物理的渲染和照明

地址：<http://localhost:5173/1.4/index.html>

### 挑战

#### 简单

1. Q：尝试改变材料的颜色。所有正常的颜色，如red、green或blue，以及更多奇特的颜色，如peachpuff、orchid或papayawhip，都可以使用。
    <details>
    <summary>查看答案</summary>
    A：在<code>World/components/cube.js</code>中做如下修改:<br>
    <code>
       const material = new MeshStandardMaterial({
        color: '你想要替换的颜色'
    });
    </code>
    </details>
2. Q：尝试改变灯光的颜色。同样，您可以使用任何 CSS 颜色名称。观看如何设置各种灯光和材质颜色为立方体提供最终颜色。
    <details>
    <summary>查看答案</summary>
    A：在<code>World/components/light.js</code>中做如下修改:<br>
    <code>
       const light = new DirectionalLight('你想要替换的颜色', 8);
    </code>
    </details>
3. Q：尝试移动灯光（使用light.position）并观察结果。
   <details>
   <summary>查看答案</summary>
   网格的显示效果会根据光照的位置发生相应的改变。
   </details>

#### 中等

1. Q：测试其他直射光类型:  `PointLight`， `SpotLight`，和 `RectAreaLight`
   <details>
    <summary>查看答案</summary>
    A：在<code>World/components/light.js</code>中做如下修改:<br>
    <pre>
      // const light = new PointLight('white', 8);
      // const light = new SpotLight('white', 8);
      // const light = new RectAreaLight('white', 8);
    </pre>
   </details>
2. Q：MeshBasicMaterial并且MeshStandardMaterial不是唯一可用的材料。 three.js
   核心中共有十八种材质，任何名称中带有“mesh”字样的材质都可以与我们的立方体网格一起使用。测试其中一些（提示： 在文档中搜索"
   material"）。您需要先导入其他灯光和材质类，然后才能使用它们！
   <details>
    <summary>查看答案</summary>
   查看<a href="https://threejs.org/docs/index.html?q=material#api/zh/materials/Material">https://threejs.org/docs/index.html?q=material#api/zh/materials/Material</a>
   </details>

#### 困难

1. Q：重新创建场景[Lighting and Depth](https://discoverthreejs.com/zh/book/first-steps/physically-based-rendering/#lighting-and-depth)
，减去动画（提示：使用两个网格和两个材质）
   <details>
      <summary>查看答案</summary>
      在<code>World/components</code>>目录下创建<code>cube1.js</code>: <br>
   <pre>
   import {
       BoxBufferGeometry,
       Mesh, MeshBasicMaterial,
   } from 'three';
   
   function createCube1() {
      // create a geometry
      const geometry = new BoxBufferGeometry(2, 2, 2);
      // create a default (white) Basic material
      const material = new MeshBasicMaterial({
         color: 'purple'
      });
      // create a Mesh containing the geometry and material
      const cube = new Mesh(geometry, material);
      cube.rotation.set(-0.5, -0.1, 0.8)
      cube.position.set(3, 0, 0)
      return cube;
   }
   export {createCube1};
   </pre>
   在<code>World/World.js</code>中做如下修改: <br>
   <pre>
      import {createCube1} from "./components/cube1";
      class World {
         constructor(container) {
            //...
            const cube = createCube();
            const cube1 = createCube1();
            const light = createLights();
            this.#scene.add(cube, cube1, light);
            //...
      }
   }
   </pre>
   </details>