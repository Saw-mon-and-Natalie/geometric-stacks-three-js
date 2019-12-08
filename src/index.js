import {
  Scene,
  // PerspectiveCamera,
  OrthographicCamera,
  WebGLRenderer,
  // BoxGeometry,
  PlaneBufferGeometry,
  // TextureLoader,
  // MeshStandardMaterial,
  // MeshLambertMaterial,
  ShaderMaterial,
  Mesh,
  // DirectionalLight,
  // RepeatWrapping,
} from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as Stats from 'stats-js'

// import WireFrameTexture from './textures/wireframe-01.png'

import FragShader from './shaders/frag.glsl'
import VertShader from './shaders/vert.glsl'

const canvas = document.createElement('canvas')
const context = canvas.getContext('webgl2', { alpha: false })
const renderer = new WebGLRenderer({ canvas, context, antialias: true })

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new Scene()

const uniforms = { time: { value: 1.0 } }
const shaderMaterial = new ShaderMaterial({
  uniforms,
  vertexShader: VertShader,
  fragmentShader: FragShader,
})

const geometry = new PlaneBufferGeometry(2, 2)
const orthCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)

const plane = new Mesh(geometry, shaderMaterial)
scene.add(plane)

// const camera = new PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// )

// const geometry = new BoxGeometry(1, 1, 1)
// const texture = new TextureLoader().load(WireFrameTexture)
// texture.wrapS = RepeatWrapping
// texture.wrapT = RepeatWrapping
// texture.repeat.set(4,4)
// // const material = new MeshPhongMaterial({ color: 0x00ff00 })
// const material = new MeshLambertMaterial({
//   map: texture,
// })
// const cube = new Mesh(geometry, material)
// scene.add(cube)

// camera.position.z = 5

// const color = 0xffffff
// const intensity = 1
// const light = new DirectionalLight(color, intensity)
// const light2 = new DirectionalLight(color, intensity)
// light.position.set(-1, 2, 4)
// light2.position.set(1, -2, -4)
// scene.add(light)
// scene.add(light2)

// const controls = new OrbitControls(camera, renderer.domElement)

const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)
document.body.style.margin = 0

function animate() {
  requestAnimationFrame(animate)

  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01
  stats.begin()

  uniforms.time.value += 0.01
  renderer.render(scene, orthCamera)
  // controls.update()

  stats.end()
}

animate()
