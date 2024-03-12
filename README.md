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

1. 重新创建场景[Lighting and Depth](https://discoverthreejs.com/zh/book/first-steps/physically-based-rendering/#lighting-and-depth)，减去动画（提示：使用两个网格和两个材质）
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
3. 添加一个启动和停止动画循环的`click`事件监听器（或者，如果你想花哨的话，一个按钮）。在`main.js`中使用`World.start`和`World.stop`执行此操作。
   <details>
   <summary>查看答案</summary>
   对`main.js`做如下改造：
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
4. 打开[MeshStandardMaterial文档](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial)页面。该材质共有11个纹理贴图插槽，每个插槽的名称中都包含`map`。你能找到所有的吗？
   <details>
   <summary>查看答案</summary>
   <pre>
   该文档中所有以`map`结束的属性都表示纹理贴图槽。
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
3. 打开[Texture文档](https://threejs.org/docs/#api/en/textures/Texture)。通读可以在纹理上设置的各种属性。尝试调整`.offset`、`.repeat`、`.rotation`和`.center`属性。
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
1. 材质中的每个纹理槽都与一个或多个属性（如`.color`和`.ma`p）相关联。贴图要么是一个[调制属性](https://discoverthreejs.com/zh/book/first-steps/textures-intro/#types-of-texture)
（同样，像`.color`和`.map`），或者它本身被一些其他属性调制（像`.bumpMapand`和`.bumpScale`）。当您测试不同插槽中的纹理时，请尝试调整这些调制属性。其中一些是颜色（如`.color`和`emissive`），
另一些是矢量（如`.normalScale`），但大多数是简单数字（如`.bumpScale`和`.displacementScale`）。在每种情况下，文档都清楚地说明了这一点。
   <details>
   <summary>查看答案</summary>
   请参考<a href="https://threejs.org/docs/#api/zh/materials/MeshStandardMaterial" target="_blank">https://threejs.org/docs/#api/zh/materials/MeshStandardMaterial</a>
   </details>
2. 我们在上面提到，`Texture`类是`HTML`图像的包装器。如果您将`texture`打印到控制台，您应该能够找到该图像。您可以在控制台中找到`uv-test-bw.png`的URL并在新浏览器选项卡中打开它吗？
    <details>
   <summary>查看答案</summary>
   <code>uv-test-bw.png</code>的url是<a target="_blank" href="http://localhost:5173/1.8/assets/textures/uv-test-bw.png">http://localhost:5173/1.8/assets/textures/uv-test-bw.png</a>
   </details>

## 1.9 使用相机控制插件扩展three
地址: <http://localhost:5173/1.9/index.html>
### 挑战
#### 简单
1. 尝试调整控件的[最小和最大缩放级别](https://discoverthreejs.com/zh/book/first-steps/camera-controls/#limiting-zoom)。如果你让这两个值相等会发生什么？或使`minDistance`大于`maxDistance`？
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
3. 尝试[禁用三种控件模式中的每一种](https://discoverthreejs.com/zh/book/first-steps/camera-controls/#enable-or-disable-the-controls)，一次禁用一种，然后观察结果。
   <details>
   <summary>查看答案</summary>
   <pre>
   controls.enableRotate = false;
   controls.enableZoom = false;
   controls.enablePan = false;
   </pre>
   </details>
4. [调整阻尼速度](https://discoverthreejs.com/zh/book/first-steps/camera-controls/#enable-damping-for-added-realism) (`.dampingFactor`)以了解阻尼的工作原理。大于0和小于1的值效果最好。
   <details>
   <summary>查看答案</summary>
   <pre>
   controls.dampingFactor = 0.6;
   </pre>
   </details>
#### 中等
1. 尝试调整控件的[水平和垂直旋转限制](https://discoverthreejs.com/zh/book/first-steps/camera-controls/#limiting-rotation)。请记住，如果您以度为单位，则必须转换为弧度。如果您需要提醒它是如何工作的，请查看`cube.js`。
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
   在`src/World/World.js`中添加以下代码：
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
   在`src/main.js`中做如下修改：
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
1. 设置在使用控件时[按需渲染](https://discoverthreejs.com/zh/book/first-steps/camera-controls/#rendering-on-demand-with-orbitcontrols)，包括在纹理加载后以及在调整场景大小时生成新帧。
   <details>
   <summary>查看答案</summary>
   在`src/World/components/cube.js`中做如下修改:
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
   在`src/World/World.js`中做如下修改:
   <pre>
   const cube = createCube(()=>{
      this.render();
   });
   resizer.onResize = () => {
      this.render();
   }
   </pre>
   </details>
2. 你能在几秒钟内让相机和控件的目标动画到一个新的位置吗？也许在页面上添加一个按钮，当你点击它时，播放动画。看看当您只为相机或目标设置动画时会发生什么，或者当您在制作动画时不禁用控件时会发生什么。设置此动画的最佳位置是在控件controls模块中。
   <details>
   <summary>查看答案</summary>
   在`src/World/components/controls.js`中做如下修改:
   <pre>
   controls.tick = () => {
      if (controls.target.x >= -4) {
         controls.target.x -= 0.1;
      }
      controls.update();
   }
   </pre>
   在`src/World/World.js`中做如下修改:
   <pre>
   stop() {
      this.#loop.stop();
      this.#controls.reset();
   }
   </pre>
   在`src/main.js`中做如下修改:
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