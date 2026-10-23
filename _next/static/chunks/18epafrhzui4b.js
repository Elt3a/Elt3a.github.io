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
`;e.s(["Z",0,f,"A",0,x,"B",0,c,"U",0,i,"K",0,n,"s",0,u],35478)},21600,e=>{var t=e.i(54666),r=e.i(35478),o=e.i(29039);let a=r.U+r.K+r.B+r.A+r.Z+`
uniform vec2 uRes;
uniform float uTime;
uniform float uPx;
uniform float uReveal;
uniform float uArrive;
uniform vec4 uPointer;
uniform vec4 uFocus;
uniform float uFocusK;
${r.s}
// Сглаженное поле расстояний — по нему идут контуры
uniform sampler2D uHull;
// x — фаза течения (в шагах), y — шаг, zw — наклон пирамиды (y вверх)
uniform vec4 uEcho;
// x — докуда дошло появление (пиксели раскладки), y — сила его фронта
uniform vec4 uEntry;
// Импульсы слова: x — радиус (пиксели раскладки), y — сила; 0 — пусто
uniform vec4 uPings[6];
in vec2 vUv;
out vec4 o;

const float HULL = 34.0;

float hullD(vec2 p) {
  if (uTitleOn < 0.5) return 1e4;
  return texture(uHull, vec2(p.x / uRes.x, 1.0 - p.y / uRes.y)).r;
}

float stroke(float d, float w) {
  return clamp(w * 0.5 + 0.5 - d, 0.0, 1.0);
}

// Импульс: резкий передний край, за ним мягкий хвост
float pulse(float x, float tail) {
  return x > 0.0 ? exp(-x * x / 128.0) : exp(x / tail);
}

