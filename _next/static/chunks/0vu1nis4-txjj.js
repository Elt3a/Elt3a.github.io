(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54666,35478,e=>{let t=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;function r(e,t,r){let a=e.createShader(t);if(!a)throw Error("createShader failed");if(e.shaderSource(a,r),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(a)??"";e.deleteShader(a);let o=r.split("\n").map((e,t)=>`${String(t+1).padStart(4)}  ${e}`).join("\n");throw Error(`Shader compile error:
${t}
${o}`)}return a}e.s(["F",0,t,"Q",0,function(e,t,r,a){e.bindFramebuffer(e.FRAMEBUFFER,t?t.fbo:null),e.viewport(0,0,t?t.w:r??e.drawingBufferWidth,t?t.h:a??e.drawingBufferHeight)},"g",0,function(e,t,r){e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,r)},"R",0,function(e,t,a){let o=e.createProgram();if(!o)throw Error("createProgram failed");let i=r(e,e.VERTEX_SHADER,t),l=r(e,e.FRAGMENT_SHADER,a);if(e.attachShader(o,i),e.attachShader(o,l),e.linkProgram(o),e.deleteShader(i),e.deleteShader(l),!e.getProgramParameter(o,e.LINK_STATUS))throw Error(`Program link error: ${e.getProgramInfoLog(o)}`);let n=new Map;return{handle:o,use:()=>e.useProgram(o),u:t=>(n.has(t)||n.set(t,e.getUniformLocation(o,t)),n.get(t)??null),dispose:()=>e.deleteProgram(o)}},"D",0,function(e,t,r,a={}){let{float:o=!1,linear:i=!0,channels:l=4}=a,n=e.createTexture(),c=e.createFramebuffer();if(!n||!c)throw Error("createTarget failed");e.bindTexture(e.TEXTURE_2D,n);let x=i?e.LINEAR:e.NEAREST;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,x),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,x);let f=a.wrap??e.CLAMP_TO_EDGE;if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,f),o){let a=1===l?e.R16F:2===l?e.RG16F:e.RGBA16F,o=1===l?e.RED:2===l?e.RG:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,a,t,r,0,o,e.HALF_FLOAT,null)}else e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null);return e.bindFramebuffer(e.FRAMEBUFFER,c),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.viewport(0,0,t,r),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null),{tex:n,fbo:c,w:t,h:r}},"n",0,function(e,t){t&&(e.deleteTexture(t.tex),e.deleteFramebuffer(t.fbo))},"o",0,function(e){e.drawArrays(e.TRIANGLES,0,3)}],54666);let a=`#version 300 es
precision highp float;
precision highp int;
`,o=`
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
`,i=`
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
`,l=`
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

// Самый низкий потолок, при k = 1
const float CALM_FLOOR = 0.016;

float calmCap(float k) {
  return exp(k * log(CALM_FLOOR));
}

/* Есть ли что гасить: пиксель темнее самого низкого потолка capLum не
   тронет при любой зоне, и сцены тогда зоны и ров не считают вовсе — а это
   почти весь тёмный фон. Сначала грубо по самому яркому каналу: яркость не
   больше его в степени 2.2, так что тёмному пикселю степени не нужны */
bool aboveFloor(vec3 c) {
  return max(c.r, max(c.g, c.b)) > pow(CALM_FLOOR, 1.0 / 2.2) && lum(c) > CALM_FLOOR;
}

// Зерно плёнки: меняется каждый кадр, заодно убирает полосы в тёмных градиентах
float grain(vec2 p, float t) {
  return hash12(p + fract(t * 7.31) * vec2(311.7, 183.3)) - 0.5;
}
`,n=`
uniform vec4 uBursts[4];
`,c=`
uniform sampler2D uTitle;
uniform float uTitleOn;
uniform vec4 uWord;

float titleD(vec2 p) {
  if (uTitleOn < 0.5) return 1e4;
  // Без мипов, поэтому textureLod: читается и внутри ветвления по пикселю
  return textureLod(uTitle, vec2(p.x / uRes.x, 1.0 - p.y / uRes.y), 0.0).r;
}

float moat(float td, float width) {
  return 1.0 - smoothstep(4.0, width, td);
}
`;e.s(["Z",0,n,"A",0,l,"B",0,i,"U",0,a,"K",0,o,"s",0,c],35478)},8347,e=>{var t=e.i(34543),r=e.i(54666),a=e.i(35478),o=e.i(29039);let i=`#version 300 es
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec4 aA;
layout(location = 2) in vec4 aB;
layout(location = 3) in vec2 aC;
uniform vec2 uRes;
out vec2 vLocal;
out vec4 vB;
out vec2 vC;
void main() {
  float pad = aC.y + 1.5;
  vec2 ext = vec2(aB.x * 0.5 + pad, aB.y * 0.5 + pad);
  vec2 local = aCorner * ext;
  vec2 dir = aA.zw;
  vec2 nrm = vec2(-dir.y, dir.x);
  vec2 p = aA.xy + dir * local.x + nrm * local.y;
  vLocal = local;
  vB = aB;
  vC = aC;
  gl_Position = vec4(p / uRes * 2.0 - 1.0, 0.0, 1.0);
}`,l=a.U+a.B+`
in vec2 vLocal;
in vec4 vB;
in vec2 vC;
out vec4 o;
void main() {
  float r = vB.y * 0.5;
  float hl = max(vB.x * 0.5 - r, 0.0);
  vec2 q = vec2(max(abs(vLocal.x) - hl, 0.0), vLocal.y);
  float d = length(q) - r;
  float aa = 0.7 + vC.y;
  float a = 1.0 - smoothstep(-aa, aa, d);
  o = vec4(iri(vB.w, vC.x) * (a * vB.z), 1.0);
}`,n=`
uniform sampler2D uParticles;
uniform vec2 uRes;
uniform float uTime;
uniform float uPx;
uniform float uReveal;
uniform float uArrive;
uniform vec4 uPointer;
in vec2 vUv;
out vec4 o;

#ifdef HERO
${a.s}
#endif

#ifdef GLITCH
// Два сбоя разом: плановый и от клика. Рамка — в пикселях буфера;
// параметры — вид (1 разрыв, 2 мозаика, 3 потёк), возраст, сдвиг, зерно
uniform vec4 uGRect[2];
uniform vec4 uGParam[2];
#endif

vec3 particles(vec2 p) {
#ifdef GLITCH
  for (int i = 0; i < 2; i++) {
    vec4 g = uGParam[i];
    vec4 r = uGRect[i];
    if (g.x < 0.5 || p.x < r.x || p.x > r.z || p.y < r.y || p.y > r.w) continue;
    float st = floor(g.y / 0.070);
    float hs = hash12(vec2(st, g.w * 97.0));
    float rowH = (7.0 + 12.0 * hs) * uPx;
    float hr = hash12(vec2(floor((p.y - r.y) / rowH), st + g.w * 13.0));
    if (g.x < 1.5) {
      // Разрыв: полосы уезжают вбок, по краям — бирюзовая и салатовая тени
      vec2 q = p + vec2((hr - 0.5) * 2.0 * g.z, 0.0);
      float sp = 4.0 * uPx;
      vec3 a = texture(uParticles, q / uRes).rgb;
      float b = texture(uParticles, (q + vec2(sp, 0.0)) / uRes).g;
      float c = texture(uParticles, (q - vec2(sp, 0.0)) / uRes).g;
      return a * 0.8 + vec3(0.06, 0.8, 0.7) * b * 0.5 + vec3(0.7, 1.0, 0.25) * c * 0.35;
    }
    if (g.x < 2.5) {
      /* Мозаика, как битый кадр видео: блоки по 10–16 px, в блоке — самый
         яркий его свет, часть блоков залита ровным тёмно-зелёным. Среднее
         вместо самого яркого гасило редкие капсулы, и сбоя не было видно */
      float bs = (10.0 + 6.0 * hs) * uPx;
      vec2 cb = floor(p / bs);
      vec2 c0 = (cb + 0.5) * bs;
      vec3 m = vec3(0.0);
      for (int k = 0; k < 9; k++) {
        vec2 o3 = (vec2(float(k % 3), float(k / 3)) - 1.0) * bs * 0.33;
        m = max(m, texture(uParticles, (c0 + o3) / uRes).rgb);
      }
      float hb = hash12(cb + st * 7.0 + g.w * 31.0);
      return m * (0.7 + 0.6 * hb) + C_DEEP * step(0.68, hb) * 0.5;
    }
    // Потёк: капсулы тянутся вниз — ярчайшее из точек выше
    vec3 m = vec3(0.0);
    for (int k = 0; k < 7; k++) {
      float fk = float(k);
      m = max(m, texture(uParticles, (p + vec2(0.0, fk * (5.0 + 6.0 * hr) * uPx)) / uRes).rgb * (1.0 - fk * 0.11));
    }
    return m;
  }
#endif
  return texture(uParticles, p / uRes).rgb;
}

void main() {
  vec2 p = gl_FragCoord.xy;
  vec2 uv = p / uRes;
  float aspect = uRes.x / uRes.y;
  vec3 col = C_BASE;

  // Горизонт: изумрудное зарево снизу, разгорается с появлением
  float hx = (uv.x - 0.5) * aspect;
  float horizon = exp(-uv.y * 3.6) * (0.55 + 0.45 * exp(-hx * hx * 1.4));
#ifdef HERO
  // Хиро до своей очереди пуст: интро заголовка идёт по чистому фону
  float td = titleD(p);
  float rv = smoothstep(0.0, 0.7, uReveal);
  col += (C_DEEP * horizon * 0.8 + C_ACID * horizon * horizon * 0.04) * uReveal;
#else
  float rv = 0.35 + 0.65 * uReveal;
  col += C_DEEP * horizon * (0.3 + 0.9 * uReveal);
  col += C_ACID * horizon * horizon * 0.04;
#endif

  // Пыль по сетке, как точки \xabХолста\xbb, только живая: мерцает, у курсора ярче
  float cell = 21.0 * uPx;
  vec2 g = p / cell;
  vec2 id = floor(g);
  float h = hash12(id);
  float dd = length((fract(g) - 0.5) * cell);
  float tw = 0.5 + 0.5 * sin(uTime * (0.5 + h * 1.6) + h * 50.0);
  float md = length(p - uPointer.xy) / uPx;
  float near = exp(-md * md / (2.0 * 170.0 * 170.0));
  float dotA = 1.0 - smoothstep(0.55 * uPx, 1.35 * uPx, dd);
  float dust = dotA * (0.05 + 0.12 * tw * h + 0.4 * near);
#ifdef HERO
  // У слова пыль гуще и ложится контуром в стороне от букв, как опилки
  // у магнита; к краям экрана стихает
  float aura = 0.5 + 0.7 * exp(-max(td - 60.0, 0.0) / 160.0);
  float rr = (td - 70.0) / 26.0;
  dust *= aura * (1.0 + 1.8 * exp(-rr * rr));
#endif
  col += mix(C_DEEP, C_ACID, 0.3 + 0.45 * near) * dust * rv;

  col += particles(p);

  // Волна импульса: тонкое кольцо бежит от точки клика
  for (int i = 0; i < 4; i++) {
    vec4 b = uBursts[i];
    if (b.z > 3.0) continue;
    float r = b.z * (520.0 + 380.0 * b.w) * uPx;
    float d = (length(p - b.xy) - r) / uPx;
    float ring = exp(-d * d / 18.0) + 0.25 * exp(-d * d / 400.0);
    col += mix(C_ACID, C_PALE, 0.35) * ring * exp(-b.z * 1.8) * b.w * 0.3;
  }

#ifdef HERO
  // Финал: от слова расходится волна — сначала по его рамке, дальше кругом
  if (uArrive < 3.0) {
    vec2 c0 = 0.5 * (uWord.xy + uWord.zw);
    vec2 q = abs(p - c0) - 0.5 * (uWord.zw - uWord.xy);
    float box = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
    float d = (box - uArrive * 900.0 * uPx) / uPx;
    float ring = exp(-d * d / 24.0) + 0.35 * exp(-d * d / 1600.0);
    float wake = d < 0.0 ? exp(d / 200.0) : 0.0;
    float fade = exp(-uArrive * 1.2);
    col += (mix(C_ACID, C_PALE, 0.45) * ring * 0.42 + C_DEEP * wake * 0.4) * fade;
  }
#else
  // Финал: дуга волны поднимается из-под нижнего края
  if (uArrive < 3.0) {
    vec2 c0 = vec2(uRes.x * 0.5, -uRes.y * 0.35);
    float r = uRes.y * 0.35 + uArrive * 1100.0 * uPx;
    float d = (length(p - c0) - r) / uPx;
    float ring = exp(-d * d / 24.0) + 0.35 * exp(-d * d / 1600.0);
    // За фронтом — тёмный изумрудный шлейф, а не сплошное зарево
    float wake = d < 0.0 ? exp(d / 220.0) : 0.0;
    float fade = exp(-uArrive * 1.1);
    col += (mix(C_ACID, C_PALE, 0.45) * ring * 0.5 + C_DEEP * wake * 0.5) * fade;
  }
#endif

#ifdef GLITCH
  // У разрыва по краям полосы — тонкие строки помех
  for (int i = 0; i < 2; i++) {
    vec4 gp = uGParam[i];
    vec4 r = uGRect[i];
    if (gp.x < 0.5 || gp.x > 1.5 || p.x < r.x || p.x > r.z) continue;
    float e = min(abs(p.y - r.y), abs(p.y - r.w)) / uPx;
    col += C_ACID * exp(-e * e * 2.0) * 0.12;
  }
#endif

  // Края темнее — взгляд держится в середине
  vec2 v = (uv - 0.5) * vec2(1.0, 1.25);
  col *= 1.0 - 0.35 * smoothstep(0.35, 0.95, length(v));

  col = soft(col);
  col += grain(p, uTime) * 0.025;
  // Зоны тишины — только там, где есть что гасить (aboveFloor, glsl.ts)
  if (aboveFloor(col)) {
#ifdef HERO
    // Ров вокруг каждой буквы: у контура фон не светлее потолка мелкого текста
    col = capLum(col, calmCap(max(calmAt(p), moat(td, 44.0))));
#else
    col = capLum(col, calmCap(calmAt(p)));
#endif
  }
  o = vec4(max(col, 0.0), 1.0);
}`,c=e=>{let t=e<0?0:e>1?1:e;return t*t*(3-2*t)},x=2*Math.PI,f=()=>({kind:0,x0:0,y0:0,x1:0,y1:0,age:0,dur:0,shift:0,seed:0,step:-1});e.s(["budget",0,26e5,"create",0,function(e){return function(e,u){let{gl:s,caps:h,coarse:v,common:d}=e,m="footer"!==u,p="glitch"===u,y=(0,r.R)(s,i,l),g=(0,r.R)(s,r.F,a.U+("footer"!==u?"#define HERO 1\n":"")+("glitch"===u?"#define GLITCH 1\n":"")+a.K+a.B+a.A+a.Z+n),A=m?(0,o.I)(s,e.host,e.layer):null,M=s.createVertexArray(),E=s.createBuffer(),R=s.createBuffer();s.bindVertexArray(M),s.bindBuffer(s.ARRAY_BUFFER,E),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),s.STATIC_DRAW),s.enableVertexAttribArray(0),s.vertexAttribPointer(0,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,R);s.enableVertexAttribArray(1),s.vertexAttribPointer(1,4,s.FLOAT,!1,40,0),s.vertexAttribDivisor(1,1),s.enableVertexAttribArray(2),s.vertexAttribPointer(2,4,s.FLOAT,!1,40,16),s.vertexAttribDivisor(2,1),s.enableVertexAttribArray(3),s.vertexAttribPointer(3,2,s.FLOAT,!1,40,32),s.vertexAttribDivisor(3,1),s.bindVertexArray(null);let T=null,b=1,_=1,C=1,w=0,F=0,P=0,D=0,B=1,z=-1,L=0,I=[0,0],U=f(),S=f(),k=4+3*Math.random(),O=new Float32Array(8),G=new Float32Array(8),N=new Float32Array(0),X=N,q=N,W=N,H=N,V=N,$=N,j=N,K=N,Y=N,Q=N,Z=N,J=N,ee=N,et=(e,t,r,a)=>{for(let o=0;o<P;o++){let i=V[o]-e,l=$[o]-t,n=Math.hypot(i,l)+1,c=1500*r*Math.exp(-n/a)/n;j[o]+=i*c-l*c*.25,K[o]+=l*c+i*c*.25}},er={x0:0,y0:0,x1:0,y1:0};return{resize(e,t,a){b=e,_=t,C=a,(0,r.n)(s,T),T=(0,r.D)(s,e,t,{float:h.float});let o=e/C,i=t/C;(Math.abs(o-w)>1||Math.abs(i-F)>1)&&(w=o,F=i,(()=>{let e=v?28:21,t=v?1400:4e3,r=w+96,a=F+96;r*a/(e*e)>t&&(e=Math.sqrt(r*a/t));let o=Math.ceil(r/e),i=Math.ceil(a/e);P=o*i;let l=()=>new Float32Array(P);N=l(),X=l(),q=l(),W=l(),H=l(),V=l(),$=l(),j=l(),K=l(),Y=l(),Q=l(),Z=l(),J=l().fill(1e4),ee=new Float32Array(10*P);let n=0;for(let t=0;t<i;t++)for(let r=0;r<o;r++)N[n]=-48+(r+.5+(Math.random()-.5)*.9)*e,X[n]=-48+(t+.5+(Math.random()-.5)*.9)*e,q[n]=Math.pow(Math.random(),1.6),W[n]=Math.random(),H[n]=3+10*q[n],V[n]=N[n],$[n]=X[n]+160,Y[n]=1,n++})()),A?.update()},frame(e){if(!T)return;let a=e.time,i=e.dt,l=e.pointer.x/C,n=F-e.pointer.y/C,f=e.pointer.charge,u=e.reveal;A&&(!A.ready||e.frame%20==0)&&A.update();let h=A?.ready?A:null;m&&(0,o.j)(A,e,w,F,er);let v=1;if(m){z<0&&(z=e.scroll);let t=i>0?(e.scroll-z)/i:0;z=e.scroll,L+=(t-L)*(1-Math.exp(-(8*i))),v=Math.max(-12,Math.min(40,1+26*L+5*e.scroll))}for(let t of e.bursts)if(!(t.id<=D)&&(et(t.x/C,F-t.y/C,t.power,260),B=0,p&&e.pointer.auto<.5)){let e=t.x/C,r=F-t.y/C,a=70+40*Math.random(),o=18+12*Math.random();Object.assign(S,{kind:1,x0:e-a,y0:r-o,x1:e+a,y1:r+o,age:0,step:-1}),S.dur=.22,S.shift=14+10*Math.random(),S.seed=Math.random()}e.bursts.length&&(D=Math.max(D,e.bursts[0].id));let E=c(B=Math.min(1,B+.9*i));if(p){for(let e of[U,S])e.kind&&(e.age+=i,e.age>=e.dur&&(e.kind=0));!U.kind&&u>.97&&a>k&&(((e,t)=>{let r=Math.random(),a=r<.38?1:r<.62?4:r<.82?2:3,[o,i,l,n]=1===a?[220,560,26,80]:2===a?[90,220,40,110]:3===a?[120,300,50,120]:[160,380,60,140],c=(er.x0+er.x1)/2,f=(er.y0+er.y1)/2,u=(er.x1-er.x0)/2,s=(er.y1-er.y0)/2;for(let r=0;r<10;r++){let r=o+(i-o)*Math.random(),h=l+(n-l)*Math.random(),v=Math.random()*x,d=60+200*Math.random(),m=Math.max(16,Math.min(w-16-r,c+Math.cos(v)*(u+d)-r/2)),p=Math.max(16,Math.min(F-16-h,f+Math.sin(v)*(s+d)-h/2)),y=m+r,g=p+h,M=!0;if(A?.ready)for(let e=0;e<9&&M;e++){let t=m+e%3*r/2,a=p+h*Math.floor(e/3)/2;36>A.sample(t,a)&&(M=!1)}let E=t.calm.rects;for(let e=0;e<t.calm.n&&M;e++){let t=E[4*e]/C-16,r=E[4*e+2]/C+16,a=F-E[4*e+3]/C-16,o=F-E[4*e+1]/C+16;m<r&&y>t&&p<o&&g>a&&(M=!1)}if(M)return Object.assign(e,{kind:a,x0:m,y0:p,x1:y,y1:g,age:0,step:-1,seed:Math.random()}),e.dur=.12+.18*Math.random(),e.shift=10+24*Math.random(),!0}return!1})(U,e)&&(0,t.I)(2200)?k=a+4.5+3.5*Math.random():(U.kind=0,k=a+.6))}let ea=4===U.kind?U:null,eo=0,ei=0;if(ea){let e=Math.floor(ea.age/.07);e!==ea.step&&(ea.step=e,eo=(.5>Math.random()?-1:1)*(8+10*Math.random()),ei=(Math.random()-.5)*6)}let el=e.arriveAge<10?Math.exp(-(1.3*e.arriveAge)):0,en=e.arriveAge<3?Math.exp(-e.arriveAge*(m?1.2:1.1)):0,ec=m?(er.x0+er.x1)/2:w/2,ex=m?(er.y0+er.y1)/2:1.35*F,ef=(er.x1-er.x0)/2,eu=(er.y1-er.y0)/2,es=m?900*e.arriveAge:.35*F+1100*e.arriveAge,eh=e.focusK,ev=(e.focus.x0+e.focus.x1)/2/C,ed=F-(e.focus.y0+e.focus.y1)/2/C,em=(e.focus.x1-e.focus.x0)/2/C+10,ep=(e.focus.y1-e.focus.y0)/2/C+10,ey=230*(1+.1*f),eg=92*(1-.42*f),eA=.55+2.6*f,eM=1.2*f,eE=F+96;for(let e=0;e<P;e++){let t=q[e],r=W[e],o=v;m&&J[e]<90&&(o+=2.5*(1-c(J[e]/90))),X[e]-=H[e]*i*o,X[e]<-48?(X[e]+=eE,$[e]+=eE):X[e]>F+48&&(X[e]-=eE,$[e]-=eE);let s=1.3*Math.sin(.0045*N[e]+.16*a+.7*r)+1.1*Math.cos(.0052*X[e]-.12*a),d=Math.cos(s),p=Math.sin(s),y=6+10*t,g=N[e]+d*y,A=X[e]+p*y,M=c((u-(.62*Math.min(1,Math.max(0,1-X[e]/F))+.2*r))/.16);if(A+=(1-M)*160,h){let t=h.sample(g,A);if(J[e]=t,t<64){h.grad(g,A,I);let e=(64-t)*.85,a=r<.5?-.45:.45;g+=(I[0]-I[1]*a)*e,A+=(I[1]+I[0]*a)*e}}let R=g-l,T=A-n,b=ey*(.9+.2*t),_=(1-c((Math.hypot(R,T)-.3*b)/(.7*b)))*M*(1-eh)*E,w=Z[e]+i*eA*_*_-1.6*i*(1-_)*Z[e];w>Math.PI?w-=x:w<-Math.PI&&(w+=x),Z[e]=w;let P=Math.atan2(T,R)+w+eM,D=Math.cos(P),B=Math.sin(P),z=eg*(.82+.36*t)*(1+.16*(r-.5))+6*Math.sin(5*P+1.7*a+4*t),L=g+(l+D*z-g)*_,U=A+(n+B*z-A)*_;if(f>.01){let e=f*_*1.6;L+=Math.sin(37*a+91*r)*e,U+=Math.cos(41*a+57*r)*e}let S=-B,k=D,O=0;if(eh>.001){let e=g-ev,o=A-ed,i=Math.hypot(e,o)+1e-4,l=e/i,n=o/i,x=Math.pow(Math.pow(Math.abs(l)/em,4)+Math.pow(Math.abs(n)/ep,4),-.25);if((O=(1-c((i-x)/150))*eh*M)>.001){let e=x+4+12*t+3*Math.sin(2*a+20*r);L+=(ev+l*e-L)*O,U+=(ed+n*e-U)*O,S+=(-n-S)*O,k+=(l-k)*O}}let G=Math.max(_,O),et=null!==ea&&V[e]>=ea.x0&&V[e]<=ea.x1&&$[e]>=ea.y0&&$[e]<=ea.y1,er=0,eR=0,eT=0;if(et)V[e]+=eo,$[e]+=ei;else{let t=22+70*G,r=2*Math.sqrt(t)*.6;if(er=j[e]+(t*(L-V[e])-r*j[e])*i,eR=K[e]+(t*(U-$[e])-r*K[e])*i,en){let t=V[e]-ec,r=$[e]-ex,a=0,o=0,l=0;if(m){let e=Math.abs(t)-ef,i=Math.abs(r)-eu;e>0&&i>0?(l=Math.hypot(e,i),a=Math.sign(t)*e/l,o=Math.sign(r)*i/l):e>i?(l=Math.max(e,0),a=Math.sign(t)||1):(l=Math.max(i,0),o=Math.sign(r)||1)}else l=Math.hypot(t,r)||1,a=t/l,o=r/l;let n=(l-es)/60,c=15e3*i*(eT=en*Math.exp(-n*n));er+=a*c,eR+=o*c}let a=Math.hypot(er,eR);a>2600&&(er*=2600/a,eR*=2600/a),V[e]+=er*i,$[e]+=eR*i}j[e]=er,K[e]=eR;let eb=d*(1-G)+S*G*2+er/140,e_=p*(1-G)+k*G*2+eR/140,eC=Math.hypot(eb,e_)||1;eb/=eC,e_/=eC;let ew=Math.min(1,7*i),eF=Y[e]+(eb-Y[e])*ew,eP=Q[e]+(e_-Q[e])*ew,eD=Math.hypot(eF,eP)||1;eF/=eD,eP/=eD,Y[e]=eF,Q[e]=eP;let eB=1,ez=0;if(h){let t=h.sample(V[e],$[e]);ez=Math.exp(-Math.max(t-60,0)/140),eB=c((t-8)/42)*(.55+.95*ez)}let eL=Math.min(Math.hypot(er,eR),2600),eI=((.16+.34*t)*(1+1.9*G)*(.72+.28*Math.sin(a*(1.1+2.3*r)+40*r))*M*(1+.8*el+2.2*eT)+f*_*.5)*eB*(et?1.4:1),eU=(4+5*t)*(1+.8*G+(m?Math.min(eL/220,2.4):Math.min(eL/500,1.6))),eS=10*e;ee[eS]=V[e]*C,ee[eS+1]=(F-$[e])*C,ee[eS+2]=eF,ee[eS+3]=-eP,ee[eS+4]=eU*C,ee[eS+5]=(1.3+1.2*t)*C,ee[eS+6]=eI,ee[eS+7]=et?.75:.36+.2*t+.34*G+.12*f*_+.15*el+.3*eT+.14*ez,ee[eS+8]=et?-Math.PI/2:.004*N[e]+.003*X[e]+.35*a+G*P,ee[eS+9]=(1-t)*1.4*C}(0,r.Q)(s,T),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.enable(s.BLEND),s.blendFunc(s.ONE,s.ONE),y.use(),s.uniform2f(y.u("uRes"),b,_),s.bindVertexArray(M),s.bindBuffer(s.ARRAY_BUFFER,R),s.bufferData(s.ARRAY_BUFFER,ee,s.DYNAMIC_DRAW),s.drawArraysInstanced(s.TRIANGLE_STRIP,0,4,P),s.bindVertexArray(null),s.disable(s.BLEND),(0,r.Q)(s,null,b,_),g.use(),d(g,e),(0,r.g)(s,0,T.tex),s.uniform1i(g.u("uParticles"),0),A&&(0,o.i)(s,g,A,1,er,C,F),p&&([U,S].forEach((e,t)=>{let r=e.kind>0&&e.kind<4;O[4*t]=e.x0*C,O[4*t+1]=(F-e.y1)*C,O[4*t+2]=e.x1*C,O[4*t+3]=(F-e.y0)*C,G[4*t]=r?e.kind:0,G[4*t+1]=e.age,G[4*t+2]=e.shift*C,G[4*t+3]=e.seed}),s.uniform4fv(g.u("uGRect"),O),s.uniform4fv(g.u("uGParam"),G)),(0,r.o)(s)},dispose(){(0,r.n)(s,T),A?.dispose(),s.deleteBuffer(E),s.deleteBuffer(R),s.deleteVertexArray(M),y.dispose(),g.dispose()}}}(e,"footer")}])},29039,e=>{var t=e.i(54666);function r(e,t,r,a,o,i,l){i[0]=0,l[0]=-1e20,l[1]=1e20,o[0]=e[t];for(let n=1,c=0;n<a;n++){o[n]=e[t+n*r];let a=n*n,x=0;do{let e=i[c];x=(o[n]-o[e]+a-e*e)/(n-e)/2}while(x<=l[c]&&--c>-1)i[++c]=n,l[c]=x,l[c+1]=1e20}for(let n=0,c=0;n<a;n++){for(;l[c+1]<n;)c++;let a=i[c],x=n-a;e[t+n*r]=o[a]+x*x}}function a(e,t,a,o,i,l){for(let n=0;n<t;n++)r(e,n,t,a,o,i,l);for(let n=0;n<a;n++)r(e,n*t,1,t,o,i,l)}e.s(["i",0,function(e,r,a,o,i,l,n){(0,t.g)(e,o,a.tex),e.uniform1i(r.u("uTitle"),o),e.uniform1f(r.u("uTitleOn"),+!!a.ready),e.uniform4f(r.u("uWord"),i.x0*l,(n-i.y1)*l,i.x1*l,(n-i.y0)*l)},"R",0,function(e,t){let r=new Map;return{update(){let a=t.offsetWidth;if(!a)return;let o=t.getBoundingClientRect(),i=o.width/a||1,l=new Set(e.querySelectorAll("[data-bg-body]"));for(let e of r.keys())l.has(e)||r.delete(e);for(let e of l){if(e.closest(".is-tilting"))continue;let t=e.getBoundingClientRect();if(t.width<.5||t.height<.5){r.delete(e);continue}r.set(e,{x0:(t.left-o.left)/i,y0:(t.top-o.top)/i,x1:(t.right-o.left)/i,y1:(t.bottom-o.top)/i})}},union(e,t){for(let a of(Object.assign(t,e),r.values()))t.x0=Math.min(t.x0,a.x0),t.y0=Math.min(t.y0,a.y0),t.x1=Math.max(t.x1,a.x1),t.y1=Math.max(t.y1,a.y1);return t}}},"I",0,function(e,t,r){let o=e.createTexture();if(!o)throw Error("createTexture failed");let i=document.createElement("canvas"),l=i.getContext("2d",{willReadFrequently:!0});if(!l)throw Error("2d context failed");let n=new Float64Array(0),c=new Float64Array(0),x=new Float64Array(0),f=new Float64Array(0),u=new Uint16Array(0),s="",h="loaded"===document.fonts.status;h||document.fonts.ready.then(()=>{h=!0});let v={ready:!1,version:0,tex:o,w:0,h:0,cx:1,cy:1,dist:new Float32Array(0),glyphs:[],box:{x0:0,y0:0,x1:0,y1:0},groups:[],update:function(d=!1){let m=r.offsetWidth,p=r.offsetHeight;if(!m||!p||!h)return!1;let y=function(e){let a=r.getBoundingClientRect(),o=a.width/e||1,i=document.createRange(),l=[],n=0;for(let e of t.querySelectorAll("[data-bg-text]")){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let e=t.nextNode();e;e=t.nextNode()){let t=e.parentElement;if(!t||t.closest('[aria-hidden="true"]'))continue;let r=getComputedStyle(t),c=parseFloat(r.fontSize)||16,x=`${r.fontStyle} ${r.fontWeight} ${c}px ${r.fontFamily}`,f="uppercase"===r.textTransform,u=e.textContent??"";for(let t=0;t<u.length;t++){let r=u[t];if(!r.trim())continue;i.setStart(e,t),i.setEnd(e,t+1);let s=i.getBoundingClientRect();if(s.width<.5||s.height<.5)continue;let h=(s.top-a.top)/o;l.push({ch:f?r.toUpperCase():r,x:(s.left-a.left)/o,y:h,w:s.width/o,h:s.height/o,size:c,font:x,group:n,top:h,bottom:h})}}n++}return l}(m),g=`${m}x${p}:`;for(let e of y)g+=`${e.ch}${Math.round(2*e.x)},${Math.round(2*e.y)},${Math.round(2*e.h)};`;if(!d&&g===s)return!1;s=g;let A=Math.max(2,Math.ceil(Math.sqrt(m*p/14e4))),M=Math.max(2,Math.ceil(m/A)),E=Math.max(2,Math.ceil(p/A)),R=M*E,T=M!==v.w||E!==v.h;if(T){i.width=M,i.height=E,n=new Float64Array(R),c=new Float64Array(R);let e=Math.max(M,E);x=new Float64Array(e),f=new Float64Array(e+1),u=new Uint16Array(e),v.dist=new Float32Array(R)}v.w=M,v.h=E,v.cx=m/M,v.cy=p/E,v.glyphs=y,l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,M,E),l.setTransform(M/m,0,0,E/p,0,0),l.fillStyle="#fff",l.textBaseline="alphabetic",l.textAlign="left";let b={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0},_=[];for(let e of y){l.font=e.font;let t=l.measureText(e.ch),r=t.fontBoundingBoxAscent||.8*e.size,a=t.fontBoundingBoxDescent||.2*e.size,o=e.y+e.h*r/(r+a);l.fillText(e.ch,e.x,o),e.top=o-(t.actualBoundingBoxAscent||.7*e.size),e.bottom=o+(t.actualBoundingBoxDescent||0);let i=_[e.group]??={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};i.x0=Math.min(i.x0,e.x),i.x1=Math.max(i.x1,e.x+e.w),i.y0=Math.min(i.y0,e.top),i.y1=Math.max(i.y1,e.bottom),b.x0=Math.min(b.x0,i.x0),b.x1=Math.max(b.x1,i.x1),b.y0=Math.min(b.y0,i.y0),b.y1=Math.max(b.y1,i.y1)}v.box=y.length?b:{x0:0,y0:0,x1:0,y1:0},v.groups=Array.from(_,e=>e??{x0:0,y0:0,x1:0,y1:0});let C=l.getImageData(0,0,M,E).data;for(let e=0;e<R;e++){let t=C[4*e+3]/255;if(t>=1)n[e]=0,c[e]=1e20;else if(t<=0)n[e]=1e20,c[e]=0;else{let r=.5-t;n[e]=r>0?r*r:0,c[e]=r<0?r*r:0}}y.length&&(a(n,M,E,x,u,f),a(c,M,E,x,u,f));let w=(v.cx+v.cy)/2,F=v.dist;for(let e=0;e<R;e++)F[e]=y.length?(Math.sqrt(n[e])-Math.sqrt(c[e]))*w:1e4;return e.bindTexture(e.TEXTURE_2D,o),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.texImage2D(e.TEXTURE_2D,0,e.R16F,M,E,0,e.RED,e.FLOAT,F),(T||!v.ready)&&(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),v.ready=y.length>0,v.version++,!0},sample:d,grad:function(e,t,r){let a=v.cx,o=v.cy,i=d(e+a,t)-d(e-a,t),l=d(e,t+o)-d(e,t-o),n=Math.hypot(i,l);if(n<1e-6){r[0]=0,r[1]=-1;return}r[0]=i/n,r[1]=l/n},dispose(){e.deleteTexture(o)}};function d(e,t){return function(e,t,r,a,o,i,l){if(!t||e.length<t*r)return 1e4;let n=i/a-.5,c=l/o-.5;n<0?n=0:n>t-1.001&&(n=t-1.001),c<0?c=0:c>r-1.001&&(c=r-1.001);let x=0|n,f=0|c,u=n-x,s=c-f,h=f*t+x,v=e[h]+(e[h+1]-e[h])*u;return v+(e[h+t]+(e[h+t+1]-e[h+t])*u-v)*s}(v.dist,v.w,v.h,v.cx,v.cy,e,t)}return v},"j",0,function(e,t,r,a,o){return e?.ready?Object.assign(o,e.box):t.anchorK>0?(o.x0=t.anchor.x0/t.px,o.x1=t.anchor.x1/t.px,o.y0=a-t.anchor.y1/t.px,o.y1=a-t.anchor.y0/t.px):(o.x0=o.x1=r/2,o.y0=o.y1=a/2),o}])}])})();