import { Scene, OrthographicCamera, WebGLRenderer } from 'three'

import * as Stats from 'stats-js'

declare abstract class CustomScene extends Scene {
  private canvas: HTMLCanvasElement
  private context: WebGL2RenderingContext
  private renderer: WebGLRenderer
  private camera: OrthographicCamera
  private uniforms: any
  private stats: any

  constructor()
  
  init(): void
  abstract loadScene(): void
  loadStats(): void
  animate(): void
}
