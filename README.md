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

1. 更改场景背景的颜色。您可以输入任何标准颜色名称，例如红色、绿色、紫色等，以及一些不常见的名称，例如海蓝宝石或珊瑚色。你能猜出
   140 个 CSS 颜色名称中的多少个？
    <details>
    <summary>查看答案</summary>
    A：在<code>World/components/scene.js</code>中做如下修改:
    <pre>
      scene.background = new Color('你想替换的颜色');
    </pre>
    </details>

#### 中等

1. 将立方体更改为其他形状，例如矩形、球体、三角形或圆环。（提示： 在文档中搜索“BufferGeometry”。）
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
2. 添加第二个立方体并使用`mesh.position.set(x, y, z)`移动它（您需要找出从`createCube`
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

1. 向 HTML 页面添加一个按钮，并延迟渲染场景，直到单击该按钮。无需 对 World 应用程序进行任何更改即可执行此操作。相反，在
   index.html 中创建按钮并在 main.js 中设置它。
   <details>
   <summary>查看答案</summary>
   在<code>index.html</code>中做如下修改: <br>
   <pre>
   &lt;button id="load"&gt;加载&lt;/button&gt;
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

1. 尝试改变材料的颜色。所有正常的颜色，如red、green或blue，以及更多奇特的颜色，如peachpuff、orchid或papayawhip，都可以使用。
    <details>
    <summary>查看答案</summary>
    A：在<code>World/components/cube.js</code>中做如下修改:<br>
    <pre>
       const material = new MeshStandardMaterial({
        color: '你想要替换的颜色'
    });
    </pre>
    </details>
2. 尝试改变灯光的颜色。同样，您可以使用任何 CSS 颜色名称。观看如何设置各种灯光和材质颜色为立方体提供最终颜色。
    <details>
    <summary>查看答案</summary>
    A：在<code>World/components/light.js</code>中做如下修改:<br>
    <code>
       const light = new DirectionalLight('你想要替换的颜色', 8);
    </code>
    </details>
3. 尝试移动灯光（使用light.position）并观察结果。
   <details>
   <summary>查看答案</summary>
   网格的显示效果会根据光照的位置发生相应的改变。
   </details>

#### 中等

1. 测试其他直射光类型:  `PointLight`， `SpotLight`，和 `RectAreaLight`
   <details>
    <summary>查看答案</summary>
    在<code>World/components/light.js</code>中做如下修改:<br>
    <pre>
      // const light = new PointLight('white', 8);
      // const light = new SpotLight('white', 8);
      // const light = new RectAreaLight('white', 8);
    </pre>
   </details>
2. MeshBasicMaterial并且MeshStandardMaterial不是唯一可用的材料。 three.js
   核心中共有十八种材质，任何名称中带有“mesh”字样的材质都可以与我们的立方体网格一起使用。测试其中一些（提示： 在文档中搜索"
   material"）。您需要先导入其他灯光和材质类，然后才能使用它们！
   <details>
    <summary>查看答案</summary>
   查看<a href="https://threejs.org/docs/index.html?q=material#api/zh/materials/Material">https://threejs.org/docs/index.html?q=material#api/zh/materials/Material</a>
   </details>

#### 困难

