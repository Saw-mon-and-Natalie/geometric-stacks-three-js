import {
  PlaneBufferGeometry,
  ShaderMaterial,
  Mesh,
} from 'three'

import * as Stats from 'stats-js'

import FragShader from './shaders/frag.glsl'
import VertShader from './shaders/vert.glsl'
import CustomScene from './Scene'

class Scene01 extends CustomScene {
  constructor() { super() }

  loadScene() {
    const shaderMaterial = new ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: VertShader,
      fragmentShader: FragShader,
    })
    const geometry = new PlaneBufferGeometry(2, 2)
    const plane = new Mesh(geometry, shaderMaterial)
    this.add(plane)
  }
}

export default Scene01
