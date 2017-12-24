import React from "react";
import { NavLink } from "react-router-dom";

import "../styles.css";
import I18n from "i18n-js";

import * as THREE from "three";
import OrbitControls from "orbit-controls-es6";

export default class MapNavigationPage extends React.Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    const backgroundColor = new THREE.Color(0xc5eafd);
    const scene = new THREE.Scene();
    scene.background = backgroundColor;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 10;
    camera.position.y = -2;
    camera.rotation.x = 15 * Math.PI / 180;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    //This makes Orbit Controls to rotate around correct Azimuth angle
    camera.up.set(0, 0, 1);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 3;
    //    controls.maxDistance = 10;
    // controls.minAzimuthAngle = Math.PI / 2; //do not let go below ground
    // controls.maxAzimuthAngle = 0; //do not let go below ground
    controls.minPolarAngle = 0; //inclination to look top-down
    controls.maxPolarAngle = Math.PI / 2.5; // 90% inclination to ground

    //Start adding geometries
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.MeshLambertMaterial({
      color: 0xe69900,
      side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshLambertMaterial({ color: "#ff0000" });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.z = 1;
    cube.castShadow = true;

    //Stop adding geometries
    scene.add(plane);
    scene.add(cube);

    //Add lights
    var ambientLight = new THREE.AmbientLight(0x0c0c0c);
    scene.add(ambientLight);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    var mainLight = new THREE.DirectionalLight();
    mainLight.position.set(0, -17, 30);
    mainLight.castShadow = true;
    scene.add(mainLight);

    var jLoader = new THREE.JSONLoader();
    jLoader.load("assets/5FloorBuilding.json", function(geometry, materials) {
      for (var i = 0; i < materials.length; i++) {
        var m = materials[i];
        m.morphTargets = true;
        console.log(m);
      }
      let mesh = new THREE.Mesh(geometry, materials);
      mesh.scale.set(0.1, 0.1, 0.1);
      mesh.position.x = 1;
      mesh.rotation.x = Math.PI / 2;
      mesh.castShadow = true;
      scene.add(mesh);
    });

    // jLoader.load("assets/map.json", function(geometry, materials) {
    //   let object = new THREE.Mesh(
    //     geometry,
    //     new THREE.MeshLambertMaterial({ color: "#23467f" })
    //   );
    //   //        model = object;
    //   //object.scale = 0.5;
    //   object.scale.set(0.5, 0.5, 0.5);
    //   object.position.y = 1;
    //   object.rotation.x = Math.PI / 2;
    //   object.receiveShadow = true;
    //   object.position.z = -1;
    //   scene.add(object);
    //  });

    // var helper = new THREE.CameraHelper(mainLight.shadow.camera);
    // scene.add(helper);

    // var spotLight = new THREE.SpotLight(0xffffff);
    // spotLight.position.set(-2, 0, 0);
    // spotLight.castShadow = true;
    // scene.add(spotLight);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.cube = cube;

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div className="container">
        <NavLink to="/">{I18n.t("home")}</NavLink>
        <div>
          <h1>{I18n.t("mapNavigation")}</h1>
          <div
            // style={{ width: '400px', height: '400px' }}
            style={{
              width: "100%",
              height: "74%",
              border: "1px solid #a0c4ff"
            }}
            ref={mount => {
              this.mount = mount;
            }}
          />
        </div>
      </div>
    );
  }
}