1.
重新创建场景[Lighting and Depth](https://discoverthreejs.com/zh/book/first-steps/physically-based-rendering/#lighting-and-depth)
，减去动画（提示：使用两个网格和两个材质）
<details>
<summary>查看答案</summary>
在<code>World/components</code>>目录下创建<code>cube1.js</code>: <br>
<pre>
import {
      BoxBufferGeometry,
      Mesh, MeshBasicMaterial
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

## 1.5 变换和坐标系

地址：<http://localhost:5173/1.5/index.html>

### 挑战

#### 简单

1. 打开 cube.js 模块并尝试使用cube.position、cube.rotation和cube.scale。
   <details>
   <summary>查看答案</summary>
   参见<code>World/components/cube.js</code>
   </details>
2. 打开 lights.js 模块并尝试使用light.position。注意设置light.rotation和light.scale没有效果。
   <details>
   <summary>查看答案</summary>
   参见<code>World/components/light.js</code>
   </details>

3. 在 camera.js 模块中对camera.position和camera.rotation进行实验。注意设置camera.scale没有效果。
   <details>
   <summary>查看答案</summary>
   参见<code>World/components/camera.js</code>
   </details>

#### 中等

1. 创建第二个网格，称为meshB。让它变成不同的颜色或不同的形状，这样你就可以识别它。
   将此新网格添加为第一个网格的子对象。从一个轴开始——也许是X轴 - 并调整每个网格的位置。尝试猜测当你这样做时两个网格最终位置将在哪里。注意平移是如何
   叠加 的。如果您将两个网格平移5个单位，则子对象将总共移动10个单位。
   <details>
   <summary>查看答案</summary>
   在<code>World/components/cube.js</code>中做如下修改:
   <pre>
    const cube1 = new Mesh(geometry, new MeshStandardMaterial(
        {
            color: 'red'
        }
    ));
    cube1.position.x = 2;
    cube.add(cube1);
   </pre>
   </details>
2. 现在尝试设置两个网格的旋转。同样，首先将自己限制在一个轴上。再次注意，旋转是相加的。如果您旋转父对象45°, 子对象45°
   ，则子对象的最终旋转将是九十度。
   请记住使用MathUtils.degToRad将度数转换为弧度。
   <details>
   <summary>查看答案</summary>
   在<code>World/components/cube.js</code>中做如下修改:
   <pre>
    // ...
    cube.rotation.x = MathUtils.degToRad(45);
    cube1.rotation.x = MathUtils.degToRad(45);
    // ...
   </pre>
   </details>
3. 最后，尝试设置两个网格的缩放比例。这一次，请注意缩放比例是 相乘 的。如果将父网格缩放2倍，将子网格缩放4倍，则子网格将增长到其初始大小的八倍。
   <details>
   <summary>查看答案</summary>
   在<code>World/components/cube.js</code>中做如下修改:
   <pre>
    // ...
    cube.scale.set(2, 2, 2)
    cube1.scale.set(4, 4, 4)
    // ...
   </pre>
   </details>

#### 困难

1. 如果您熟悉弧度，请尝试不使用.degToRad方法进行上述练习。 您可以使用`Math.PI`。
   <details>
   <summary>查看答案</summary>
   以下是度和弧度之间的转换:
   <pre>
   30° = Math.PI / 6
   45° = Math.PI / 4
   90° = Math.PI / 2
   180° = Math.PI
   360° = Math.PI * 2
   </pre>
   </details>

## 1.6 使我们的场景育有响应性

地址：<http://localhost:5173/1.6/index.html>

### 挑战

#### 简单

1. 启用和禁用AA并比较差异。
   <details>
   <summary>查看答案</summary>
   开启AA: 边缘处较为平滑。
   禁用AA：边缘处不平滑，有锯齿。
   </details>
2. 旋转立方体，直到边缘垂直和水平。现在，你能看出禁用AA时有什么不同吗？
   <details>
   <summary>查看答案</summary>
   几乎没有区别。
   </details>
3. 注释掉 World.js 中调整大小的代码，并比较调整窗口大小时的差异。
   <details>
   <summary>查看答案</summary>
   场景不会重新渲染
   </details>
4. 注释掉 World.js 中的自定义onResize钩子，看看当你调整窗口大小时会发生什么。
   <details>
   <summary>查看答案</summary>
   依然会重新渲染
   </details>

#### 中等

1. 禁用抗锯齿。现在，放大立方体以更好地查看锯齿伪影。不要使用浏览器的缩放功能。相反，请尝试以下方法：
    * 使用`cube.scale`放大立方体。
    * 使用`cube.position.z`使立方体更靠近您。
    * 使用`camera.position.z`使相机更靠近立方体。
   <details>
   <summary>查看答案</summary>
   <ul>
    <li><pre>cube.scale.set(10, 10, 10)</pre></li>
    <li><pre>cube.position.z = 4</pre></li>
    <li><pre>camera.position.z = 3</pre></li>
   </ul>
   </details>
2. 仍然禁用AA，使用`camera.position.x`(水平移动)和`camera.position.y`(垂直移动)放大立方体的右上角。
   <details>
   <summary>查看答案</summary>
   <pre>
      camera.position.x = 1;
      camera.position.y = 1;
   </pre>
   </details>
3. 重复2.，但这一次，使用`cube.position.x`和`cube.position.y`。
   <details>
   <summary>查看答案</summary>
   <pre>
      cube.position.x = 2;
      cube.position.y = 2;
   </pre>
   </details>

#### 困难

1. 不要使用容器来调整场景大小，而是尝试手动输入一些数字。例如，创建一个宽高64像素或宽高256像素的场景。您可能希望在此处更改场景的背景颜色以更轻松地查看。
   <details>
   <summary>查看答案</summary>
   <pre>
      renderer.setSize(256, 256);
   </pre>
   </details>
2. 玩玩`devicePixelRatio`。尝试为DPR设置更高的值，例如4或8（不过不要太高！）。如果您将值设置为低于1，例如0.5，会发生什么情况？如果您为DPR设置高值并禁用AA，会发生什么情况？立方体的边缘看起来如何？
   <details>
   <summary>查看答案</summary>
   <pre>
      renderer.setPixelRatio(4);
   </pre>
   在禁用AA的情况下，DPR越小，边缘锯齿越明显。
   </details>

## 1.7 动画循环

地址: <http://localhost:5173/1.7/index.html>

### 挑战

#### 简单

1. 玩一玩动画速度。使立方体每百秒旋转一圈，然后每秒旋转一圈。
   <details>
   <summary>查看答案</summary>
   每百秒旋转一圈：
   <pre>
   const radiansPerSecond = MathUtils.degToRad(360 / 100);
   </pre>
   每秒旋转一圈：
   <pre>
   const radiansPerSecond = MathUtils.degToRad(360);
   </pre>
   </details>
2. 您可以为任何东西设置动画，而不仅仅是旋转。尝试为网格的其他一些属性设置动画。
   <details>
   <summary>查看答案</summary>
   <pre>
   cube.position.x += delta / 2;
   cube.position.y += delta / 2;
   cube.position.z += delta / 2;
   cube.scale.x += delta / 2;
   cube.scale.y += delta / 2;
   cube.scale.z += delta / 2;
   </pre>
   </details>

#### 中等

1. 给相机添加一个`.tick`方法，然后让它慢慢缩小。尝试以每秒一米左右的速度缩小。
    <details>
   <summary>查看答案</summary>
   在<code>World/components/camera.js</code>中添加以下代码:
   <pre>
   const meterPerSecond = 1;
   camera.tick = (delta) => {
      camera.position.z += delta * meterPerSecond;
   };
   </pre>
   在<code>World/World.js</code>中添加以下代码:
   <pre>
   this.#loop.updatables.push(this.#camera);
   </pre>
   </details>
2. 向灯光添加一个`.tick`方法，并对`light.position.x, .y或.z`参数进行动画处理。
   <details>
   <summary>查看答案</summary>
    在<code>World/components/light.js</code>中添加以下代码:
   <pre>
   light.tick = function (delta) {
      light.position.x += delta * 10;
      light.position.y += delta * 10;
      light.position.z += delta * 10;
   }
   </pre>
   在<code>World/World.js</code>中添加以下代码:
   <pre>
   this.#loop.updatables.push(light);
   </pre>
   </details>
3. 添加一个启动和停止动画循环的`click`事件监听器（或者，如果你想花哨的话，一个按钮）。在`main.js`中使用`World.start`
   和`World.stop`执行此操作。
   <details>
   <summary>查看答案</summary>
   对<code>main.js</code>做如下改造：
   <pre>
    const container = document.querySelector("#scene-container");
    const button = document.createElement("button");
    let isAnimate = true;
    container.append(button);
    const world = new World(container);
    button.innerHTML = '结束动画'
    button.onclick = () => {
        if (isAnimate) {
            button.innerHTML = '开始动画';
            world.stop();
        }else {
            button.innerHTML = '结束动画'
            world.start();
        }
        isAnimate = !isAnimate;
    }
    world.start();
   </pre>
   </details>

#### 困难

1. 使用模运算符为立方体、相机或灯光设置`.position`动画。让相机反复缩小十米。让立方体一遍又一遍地从屏幕的左到右进行动画。
   <details>
   <summary>查看答案</summary>
   在<code>World/components/cube.js</code>中添加以下代码:
   <pre>
   cube.position.x =  cube.position.x % 10 + 1;
   </pre>
   在<code>World/components/camera.js</code>中添加以下代码:
   <pre>
   camera.tick = (delta) => {
      camera.position.z = camera.position.z % 10 + 1;
   }
   </pre>
   </details>
2. 让相机缩小十米，然后反方向再次放大。在屏幕上从左到右为立方体设置动画，然后，当它到达屏幕的右边缘（大致）时，让它反向并移回起点。
   <details>
   <summary>查看答案</summary>
   在<code>World/components/camera.js</code>中添加以下代码:
   <pre>
   let i = 0;
   let isAdd = true;
   camera.tick = (delta) => {
      // 让相机缩小十米，然后反方向再次放大
      let x = i % 10;
      camera.position.z = camera.position.z + (isAdd ? x : -x);
      if (x === 9) {
            isAdd = !isAdd;
      }
      i++;
   };
   </pre>
   在<code>World/components/cube.js</code>中添加以下代码:
   <pre>
   let isAdd = true;
   cube.tick = (delta) => {
      if (isAdd) {
         cube.position.x += 0.1;
         if (cube.position.x > 5) {
            isAdd = false;
         }
      } else {
         cube.position.x -= 0.1;
         if (cube.position.x < -5) {
            isAdd = true;
         }
      }
   }
   </pre>
   </details>

## 1.8 纹理映射简介

地址: <http://localhost:5173/1.8/index.html>

### 挑战

#### 简单

1. 更改材质的颜色。尝试紫色、红色、绿色、蓝色或您喜欢的任何其他颜色。注意每种颜色如何与黑白纹理相结合。
   <details>
   <summary>查看答案</summary>
   <pre>
   const material = new MeshStandardMaterial({
      map: texture,
      color: 'purple'
   });
   </pre>
   </details>
2. **/assets/textures**文件夹中包含了第二个纹理文件，称为`uv-test-col.png`。你能加载这个文件并将它应用到材质的`.map`槽中吗？
   <details>
   <summary>查看答案</summary>
   <pre>
   const texture = textureLoader.load('/1.8/assets/textures/uv-test-col.png');
   </pre>
   </details>
3. 尝试将立方体切换为其他形状。 在文档中搜索“`BufferGeometry`”以查看所有可用的几何体。注意纹理是如何映射到不同形状上的。
   <details>
   <summary>查看答案</summary>
   <pre>
   const geometry = new SphereGeometry(1,100, 100);
   </pre>
   </details>
4. 打开[MeshStandardMaterial文档](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial)
   页面。该材质共有11个纹理贴图插槽，每个插槽的名称中都包含`map`。你能找到所有的吗？
   <details>
   <summary>查看答案</summary>
   <pre>
   该文档中所有以<code>map</code>结束的属性都表示纹理贴图槽。
   </pre>
   </details>

#### 中等

1. 尝试将我们加载的纹理分配给材质上的其他贴图槽。它们可能并非都有效，但您会得到一些有趣的结果。
   <details>
   <summary>查看答案</summary>
   <pre>
   const material = new MeshStandardMaterial({
      normalMap:texture,
   });
   </pre>
   </details>   
2. 对`uv-test-col.png`做同样的事情。然后，一次加载两个纹理并将它们同时分配到不同的插槽。
   <details>
   <summary>查看答案</summary>
   <pre>
   const texture = textureLoader.load('/1.8/assets/textures/uv-test-bw.png');
   const texture1 = textureLoader.load('/1.8/assets/textures/uv-test-col.png');
   const material = new MeshStandardMaterial({
      map: texture1,
      normalMap:texture,
   });
   </pre>
   </details>
3. 打开[Texture文档](https://threejs.org/docs/#api/en/textures/Texture)
   。通读可以在纹理上设置的各种属性。尝试调整`.offset`、`.repeat`、`.rotation`和`.center`属性。
   这些（除了`.rotation`）中的每一个都是一个`Vector2`，因此您可以使用`.set(x,y)`它们来调整它们。
   <details>
   <summary>查看答案</summary>
   <pre>
   const texture = textureLoader.load('/1.8/assets/textures/uv-test-bw.png');
   texture.center.set(5, 5);
   texture.wrapS = RepeatWrapping;
   texture.wrapT = RepeatWrapping;
   texture.repeat.set(4, 4);
   texture.offset.set(0.1, 0.1);
   texture.rotation = MathUtils.degToRad(90)
   const material = new MeshStandardMaterial({
      map: texture,
   });
   </pre>
   </details>

#### 困难

1. 材质中的每个纹理槽都与一个或多个属性（如`.color`和`.ma`
   p）相关联。贴图要么是一个[调制属性](https://discoverthreejs.com/zh/book/first-steps/textures-intro/#types-of-texture)
   （同样，像`.color`和`.map`），或者它本身被一些其他属性调制（像`.bumpMapand`和`.bumpScale`
   ）。当您测试不同插槽中的纹理时，请尝试调整这些调制属性。其中一些是颜色（如`.color`和`emissive`），
   另一些是矢量（如`.normalScale`），但大多数是简单数字（如`.bumpScale`和`.displacementScale`）。在每种情况下，文档都清楚地说明了这一点。
   <details>
   <summary>查看答案</summary>
   请参考<a href="https://threejs.org/docs/#api/zh/materials/MeshStandardMaterial" target="_blank">https://threejs.org/docs/#api/zh/materials/MeshStandardMaterial</a>
   </details>
2. 我们在上面提到，`Texture`类是`HTML`图像的包装器。如果您将`texture`
   打印到控制台，您应该能够找到该图像。您可以在控制台中找到`uv-test-bw.png`的URL并在新浏览器选项卡中打开它吗？
    <details>
   <summary>查看答案</summary>
   <code>uv-test-bw.png</code>的url是<a target="_blank" href="http://localhost:5173/1.8/assets/textures/uv-test-bw.png">http://localhost:5173/1.8/assets/textures/uv-test-bw.png</a>
   </details>

## 1.9 使用相机控制插件扩展three

地址: <http://localhost:5173/1.9/index.html>

### 挑战

#### 简单

1. 尝试调整控件的[最小和最大缩放级别](https://discoverthreejs.com/zh/book/first-steps/camera-controls/#limiting-zoom)
   。如果你让这两个值相等会发生什么？或使`minDistance`大于`maxDistance`？
   <details>
   <summary>查看答案</summary>
   无法进行缩放，代码如下：
   <pre>
   controls.minDistance = 7;
   controls.maxDistance = 5;
   </pre>
   </details>
2. 启用[自动旋转](https://discoverthreejs.com/zh/book/first-steps/camera-controls/#auto-rotate)，然后尝试调整旋转速度。
   <details>
   <summary>查看答案</summary>
   <pre>
   controls.autoRotate = true;
   controls.autoRotateSpeed = 1;
   </pre>
   </details>
3.
尝试[禁用三种控件模式中的每一种](https://discoverthreejs.com/zh/book/first-steps/camera-controls/#enable-or-disable-the-controls)
，一次禁用一种，然后观察结果。
<details>
<summary>查看答案</summary>
<pre>
controls.enableRotate = false;
controls.enableZoom = false;
controls.enablePan = false;
</pre>
</details>
4. [调整阻尼速度](https://discoverthreejs.com/zh/book/first-steps/camera-controls/#enable-damping-for-added-realism) (`.dampingFactor`)
   以了解阻尼的工作原理。大于0和小于1的值效果最好。
   <details>
   <summary>查看答案</summary>
   <pre>
   controls.dampingFactor = 0.6;
   </pre>
   </details>

#### 中等

1.
尝试调整控件的[水平和垂直旋转限制](https://discoverthreejs.com/zh/book/first-steps/camera-controls/#limiting-rotation)
。请记住，如果您以度为单位，则必须转换为弧度。如果您需要提醒它是如何工作的，请查看`cube.js`。
<details>
<summary>查看答案</summary>
<pre>
// 水平：
controls.minAzimuthAngle = -Math.PI;
controls.maxAzimuthAngle = Math.PI;
// 垂直：
controls.minPolarAngle = 0;
controls.maxPolarAngle = Math.PI;
</pre>
</details>
2. 向页面添加一个按钮（或单击事件侦听器），并且每当您单击该按钮时，将相机和控件的目标移动到一个新的随机位置。尝试限制移动，使立方体始终位于屏幕上的某个位置。
   <details>
   <summary>查看答案</summary>
   在<code>src/World/World.js</code>中添加以下代码：
   <pre>
   translate() {
        let rangeSize = 4 - (-4) + 1;
        let random = Math.random() * rangeSize - 4;
        this.#camera.position.set(random, 0, 10);
        this.render();
    }

   reset() {
   this.#camera.position.set(0, 0, 10);
   this.render();
   }
   </pre>
   在<code>src/main.js</code>中做如下修改：
   <pre>
   const button = document.createElement('button');
   button.innerText = "Start";
   let isTranslate = false;
   button.addEventListener('click', () => {
      if (isTranslate) {
         button.innerText = "Start";
         world.reset();
      } else {
         world.translate();
         button.innerText = "Reset";
      }
      isTranslate = !isTranslate;
    });
   container.append(button);
   </pre>
   </details>

#### 困难

1.
设置在使用控件时[按需渲染](https://discoverthreejs.com/zh/book/first-steps/camera-controls/#rendering-on-demand-with-orbitcontrols)
，包括在纹理加载后以及在调整场景大小时生成新帧。
<details>
<summary>查看答案</summary>
在<code>src/World/components/cube.js</code>中做如下修改:
<pre>
function createCube(callback) {
   const geometry = new BoxBufferGeometry(2, 2, 2);
   const material = createMaterial(callback);
   const cube = new Mesh(geometry, material);
   cube.rotation.set(-0.5, -0.1, 0.8);
   const radiansPerSecond = MathUtils.degToRad(30);
   cube.tick = (delta) => {
     cube.rotation.x += radiansPerSecond * delta;
     cube.rotation.y += radiansPerSecond * delta;
     cube.rotation.z += radiansPerSecond * delta;
   }
   return cube;
}
function createMaterial(callback) {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('/1.8/assets/textures/uv-test-bw.png', callback);
  const material = new MeshStandardMaterial({
    map: texture,
  });
  return material;
}
</pre>
在<code>src/World/World.js</code>中做如下修改:
<pre>
const cube = createCube(()=>{
   this.render();
});
resizer.onResize = () => {
   this.render();
}
</pre>
</details>
2. 你能在几秒钟内让相机和控件的目标动画到一个新的位置吗？也许在页面上添加一个按钮，当你点击它时，播放动画。看看当您只为相机或目标设置动画时会发生什么，
   或者当您在制作动画时不禁用控件时会发生什么。 设置此动画的最佳位置是在控件controls模块中。
   <details>
   <summary>查看答案</summary>
   在<code>src/World/components/controls.js</code>中做如下修改:
   <pre>
   controls.tick = () => {
      if (controls.target.x >= -4) {
         controls.target.x -= 0.1;
      }
      controls.update();
   }
   </pre>
   在<code>src/World/World.js</code>中做如下修改:
   <pre>
   stop() {
      this.#loop.stop();
      this.#controls.reset();
   }
   </pre>
   在<code>src/main.js</code>中做如下修改:
   <pre>
   const button = document.createElement('button');
    button.innerText = 'Start'
    let isReset = true;
    button.addEventListener('click', () => {
      if (isReset) {
         world.start();
         button.innerText = 'Reset'
      } else {
         world.stop();
         button.innerText = 'Start'
      }
      isReset = !isReset;
   })
   </pre>
   </details>

## 1.10 环境光：来自各个方向的光照

地址: <http://localhost:5173/1.10/index.html>

### 挑战

#### 简单

1. 暂时在编辑器中禁用`mainLight`，然后单独测试两个环境光类中的每一个。有几种方法可以禁用灯光。设置`.intensity`
   为零，不向场景添加灯光，或设置`mainLight.visible`为`false`。
   <details>
   <summary>查看答案</summary>
   <pre>
   const mainLight = new DirectionalLight('white', 0);
   // 或
   mainLight.visible = false;
   </pre>
   </details>
2. `HemisphereLight`的效果来自四个属性的相互作用：天空`.color`、`.groundColor`、`.intensity`和`.position`
   。尝试调整其中的每一个并观察结果。如果您先禁用主灯，您可能会发现这更容易查看。
   <details>
   <summary>查看答案</summary>
   <pre>
   const ambientLight = new HemisphereLight(
      'blue',
      'yellow',
      5,
   );
   ambientLight.position.set(1,1,1);
   </pre>
   </details>

#### 中等

1. 在编辑器中，我们给`HemisphereLight`和`DirectionalLight`
   都赋予了5的强度。我们这样做是为了突出环境光的效果，但是，通常情况下，我们会使直射光比环境光强。你可以通过调整两盏灯的强度和颜色来提高照明质量吗？
   <details>
   <summary>查看答案</summary>
   <pre>
   const mainLight = new DirectionalLight('white', 10);
   </pre>
   </details>
2. 添加更多的直射光怎么样，`DirectionalLight`或者是其他类型的一种？当你添加更多这些光照，并从不同的方向照射过来时，场景光照会有所改善吗？
   <details>
   <summary>查看答案</summary>
   <pre>
   // 创建一个环境光光源
   const ambientLight = new HemisphereLight('white', 'white', 5);
   ambientLight.position.set(-10, -10, -10);
   // 创建一个平行光光源
   const mainLight = new DirectionalLight('yellow', 100);
   mainLight.position.set(0, 0, 0);
   // 创建一个平行光光源2
   const mainLight2 = new DirectionalLight('blue', 50);
   mainLight2.position.set(10, 10, 10);
   return {
      ambientLight,
      mainLight,
      mainLight2
   };
   </pre>
   </details>
3. 更多的环境光呢？还是同时添加一个`AmbientLight`和一个`HemisphereLight`？这对现场有什么影响？
   <details>
   <summary>查看答案</summary>
   <pre>
   function createLights() {
      // 创建一个环境光光源
      const ambientLight = new AmbientLight('red', 5);
      // 创建一个半球光光源
      const hemisphereLight = new HemisphereLight('green', 'darkslategrey', 6);
      hemisphereLight.position.set(-10, -10, -10);
      // 创建一个平行光光源
      const mainLight = new DirectionalLight('blue', 8);
      mainLight.position.set(10, 10, 10);
      return {
        ambientLight,
        hemisphereLight,
        mainLight
      };
   }
   </pre>
   </details>

#### 困难

1. 从本章开始我们的问题的另一个解决方案是添加一个光作为相机的子级。这样，当相机移动时，光线也会移动。你可以把它想象成一个相机和手电筒绑在一边。使用这种方法，
   我们可以使用单个`DirectionalLight`或`SpotLight`照亮场景。试试这个。首先，删除`ambientLight`
   ，然后将相机添加到场景中，最后将`mainLight`添加到相机中。
   <details>
   <summary>查看答案</summary>
   在<code>src/World/World.js</code>中做如下修改:
   <pre>
   this.#scene.add(cube, this.#camera);
   this.#camera.add(mainLight);
   </pre>
   </details>

## 1.11 组织你的场景

地址: <http://localhost:5173/1.11/index.html>

### 挑战

#### 简单

1. 通过更改循环中的值`0.05`来增加和减少球体的数量。在进行更改之前尝试计算您想要多少个球体，而不是输入随机数。
   <details>
   <summary>查看答案</summary>
   <pre>
   球体数量 = 1 / 步进数(0.05)
   </pre>
   </details>
2. 尝试除球体和盒子之外的其他形状。比如 锥体、 圆柱体、 圆环，或 正十二面体？对于本练习，只需将`SphereBufferGeometry`
   替换为其他缓冲区几何体类之一。
   每种几何体的构造函数采用不同的参数，因此请仔细阅读文档，并记住在使用之前导入它们。
   <details>
   <summary>查看答案</summary>
   参见<a href="#中等">1.3 介绍世界应用程序#中等</a>
   </details>
3. 尝试调整`widthSegments`和`heightSegments`。在您注意到帧速率下降之前，您最高可以设置多高？值非常低的球体是什么样的？如果两个参数不使用相同的数字会怎样？
   <details>
   <summary>查看答案</summary>
   <code>widthSegments</code>和<code>heightSegments</code>的值越高，球体越细腻，加载时间越长。两者不一样时，会导致球体出现锯齿。
   </details>

#### 中等

1. 在`group.tick`方法内部，我们每一帧都减去一个旋转：`.rotation.z -= ...`。这将导致*顺时针*旋转。切换到+=，并注意旋转如何变为
   *逆时针*。
   如果添加旋转，则运动将逆时针。如果减去旋转，运动将是顺时针方向。**three.js中的正旋转是逆时针的**。
   <details>
   <summary>查看答案</summary>
   <pre>
   // group.rotation.z -= 0.05;
   group.rotation.z += 0.05
   </pre>
   </details>
2. 你能在这里创建一些其他的动画吗？请记住，您可以*为任何可以更改的属性*设置动画。
   <details>
   <summary>查看答案</summary>
   <pre>
    group.position.x += delta * 0.5;
    group.position.y += delta * 0.5;
   </pre>
   </details>

#### 困难

1.
你猜对了！你能让编辑器中的场景与[上面的场景](https://discoverthreejs.com/zh/book/first-steps/organizing-with-group/#scene-325476918)
完全匹配吗？
<details>
<summary>查看答案</summary>
在<code>src/World/components/camera.js</code>中做如下修改:
<pre>
camera.position.set(-3, 0, 2);
</pre>
在<code>src/World/components/meshGroup.js</code>中做如下修改:
<pre>
for (let i = 0; i < 1; i += 0.001) {
   const sphere = protoSphere.clone();
   sphere.position.x = Math.cos(2 * Math.PI * i);
   sphere.position.y = Math.sin(2 * Math.PI * i);
   sphere.position.z = -i * 5;
   sphere.scale.multiplyScalar(0.01 + i);
   group.add(sphere);
}
group.scale.multiplyScalar(2);
const radiansPerSecond = MathUtils.degToRad(30);
group.tick = (delta) => {
   group.rotation.z -= delta / 2 ;
}
</pre>
</details>
2. 回到原来的场景，你能在圆圈周围交替使用两种不同的形状吗？比如说，十个球体和十个盒子？如何在三种不同的形状之间交替？或者十种不同的形状呢？
   <details>
   <summary>查看答案</summary>
   <pre>
   function createMeshGroup() {
      const group = new Group();
      const geometry = new SphereBufferGeometry(0.25, 16, 16);
      const material = new MeshStandardMaterial({
         color: 'indigo',
      });
      const protoSphere = new Mesh(geometry, material);
      group.add(protoSphere);
      for (let i = 0; i < 1; i += 0.1) {
         let index = Math.floor(i * 20) % 3;
         const geometry = createGeometry(index);
         const mesh = new Mesh(geometry, material);
         mesh.position.x = Math.cos(2 * Math.PI * i);
         mesh.position.y = Math.sin(2 * Math.PI * i);
         mesh.scale.multiplyScalar(0.01 + i);
         group.add(mesh);
      }
      group.scale.multiplyScalar(2);
      const radiansPerSecond = MathUtils.degToRad(30);
      group.tick = (delta) => {
         // group.rotation.z -= delta * radiansPerSecond;
      }
      return group;
   }
   function createGeometry(index) {
      return {
         0: new BoxGeometry(0.25, 0.25, 0.25),
         1: new SphereBufferGeometry(0.25, 16, 16),
         2: new RingGeometry(0.25, 0.5, 16,)
      }[index];
   }
   </pre>
   </details>
3. 虽然您确实可以为任何属性设置动画，但最难的部分是制作平滑、重复的运动。旋转是一种特殊情况，因为您可以不断增加，并且物体会绕圈转。
   要为其他属性创建类似的行为，您可以使用三角函数`sin`、`cos`和`tan`。我们使用`cos`和`sin`
   将球体放置在一个圆圈中，您可以执行类似的操作来将组的位置移动到一个圆圈中。
   你能做到吗？没有提示，毕竟，这应该是一个艰巨的挑战！
   <details>
   <summary>查看答案</summary>
   <pre>
   let i = 0;
   group.tick = (delta) => {
      // group.rotation.z += delta * radiansPerSecond;
      group.position.x -= Math.cos(Math.PI * i * 2) * 0.1;
      group.position.y -= Math.sin(Math.PI * i * 2) * 0.1;
      i += 0.01;
    }
   </pre>
   </details>

## 1.12 内置几何体

地址: <http://localhost:5173/1.12/index.html>

### 挑战

#### 简单

1. 有什么比玩具火车更好的呢？两个玩具火车怎么样？你可以`.clone`
   整个火车之后在创建它。现在就这样做，然后调整第二列火车的`.position`。不要忘记将它添加到场景中！
   <details>
   <summary>查看答案</summary>
   在<code>src/World/World.js</code>中做如下修改:
   <pre>
   const train2 = train.clone();
   train2.position.set(4, -3, 0);
   this.#loop.updatables.push(controls, train);
   this.#scene.add(ambientLight, mainLight, train, train2);
   </pre>
   </details>
2. 有什么比两辆玩具火车更好的呢？ 在循环中创建一大堆火车。在循环中，确保移动每辆新火车，使它们不会全部堆叠在一起，然后将它们添加到场景中。看看有多少有趣的方式可以定位克隆的火车。
   <details>
   <summary>查看答案</summary>
   在<code>src/World/World.js</code>中做如下修改:
   <pre>
   for (let i = 0; i < 10; i ++) {
      const newTrain = train.clone();
      newTrain.position.y -= i * 4;
      this.#scene.add(newTrain);
   }
   </pre>
   </details>

#### 中等

1. 你能在货舱里创造一个窗户吗？没有办法在几何体上打孔（不使用外部库），因此您必须从几个盒子几何体中重建货舱。一种方法是为地板创建一个大盒子，然后为屋顶创建另一个大盒子，
   最后，围绕屋顶边缘创建四个用于支柱的小盒子（或圆柱体）。
   <details>
   <summary>查看答案</summary>
   在<code>src/World/components/Train/geometries.js</code>中做如下修改:
   <pre>
   function createGeometries() {
      const top = new BoxBufferGeometry(2, 0.5, 1.5);
      const bottom = new BoxBufferGeometry(2, 0.5, 1.5);
      // 创建柱子
      const cylinder = new CylinderBufferGeometry(0.1, 0.1, 1.5, 12);
      const nose = new CylinderBufferGeometry(0.75, 0.75, 3, 12);
      const wheel = new CylinderBufferGeometry(0.4, 0.4, 1, 16);
      const chimney = new CylinderBufferGeometry(0.3, 0.1, 0.5);
      return {
         cylinder,
         top,
         bottom,
         nose,
         wheel,
         chimney
      }
   }
   </pre>
   在<code>src/World/components/Train/meshes.js</code>中做如下修改:
   <pre>
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
   </pre>
   在<code>src/World/components/Train/Train.js</code>中做如下修改:
   <pre>
   this.add(
      this.meshes.top,
      this.meshes.bottom,
      this.meshes.cabin,
      this.meshes.nose,
      this.meshes.chimney,
      this.meshes.smallWheelRear,
      this.meshes.smallWheelCenter,
      this.meshes.smallWheelFront,
      this.meshes.bigWheel
   )
   </pre>
   </details>
2. 没有轨道的火车走不了多远！在车轮下添加一些轨道。创建两个主要轨道，然后在轨道下创建一个枕木并使用克隆创建其余部分。
   <details>
   <summary>查看答案</summary>
   在<code>src/World/components/Train/geometries.js</code>中做如下修改:
   <pre>
   // 轨道
   const track = new CylinderBufferGeometry(0.1, 0.1, 5, 16);
   // 枕木
   const pillar = new CylinderBufferGeometry(0.1, 0.1, 1, 16);
   return {
      ...
      track,
      pillar
   }
   </pre>
   在<code>src/World/components/Train/meshes.js</code>中做如下修改:
   <pre>
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
      ...,
      track,
      track2,
      pillars
   }
   </pre>
   在<code>src/World/components/Train/Train.js</code>中做如下修改:
   <pre>
   this.add(
      ...,
      this.meshes.track,
      this.meshes.track2,
      this.meshes.pillars
   )
   </pre>
   </details>
3. 每辆火车都需要一名售票员！创建一个站在火车旁边的简单人形（如乐高角色）。
   <details>
   <summary>查看答案</summary>
   在<code>src/World/components/Train/geometries.js</code>中做如下修改:
   <pre>
   // 售票员头部
   const head = new SphereGeometry(0.3, 16, 16);
   // 售票员身体
   const body = new BoxBufferGeometry(1, 0.6, 0.6);
   // 左腿
   const leftLeg = new CylinderBufferGeometry(0.1, 0.1, 0.7,32);
   // 右腿
   const rightLeg = new CylinderBufferGeometry(0.1, 0.1, 0.7,32);
   </pre>
   在<code>src/World/components/Train/meshes.js</code>中做如下修改:
   <pre>
   // 售票员头部
   const head = new Mesh(geometries.head, materials.detail);
   head.position.set(1.5,1.5, 1.5);
   // 售票员身体
   const body = new Mesh(geometries.body, materials.body);
   body.position.set(1.5,0.9,1.5);
   // 左腿
   const leftLeg = new Mesh(geometries.leftLeg, materials.detail);
   leftLeg.position.set(1.3,0.32,1.5);
   // 右腿
   const rightLeg = new Mesh(geometries.rightLeg, materials.detail);
   rightLeg.position.set(1.7,0.32,1.5);
   </pre>
   新建一个<code>src/World/components/Train/Conductor.js</code>文件，然后在其中中添加：
   <pre>
   import {Group} from "three";
   import {createMeshes} from "./meshes";
   class Conductor extends Group {
      constructor() {
         super();
         this.meshes = createMeshes();
         this.add(
            this.meshes.head,
            this.meshes.body,
            this.meshes.leftLeg,
            this.meshes.rightLeg
         )
      }
   }
   export {
      Conductor
   }
   </pre>
   在<code>src/World/World.js</code>中做如下修改:
   <pre>
   const conductor = new Conductor();
   this.#scene.add(ambientLight, mainLight, train, conductor);
   </pre>
   </details>

#### 困难

1. 你还能做些什么来改善这个场景？从火车的烟囱冒出一些气泡怎么样（用`SphereBufferGeometry`来制造气泡）。天上有些云怎么样？如何为烟雾和云设置动画？
   <details>
   <summary>查看答案</summary>
   气泡：
   <pre>
   import {Mesh, MeshStandardMaterial, SphereBufferGeometry} from "three";
   class Bubble extends Mesh {
      constructor(x, y, z) {
         super();
         // 设置气泡材料
         const material = new MeshStandardMaterial({
            color: 'white',
            transparent: true,
         })
         // 设置气泡几何体
         const geometry = new SphereBufferGeometry(0.15, 32, 32)
         // 设置气泡
         const bubble = new Mesh(geometry, material);
         let position = bubble.position;
         bubble.position.set(x, y, z);
         let i = 0;
         let j = 0;
         bubble.tick = (delta) => {
            bubble.position.x = x + i;
            bubble.position.y = y + j;
            if (i >= 0.24) {
               i = 0;
            }
            if (j >= 0.24) {
               j = 0;
            }
            i += 0.02;
            j += 0.02;
         }
         return bubble;
      }
   }
   export {
      Bubble
   }
   </pre>
   在<code>src/World/World.js</code>中做如下修改:
   <pre>
   const bubbles = new Group();
   for (let i = 0; i < 3; i++) {
      const bubble = new Bubble(-2 + 0.4 * i, 2.4 + 0.4 * i, 0);
      bubbles.add(bubble);
   }
   this.#scene.add(...,...bubbles.children);
   </pre>
   </details>
## 1.13 以glTF格式加载3D模型
地址：<http://localhost:5173/1.13/index.html>
### 挑战
#### 简单
1. 看看那只抢风头的鹦鹉！切换鸟的位置，让鹳和火烈鸟各自轮流带领鸟群。
   <details>
   <summary>查看答案</summary>
   鹳：在<code>src/World/components/birds/birds.js</code>中做如下修改:
   <pre>
   parrot.position.set(0, -2.5, -10);
   stork.position.set(0, 0, 2.5);
   </pre>
   火烈鸟：在<code>src/World/components/birds/birds.js</code>中做如下修改:
   <pre>
   parrot.position.set(7.5, 0, -10);
   flamingo.position.set(0, 0, 2.5);
   </pre>
   </details>
2. 或者，将鸟类留在原地，并尝试将controls.target注意力集中在另外两只鸟中的一只而不是鹦鹉身上。
   <details>
   <summary>查看答案</summary>
   <pre>
   // this.#controls.target.copy(stork.position);
   this.#controls.target.copy(flamingo.position);
   </pre>
   </details>
#### 中等
1. 添加一个带有*Switch Focus*文本的`<button>`的元素。每当您单击此按钮时，相机应聚焦在下一只鸟身上。你可以随心所欲地实现它， 
但是，如果你想按照我们目前的工作来做，你应该在`main.js`中设置按钮，然后用一个方法扩展`World`类接口，将焦点移到下一个鸟。
您可以命名此方法为`World.focusNext`或类似的方法。
   <details>
   <summary>查看答案</summary>
   请自行实现它！
   </details>
#### 困难
1. 实现上面的按钮后，您将拥有三个摄像机视图，每只鸟一个。添加第四个视图，它是场景的缩小概览，可让您看到所有三只鸟。对于这第四个视图，
您可能需要调整`camera.position`以及`controls.target`。
   <details>
   <summary>查看答案</summary>
   请自行实现它！
   </details>
2. 现在，让相机从一个视点平滑地动画化到下一个视点。您必须同时为`camera.position`和`controls.target`设置动画。最好的地方是在`controls.tick`方法内。
   <details>
   <summary>查看答案</summary>
   请自行实现它！
   </details>
## 1.14 Three.js动画系统
地址：<http://localhost:5173/1.14/index.html>
### 挑战
#### 简单
`AnimationAction`有更多的动画控件`.play`和`.stop`。现在试试其中的一些。
1. 您可以使用`.startAt`延迟动画的开始。测试一下。
2. 您可以使用`.timeScale`属性控制动画的速度。您可以直接设置值，也可以使用`.setEffectiveTimeScale`方法。
3. 利用`.halt`逐渐减慢动画停止。
   <details>
   <summary>查看答案</summary>
   <pre>
    action.startAt(1)
      .setEffectiveTimeScale(1)
      .halt(6)
      .play()
   </pre>
   </details>