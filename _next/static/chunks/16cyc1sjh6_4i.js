(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54666,35478,e=>{let t=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;function o(e,t,o){let r=e.createShader(t);if(!r)throw Error("createShader failed");if(e.shaderSource(r,o),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??"";e.deleteShader(r);let a=o.split("\n").map((e,t)=>`${String(t+1).padStart(4)}  ${e}`).join("\n");throw Error(`Shader compile error:
${t}
${a}`)}return r}e.s(["F",0,t,"Q",0,function(e,t,o,r){e.bindFramebuffer(e.FRAMEBUFFER,t?t.fbo:null),e.viewport(0,0,t?t.w:o??e.drawingBufferWidth,t?t.h:r??e.drawingBufferHeight)},"g",0,function(e,t,o){e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,o)},"R",0,function(e,t,r){let a=e.createProgram();if(!a)throw Error("createProgram failed");let l=o(e,e.VERTEX_SHADER,t),c=o(e,e.FRAGMENT_SHADER,r);if(e.attachShader(a,l),e.attachShader(a,c),e.linkProgram(a),e.deleteShader(l),e.deleteShader(c),!e.getProgramParameter(a,e.LINK_STATUS))throw Error(`Program link error: ${e.getProgramInfoLog(a)}`);let n=new Map;return{handle:a,use:()=>e.useProgram(a),u:t=>(n.has(t)||n.set(t,e.getUniformLocation(a,t)),n.get(t)??null),dispose:()=>e.deleteProgram(a)}},"D",0,function(e,t,o,r={}){let{float:a=!1,linear:l=!0,channels:c=4}=r,n=e.createTexture(),x=e.createFramebuffer();if(!n||!x)throw Error("createTarget failed");e.bindTexture(e.TEXTURE_2D,n);let i=l?e.LINEAR:e.NEAREST;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i);let f=r.wrap??e.CLAMP_TO_EDGE;if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,f),a){let r=1===c?e.R16F:2===c?e.RG16F:e.RGBA16F,a=1===c?e.RED:2===c?e.RG:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,r,t,o,0,a,e.HALF_FLOAT,null)}else e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,t,o,0,e.RGBA,e.UNSIGNED_BYTE,null);return e.bindFramebuffer(e.FRAMEBUFFER,x),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.viewport(0,0,t,o),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null),{tex:n,fbo:x,w:t,h:o}},"n",0,function(e,t){t&&(e.deleteTexture(t.tex),e.deleteFramebuffer(t.fbo))},"o",0,function(e){e.drawArrays(e.TRIANGLES,0,3)}],54666);let r=`#version 300 es
precision highp float;
precision highp int;
`,a=`
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
`,l=`
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
`,x=`
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
`;e.s(["Z",0,n,"A",0,c,"B",0,l,"U",0,r,"K",0,a,"s",0,x],35478)},5080,e=>{var t=e.i(54666),o=e.i(35478),r=e.i(29039);let a=2*Math.sqrt(60)*.3,l=o.U+o.K+o.B+o.A+o.Z+`
uniform vec2 uRes;
uniform float uTime;
uniform float uPx;
uniform float uReveal;
uniform float uPre;
uniform float uArrive;
uniform vec4 uPointer;
uniform vec4 uFocus;
uniform float uFocusK;
${o.s}
// Капсула слова: рамка DESIGNER с карточкой в пикселях раскладки, y вверх
uniform vec4 uBody;
// xy — сдвиг ткани (дрейф и параллакс), z — масса слова, w — сила сигналов
uniform vec4 uSpace;
// Воронка курсора: xy — центр (пиксели буфера), z — глубина A, w — радиус a
uniform vec4 uWell;
// x — клетка, y — каждая какая линия главная, z — заряд кнопки, w — сколько
// воронки набралось после волны
uniform vec4 uGrid;
in vec2 vUv;
out vec4 o;

// Сдвиг у букв и как быстро он гаснет — пиксели раскладки
const float WORD_A = 70.0;
const float WORD_L = 170.0;
// Скорость волн, пикселей раскладки в секунду
const float WAVE_V = 560.0;

/* Капсула по рамке: ось вдоль длинной стороны, радиус — половина высоты.
   Возвращает расстояние до края (внутри минус), в n — направление от оси,
   в R — радиус */
float capsule(vec2 q, vec4 b, out vec2 n, out float R) {
  vec2 c = 0.5 * (b.xy + b.zw);
  vec2 h = 0.5 * (b.zw - b.xy);
  R = max(h.y, 1.0);
  float hx = max(h.x - R, 0.0);
  vec2 v = q - c;
  vec2 d = v - vec2(clamp(v.x, -hx, hx), 0.0);
  float l = length(d);
  n = d / max(l, 1e-3);
  return l - R;
}

float stroke(float d, float w) {
  return clamp(w * 0.5 + 0.5 - d, 0.0, 1.0);
}

// Тело-точка: сдвиг от центра, наибольший — A на расстоянии a
vec2 pointMass(vec2 q, vec2 c, float A, float a) {
  vec2 d = q - c;
  return d * (2.0 * A * a / (dot(d, d) + a * a));
}

// Сигнал по линии: x — путь вдоль неё, голова в head, хвост позади
float signal(float x, float head, float dir, float period) {
  float s = mod((head - x) * dir, period);
  float f = period - s;
  return 0.5 * exp(-s / 80.0) + exp(-s * s / 32.0) + exp(-f * f / 32.0);
}

void main() {
  vec2 p = gl_FragCoord.xy;
  vec2 uv = p / uRes;
  vec2 q = p / uPx;
  float t = uTime;
  float rv = clamp(uReveal, 0.0, 1.0);

  /* Расстояние до капсулы слова и направление от её оси. Внутри сдвиг к
     оси гаснет: на самой оси направление переворачивается, и без этого
     ткань там рвалась бы */
  vec2 G;
  float R;
  float D = capsule(q, uBody, G, R);
  G *= smoothstep(-R, 0.0, D);

  // Слово тяжёлое: ткань стянута к нему
  vec2 shift = G * (WORD_A * uSpace.z * exp(-max(D, 0.0) / WORD_L));

  // Воронка курсора
  vec2 wc = uWell.xy / uPx;
  shift += pointMass(q, wc, uWell.z, uWell.w);

  // Кнопка под курсором — тоже тело, рамкой: сетка её обнимает
  if (uFocusK > 0.01) {
    vec2 c = 0.5 * (uFocus.xy + uFocus.zw) / uPx;
    vec2 h = 0.5 * (uFocus.zw - uFocus.xy) / uPx;
    vec2 v = q - c;
    vec2 out2 = max(abs(v) - h, 0.0);
    float df = length(out2);
    shift += sign(v) * out2 / max(df, 1e-3) * (24.0 * uFocusK * exp(-df / 70.0) * smoothstep(0.0, 8.0, df));
  }

  /* Клик: масса уходит волной. Один гребень сжатия бежит кольцом, по его
     фронту — тонкая светлая окружность: иначе волна читается дрожью линий.
     Амплитуда \xd7 волновое число держится ниже единицы — иначе ткань на
     гребне перехлёстывается и линии завиваются петлями */
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

  // Финал: две волны расходятся от слова его же контуром — капсулами
  float accent = 0.0;
  if (uArrive < 5.0) {
    for (int k = 0; k < 2; k++) {
      float a = uArrive - float(k) * 0.32;
      if (a < 0.0) continue;
      float x = D - a * 640.0;
      float kk = k == 0 ? 1.0 : 0.6;
      float env = exp(-x * x / 9800.0) * exp(-a / 1.3) * kk;
      shift += G * (10.0 * env * sin(x * 0.06));
      accent += env;
      rim += stroke(abs(x + 10.0) * uPx, 1.3 * uPx) * exp(-a / 1.0) * kk * smoothstep(0.0, 30.0, D);
    }
  }

  vec2 u = q + shift + uSpace.xy;

  /* Сколько ткани на пиксель буфера: расстояние до линии в пикселях
     экрана — разность в ткани, делённая на градиент. comp — во сколько
     раз ткань стянута по площади */
  vec2 ux = dFdx(u);
  vec2 uy = dFdy(u);
  float gx = max(length(vec2(ux.x, uy.x)), 1e-4);
  float gy = max(length(vec2(ux.y, uy.y)), 1e-4);
  float comp = abs(ux.x * uy.y - ux.y * uy.x) * uPx * uPx;

  float cell = uGrid.x;
  float major = cell * uGrid.y;
  vec2 fm = abs(fract(u / cell + 0.5) - 0.5) * cell;
  vec2 fM = abs(fract(u / major + 0.5) - 0.5) * major;
  float w = 0.75 * uPx;
  // Где ткань стянута так, что мелкие линии ближе пяти пикселей, они гаснут
  float lodX = smoothstep(4.0, 9.0, cell / (gx * uPx));
  float lodY = smoothstep(4.0, 9.0, cell / (gy * uPx));
  float minor = max(stroke(fm.x / gx, w) * lodX, stroke(fm.y / gy, w) * lodY);
  float lineX = stroke(fM.x / gx, w);
  float lineY = stroke(fM.y / gy, w);
  float majorL = max(lineX, lineY);
  // Кресты на пересечениях главных линий
  float arm = 6.0;
  float plus = max(stroke(fM.y / gy, w * 1.7) * (1.0 - smoothstep(arm - 1.5, arm, fM.x)),
                   stroke(fM.x / gx, w * 1.7) * (1.0 - smoothstep(arm - 1.5, arm, fM.y)));

  /* Сигналы: по некоторым главным линиям бежит светлая метка с хвостом.
     Считаются в ткани — и гнутся вместе с ней. Только на самих главных
     линиях: вне их сигнал умножается на ноль, а шесть хэшей и шесть
     экспонент на каждый пиксель экрана — заметная доля шейдера */
  float sig = 0.0;
  if (majorL > 0.0) {
    vec2 kM = floor(u / major + 0.5);
    float hv = hash12(vec2(kM.x, 7.3));
    float hh = hash12(vec2(kM.y, 11.9));
    float pv = 1400.0 + 900.0 * hash12(vec2(kM.x, 1.7));
    float ph = 1600.0 + 900.0 * hash12(vec2(kM.y, 2.9));
    float dv = hv > 0.8 ? 1.0 : -1.0;
    float dh = hh > 0.8 ? 1.0 : -1.0;
    float sv = (110.0 + 70.0 * hash12(vec2(kM.x, 3.1))) * dv;
    float sh = (110.0 + 70.0 * hash12(vec2(kM.y, 5.3))) * dh;
    sig = step(0.6, hv) * lineX * signal(u.y, t * sv + hv * pv, dv, pv)
        + step(0.6, hh) * lineY * signal(u.x, t * sh + hh * ph, dh, ph);
  }

  /* Появление: ткань проявляется от слова наружу, фронт — светлый контур.
     Фронт идёт не на равное расстояние, а на равную долю пути от капсулы
     до края экрана: s = D / (D + E), E — до ближнего края. Так он выходит
     капсулой, расправляется в рамку экрана и ложится на неё — ко всем
     краям разом. На равном расстоянии он проскакивал верх и низ за
     полсекунды и дальше тянулся только к углам. Ближний край — мягким
     минимумом, иначе на диагоналях фронт ломался бы углом.
     Когда появление доиграло, ткань видна вся, а фронта нет — всё это
     не считается (ветка по uniform-у, одна на весь кадр) */
  float on = 1.0;
  float front = 0.0;
  if (rv < 1.0) {
    vec2 lr = uRes / uPx;
    vec4 e4 = max(vec4(q, lr - q), 0.0);
    float E = max(-40.0 * log(dot(exp(-e4 / 40.0), vec4(1.0))), 1.0);
    float s = D / max(D + E, 1.0);
    float ease = 1.0 - (1.0 - rv) * (1.0 - rv);
    float fr = mix(-0.04, 1.02, ease);
    /* За фронтом ткань проявляется не сразу; у краёв дозаполняется к концу.
       Внутри капсулы s < 0, и там ткань видна ещё до фронта — за словом.
       Её проявляет преддверие (uPre, engine.ts): пока слово собирается,
       ткань за ним плавно выходит из прозрачности, а с началом появления
       от него идёт фронт. Без преддверия она возникала за буквами рывком,
       в момент монтирования холста */
    on = max(1.0 - smoothstep(fr - 0.3, fr, s), smoothstep(0.75, 1.0, rv)) * max(uPre, smoothstep(0.0, 0.1, rv));
    // До фронта в пикселях буфера
    float fd = abs(s - fr) / max(fwidth(s), 1e-5);
    front = (stroke(fd, 1.2 * uPx) * 0.8 + 0.2 * exp(-fd / (20.0 * uPx)))
          * (1.0 - smoothstep(0.8, 1.0, rv)) * step(0.0, fr);
  }

  // Ярче у слова, у курсора и там, где ткань стянута
  float near = exp(-max(D, 0.0) / 320.0);
  float rr = length(q - wc);
  float lamp = exp(-rr * rr / 51200.0);
  float dens = clamp(sqrt(comp), 0.7, 2.6);
  float lit = (0.45 + 0.55 * near + 0.7 * lamp) * dens;

  vec3 lineC = mix(C_DEEP * 1.7, C_ACID, 0.3 + 0.35 * near + 0.3 * lamp);
  vec3 col = C_BASE;
  col += lineC * (0.075 * minor + 0.13 * majorL + 0.36 * plus) * lit * on;
  col += mix(C_ACID, C_PALE, 0.4) * sig * 0.55 * uSpace.w * on * (0.5 + 0.5 * near);
  // Волны подсвечивают ткань, по которой проходят
  float wv = wave + accent;
  col += C_ACID * wv * (0.12 * minor + 0.35 * majorL + 0.4 * plus) * on;
  col += C_DEEP * wv * 0.1 * on;
  col += mix(C_ACID, C_PALE, 0.6) * front * 0.7;
  col += mix(C_ACID, C_PALE, 0.45) * rim * 0.45 * on;

  // Воронка: при заряде ядро темнеет, по краю — тонкое кольцо
  float charge = uGrid.z;
  float ra = uWell.w;
  float core = 0.3 * ra;
  if (charge > 0.0) col *= 1.0 - 0.6 * charge * exp(-rr * rr / (2.0 * core * core));
  float ringD = abs(rr - ra * 0.62) * uPx;
  col += mix(C_ACID, C_PALE, 0.3 * charge) * stroke(ringD, uPx) * (0.05 + 0.45 * charge) * uGrid.w * on;

  // Края темнее — взгляд держится в середине
  vec2 vg = (uv - 0.5) * vec2(1.0, 1.25);
  col *= 1.0 - 0.35 * smoothstep(0.35, 0.95, length(vg));

  col = soft(col);
  col += grain(p, t) * 0.018;
  // Зоны тишины и ров у букв — только там, где есть что гасить
  if (aboveFloor(col)) col = capLum(col, calmCap(max(calmAt(p), moat(titleD(p), 34.0))));
  o = vec4(max(col, 0.0), 1.0);
}`,c=(e,t,o)=>{let r=Math.min(1,Math.max(0,(o-e)/(t-e)));return r*r*(3-2*r)};e.s(["budget",0,24e5,"hero",0,{budget:24e5,create:e=>{let{gl:o,common:n}=e,x=(0,t.R)(o,t.F,l),i=(0,r.I)(o,e.host,e.layer),f=(0,r.R)(e.host,e.layer),u={x0:0,y0:0,x1:0,y1:0},s={x0:0,y0:0,x1:0,y1:0},m={x:0,y:0},v=1,h=1,p=1,d=1,y=1,g=-1,E=0,T=0,w=0,R=0,A=1;return{resize(e,t,o){v=e,h=t,d=e/(p=o),y=t/p,i.update(),f.update()},frame(e){let l=e.dt,_=e.time;i.ready&&e.frame%20!=0||(i.update(),f.update()),(0,r.j)(i,e,d,y,u);let C=f.union(i.ready&&i.groups[0]?i.groups[0]:u,s);g<0&&(g=e.scroll);let M=l>0?(e.scroll-g)/l:0;g=e.scroll;let b=-2.4+.4*Math.sin(.04*_),F=7*(1+Math.min(20,30*Math.abs(E+=(M-E)*(1-Math.exp(-(6*l))))));m.x+=Math.cos(b)*F*l,m.y+=Math.sin(b)*F*l;let D=e.scroll*y*.35,P=c(.25,.6,e.reveal),z=Math.max(1,Math.ceil(240*l)),L=l/z;for(let e=0;e<z;e++)w+=(60*(P-T)-a*w)*L,T+=w*L;for(let t of e.bursts)t.id<=R||(A=Math.min(A,.15));e.bursts.length&&(R=Math.max(R,e.bursts[0].id)),A=Math.min(1,A+l/1.3);let k=e.pointer.charge,S=A*A*(3-2*A),U=c(.35,.85,e.reveal)*S;(0,t.Q)(o,null,v,h),x.use(),n(x,e),(0,r.i)(o,x,i,0,u,p,y),o.uniform1f(x.u("uPre"),e.pre),o.uniform4f(x.u("uBody"),C.x0-10,y-C.y1-10,C.x1+10,y-C.y0+10),o.uniform4f(x.u("uSpace"),m.x,m.y+D,T,c(.8,1,e.reveal)),o.uniform4f(x.u("uWell"),e.pointer.x,e.pointer.y,(28+50*k)*U,84-30*k),o.uniform4f(x.u("uGrid"),e.narrow?32:44,4,k,U),(0,t.o)(o)},dispose(){i.dispose(),x.dispose()}}}}])},29039,e=>{var t=e.i(54666);function o(e,t,o,r,a,l,c){l[0]=0,c[0]=-1e20,c[1]=1e20,a[0]=e[t];for(let n=1,x=0;n<r;n++){a[n]=e[t+n*o];let r=n*n,i=0;do{let e=l[x];i=(a[n]-a[e]+r-e*e)/(n-e)/2}while(i<=c[x]&&--x>-1)l[++x]=n,c[x]=i,c[x+1]=1e20}for(let n=0,x=0;n<r;n++){for(;c[x+1]<n;)x++;let r=l[x],i=n-r;e[t+n*o]=a[r]+i*i}}function r(e,t,r,a,l,c){for(let n=0;n<t;n++)o(e,n,t,r,a,l,c);for(let n=0;n<r;n++)o(e,n*t,1,t,a,l,c)}e.s(["i",0,function(e,o,r,a,l,c,n){(0,t.g)(e,a,r.tex),e.uniform1i(o.u("uTitle"),a),e.uniform1f(o.u("uTitleOn"),+!!r.ready),e.uniform4f(o.u("uWord"),l.x0*c,(n-l.y1)*c,l.x1*c,(n-l.y0)*c)},"R",0,function(e,t){let o=new Map;return{update(){let r=t.offsetWidth;if(!r)return;let a=t.getBoundingClientRect(),l=a.width/r||1,c=new Set(e.querySelectorAll("[data-bg-body]"));for(let e of o.keys())c.has(e)||o.delete(e);for(let e of c){if(e.closest(".is-tilting"))continue;let t=e.getBoundingClientRect();if(t.width<.5||t.height<.5){o.delete(e);continue}o.set(e,{x0:(t.left-a.left)/l,y0:(t.top-a.top)/l,x1:(t.right-a.left)/l,y1:(t.bottom-a.top)/l})}},union(e,t){for(let r of(Object.assign(t,e),o.values()))t.x0=Math.min(t.x0,r.x0),t.y0=Math.min(t.y0,r.y0),t.x1=Math.max(t.x1,r.x1),t.y1=Math.max(t.y1,r.y1);return t}}},"I",0,function(e,t,o){let a=e.createTexture();if(!a)throw Error("createTexture failed");let l=document.createElement("canvas"),c=l.getContext("2d",{willReadFrequently:!0});if(!c)throw Error("2d context failed");let n=new Float64Array(0),x=new Float64Array(0),i=new Float64Array(0),f=new Float64Array(0),u=new Uint16Array(0),s="",m="loaded"===document.fonts.status;m||document.fonts.ready.then(()=>{m=!0});let v={ready:!1,version:0,tex:a,w:0,h:0,cx:1,cy:1,dist:new Float32Array(0),glyphs:[],box:{x0:0,y0:0,x1:0,y1:0},groups:[],update:function(h=!1){let p=o.offsetWidth,d=o.offsetHeight;if(!p||!d||!m)return!1;let y=function(e){let r=o.getBoundingClientRect(),a=r.width/e||1,l=document.createRange(),c=[],n=0;for(let e of t.querySelectorAll("[data-bg-text]")){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let e=t.nextNode();e;e=t.nextNode()){let t=e.parentElement;if(!t||t.closest('[aria-hidden="true"]'))continue;let o=getComputedStyle(t),x=parseFloat(o.fontSize)||16,i=`${o.fontStyle} ${o.fontWeight} ${x}px ${o.fontFamily}`,f="uppercase"===o.textTransform,u=e.textContent??"";for(let t=0;t<u.length;t++){let o=u[t];if(!o.trim())continue;l.setStart(e,t),l.setEnd(e,t+1);let s=l.getBoundingClientRect();if(s.width<.5||s.height<.5)continue;let m=(s.top-r.top)/a;c.push({ch:f?o.toUpperCase():o,x:(s.left-r.left)/a,y:m,w:s.width/a,h:s.height/a,size:x,font:i,group:n,top:m,bottom:m})}}n++}return c}(p),g=`${p}x${d}:`;for(let e of y)g+=`${e.ch}${Math.round(2*e.x)},${Math.round(2*e.y)},${Math.round(2*e.h)};`;if(!h&&g===s)return!1;s=g;let E=Math.max(2,Math.ceil(Math.sqrt(p*d/14e4))),T=Math.max(2,Math.ceil(p/E)),w=Math.max(2,Math.ceil(d/E)),R=T*w,A=T!==v.w||w!==v.h;if(A){l.width=T,l.height=w,n=new Float64Array(R),x=new Float64Array(R);let e=Math.max(T,w);i=new Float64Array(e),f=new Float64Array(e+1),u=new Uint16Array(e),v.dist=new Float32Array(R)}v.w=T,v.h=w,v.cx=p/T,v.cy=d/w,v.glyphs=y,c.setTransform(1,0,0,1,0,0),c.clearRect(0,0,T,w),c.setTransform(T/p,0,0,w/d,0,0),c.fillStyle="#fff",c.textBaseline="alphabetic",c.textAlign="left";let _={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0},C=[];for(let e of y){c.font=e.font;let t=c.measureText(e.ch),o=t.fontBoundingBoxAscent||.8*e.size,r=t.fontBoundingBoxDescent||.2*e.size,a=e.y+e.h*o/(o+r);c.fillText(e.ch,e.x,a),e.top=a-(t.actualBoundingBoxAscent||.7*e.size),e.bottom=a+(t.actualBoundingBoxDescent||0);let l=C[e.group]??={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};l.x0=Math.min(l.x0,e.x),l.x1=Math.max(l.x1,e.x+e.w),l.y0=Math.min(l.y0,e.top),l.y1=Math.max(l.y1,e.bottom),_.x0=Math.min(_.x0,l.x0),_.x1=Math.max(_.x1,l.x1),_.y0=Math.min(_.y0,l.y0),_.y1=Math.max(_.y1,l.y1)}v.box=y.length?_:{x0:0,y0:0,x1:0,y1:0},v.groups=Array.from(C,e=>e??{x0:0,y0:0,x1:0,y1:0});let M=c.getImageData(0,0,T,w).data;for(let e=0;e<R;e++){let t=M[4*e+3]/255;if(t>=1)n[e]=0,x[e]=1e20;else if(t<=0)n[e]=1e20,x[e]=0;else{let o=.5-t;n[e]=o>0?o*o:0,x[e]=o<0?o*o:0}}y.length&&(r(n,T,w,i,u,f),r(x,T,w,i,u,f));let b=(v.cx+v.cy)/2,F=v.dist;for(let e=0;e<R;e++)F[e]=y.length?(Math.sqrt(n[e])-Math.sqrt(x[e]))*b:1e4;return e.bindTexture(e.TEXTURE_2D,a),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.texImage2D(e.TEXTURE_2D,0,e.R16F,T,w,0,e.RED,e.FLOAT,F),(A||!v.ready)&&(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),v.ready=y.length>0,v.version++,!0},sample:h,grad:function(e,t,o){let r=v.cx,a=v.cy,l=h(e+r,t)-h(e-r,t),c=h(e,t+a)-h(e,t-a),n=Math.hypot(l,c);if(n<1e-6){o[0]=0,o[1]=-1;return}o[0]=l/n,o[1]=c/n},dispose(){e.deleteTexture(a)}};function h(e,t){return function(e,t,o,r,a,l,c){if(!t||e.length<t*o)return 1e4;let n=l/r-.5,x=c/a-.5;n<0?n=0:n>t-1.001&&(n=t-1.001),x<0?x=0:x>o-1.001&&(x=o-1.001);let i=0|n,f=0|x,u=n-i,s=x-f,m=f*t+i,v=e[m]+(e[m+1]-e[m])*u;return v+(e[m+t]+(e[m+t+1]-e[m+t])*u-v)*s}(v.dist,v.w,v.h,v.cx,v.cy,e,t)}return v},"j",0,function(e,t,o,r,a){return e?.ready?Object.assign(a,e.box):t.anchorK>0?(a.x0=t.anchor.x0/t.px,a.x1=t.anchor.x1/t.px,a.y0=r-t.anchor.y1/t.px,a.y1=r-t.anchor.y0/t.px):(a.x0=a.x1=o/2,a.y0=a.y1=r/2),a}])}])})();