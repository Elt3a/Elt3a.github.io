(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54666,35478,e=>{let t=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;function o(e,t,o){let r=e.createShader(t);if(!r)throw Error("createShader failed");if(e.shaderSource(r,o),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??"";e.deleteShader(r);let a=o.split("\n").map((e,t)=>`${String(t+1).padStart(4)}  ${e}`).join("\n");throw Error(`Shader compile error:
${t}
${a}`)}return r}function r(e,t,o,a={}){let{float:l=!1,linear:i=!0,channels:n=4}=a,x=e.createTexture(),c=e.createFramebuffer();if(!x||!c)throw Error("createTarget failed");e.bindTexture(e.TEXTURE_2D,x);let f=i?e.LINEAR:e.NEAREST;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,f);let u=a.wrap??e.CLAMP_TO_EDGE;if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,u),l){let r=1===n?e.R16F:2===n?e.RG16F:e.RGBA16F,a=1===n?e.RED:2===n?e.RG:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,r,t,o,0,a,e.HALF_FLOAT,null)}else e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,t,o,0,e.RGBA,e.UNSIGNED_BYTE,null);return e.bindFramebuffer(e.FRAMEBUFFER,c),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,x,0),e.viewport(0,0,t,o),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null),{tex:x,fbo:c,w:t,h:o}}function a(e,t){t&&(e.deleteTexture(t.tex),e.deleteFramebuffer(t.fbo))}async function l(e,t,o,r){let a=getComputedStyle(document.documentElement).getPropertyValue("--font-mono").trim()||"monospace",l=Math.round(.66*r),i=`400 ${l}px ${a}`;try{await document.fonts.load(i,t.join(""))}catch{}let n=Math.ceil(t.length/16),x=document.createElement("canvas");x.width=16*o,x.height=n*r;let c=x.getContext("2d");if(!c)throw Error("2d context failed");return c.fillStyle="#000",c.fillRect(0,0,x.width,x.height),c.fillStyle="#fff",c.font=i,c.textAlign="center",c.textBaseline="middle",t.forEach((e,t)=>{let a=Math.floor(t/16)*r+r/2;c.fillText(e,t%16*o+o/2,a)}),{tex:function(e,t,o={}){let{linear:r=!0,mipmap:a=!1,flipY:l=!1}=o,i=e.createTexture();if(!i)throw Error("createTexture failed");return e.bindTexture(e.TEXTURE_2D,i),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,r?e.LINEAR:e.NEAREST),a?(e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR)):e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,r?e.LINEAR:e.NEAREST),i}(e,x,{linear:!0,mipmap:!0}),cols:16,rows:n}}e.s(["F",0,t,"Q",0,function(e,t,o,r){e.bindFramebuffer(e.FRAMEBUFFER,t?t.fbo:null),e.viewport(0,0,t?t.w:o??e.drawingBufferWidth,t?t.h:r??e.drawingBufferHeight)},"g",0,function(e,t,o){e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,o)},"Y",0,l,"_",0,function(e,t,o,l={}){let i={read:r(e,t,o,l),write:r(e,t,o,l),swap(){let e=i.read;i.read=i.write,i.write=e},dispose(){a(e,i.read),a(e,i.write)}};return i},"R",0,function(e,t,r){let a=e.createProgram();if(!a)throw Error("createProgram failed");let l=o(e,e.VERTEX_SHADER,t),i=o(e,e.FRAGMENT_SHADER,r);if(e.attachShader(a,l),e.attachShader(a,i),e.linkProgram(a),e.deleteShader(l),e.deleteShader(i),!e.getProgramParameter(a,e.LINK_STATUS))throw Error(`Program link error: ${e.getProgramInfoLog(a)}`);let n=new Map;return{handle:a,use:()=>e.useProgram(a),u:t=>(n.has(t)||n.set(t,e.getUniformLocation(a,t)),n.get(t)??null),dispose:()=>e.deleteProgram(a)}},"D",0,r,"n",0,a,"o",0,function(e){e.drawArrays(e.TRIANGLES,0,3)},"h",0,function(e,t,o,r,a=!1){let l=e.createTexture();if(!l)throw Error("createTexture failed");e.bindTexture(e.TEXTURE_2D,l),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.R8,t,o,0,e.RED,e.UNSIGNED_BYTE,r),e.pixelStorei(e.UNPACK_ALIGNMENT,4);let i=a?e.LINEAR:e.NEAREST;return e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),l}],54666);let i=`#version 300 es
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
`;e.s(["Z",0,f,"A",0,c,"B",0,x,"U",0,i,"K",0,n,"s",0,u],35478)},75931,e=>{var t=e.i(54666),o=e.i(35478),r=e.i(29039);let a=Array.from({length:95},(e,t)=>String.fromCharCode(32+t)).concat(["×","·"]),l=e=>{let t=e.charCodeAt(0);return t>=32&&t<127?t-32:"×"===e?95:"·"===e?96:31},i=o.U+o.K+o.B+o.A+`
uniform vec2 uRes;
uniform float uTime;
uniform float uPx;
uniform float uReveal;
uniform vec4 uPointer;
${o.s}
uniform sampler2D uAtlas;
uniform sampler2D uText;
uniform vec2 uAtlasSize;
// Отрезки, пиксели буфера. Стиль: x — яркость, y — пунктир, z — бледный
// (а не кислотный), w — засечки на концах (пиксели раскладки)
uniform vec4 uSeg[16];
uniform vec4 uSegS[16];
// Рамки: x — обводка, y — бегущий пунктир, z — заливка
uniform vec4 uRect[4];
uniform vec4 uRectS[4];
// Выделение. x — яркость, y — какая доля рамки обведена, z — размер ручек,
// w — вспышка финала
uniform vec4 uSel;
uniform vec4 uSelS;
// Плашки: x0, y0, ширина, высота (пиксели буфера). x — яркость, y — стиль,
// z — знаков, w — сколько напечатано
uniform vec4 uLab[12];
uniform vec4 uLabS[12];
// Кольцо клика: центр и радиус (пиксели буфера), яркость
uniform vec4 uRing;
// Колонки: число, поля, промежуток (пиксели раскладки), ширина линеек
uniform vec4 uCols;
// x — сдвиг точек прокруткой, y — прицел, z — выделение на линейках
uniform vec4 uGrid;
in vec2 vUv;
out vec4 o;

const float CELL_W = 24.0;
const float CELL_H = 32.0;
const float ATLAS_FS = 21.0;
const float FONT = 11.0;
const float ADV = 6.60;
const float PILL_X = 6.0;
// Цифры линеек
const float RFS = 8.5;
const float RADV = 5.1;
// Знак в атласе стоит чуть ниже середины клетки
const float TEXT_DY = 0.0;
const float GRID = 24.0;
const vec3 RULER_BG = vec3(0.043, 0.052, 0.014);

float cover(float d) {
  return clamp(0.5 - d, 0.0, 1.0);
}

// Линия толщиной w на расстоянии d от оси — всё в пикселях буфера
float stroke(float d, float w) {
  return clamp(w * 0.5 + 0.5 - abs(d), 0.0, 1.0);
}

// Пунктир: половина периода штрих, половина пусто
float dashes(float t, float period) {
  float f = fract(t / period);
  return clamp(0.5 - (abs(f - 0.5) - 0.25) * period, 0.0, 1.0);
}

float segD(vec2 p, vec2 a, vec2 b, out float along) {
  vec2 ab = b - a;
  float l = max(length(ab), 1e-4);
  vec2 dir = ab / l;
  along = clamp(dot(p - a, dir), 0.0, l);
  return length(p - a - dir * along);
}

float boxD(vec2 p, vec4 b) {
  vec2 c = 0.5 * (b.xy + b.zw);
  vec2 h = 0.5 * abs(b.zw - b.xy);
  vec2 d = abs(p - c) - h;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

/* Знак ci из атласа. loc — от середины знакоместа, пиксели раскладки, y
   вниз; fs — кегль. Уровень мипмапа — по масштабу: производные на стыке
   знакомест скачут, и texture() брал бы там размытый уровень */
float glyph(int ci, vec2 loc, float fs) {
  if (ci <= 0) return 0.0;
  float k = ATLAS_FS / fs;
  vec2 hc = vec2(CELL_W, CELL_H) * 0.5 - 1.0;
  vec2 a = clamp(loc * k, -hc, hc);
  vec2 cell = vec2(float(ci % 16), float(ci / 16));
  vec2 uv = (cell * vec2(CELL_W, CELL_H) + vec2(CELL_W, CELL_H) * 0.5 + a) / uAtlasSize;
  return textureLod(uAtlas, uv, max(log2(k / uPx), 0.0)).r;
}

// Тишина под мелким текстом без растушёвки: рамкам и плашкам рядом с ним
// мягкий край calmAt ни к чему, они текст не перекрывают
float calmTight(vec2 p) {
  float k = 0.0;
  for (int i = 0; i < 8; i++) {
    if (i >= uCalmN) break;
    k = max(k, (1.0 - smoothstep(0.0, 6.0 * uPx, boxD(p, uCalm[i]))) * uCalmK[i]);
  }
  return k;
}

void main() {
  vec2 p = gl_FragCoord.xy;
  vec2 uv = p / uRes;
  // Пиксели раскладки, y вниз — как в вёрстке
  vec2 q = vec2(p.x, uRes.y - p.y) / uPx;
  vec2 L = uRes / uPx;
  float t = uTime;
  float rv = uReveal;
  float td = titleD(p);
  vec2 cur = vec2(uPointer.x, uRes.y - uPointer.y) / uPx;
  vec2 wcen = vec2(0.5 * (uWord.x + uWord.z), uRes.y - 0.5 * (uWord.y + uWord.w)) / uPx;
  float R = uCols.w;

  vec3 far = C_BASE;

  /* Сетка колонок, как в макете: поля, промежутки. Колонки проявляются от
     середины к краям */
  float ncol = uCols.x;
  float span = L.x - 2.0 * uCols.y;
  float cw = (span - (ncol - 1.0) * uCols.z) / ncol;
  float xc = q.x - uCols.y;
  if (cw > 0.0 && xc >= -1.0 && xc <= span + 1.0) {
    float i = clamp(floor(xc / (cw + uCols.z)), 0.0, ncol - 1.0);
    float within = xc - i * (cw + uCols.z);
    float inside = clamp(within * uPx + 0.5, 0.0, 1.0) * clamp((cw - within) * uPx + 0.5, 0.0, 1.0);
    float mid = (ncol - 1.0) * 0.5;
    float delay = 0.08 + 0.3 * abs(i - mid) / max(mid, 1.0);
    far += C_ACID * 0.018 * inside * smoothstep(delay, delay + 0.2, rv);
  }

  // Точки холста: у курсора ярче, проявляются кругом от слова
  vec2 cellp = (fract((q + vec2(0.0, uGrid.x)) / GRID + 0.5) - 0.5) * GRID;
  float dt0 = clamp((0.75 - length(cellp)) * uPx + 0.5, 0.0, 1.0);
  vec2 dc = q - cur;
  float lamp = exp(-dot(dc, dc) / (2.0 * 170.0 * 170.0));
  float rr = length(q - wcen) / max(length(L), 1.0);
  float dotsOn = smoothstep(rr, rr + 0.12, smoothstep(0.15, 0.6, rv) * 1.15);
  far += C_ACID * dt0 * (0.07 + 0.42 * lamp * uGrid.y) * dotsOn;

  /* Линейки сверху и слева. Штрихи через 10, 50 и 100 пикселей, у сотен —
     цифры (слева повёрнуты, читаются снизу вверх). Отрезок выделения на
     линейке подсвечен, курсор отмечен чертой */
  float ra = smoothstep(0.0, 0.45, rv);
  if (R > 0.0 && ra > 0.0 && (q.y < R || q.x < R)) {
    bool top = q.y < R;
    float pos = top ? q.x : q.y;
    float acr = top ? q.y : q.x;
    float len = top ? L.x : L.y;
    vec4 sq = vec4(uSel.x, uRes.y - uSel.w, uSel.z, uRes.y - uSel.y) / uPx;
    float lo = top ? sq.x : sq.y;
    float hi = top ? sq.z : sq.w;
    float band = clamp((pos - lo) * uPx + 0.5, 0.0, 1.0) * clamp((hi - pos) * uPx + 0.5, 0.0, 1.0) * uGrid.z;
    vec3 rc = RULER_BG + C_ACID * 0.06 * band;
    float sweep = 1.0 - smoothstep(len * ra * 1.15 - 80.0, len * ra * 1.15, pos);
    float n10 = floor(pos / 10.0 + 0.5);
    float tl = mod(n10, 10.0) < 0.5 ? R : (mod(n10, 5.0) < 0.5 ? 7.0 : 4.0);
    float tick = stroke((pos - n10 * 10.0) * uPx, uPx) * step(R - tl, acr);
    float num = 0.0;
    float m = floor(pos / 100.0) * 100.0;
    if (m > 0.0) {
      int n = int(m + 0.5);
      int nd = n >= 1000 ? 4 : (n >= 100 ? 3 : 2);
      float tw = float(nd) * RADV;
      float tx = top ? pos - m - 3.0 : m + 3.0 + tw - pos;
      if (tx >= 0.0 && tx < tw) {
        float slot = floor(tx / RADV);
        int si = int(slot);
        int pw = 1;
        for (int j = 0; j < 3; j++) {
          if (j < nd - 1 - si) pw *= 10;
        }
        num = glyph(16 + (n / pw) % 10, vec2(tx - (slot + 0.5) * RADV, acr - 6.0 + TEXT_DY), RFS);
      }
    }
    vec3 marks = mix(C_PALE * 0.3, C_ACID * 0.9, band);
    rc += marks * max(tick, num * 0.95) * sweep;
    float mk = stroke((pos - (top ? cur.x : cur.y)) * uPx, uPx) * uGrid.y;
    rc = mix(rc, C_ACID, mk * 0.85);
    rc += C_PALE * 0.06 * stroke((R - 0.5 - acr) * uPx, uPx);
    if (q.x < R && q.y < R) rc = RULER_BG;
    far = mix(far, rc, ra);
  }

  // Прицел: линии через курсор, у самого курсора разрыв
  if (uGrid.y > 0.0 && q.x > R && q.y > R) {
    float ch = max(stroke(dc.x * uPx, uPx), stroke(dc.y * uPx, uPx));
    far += C_ACID * 0.15 * ch * smoothstep(7.0, 12.0, length(dc)) * uGrid.y;
  }

  // Замеры, направляющие, лучи финала
  for (int i = 0; i < 16; i++) {
    vec4 S = uSegS[i];
    if (S.x < 0.004) continue;
    vec4 A = uSeg[i];
    float along;
    float a = stroke(segD(p, A.xy, A.zw, along), uPx);
    if (S.y > 0.5) a *= dashes(along, 6.0 * uPx);
    if (S.w > 0.0) {
      vec2 dir = normalize(A.zw - A.xy + vec2(1e-5, 0.0));
      vec2 nrm = vec2(-dir.y, dir.x) * S.w * uPx;
      float tmp;
      a = max(a, stroke(segD(p, A.xy - nrm, A.xy + nrm, tmp), uPx));
      a = max(a, stroke(segD(p, A.zw - nrm, A.zw + nrm, tmp), uPx));
    }
    far += mix(C_ACID, C_PALE, S.z) * a * S.x;
  }

  if (uRing.w > 0.0) far += C_ACID * stroke(length(p - uRing.xy) - uRing.z, uPx) * uRing.w;

  vec2 vg = (uv - 0.5) * vec2(1.0, 1.25);
  far *= 1.0 - 0.3 * smoothstep(0.4, 1.0, length(vg));
  far += grain(p, t) * 0.016;
  vec3 col = capLum(soft(far), calmCap(max(calmAt(p), moat(td, 30.0))));

  // Контур под курсором, фокус, рамка протяжки
  for (int i = 0; i < 4; i++) {
    vec4 S = uRectS[i];
    if (S.x < 0.004 && S.z < 0.004) continue;
    float sd = boxD(p, uRect[i]);
    float a = stroke(sd, uPx);
    if (S.y > 0.0) a *= dashes(p.x + p.y + t * 24.0 * uPx, 7.0 * uPx);
    col = mix(col, C_ACID, cover(sd) * S.z);
    col = mix(col, C_ACID, a * S.x);
  }

  /* Выделение. Рамка обводится по часовой от левого верхнего угла, на конце
     бежит светлая искра. Ручки — тёмные квадраты в кислотной обводке */
  if (uSelS.x > 0.004) {
    vec4 B = uSel;
    float sd = boxD(p, B);
    float W = B.z - B.x;
    float H = B.w - B.y;
    float per = 2.0 * (W + H);
    float et = abs(p.y - B.w);
    float er = abs(p.x - B.z);
    float eb = abs(p.y - B.y);
    float el = abs(p.x - B.x);
    float u;
    if (et <= min(min(er, eb), el)) u = clamp(p.x - B.x, 0.0, W);
    else if (er <= min(eb, el)) u = W + clamp(B.w - p.y, 0.0, H);
    else if (eb <= el) u = W + H + clamp(B.z - p.x, 0.0, W);
    else u = 2.0 * W + H + clamp(p.y - B.y, 0.0, H);
    float drawn = clamp(uSelS.y * per - u + 0.5, 0.0, 1.0);
    float tip = (u - uSelS.y * per) / (28.0 * uPx);
    float spark = exp(-tip * tip) * (1.0 - step(0.999, uSelS.y)) * drawn;
    float line = stroke(sd, uPx);
    float glow = exp(-abs(sd) / (9.0 * uPx)) * uSelS.w;
    col += C_ACID * 0.35 * glow * drawn;
    col = mix(col, mix(C_ACID, C_PALE, 0.6 * uSelS.w), line * drawn * uSelS.x);
    col += C_PALE * line * spark * 0.9;

    if (uSelS.z > 0.001) {
      float hs = 3.5 * uPx * uSelS.z;
      for (int k = 0; k < 9; k++) {
        if (k == 4) continue;
        vec2 hp = mix(B.xy, B.zw, vec2(float(k % 3), float(k / 3)) * 0.5);
        vec2 e = abs(p - hp) - hs;
        float s = max(e.x, e.y);
        float body = cover(s);
        float ring = body - cover(s + uPx);
        col = mix(col, C_BASE, body * uSelS.x);
        col = mix(col, C_ACID, ring * uSelS.x);
      }
    }
  }

  /* Плашки с подписями. Стили: 0 — кислотная, тёмный текст (выделение);
     1 — тёмная в обводке, светлый текст (координаты); 2 — бледная, тёмный
     текст (расстояния) */
  for (int i = 0; i < 12; i++) {
    vec4 S = uLabS[i];
    if (S.x < 0.004) continue;
    vec4 Lb = uLab[i];
    if (p.x < Lb.x - 2.0 || p.y < Lb.y - 2.0 || p.x > Lb.x + Lb.z + 2.0 || p.y > Lb.y + Lb.w + 2.0) continue;
    vec2 c = Lb.xy + 0.5 * Lb.zw;
    float r = 3.0 * uPx;
    vec2 dq = abs(p - c) - (0.5 * Lb.zw - r);
    float sd = length(max(dq, 0.0)) + min(max(dq.x, dq.y), 0.0) - r;
    float body = cover(sd);
    float lx = (p.x - Lb.x) / uPx - PILL_X;
    float ly = (c.y - p.y) / uPx;
    float slot = floor(lx / ADV);
    float ink_ = 0.0;
    if (lx >= 0.0 && slot < S.z) {
      if (slot < floor(S.w)) {
        int ci = int(texelFetch(uText, ivec2(int(slot), i), 0).r * 255.0 + 0.5);
        ink_ = glyph(ci, vec2(lx - (slot + 0.5) * ADV, ly + TEXT_DY), FONT);
      } else if (slot == floor(S.w)) {
        // Каретка: пока подпись печатается, перед ней бежит блок
        ink_ = step(abs(lx - (slot + 0.5) * ADV), ADV * 0.42) * step(abs(ly), FONT * 0.5);
      }
    }
    int st = int(S.y + 0.5);
    vec3 fillC = st == 0 ? C_ACID : (st == 1 ? vec3(0.028, 0.036, 0.006) : C_PALE * 0.9);
    vec3 textC = st == 1 ? C_PALE * 0.92 : C_BASE;
    col = mix(col, fillC, body * S.x);
    if (st == 1) col = mix(col, C_ACID * 0.55, (body - cover(sd + uPx)) * S.x);
    col = mix(col, textC, ink_ * body * S.x);
  }

  col = capLum(col, calmCap(max(calmTight(p), moat(td, 14.0))));
  o = vec4(max(col, 0.0), 1.0);
}`,n=e=>Math.min(1,Math.max(0,e)),x=(e,t,o)=>{let r=n((o-e)/(t-e));return r*r*(3-2*r)},c=(e,t)=>({x0:e.x0-t,y0:e.y0-t,x1:e.x1+t,y1:e.y1+t}),f=(e,t,o)=>t>=e.x0&&t<=e.x1&&o>=e.y0&&o<=e.y1,u=(e,t)=>e.x0<t.x1&&e.x1>t.x0&&e.y0<t.y1&&e.y1>t.y0,y=e=>12+6.6*e.length,s=e=>{let t=e.tagName.toLowerCase(),o=e.classList[0];return o?`${t}.${o}`:t},m=[["card",".hero-card-desktop a"],["desc",".hero-description[data-hero-calm]"]],p=["t1","t0","t2","t0","card","t0","desc","t0"],d=async e=>{let{gl:o,common:d,host:h,layer:v}=e,E=await (0,t.Y)(o,a,24,32),T=(0,t.R)(o,t.F,i),_=(0,r.I)(o,h,v),R=new Uint8Array(384),g=(0,t.h)(o,32,12,R),A={x0:0,y0:0,x1:0,y1:0},w=new Float32Array(64),S=new Float32Array(64),C=new Float32Array(16),b=new Float32Array(16),P=new Float32Array(48),L=new Float32Array(48),D=Array.from({length:12},()=>({text:"",key:"",x:0,y:0,w:0,style:0,alpha:0,want:0,t0:-10,typed:0})),M=[],U=1,z=1,F=1,I=1,B=1,k=18,X=["t0"],N="t0",G={x0:0,y0:0,x1:0,y1:0},W=[0,0,0,0],q=!1,O=p.length-1,$=!1,K=!1,j=-10,H={x:0,y:0},V=null,Y=0,Q=null,Z=0,J=0,ee=0,et=e=>{let t=e.target,o=t instanceof Element?t:t?.parentElement;o?.closest("input, textarea, select, [contenteditable]")||e.preventDefault()};h.addEventListener("selectstart",et);let eo=e=>{let t=e.join(",");t!==N&&(X=e,N=t)},er=(e,t,o,r,a,l,i,n)=>{if(Z>=16||a<.004)return;let x=4*Z++;w[x]=e*F,w[x+1]=(B-t)*F,w[x+2]=o*F,w[x+3]=(B-r)*F,S[x]=a,S[x+1]=+!!l,S[x+2]=+!!i,S[x+3]=n},ea=(e,t,o,r)=>{if(J>=4)return;let a=4*J++;C[a]=e.x0*F,C[a+1]=(B-e.y1)*F,C[a+2]=e.x1*F,C[a+3]=(B-e.y0)*F,b[a]=t,b[a+1]=+!!o,b[a+2]=r},el=(e,t,o,r,a,l,i)=>{let n=D[e];o!==n.key&&(n.key=o,n.t0=ee),n.text=t.slice(0,32),n.w=y(n.text),n.x=r,n.y=a,n.style=l,n.want=i};return{resize(e,t,o){U=e,z=t,I=e/(F=o),B=t/F,_.update()},frame(e){let a,i=e.time,et=e.dt;ee=i,_.ready&&e.frame%20!=0||_.update(),(0,r.j)(_,e,I,B,A),e.frame%10!=0&&M.length||(()=>{M.length=0;let e=v.getBoundingClientRect(),t=e.width/(v.offsetWidth||1)||1;for(let[o,r]of(h.querySelectorAll("[data-bg-text]").forEach((e,t)=>{let o=_.ready?_.groups[t]:null;o&&!(o.x1-o.x0<1)&&M.push({key:`t${t}`,name:s(e),tag:e.tagName.toLowerCase(),box:c(o,14)})}),m)){let a=h.querySelector(r);if(!a)continue;let l=a.getBoundingClientRect();if(l.width<2||l.height<2)continue;let i={x0:(l.left-e.left)/t,y0:(l.top-e.top)/t,x1:(l.right-e.left)/t,y1:(l.bottom-e.top)/t};M.push({key:o,name:s(a),tag:a.tagName.toLowerCase(),box:c(i,6)})}})(),k=18*!e.narrow;let ei=e.reveal,en=M.filter(e=>X.includes(e.key));en.length||(X=["t0"],N="t0",en=M.filter(e=>"t0"===e.key));let ex=en.length?{x0:Math.min(...en.map(e=>e.box.x0)),y0:Math.min(...en.map(e=>e.box.y0)),x1:Math.max(...en.map(e=>e.box.x1)),y1:Math.max(...en.map(e=>e.box.y1))}:c(A,14);q||(Object.assign(G,ex),q=!0);let ec=2*Math.sqrt(300)*.78,ef=Math.max(1,Math.ceil(240*et)),eu=et/ef,ey=["x0","y0","x1","y1"];for(let e=0;e<4;e++){let t=ey[e];for(let o=0;o<ef;o++)W[e]+=(300*(ex[t]-G[t])-ec*W[e])*eu,G[t]+=W[e]*eu}let es={x:e.pointer.x/F,y:B-e.pointer.y/F},em=e.pointer.auto;e.pointer.down&&!$&&(H.x=es.x,H.y=es.y,K=!1),e.pointer.down&&(j=i,Math.hypot(es.x-H.x,es.y-H.y)>6&&(K=!0));let ep={x0:Math.min(H.x,es.x),y0:Math.min(H.y,es.y),x1:Math.max(H.x,es.x),y1:Math.max(H.y,es.y)};!e.pointer.down&&$&&K&&(V=ep,K=!1),$=e.pointer.down;for(let t=e.bursts.length-1;t>=0;t--){let o=e.bursts[t];if(!(o.id<=Y))if(Y=o.id,V){let e=M.filter(e=>u(e.box,V)).map(e=>e.key);e.length&&eo(e),V=null}else if(i-j>.4&&em>.5){for(let e=0;e<p.length&&(O=(O+1)%p.length,!M.some(e=>e.key===p[O]));e++);eo([p[O]])}else{let e=o.x/F,t=B-o.y/F,r=M.filter(o=>f(o.box,e,t)).sort((e,t)=>(e.box.x1-e.box.x0)*(e.box.y1-e.box.y0)-(t.box.x1-t.box.x0)*(t.box.y1-t.box.y0))[0];r?eo([r.key]):Q={x:e,y:t,t0:i}}}let ed=f(G,es.x,es.y),eh=K?void 0:M.find(e=>!X.includes(e.key)&&f(e.box,es.x,es.y)),ev=x(.35,.75,ei),eE=ei>.7?1+2.7*(a=n((ei-.7)/.15)-1)*a*a+1.7*a*a:0,eT=n((ei-.8)/.2),e_=x(.85,1,ei),eR=e.arriveAge,eg=eR<3.8?1-x(2.6,3.8,eR):0,eA=eR<3?Math.exp(-(2.2*eR)):0;for(let e of(Z=0,J=0,S.fill(0),b.fill(0),D))e.want=0;let ew=[];for(let t=0;t<e.calm.n;t++){let o=e.calm.rects;ew.push({x0:o[4*t]/F,y0:B-o[4*t+3]/F,x1:o[4*t+2]/F,y1:B-o[4*t+1]/F})}let eS=(e,t,o,r)=>{if(e<k+4||t<k+4||e+o>I-4||t+18>B-4)return -1;let a={x0:e-4,y0:t-4,x1:e+o+4,y1:t+18+4};if(r&&u(r,a)||ew.some(e=>u(e,a)))return -1;let l=1e4;if(_.ready)for(let r of[0,.5,1])for(let a of[0,.5,1])l=Math.min(l,_.sample(e+r*o,t+18*a));return l},eC=(e,t,o)=>{let r=e[0],a=-1/0;for(let l of e){let[e,i]=l(ex,t),n=eS(e,i,t,o);if(n>=14)return l;n>a&&(a=n,r=l)}return r},eb=en.length>1?en.map(e=>e.tag).join(" + "):en[0]?.name??"h1",eP=y(eb),eL=eC([e=>[e.x0,e.y0-6-18],(e,t)=>[e.x1-t,e.y0-6-18],e=>[e.x0,e.y1+6],(e,t)=>[e.x1-t,e.y1+6]],eP,null),[eD,eM]=eL(G,eP),eU=`${Math.round(G.x1-G.x0)} \xd7 ${Math.round(G.y1-G.y0)}`,ez=y(eU),[eF,eI]=eL(ex,eP),[eB,ek]=eC([(e,t)=>[(e.x0+e.x1)/2-t/2,e.y1+6],(e,t)=>[(e.x0+e.x1)/2-t/2,e.y0-6-18],(e,t)=>[e.x1-t,e.y1+6],e=>[e.x0,e.y1+6],e=>[e.x1+6,(e.y0+e.y1)/2-9],(e,t)=>[e.x0-6-t,(e.y0+e.y1)/2-9]],ez,{x0:eF,y0:eI,x1:eF+eP,y1:eI+18})(G,ez),eX=+(eT>0);if(el(0,eb,`tag:${N}`,eD,eM,0,eX),el(1,eU,`size:${N}`,eB,ek,0,eX),eh)ea(eh.box,.8*e_,!1,0);else if(e.focusK>.02){let t=e.focus;ea(c({x0:t.x0/F,y0:B-t.y1/F,x1:t.x1/F,y1:B-t.y0/F},4),.8*e.focusK*e_,!1,0)}K&&e.pointer.down&&ea(ep,.95,!0,.05+.05*e.pointer.charge);let eN=e_*(1-.3*em)*(1-eg);if(eN>.01&&!ed&&!K){let e=eh?eh.box:{x0:es.x,y0:es.y,x1:es.x,y1:es.y},t=3,o=e.x0>G.x1?[G.x1,e.x0]:e.x1<G.x0?[e.x1,G.x0]:null;if(o){let r=Math.max(G.y0,e.y0),a=Math.min(G.y1,e.y1),l=(r+a)/2;if(r>a){l=(e.y0+e.y1)/2;let t=e.x0>G.x1?G.x1:G.x0;er(t,l<G.y0?G.y0:G.y1,t,l,.55*eN,!0,!0,0)}er(o[0],l,o[1],l,.85*eN,!1,!0,3);let i=`${Math.round(o[1]-o[0])}`,n=y(i),x=(o[0]+o[1])/2-n/2,c=o[1]-o[0]>n+12;el(t++,i,"mx",x,c?l-9:l-18-6,2,eN)}let r=e.y0>G.y1?[G.y1,e.y0]:e.y1<G.y0?[e.y1,G.y0]:null;if(r){let o=Math.max(G.x0,e.x0),a=Math.min(G.x1,e.x1),l=(o+a)/2;if(o>a){l=(e.x0+e.x1)/2;let t=e.y0>G.y1?G.y1:G.y0;er(l<G.x0?G.x0:G.x1,t,l,t,.55*eN,!0,!0,0)}er(l,r[0],l,r[1],.85*eN,!1,!0,3);let i=`${Math.round(r[1]-r[0])}`,n=y(i),x=(r[0]+r[1])/2-9,c=r[1]-r[0]>30;el(t++,i,"my",c?l-n/2:l+8,x,2,eN)}}let eG=[0,0,0,0],eW=0;if(Q){let e=i-Q.t0;if(e>1.9)Q=null;else{let t=1-x(1,1.9,e);er(k,Q.y,I,Q.y,.5*t,!0,!1,0),er(Q.x,k,Q.x,B,.5*t,!0,!1,0);let o=1-Math.pow(1-Math.min(1,e/.45),3);eG=[Q.x*F,(B-Q.y)*F,(6+16*o)*F,t*(1-.55*o)],el(5,`${Math.round(Q.x)}, ${Math.round(Q.y)}`,`mark:${Q.t0}`,Q.x+10,Q.y+10,1,t),eW=t*(1-x(24,64,Math.hypot(es.x-Q.x,es.y-Q.y)))}}let eq=`X ${Math.round(es.x)}  Y ${Math.round(es.y)}`,eO=y(eq),e$=es.x+14,eK=es.y+16;if(e$+eO>I-8&&(e$=es.x-14-eO),eK+18>B-8&&(eK=es.y-16-18),el(2,eq,"xy",e$,eK,1,e_*(1-.35*em)*(1-.6*eg)*(K?.6:1)*(1-eW)),eg>0){let e=1-Math.pow(1-n(eR/.7),3),t=(G.x0+G.x1)/2,o=(G.y0+G.y1)/2;[[G.x0,o,k,o],[G.x1,o,I,o],[t,G.y0,t,k],[t,G.y1,t,B]].forEach(([t,o,r,a],l)=>{let i=Math.hypot(r-t,a-o);if(i<30)return;er(t,o,t+(r-t)*e,o+(a-o)*e,.8*eg,!1,!1,3);let n=`${Math.round(i)}`,c=y(n);el(6+l,n,`ray${l}`,(t+r)/2-c/2,(o+a)/2-9,0,eg*x(.45,.75,eR))})}for(let e=0;e<12;e++){let t=D[e];t.alpha+=(t.want-t.alpha)*(1-Math.exp(-(14*et))),t.alpha<.004&&(t.alpha=0);let o=t.text.length,r=n((i-t.t0)/.28);t.typed=o*(e<2?Math.min(eT,r):5===e||e>=6?r:1);let a=4*e;P[a]=t.x*F,P[a+1]=(B-t.y-18)*F,P[a+2]=t.w*F,P[a+3]=18*F,L[a]=t.alpha,L[a+1]=t.style,L[a+2]=o,L[a+3]=t.typed>=o?o+1:t.typed;let x=32*e;for(let e=0;e<32;e++)R[x+e]=e<o?l(t.text[e]):0}(0,t.Q)(o,null,U,z),T.use(),d(T,e),(0,r.i)(o,T,_,0,A,F,B),(0,t.g)(o,1,E.tex),o.uniform1i(T.u("uAtlas"),1),(0,t.g)(o,2,g),o.pixelStorei(o.UNPACK_ALIGNMENT,1),o.texSubImage2D(o.TEXTURE_2D,0,0,0,32,12,o.RED,o.UNSIGNED_BYTE,R),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.uniform1i(T.u("uText"),2),o.uniform2f(T.u("uAtlasSize"),24*E.cols,32*E.rows),o.uniform4fv(T.u("uSeg"),w),o.uniform4fv(T.u("uSegS"),S),o.uniform4fv(T.u("uRect"),C),o.uniform4fv(T.u("uRectS"),b),o.uniform4f(T.u("uSel"),G.x0*F,(B-G.y1)*F,G.x1*F,(B-G.y0)*F),o.uniform4f(T.u("uSelS"),1,ev,eE,eA),o.uniform4fv(T.u("uLab"),P),o.uniform4fv(T.u("uLabS"),L),o.uniform4f(T.u("uRing"),eG[0],eG[1],eG[2],eG[3]),o.uniform4f(T.u("uCols"),e.narrow?4:12,e.narrow?16:40,e.narrow?16:24,k),o.uniform4f(T.u("uGrid"),e.scroll*B*.3,e_*(1-.5*em),ev,0),(0,t.o)(o)},dispose(){h.removeEventListener("selectstart",et),o.deleteTexture(E.tex),o.deleteTexture(g),_.dispose(),T.dispose()}}};e.s(["budget",0,24e5,"hero",0,{budget:24e5,create:d}])},29039,e=>{var t=e.i(54666);function o(e,t,o,r,a,l,i){l[0]=0,i[0]=-1e20,i[1]=1e20,a[0]=e[t];for(let n=1,x=0;n<r;n++){a[n]=e[t+n*o];let r=n*n,c=0;do{let e=l[x];c=(a[n]-a[e]+r-e*e)/(n-e)/2}while(c<=i[x]&&--x>-1)l[++x]=n,i[x]=c,i[x+1]=1e20}for(let n=0,x=0;n<r;n++){for(;i[x+1]<n;)x++;let r=l[x],c=n-r;e[t+n*o]=a[r]+c*c}}function r(e,t,r,a,l,i){for(let n=0;n<t;n++)o(e,n,t,r,a,l,i);for(let n=0;n<r;n++)o(e,n*t,1,t,a,l,i)}function a(e,t,o,r,a,l,i){if(!t||e.length<t*o)return 1e4;let n=l/r-.5,x=i/a-.5;n<0?n=0:n>t-1.001&&(n=t-1.001),x<0?x=0:x>o-1.001&&(x=o-1.001);let c=0|n,f=0|x,u=n-c,y=x-f,s=f*t+c,m=e[s]+(e[s+1]-e[s])*u;return m+(e[s+t]+(e[s+t+1]-e[s+t])*u-m)*y}e.s(["i",0,function(e,o,r,a,l,i,n){(0,t.g)(e,a,r.tex),e.uniform1i(o.u("uTitle"),a),e.uniform1f(o.u("uTitleOn"),+!!r.ready),e.uniform4f(o.u("uWord"),l.x0*i,(n-l.y1)*i,l.x1*i,(n-l.y0)*i)},"R",0,function(e,t){let o=new Map;return{update(){let r=t.offsetWidth;if(!r)return;let a=t.getBoundingClientRect(),l=a.width/r||1,i=new Set(e.querySelectorAll("[data-bg-body]"));for(let e of o.keys())i.has(e)||o.delete(e);for(let e of i){if(e.closest(".is-tilting"))continue;let t=e.getBoundingClientRect();if(t.width<.5||t.height<.5){o.delete(e);continue}o.set(e,{x0:(t.left-a.left)/l,y0:(t.top-a.top)/l,x1:(t.right-a.left)/l,y1:(t.bottom-a.top)/l})}},union(e,t){for(let r of(Object.assign(t,e),o.values()))t.x0=Math.min(t.x0,r.x0),t.y0=Math.min(t.y0,r.y0),t.x1=Math.max(t.x1,r.x1),t.y1=Math.max(t.y1,r.y1);return t}}},"S",0,function(e,t,o){let r=e.createTexture();if(!r)throw Error("createTexture failed");let l=-1,i=new Float32Array(0),n=new Float32Array(0),x={w:0,h:0,cx:1,cy:1},c=(e,t,o,r,a,l)=>{let i=l?o:r,n=l?r:o,x=l?1:o,c=1/(2*a+1);for(let r=0;r<n;r++){let n=l?r*o:r,f=t=>e[n+Math.min(i-1,Math.max(0,t))*x],u=0;for(let e=-a;e<=a;e++)u+=f(e);for(let e=0;e<i;e++)t[n+e*x]=u*c,u+=f(e+a+1)-f(e-a)}};return{tex:r,update(){if(!t.ready||l===t.version)return;l=t.version;let{w:a,h:f}=t;i.length!==a*f&&(i=new Float32Array(a*f),n=new Float32Array(a*f));let u=Math.max(1,Math.round(o/((t.cx+t.cy)/2)/2));c(t.dist,i,a,f,u,!0),c(i,n,a,f,u,!1),c(n,i,a,f,u,!0),c(i,n,a,f,u,!1),Object.assign(x,{w:a,h:f,cx:t.cx,cy:t.cy}),e.bindTexture(e.TEXTURE_2D,r),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.texImage2D(e.TEXTURE_2D,0,e.R16F,a,f,0,e.RED,e.FLOAT,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},sample:(e,t)=>a(n,x.w,x.h,x.cx,x.cy,e,t),dispose(){e.deleteTexture(r)}}},"I",0,function(e,t,o){let l=e.createTexture();if(!l)throw Error("createTexture failed");let i=document.createElement("canvas"),n=i.getContext("2d",{willReadFrequently:!0});if(!n)throw Error("2d context failed");let x=new Float64Array(0),c=new Float64Array(0),f=new Float64Array(0),u=new Float64Array(0),y=new Uint16Array(0),s="",m="loaded"===document.fonts.status;m||document.fonts.ready.then(()=>{m=!0});let p={ready:!1,version:0,tex:l,w:0,h:0,cx:1,cy:1,dist:new Float32Array(0),glyphs:[],box:{x0:0,y0:0,x1:0,y1:0},groups:[],update:function(a=!1){let d=o.offsetWidth,h=o.offsetHeight;if(!d||!h||!m)return!1;let v=function(e){let r=o.getBoundingClientRect(),a=r.width/e||1,l=document.createRange(),i=[],n=0;for(let e of t.querySelectorAll("[data-bg-text]")){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let e=t.nextNode();e;e=t.nextNode()){let t=e.parentElement;if(!t||t.closest('[aria-hidden="true"]'))continue;let o=getComputedStyle(t),x=parseFloat(o.fontSize)||16,c=`${o.fontStyle} ${o.fontWeight} ${x}px ${o.fontFamily}`,f="uppercase"===o.textTransform,u=e.textContent??"";for(let t=0;t<u.length;t++){let o=u[t];if(!o.trim())continue;l.setStart(e,t),l.setEnd(e,t+1);let y=l.getBoundingClientRect();if(y.width<.5||y.height<.5)continue;let s=(y.top-r.top)/a;i.push({ch:f?o.toUpperCase():o,x:(y.left-r.left)/a,y:s,w:y.width/a,h:y.height/a,size:x,font:c,group:n,top:s,bottom:s})}}n++}return i}(d),E=`${d}x${h}:`;for(let e of v)E+=`${e.ch}${Math.round(2*e.x)},${Math.round(2*e.y)},${Math.round(2*e.h)};`;if(!a&&E===s)return!1;s=E;let T=Math.max(2,Math.ceil(Math.sqrt(d*h/14e4))),_=Math.max(2,Math.ceil(d/T)),R=Math.max(2,Math.ceil(h/T)),g=_*R,A=_!==p.w||R!==p.h;if(A){i.width=_,i.height=R,x=new Float64Array(g),c=new Float64Array(g);let e=Math.max(_,R);f=new Float64Array(e),u=new Float64Array(e+1),y=new Uint16Array(e),p.dist=new Float32Array(g)}p.w=_,p.h=R,p.cx=d/_,p.cy=h/R,p.glyphs=v,n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,_,R),n.setTransform(_/d,0,0,R/h,0,0),n.fillStyle="#fff",n.textBaseline="alphabetic",n.textAlign="left";let w={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0},S=[];for(let e of v){n.font=e.font;let t=n.measureText(e.ch),o=t.fontBoundingBoxAscent||.8*e.size,r=t.fontBoundingBoxDescent||.2*e.size,a=e.y+e.h*o/(o+r);n.fillText(e.ch,e.x,a),e.top=a-(t.actualBoundingBoxAscent||.7*e.size),e.bottom=a+(t.actualBoundingBoxDescent||0);let l=S[e.group]??={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};l.x0=Math.min(l.x0,e.x),l.x1=Math.max(l.x1,e.x+e.w),l.y0=Math.min(l.y0,e.top),l.y1=Math.max(l.y1,e.bottom),w.x0=Math.min(w.x0,l.x0),w.x1=Math.max(w.x1,l.x1),w.y0=Math.min(w.y0,l.y0),w.y1=Math.max(w.y1,l.y1)}p.box=v.length?w:{x0:0,y0:0,x1:0,y1:0},p.groups=Array.from(S,e=>e??{x0:0,y0:0,x1:0,y1:0});let C=n.getImageData(0,0,_,R).data;for(let e=0;e<g;e++){let t=C[4*e+3]/255;if(t>=1)x[e]=0,c[e]=1e20;else if(t<=0)x[e]=1e20,c[e]=0;else{let o=.5-t;x[e]=o>0?o*o:0,c[e]=o<0?o*o:0}}v.length&&(r(x,_,R,f,y,u),r(c,_,R,f,y,u));let b=(p.cx+p.cy)/2,P=p.dist;for(let e=0;e<g;e++)P[e]=v.length?(Math.sqrt(x[e])-Math.sqrt(c[e]))*b:1e4;return e.bindTexture(e.TEXTURE_2D,l),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.texImage2D(e.TEXTURE_2D,0,e.R16F,_,R,0,e.RED,e.FLOAT,P),(A||!p.ready)&&(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),p.ready=v.length>0,p.version++,!0},sample:d,grad:function(e,t,o){let r=p.cx,a=p.cy,l=d(e+r,t)-d(e-r,t),i=d(e,t+a)-d(e,t-a),n=Math.hypot(l,i);if(n<1e-6){o[0]=0,o[1]=-1;return}o[0]=l/n,o[1]=i/n},dispose(){e.deleteTexture(l)}};function d(e,t){return a(p.dist,p.w,p.h,p.cx,p.cy,e,t)}return p},"j",0,function(e,t,o,r,a){return e?.ready?Object.assign(a,e.box):t.anchorK>0?(a.x0=t.anchor.x0/t.px,a.x1=t.anchor.x1/t.px,a.y0=r-t.anchor.y1/t.px,a.y1=r-t.anchor.y0/t.px):(a.x0=a.x1=o/2,a.y0=a.y1=r/2),a}])}])})();