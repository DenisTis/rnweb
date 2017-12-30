import * as THREE from "three";
//import OrbitControls from "orbit-controls-es6";
import OrbitControls from "../../commons/OrbitControlsEnh";
import GLTF2Loader from "three-gltf2-loader";
GLTF2Loader(THREE);

export default class MapScene {
  constructor(parentComponent) {
    //    this.updateLoadedPercentage = parentComponent.props.updateLoadedPercentage;
    this.parentComponent = parentComponent;
    this.animate = this.animate.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }
  initialize(mount) {
    this.mount = mount;
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    const backgroundColor = new THREE.Color(0xc5eafd);
    const scene = new THREE.Scene();
    scene.background = backgroundColor;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = -20;
    camera.position.y = 30;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);

    this.controls = new OrbitControls(camera, renderer.domElement);
    //this.controls.autoRotate = true;
    this.controls.minDistance = 3;
    this.controls.maxDistance = 50;
    this.controls.minPolarAngle = 0; //inclination to look top-down
    this.controls.maxPolarAngle = Math.PI / 2.5; // around 10% inclination to ground

    //Add lights
    //This is the environment light
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    var mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
    mainLight.position.set(0, 20, -20);
    mainLight.castShadow = true;
    scene.add(mainLight);

    // var helper = new THREE.CameraHelper(mainLight.shadow.camera);
    // scene.add(helper);

    // var jLoader = new THREE.JSONLoader();
    // jLoader.load("assets/5FloorBuilding.json", function(geometry, materials) {
    //   for (var i = 0; i < materials.length; i++) {
    //     var m = materials[i];
    //     m.morphTargets = true;
    //   }
    //   let mesh = new THREE.Mesh(geometry, materials);
    //   mesh.scale.set(0.1, 0.1, 0.1);
    //   mesh.position.x = -4;
    //   mesh.castShadow = true;
    //   scene.add(mesh);
    // });

    let loader = new THREE.GLTFLoader();
    loader.load(
      "assets/scene.glb",
      function(gltf) {
        // //update as 100% loaded
        // this.onLoad({total: 1});
        //TODO - in the loaded model, shadows are not working.
        //I still did not find out how to solve it.
        //        gltf.scene.castShadow = true;
        for (let child of gltf.scene.children) {
          // child.castShadow = true;
          // child.receiveShadow = true;
          for (let subChild of child.children) {
            subChild.castShadow = true;
            subChild.receiveShadow = true;
            console.log("test no console");
          }
          //scene.add(child);
        }
        scene.add(gltf.scene);
        //scene.fog = THREE.FogExp2(0xefd1b5, 0.0025);

        // gltf.animations; // Array<THREE.AnimationClip>
        // gltf.scene; // THREE.Scene
        // gltf.scenes; // Array<THREE.Scene>
        // gltf.cameras; // Array<THREE.Camera>
      },
      // called when loading is in progresses
      this.onLoad,
      // called when loading has errors
      function(error) {
        console.log("An error happened");
        console.log(error);
      }
    );

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  onLoad(xhr) {
    let loaded = Math.floor(xhr.loaded / xhr.total * 100) + "";
    console.log(loaded + "% loaded");
    this.parentComponent.updateLoadedPercentage(loaded);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
    this.mount.removeChild(this.renderer.domElement);
  }

  animate() {
    this.controls.update();

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }
}
