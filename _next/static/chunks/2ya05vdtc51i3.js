(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54666,35478,e=>{let t=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;function r(e,t,r){let o=e.createShader(t);if(!o)throw Error("createShader failed");if(e.shaderSource(o,r),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(o)??"";e.deleteShader(o);let a=r.split("\n").map((e,t)=>`${String(t+1).padStart(4)}  ${e}`).join("\n");throw Error(`Shader compile error:
${t}
${a}`)}return o}function o(e,t,r,a={}){let{float:l=!1,linear:i=!0,channels:n=4}=a,x=e.createTexture(),c=e.createFramebuffer();if(!x||!c)throw Error("createTarget failed");e.bindTexture(e.TEXTURE_2D,x);let f=i?e.LINEAR:e.NEAREST;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,f);let s=a.wrap??e.CLAMP_TO_EDGE;if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,s),l){let o=1===n?e.R16F:2===n?e.RG16F:e.RGBA16F,a=1===n?e.RED:2===n?e.RG:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,o,t,r,0,a,e.HALF_FLOAT,null)}else e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null);return e.bindFramebuffer(e.FRAMEBUFFER,c),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,x,0),e.viewport(0,0,t,r),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null),{tex:x,fbo:c,w:t,h:r}}function a(e,t){t&&(e.deleteTexture(t.tex),e.deleteFramebuffer(t.fbo))}async function l(e,t,r,o){let a=getComputedStyle(document.documentElement).getPropertyValue("--font-mono").trim()||"monospace",l=Math.round(.66*o),i=`400 ${l}px ${a}`;try{await document.fonts.load(i,t.join(""))}catch{}let n=Math.ceil(t.length/16),x=document.createElement("canvas");x.width=16*r,x.height=n*o;let c=x.getContext("2d");if(!c)throw Error("2d context failed");return c.fillStyle="#000",c.fillRect(0,0,x.width,x.height),c.fillStyle="#fff",c.font=i,c.textAlign="center",c.textBaseline="middle",t.forEach((e,t)=>{let a=Math.floor(t/16)*o+o/2;c.fillText(e,t%16*r+r/2,a)}),{tex:function(e,t,r={}){let{linear:o=!0,mipmap:a=!1,flipY:l=!1}=r,i=e.createTexture();if(!i)throw Error("createTexture failed");return e.bindTexture(e.TEXTURE_2D,i),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,o?e.LINEAR:e.NEAREST),a?(e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR)):e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,o?e.LINEAR:e.NEAREST),i}(e,x,{linear:!0,mipmap:!0}),cols:16,rows:n}}e.s(["F",0,t,"Q",0,function(e,t,r,o){e.bindFramebuffer(e.FRAMEBUFFER,t?t.fbo:null),e.viewport(0,0,t?t.w:r??e.drawingBufferWidth,t?t.h:o??e.drawingBufferHeight)},"g",0,function(e,t,r){e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,r)},"Y",0,l,"_",0,function(e,t,r,l={}){let i={read:o(e,t,r,l),write:o(e,t,r,l),swap(){let e=i.read;i.read=i.write,i.write=e},dispose(){a(e,i.read),a(e,i.write)}};return i},"R",0,function(e,t,o){let a=e.createProgram();if(!a)throw Error("createProgram failed");let l=r(e,e.VERTEX_SHADER,t),i=r(e,e.FRAGMENT_SHADER,o);if(e.attachShader(a,l),e.attachShader(a,i),e.linkProgram(a),e.deleteShader(l),e.deleteShader(i),!e.getProgramParameter(a,e.LINK_STATUS))throw Error(`Program link error: ${e.getProgramInfoLog(a)}`);let n=new Map;return{handle:a,use:()=>e.useProgram(a),u:t=>(n.has(t)||n.set(t,e.getUniformLocation(a,t)),n.get(t)??null),dispose:()=>e.deleteProgram(a)}},"D",0,o,"n",0,a,"o",0,function(e){e.drawArrays(e.TRIANGLES,0,3)},"h",0,function(e,t,r,o,a=!1){let l=e.createTexture();if(!l)throw Error("createTexture failed");e.bindTexture(e.TEXTURE_2D,l),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.R8,t,r,0,e.RED,e.UNSIGNED_BYTE,o),e.pixelStorei(e.UNPACK_ALIGNMENT,4);let i=a?e.LINEAR:e.NEAREST;return e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),l}],54666);let i=`#version 300 es
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
`,c=`
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
`,s=`
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
`;e.s(["Z",0,f,"A",0,c,"B",0,x,"U",0,i,"K",0,n,"s",0,s],35478)},3976,e=>{var t=e.i(54666),r=e.i(35478),o=e.i(29039);let a=r.U+r.K+r.B+r.A+r.Z+`
uniform vec2 uRes;
uniform float uTime;
uniform float uPx;
uniform float uReveal;
uniform float uArrive;
uniform vec4 uPointer;
${r.s}
// Сглаженное поле расстояний — по нему считается корпус
uniform sampler2D uHull;
// x — путь, пройденный метками (пиксели раскладки), y — угол ветра
uniform vec4 uFlow;
// Вихри: xy — центр (пиксели буфера), z — сила (пиксели раскладки; 0 —
// вихря нет), w — радиус ядра (пиксели раскладки)
uniform vec4 uVort[5];
in vec2 vUv;
out vec4 o;

const float HULL = 32.0;
const float BAND = 70.0;
const float SPACING = 18.0;

// Расстояние до ближайшей струйки с шагом gapPsi, в пикселях буфера; k — её номер
float lineDist(float psi, float gapPsi, float fw, out float k) {
  float f = psi / gapPsi;
  k = floor(f + 0.5);
  return abs(f - k) * gapPsi / fw;
}

float lineShape(float d, float w) {
  return exp(-d * d / (w * w)) + 0.18 * exp(-d * d / (9.0 * w * w));
}

float hullD(vec2 p) {
  if (uTitleOn < 0.5) return 1e4;
  return texture(uHull, vec2(p.x / uRes.x, 1.0 - p.y / uRes.y)).r;
}

/* Вихрь с ядром и экраном: внутри ядра вращение плавное, за экраном
   (шесть ядер, но не ближе 140 пикселей) гаснет. Без экрана логарифм вихря
   сдвигал бы все струйки экрана, когда его сила меняется. Константа
   вычтена — вдали вклад ровно ноль. Замкнутых петель вокруг ядра столько,
   сколько шагов струек умещается между ψ в центре и ψ в точке застоя
   под вихрем: при силе 90 и ядре 16 — три. Слабее — петель нет, и струйки
   над вихрем встают острым горбом. Сила приходит уже умноженной на
   скорость потока в точке вихря: у слова поток быстрее, и вихрь той же
   силы там бы тонул */
float vortex(vec4 v, vec2 p) {
  vec2 d = (p - v.xy) / uPx;
  float r2 = dot(d, d);
  float a2 = v.w * v.w;
  float s2 = max(a2 * 36.0, 19600.0);
  return v.z * 0.5 * (log((1.0 + r2 / a2) / (1.0 + r2 / s2)) - log(s2 / a2));
}

void main() {
  vec2 p = gl_FragCoord.xy;
  vec2 uv = p / uRes;
  vec2 q = p / uPx;
  float t = uTime;
  float td = titleD(p);
  float dh = hullD(p) - HULL;

  // Ось трубы — через середину слова; sx — вдоль ветра, sy — поперёк
  vec2 wc = 0.5 * (uWord.xy + uWord.zw) / uPx;
  vec2 wh = 0.5 * (uWord.zw - uWord.xy) / uPx;
  vec2 dir = vec2(cos(uFlow.y), sin(uFlow.y));
  vec2 rel = q - wc;
  float sx = dot(rel, dir);
  float sy = dot(rel, vec2(-dir.y, dir.x));

  // След за словом: струйки колышутся, дальше по течению — сильнее и реже
  float behind = smoothstep(wh.x - 40.0, wh.x + 220.0, sx) * (1.0 - smoothstep(wh.x + 500.0, wh.x + 1600.0, sx));
  float across = exp(-sy * sy / (2.0 * (wh.y + 80.0) * (wh.y + 80.0)));
  float sway = behind * across * (9.0 * sin(sx * 0.022 - t * 1.9) + 4.0 * sin(sx * 0.049 - t * 3.1 + sy * 0.02));

  /* Финал — порыв: после появления по трубе проходит второй фронт, быстрее
     и ярче, струйки на нём вздрагивают. Потом затухает */
  float left = -wc.x - 160.0;
  float gust = 0.0;
  float gustTail = 0.0;
  if (uArrive < 4.0) {
    float fa = left + uArrive * 1150.0;
    float ea = (sx - fa) / 80.0;
    float fade = exp(-uArrive * 0.45);
    gust = exp(-ea * ea) * fade;
    gustTail = step(sx, fa) * exp(-(fa - sx) / 420.0) * fade;
  }
  sway += 10.0 * gust;

  float vs = 0.0;
  for (int i = 0; i < 5; i++) {
    if (uVort[i].z != 0.0) vs += vortex(uVort[i], p);
  }
  float g = 1.0 - exp(-max(dh, 0.0) / BAND);
  // Вихри — не под g: иначе у слова они ужимались бы вместе с потоком.
  // Корпус для них всё равно непроницаем — у него h тоже 0
  float h = 1.0 - exp(-max(dh, 0.0) / 24.0);
  float psi = g * (sy + sway) + h * vs;

  /* Струйки. Где они сходятся теснее пяти пикселей (у корпуса, в ядре
     вихря), остаётся каждая вторая, ещё теснее — каждая четвёртая: иначе
     они слились бы в рябь, а воронка зажатого вихря стала бы чёрной дырой.
     Лишние гаснут плавно — линии крупного шага лежат на линиях мелкого */
  float fw = max(fwidth(psi), 1e-4);
  float gap = SPACING / fw / uPx;
  float lod = max(log2(5.0 / gap), 0.0);
  float l0 = floor(lod);
  float step0 = SPACING * exp2(l0);
  float k;
  float k1;
  float d0 = lineDist(psi, step0, fw, k);
  float d1 = lineDist(psi, step0 * 2.0, fw, k1);
  float w = 0.6 * uPx;
  float ln = mix(lineShape(d0, w), lineShape(d1, w), smoothstep(0.0, 1.0, lod - l0));
  // Внутри корпуса струек нет
  float mask = smoothstep(2.0, 10.0, dh);
  // Скорость потока относительно трубы: струйки теснее — поток быстрее
  float speed = clamp(fw * uPx, 0.0, 4.0);

  // Дым неровный: плотность меняется вдоль струйки и от струйки к струйке
  float hk = hash12(vec2(k, 7.0));
  float travel = uFlow.x * (0.8 + 0.4 * hash12(vec2(k, 3.0)));
  float dens = 0.55 + 0.45 * snoise(vec2((sx - travel) / 520.0, k * 0.31));

  // Метки: яркая голова впереди, хвост позади
  float lam = 300.0 + 240.0 * hk;
  float xi = fract((sx - travel) / lam + hk * 7.0);
  float pulse = pow(xi, 14.0) * (1.0 - smoothstep(0.985, 1.0, xi));

  // В вихре метки бегут по кругу — видно, что он крутится
  for (int i = 0; i < 5; i++) {
    vec4 v = uVort[i];
    if (v.z == 0.0) continue;
    vec2 d = (p - v.xy) / uPx;
    float r = length(d);
    float wv = exp(-r * r / (2.0 * 9.0 * v.w * v.w)) * min(abs(v.z) / 60.0, 1.0);
    float th = atan(d.y, d.x) / 6.2832;
    float xe = fract(th * 3.0 - sign(v.z) * t * 0.9 + hk);
    pulse = mix(pulse, pow(xe, 10.0) * (1.0 - smoothstep(0.97, 1.0, xe)), wv);
  }

  // Ближе к слову струйки ярче: эффект собран вокруг надписи. У курсора —
  // тоже: видно, где вихрь
  float near = exp(-max(dh, 0.0) / 220.0);
  vec2 pc = (p - uPointer.xy) / uPx;
  float lamp = exp(-dot(pc, pc) / (2.0 * 120.0 * 120.0));
  float baseI = (0.1 + 0.34 * near + 0.22 * lamp) * dens * (0.8 + 0.25 * smoothstep(1.0, 2.6, speed));
  float pulseI = pulse * (0.3 + 0.9 * near) * (0.6 + 0.4 * dens);

  // Появление: ветер включается — фронт дыма идёт слева направо, его кромка горит
  float rv = smoothstep(0.0, 1.0, uReveal);
  float right = uRes.x / uPx - wc.x + 260.0;
  float front = mix(left, right, rv);
  float on = 1.0 - smoothstep(front - 140.0, front, sx);
  float ef = (sx - front) / 46.0;
  float edge = exp(-ef * ef) * (1.0 - rv) * 0.9;
  float accent = gust * 1.8 + gustTail * 0.3;

  float lineI = (baseI * on + pulseI * on + edge + accent * (0.5 + 0.5 * near)) * mask;
  vec3 lineC = mix(C_DEEP * 1.6, C_ACID, 0.22 + 0.35 * smoothstep(1.2, 2.6, speed) + 0.4 * pulse);
  lineC = mix(lineC, C_PALE, 0.35 * pulse * near + 0.4 * edge + 0.3 * accent);

  vec3 col = C_BASE;
  // Слабый свет у корпуса: слово будто подсвечено в трубе
  col += C_DEEP * 0.28 * exp(-max(dh, 0.0) / 160.0) * rv;
  col += lineC * lineI * ln;

  // Края темнее — взгляд держится в середине
  vec2 vg = (uv - 0.5) * vec2(1.0, 1.25);
  col *= 1.0 - 0.35 * smoothstep(0.35, 0.95, length(vg));

  col = soft(col);
  col += grain(p, t) * 0.022;
  col = capLum(col, calmCap(max(calmAt(p), moat(td, 44.0))));
  o = vec4(max(col, 0.0), 1.0);
}`;e.s(["budget",0,24e5,"hero",0,{budget:24e5,create:e=>{let{gl:r,common:l}=e,i=(0,t.R)(r,t.F,a),n=(0,o.I)(r,e.host,e.layer),x=(0,o.S)(r,n,40),c={x0:0,y0:0,x1:0,y1:0},f=new Float32Array(20),s=[],u=[0,0],m=1,p=1,h=1,d=1,v=1,E=0,y=0,T=-1,_=0,g=1;return{resize(e,t,r){m=e,p=t,d=e/(h=r),v=t/h,n.update()},frame(e){let a=e.dt,R=e.time;n.ready&&e.frame%20!=0||n.update(),x.update(),(0,o.j)(n,e,d,v,c),T<0&&(T=e.scroll);let w=a>0?(e.scroll-T)/a:0;T=e.scroll;let A=Math.max(.4,Math.min(9,1+22*(_+=(w-_)*(1-Math.exp(-(8*a))))+2.5*e.scroll));E+=80*A*a;let P=.04*Math.sin(.13*R)+.16*e.scroll;for(let t of e.bursts)t.id<=y||(s.unshift({x:t.x/h,y:v-t.y/h,power:t.power,age:0}),s.length>4&&(s.length=4),g=0);g=Math.min(1,g+a/1.4),e.bursts.length&&(y=Math.max(y,e.bursts[0].id));let M=Math.cos(P),D=-Math.sin(P),U=(c.x0+c.x1)/2,C=(c.y0+c.y1)/2,F=(e,t)=>(1-Math.exp(-Math.max(x.sample(e,t)-32,0)/70))*(-(e-U)*Math.sin(P)-(t-C)*Math.cos(P)),I=(e,t)=>Math.max(.6,Math.min(3,Math.hypot(F(e+2,t)-F(e-2,t),F(e,t+2)-F(e,t-2))/4));for(let e=s.length-1;e>=0;e--){let t=s[e];t.age+=a,t.x+=80*M*A*1.15*a,t.y+=80*D*A*1.15*a;let r=n.ready?n.sample(t.x,t.y):1e4;if(r<68){n.grad(t.x,t.y,u);let e=(68-r)*Math.min(1,10*a);t.x+=u[0]*e,t.y+=u[1]*e}(t.age>8||t.x>d+200)&&s.splice(e,1)}let S=e.pointer.charge;f[0]=e.pointer.x,f[1]=e.pointer.y;let L=g*g*(3-2*g);f[2]=(90*L+150*S)*e.reveal*I(e.pointer.x/h,v-e.pointer.y/h),f[3]=16-7*S;for(let e=0;e<4;e++){let t=s[e],r=(e+1)*4;t?(f[r]=t.x*h,f[r+1]=(v-t.y)*h,f[r+2]=(70+140*t.power)*Math.exp(-t.age/3)*Math.min(1,6*t.age+.4)*I(t.x,t.y),f[r+3]=22+8*t.age):f[r+2]=0}(0,t.Q)(r,null,m,p),i.use(),l(i,e),(0,o.i)(r,i,n,0,c,h,v),(0,t.g)(r,1,x.tex),r.uniform1i(i.u("uHull"),1),r.uniform4f(i.u("uFlow"),E,P,A,0),r.uniform4fv(i.u("uVort"),f),(0,t.o)(r)},dispose(){x.dispose(),n.dispose(),i.dispose()}}}}])},29039,e=>{var t=e.i(54666);function r(e,t,r,o,a,l,i){l[0]=0,i[0]=-1e20,i[1]=1e20,a[0]=e[t];for(let n=1,x=0;n<o;n++){a[n]=e[t+n*r];let o=n*n,c=0;do{let e=l[x];c=(a[n]-a[e]+o-e*e)/(n-e)/2}while(c<=i[x]&&--x>-1)l[++x]=n,i[x]=c,i[x+1]=1e20}for(let n=0,x=0;n<o;n++){for(;i[x+1]<n;)x++;let o=l[x],c=n-o;e[t+n*r]=a[o]+c*c}}function o(e,t,o,a,l,i){for(let n=0;n<t;n++)r(e,n,t,o,a,l,i);for(let n=0;n<o;n++)r(e,n*t,1,t,a,l,i)}function a(e,t,r,o,a,l,i){if(!t||e.length<t*r)return 1e4;let n=l/o-.5,x=i/a-.5;n<0?n=0:n>t-1.001&&(n=t-1.001),x<0?x=0:x>r-1.001&&(x=r-1.001);let c=0|n,f=0|x,s=n-c,u=x-f,m=f*t+c,p=e[m]+(e[m+1]-e[m])*s;return p+(e[m+t]+(e[m+t+1]-e[m+t])*s-p)*u}e.s(["i",0,function(e,r,o,a,l,i,n){(0,t.g)(e,a,o.tex),e.uniform1i(r.u("uTitle"),a),e.uniform1f(r.u("uTitleOn"),+!!o.ready),e.uniform4f(r.u("uWord"),l.x0*i,(n-l.y1)*i,l.x1*i,(n-l.y0)*i)},"R",0,function(e,t){let r=new Map;return{update(){let o=t.offsetWidth;if(!o)return;let a=t.getBoundingClientRect(),l=a.width/o||1,i=new Set(e.querySelectorAll("[data-bg-body]"));for(let e of r.keys())i.has(e)||r.delete(e);for(let e of i){if(e.closest(".is-tilting"))continue;let t=e.getBoundingClientRect();if(t.width<.5||t.height<.5){r.delete(e);continue}r.set(e,{x0:(t.left-a.left)/l,y0:(t.top-a.top)/l,x1:(t.right-a.left)/l,y1:(t.bottom-a.top)/l})}},union(e,t){for(let o of(Object.assign(t,e),r.values()))t.x0=Math.min(t.x0,o.x0),t.y0=Math.min(t.y0,o.y0),t.x1=Math.max(t.x1,o.x1),t.y1=Math.max(t.y1,o.y1);return t}}},"S",0,function(e,t,r){let o=e.createTexture();if(!o)throw Error("createTexture failed");let l=-1,i=new Float32Array(0),n=new Float32Array(0),x={w:0,h:0,cx:1,cy:1},c=(e,t,r,o,a,l)=>{let i=l?r:o,n=l?o:r,x=l?1:r,c=1/(2*a+1);for(let o=0;o<n;o++){let n=l?o*r:o,f=t=>e[n+Math.min(i-1,Math.max(0,t))*x],s=0;for(let e=-a;e<=a;e++)s+=f(e);for(let e=0;e<i;e++)t[n+e*x]=s*c,s+=f(e+a+1)-f(e-a)}};return{tex:o,update(){if(!t.ready||l===t.version)return;l=t.version;let{w:a,h:f}=t;i.length!==a*f&&(i=new Float32Array(a*f),n=new Float32Array(a*f));let s=Math.max(1,Math.round(r/((t.cx+t.cy)/2)/2));c(t.dist,i,a,f,s,!0),c(i,n,a,f,s,!1),c(n,i,a,f,s,!0),c(i,n,a,f,s,!1),Object.assign(x,{w:a,h:f,cx:t.cx,cy:t.cy}),e.bindTexture(e.TEXTURE_2D,o),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.texImage2D(e.TEXTURE_2D,0,e.R16F,a,f,0,e.RED,e.FLOAT,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},sample:(e,t)=>a(n,x.w,x.h,x.cx,x.cy,e,t),dispose(){e.deleteTexture(o)}}},"I",0,function(e,t,r){let l=e.createTexture();if(!l)throw Error("createTexture failed");let i=document.createElement("canvas"),n=i.getContext("2d",{willReadFrequently:!0});if(!n)throw Error("2d context failed");let x=new Float64Array(0),c=new Float64Array(0),f=new Float64Array(0),s=new Float64Array(0),u=new Uint16Array(0),m="",p="loaded"===document.fonts.status;p||document.fonts.ready.then(()=>{p=!0});let h={ready:!1,version:0,tex:l,w:0,h:0,cx:1,cy:1,dist:new Float32Array(0),glyphs:[],box:{x0:0,y0:0,x1:0,y1:0},groups:[],update:function(a=!1){let d=r.offsetWidth,v=r.offsetHeight;if(!d||!v||!p)return!1;let E=function(e){let o=r.getBoundingClientRect(),a=o.width/e||1,l=document.createRange(),i=[],n=0;for(let e of t.querySelectorAll("[data-bg-text]")){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let e=t.nextNode();e;e=t.nextNode()){let t=e.parentElement;if(!t||t.closest('[aria-hidden="true"]'))continue;let r=getComputedStyle(t),x=parseFloat(r.fontSize)||16,c=`${r.fontStyle} ${r.fontWeight} ${x}px ${r.fontFamily}`,f="uppercase"===r.textTransform,s=e.textContent??"";for(let t=0;t<s.length;t++){let r=s[t];if(!r.trim())continue;l.setStart(e,t),l.setEnd(e,t+1);let u=l.getBoundingClientRect();if(u.width<.5||u.height<.5)continue;let m=(u.top-o.top)/a;i.push({ch:f?r.toUpperCase():r,x:(u.left-o.left)/a,y:m,w:u.width/a,h:u.height/a,size:x,font:c,group:n,top:m,bottom:m})}}n++}return i}(d),y=`${d}x${v}:`;for(let e of E)y+=`${e.ch}${Math.round(2*e.x)},${Math.round(2*e.y)},${Math.round(2*e.h)};`;if(!a&&y===m)return!1;m=y;let T=Math.max(2,Math.ceil(Math.sqrt(d*v/14e4))),_=Math.max(2,Math.ceil(d/T)),g=Math.max(2,Math.ceil(v/T)),R=_*g,w=_!==h.w||g!==h.h;if(w){i.width=_,i.height=g,x=new Float64Array(R),c=new Float64Array(R);let e=Math.max(_,g);f=new Float64Array(e),s=new Float64Array(e+1),u=new Uint16Array(e),h.dist=new Float32Array(R)}h.w=_,h.h=g,h.cx=d/_,h.cy=v/g,h.glyphs=E,n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,_,g),n.setTransform(_/d,0,0,g/v,0,0),n.fillStyle="#fff",n.textBaseline="alphabetic",n.textAlign="left";let A={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0},P=[];for(let e of E){n.font=e.font;let t=n.measureText(e.ch),r=t.fontBoundingBoxAscent||.8*e.size,o=t.fontBoundingBoxDescent||.2*e.size,a=e.y+e.h*r/(r+o);n.fillText(e.ch,e.x,a),e.top=a-(t.actualBoundingBoxAscent||.7*e.size),e.bottom=a+(t.actualBoundingBoxDescent||0);let l=P[e.group]??={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};l.x0=Math.min(l.x0,e.x),l.x1=Math.max(l.x1,e.x+e.w),l.y0=Math.min(l.y0,e.top),l.y1=Math.max(l.y1,e.bottom),A.x0=Math.min(A.x0,l.x0),A.x1=Math.max(A.x1,l.x1),A.y0=Math.min(A.y0,l.y0),A.y1=Math.max(A.y1,l.y1)}h.box=E.length?A:{x0:0,y0:0,x1:0,y1:0},h.groups=Array.from(P,e=>e??{x0:0,y0:0,x1:0,y1:0});let M=n.getImageData(0,0,_,g).data;for(let e=0;e<R;e++){let t=M[4*e+3]/255;if(t>=1)x[e]=0,c[e]=1e20;else if(t<=0)x[e]=1e20,c[e]=0;else{let r=.5-t;x[e]=r>0?r*r:0,c[e]=r<0?r*r:0}}E.length&&(o(x,_,g,f,u,s),o(c,_,g,f,u,s));let D=(h.cx+h.cy)/2,U=h.dist;for(let e=0;e<R;e++)U[e]=E.length?(Math.sqrt(x[e])-Math.sqrt(c[e]))*D:1e4;return e.bindTexture(e.TEXTURE_2D,l),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.texImage2D(e.TEXTURE_2D,0,e.R16F,_,g,0,e.RED,e.FLOAT,U),(w||!h.ready)&&(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),h.ready=E.length>0,h.version++,!0},sample:d,grad:function(e,t,r){let o=h.cx,a=h.cy,l=d(e+o,t)-d(e-o,t),i=d(e,t+a)-d(e,t-a),n=Math.hypot(l,i);if(n<1e-6){r[0]=0,r[1]=-1;return}r[0]=l/n,r[1]=i/n},dispose(){e.deleteTexture(l)}};function d(e,t){return a(h.dist,h.w,h.h,h.cx,h.cy,e,t)}return h},"j",0,function(e,t,r,o,a){return e?.ready?Object.assign(a,e.box):t.anchorK>0?(a.x0=t.anchor.x0/t.px,a.x1=t.anchor.x1/t.px,a.y0=o-t.anchor.y1/t.px,a.y1=o-t.anchor.y0/t.px):(a.x0=a.x1=r/2,a.y0=a.y1=o/2),a}])}])})();