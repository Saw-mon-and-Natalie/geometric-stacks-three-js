import {
    Scene,
    OrthographicCamera,
    WebGLRenderer,
  } from 'three'
  
  import * as Stats from 'stats-js'
  
  abstract class CustomScene extends Scene {
      private canvas: HTMLCanvasElement
      private context: WebGL2RenderingContext
      private renderer: WebGLRenderer
      private camera: OrthographicCamera
      protected uniforms: any
      private stats: any

    constructor() {
      super()
      this.canvas = document.createElement('canvas')
      this.context = this.canvas.getContext('webgl2', { alpha: false })
      this.renderer = new WebGLRenderer({
        canvas: this.canvas,
        context: this.context,
        antialias: true,
      })
  
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(this.renderer.domElement)
      this.stats = new Stats()
  
      this.uniforms = { time: { value: 1.0 } }
      this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)
    }
  
    init(): void {
      this.loadScene()
      this.loadStats()
      this.animate()
    }
  
    abstract loadScene(): void
  
    loadStats(): void {
      this.stats.showPanel(0)
      document.body.appendChild(this.stats.dom)
      document.body.style.margin = '0'
    }
  
    animate(): void {
      requestAnimationFrame(() => this.animate())
  
      this.stats.begin()
  
      this.uniforms.time.value += 0.01
      this.renderer.render(this, this.camera)
  
      this.stats.end()
    }
  }
  
  export default CustomScene
  