void main() {
  vec2 p = gl_FragCoord.xy;
  vec2 uv = p / uRes;
  vec2 q = p / uPx;
  float t = uTime;
  float td = titleD(p);
  float rv = clamp(uReveal, 0.0, 1.0);
  float charge = uPointer.z;

  // Какой слой виден в точке при наклоне — две итерации неподвижной точки
  vec2 tilt = uEcho.zw * uPx;
  float d = hullD(p);
  d = hullD(p - max(d, 0.0) * tilt);
  d = hullD(p - max(d, 0.0) * tilt);

  /* Курсор тянет контуры к себе. Склон поправки держится ниже склона поля
     (|∇d| между буквами ~0.5), иначе у курсора контуры замыкались бы в
     островки */
  vec2 dm = q - uPointer.xy / uPx;
  float r2 = dot(dm, dm);
  float e = d - (14.0 + 18.0 * charge) * exp(-r2 / 12800.0) * smoothstep(HULL, HULL + 40.0, d);

  // Кнопка под курсором: контуры обходят и её — мягкий минимум с её рамкой
  if (uFocusK > 0.01) {
    vec2 c = 0.5 * (uFocus.xy + uFocus.zw) / uPx;
    vec2 h = 0.5 * (uFocus.zw - uFocus.xy) / uPx;
    vec2 v = abs(q - c) - h;
    float df = length(max(v, 0.0)) + min(max(v.x, v.y), 0.0) + 24.0;
    float k = 60.0;
    float hk = clamp(0.5 + 0.5 * (df - e) / k, 0.0, 1.0);
    e = mix(e, mix(df, e, hk) - k * hk * (1.0 - hk), uFocusK);
  }

  // Контуры: номер течёт наружу, расстояние до ближайшего — в пикселях буфера
  float gap = uEcho.y;
  float f = e / gap - uEcho.x;
  float fi = floor(f + 0.5);
  float fw = max(fwidth(e) / gap, 1e-4);
  float ld = abs(f - fi) / fw;
  float major = 1.0 - step(0.5, mod(fi, 4.0));
  float line = stroke(ld, (0.8 + 0.35 * major) * uPx);

  // Импульсы слова: зажигают контуры, по фронту — тонкий светлый след
  float ping = 0.0;
  float front = 0.0;
  for (int i = 0; i < 6; i++) {
    vec4 pg = uPings[i];
    if (pg.y <= 0.0) continue;
    float x = e - pg.x;
    float k = pg.y * exp(-max(pg.x, 0.0) / 700.0);
    ping += k * pulse(x, 70.0);
    front += k * exp(-x * x / 8.0);
  }

  // Появление — первый импульс: за ним контуры проявляются, до него пусто
  float fx = e - uEntry.x;
  float on = rv > 0.999 ? 1.0 : 1.0 - smoothstep(-120.0, 0.0, fx);
  front += uEntry.y * exp(-fx * fx / 8.0);
  ping += uEntry.y * 0.8 * pulse(fx, 90.0);

  // Клик: кольцо из точки клика зажигает контуры, по которым проходит
  float ring = 0.0;
  float ringLine = 0.0;
  for (int i = 0; i < 4; i++) {
    vec4 b = uBursts[i];
    if (b.z > 4.0) continue;
    float r = length(q - b.xy / uPx);
    float x = r - b.z * 380.0;
    float k = (0.4 + 0.6 * b.w) * exp(-b.z / 1.1) * smoothstep(0.0, 40.0, r);
    ring += k * pulse(x, 60.0);
    ringLine += k * stroke(abs(x) * uPx, 0.9 * uPx);
  }

  // Ярче у слова и у курсора; у самых букв и внутри них линий нет
  float near = exp(-max(e, 0.0) / 260.0);
  float lamp = exp(-r2 / 45000.0);
  float vis = smoothstep(HULL - 4.0, HULL + 16.0, d);

  float glow = (0.12 + 0.12 * major) * near + 0.03 + lamp * (0.16 + 0.3 * charge) + 0.12 * charge * near;
  vec3 lineC = mix(C_DEEP * 1.7, C_ACID, clamp(0.2 + 0.4 * near + 0.5 * lamp, 0.0, 1.0));
  vec3 col = C_BASE;
  col += lineC * line * glow * vis * on;
  col += mix(C_ACID, C_PALE, 0.3) * line * (ping + ring) * 0.55 * vis * on;
  col += mix(C_ACID, C_PALE, 0.5) * front * 0.22 * vis;
  col += C_ACID * ringLine * 0.22 * on;
  col += C_DEEP * (ping * 0.05 + ring * 0.04) * vis * on;

  // Края темнее — взгляд держится в середине
  vec2 vg = (uv - 0.5) * vec2(1.0, 1.25);
  col *= 1.0 - 0.35 * smoothstep(0.35, 0.95, length(vg));

  col = soft(col);
  col += grain(p, t) * 0.018;
  col = capLum(col, calmCap(max(calmAt(p), moat(td, 30.0))));
  o = vec4(max(col, 0.0), 1.0);
}`;e.s(["budget",0,24e5,"hero",0,{budget:24e5,create:e=>{let{gl:r,common:l}=e,i=(0,t.R)(r,t.F,a),n=(0,o.I)(r,e.host,e.layer),c=(0,o.S)(r,n,40),x={x0:0,y0:0,x1:0,y1:0},f=[],u=new Float32Array(24),m=1,s=1,p=1,E=1,h=1,d=0,v=26,T=0,y=0,_=0,g=0,R=-1,A=0,w=0,P=0/0,U=1.2,D=0;return{resize(e,t,r){m=e,s=t,E=e/(p=r),h=t/p,n.update()},frame(e){let a,M=e.dt;n.ready&&e.frame%20!=0||n.update(),c.update(),(0,o.j)(n,e,E,h,x),n.ready&&(!D||e.frame%20==0)&&(D=Math.min(1400,Math.max(300,c.sample(1,1),c.sample(E-1,1),c.sample(1,h-1),c.sample(E-1,h-1)))),R<0&&(R=e.scroll);let C=M>0?(e.scroll-R)/M:0;R=e.scroll,A+=(C-A)*(1-Math.exp(-(6*M)));let F=e.pointer.charge;for(let t of(T+=(90*(26*(1-.32*F)-v)-2*Math.sqrt(90)*.45*T)*M,v+=T*M,e.bursts))!(t.id<=w)&&t.power>.5&&(f.unshift({r:0,v:520,k:.6+1.2*(t.power-.5)/.5}),y=Math.max(y,t.power));e.bursts.length&&(w=Math.max(w,e.bursts[0].id)),y*=Math.exp(-M/.45);let L=38*(1+Math.min(8,25*Math.abs(A)))-240*F+600*y;d+=L*M/v,e.reveal>.95&&F<.15&&(U-=M)<=0&&(f.unshift({r:0,v:230,k:1}),U=2.8);let b=e.arriveAge;Number.isNaN(P)&&(P=b),b<P&&(P=-1);for(let e=0;e<3;e++){let t=.22*e;P<t&&b>=t&&f.unshift({r:0,v:480,k:1.5-.3*e})}P=b;for(let e=f.length-1;e>=0;e--){let t=f[e];t.r+=t.v*M,t.r>D+150&&f.splice(e,1)}f.length>6&&(f.length=6);for(let e=0;e<6;e++){let t=f[e];u[4*e]=t?t.r:0,u[4*e+1]=t?t.k:0,u[4*e+2]=0,u[4*e+3]=0}let I=(x.x0+x.x1)/2,S=(x.y0+x.y1)/2,X=Math.max(-1,Math.min(1,(e.pointer.x/p-I)/(E/2))),z=Math.max(-1,Math.min(1,(h-e.pointer.y/p-S)/(h/2))),N=1-Math.exp(-(3*M));_+=(.07*X-_)*N,g+=(-.07*z-.1*e.scroll-g)*N;let B=e.reveal,k=-20+((D||900)+160)*B,G=B<.999?1.4*(1-(a=Math.min(1,Math.max(0,(B-.8)/(1-.8))))*a*(3-2*a)):0;(0,t.Q)(r,null,m,s),i.use(),l(i,e),(0,o.i)(r,i,n,0,x,p,h),(0,t.g)(r,1,c.tex),r.uniform1i(i.u("uHull"),1),r.uniform4f(i.u("uEcho"),d,v,_,g),r.uniform4f(i.u("uEntry"),k,G,0,0),r.uniform4fv(i.u("uPings"),u),(0,t.o)(r)},dispose(){c.dispose(),n.dispose(),i.dispose()}}}}])},29039,e=>{var t=e.i(54666);function r(e,t,r,o,a,l,i){l[0]=0,i[0]=-1e20,i[1]=1e20,a[0]=e[t];for(let n=1,c=0;n<o;n++){a[n]=e[t+n*r];let o=n*n,x=0;do{let e=l[c];x=(a[n]-a[e]+o-e*e)/(n-e)/2}while(x<=i[c]&&--c>-1)l[++c]=n,i[c]=x,i[c+1]=1e20}for(let n=0,c=0;n<o;n++){for(;i[c+1]<n;)c++;let o=l[c],x=n-o;e[t+n*r]=a[o]+x*x}}function o(e,t,o,a,l,i){for(let n=0;n<t;n++)r(e,n,t,o,a,l,i);for(let n=0;n<o;n++)r(e,n*t,1,t,a,l,i)}function a(e,t,r,o,a,l,i){if(!t||e.length<t*r)return 1e4;let n=l/o-.5,c=i/a-.5;n<0?n=0:n>t-1.001&&(n=t-1.001),c<0?c=0:c>r-1.001&&(c=r-1.001);let x=0|n,f=0|c,u=n-x,m=c-f,s=f*t+x,p=e[s]+(e[s+1]-e[s])*u;return p+(e[s+t]+(e[s+t+1]-e[s+t])*u-p)*m}e.s(["i",0,function(e,r,o,a,l,i,n){(0,t.g)(e,a,o.tex),e.uniform1i(r.u("uTitle"),a),e.uniform1f(r.u("uTitleOn"),+!!o.ready),e.uniform4f(r.u("uWord"),l.x0*i,(n-l.y1)*i,l.x1*i,(n-l.y0)*i)},"R",0,function(e,t){let r=new Map;return{update(){let o=t.offsetWidth;if(!o)return;let a=t.getBoundingClientRect(),l=a.width/o||1,i=new Set(e.querySelectorAll("[data-bg-body]"));for(let e of r.keys())i.has(e)||r.delete(e);for(let e of i){if(e.closest(".is-tilting"))continue;let t=e.getBoundingClientRect();if(t.width<.5||t.height<.5){r.delete(e);continue}r.set(e,{x0:(t.left-a.left)/l,y0:(t.top-a.top)/l,x1:(t.right-a.left)/l,y1:(t.bottom-a.top)/l})}},union(e,t){for(let o of(Object.assign(t,e),r.values()))t.x0=Math.min(t.x0,o.x0),t.y0=Math.min(t.y0,o.y0),t.x1=Math.max(t.x1,o.x1),t.y1=Math.max(t.y1,o.y1);return t}}},"S",0,function(e,t,r){let o=e.createTexture();if(!o)throw Error("createTexture failed");let l=-1,i=new Float32Array(0),n=new Float32Array(0),c={w:0,h:0,cx:1,cy:1},x=(e,t,r,o,a,l)=>{let i=l?r:o,n=l?o:r,c=l?1:r,x=1/(2*a+1);for(let o=0;o<n;o++){let n=l?o*r:o,f=t=>e[n+Math.min(i-1,Math.max(0,t))*c],u=0;for(let e=-a;e<=a;e++)u+=f(e);for(let e=0;e<i;e++)t[n+e*c]=u*x,u+=f(e+a+1)-f(e-a)}};return{tex:o,update(){if(!t.ready||l===t.version)return;l=t.version;let{w:a,h:f}=t;i.length!==a*f&&(i=new Float32Array(a*f),n=new Float32Array(a*f));let u=Math.max(1,Math.round(r/((t.cx+t.cy)/2)/2));x(t.dist,i,a,f,u,!0),x(i,n,a,f,u,!1),x(n,i,a,f,u,!0),x(i,n,a,f,u,!1),Object.assign(c,{w:a,h:f,cx:t.cx,cy:t.cy}),e.bindTexture(e.TEXTURE_2D,o),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.texImage2D(e.TEXTURE_2D,0,e.R16F,a,f,0,e.RED,e.FLOAT,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},sample:(e,t)=>a(n,c.w,c.h,c.cx,c.cy,e,t),dispose(){e.deleteTexture(o)}}},"I",0,function(e,t,r){let l=e.createTexture();if(!l)throw Error("createTexture failed");let i=document.createElement("canvas"),n=i.getContext("2d",{willReadFrequently:!0});if(!n)throw Error("2d context failed");let c=new Float64Array(0),x=new Float64Array(0),f=new Float64Array(0),u=new Float64Array(0),m=new Uint16Array(0),s="",p="loaded"===document.fonts.status;p||document.fonts.ready.then(()=>{p=!0});let E={ready:!1,version:0,tex:l,w:0,h:0,cx:1,cy:1,dist:new Float32Array(0),glyphs:[],box:{x0:0,y0:0,x1:0,y1:0},groups:[],update:function(a=!1){let h=r.offsetWidth,d=r.offsetHeight;if(!h||!d||!p)return!1;let v=function(e){let o=r.getBoundingClientRect(),a=o.width/e||1,l=document.createRange(),i=[],n=0;for(let e of t.querySelectorAll("[data-bg-text]")){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let e=t.nextNode();e;e=t.nextNode()){let t=e.parentElement;if(!t||t.closest('[aria-hidden="true"]'))continue;let r=getComputedStyle(t),c=parseFloat(r.fontSize)||16,x=`${r.fontStyle} ${r.fontWeight} ${c}px ${r.fontFamily}`,f="uppercase"===r.textTransform,u=e.textContent??"";for(let t=0;t<u.length;t++){let r=u[t];if(!r.trim())continue;l.setStart(e,t),l.setEnd(e,t+1);let m=l.getBoundingClientRect();if(m.width<.5||m.height<.5)continue;let s=(m.top-o.top)/a;i.push({ch:f?r.toUpperCase():r,x:(m.left-o.left)/a,y:s,w:m.width/a,h:m.height/a,size:c,font:x,group:n,top:s,bottom:s})}}n++}return i}(h),T=`${h}x${d}:`;for(let e of v)T+=`${e.ch}${Math.round(2*e.x)},${Math.round(2*e.y)},${Math.round(2*e.h)};`;if(!a&&T===s)return!1;s=T;let y=Math.max(2,Math.ceil(Math.sqrt(h*d/14e4))),_=Math.max(2,Math.ceil(h/y)),g=Math.max(2,Math.ceil(d/y)),R=_*g,A=_!==E.w||g!==E.h;if(A){i.width=_,i.height=g,c=new Float64Array(R),x=new Float64Array(R);let e=Math.max(_,g);f=new Float64Array(e),u=new Float64Array(e+1),m=new Uint16Array(e),E.dist=new Float32Array(R)}E.w=_,E.h=g,E.cx=h/_,E.cy=d/g,E.glyphs=v,n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,_,g),n.setTransform(_/h,0,0,g/d,0,0),n.fillStyle="#fff",n.textBaseline="alphabetic",n.textAlign="left";let w={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0},P=[];for(let e of v){n.font=e.font;let t=n.measureText(e.ch),r=t.fontBoundingBoxAscent||.8*e.size,o=t.fontBoundingBoxDescent||.2*e.size,a=e.y+e.h*r/(r+o);n.fillText(e.ch,e.x,a),e.top=a-(t.actualBoundingBoxAscent||.7*e.size),e.bottom=a+(t.actualBoundingBoxDescent||0);let l=P[e.group]??={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};l.x0=Math.min(l.x0,e.x),l.x1=Math.max(l.x1,e.x+e.w),l.y0=Math.min(l.y0,e.top),l.y1=Math.max(l.y1,e.bottom),w.x0=Math.min(w.x0,l.x0),w.x1=Math.max(w.x1,l.x1),w.y0=Math.min(w.y0,l.y0),w.y1=Math.max(w.y1,l.y1)}E.box=v.length?w:{x0:0,y0:0,x1:0,y1:0},E.groups=Array.from(P,e=>e??{x0:0,y0:0,x1:0,y1:0});let U=n.getImageData(0,0,_,g).data;for(let e=0;e<R;e++){let t=U[4*e+3]/255;if(t>=1)c[e]=0,x[e]=1e20;else if(t<=0)c[e]=1e20,x[e]=0;else{let r=.5-t;c[e]=r>0?r*r:0,x[e]=r<0?r*r:0}}v.length&&(o(c,_,g,f,m,u),o(x,_,g,f,m,u));let D=(E.cx+E.cy)/2,M=E.dist;for(let e=0;e<R;e++)M[e]=v.length?(Math.sqrt(c[e])-Math.sqrt(x[e]))*D:1e4;return e.bindTexture(e.TEXTURE_2D,l),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.texImage2D(e.TEXTURE_2D,0,e.R16F,_,g,0,e.RED,e.FLOAT,M),(A||!E.ready)&&(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),E.ready=v.length>0,E.version++,!0},sample:h,grad:function(e,t,r){let o=E.cx,a=E.cy,l=h(e+o,t)-h(e-o,t),i=h(e,t+a)-h(e,t-a),n=Math.hypot(l,i);if(n<1e-6){r[0]=0,r[1]=-1;return}r[0]=l/n,r[1]=i/n},dispose(){e.deleteTexture(l)}};function h(e,t){return a(E.dist,E.w,E.h,E.cx,E.cy,e,t)}return E},"j",0,function(e,t,r,o,a){return e?.ready?Object.assign(a,e.box):t.anchorK>0?(a.x0=t.anchor.x0/t.px,a.x1=t.anchor.x1/t.px,a.y0=o-t.anchor.y1/t.px,a.y1=o-t.anchor.y0/t.px):(a.x0=a.x1=r/2,a.y0=a.y1=o/2),a}])}])})();