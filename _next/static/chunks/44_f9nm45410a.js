(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54666,35478,e=>{let t=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;function r(e,t,r){let o=e.createShader(t);if(!o)throw Error("createShader failed");if(e.shaderSource(o,r),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(o)??"";e.deleteShader(o);let a=r.split("\n").map((e,t)=>`${String(t+1).padStart(4)}  ${e}`).join("\n");throw Error(`Shader compile error:
${t}
${a}`)}return o}function o(e,t,r,a={}){let{float:l=!1,linear:i=!0,channels:n=4}=a,c=e.createTexture(),x=e.createFramebuffer();if(!c||!x)throw Error("createTarget failed");e.bindTexture(e.TEXTURE_2D,c);let f=i?e.LINEAR:e.NEAREST;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,f);let u=a.wrap??e.CLAMP_TO_EDGE;if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,u),l){let o=1===n?e.R16F:2===n?e.RG16F:e.RGBA16F,a=1===n?e.RED:2===n?e.RG:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,o,t,r,0,a,e.HALF_FLOAT,null)}else e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null);return e.bindFramebuffer(e.FRAMEBUFFER,x),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c,0),e.viewport(0,0,t,r),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null),{tex:c,fbo:x,w:t,h:r}}function a(e,t){t&&(e.deleteTexture(t.tex),e.deleteFramebuffer(t.fbo))}async function l(e,t,r,o){let a=getComputedStyle(document.documentElement).getPropertyValue("--font-mono").trim()||"monospace",l=Math.round(.66*o),i=`400 ${l}px ${a}`;try{await document.fonts.load(i,t.join(""))}catch{}let n=Math.ceil(t.length/16),c=document.createElement("canvas");c.width=16*r,c.height=n*o;let x=c.getContext("2d");if(!x)throw Error("2d context failed");return x.fillStyle="#000",x.fillRect(0,0,c.width,c.height),x.fillStyle="#fff",x.font=i,x.textAlign="center",x.textBaseline="middle",t.forEach((e,t)=>{let a=Math.floor(t/16)*o+o/2;x.fillText(e,t%16*r+r/2,a)}),{tex:function(e,t,r={}){let{linear:o=!0,mipmap:a=!1,flipY:l=!1}=r,i=e.createTexture();if(!i)throw Error("createTexture failed");return e.bindTexture(e.TEXTURE_2D,i),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,o?e.LINEAR:e.NEAREST),a?(e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR)):e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,o?e.LINEAR:e.NEAREST),i}(e,c,{linear:!0,mipmap:!0}),cols:16,rows:n}}e.s(["F",0,t,"Q",0,function(e,t,r,o){e.bindFramebuffer(e.FRAMEBUFFER,t?t.fbo:null),e.viewport(0,0,t?t.w:r??e.drawingBufferWidth,t?t.h:o??e.drawingBufferHeight)},"g",0,function(e,t,r){e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,r)},"Y",0,l,"_",0,function(e,t,r,l={}){let i={read:o(e,t,r,l),write:o(e,t,r,l),swap(){let e=i.read;i.read=i.write,i.write=e},dispose(){a(e,i.read),a(e,i.write)}};return i},"R",0,function(e,t,o){let a=e.createProgram();if(!a)throw Error("createProgram failed");let l=r(e,e.VERTEX_SHADER,t),i=r(e,e.FRAGMENT_SHADER,o);if(e.attachShader(a,l),e.attachShader(a,i),e.linkProgram(a),e.deleteShader(l),e.deleteShader(i),!e.getProgramParameter(a,e.LINK_STATUS))throw Error(`Program link error: ${e.getProgramInfoLog(a)}`);let n=new Map;return{handle:a,use:()=>e.useProgram(a),u:t=>(n.has(t)||n.set(t,e.getUniformLocation(a,t)),n.get(t)??null),dispose:()=>e.deleteProgram(a)}},"D",0,o,"n",0,a,"o",0,function(e){e.drawArrays(e.TRIANGLES,0,3)},"h",0,function(e,t,r,o,a=!1){let l=e.createTexture();if(!l)throw Error("createTexture failed");e.bindTexture(e.TEXTURE_2D,l),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.R8,t,r,0,e.RED,e.UNSIGNED_BYTE,o),e.pixelStorei(e.UNPACK_ALIGNMENT,4);let i=a?e.LINEAR:e.NEAREST;return e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),l}],54666);let i=`#version 300 es
precision highp float;
precision highp int;
`,n=`
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
`,c=`
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
`,x=`
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
`,f=`
uniform vec4 uBursts[4];
`,u=`
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
`;e.s(["Z",0,f,"A",0,x,"B",0,c,"U",0,i,"K",0,n,"s",0,u],35478)},8398,e=>{var t=e.i(54666),r=e.i(35478),o=e.i(29039);let a=r.U+r.K+r.B+r.Z+`
uniform vec2 uRes;
uniform float uPx;
uniform float uTime;
uniform float uArrive;
uniform vec4 uPointer;
// x — горизонт (пиксели раскладки, y вниз), y — f: насколько ниже горизонта
// ближний ряд, z — середина по x, w — ширина, которую ряд должен накрыть
uniform vec4 uScene;
// x — путь камеры вперёд, y — её сдвиг вбок за мышью (мир), z — заряд,
// w — докуда загрузились ряды при появлении (0…1, от дальних)
uniform vec4 uTerrain;
// Холм курсора: xy — где на земле (X, z), z — высота, w — радиус
uniform vec4 uHill;
// x — точек в ряду, y — рядов, z — во сколько раз глубже следующий ряд,
// w — шаг точек по земле
uniform vec4 uGrid;
out vec3 vCol;
out float vSize;

float heightAt(vec2 w) {
  float z = w.y + uTerrain.x;
  float t = uTime;
  return 0.10 * sin(0.85 * z + 0.22 * w.x + 0.5 * sin(0.27 * w.x + 0.15 * t))
       + 0.06 * sin(1.9 * z - 0.6 * w.x + 1.3 + 0.2 * t)
       + 0.04 * sin(2.6 * z + 1.1 * w.x - 0.3 * t)
       + 0.07 * snoise(vec3(w.x * 0.3, z * 0.3, t * 0.07));
}

void main() {
  float cols = uGrid.x;
  float rows = uGrid.y;
  float dx = uGrid.w;
  float id = float(gl_VertexID);
  float j = floor(id / cols);
  float i = id - j * cols;
  // 1 — ближний ряд, 0 — у горизонта
  float v = 1.0 - j / (rows - 1.0);
  float f = uScene.y;
  float z = pow(uGrid.z, j);
  float oy = f / z;
  // Шаг удваивается, когда точек ряда не хватает на ширину экрана
  float m = max(1.0, exp2(ceil(log2(uScene.w / (dx * oy * cols)))));
  float camX = uTerrain.y;
  vec2 wp = vec2((i - floor(cols * 0.5)) * m * dx + floor(camX / (m * dx)) * m * dx, z);

  float h = heightAt(wp);

  vec2 dc = wp - uHill.xy;
  float hill = exp(-dot(dc, dc) / (2.0 * uHill.w * uHill.w));
  h += uHill.z * hill;

  // Клик: кольцо бежит по земле из точки клика (над горизонтом — с дальних рядов)
  float ring = 0.0;
  for (int k = 0; k < 4; k++) {
    vec4 b = uBursts[k];
    if (b.z > 4.0) continue;
    vec2 bl = vec2(b.x / uPx, (uRes.y - b.y) / uPx);
    float boy = max(bl.y - uScene.x, f * 0.06);
    vec2 bw = vec2((bl.x - uScene.z) / boy + camX, f / boy);
    float x = length(wp - bw) - b.z * 2.2;
    float e = exp(-x * x / 0.08) * exp(-b.z / 1.6) * (0.4 + 0.6 * b.w);
    h += 0.22 * e;
    ring += e;
  }

  // Финал: гребень идёт от горизонта к зрителю, ширина — по глубине
  float crest = 0.0;
  if (uArrive < 6.0) {
    float zc = 40.0 * exp(-uArrive * 1.1);
    float x = (z - zc) / (0.12 * zc + 0.12);
    crest = exp(-x * x) * exp(-uArrive / 3.0);
    h += 0.28 * crest;
  }

  // Появление: ряды загораются от дальних к ближним, по фронту — вспышка
  float boot = uTerrain.w;
  float shown = 1.0 - smoothstep(boot - 0.015, boot + 0.015, v);
  float scan = exp(-(v - boot) * (v - boot) / 0.0012) * (1.0 - step(0.999, boot));

  // Камера сдвинута вбок: ближние ряды уезжают сильнее дальних
  float sx = uScene.z + (wp.x - camX) * oy;
  float y = uScene.x + oy * (1.0 - h);
  vec2 bp = vec2(sx, uRes.y / uPx - y) * uPx;
  gl_Position = vec4(bp / uRes * 2.0 - 1.0, 0.0, 1.0);

  float near = oy / f;
  float fade = 0.25 + 0.75 * smoothstep(0.0, 0.5, v);
  // Гребни светлее впадин, но и во впадине ряд не гаснет: иначе, когда под
  // камерой длинная впадина, ближнее поле на секунды пропадало целиком
  float lit = smoothstep(-0.12, 0.24, h);
  vec2 pc = vec2(uPointer.x / uPx, (uRes.y - uPointer.y) / uPx);
  vec2 dp = vec2(sx, y) - pc;
  float lamp = exp(-dot(dp, dp) / 33800.0);
  float charge = uTerrain.z;
  float glow = clamp(ring + crest + hill * uHill.z * 2.0, 0.0, 1.5);
  float b = (0.1 + 1.0 * pow(near, 0.7)) * fade * (0.45 + 0.95 * lit)
          + lamp * (0.3 + 0.4 * charge) * (0.3 + 0.7 * near)
          + hill * smoothstep(0.0, 0.12, uHill.z) * (0.25 + 1.4 * charge)
          + ring * 1.2 + crest * 1.1 + scan * 0.9;
  b *= shown;
  vec3 c = mix(C_DEEP * 2.2, C_ACID, clamp(0.2 + 0.6 * lit + 0.4 * lamp, 0.0, 1.0));
  c = mix(c, C_PALE, clamp(0.4 * (ring + crest + scan) + 0.3 * hill * charge, 0.0, 0.6));
  float size = (0.9 + 2.2 * sqrt(near)) * (1.0 + 0.4 * min(glow, 1.0)) * uPx;
  vSize = size + 2.0;
  gl_PointSize = vSize;
  vCol = c * b;
}`,l=`#version 300 es
precision highp float;
in vec3 vCol;
in float vSize;
out vec4 o;

void main() {
  float s = vSize - 2.0;
  float r = length(gl_PointCoord - 0.5) * vSize;
  // Мельче пикселя — тусклее, а не крупнее: иначе дальние ряды рябили бы
  float a = clamp(s * 0.5 + 0.5 - r, 0.0, 1.0) * min(1.0, s);
  o = vec4(vCol * a, 1.0);
}`,i=r.U+r.K+r.B+r.A+`
uniform vec2 uRes;
uniform float uTime;
uniform float uPx;
uniform float uReveal;
uniform float uArrive;
${r.s}
uniform sampler2D uLight;
uniform vec4 uScene;
in vec2 vUv;
out vec4 o;

void main() {
  vec2 p = gl_FragCoord.xy;
  vec2 uv = p / uRes;
  vec2 q = p / uPx;
  float t = uTime;
  float td = titleD(p);

  vec3 col = C_BASE + texture(uLight, uv).rgb;

  // Горизонт: тонкая линия, при появлении прорисовывается от середины
  float dy = (uRes.y / uPx - q.y) - uScene.x;
  float drawn = smoothstep(0.0, 0.25, uReveal);
  float hx = abs(q.x - uScene.z) / (uScene.w * 0.5);
  float lineOn = 1.0 - smoothstep(drawn - 0.08, drawn, hx);
  float flash = uArrive < 4.0 ? exp(-uArrive / 0.6) : 0.0;
  float boot = 1.0 - smoothstep(0.25, 0.6, uReveal);
  float line = exp(-dy * dy / 1.5) * lineOn;
  col += mix(C_DEEP * 2.0, C_ACID, 0.35 + 0.4 * flash) * line * (0.2 + 0.3 * boot + 0.5 * flash);
  // Дымка: низкая над горизонтом, чуть заметная под ним
  col += C_DEEP * (0.22 + 0.3 * flash) * exp(dy / 46.0) * step(dy, 0.0) * lineOn;
  col += C_DEEP * 0.06 * exp(-dy / 90.0) * step(0.0, dy) * lineOn;

  // Края темнее — взгляд держится в середине
  vec2 vg = (uv - 0.5) * vec2(1.0, 1.25);
  col *= 1.0 - 0.3 * smoothstep(0.4, 0.95, length(vg));

  col = soft(col);
  col += grain(p, t) * 0.018;
  col = capLum(col, calmCap(max(calmAt(p), moat(td, 30.0))));
  o = vec4(max(col, 0.0), 1.0);
}`,n=(e,t,r)=>{let o=Math.min(1,Math.max(0,(r-e)/(t-e)));return o*o*(3-2*o)};e.s(["budget",0,24e5,"hero",0,{budget:24e5,create:e=>{let{gl:r,common:c}=e,x=(0,t.R)(r,a,l),f=(0,t.R)(r,t.F,i),u=(0,o.I)(r,e.host,e.layer),m=r.createVertexArray(),s={x0:0,y0:0,x1:0,y1:0},h=null,p=1,E=1,v=1,d=1,T=1,y=-1,_=0,R=0,g=0,A=0,w=-1,P=0;return{resize(o,a,l){p=o,E=a,d=o/(v=l),T=a/v,(0,t.n)(r,h),h=(0,t.D)(r,o,a,{float:e.caps.float}),u.update()},frame(e){if(!h)return;let a=e.dt;u.ready&&e.frame%20!=0||u.update(),(0,o.j)(u,e,d,T,s);let l=u.ready&&u.groups[0]?u.groups[0]:s,i=Math.min(T-90,Math.max(.42*T,l.y1+(e.narrow?36:60)));y=y<0?i:y+(i-y)*(1-Math.exp(-(8*a)));let M=(T-y)*1.06,b=d/2;w<0&&(w=e.scroll);let D=a>0?(e.scroll-w)/a:0;w=e.scroll,P+=(D-P)*(1-Math.exp(-(6*a))),_+=a*(.32+Math.min(5,14*Math.abs(P)));let U=e.pointer.charge,C=e.pointer.x/v,z=T-e.pointer.y/v,S=Math.max(.06*M,z-y),F=n(y-10,y+50,z);for(let t of e.bursts)t.id>A&&(g*=.2);e.bursts.length&&(A=Math.max(A,e.bursts[0].id));let L=(.16+.3*U)*F*n(.4,.9,e.reveal);g+=(L-g)*(1-Math.exp(-a*(L>g?3:6)));let I=Math.max(-1,Math.min(1,(C-b)/(d/2)));R+=(I-R)*(1-Math.exp(-(3*a)));let X=30*R/M,N=e.narrow?72:96,B=Math.pow(1/.012,1/(N-1)),G=1-1/B,O=1.12*d,k=Math.min(400,Math.ceil(2*O/(G*M))),W=Math.min(1,Math.max(0,(e.reveal-.05)/.8));(0,t.Q)(r,h),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE),x.use(),c(x,e),r.uniform4f(x.u("uScene"),y,M,b,O),r.uniform4f(x.u("uTerrain"),_,X,U,W),r.uniform4f(x.u("uHill"),(C-b)/S+X,M/S,g,.45),r.uniform4f(x.u("uGrid"),k,N,B,G),r.bindVertexArray(m),r.drawArrays(r.POINTS,0,k*N),r.bindVertexArray(null),r.disable(r.BLEND),(0,t.Q)(r,null,p,E),f.use(),c(f,e),(0,t.g)(r,0,h.tex),r.uniform1i(f.u("uLight"),0),(0,o.i)(r,f,u,1,s,v,T),r.uniform4f(f.u("uScene"),y,M,b,O),(0,t.o)(r)},dispose(){(0,t.n)(r,h),r.deleteVertexArray(m),u.dispose(),x.dispose(),f.dispose()}}}}])},29039,e=>{var t=e.i(54666);function r(e,t,r,o,a,l,i){l[0]=0,i[0]=-1e20,i[1]=1e20,a[0]=e[t];for(let n=1,c=0;n<o;n++){a[n]=e[t+n*r];let o=n*n,x=0;do{let e=l[c];x=(a[n]-a[e]+o-e*e)/(n-e)/2}while(x<=i[c]&&--c>-1)l[++c]=n,i[c]=x,i[c+1]=1e20}for(let n=0,c=0;n<o;n++){for(;i[c+1]<n;)c++;let o=l[c],x=n-o;e[t+n*r]=a[o]+x*x}}function o(e,t,o,a,l,i){for(let n=0;n<t;n++)r(e,n,t,o,a,l,i);for(let n=0;n<o;n++)r(e,n*t,1,t,a,l,i)}function a(e,t,r,o,a,l,i){if(!t||e.length<t*r)return 1e4;let n=l/o-.5,c=i/a-.5;n<0?n=0:n>t-1.001&&(n=t-1.001),c<0?c=0:c>r-1.001&&(c=r-1.001);let x=0|n,f=0|c,u=n-x,m=c-f,s=f*t+x,h=e[s]+(e[s+1]-e[s])*u;return h+(e[s+t]+(e[s+t+1]-e[s+t])*u-h)*m}e.s(["i",0,function(e,r,o,a,l,i,n){(0,t.g)(e,a,o.tex),e.uniform1i(r.u("uTitle"),a),e.uniform1f(r.u("uTitleOn"),+!!o.ready),e.uniform4f(r.u("uWord"),l.x0*i,(n-l.y1)*i,l.x1*i,(n-l.y0)*i)},"R",0,function(e,t){let r=new Map;return{update(){let o=t.offsetWidth;if(!o)return;let a=t.getBoundingClientRect(),l=a.width/o||1,i=new Set(e.querySelectorAll("[data-bg-body]"));for(let e of r.keys())i.has(e)||r.delete(e);for(let e of i){if(e.closest(".is-tilting"))continue;let t=e.getBoundingClientRect();if(t.width<.5||t.height<.5){r.delete(e);continue}r.set(e,{x0:(t.left-a.left)/l,y0:(t.top-a.top)/l,x1:(t.right-a.left)/l,y1:(t.bottom-a.top)/l})}},union(e,t){for(let o of(Object.assign(t,e),r.values()))t.x0=Math.min(t.x0,o.x0),t.y0=Math.min(t.y0,o.y0),t.x1=Math.max(t.x1,o.x1),t.y1=Math.max(t.y1,o.y1);return t}}},"S",0,function(e,t,r){let o=e.createTexture();if(!o)throw Error("createTexture failed");let l=-1,i=new Float32Array(0),n=new Float32Array(0),c={w:0,h:0,cx:1,cy:1},x=(e,t,r,o,a,l)=>{let i=l?r:o,n=l?o:r,c=l?1:r,x=1/(2*a+1);for(let o=0;o<n;o++){let n=l?o*r:o,f=t=>e[n+Math.min(i-1,Math.max(0,t))*c],u=0;for(let e=-a;e<=a;e++)u+=f(e);for(let e=0;e<i;e++)t[n+e*c]=u*x,u+=f(e+a+1)-f(e-a)}};return{tex:o,update(){if(!t.ready||l===t.version)return;l=t.version;let{w:a,h:f}=t;i.length!==a*f&&(i=new Float32Array(a*f),n=new Float32Array(a*f));let u=Math.max(1,Math.round(r/((t.cx+t.cy)/2)/2));x(t.dist,i,a,f,u,!0),x(i,n,a,f,u,!1),x(n,i,a,f,u,!0),x(i,n,a,f,u,!1),Object.assign(c,{w:a,h:f,cx:t.cx,cy:t.cy}),e.bindTexture(e.TEXTURE_2D,o),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.texImage2D(e.TEXTURE_2D,0,e.R16F,a,f,0,e.RED,e.FLOAT,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},sample:(e,t)=>a(n,c.w,c.h,c.cx,c.cy,e,t),dispose(){e.deleteTexture(o)}}},"I",0,function(e,t,r){let l=e.createTexture();if(!l)throw Error("createTexture failed");let i=document.createElement("canvas"),n=i.getContext("2d",{willReadFrequently:!0});if(!n)throw Error("2d context failed");let c=new Float64Array(0),x=new Float64Array(0),f=new Float64Array(0),u=new Float64Array(0),m=new Uint16Array(0),s="",h="loaded"===document.fonts.status;h||document.fonts.ready.then(()=>{h=!0});let p={ready:!1,version:0,tex:l,w:0,h:0,cx:1,cy:1,dist:new Float32Array(0),glyphs:[],box:{x0:0,y0:0,x1:0,y1:0},groups:[],update:function(a=!1){let E=r.offsetWidth,v=r.offsetHeight;if(!E||!v||!h)return!1;let d=function(e){let o=r.getBoundingClientRect(),a=o.width/e||1,l=document.createRange(),i=[],n=0;for(let e of t.querySelectorAll("[data-bg-text]")){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let e=t.nextNode();e;e=t.nextNode()){let t=e.parentElement;if(!t||t.closest('[aria-hidden="true"]'))continue;let r=getComputedStyle(t),c=parseFloat(r.fontSize)||16,x=`${r.fontStyle} ${r.fontWeight} ${c}px ${r.fontFamily}`,f="uppercase"===r.textTransform,u=e.textContent??"";for(let t=0;t<u.length;t++){let r=u[t];if(!r.trim())continue;l.setStart(e,t),l.setEnd(e,t+1);let m=l.getBoundingClientRect();if(m.width<.5||m.height<.5)continue;let s=(m.top-o.top)/a;i.push({ch:f?r.toUpperCase():r,x:(m.left-o.left)/a,y:s,w:m.width/a,h:m.height/a,size:c,font:x,group:n,top:s,bottom:s})}}n++}return i}(E),T=`${E}x${v}:`;for(let e of d)T+=`${e.ch}${Math.round(2*e.x)},${Math.round(2*e.y)},${Math.round(2*e.h)};`;if(!a&&T===s)return!1;s=T;let y=Math.max(2,Math.ceil(Math.sqrt(E*v/14e4))),_=Math.max(2,Math.ceil(E/y)),R=Math.max(2,Math.ceil(v/y)),g=_*R,A=_!==p.w||R!==p.h;if(A){i.width=_,i.height=R,c=new Float64Array(g),x=new Float64Array(g);let e=Math.max(_,R);f=new Float64Array(e),u=new Float64Array(e+1),m=new Uint16Array(e),p.dist=new Float32Array(g)}p.w=_,p.h=R,p.cx=E/_,p.cy=v/R,p.glyphs=d,n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,_,R),n.setTransform(_/E,0,0,R/v,0,0),n.fillStyle="#fff",n.textBaseline="alphabetic",n.textAlign="left";let w={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0},P=[];for(let e of d){n.font=e.font;let t=n.measureText(e.ch),r=t.fontBoundingBoxAscent||.8*e.size,o=t.fontBoundingBoxDescent||.2*e.size,a=e.y+e.h*r/(r+o);n.fillText(e.ch,e.x,a),e.top=a-(t.actualBoundingBoxAscent||.7*e.size),e.bottom=a+(t.actualBoundingBoxDescent||0);let l=P[e.group]??={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};l.x0=Math.min(l.x0,e.x),l.x1=Math.max(l.x1,e.x+e.w),l.y0=Math.min(l.y0,e.top),l.y1=Math.max(l.y1,e.bottom),w.x0=Math.min(w.x0,l.x0),w.x1=Math.max(w.x1,l.x1),w.y0=Math.min(w.y0,l.y0),w.y1=Math.max(w.y1,l.y1)}p.box=d.length?w:{x0:0,y0:0,x1:0,y1:0},p.groups=Array.from(P,e=>e??{x0:0,y0:0,x1:0,y1:0});let M=n.getImageData(0,0,_,R).data;for(let e=0;e<g;e++){let t=M[4*e+3]/255;if(t>=1)c[e]=0,x[e]=1e20;else if(t<=0)c[e]=1e20,x[e]=0;else{let r=.5-t;c[e]=r>0?r*r:0,x[e]=r<0?r*r:0}}d.length&&(o(c,_,R,f,m,u),o(x,_,R,f,m,u));let b=(p.cx+p.cy)/2,D=p.dist;for(let e=0;e<g;e++)D[e]=d.length?(Math.sqrt(c[e])-Math.sqrt(x[e]))*b:1e4;return e.bindTexture(e.TEXTURE_2D,l),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.texImage2D(e.TEXTURE_2D,0,e.R16F,_,R,0,e.RED,e.FLOAT,D),(A||!p.ready)&&(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),p.ready=d.length>0,p.version++,!0},sample:E,grad:function(e,t,r){let o=p.cx,a=p.cy,l=E(e+o,t)-E(e-o,t),i=E(e,t+a)-E(e,t-a),n=Math.hypot(l,i);if(n<1e-6){r[0]=0,r[1]=-1;return}r[0]=l/n,r[1]=i/n},dispose(){e.deleteTexture(l)}};function E(e,t){return a(p.dist,p.w,p.h,p.cx,p.cy,e,t)}return p},"j",0,function(e,t,r,o,a){return e?.ready?Object.assign(a,e.box):t.anchorK>0?(a.x0=t.anchor.x0/t.px,a.x1=t.anchor.x1/t.px,a.y0=o-t.anchor.y1/t.px,a.y1=o-t.anchor.y0/t.px):(a.x0=a.x1=r/2,a.y0=a.y1=o/2),a}])}])})();