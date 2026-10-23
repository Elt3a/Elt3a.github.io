(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54666,35478,e=>{let t=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;function r(e,t,r){let a=e.createShader(t);if(!a)throw Error("createShader failed");if(e.shaderSource(a,r),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(a)??"";e.deleteShader(a);let o=r.split("\n").map((e,t)=>`${String(t+1).padStart(4)}  ${e}`).join("\n");throw Error(`Shader compile error:
${t}
${o}`)}return a}function a(e,t,r,o={}){let{float:i=!1,linear:l=!0,channels:n=4}=o,c=e.createTexture(),x=e.createFramebuffer();if(!c||!x)throw Error("createTarget failed");e.bindTexture(e.TEXTURE_2D,c);let f=l?e.LINEAR:e.NEAREST;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,f);let u=o.wrap??e.CLAMP_TO_EDGE;if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,u),i){let a=1===n?e.R16F:2===n?e.RG16F:e.RGBA16F,o=1===n?e.RED:2===n?e.RG:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,a,t,r,0,o,e.HALF_FLOAT,null)}else e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null);return e.bindFramebuffer(e.FRAMEBUFFER,x),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c,0),e.viewport(0,0,t,r),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null),{tex:c,fbo:x,w:t,h:r}}function o(e,t){t&&(e.deleteTexture(t.tex),e.deleteFramebuffer(t.fbo))}async function i(e,t,r,a){let o=getComputedStyle(document.documentElement).getPropertyValue("--font-mono").trim()||"monospace",i=Math.round(.66*a),l=`400 ${i}px ${o}`;try{await document.fonts.load(l,t.join(""))}catch{}let n=Math.ceil(t.length/16),c=document.createElement("canvas");c.width=16*r,c.height=n*a;let x=c.getContext("2d");if(!x)throw Error("2d context failed");return x.fillStyle="#000",x.fillRect(0,0,c.width,c.height),x.fillStyle="#fff",x.font=l,x.textAlign="center",x.textBaseline="middle",t.forEach((e,t)=>{let o=Math.floor(t/16)*a+a/2;x.fillText(e,t%16*r+r/2,o)}),{tex:function(e,t,r={}){let{linear:a=!0,mipmap:o=!1,flipY:i=!1}=r,l=e.createTexture();if(!l)throw Error("createTexture failed");return e.bindTexture(e.TEXTURE_2D,l),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,a?e.LINEAR:e.NEAREST),o?(e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR)):e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,a?e.LINEAR:e.NEAREST),l}(e,c,{linear:!0,mipmap:!0}),cols:16,rows:n}}e.s(["F",0,t,"Q",0,function(e,t,r,a){e.bindFramebuffer(e.FRAMEBUFFER,t?t.fbo:null),e.viewport(0,0,t?t.w:r??e.drawingBufferWidth,t?t.h:a??e.drawingBufferHeight)},"g",0,function(e,t,r){e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,r)},"Y",0,i,"_",0,function(e,t,r,i={}){let l={read:a(e,t,r,i),write:a(e,t,r,i),swap(){let e=l.read;l.read=l.write,l.write=e},dispose(){o(e,l.read),o(e,l.write)}};return l},"R",0,function(e,t,a){let o=e.createProgram();if(!o)throw Error("createProgram failed");let i=r(e,e.VERTEX_SHADER,t),l=r(e,e.FRAGMENT_SHADER,a);if(e.attachShader(o,i),e.attachShader(o,l),e.linkProgram(o),e.deleteShader(i),e.deleteShader(l),!e.getProgramParameter(o,e.LINK_STATUS))throw Error(`Program link error: ${e.getProgramInfoLog(o)}`);let n=new Map;return{handle:o,use:()=>e.useProgram(o),u:t=>(n.has(t)||n.set(t,e.getUniformLocation(o,t)),n.get(t)??null),dispose:()=>e.deleteProgram(o)}},"D",0,a,"n",0,o,"o",0,function(e){e.drawArrays(e.TRIANGLES,0,3)},"h",0,function(e,t,r,a,o=!1){let i=e.createTexture();if(!i)throw Error("createTexture failed");e.bindTexture(e.TEXTURE_2D,i),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.R8,t,r,0,e.RED,e.UNSIGNED_BYTE,a),e.pixelStorei(e.UNPACK_ALIGNMENT,4);let l=o?e.LINEAR:e.NEAREST;return e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i}],54666);let l=`#version 300 es
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
`;e.s(["Z",0,f,"A",0,x,"B",0,c,"U",0,l,"K",0,n,"s",0,u],35478)},8347,e=>{var t=e.i(34543),r=e.i(54666),a=e.i(35478),o=e.i(29039);let i=`#version 300 es
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
#ifdef HERO
  // Ров вокруг каждой буквы: у контура фон не светлее потолка мелкого текста
  col = capLum(col, calmCap(max(calmAt(p), moat(td, 44.0))));
#else
  col = capLum(col, calmCap(calmAt(p)));
#endif
  o = vec4(max(col, 0.0), 1.0);
}`,c=e=>{let t=e<0?0:e>1?1:e;return t*t*(3-2*t)},x=2*Math.PI,f=()=>({kind:0,x0:0,y0:0,x1:0,y1:0,age:0,dur:0,shift:0,seed:0,step:-1});function u(e,u){let{gl:h,caps:s,coarse:d,common:m}=e,v="footer"!==u,p="glitch"===u,E=(0,r.R)(h,i,l),y=(0,r.R)(h,r.F,a.U+("footer"!==u?"#define HERO 1\n":"")+("glitch"===u?"#define GLITCH 1\n":"")+a.K+a.B+a.A+a.Z+n),T=v?(0,o.I)(h,e.host,e.layer):null,R=h.createVertexArray(),A=h.createBuffer(),_=h.createBuffer();h.bindVertexArray(R),h.bindBuffer(h.ARRAY_BUFFER,A),h.bufferData(h.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),h.STATIC_DRAW),h.enableVertexAttribArray(0),h.vertexAttribPointer(0,2,h.FLOAT,!1,0,0),h.bindBuffer(h.ARRAY_BUFFER,_);h.enableVertexAttribArray(1),h.vertexAttribPointer(1,4,h.FLOAT,!1,40,0),h.vertexAttribDivisor(1,1),h.enableVertexAttribArray(2),h.vertexAttribPointer(2,4,h.FLOAT,!1,40,16),h.vertexAttribDivisor(2,1),h.enableVertexAttribArray(3),h.vertexAttribPointer(3,2,h.FLOAT,!1,40,32),h.vertexAttribDivisor(3,1),h.bindVertexArray(null);let g=null,M=1,b=1,P=1,w=0,C=0,D=0,F=0,U=1,I=-1,L=0,B=[0,0],z=f(),S=f(),X=4+3*Math.random(),N=new Float32Array(8),G=new Float32Array(8),O=new Float32Array(0),k=O,W=O,q=O,H=O,$=O,V=O,K=O,j=O,Y=O,Q=O,Z=O,J=O,ee=O,et=(e,t,r,a)=>{for(let o=0;o<D;o++){let i=$[o]-e,l=V[o]-t,n=Math.hypot(i,l)+1,c=1500*r*Math.exp(-n/a)/n;K[o]+=i*c-l*c*.25,j[o]+=l*c+i*c*.25}},er={x0:0,y0:0,x1:0,y1:0};return{resize(e,t,a){M=e,b=t,P=a,(0,r.n)(h,g),g=(0,r.D)(h,e,t,{float:s.float});let o=e/P,i=t/P;(Math.abs(o-w)>1||Math.abs(i-C)>1)&&(w=o,C=i,(()=>{let e=d?28:21,t=d?1400:4e3,r=w+96,a=C+96;r*a/(e*e)>t&&(e=Math.sqrt(r*a/t));let o=Math.ceil(r/e),i=Math.ceil(a/e);D=o*i;let l=()=>new Float32Array(D);O=l(),k=l(),W=l(),q=l(),H=l(),$=l(),V=l(),K=l(),j=l(),Y=l(),Q=l(),Z=l(),J=l().fill(1e4),ee=new Float32Array(10*D);let n=0;for(let t=0;t<i;t++)for(let r=0;r<o;r++)O[n]=-48+(r+.5+(Math.random()-.5)*.9)*e,k[n]=-48+(t+.5+(Math.random()-.5)*.9)*e,W[n]=Math.pow(Math.random(),1.6),q[n]=Math.random(),H[n]=3+10*W[n],$[n]=O[n],V[n]=k[n]+160,Y[n]=1,n++})()),T?.update()},frame(e){if(!g)return;let a=e.time,i=e.dt,l=e.pointer.x/P,n=C-e.pointer.y/P,f=e.pointer.charge,u=e.reveal;T&&(!T.ready||e.frame%20==0)&&T.update();let s=T?.ready?T:null;v&&(0,o.j)(T,e,w,C,er);let d=1;if(v){I<0&&(I=e.scroll);let t=i>0?(e.scroll-I)/i:0;I=e.scroll,L+=(t-L)*(1-Math.exp(-(8*i))),d=Math.max(-12,Math.min(40,1+26*L+5*e.scroll))}for(let t of e.bursts)if(!(t.id<=F)&&(et(t.x/P,C-t.y/P,t.power,260),U=0,p&&e.pointer.auto<.5)){let e=t.x/P,r=C-t.y/P,a=70+40*Math.random(),o=18+12*Math.random();Object.assign(S,{kind:1,x0:e-a,y0:r-o,x1:e+a,y1:r+o,age:0,step:-1}),S.dur=.22,S.shift=14+10*Math.random(),S.seed=Math.random()}e.bursts.length&&(F=Math.max(F,e.bursts[0].id));let A=c(U=Math.min(1,U+.9*i));if(p){for(let e of[z,S])e.kind&&(e.age+=i,e.age>=e.dur&&(e.kind=0));!z.kind&&u>.97&&a>X&&(((e,t)=>{let r=Math.random(),a=r<.38?1:r<.62?4:r<.82?2:3,[o,i,l,n]=1===a?[220,560,26,80]:2===a?[90,220,40,110]:3===a?[120,300,50,120]:[160,380,60,140],c=(er.x0+er.x1)/2,f=(er.y0+er.y1)/2,u=(er.x1-er.x0)/2,h=(er.y1-er.y0)/2;for(let r=0;r<10;r++){let r=o+(i-o)*Math.random(),s=l+(n-l)*Math.random(),d=Math.random()*x,m=60+200*Math.random(),v=Math.max(16,Math.min(w-16-r,c+Math.cos(d)*(u+m)-r/2)),p=Math.max(16,Math.min(C-16-s,f+Math.sin(d)*(h+m)-s/2)),E=v+r,y=p+s,R=!0;if(T?.ready)for(let e=0;e<9&&R;e++){let t=v+e%3*r/2,a=p+s*Math.floor(e/3)/2;36>T.sample(t,a)&&(R=!1)}let A=t.calm.rects;for(let e=0;e<t.calm.n&&R;e++){let t=A[4*e]/P-16,r=A[4*e+2]/P+16,a=C-A[4*e+3]/P-16,o=C-A[4*e+1]/P+16;v<r&&E>t&&p<o&&y>a&&(R=!1)}if(R)return Object.assign(e,{kind:a,x0:v,y0:p,x1:E,y1:y,age:0,step:-1,seed:Math.random()}),e.dur=.12+.18*Math.random(),e.shift=10+24*Math.random(),!0}return!1})(z,e)&&(0,t.I)(2200)?X=a+4.5+3.5*Math.random():(z.kind=0,X=a+.6))}let ea=4===z.kind?z:null,eo=0,ei=0;if(ea){let e=Math.floor(ea.age/.07);e!==ea.step&&(ea.step=e,eo=(.5>Math.random()?-1:1)*(8+10*Math.random()),ei=(Math.random()-.5)*6)}let el=e.arriveAge<10?Math.exp(-(1.3*e.arriveAge)):0,en=e.arriveAge<3?Math.exp(-e.arriveAge*(v?1.2:1.1)):0,ec=v?(er.x0+er.x1)/2:w/2,ex=v?(er.y0+er.y1)/2:1.35*C,ef=(er.x1-er.x0)/2,eu=(er.y1-er.y0)/2,eh=v?900*e.arriveAge:.35*C+1100*e.arriveAge,es=e.focusK,ed=(e.focus.x0+e.focus.x1)/2/P,em=C-(e.focus.y0+e.focus.y1)/2/P,ev=(e.focus.x1-e.focus.x0)/2/P+10,ep=(e.focus.y1-e.focus.y0)/2/P+10,eE=230*(1+.1*f),ey=92*(1-.42*f),eT=.55+2.6*f,eR=1.2*f,eA=C+96;for(let e=0;e<D;e++){let t=W[e],r=q[e],o=d;v&&J[e]<90&&(o+=2.5*(1-c(J[e]/90))),k[e]-=H[e]*i*o,k[e]<-48?(k[e]+=eA,V[e]+=eA):k[e]>C+48&&(k[e]-=eA,V[e]-=eA);let h=1.3*Math.sin(.0045*O[e]+.16*a+.7*r)+1.1*Math.cos(.0052*k[e]-.12*a),m=Math.cos(h),p=Math.sin(h),E=6+10*t,y=O[e]+m*E,T=k[e]+p*E,R=c((u-(.62*Math.min(1,Math.max(0,1-k[e]/C))+.2*r))/.16);if(T+=(1-R)*160,s){let t=s.sample(y,T);if(J[e]=t,t<64){s.grad(y,T,B);let e=(64-t)*.85,a=r<.5?-.45:.45;y+=(B[0]-B[1]*a)*e,T+=(B[1]+B[0]*a)*e}}let _=y-l,g=T-n,M=eE*(.9+.2*t),b=(1-c((Math.hypot(_,g)-.3*M)/(.7*M)))*R*(1-es)*A,w=Z[e]+i*eT*b*b-1.6*i*(1-b)*Z[e];w>Math.PI?w-=x:w<-Math.PI&&(w+=x),Z[e]=w;let D=Math.atan2(g,_)+w+eR,F=Math.cos(D),U=Math.sin(D),I=ey*(.82+.36*t)*(1+.16*(r-.5))+6*Math.sin(5*D+1.7*a+4*t),L=y+(l+F*I-y)*b,z=T+(n+U*I-T)*b;if(f>.01){let e=f*b*1.6;L+=Math.sin(37*a+91*r)*e,z+=Math.cos(41*a+57*r)*e}let S=-U,X=F,N=0;if(es>.001){let e=y-ed,o=T-em,i=Math.hypot(e,o)+1e-4,l=e/i,n=o/i,x=Math.pow(Math.pow(Math.abs(l)/ev,4)+Math.pow(Math.abs(n)/ep,4),-.25);if((N=(1-c((i-x)/150))*es*R)>.001){let e=x+4+12*t+3*Math.sin(2*a+20*r);L+=(ed+l*e-L)*N,z+=(em+n*e-z)*N,S+=(-n-S)*N,X+=(l-X)*N}}let G=Math.max(b,N),et=null!==ea&&$[e]>=ea.x0&&$[e]<=ea.x1&&V[e]>=ea.y0&&V[e]<=ea.y1,er=0,e_=0,eg=0;if(et)$[e]+=eo,V[e]+=ei;else{let t=22+70*G,r=2*Math.sqrt(t)*.6;if(er=K[e]+(t*(L-$[e])-r*K[e])*i,e_=j[e]+(t*(z-V[e])-r*j[e])*i,en){let t=$[e]-ec,r=V[e]-ex,a=0,o=0,l=0;if(v){let e=Math.abs(t)-ef,i=Math.abs(r)-eu;e>0&&i>0?(l=Math.hypot(e,i),a=Math.sign(t)*e/l,o=Math.sign(r)*i/l):e>i?(l=Math.max(e,0),a=Math.sign(t)||1):(l=Math.max(i,0),o=Math.sign(r)||1)}else l=Math.hypot(t,r)||1,a=t/l,o=r/l;let n=(l-eh)/60,c=15e3*i*(eg=en*Math.exp(-n*n));er+=a*c,e_+=o*c}let a=Math.hypot(er,e_);a>2600&&(er*=2600/a,e_*=2600/a),$[e]+=er*i,V[e]+=e_*i}K[e]=er,j[e]=e_;let eM=m*(1-G)+S*G*2+er/140,eb=p*(1-G)+X*G*2+e_/140,eP=Math.hypot(eM,eb)||1;eM/=eP,eb/=eP;let ew=Math.min(1,7*i),eC=Y[e]+(eM-Y[e])*ew,eD=Q[e]+(eb-Q[e])*ew,eF=Math.hypot(eC,eD)||1;eC/=eF,eD/=eF,Y[e]=eC,Q[e]=eD;let eU=1,eI=0;if(s){let t=s.sample($[e],V[e]);eI=Math.exp(-Math.max(t-60,0)/140),eU=c((t-8)/42)*(.55+.95*eI)}let eL=Math.min(Math.hypot(er,e_),2600),eB=((.16+.34*t)*(1+1.9*G)*(.72+.28*Math.sin(a*(1.1+2.3*r)+40*r))*R*(1+.8*el+2.2*eg)+f*b*.5)*eU*(et?1.4:1),ez=(4+5*t)*(1+.8*G+(v?Math.min(eL/220,2.4):Math.min(eL/500,1.6))),eS=10*e;ee[eS]=$[e]*P,ee[eS+1]=(C-V[e])*P,ee[eS+2]=eC,ee[eS+3]=-eD,ee[eS+4]=ez*P,ee[eS+5]=(1.3+1.2*t)*P,ee[eS+6]=eB,ee[eS+7]=et?.75:.36+.2*t+.34*G+.12*f*b+.15*el+.3*eg+.14*eI,ee[eS+8]=et?-Math.PI/2:.004*O[e]+.003*k[e]+.35*a+G*D,ee[eS+9]=(1-t)*1.4*P}(0,r.Q)(h,g),h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.enable(h.BLEND),h.blendFunc(h.ONE,h.ONE),E.use(),h.uniform2f(E.u("uRes"),M,b),h.bindVertexArray(R),h.bindBuffer(h.ARRAY_BUFFER,_),h.bufferData(h.ARRAY_BUFFER,ee,h.DYNAMIC_DRAW),h.drawArraysInstanced(h.TRIANGLE_STRIP,0,4,D),h.bindVertexArray(null),h.disable(h.BLEND),(0,r.Q)(h,null,M,b),y.use(),m(y,e),(0,r.g)(h,0,g.tex),h.uniform1i(y.u("uParticles"),0),T&&(0,o.i)(h,y,T,1,er,P,C),p&&([z,S].forEach((e,t)=>{let r=e.kind>0&&e.kind<4;N[4*t]=e.x0*P,N[4*t+1]=(C-e.y1)*P,N[4*t+2]=e.x1*P,N[4*t+3]=(C-e.y0)*P,G[4*t]=r?e.kind:0,G[4*t+1]=e.age,G[4*t+2]=e.shift*P,G[4*t+3]=e.seed}),h.uniform4fv(y.u("uGRect"),N),h.uniform4fv(y.u("uGParam"),G)),(0,r.o)(h)},dispose(){(0,r.n)(h,g),T?.dispose(),h.deleteBuffer(A),h.deleteBuffer(_),h.deleteVertexArray(R),E.dispose(),y.dispose()}}}e.s(["budget",0,26e5,"create",0,function(e){return u(e,"footer")},"hero",0,{budget:26e5,create:e=>u(e,"hero")},"heroGlitch",0,{budget:26e5,create:e=>u(e,"glitch")}])},29039,e=>{var t=e.i(54666);function r(e,t,r,a,o,i,l){i[0]=0,l[0]=-1e20,l[1]=1e20,o[0]=e[t];for(let n=1,c=0;n<a;n++){o[n]=e[t+n*r];let a=n*n,x=0;do{let e=i[c];x=(o[n]-o[e]+a-e*e)/(n-e)/2}while(x<=l[c]&&--c>-1)i[++c]=n,l[c]=x,l[c+1]=1e20}for(let n=0,c=0;n<a;n++){for(;l[c+1]<n;)c++;let a=i[c],x=n-a;e[t+n*r]=o[a]+x*x}}function a(e,t,a,o,i,l){for(let n=0;n<t;n++)r(e,n,t,a,o,i,l);for(let n=0;n<a;n++)r(e,n*t,1,t,o,i,l)}function o(e,t,r,a,o,i,l){if(!t||e.length<t*r)return 1e4;let n=i/a-.5,c=l/o-.5;n<0?n=0:n>t-1.001&&(n=t-1.001),c<0?c=0:c>r-1.001&&(c=r-1.001);let x=0|n,f=0|c,u=n-x,h=c-f,s=f*t+x,d=e[s]+(e[s+1]-e[s])*u;return d+(e[s+t]+(e[s+t+1]-e[s+t])*u-d)*h}e.s(["i",0,function(e,r,a,o,i,l,n){(0,t.g)(e,o,a.tex),e.uniform1i(r.u("uTitle"),o),e.uniform1f(r.u("uTitleOn"),+!!a.ready),e.uniform4f(r.u("uWord"),i.x0*l,(n-i.y1)*l,i.x1*l,(n-i.y0)*l)},"R",0,function(e,t){let r=new Map;return{update(){let a=t.offsetWidth;if(!a)return;let o=t.getBoundingClientRect(),i=o.width/a||1,l=new Set(e.querySelectorAll("[data-bg-body]"));for(let e of r.keys())l.has(e)||r.delete(e);for(let e of l){if(e.closest(".is-tilting"))continue;let t=e.getBoundingClientRect();if(t.width<.5||t.height<.5){r.delete(e);continue}r.set(e,{x0:(t.left-o.left)/i,y0:(t.top-o.top)/i,x1:(t.right-o.left)/i,y1:(t.bottom-o.top)/i})}},union(e,t){for(let a of(Object.assign(t,e),r.values()))t.x0=Math.min(t.x0,a.x0),t.y0=Math.min(t.y0,a.y0),t.x1=Math.max(t.x1,a.x1),t.y1=Math.max(t.y1,a.y1);return t}}},"S",0,function(e,t,r){let a=e.createTexture();if(!a)throw Error("createTexture failed");let i=-1,l=new Float32Array(0),n=new Float32Array(0),c={w:0,h:0,cx:1,cy:1},x=(e,t,r,a,o,i)=>{let l=i?r:a,n=i?a:r,c=i?1:r,x=1/(2*o+1);for(let a=0;a<n;a++){let n=i?a*r:a,f=t=>e[n+Math.min(l-1,Math.max(0,t))*c],u=0;for(let e=-o;e<=o;e++)u+=f(e);for(let e=0;e<l;e++)t[n+e*c]=u*x,u+=f(e+o+1)-f(e-o)}};return{tex:a,update(){if(!t.ready||i===t.version)return;i=t.version;let{w:o,h:f}=t;l.length!==o*f&&(l=new Float32Array(o*f),n=new Float32Array(o*f));let u=Math.max(1,Math.round(r/((t.cx+t.cy)/2)/2));x(t.dist,l,o,f,u,!0),x(l,n,o,f,u,!1),x(n,l,o,f,u,!0),x(l,n,o,f,u,!1),Object.assign(c,{w:o,h:f,cx:t.cx,cy:t.cy}),e.bindTexture(e.TEXTURE_2D,a),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.texImage2D(e.TEXTURE_2D,0,e.R16F,o,f,0,e.RED,e.FLOAT,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},sample:(e,t)=>o(n,c.w,c.h,c.cx,c.cy,e,t),dispose(){e.deleteTexture(a)}}},"I",0,function(e,t,r){let i=e.createTexture();if(!i)throw Error("createTexture failed");let l=document.createElement("canvas"),n=l.getContext("2d",{willReadFrequently:!0});if(!n)throw Error("2d context failed");let c=new Float64Array(0),x=new Float64Array(0),f=new Float64Array(0),u=new Float64Array(0),h=new Uint16Array(0),s="",d="loaded"===document.fonts.status;d||document.fonts.ready.then(()=>{d=!0});let m={ready:!1,version:0,tex:i,w:0,h:0,cx:1,cy:1,dist:new Float32Array(0),glyphs:[],box:{x0:0,y0:0,x1:0,y1:0},groups:[],update:function(o=!1){let v=r.offsetWidth,p=r.offsetHeight;if(!v||!p||!d)return!1;let E=function(e){let a=r.getBoundingClientRect(),o=a.width/e||1,i=document.createRange(),l=[],n=0;for(let e of t.querySelectorAll("[data-bg-text]")){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let e=t.nextNode();e;e=t.nextNode()){let t=e.parentElement;if(!t||t.closest('[aria-hidden="true"]'))continue;let r=getComputedStyle(t),c=parseFloat(r.fontSize)||16,x=`${r.fontStyle} ${r.fontWeight} ${c}px ${r.fontFamily}`,f="uppercase"===r.textTransform,u=e.textContent??"";for(let t=0;t<u.length;t++){let r=u[t];if(!r.trim())continue;i.setStart(e,t),i.setEnd(e,t+1);let h=i.getBoundingClientRect();if(h.width<.5||h.height<.5)continue;let s=(h.top-a.top)/o;l.push({ch:f?r.toUpperCase():r,x:(h.left-a.left)/o,y:s,w:h.width/o,h:h.height/o,size:c,font:x,group:n,top:s,bottom:s})}}n++}return l}(v),y=`${v}x${p}:`;for(let e of E)y+=`${e.ch}${Math.round(2*e.x)},${Math.round(2*e.y)},${Math.round(2*e.h)};`;if(!o&&y===s)return!1;s=y;let T=Math.max(2,Math.ceil(Math.sqrt(v*p/14e4))),R=Math.max(2,Math.ceil(v/T)),A=Math.max(2,Math.ceil(p/T)),_=R*A,g=R!==m.w||A!==m.h;if(g){l.width=R,l.height=A,c=new Float64Array(_),x=new Float64Array(_);let e=Math.max(R,A);f=new Float64Array(e),u=new Float64Array(e+1),h=new Uint16Array(e),m.dist=new Float32Array(_)}m.w=R,m.h=A,m.cx=v/R,m.cy=p/A,m.glyphs=E,n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,R,A),n.setTransform(R/v,0,0,A/p,0,0),n.fillStyle="#fff",n.textBaseline="alphabetic",n.textAlign="left";let M={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0},b=[];for(let e of E){n.font=e.font;let t=n.measureText(e.ch),r=t.fontBoundingBoxAscent||.8*e.size,a=t.fontBoundingBoxDescent||.2*e.size,o=e.y+e.h*r/(r+a);n.fillText(e.ch,e.x,o),e.top=o-(t.actualBoundingBoxAscent||.7*e.size),e.bottom=o+(t.actualBoundingBoxDescent||0);let i=b[e.group]??={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};i.x0=Math.min(i.x0,e.x),i.x1=Math.max(i.x1,e.x+e.w),i.y0=Math.min(i.y0,e.top),i.y1=Math.max(i.y1,e.bottom),M.x0=Math.min(M.x0,i.x0),M.x1=Math.max(M.x1,i.x1),M.y0=Math.min(M.y0,i.y0),M.y1=Math.max(M.y1,i.y1)}m.box=E.length?M:{x0:0,y0:0,x1:0,y1:0},m.groups=Array.from(b,e=>e??{x0:0,y0:0,x1:0,y1:0});let P=n.getImageData(0,0,R,A).data;for(let e=0;e<_;e++){let t=P[4*e+3]/255;if(t>=1)c[e]=0,x[e]=1e20;else if(t<=0)c[e]=1e20,x[e]=0;else{let r=.5-t;c[e]=r>0?r*r:0,x[e]=r<0?r*r:0}}E.length&&(a(c,R,A,f,h,u),a(x,R,A,f,h,u));let w=(m.cx+m.cy)/2,C=m.dist;for(let e=0;e<_;e++)C[e]=E.length?(Math.sqrt(c[e])-Math.sqrt(x[e]))*w:1e4;return e.bindTexture(e.TEXTURE_2D,i),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.texImage2D(e.TEXTURE_2D,0,e.R16F,R,A,0,e.RED,e.FLOAT,C),(g||!m.ready)&&(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),m.ready=E.length>0,m.version++,!0},sample:v,grad:function(e,t,r){let a=m.cx,o=m.cy,i=v(e+a,t)-v(e-a,t),l=v(e,t+o)-v(e,t-o),n=Math.hypot(i,l);if(n<1e-6){r[0]=0,r[1]=-1;return}r[0]=i/n,r[1]=l/n},dispose(){e.deleteTexture(i)}};function v(e,t){return o(m.dist,m.w,m.h,m.cx,m.cy,e,t)}return m},"j",0,function(e,t,r,a,o){return e?.ready?Object.assign(o,e.box):t.anchorK>0?(o.x0=t.anchor.x0/t.px,o.x1=t.anchor.x1/t.px,o.y0=a-t.anchor.y1/t.px,o.y1=a-t.anchor.y0/t.px):(o.x0=o.x1=r/2,o.y0=o.y1=a/2),o}])}])})();