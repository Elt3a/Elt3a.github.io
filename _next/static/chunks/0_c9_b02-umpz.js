(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54666,35478,e=>{let t=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;function r(e,t,r){let a=e.createShader(t);if(!a)throw Error("createShader failed");if(e.shaderSource(a,r),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(a)??"";e.deleteShader(a);let o=r.split("\n").map((e,t)=>`${String(t+1).padStart(4)}  ${e}`).join("\n");throw Error(`Shader compile error:
${t}
${o}`)}return a}function a(e,t,r,o={}){let{float:c=!1,linear:l=!0,channels:i=4}=o,x=e.createTexture(),f=e.createFramebuffer();if(!x||!f)throw Error("createTarget failed");e.bindTexture(e.TEXTURE_2D,x);let n=l?e.LINEAR:e.NEAREST;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n);let m=o.wrap??e.CLAMP_TO_EDGE;if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,m),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,m),c){let a=1===i?e.R16F:2===i?e.RG16F:e.RGBA16F,o=1===i?e.RED:2===i?e.RG:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,a,t,r,0,o,e.HALF_FLOAT,null)}else e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null);return e.bindFramebuffer(e.FRAMEBUFFER,f),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,x,0),e.viewport(0,0,t,r),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null),{tex:x,fbo:f,w:t,h:r}}function o(e,t){t&&(e.deleteTexture(t.tex),e.deleteFramebuffer(t.fbo))}async function c(e,t,r,a){let o=getComputedStyle(document.documentElement).getPropertyValue("--font-mono").trim()||"monospace",c=Math.round(.66*a),l=`400 ${c}px ${o}`;try{await document.fonts.load(l,t.join(""))}catch{}let i=Math.ceil(t.length/16),x=document.createElement("canvas");x.width=16*r,x.height=i*a;let f=x.getContext("2d");if(!f)throw Error("2d context failed");return f.fillStyle="#000",f.fillRect(0,0,x.width,x.height),f.fillStyle="#fff",f.font=l,f.textAlign="center",f.textBaseline="middle",t.forEach((e,t)=>{let o=Math.floor(t/16)*a+a/2;f.fillText(e,t%16*r+r/2,o)}),{tex:function(e,t,r={}){let{linear:a=!0,mipmap:o=!1,flipY:c=!1}=r,l=e.createTexture();if(!l)throw Error("createTexture failed");return e.bindTexture(e.TEXTURE_2D,l),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,c),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,a?e.LINEAR:e.NEAREST),o?(e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR)):e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,a?e.LINEAR:e.NEAREST),l}(e,x,{linear:!0,mipmap:!0}),cols:16,rows:i}}e.s(["F",0,t,"Q",0,function(e,t,r,a){e.bindFramebuffer(e.FRAMEBUFFER,t?t.fbo:null),e.viewport(0,0,t?t.w:r??e.drawingBufferWidth,t?t.h:a??e.drawingBufferHeight)},"g",0,function(e,t,r){e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,r)},"Y",0,c,"_",0,function(e,t,r,c={}){let l={read:a(e,t,r,c),write:a(e,t,r,c),swap(){let e=l.read;l.read=l.write,l.write=e},dispose(){o(e,l.read),o(e,l.write)}};return l},"R",0,function(e,t,a){let o=e.createProgram();if(!o)throw Error("createProgram failed");let c=r(e,e.VERTEX_SHADER,t),l=r(e,e.FRAGMENT_SHADER,a);if(e.attachShader(o,c),e.attachShader(o,l),e.linkProgram(o),e.deleteShader(c),e.deleteShader(l),!e.getProgramParameter(o,e.LINK_STATUS))throw Error(`Program link error: ${e.getProgramInfoLog(o)}`);let i=new Map;return{handle:o,use:()=>e.useProgram(o),u:t=>(i.has(t)||i.set(t,e.getUniformLocation(o,t)),i.get(t)??null),dispose:()=>e.deleteProgram(o)}},"D",0,a,"n",0,o,"o",0,function(e){e.drawArrays(e.TRIANGLES,0,3)},"h",0,function(e,t,r,a,o=!1){let c=e.createTexture();if(!c)throw Error("createTexture failed");e.bindTexture(e.TEXTURE_2D,c),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.R8,t,r,0,e.RED,e.UNSIGNED_BYTE,a),e.pixelStorei(e.UNPACK_ALIGNMENT,4);let l=o?e.LINEAR:e.NEAREST;return e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),c}],54666);let l=`#version 300 es
precision highp float;
precision highp int;
`,i=`
#ifndef FBM_OCTAVES
#define FBM_OCTAVES 5
#endif

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}

float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}

vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float fbm(vec3 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < FBM_OCTAVES; i++) {
    sum += amp * snoise(p);
    p = p * 2.03 + vec3(17.1, 3.7, 9.3);
    amp *= 0.5;
  }
  return sum;
}

mat2 rot(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, s, -s, c);
}
`,x=`
const vec3 C_BASE = vec3(0.031, 0.039, 0.0);
const vec3 C_DEEP = vec3(0.012, 0.16, 0.055);
const vec3 C_ACID = vec3(0.071, 0.949, 0.110);
const vec3 C_PALE = vec3(0.925, 1.0, 0.784);

vec3 ink(float t) {
  t = clamp(t, 0.0, 1.0);
  vec3 c = mix(C_BASE, C_DEEP, smoothstep(0.0, 0.38, t));
  c = mix(c, C_ACID, smoothstep(0.32, 0.78, t));
  return mix(c, C_PALE, smoothstep(0.74, 1.0, t));
}

vec3 iri(float t, float phase) {
  vec3 c = ink(t);
  vec3 tint = mix(vec3(0.08, 0.95, 0.74), vec3(0.72, 1.0, 0.2), 0.5 + 0.5 * sin(phase));
  float k = smoothstep(0.3, 0.75, t) * (1.0 - smoothstep(0.85, 1.0, t)) * 0.4;
  return mix(c, tint * max(c.g, max(c.r, c.b)), k);
}

// Относительная яркость по WCAG (через гамму 2.2)
float lum(vec3 c) {
  return dot(pow(max(c, 0.0), vec3(2.2)), vec3(0.2126, 0.7152, 0.0722));
}

/* Гасим и заодно уводим в зелёный: салатовый, просто притушенный, выходит
   серым. Красный и синий убираются сильнее зелёного, поэтому яркость
   после этого только ниже потолка */
vec3 capLum(vec3 c, float cap) {
  float L = lum(c);
  if (L <= cap) return c;
  float k = pow(cap / L, 1.0 / 2.2);
  return c * k * mix(vec3(1.0), vec3(0.3, 1.0, 0.36), 1.0 - k);
}

// Мягкий потолок для сложенного света: до 0.75 как есть, выше — поджимается
vec3 soft(vec3 c) {
  vec3 e = max(c - 0.75, 0.0);
  return min(c, 0.75) + e / (1.0 + e * 2.0);
}
`,f=`
uniform vec4 uCalm[8];
uniform float uCalmK[8];
uniform int uCalmN;
uniform float uCalmFeather;

float calmAt(vec2 p) {
  float k = 0.0;
  for (int i = 0; i < 8; i++) {
    if (i >= uCalmN) break;
    vec4 r = uCalm[i];
    vec2 c = 0.5 * (r.xy + r.zw);
    vec2 h = 0.5 * (r.zw - r.xy);
    vec2 d = abs(p - c) - h;
    float dist = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
    // У крупного блока край мягче: под словом в полэкрана яркая волна
    // иначе гаснет заметным прямоугольником
    float f = clamp(min(h.x, h.y) * 0.6, uCalmFeather, uCalmFeather * 3.5);
    k = max(k, (1.0 - smoothstep(-f * 0.2, f, dist)) * uCalmK[i]);
  }
  return k;
}

float calmCap(float k) {
  return exp(k * log(0.016));
}

// Зерно плёнки: меняется каждый кадр, заодно убирает полосы в тёмных градиентах
float grain(vec2 p, float t) {
  return hash12(p + fract(t * 7.31) * vec2(311.7, 183.3)) - 0.5;
}
`,n=`
uniform vec4 uBursts[4];
`,m=`
uniform sampler2D uTitle;
uniform float uTitleOn;
uniform vec4 uWord;

float titleD(vec2 p) {
  if (uTitleOn < 0.5) return 1e4;
  return texture(uTitle, vec2(p.x / uRes.x, 1.0 - p.y / uRes.y)).r;
}

float moat(float td, float width) {
  return 1.0 - smoothstep(4.0, width, td);
}
`;e.s(["Z",0,n,"A",0,f,"B",0,x,"U",0,l,"K",0,i,"s",0,m],35478)},44772,e=>{var t=e.i(54666),r=e.i(35478);let a=r.U+r.K+r.B+r.A+r.Z+`
uniform vec2 uRes;
uniform float uTime;
uniform float uPx;
// xy — сдвиг ткани (дрейф), w — сила сигналов
uniform vec4 uSpace;
// Воронка курсора: xy — центр (пиксели буфера), z — глубина A, w — радиус a
uniform vec4 uWell;
// x — клетка, y — каждая какая линия главная, z — заряд кнопки, w — сколько
// воронки набралось после волны
uniform vec4 uGrid;
// Радиус скругления карточки, пиксели раскладки
uniform float uRadius;
in vec2 vUv;
out vec4 o;

const float WAVE_V = 560.0;

float stroke(float d, float w) {
  return clamp(w * 0.5 + 0.5 - d, 0.0, 1.0);
}

vec2 pointMass(vec2 q, vec2 c, float A, float a) {
  vec2 d = q - c;
  return d * (2.0 * A * a / (dot(d, d) + a * a));
}

float signal(float x, float head, float dir, float period) {
  float s = mod((head - x) * dir, period);
  float f = period - s;
  return 0.5 * exp(-s / 80.0) + exp(-s * s / 32.0) + exp(-f * f / 32.0);
}

// Скруглённый прямоугольник с центром в нуле: снаружи плюс
float roundRect(vec2 q, vec2 h, float r) {
  vec2 d = abs(q) - h + r;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - r;
}

void main() {
  vec2 p = gl_FragCoord.xy;
  vec2 q = p / uPx;
  float t = uTime;

  // Воронка курсора
  vec2 wc = uWell.xy / uPx;
  vec2 shift = pointMass(q, wc, uWell.z, uWell.w);

  // Клик: масса уходит волной (как в warp.ts)
  float wave = 0.0;
  float rim = 0.0;
  for (int i = 0; i < 4; i++) {
    vec4 b = uBursts[i];
    if (b.z > 4.5) continue;
    vec2 d = q - b.xy / uPx;
    float r = length(d);
    float x = r - b.z * WAVE_V;
    float k = (0.35 + 0.65 * b.w) * smoothstep(0.0, 60.0, r);
    float env = exp(-x * x / 4050.0) * exp(-b.z / 1.2) * k;
    shift += d / max(r, 1.0) * (9.0 * env * sin(x * 0.065));
    wave += env;
    rim += stroke(abs(x + 10.0) * uPx, 1.3 * uPx) * exp(-b.z / 0.9) * k;
  }

  /* Контур — в той же ткани, но без дрейфа: карточка стоит, а сетка по
     ней плывёт. Линия — на полпикселя внутрь от края, как прежняя рамка */
  vec2 lr = uRes / uPx;
  float edge = roundRect(q + shift - 0.5 * lr, 0.5 * lr - 0.75, uRadius);
  float ge = max(length(vec2(dFdx(edge), dFdy(edge))), 1e-4);
  float ed = edge / ge;
  float inside = 1.0 - smoothstep(-0.5, 0.5, ed);
  float w = 0.75 * uPx;
  float rimLine = stroke(abs(ed), w * 1.3);

  vec2 u = q + shift + uSpace.xy;

  vec2 ux = dFdx(u);
  vec2 uy = dFdy(u);
  float gx = max(length(vec2(ux.x, uy.x)), 1e-4);
  float gy = max(length(vec2(ux.y, uy.y)), 1e-4);
  float comp = abs(ux.x * uy.y - ux.y * uy.x) * uPx * uPx;

  float cell = uGrid.x;
  float major = cell * uGrid.y;
  vec2 fm = abs(fract(u / cell + 0.5) - 0.5) * cell;
  vec2 fM = abs(fract(u / major + 0.5) - 0.5) * major;
  float lodX = smoothstep(4.0, 9.0, cell / (gx * uPx));
  float lodY = smoothstep(4.0, 9.0, cell / (gy * uPx));
  float minor = max(stroke(fm.x / gx, w) * lodX, stroke(fm.y / gy, w) * lodY);
  float lineX = stroke(fM.x / gx, w);
  float lineY = stroke(fM.y / gy, w);
  float majorL = max(lineX, lineY);
  float arm = 6.0;
  float plus = max(stroke(fM.y / gy, w * 1.7) * (1.0 - smoothstep(arm - 1.5, arm, fM.x)),
                   stroke(fM.x / gx, w * 1.7) * (1.0 - smoothstep(arm - 1.5, arm, fM.y)));

  vec2 kM = floor(u / major + 0.5);
  float hv = hash12(vec2(kM.x, 7.3));
  float hh = hash12(vec2(kM.y, 11.9));
  float pv = 1400.0 + 900.0 * hash12(vec2(kM.x, 1.7));
  float ph = 1600.0 + 900.0 * hash12(vec2(kM.y, 2.9));
  float dv = hv > 0.8 ? 1.0 : -1.0;
  float dh = hh > 0.8 ? 1.0 : -1.0;
  float sv = (110.0 + 70.0 * hash12(vec2(kM.x, 3.1))) * dv;
  float sh = (110.0 + 70.0 * hash12(vec2(kM.y, 5.3))) * dh;
  float sig = step(0.6, hv) * lineX * signal(u.y, t * sv + hv * pv, dv, pv)
            + step(0.6, hh) * lineY * signal(u.x, t * sh + hh * ph, dh, ph);

  /* Свет — как в хиро, где слова нет поблизости, но у курсора и там, где
     ткань стянута, ярче. near — как у хиро на среднем удалении от слова */
  float near = 0.35;
  float rr = length(q - wc);
  float lamp = exp(-rr * rr / 51200.0);
  float dens = clamp(sqrt(comp), 0.7, 2.6);
  float lit = (0.45 + 0.55 * near + 0.7 * lamp) * dens;

  vec3 lineC = mix(C_DEEP * 1.7, C_ACID, 0.3 + 0.35 * near + 0.3 * lamp);
  vec3 col = C_BASE;
  float wv = wave;
  vec3 fabric = lineC * (0.075 * minor + 0.13 * majorL + 0.36 * plus) * lit;
  fabric += mix(C_ACID, C_PALE, 0.4) * sig * 0.55 * uSpace.w * (0.5 + 0.5 * near);
  fabric += C_ACID * wv * (0.12 * minor + 0.35 * majorL + 0.4 * plus);
  fabric += C_DEEP * wv * 0.1;
  fabric += mix(C_ACID, C_PALE, 0.45) * rim * 0.45;
  col += fabric * inside;

  // Контур — главной линией, с тем же светом и подсветкой волной
  col += (lineC * 0.36 * lit + C_ACID * wv * 0.4) * rimLine;

  // Воронка: при заряде ядро темнеет, по краю — тонкое кольцо
  float charge = uGrid.z;
  float ra = uWell.w;
  float core = 0.3 * ra;
  col *= 1.0 - 0.6 * charge * exp(-rr * rr / (2.0 * core * core));
  float ringD = abs(rr - ra * 0.62) * uPx;
  col += mix(C_ACID, C_PALE, 0.3 * charge) * stroke(ringD, uPx) * (0.05 + 0.45 * charge) * uGrid.w * inside;

  col = soft(col);
  col += grain(p, t) * 0.018;
  o = vec4(max(col, 0.0), 1.0);
}`;e.s(["budget",0,24e5,"card",0,{budget:24e5,create:e=>{let{gl:r,common:o}=e,c=(0,t.R)(r,t.F,a),l={x:0,y:0},i=1,x=1,f=0,n=0,m=1,u=()=>{f=parseFloat(getComputedStyle(e.host).borderTopLeftRadius)||0};return{resize(e,t){i=e,x=t,u()},frame(e){let a=e.dt,v=e.time;e.frame%20==0&&u();let s=-2.4+.4*Math.sin(.04*v);for(let t of(l.x+=7*Math.cos(s)*a,l.y+=7*Math.sin(s)*a,e.bursts))t.id<=n||(m=Math.min(m,.15));e.bursts.length&&(n=Math.max(n,e.bursts[0].id)),m=Math.min(1,m+a/1.3);let d=e.pointer.charge,p=m*m*(3-2*m);(0,t.Q)(r,null,i,x),c.use(),o(c,e),r.uniform4f(c.u("uSpace"),l.x,l.y,0,1),r.uniform4f(c.u("uWell"),e.pointer.x,e.pointer.y,(28+50*d)*p,84-30*d),r.uniform4f(c.u("uGrid"),e.narrow?32:44,4,d,p),r.uniform1f(c.u("uRadius"),f),(0,t.o)(r)},dispose(){c.dispose()}}}}])}])})();