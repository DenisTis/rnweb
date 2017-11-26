import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

import I18n from 'i18n-js';
import styles from '../styles/common';

import * as THREE from 'three';
import ExpoTHREE from 'expo-three';
  
export default class Menupage extends React.Component {
  static navigationOptions = {
    title: I18n.t('mapNavigation'),
    headerStyle: styles.navigationHeader,
    headerTitleStyle: styles.navigationHeaderTitle,
    //that centers text when back button exists
    headerRight: <View/>
  }

  render() {
    return (
      <Expo.GLView
        style={{ flex: 1 }}
        onContextCreate={this.onGLContextCreated.bind(this)}
      />
    );
  }

  // This is called by the `Expo.GLView` once it's initialized
  onGLContextCreated = async (gl) => {
    // Based on https://threejs.org/docs/#manual/introduction/Creating-a-scene
    // In this case we instead use a texture for the material (because textures
    // are cool!). All differences from the normal THREE.js example are
    // indicated with a `NOTE:` comment.

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);

    // NOTE: How to create an `Expo.GLView`-compatible THREE renderer
    const renderer = ExpoTHREE.createRenderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    // var ambLight = new THREE.AmbientLight(0x404040);
    // scene.add(ambLight);      

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000
      // // NOTE: How to create an Expo-compatible THREE texture
      // map: await ExpoTHREE.createTextureAsync({
      //   asset: Expo.Asset.fromModule(require('./assets/icons/app-icon.png')),
      // }),
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const render = () => {
      requestAnimationFrame(render);

      cube.rotation.x += 0.07;
      cube.rotation.y += 0.04;

      renderer.render(scene, camera);

      // NOTE: At the end of each frame, notify `Expo.GLView` with the below
      gl.endFrameEXP();
    }
    render();
  }  
}

