varying vec2 vUv;

void main(){
    vUv=uv / 2.0;
    gl_Position=vec4(position,1.0);
}