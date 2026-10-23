(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54666,35478,e=>{let t=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;function o(e,t,o){let a=e.createShader(t);if(!a)throw Error("createShader failed");if(e.shaderSource(a,o),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(a)??"";e.deleteShader(a);let r=o.split("\n").map((e,t)=>`${String(t+1).padStart(4)}  ${e}`).join("\n");throw Error(`Shader compile error:
${t}
${r}`)}return a}function a(e,t,o,r={}){let{float:c=!1,linear:l=!0,channels:i=4}=r,f=e.createTexture(),n=e.createFramebuffer();if(!f||!n)throw Error("createTarget failed");e.bindTexture(e.TEXTURE_2D,f);let v=l?e.LINEAR:e.NEAREST;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,v),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,v);let u=r.wrap??e.CLAMP_TO_EDGE;if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,u),c){let a=1===i?e.R16F:2===i?e.RG16F:e.RGBA16F,r=1===i?e.RED:2===i?e.RG:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,a,t,o,0,r,e.HALF_FLOAT,null)}else e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,t,o,0,e.RGBA,e.UNSIGNED_BYTE,null);return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,f,0),e.viewport(0,0,t,o),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null),{tex:f,fbo:n,w:t,h:o}}function r(e,t){t&&(e.deleteTexture(t.tex),e.deleteFramebuffer(t.fbo))}async function c(e,t,o,a){let r=getComputedStyle(document.documentElement).getPropertyValue("--font-mono").trim()||"monospace",c=Math.round(.66*a),l=`400 ${c}px ${r}`;try{await document.fonts.load(l,t.join(""))}catch{}let i=Math.ceil(t.length/16),f=document.createElement("canvas");f.width=16*o,f.height=i*a;let n=f.getContext("2d");if(!n)throw Error("2d context failed");return n.fillStyle="#000",n.fillRect(0,0,f.width,f.height),n.fillStyle="#fff",n.font=l,n.textAlign="center",n.textBaseline="middle",t.forEach((e,t)=>{let r=Math.floor(t/16)*a+a/2;n.fillText(e,t%16*o+o/2,r)}),{tex:function(e,t,o={}){let{linear:a=!0,mipmap:r=!1,flipY:c=!1}=o,l=e.createTexture();if(!l)throw Error("createTexture failed");return e.bindTexture(e.TEXTURE_2D,l),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,c),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,a?e.LINEAR:e.NEAREST),r?(e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR)):e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,a?e.LINEAR:e.NEAREST),l}(e,f,{linear:!0,mipmap:!0}),cols:16,rows:i}}e.s(["F",0,t,"Q",0,function(e,t,o,a){e.bindFramebuffer(e.FRAMEBUFFER,t?t.fbo:null),e.viewport(0,0,t?t.w:o??e.drawingBufferWidth,t?t.h:a??e.drawingBufferHeight)},"g",0,function(e,t,o){e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,o)},"Y",0,c,"_",0,function(e,t,o,c={}){let l={read:a(e,t,o,c),write:a(e,t,o,c),swap(){let e=l.read;l.read=l.write,l.write=e},dispose(){r(e,l.read),r(e,l.write)}};return l},"R",0,function(e,t,a){let r=e.createProgram();if(!r)throw Error("createProgram failed");let c=o(e,e.VERTEX_SHADER,t),l=o(e,e.FRAGMENT_SHADER,a);if(e.attachShader(r,c),e.attachShader(r,l),e.linkProgram(r),e.deleteShader(c),e.deleteShader(l),!e.getProgramParameter(r,e.LINK_STATUS))throw Error(`Program link error: ${e.getProgramInfoLog(r)}`);let i=new Map;return{handle:r,use:()=>e.useProgram(r),u:t=>(i.has(t)||i.set(t,e.getUniformLocation(r,t)),i.get(t)??null),dispose:()=>e.deleteProgram(r)}},"D",0,a,"n",0,r,"o",0,function(e){e.drawArrays(e.TRIANGLES,0,3)},"h",0,function(e,t,o,a,r=!1){let c=e.createTexture();if(!c)throw Error("createTexture failed");e.bindTexture(e.TEXTURE_2D,c),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.R8,t,o,0,e.RED,e.UNSIGNED_BYTE,a),e.pixelStorei(e.UNPACK_ALIGNMENT,4);let l=r?e.LINEAR:e.NEAREST;return e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),c}],54666);let l=`#version 300 es
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
`,f=`
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
`,n=`
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
`,v=`
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
`;e.s(["Z",0,v,"A",0,n,"B",0,f,"U",0,l,"K",0,i,"s",0,u],35478)},38524,e=>{var t=e.i(54666),o=e.i(35478);let a=o.U+`
uniform sampler2D uPrev;
uniform vec2 uRes;
uniform vec2 uA;
uniform vec2 uB;
uniform float uR;
uniform float uAmt;
uniform float uDecay;
uniform float uFloor;
in vec2 vUv;
out vec4 o;

void main() {
  vec2 p = vUv * uRes;
  float prev = max(texture(uPrev, vUv).r * uDecay - uFloor, 0.0);
  vec2 pa = p - uA;
  vec2 ba = uB - uA;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-3), 0.0, 1.0);
  float d = length(pa - ba * h);
  float s = exp(-d * d / (uR * uR)) * uAmt;
  o = vec4(max(prev, s), 0.0, 0.0, 1.0);
}`,r=o.U+"#define FBM_OCTAVES 4\n"+o.K+`
uniform vec2 uLayout;
uniform float uTime;
in vec2 vUv;
out vec4 o;

void main() {
  vec2 lp = vUv * uLayout;
  // Масштаб клубов — в пикселях раскладки: на телефоне они того же
  // размера, что на десктопе, просто в кадр их влезает меньше
  vec2 q = lp / 760.0;
  float t = uTime;

  // Туман: fbm, искривлённый другим fbm, — клубы, а не пятна. Медленно всплывает
  vec2 w = vec2(
    fbm(vec3(q * 0.9, t * 0.04)),
    fbm(vec3(q * 0.9 + vec2(5.2, 1.3), t * 0.04 + 7.0))
  );
  float f = fbm(vec3(q * 1.25 + w * 1.05 - vec2(0.0, t * 0.03), t * 0.05));
  float cloud = smoothstep(-0.32, 0.6, f);

  // Световые полосы ползут по диагонали, гребни гнёт тот же туман
  float s1 = dot(q, normalize(vec2(1.0, 0.6))) * 9.0 - t * 0.45 + w.x * 3.0;
  float s2 = dot(q, normalize(vec2(-0.35, 1.0))) * 4.0 + t * 0.27 + w.y * 3.4;
  float band = pow(0.5 + 0.5 * sin(s1), 10.0);
  float band2 = pow(0.5 + 0.5 * sin(s2), 16.0);
  float heat = band * cloud * 0.9 + band2 * 0.5 * cloud;

  /* Пакеты данных: изредка полоска растра загружается слева направо, как
     передача, и гаснет. В пустоте они тусклее — иначе висят над туманом
     плашками интерфейса, а не живут в нём */
  vec2 pc = vec2(84.0, 30.0);
  vec2 pid = floor(lp / pc);
  float ph = hash12(pid);
  float clock = t * 0.9 + ph * 17.0;
  float on = step(0.992, hash12(pid * 1.37 + floor(clock) * 7.13));
  vec2 pf = fract(lp / pc);
  float age = fract(clock);
  float fill = mix(0.08, 0.92, smoothstep(0.0, 0.35, age));
  float inside = step(0.08, pf.x) * step(pf.x, fill) * step(0.16, pf.y) * step(pf.y, 0.84);
  float env = 1.0 - smoothstep(0.35, 1.0, age);
  float pk = on * inside * env * (0.35 + 0.65 * smoothstep(0.05, 0.35, cloud));
  heat += pk;

  // Сверху туман реже — там текст подвала, снизу гуще — горизонт
  float vert = 0.5 + 0.5 * exp(-vUv.y * 1.5);
  float hz = exp(-vUv.y * 5.0);
  float dens = cloud * vert * 0.85 + hz * 0.18 + heat * 0.22 + pk * 0.2;

  // Маска второй сетки: где проступает муар
  float moire = smoothstep(0.12, 0.5, fbm(vec3(q * 0.7 + 11.0, t * 0.025)));

  o = vec4(clamp(dens, 0.0, 1.0), clamp(heat, 0.0, 1.0), moire, 1.0);
}`,c=o.U+o.K+o.B+o.A+o.Z+`
uniform sampler2D uField;
uniform sampler2D uTrail;
uniform vec2 uRes;
uniform float uTime;
uniform float uPx;
uniform float uReveal;
uniform float uArrive;
uniform vec4 uPointer;
in vec2 vUv;
out vec4 o;

const float CELL = 9.0;
const float ANGLE_A = 0.5760;
const float ANGLE_B = 0.6981;

void main() {
  vec2 p = gl_FragCoord.xy;
  vec2 uv = p / uRes;
  float t = uTime;
  float px = uPx;
  float cell = CELL * px;

  // Фонарь: под курсором туман виден крупнее; зажатая кнопка — шире и сильнее
  vec2 P = uPointer.xy;
  float charge = uPointer.z;
  float sig = (120.0 + 70.0 * charge) * px;
  vec2 dp = p - P;
  float L = exp(-dot(dp, dp) / (2.0 * sig * sig));
  vec2 sp = mix(p, P, L * (0.38 + 0.2 * charge));
  vec3 fld = texture(uField, sp / uRes).rgb;
  float tr = texture(uTrail, uv).r;

  float dens = fld.r;
  float heat = fld.g;

  // Проявление снизу вверх, кромка проявки горит
  float dev = clamp((uReveal * 1.3 - uv.y) / 0.3, 0.0, 1.0);
  dens *= dev;
  heat = heat * dev + dev * (1.0 - dev) * 2.0;

  // Фонарь и его след
  dens += tr * 0.3 + L * (0.14 + 0.2 * charge);
  heat += tr * 0.35 + L * (0.22 + 0.35 * charge);

  /* Волны кликов бегут по растру кольцом, за ним эхо послабее, как у
     сонара. Даже короткий клик даёт заметную волну, зажатие — сильнее */
  for (int i = 0; i < 4; i++) {
    vec4 b = uBursts[i];
    if (b.z > 4.0) continue;
    float r = b.z * (480.0 + 320.0 * b.w) * px;
    float bl = length(p - b.xy);
    float d = (bl - r) / (34.0 * px);
    float de = (bl - r * 0.62) / (22.0 * px);
    float wv = (exp(-d * d) + 0.4 * exp(-de * de)) * exp(-b.z * 0.9) * (0.55 + 0.45 * b.w);
    dens += wv * 0.7;
    heat += wv;
  }

  // Финал: полоса развёртки снизу вверх, за ней растр медленно остывает
  if (uArrive < 6.0) {
    float yb = uArrive * 0.85 * uRes.y;
    float d = (p.y - yb) / (44.0 * px);
    float sweep = exp(-d * d);
    float after = step(p.y, yb) * exp(-uArrive * 0.9);
    dens += sweep * 0.75 + after * 0.18;
    heat += sweep * 0.45 + after * 0.3;
  }

  dens = clamp(dens, 0.0, 1.0);
  heat = clamp(heat, 0.0, 1.0);

  // Между точками — тусклый отсвет того же тумана
  vec3 col = C_BASE + C_DEEP * dens * 0.12;

  // Сетка A. Изредка точка вспыхивает, как бит в потоке
  vec2 ga = rot(-ANGLE_A) * p / cell;
  vec2 ida = floor(ga);
  float ha = hash12(ida);
  float flick = step(0.994, hash12(ida + floor(t * 6.0 + ha * 3.0) * 17.31));
  float v = clamp(dens + flick * 0.35 * (0.3 + dens), 0.0, 1.0);
  float grow = 1.0 + 0.3 * L;
  // Точки не сливаются даже на пике: слитый растр читается мутным пятном
  float ra = min(cell * 0.5 * max(sqrt(v) * 1.08 * grow, 0.11), cell * 0.47);
  float aa = 0.75;
  float covA = 1.0 - smoothstep(ra - aa, ra + aa, length(fract(ga) - 0.5) * cell);
  /* Размер точки — плотность, цвет — в основном жар полос: густой туман
     остаётся изумрудным, кислотный и салатовый — только у деталей.
     Призрачные точки пустых мест тусклые: сетка видна, но не шумит */
  float lit = 0.35 + 0.65 * smoothstep(0.02, 0.45, v);
  vec3 dotA = iri(0.3 + 0.3 * v + 0.45 * heat + flick * 0.25, ha * 6.28 + t * 0.4) * (lit * (0.55 + 0.25 * v + 0.5 * heat));
  vec3 dots = dotA * covA;

  // Сетка B под другим углом и шагом — только в пятнах маски, там проступает муар
  if (fld.b > 0.01) {
    float cb = cell * 1.06;
    vec2 gb = rot(-ANGLE_B) * p / cb;
    float rb = min(cb * 0.5 * max(sqrt(v) * grow, 0.1), cb * 0.47);
    // На пике плотности вторая сетка уходит: две полные сетки забивают
    // промежутки друг друга, и растр превращается в сплошную кашу
    float covB = (1.0 - smoothstep(rb - aa, rb + aa, length(fract(gb) - 0.5) * cb)) * fld.b * (1.0 - smoothstep(0.5, 0.85, v));
    vec3 dotB = iri(0.28 + 0.28 * v + 0.4 * heat, hash12(floor(gb)) * 6.28 + t * 0.4) * (lit * (0.42 + 0.2 * v + 0.4 * heat));
    dots = max(dots, dotB * covB);
  }
  col = max(col, dots);

  // Прицел фонаря: тонкое кольцо с разрывами по осям и короткие риски
  float rr = length(dp);
  float R0 = sig * 1.15;
  float rd = (rr - R0) / (0.9 * px);
  float ring = exp(-rd * rd);
  float ang = atan(dp.y, dp.x);
  float gaps = smoothstep(0.1, 0.2, abs(sin(ang * 2.0)));
  float axis = min(abs(dp.x), abs(dp.y));
  float tick = (1.0 - smoothstep(0.5 * px, 1.3 * px, axis)) * step(R0 + 5.0 * px, rr) * step(rr, R0 + 13.0 * px);
  col += C_ACID * (ring * gaps + tick) * 0.2 * (1.0 - 0.6 * uPointer.w) * smoothstep(0.3, 0.8, uReveal);

  // На гребне развёртки — тонкая линия сканера, гаснет у верхнего края
  if (uArrive < 1.4) {
    float dl = (p.y - uArrive * 0.85 * uRes.y - 20.0 * px) / (1.1 * px);
    col += mix(C_ACID, C_PALE, 0.3) * exp(-dl * dl) * 0.55 * (1.0 - smoothstep(0.9, 1.4, uArrive));
  }

  // Края темнее — взгляд держится в середине
  vec2 vg = (uv - 0.5) * vec2(1.0, 1.2);
  col *= 1.0 - 0.3 * smoothstep(0.4, 1.0, length(vg));

  col = soft(col);
  col += grain(p, t) * 0.03;
  col = capLum(col, calmCap(calmAt(p)));
  o = vec4(max(col, 0.0), 1.0);
}`;e.s(["budget",0,32e5,"create",0,function({gl:e,caps:o,common:l}){var i;let f,n,v,u,p,x,m,s=(0,t.R)(e,t.F,r),d=(0,t.R)(e,t.F,c),E=(i={cell:6,radius:60,life:1.6},f=(0,t.R)(e,t.F,a),n=null,v=1,u=1,p=1,x=0/0,m=0/0,{resize(a,r,c){v=a,u=r,p=c,n?.dispose();let l=Math.max(1,Math.ceil(a/(i.cell*p))),f=Math.max(1,Math.ceil(r/(i.cell*p)));n=(0,t._)(e,l,f,{float:o.float,channels:1}),x=0/0},update(a,r=1){if(!n)return;let{x:c,y:l}=a.pointer;Number.isNaN(x)&&(x=c,m=l),f.use(),(0,t.Q)(e,n.write),(0,t.g)(e,0,n.read.tex),e.uniform1i(f.u("uPrev"),0),e.uniform2f(f.u("uRes"),v,u),e.uniform2f(f.u("uA"),x,m),e.uniform2f(f.u("uB"),c,l),e.uniform1f(f.u("uR"),i.radius*p),e.uniform1f(f.u("uAmt"),r),e.uniform1f(f.u("uDecay"),Math.exp(-(4.6*a.dt)/i.life)),e.uniform1f(f.u("uFloor"),o.float?5e-4:1.5/255),(0,t.o)(e),n.swap(),x=c,m=l},get tex(){return n?n.read.tex:null},dispose(){n?.dispose(),f.dispose()}}),h=null,T=1,R=1,_=1,y=1;return{resize(a,r,c){T=a,R=r,_=a/c,y=r/c,(0,t.n)(e,h),h=(0,t.D)(e,Math.max(1,Math.ceil(_/4)),Math.max(1,Math.ceil(y/4)),{float:o.float}),E.resize(a,r,c)},frame(o){h&&((0,t.Q)(e,h),s.use(),e.uniform2f(s.u("uLayout"),_,y),e.uniform1f(s.u("uTime"),o.time),(0,t.o)(e),E.update(o,.9),(0,t.Q)(e,null,T,R),d.use(),l(d,o),(0,t.g)(e,0,h.tex),e.uniform1i(d.u("uField"),0),(0,t.g)(e,1,E.tex),e.uniform1i(d.u("uTrail"),1),(0,t.o)(e))},dispose(){(0,t.n)(e,h),E.dispose(),s.dispose(),d.dispose()}}}],38524)}])})();