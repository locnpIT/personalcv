export function initWaterEffects(root) {
  'use strict';
  // Settings: motion = false turns every animation off; rain = 'calm' | 'lively'
  const APP = { _motion: true, _rain: 'lively', _tiltEl: null };

  function makeLake(canvas, mode) {
    const self = APP;
    const persp = mode === 'persp';
    let gl = null;
    try {
      gl = canvas.getContext('webgl', { antialias: false, alpha: false, depth: false, stencil: false, powerPreference: 'low-power' });
    } catch { gl = null; }
    if (!gl) return null;

    const VS = 'attribute vec2 aPos;varying vec2 vUv;void main(){vUv=aPos*0.5+0.5;gl_Position=vec4(aPos,0.0,1.0);}';
    const FS = [
      '#ifdef GL_FRAGMENT_PRECISION_HIGH',
      'precision highp float;',
      '#else',
      'precision mediump float;',
      '#endif',
      'varying vec2 vUv;',
      'uniform sampler2D uTex;',
      'uniform vec2 uRes;',
      'uniform float uTime;',
      'uniform float uMode;',
      'uniform vec2 uGrid;',
      'uniform float uCell;',
      'uniform float uTile;',
      'uniform float uTanH;',
      'uniform float uPitch;',
      'uniform float uLift;',
      'uniform float uCamH;',
      'uniform vec2 uCam;',
      'uniform vec4 uA[5];',
      'uniform vec4 uB[5];',
      'uniform vec4 uC[5];',
      'uniform vec4 uF[6];',
      'uniform vec4 uG[6];',
      'float caustic(vec2 p, float t) {',
      '  vec2 q = p + 0.35 * vec2(sin(p.y * 1.7 + t), cos(p.x * 1.3 - t * 0.8));',
      '  float a = sin(q.x * 2.1 + t * 0.9) + sin(q.y * 2.3 - t * 0.7) + sin((q.x + q.y) * 1.6 + t * 0.5);',
      '  return pow(clamp(1.0 - abs(a) / 3.0, 0.0, 1.0), 7.0);',
      '}',
      'vec3 fishShadow(vec3 col, vec2 p, vec4 F, vec4 G) {',
      '  float len = G.x;',
      '  float elev = 1.0 - G.z;',
      '  vec2 d = p - F.xy - vec2(14.0, 18.0) * (0.4 + elev);',
      '  if (dot(d, d) > len * len * 2.0) return col;',
      '  float ca = cos(F.z);',
      '  float sa = sin(F.z);',
      '  vec2 l = vec2(dot(d, vec2(ca, sa)) + 0.2 * len, dot(d, vec2(-sa, ca)));',
      '  float e = length(l / vec2(0.55 * len, 0.13 * len));',
      '  float a = (1.0 - smoothstep(0.35, 1.0 + elev * 0.6, e)) * (0.22 + 0.1 * G.z);',
      '  return mix(col, vec3(0.50, 0.62, 0.84), a);',
      '}',
      'vec3 drawFish(vec3 col, vec2 p, vec4 F, vec4 G) {',
      '  float len = G.x;',
      '  vec2 d = p - F.xy;',
      '  if (dot(d, d) > len * len * 2.2) return col;',
      '  float ca = cos(F.z);',
      '  float sa = sin(F.z);',
      '  vec2 l = vec2(dot(d, vec2(ca, sa)), dot(d, vec2(-sa, ca)));',
      '  float u = 0.3 - l.x / len;',
      '  if (u < -0.04 || u > 1.32) return col;',
      '  float bend = G.w * sin(u * 4.4 - F.w) * (0.04 + 0.11 * u * u);',
      '  float vn = l.y / len - bend;',
      '  float uc = clamp(u, 0.0, 1.0);',
      '  float hw = 0.27 * pow(uc, 0.42) * pow(1.0 - uc, 0.55);',
      '  float px1 = 1.0 / len;',
      '  float blur = (0.9 + G.z * 2.2) * px1;',
      '  float tu = (u - 0.9) / 0.38;',
      '  float tw = 0.05 + 0.22 * max(tu, 0.0);',
      '  float notch = 1.0 - 0.38 * (1.0 - clamp(abs(vn) / tw, 0.0, 1.0));',
      '  float tail = min(min(tw - abs(vn), (notch - tu) * 0.38), tu * 0.38 + 0.02);',
      '  vec2 pf = vec2(u - 0.34, abs(vn) - hw - 0.035);',
      '  float pec = 0.05 - length(pf * vec2(0.55, 1.0));',
      '  float body = hw - abs(vn);',
      '  float aT = smoothstep(-blur, blur, tail) * 0.7;',
      '  float aP = smoothstep(-blur, blur, pec) * 0.65;',
      '  float aB = smoothstep(-blur, blur, body);',
      '  vec3 base = vec3(0.80, 0.87, 0.97);',
      '  vec3 fin = vec3(0.86, 0.91, 0.99);',
      '  if (G.y < 0.5) {',
      '    base = vec3(0.96, 0.97, 1.0);',
      '    float pt = sin(u * 9.0 + 1.3) * sin(vn * 26.0 + u * 6.0) + 0.45 * sin(u * 15.0 - vn * 12.0);',
      '    base = mix(base, vec3(0.13, 0.32, 0.70), smoothstep(0.15, 0.3, pt) * step(0.08, u));',
      '    fin = vec3(0.90, 0.94, 1.0);',
      '  } else if (G.y < 1.5) {',
      '    base = vec3(0.18, 0.27, 0.48);',
      '    fin = vec3(0.74, 0.83, 0.96);',
      '  }',
      '  float q = vn / max(hw, 0.001);',
      '  float rnd = sqrt(max(1.0 - q * q, 0.0));',
      '  vec3 bodyCol = base * (0.72 + 0.34 * rnd);',
      '  vec2 ep = vec2(u - 0.09, abs(vn) - 0.05);',
      '  bodyCol = mix(bodyCol, vec3(0.04, 0.07, 0.15), 1.0 - smoothstep(0.017, 0.017 + px1 * 1.2, length(ep)));',
      '  vec3 tint = vec3(0.62, 0.74, 0.92);',
      '  float dk = G.z * 0.32;',
      '  float fade = 0.95 - G.z * 0.3;',
      '  col = mix(col, mix(fin, tint, dk), aT * fade);',
      '  col = mix(col, mix(fin, tint, dk), aP * fade);',
      '  col = mix(col, mix(bodyCol, tint, dk), aB * fade);',
      '  return col;',
      '}',
      'vec3 topMode() {',
      '  vec2 px = vec2(vUv.x * uRes.x, (1.0 - vUv.y) * uRes.y);',
      '  vec4 tx = texture2D(uTex, (px / uCell) / uGrid);',
      '  vec2 sl = (tx.rg - 0.5) * 8.5;',
      '  vec3 n = normalize(vec3(-sl.x * 0.9, -sl.y * 0.9, 1.0));',
      '  vec3 L = normalize(vec3(-0.45, -0.6, 0.65));',
      '  float sh = dot(n, L) - L.z;',
      '  vec3 col = vec3(0.929, 0.953, 0.988);',
      '  float c = caustic(px * 0.012 + n.xy * 0.8, uTime * 0.25);',
      '  col = mix(col, vec3(0.80, 0.87, 0.97), c * 0.22);',
      '  vec2 pr = px - n.xy * 12.0;',
      '  for (int j = 0; j < 6; j++) {',
      '    if (uG[j].x > 0.0) col = fishShadow(col, pr, uF[j], uG[j]);',
      '  }',
      '  for (int j = 0; j < 6; j++) {',
      '    if (uG[j].x > 0.0) col = drawFish(col, pr, uF[j], uG[j]);',
      '  }',
      '  col += vec3(c * 0.06);',
      '  col = mix(col, vec3(0.56, 0.69, 0.91), clamp(-sh * 1.9, 0.0, 0.5));',
      '  col = mix(col, vec3(1.0), clamp(sh * 2.2, 0.0, 0.85));',
      '  vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));',
      '  col += vec3(pow(max(dot(n, H), 0.0), 160.0) * 0.6);',
      '  for (int i = 0; i < 5; i++) {',
      '    vec4 s = uB[i];',
      '    if (s.w > 0.0) {',
      '      float ds = length(px - s.xy);',
      '      col = mix(col, vec3(0.42, 0.56, 0.80), s.w * (1.0 - smoothstep(s.z * 0.35, s.z, ds)));',
      '    }',
      '    vec4 k = uC[i];',
      '    if (k.w > 0.0) {',
      '      float dk = length(px - k.xy) - k.z;',
      '      col = mix(col, vec3(0.36, 0.54, 0.86), k.w * (1.0 - smoothstep(0.5, 2.0, abs(dk - 1.2))));',
      '      col = mix(col, vec3(1.0), k.w * (1.0 - smoothstep(0.4, 1.6, abs(dk + 1.0))));',
      '    }',
      '    vec4 d = uA[i];',
      '    if (d.w > 0.0) {',
      '      vec2 q = (px - d.xy) / d.z;',
      '      float dd = length(q);',
      '      if (dd < 1.0) {',
      '        vec3 nn = vec3(q, sqrt(max(1.0 - dd * dd, 0.0)));',
      '        float lit = clamp(dot(nn, L), 0.0, 1.0);',
      '        vec3 dc = mix(vec3(0.16, 0.36, 0.74), vec3(0.70, 0.83, 1.0), lit);',
      '        dc += vec3(pow(max(dot(reflect(-L, nn), vec3(0.0, 0.0, 1.0)), 0.0), 24.0) * 0.9);',
      '        col = mix(col, dc, d.w * (1.0 - smoothstep(0.82, 1.0, dd)));',
      '      }',
      '    }',
      '  }',
      '  return col;',
      '}',
      'vec3 perspMode() {',
      '  vec2 ndc = vUv * 2.0 - 1.0;',
      '  float aspect = uRes.x / uRes.y;',
      '  float cx = ndc.x * uTanH;',
      '  float cy = ndc.y * uTanH / aspect + uLift;',
      '  float sp = sin(uPitch);',
      '  float cp = cos(uPitch);',
      '  vec3 rd = vec3(cx, cy * cp - sp, -cy * sp - cp);',
      '  vec3 rn = normalize(rd);',
      '  vec3 horizon = vec3(0.843, 0.902, 0.973);',
      '  vec3 sunDir = normalize(vec3(0.28, 0.1, -1.0));',
      '  float glow = pow(max(dot(rn, sunDir), 0.0), 70.0) * 0.3 * (1.0 - smoothstep(0.76, 0.97, vUv.y));',
      '  vec3 col = horizon;',
      '  if (rd.y < -0.0004) {',
      '    float t = uCamH / -rd.y;',
      '    vec2 hit = uCam + rd.xz * t;',
      '    float dist = t * length(rd);',
      '    vec4 tx = texture2D(uTex, hit / uTile);',
      '    vec2 sl = (tx.rg - 0.5) * 8.5 * (1.0 - smoothstep(4.5, 8.0, dist));',
      '    float hh = (tx.b - 0.5) * 8.5;',
      '    vec2 aw = vec2(0.8, 0.6) * cos(dot(hit, vec2(0.8, 0.6)) * 9.0 + uTime * 1.5) * 0.045;',
      '    aw += vec2(-0.5, 0.86) * cos(dot(hit, vec2(-0.5, 0.86)) * 14.0 + uTime * 2.0) * 0.03;',
      '    aw += vec2(0.2, -0.98) * cos(dot(hit, vec2(0.2, -0.98)) * 23.0 - uTime * 2.6) * 0.018;',
      '    aw *= exp(-dist * 0.05);',
      '    vec3 n = normalize(vec3(-(sl.x * 0.8 + aw.x), 1.0, -(sl.y * 0.8 + aw.y)));',
      '    float ndv = max(dot(n, -rn), 0.0);',
      '    float F = 0.02 + 0.98 * pow(1.0 - ndv, 5.0);',
      '    vec3 R = reflect(rn, n);',
      '    R.y = abs(R.y);',
      '    vec3 sky = mix(vec3(0.86, 0.92, 0.985), vec3(0.47, 0.65, 0.92), sqrt(clamp(R.y, 0.0, 1.0)));',
      '    float sd = max(dot(R, sunDir), 0.0);',
      '    float sun = pow(sd, 1200.0) * 9.0 + pow(sd, 120.0) * 0.22;',
      '    vec3 body = vec3(0.043, 0.19, 0.41) + vec3(0.05, 0.22, 0.38) * clamp(hh * 0.35 + 0.15, 0.0, 0.6);',
      '    vec3 wcol = mix(body, sky, F) + vec3(0.95, 0.98, 1.0) * sun;',
      '    wcol = mix(wcol, horizon, 1.0 - exp(-dist * 0.075));',
      '    wcol = mix(wcol, vec3(0.071, 0.251, 0.498), 1.0 - smoothstep(0.0, 0.24, vUv.y));',
      '    col = mix(col, wcol, 1.0 - smoothstep(-0.006, -0.0004, rd.y));',
      '  }',
      '  col = mix(col, vec3(1.0), glow);',
      '  vec2 px = vec2(vUv.x * uRes.x, (1.0 - vUv.y) * uRes.y);',
      '  for (int i = 0; i < 5; i++) {',
      '    vec4 cc = uC[i];',
      '    if (cc.x > 0.0) {',
      '      vec4 sg = uA[i];',
      '      vec2 ba = sg.zw - sg.xy;',
      '      float hc = clamp(dot(px - sg.xy, ba) / max(dot(ba, ba), 0.0001), 0.0, 1.0);',
      '      float dd = length(px - sg.xy - ba * hc);',
      '      col = mix(col, vec3(0.93, 0.97, 1.0), cc.x * (1.0 - smoothstep(cc.z * 0.35, cc.z, dd)) * (1.0 - 0.7 * hc));',
      '    }',
      '    if (cc.y > 0.0) {',
      '      vec4 fl = uB[i];',
      '      float r = length((px - fl.xy) / fl.zw);',
      '      col = mix(col, vec3(1.0), cc.y * (1.0 - smoothstep(0.0, 0.22, abs(r - 1.0))));',
      '    }',
      '  }',
      '  return col;',
      '}',
      'void main() {',
      '  vec3 col = uMode < 0.5 ? topMode() : perspMode();',
      '  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);',
      '}'
    ].join('\n');

    function mk(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    }
    const vs = mk(gl.VERTEX_SHADER, VS);
    const fs = mk(gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) return null;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
    gl.useProgram(prog);

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const U = {};
    ['uTex', 'uRes', 'uTime', 'uMode', 'uGrid', 'uCell', 'uTile', 'uTanH', 'uPitch', 'uLift', 'uCamH', 'uCam', 'uA', 'uB', 'uC', 'uF', 'uG'].forEach((k) => { U[k] = gl.getUniformLocation(prog, k); });

    const tex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    gl.uniform1i(U.uTex, 0);
    gl.uniform1f(U.uMode, persp ? 1 : 0);

    const CELL = 5, N = 256, MASK = 255, TILE = 6.0, HFRAC = 0.26;
    const damp = persp ? 0.988 : 0.984;
    let gw = 0, gh = 0, cur = null, prev = null, pix = null, pixU8 = null;
    let w = 1, h = 1, aspect = 1, tanH = 0.62, lift = 0, pitch = 0.17;
    const camH = 1.0;
    let camX = 0, camZ = 0, time = 0, simAcc = 0;

    function alloc() {
      let nw, nh;
      if (persp) { nw = N; nh = N; }
      else { nw = Math.ceil(w / CELL) + 1; nh = Math.ceil(h / CELL) + 1; }
      if (nw === gw && nh === gh && cur) return;
      gw = nw; gh = nh;
      cur = new Float32Array(gw * gh);
      prev = new Float32Array(gw * gh);
      const ab = new ArrayBuffer(gw * gh * 4);
      pix = new Uint8ClampedArray(ab);
      pixU8 = new Uint8Array(ab);
      for (let i = 0; i < pix.length; i += 4) { pix[i] = 128; pix[i + 1] = 128; pix[i + 2] = 128; pix[i + 3] = 255; }
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gw, gh, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixU8);
      if (persp) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.generateMipmap(gl.TEXTURE_2D);
      } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.uniform2f(U.uGrid, gw, gh);
    }

    function setCam() { lift = Math.tan(pitch) - (1 - 2 * HFRAC) * tanH / aspect; }

    function resize() {
      const cw = canvas.clientWidth || 1, ch = canvas.clientHeight || 1;
      let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      if (cw * ch * dpr * dpr > 2400000) dpr = Math.sqrt(2400000 / (cw * ch));
      const bw = Math.max(1, Math.round(cw * dpr)), bh = Math.max(1, Math.round(ch * dpr));
      if (canvas.width !== bw || canvas.height !== bh) { canvas.width = bw; canvas.height = bh; }
      w = cw; h = ch; aspect = w / h;
      tanH = persp && aspect < 1.2 ? 0.5 : 0.62;
      alloc();
      if (!persp) {
        if (!fish.length) initFish();
        fish.forEach((f) => { f.x = Math.min(f.x, w); f.y = Math.min(f.y, h); });
      }
      gl.viewport(0, 0, bw, bh);
      gl.uniform2f(U.uRes, w, h);
      gl.uniform1f(U.uCell, CELL);
      gl.uniform1f(U.uTile, TILE);
      gl.uniform1f(U.uTanH, tanH);
      gl.uniform1f(U.uCamH, camH);
      setCam();
    }

    function step() {
      const a = cur, b = prev, W = gw, H = gh;
      if (persp) {
        for (let y = 0; y < H; y++) {
          const row = y * W, up = ((y - 1) & MASK) * W, dn = ((y + 1) & MASK) * W;
          for (let x = 0; x < W; x++) {
            const i = row + x;
            b[i] = ((a[row + ((x - 1) & MASK)] + a[row + ((x + 1) & MASK)] + a[up + x] + a[dn + x]) * 0.5 - b[i]) * damp;
          }
        }
      } else {
        for (let y = 1; y < H - 1; y++) {
          let i = y * W + 1;
          for (let x = 1; x < W - 1; x++, i++) {
            b[i] = ((a[i - 1] + a[i + 1] + a[i - W] + a[i + W]) * 0.5 - b[i]) * damp;
          }
        }
      }
      cur = b; prev = a;
    }

    function pack() {
      const W = gw, H = gh, c = cur, p = pix, K = 30;
      for (let y = 0; y < H; y++) {
        const row = y * W;
        const up = persp ? ((y - 1) & MASK) * W : (y > 0 ? y - 1 : 0) * W;
        const dn = persp ? ((y + 1) & MASK) * W : (y < H - 1 ? y + 1 : H - 1) * W;
        for (let x = 0; x < W; x++) {
          const xl = persp ? ((x - 1) & MASK) : (x > 0 ? x - 1 : 0);
          const xr = persp ? ((x + 1) & MASK) : (x < W - 1 ? x + 1 : W - 1);
          const i = row + x, o = i * 4;
          p[o] = 128 + (c[row + xr] - c[row + xl]) * K;
          p[o + 1] = 128 + (c[dn + x] - c[up + x]) * K;
          p[o + 2] = 128 + c[i] * K;
        }
      }
    }

    function poke(gx, gy, amp, rad) {
      const r = Math.ceil(rad * 2), cx = Math.round(gx), cy = Math.round(gy), rr = rad * rad;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          let x = cx + dx, y = cy + dy;
          if (persp) { x = x & MASK; y = y & MASK; }
          else if (x < 1 || y < 1 || x >= gw - 1 || y >= gh - 1) continue;
          const d2 = (dx * dx + dy * dy) / rr;
          if (d2 > 4) continue;
          cur[y * gw + x] -= amp * Math.exp(-d2 * 2);
        }
      }
    }

    function project(X, Y, Z) {
      const sp = Math.sin(pitch), cp = Math.cos(pitch);
      const rx = X - camX, ry = Y - camH, rz = Z - camZ;
      const dF = -ry * sp - rz * cp;
      if (dF <= 0.02) return null;
      const dU = ry * cp - rz * sp;
      const nx = (rx / dF) / tanH;
      const ny = ((dU / dF) - lift) / (tanH / aspect);
      return [(nx + 1) * 0.5 * w, (1 - ny) * 0.5 * h, dF];
    }

    function unproject(px, py) {
      const sp = Math.sin(pitch), cp = Math.cos(pitch);
      const cx = (px / w * 2 - 1) * tanH;
      const cy = (1 - py / h * 2) * tanH / aspect + lift;
      const dy = cy * cp - sp;
      if (dy > -0.015) return null;
      const t = camH / -dy;
      return [camX + cx * t, camZ + (-cy * sp - cp) * t];
    }

    const drops = [];
    const A = new Float32Array(20), B = new Float32Array(20), C = new Float32Array(20);

    const FA = new Float32Array(24), FB = new Float32Array(24);
    const fish = [];
    let pointer = null, burst = null;

    function initFish() {
      fish.length = 0;
      if (persp) return;
      const count = 6;
      const kinds = [0, 1, 2, 0, 2, 1];
      const scale = w < 700 ? 0.7 : (w < 1100 ? 0.85 : 1);
      for (let k = 0; k < count; k++) {
        const home = 0.25 + (k / (count - 1)) * 0.5;
        fish.push({
          x: w * (0.15 + 0.7 * Math.random()), y: h * (0.15 + 0.7 * Math.random()),
          a: Math.random() * Math.PI * 2, v: 40, base: 34 + Math.random() * 18,
          phase: Math.random() * 6, len: (k >= 4 ? 64 + Math.random() * 8 : 80 + Math.random() * 20) * scale,
          kind: kinds[k], depth: home, home: home, turn: 0, bend: 1,
          rise: 4 + Math.random() * 10, rising: 0, hold: 0
        });
      }
    }

    function wrapAng(x) {
      while (x > Math.PI) x -= Math.PI * 2;
      while (x < -Math.PI) x += Math.PI * 2;
      return x;
    }

    function updateFish(dt) {
      FA.fill(0); FB.fill(0);
      for (let k = 0; k < fish.length && k < 6; k++) {
        const f = fish[k];
        if (dt > 0) {
          f.turn += (Math.random() - 0.5) * 3.0 * dt;
          f.turn *= Math.pow(0.6, dt);
          f.turn = Math.max(-0.9, Math.min(0.9, f.turn));
          let desired = null, urgency = 0, boost = 1;
          const m = 90;
          if (f.x < m || f.x > w - m || f.y < m || f.y > h - m) {
            desired = Math.atan2(h * 0.5 - f.y, w * 0.5 - f.x); urgency = 1.6;
          }
          for (let j = 0; j < fish.length; j++) {
            if (j === k) continue;
            const dx = f.x - fish[j].x, dy = f.y - fish[j].y, dd = Math.hypot(dx, dy);
            if (dd < f.len * 1.3 && dd > 0.01) { desired = Math.atan2(dy, dx); urgency = Math.max(urgency, 1.0); }
          }
          if (pointer && time - pointer.t < 0.6) {
            const dx = f.x - pointer.x, dy = f.y - pointer.y;
            if (Math.hypot(dx, dy) < 150) { desired = Math.atan2(dy, dx); urgency = 3.2; boost = 2.2; }
          }
          if (burst && time - burst.t < 1.4) {
            const dx = f.x - burst.x, dy = f.y - burst.y;
            if (Math.hypot(dx, dy) < 280) { desired = Math.atan2(dy, dx); urgency = 4.5; boost = 3.0; }
          }
          let dA = f.turn * dt;
          if (desired !== null) dA += Math.max(-urgency * dt, Math.min(urgency * dt, wrapAng(desired - f.a)));
          f.a = wrapAng(f.a + dA);
          f.v += (f.base * boost - f.v) * Math.min(1, dt * (boost > 1 ? 4 : 1.2));
          f.x = Math.max(-40, Math.min(w + 40, f.x + Math.cos(f.a) * f.v * dt));
          f.y = Math.max(-40, Math.min(h + 40, f.y + Math.sin(f.a) * f.v * dt));
          f.phase += dt * (3.2 + f.v * 0.08);
          const turning = Math.abs(dA) / dt;
          f.bend += ((0.8 + Math.min(1.6, turning * 0.9) + (boost > 1 ? 0.6 : 0)) - f.bend) * Math.min(1, dt * 5);
          f.rise -= dt;
          if (f.rise <= 0 && !f.rising) f.rising = 1;
          if (f.rising) {
            f.depth += (0.04 - f.depth) * Math.min(1, dt * 2.2);
            if (f.rising === 1 && f.depth < 0.08) {
              f.rising = 2; f.hold = 0.5;
              poke((f.x + Math.cos(f.a) * f.len * 0.3) / CELL, (f.y + Math.sin(f.a) * f.len * 0.3) / CELL, 1.4, 2.4);
            }
            if (f.rising === 2) {
              f.hold -= dt;
              if (f.hold <= 0) { f.rising = 0; f.rise = 8 + Math.random() * 12; }
            }
          } else {
            f.depth += (f.home - f.depth) * Math.min(1, dt * 0.8);
          }
        }
        const o = k * 4;
        FA[o] = f.x; FA[o + 1] = f.y; FA[o + 2] = f.a; FA[o + 3] = f.phase;
        FB[o] = f.len; FB[o + 1] = f.kind; FB[o + 2] = f.depth; FB[o + 3] = f.bend;
      }
    }

    function rainRate() { return self._rain === 'calm' ? 0.9 : 2.4; }

    function spawn() {
      if (drops.length >= 5) return;
      if (persp) {
        const dist = 3.0 + Math.random() * 2.0;
        const half = tanH * dist * 0.85;
        drops.push({ x: camX + (Math.random() * 2 - 1) * half, z: camZ - dist, p: 0, fall: 0.5, amp: 2.6, y0: 0.55 + Math.random() * 0.25, hit: false });
      } else {
        drops.push({ x: w * Math.random(), y: h * Math.random(), p: 0, fall: 0.55, amp: 3.0, hit: false });
      }
    }

    function updateDrops(dt) {
      A.fill(0); B.fill(0); C.fill(0);
      const life = persp ? 0.32 : 0.48;
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.p += dt;
        if (!d.hit && d.p >= d.fall) {
          d.hit = true;
          if (persp) poke(d.x / TILE * N, d.z / TILE * N, d.amp, 2.4);
          else poke(d.x / CELL, d.y / CELL, d.amp, 3.2);
        }
        if (d.p > d.fall + life) drops.splice(i, 1);
      }
      const start = Math.max(0, drops.length - 5);
      for (let j = start; j < drops.length; j++) {
        const d = drops[j], o = (j - start) * 4;
        if (persp) {
          if (!d.hit) {
            const f = d.p / d.fall, yy = d.y0 * (1 - f * f);
            const a = project(d.x, yy, d.z), b = project(d.x, yy + 0.06 + 0.1 * f, d.z);
            if (a && b) {
              A[o] = a[0]; A[o + 1] = a[1]; A[o + 2] = b[0]; A[o + 3] = b[1];
              C[o] = Math.min(1, d.p / 0.08) * 0.75;
              C[o + 2] = Math.max(0.9, 0.008 * (w * 0.5) / (tanH * a[2]));
            }
          } else {
            const q = (d.p - d.fall) / life, c0 = project(d.x, 0, d.z);
            if (c0) {
              const ppu = (w * 0.5) / (tanH * c0[2]);
              const rx = Math.max(0.6, (0.03 + q * 0.13) * ppu);
              const ry = Math.max(0.5, rx * Math.min(1, camH / Math.max(0.3, c0[2])));
              B[o] = c0[0]; B[o + 1] = c0[1]; B[o + 2] = rx; B[o + 3] = ry;
              C[o + 1] = 0.7 * (1 - q) * (1 - q);
            }
          }
        } else {
          if (!d.hit) {
            const f = d.p / d.fall, z = 1 - f * f, fade = Math.min(1, d.p / 0.1);
            const ox = w * 0.5, oy = h * 0.4;
            A[o] = d.x + (d.x - ox) * z * 0.05; A[o + 1] = d.y + (d.y - oy) * z * 0.05;
            A[o + 2] = 3.0 * (1 + z * 1.5); A[o + 3] = fade;
            B[o] = d.x + z * 40; B[o + 1] = d.y + z * 52; B[o + 2] = 4 + z * 16; B[o + 3] = 0.26 * (1 - z * 0.7) * fade;
          } else {
            const q = (d.p - d.fall) / life;
            C[o] = d.x; C[o + 1] = d.y; C[o + 2] = 2 + q * 24; C[o + 3] = 0.85 * (1 - q) * (1 - q);
          }
        }
      }
    }

    function updateCam(dt) {
      camZ -= 0.12 * dt;
      if (camZ < -TILE) {
        camZ += TILE;
        drops.forEach((d) => { d.z += TILE; });
      }
      camX = Math.sin(time * 0.05) * 0.4;
      pitch = 0.17 + Math.sin(time * 0.35) * 0.006;
      setCam();
    }

    function upload() {
      pack();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gw, gh, gl.RGBA, gl.UNSIGNED_BYTE, pixU8);
      if (persp) gl.generateMipmap(gl.TEXTURE_2D);
    }

    function draw() {
      gl.uniform1f(U.uTime, time);
      if (persp) {
        gl.uniform1f(U.uPitch, pitch);
        gl.uniform1f(U.uLift, lift);
        gl.uniform2f(U.uCam, camX, camZ);
      }
      gl.uniform4fv(U.uA, A);
      gl.uniform4fv(U.uB, B);
      gl.uniform4fv(U.uC, C);
      gl.uniform4fv(U.uF, FA);
      gl.uniform4fv(U.uG, FB);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    function live() { return self._motion !== false && !motionQuery.matches; }

    let raf = 0, last = 0, visible = true, dead = false;
    function frame(now) {
      raf = 0;
      if (dead) return;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0.016;
      last = now;
      const on = live();
      if (on) {
        time += dt;
        if (Math.random() < dt * rainRate()) spawn();
        if (persp) updateCam(dt);
        simAcc += dt;
        let n = 0;
        while (simAcc >= 1 / 60 && n < 3) { step(); simAcc -= 1 / 60; n++; }
        if (n === 3) simAcc = 0;
      }
      updateDrops(on ? dt : 0);
      if (!persp) updateFish(on ? dt : 0);
      upload();
      draw();
      if (on && visible && !document.hidden) raf = requestAnimationFrame(frame);
      else last = 0;
    }
    function kick() { if (!raf && !dead && visible && !document.hidden) raf = requestAnimationFrame(frame); }

    const host = persp ? canvas.parentElement : ((canvas.closest && canvas.closest('section')) || canvas.parentElement);
    let lastG = null;
    function toLocal(e) {
      const r = canvas.getBoundingClientRect();
      const s = canvas.clientWidth ? r.width / canvas.clientWidth : 1;
      return [(e.clientX - r.left) / s, (e.clientY - r.top) / s];
    }
    function onMove(e) {
      if (!live()) return;
      const p = toLocal(e);
      if (!persp && self._tiltEl && (!e.pointerType || e.pointerType === 'mouse')) {
        const nx = p[0] / w * 2 - 1, ny = p[1] / h * 2 - 1;
        self._tiltEl.style.transform = 'rotateX(' + (-ny * 6).toFixed(2) + 'deg) rotateY(' + (nx * 8).toFixed(2) + 'deg)';
      }
      if (p[0] < 0 || p[1] < 0 || p[0] > w || p[1] > h) { lastG = null; return; }
      if (persp) {
        const hit = unproject(p[0], p[1]);
        if (!hit) { lastG = null; return; }
        poke(hit[0] / TILE * N, hit[1] / TILE * N, 0.5, 1.8);
      } else {
        pointer = { x: p[0], y: p[1], t: time };
        const gx = p[0] / CELL, gy = p[1] / CELL;
        if (lastG) {
          const dx = gx - lastG[0], dy = gy - lastG[1];
          const steps = Math.min(10, Math.ceil(Math.hypot(dx, dy) / 2.5));
          for (let k = 1; k <= steps; k++) poke(lastG[0] + dx * k / steps, lastG[1] + dy * k / steps, 0.45, 2.6);
        } else {
          poke(gx, gy, 0.45, 2.6);
        }
        lastG = [gx, gy];
      }
      kick();
    }
    function onLeave() {
      lastG = null;
      pointer = null;
      if (!persp && self._tiltEl) self._tiltEl.style.transform = '';
    }
    function onDown(e) {
      if (!live()) return;
      const p = toLocal(e);
      if (persp) {
        const hit = unproject(p[0], p[1]);
        if (!hit) return;
        drops.push({ x: hit[0], z: hit[1], p: 0.5, fall: 0.5, amp: 4.5, y0: 0, hit: false });
      } else {
        drops.push({ x: p[0], y: p[1], p: 0.55, fall: 0.55, amp: 5.0, hit: false });
        burst = { x: p[0], y: p[1], t: time };
      }
      if (drops.length > 7) drops.shift();
      kick();
    }
    function onVis() { if (!document.hidden) kick(); }
    function onWinResize() { resize(); kick(); }
    function onLost(e) {
      e.preventDefault();
      dead = true;
      if (raf) cancelAnimationFrame(raf);
      host.classList.add('no-gl');
    }
    function onMotionChange() {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      last = 0;
      kick();
    }

    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);
    host.addEventListener('pointerdown', onDown);
    document.addEventListener('visibilitychange', onVis);
    canvas.addEventListener('webglcontextlost', onLost);
    motionQuery.addEventListener('change', onMotionChange);
    let ro = null, io = null;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(() => { resize(); kick(); });
      ro.observe(canvas);
    } else {
      window.addEventListener('resize', onWinResize);
    }
    if (window.IntersectionObserver) {
      io = new IntersectionObserver((ents) => {
        visible = ents.length ? ents[ents.length - 1].isIntersecting : true;
        if (visible) kick();
      });
      io.observe(canvas);
    }

    resize();
    kick();

    return {
      kick: kick,
      destroy: function () {
        dead = true;
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
        host.removeEventListener('pointermove', onMove);
        host.removeEventListener('pointerleave', onLeave);
        host.removeEventListener('pointerdown', onDown);
        document.removeEventListener('visibilitychange', onVis);
        canvas.removeEventListener('webglcontextlost', onLost);
        motionQuery.removeEventListener('change', onMotionChange);
        window.removeEventListener('resize', onWinResize);
        if (ro) ro.disconnect();
        if (io) io.disconnect();
        gl.deleteTexture(tex);
        gl.deleteBuffer(vbo);
        gl.deleteProgram(prog);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
      }
    };
  }


  function attachTilt(el) {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let current = null;
    function leave() {
      if (current) current.style.transform = '';
      current = null;
    }
    function move(e) {
      if (motionQuery.matches || (e.pointerType && e.pointerType !== 'mouse')) return;
      const card = e.target instanceof Element ? e.target.closest('article') : null;
      if (current && current !== card) current.style.transform = '';
      current = card;
      if (!card) return;
      const r = card.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width * 2 - 1;
      const ny = (e.clientY - r.top) / r.height * 2 - 1;
      card.style.transform = 'perspective(900px) rotateX(' + (-ny * 4).toFixed(2) + 'deg) rotateY(' + (nx * 5).toFixed(2) + 'deg) translateY(-4px)';
    }
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    motionQuery.addEventListener('change', leave);
    return () => {
      leave();
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
      motionQuery.removeEventListener('change', leave);
    };
  }

  APP._tiltEl = root.querySelector('[data-tilt]');
  const lakes = [];
  [['hero', 'top'], ['dive', 'persp']].forEach(([name, mode]) => {
    const canvas = root.querySelector('canvas[data-lake="' + name + '"]');
    if (!canvas) return;
    let lake = null;
    try { lake = makeLake(canvas, mode); } catch { lake = null; }
    if (lake) lakes.push(lake);
    else (canvas.closest('section') || canvas.parentElement).classList.add('no-gl');
  });
  const detachTilt = attachTilt(root);
  return () => {
    lakes.forEach((lake) => lake.destroy());
    detachTilt();
    if (APP._tiltEl) APP._tiltEl.style.transform = '';
  };
}
