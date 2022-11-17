/*!
 * lumi.js - obtained from LumiJS v0.1.1
 * Compiled Thu, 17 Nov 2022 (UTC)
 *
 * Copyright 2019 Sunay Komarla
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lumi = {}));
})(this, (function (exports) { 'use strict';

  var ENV = /* @__PURE__ */ ((ENV2) => {
    ENV2[ENV2["WEBGL_LEGACY"] = 0] = "WEBGL_LEGACY";
    ENV2[ENV2["WEBGL"] = 1] = "WEBGL";
    ENV2[ENV2["WEBGL2"] = 2] = "WEBGL2";
    return ENV2;
  })(ENV || {});
  var BUFFER_BITS = /* @__PURE__ */ ((BUFFER_BITS2) => {
    BUFFER_BITS2[BUFFER_BITS2["COLOR"] = 16384] = "COLOR";
    BUFFER_BITS2[BUFFER_BITS2["DEPTH"] = 256] = "DEPTH";
    BUFFER_BITS2[BUFFER_BITS2["STENCIL"] = 1024] = "STENCIL";
    return BUFFER_BITS2;
  })(BUFFER_BITS || {});
  var BLEND_MODES = /* @__PURE__ */ ((BLEND_MODES2) => {
    BLEND_MODES2[BLEND_MODES2["NORMAL"] = 0] = "NORMAL";
    BLEND_MODES2[BLEND_MODES2["ADD"] = 1] = "ADD";
    BLEND_MODES2[BLEND_MODES2["MULTIPLY"] = 2] = "MULTIPLY";
    BLEND_MODES2[BLEND_MODES2["SCREEN"] = 3] = "SCREEN";
    BLEND_MODES2[BLEND_MODES2["OVERLAY"] = 4] = "OVERLAY";
    BLEND_MODES2[BLEND_MODES2["DARKEN"] = 5] = "DARKEN";
    BLEND_MODES2[BLEND_MODES2["LIGHTEN"] = 6] = "LIGHTEN";
    BLEND_MODES2[BLEND_MODES2["COLOR_DODGE"] = 7] = "COLOR_DODGE";
    BLEND_MODES2[BLEND_MODES2["COLOR_BURN"] = 8] = "COLOR_BURN";
    BLEND_MODES2[BLEND_MODES2["HARD_LIGHT"] = 9] = "HARD_LIGHT";
    BLEND_MODES2[BLEND_MODES2["SOFT_LIGHT"] = 10] = "SOFT_LIGHT";
    BLEND_MODES2[BLEND_MODES2["DIFFERENCE"] = 11] = "DIFFERENCE";
    BLEND_MODES2[BLEND_MODES2["EXCLUSION"] = 12] = "EXCLUSION";
    BLEND_MODES2[BLEND_MODES2["HUE"] = 13] = "HUE";
    BLEND_MODES2[BLEND_MODES2["SATURATION"] = 14] = "SATURATION";
    BLEND_MODES2[BLEND_MODES2["COLOR"] = 15] = "COLOR";
    BLEND_MODES2[BLEND_MODES2["LUMINOSITY"] = 16] = "LUMINOSITY";
    BLEND_MODES2[BLEND_MODES2["NORMAL_NPM"] = 17] = "NORMAL_NPM";
    BLEND_MODES2[BLEND_MODES2["ADD_NPM"] = 18] = "ADD_NPM";
    BLEND_MODES2[BLEND_MODES2["SCREEN_NPM"] = 19] = "SCREEN_NPM";
    BLEND_MODES2[BLEND_MODES2["NONE"] = 20] = "NONE";
    BLEND_MODES2[BLEND_MODES2["SRC_OVER"] = 0] = "SRC_OVER";
    BLEND_MODES2[BLEND_MODES2["SRC_IN"] = 21] = "SRC_IN";
    BLEND_MODES2[BLEND_MODES2["SRC_OUT"] = 22] = "SRC_OUT";
    BLEND_MODES2[BLEND_MODES2["SRC_ATOP"] = 23] = "SRC_ATOP";
    BLEND_MODES2[BLEND_MODES2["DST_OVER"] = 24] = "DST_OVER";
    BLEND_MODES2[BLEND_MODES2["DST_IN"] = 25] = "DST_IN";
    BLEND_MODES2[BLEND_MODES2["DST_OUT"] = 26] = "DST_OUT";
    BLEND_MODES2[BLEND_MODES2["DST_ATOP"] = 27] = "DST_ATOP";
    BLEND_MODES2[BLEND_MODES2["ERASE"] = 26] = "ERASE";
    BLEND_MODES2[BLEND_MODES2["SUBTRACT"] = 28] = "SUBTRACT";
    BLEND_MODES2[BLEND_MODES2["XOR"] = 29] = "XOR";
    return BLEND_MODES2;
  })(BLEND_MODES || {});
  var DRAW_MODES = /* @__PURE__ */ ((DRAW_MODES2) => {
    DRAW_MODES2[DRAW_MODES2["POINTS"] = 0] = "POINTS";
    DRAW_MODES2[DRAW_MODES2["LINES"] = 1] = "LINES";
    DRAW_MODES2[DRAW_MODES2["LINE_LOOP"] = 2] = "LINE_LOOP";
    DRAW_MODES2[DRAW_MODES2["LINE_STRIP"] = 3] = "LINE_STRIP";
    DRAW_MODES2[DRAW_MODES2["TRIANGLES"] = 4] = "TRIANGLES";
    DRAW_MODES2[DRAW_MODES2["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
    DRAW_MODES2[DRAW_MODES2["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
    return DRAW_MODES2;
  })(DRAW_MODES || {});
  var FORMATS = /* @__PURE__ */ ((FORMATS2) => {
    FORMATS2[FORMATS2["RGBA"] = 6408] = "RGBA";
    FORMATS2[FORMATS2["RGB"] = 6407] = "RGB";
    FORMATS2[FORMATS2["RG"] = 33319] = "RG";
    FORMATS2[FORMATS2["RED"] = 6403] = "RED";
    FORMATS2[FORMATS2["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
    FORMATS2[FORMATS2["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
    FORMATS2[FORMATS2["RG_INTEGER"] = 33320] = "RG_INTEGER";
    FORMATS2[FORMATS2["RED_INTEGER"] = 36244] = "RED_INTEGER";
    FORMATS2[FORMATS2["ALPHA"] = 6406] = "ALPHA";
    FORMATS2[FORMATS2["LUMINANCE"] = 6409] = "LUMINANCE";
    FORMATS2[FORMATS2["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
    FORMATS2[FORMATS2["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
    FORMATS2[FORMATS2["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
    return FORMATS2;
  })(FORMATS || {});
  var TARGETS = /* @__PURE__ */ ((TARGETS2) => {
    TARGETS2[TARGETS2["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
    TARGETS2[TARGETS2["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
    TARGETS2[TARGETS2["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
    TARGETS2[TARGETS2["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
    TARGETS2[TARGETS2["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
    TARGETS2[TARGETS2["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
    TARGETS2[TARGETS2["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
    TARGETS2[TARGETS2["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
    TARGETS2[TARGETS2["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
    return TARGETS2;
  })(TARGETS || {});
  var TYPES = /* @__PURE__ */ ((TYPES2) => {
    TYPES2[TYPES2["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    TYPES2[TYPES2["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    TYPES2[TYPES2["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
    TYPES2[TYPES2["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
    TYPES2[TYPES2["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
    TYPES2[TYPES2["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
    TYPES2[TYPES2["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
    TYPES2[TYPES2["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
    TYPES2[TYPES2["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
    TYPES2[TYPES2["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
    TYPES2[TYPES2["BYTE"] = 5120] = "BYTE";
    TYPES2[TYPES2["SHORT"] = 5122] = "SHORT";
    TYPES2[TYPES2["INT"] = 5124] = "INT";
    TYPES2[TYPES2["FLOAT"] = 5126] = "FLOAT";
    TYPES2[TYPES2["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
    TYPES2[TYPES2["HALF_FLOAT"] = 36193] = "HALF_FLOAT";
    return TYPES2;
  })(TYPES || {});
  var SAMPLER_TYPES = /* @__PURE__ */ ((SAMPLER_TYPES2) => {
    SAMPLER_TYPES2[SAMPLER_TYPES2["FLOAT"] = 0] = "FLOAT";
    SAMPLER_TYPES2[SAMPLER_TYPES2["INT"] = 1] = "INT";
    SAMPLER_TYPES2[SAMPLER_TYPES2["UINT"] = 2] = "UINT";
    return SAMPLER_TYPES2;
  })(SAMPLER_TYPES || {});
  var SCALE_MODES = /* @__PURE__ */ ((SCALE_MODES2) => {
    SCALE_MODES2[SCALE_MODES2["NEAREST"] = 0] = "NEAREST";
    SCALE_MODES2[SCALE_MODES2["LINEAR"] = 1] = "LINEAR";
    return SCALE_MODES2;
  })(SCALE_MODES || {});
  var WRAP_MODES = /* @__PURE__ */ ((WRAP_MODES2) => {
    WRAP_MODES2[WRAP_MODES2["CLAMP"] = 33071] = "CLAMP";
    WRAP_MODES2[WRAP_MODES2["REPEAT"] = 10497] = "REPEAT";
    WRAP_MODES2[WRAP_MODES2["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
    return WRAP_MODES2;
  })(WRAP_MODES || {});
  var MIPMAP_MODES = /* @__PURE__ */ ((MIPMAP_MODES2) => {
    MIPMAP_MODES2[MIPMAP_MODES2["OFF"] = 0] = "OFF";
    MIPMAP_MODES2[MIPMAP_MODES2["POW2"] = 1] = "POW2";
    MIPMAP_MODES2[MIPMAP_MODES2["ON"] = 2] = "ON";
    MIPMAP_MODES2[MIPMAP_MODES2["ON_MANUAL"] = 3] = "ON_MANUAL";
    return MIPMAP_MODES2;
  })(MIPMAP_MODES || {});
  var ALPHA_MODES = /* @__PURE__ */ ((ALPHA_MODES2) => {
    ALPHA_MODES2[ALPHA_MODES2["NPM"] = 0] = "NPM";
    ALPHA_MODES2[ALPHA_MODES2["UNPACK"] = 1] = "UNPACK";
    ALPHA_MODES2[ALPHA_MODES2["PMA"] = 2] = "PMA";
    ALPHA_MODES2[ALPHA_MODES2["NO_PREMULTIPLIED_ALPHA"] = 0] = "NO_PREMULTIPLIED_ALPHA";
    ALPHA_MODES2[ALPHA_MODES2["PREMULTIPLY_ON_UPLOAD"] = 1] = "PREMULTIPLY_ON_UPLOAD";
    ALPHA_MODES2[ALPHA_MODES2["PREMULTIPLIED_ALPHA"] = 2] = "PREMULTIPLIED_ALPHA";
    return ALPHA_MODES2;
  })(ALPHA_MODES || {});
  var CLEAR_MODES = /* @__PURE__ */ ((CLEAR_MODES2) => {
    CLEAR_MODES2[CLEAR_MODES2["NO"] = 0] = "NO";
    CLEAR_MODES2[CLEAR_MODES2["YES"] = 1] = "YES";
    CLEAR_MODES2[CLEAR_MODES2["AUTO"] = 2] = "AUTO";
    CLEAR_MODES2[CLEAR_MODES2["BLEND"] = 0] = "BLEND";
    CLEAR_MODES2[CLEAR_MODES2["CLEAR"] = 1] = "CLEAR";
    CLEAR_MODES2[CLEAR_MODES2["BLIT"] = 2] = "BLIT";
    return CLEAR_MODES2;
  })(CLEAR_MODES || {});
  var GC_MODES = /* @__PURE__ */ ((GC_MODES2) => {
    GC_MODES2[GC_MODES2["AUTO"] = 0] = "AUTO";
    GC_MODES2[GC_MODES2["MANUAL"] = 1] = "MANUAL";
    return GC_MODES2;
  })(GC_MODES || {});
  var PRECISION = /* @__PURE__ */ ((PRECISION2) => {
    PRECISION2["LOW"] = "lowp";
    PRECISION2["MEDIUM"] = "mediump";
    PRECISION2["HIGH"] = "highp";
    return PRECISION2;
  })(PRECISION || {});
  var MASK_TYPES = /* @__PURE__ */ ((MASK_TYPES2) => {
    MASK_TYPES2[MASK_TYPES2["NONE"] = 0] = "NONE";
    MASK_TYPES2[MASK_TYPES2["SCISSOR"] = 1] = "SCISSOR";
    MASK_TYPES2[MASK_TYPES2["STENCIL"] = 2] = "STENCIL";
    MASK_TYPES2[MASK_TYPES2["SPRITE"] = 3] = "SPRITE";
    MASK_TYPES2[MASK_TYPES2["COLOR"] = 4] = "COLOR";
    return MASK_TYPES2;
  })(MASK_TYPES || {});
  var MSAA_QUALITY = /* @__PURE__ */ ((MSAA_QUALITY2) => {
    MSAA_QUALITY2[MSAA_QUALITY2["NONE"] = 0] = "NONE";
    MSAA_QUALITY2[MSAA_QUALITY2["LOW"] = 2] = "LOW";
    MSAA_QUALITY2[MSAA_QUALITY2["MEDIUM"] = 4] = "MEDIUM";
    MSAA_QUALITY2[MSAA_QUALITY2["HIGH"] = 8] = "HIGH";
    return MSAA_QUALITY2;
  })(MSAA_QUALITY || {});
  var BUFFER_TYPE = /* @__PURE__ */ ((BUFFER_TYPE2) => {
    BUFFER_TYPE2[BUFFER_TYPE2["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
    BUFFER_TYPE2[BUFFER_TYPE2["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
    BUFFER_TYPE2[BUFFER_TYPE2["UNIFORM_BUFFER"] = 35345] = "UNIFORM_BUFFER";
    return BUFFER_TYPE2;
  })(BUFFER_TYPE || {});

  const PI_2 = Math.PI * 2;
  const RAD_TO_DEG = 180 / Math.PI;
  const DEG_TO_RAD = Math.PI / 180;
  var SHAPES = /* @__PURE__ */ ((SHAPES2) => {
    SHAPES2[SHAPES2["POLY"] = 0] = "POLY";
    SHAPES2[SHAPES2["RECT"] = 1] = "RECT";
    SHAPES2[SHAPES2["CIRC"] = 2] = "CIRC";
    SHAPES2[SHAPES2["ELIP"] = 3] = "ELIP";
    SHAPES2[SHAPES2["RREC"] = 4] = "RREC";
    return SHAPES2;
  })(SHAPES || {});

  class Point {
    constructor(x = 0, y = 0) {
      this.x = 0;
      this.y = 0;
      this.x = x;
      this.y = y;
    }
    clone() {
      return new Point(this.x, this.y);
    }
    copyFrom(p) {
      this.set(p.x, p.y);
      return this;
    }
    copyTo(p) {
      p.set(this.x, this.y);
      return p;
    }
    equals(p) {
      return p.x === this.x && p.y === this.y;
    }
    set(x = 0, y = x) {
      this.x = x;
      this.y = y;
      return this;
    }
  }

  const tempPoints$1 = [new Point(), new Point(), new Point(), new Point()];
  class Rectangle {
    constructor(x = 0, y = 0, width = 0, height = 0) {
      this.x = Number(x);
      this.y = Number(y);
      this.width = Number(width);
      this.height = Number(height);
      this.type = SHAPES.RECT;
    }
    get left() {
      return this.x;
    }
    get right() {
      return this.x + this.width;
    }
    get top() {
      return this.y;
    }
    get bottom() {
      return this.y + this.height;
    }
    static get EMPTY() {
      return new Rectangle(0, 0, 0, 0);
    }
    clone() {
      return new Rectangle(this.x, this.y, this.width, this.height);
    }
    copyFrom(rectangle) {
      this.x = rectangle.x;
      this.y = rectangle.y;
      this.width = rectangle.width;
      this.height = rectangle.height;
      return this;
    }
    copyTo(rectangle) {
      rectangle.x = this.x;
      rectangle.y = this.y;
      rectangle.width = this.width;
      rectangle.height = this.height;
      return rectangle;
    }
    contains(x, y) {
      if (this.width <= 0 || this.height <= 0) {
        return false;
      }
      if (x >= this.x && x < this.x + this.width) {
        if (y >= this.y && y < this.y + this.height) {
          return true;
        }
      }
      return false;
    }
    intersects(other, transform) {
      if (!transform) {
        const x02 = this.x < other.x ? other.x : this.x;
        const x12 = this.right > other.right ? other.right : this.right;
        if (x12 <= x02) {
          return false;
        }
        const y02 = this.y < other.y ? other.y : this.y;
        const y12 = this.bottom > other.bottom ? other.bottom : this.bottom;
        return y12 > y02;
      }
      const x0 = this.left;
      const x1 = this.right;
      const y0 = this.top;
      const y1 = this.bottom;
      if (x1 <= x0 || y1 <= y0) {
        return false;
      }
      const lt = tempPoints$1[0].set(other.left, other.top);
      const lb = tempPoints$1[1].set(other.left, other.bottom);
      const rt = tempPoints$1[2].set(other.right, other.top);
      const rb = tempPoints$1[3].set(other.right, other.bottom);
      if (rt.x <= lt.x || lb.y <= lt.y) {
        return false;
      }
      const s = Math.sign(transform.a * transform.d - transform.b * transform.c);
      if (s === 0) {
        return false;
      }
      transform.apply(lt, lt);
      transform.apply(lb, lb);
      transform.apply(rt, rt);
      transform.apply(rb, rb);
      if (Math.max(lt.x, lb.x, rt.x, rb.x) <= x0 || Math.min(lt.x, lb.x, rt.x, rb.x) >= x1 || Math.max(lt.y, lb.y, rt.y, rb.y) <= y0 || Math.min(lt.y, lb.y, rt.y, rb.y) >= y1) {
        return false;
      }
      const nx = s * (lb.y - lt.y);
      const ny = s * (lt.x - lb.x);
      const n00 = nx * x0 + ny * y0;
      const n10 = nx * x1 + ny * y0;
      const n01 = nx * x0 + ny * y1;
      const n11 = nx * x1 + ny * y1;
      if (Math.max(n00, n10, n01, n11) <= nx * lt.x + ny * lt.y || Math.min(n00, n10, n01, n11) >= nx * rb.x + ny * rb.y) {
        return false;
      }
      const mx = s * (lt.y - rt.y);
      const my = s * (rt.x - lt.x);
      const m00 = mx * x0 + my * y0;
      const m10 = mx * x1 + my * y0;
      const m01 = mx * x0 + my * y1;
      const m11 = mx * x1 + my * y1;
      if (Math.max(m00, m10, m01, m11) <= mx * lt.x + my * lt.y || Math.min(m00, m10, m01, m11) >= mx * rb.x + my * rb.y) {
        return false;
      }
      return true;
    }
    pad(paddingX = 0, paddingY = paddingX) {
      this.x -= paddingX;
      this.y -= paddingY;
      this.width += paddingX * 2;
      this.height += paddingY * 2;
      return this;
    }
    fit(rectangle) {
      const x1 = Math.max(this.x, rectangle.x);
      const x2 = Math.min(this.x + this.width, rectangle.x + rectangle.width);
      const y1 = Math.max(this.y, rectangle.y);
      const y2 = Math.min(this.y + this.height, rectangle.y + rectangle.height);
      this.x = x1;
      this.width = Math.max(x2 - x1, 0);
      this.y = y1;
      this.height = Math.max(y2 - y1, 0);
      return this;
    }
    ceil(resolution = 1, eps = 1e-3) {
      const x2 = Math.ceil((this.x + this.width - eps) * resolution) / resolution;
      const y2 = Math.ceil((this.y + this.height - eps) * resolution) / resolution;
      this.x = Math.floor((this.x + eps) * resolution) / resolution;
      this.y = Math.floor((this.y + eps) * resolution) / resolution;
      this.width = x2 - this.x;
      this.height = y2 - this.y;
      return this;
    }
    enlarge(rectangle) {
      const x1 = Math.min(this.x, rectangle.x);
      const x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
      const y1 = Math.min(this.y, rectangle.y);
      const y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);
      this.x = x1;
      this.width = x2 - x1;
      this.y = y1;
      this.height = y2 - y1;
      return this;
    }
  }

  class ObservablePoint {
    constructor(cb, scope, x = 0, y = 0) {
      this._x = x;
      this._y = y;
      this.cb = cb;
      this.scope = scope;
    }
    clone(cb = this.cb, scope = this.scope) {
      return new ObservablePoint(cb, scope, this._x, this._y);
    }
    set(x = 0, y = x) {
      if (this._x !== x || this._y !== y) {
        this._x = x;
        this._y = y;
        this.cb.call(this.scope);
      }
      return this;
    }
    copyFrom(p) {
      if (this._x !== p.x || this._y !== p.y) {
        this._x = p.x;
        this._y = p.y;
        this.cb.call(this.scope);
      }
      return this;
    }
    copyTo(p) {
      p.set(this._x, this._y);
      return p;
    }
    equals(p) {
      return p.x === this._x && p.y === this._y;
    }
    get x() {
      return this._x;
    }
    set x(value) {
      if (this._x !== value) {
        this._x = value;
        this.cb.call(this.scope);
      }
    }
    get y() {
      return this._y;
    }
    set y(value) {
      if (this._y !== value) {
        this._y = value;
        this.cb.call(this.scope);
      }
    }
  }

  class Matrix {
    constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
      this.array = null;
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
    }
    fromArray(array) {
      this.a = array[0];
      this.b = array[1];
      this.c = array[3];
      this.d = array[4];
      this.tx = array[2];
      this.ty = array[5];
    }
    set(a, b, c, d, tx, ty) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
      return this;
    }
    toArray(transpose, out) {
      if (!this.array) {
        this.array = new Float32Array(9);
      }
      const array = out || this.array;
      if (transpose) {
        array[0] = this.a;
        array[1] = this.b;
        array[2] = 0;
        array[3] = this.c;
        array[4] = this.d;
        array[5] = 0;
        array[6] = this.tx;
        array[7] = this.ty;
        array[8] = 1;
      } else {
        array[0] = this.a;
        array[1] = this.c;
        array[2] = this.tx;
        array[3] = this.b;
        array[4] = this.d;
        array[5] = this.ty;
        array[6] = 0;
        array[7] = 0;
        array[8] = 1;
      }
      return array;
    }
    apply(pos, newPos) {
      newPos = newPos || new Point();
      const x = pos.x;
      const y = pos.y;
      newPos.x = this.a * x + this.c * y + this.tx;
      newPos.y = this.b * x + this.d * y + this.ty;
      return newPos;
    }
    applyInverse(pos, newPos) {
      newPos = newPos || new Point();
      const id = 1 / (this.a * this.d + this.c * -this.b);
      const x = pos.x;
      const y = pos.y;
      newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;
      newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;
      return newPos;
    }
    translate(x, y) {
      this.tx += x;
      this.ty += y;
      return this;
    }
    scale(x, y) {
      this.a *= x;
      this.d *= y;
      this.c *= x;
      this.b *= y;
      this.tx *= x;
      this.ty *= y;
      return this;
    }
    rotate(angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const a1 = this.a;
      const c1 = this.c;
      const tx1 = this.tx;
      this.a = a1 * cos - this.b * sin;
      this.b = a1 * sin + this.b * cos;
      this.c = c1 * cos - this.d * sin;
      this.d = c1 * sin + this.d * cos;
      this.tx = tx1 * cos - this.ty * sin;
      this.ty = tx1 * sin + this.ty * cos;
      return this;
    }
    append(matrix) {
      const a1 = this.a;
      const b1 = this.b;
      const c1 = this.c;
      const d1 = this.d;
      this.a = matrix.a * a1 + matrix.b * c1;
      this.b = matrix.a * b1 + matrix.b * d1;
      this.c = matrix.c * a1 + matrix.d * c1;
      this.d = matrix.c * b1 + matrix.d * d1;
      this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
      this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;
      return this;
    }
    setTransform(x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
      this.a = Math.cos(rotation + skewY) * scaleX;
      this.b = Math.sin(rotation + skewY) * scaleX;
      this.c = -Math.sin(rotation - skewX) * scaleY;
      this.d = Math.cos(rotation - skewX) * scaleY;
      this.tx = x - (pivotX * this.a + pivotY * this.c);
      this.ty = y - (pivotX * this.b + pivotY * this.d);
      return this;
    }
    prepend(matrix) {
      const tx1 = this.tx;
      if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
        const a1 = this.a;
        const c1 = this.c;
        this.a = a1 * matrix.a + this.b * matrix.c;
        this.b = a1 * matrix.b + this.b * matrix.d;
        this.c = c1 * matrix.a + this.d * matrix.c;
        this.d = c1 * matrix.b + this.d * matrix.d;
      }
      this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
      this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;
      return this;
    }
    decompose(transform) {
      const a = this.a;
      const b = this.b;
      const c = this.c;
      const d = this.d;
      const pivot = transform.pivot;
      const skewX = -Math.atan2(-c, d);
      const skewY = Math.atan2(b, a);
      const delta = Math.abs(skewX + skewY);
      if (delta < 1e-5 || Math.abs(PI_2 - delta) < 1e-5) {
        transform.rotation = skewY;
        transform.skew.x = transform.skew.y = 0;
      } else {
        transform.rotation = 0;
        transform.skew.x = skewX;
        transform.skew.y = skewY;
      }
      transform.scale.x = Math.sqrt(a * a + b * b);
      transform.scale.y = Math.sqrt(c * c + d * d);
      transform.position.x = this.tx + (pivot.x * a + pivot.y * c);
      transform.position.y = this.ty + (pivot.x * b + pivot.y * d);
      return transform;
    }
    invert() {
      const a1 = this.a;
      const b1 = this.b;
      const c1 = this.c;
      const d1 = this.d;
      const tx1 = this.tx;
      const n = a1 * d1 - b1 * c1;
      this.a = d1 / n;
      this.b = -b1 / n;
      this.c = -c1 / n;
      this.d = a1 / n;
      this.tx = (c1 * this.ty - d1 * tx1) / n;
      this.ty = -(a1 * this.ty - b1 * tx1) / n;
      return this;
    }
    identity() {
      this.a = 1;
      this.b = 0;
      this.c = 0;
      this.d = 1;
      this.tx = 0;
      this.ty = 0;
      return this;
    }
    clone() {
      const matrix = new Matrix();
      matrix.a = this.a;
      matrix.b = this.b;
      matrix.c = this.c;
      matrix.d = this.d;
      matrix.tx = this.tx;
      matrix.ty = this.ty;
      return matrix;
    }
    copyTo(matrix) {
      matrix.a = this.a;
      matrix.b = this.b;
      matrix.c = this.c;
      matrix.d = this.d;
      matrix.tx = this.tx;
      matrix.ty = this.ty;
      return matrix;
    }
    copyFrom(matrix) {
      this.a = matrix.a;
      this.b = matrix.b;
      this.c = matrix.c;
      this.d = matrix.d;
      this.tx = matrix.tx;
      this.ty = matrix.ty;
      return this;
    }
    static get IDENTITY() {
      return new Matrix();
    }
    static get TEMP_MATRIX() {
      return new Matrix();
    }
  }

  const ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
  const uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
  const vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
  const vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
  const rotationCayley = [];
  const rotationMatrices = [];
  const signum = Math.sign;
  function init() {
    for (let i = 0; i < 16; i++) {
      const row = [];
      rotationCayley.push(row);
      for (let j = 0; j < 16; j++) {
        const _ux = signum(ux[i] * ux[j] + vx[i] * uy[j]);
        const _uy = signum(uy[i] * ux[j] + vy[i] * uy[j]);
        const _vx = signum(ux[i] * vx[j] + vx[i] * vy[j]);
        const _vy = signum(uy[i] * vx[j] + vy[i] * vy[j]);
        for (let k = 0; k < 16; k++) {
          if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy) {
            row.push(k);
            break;
          }
        }
      }
    }
    for (let i = 0; i < 16; i++) {
      const mat = new Matrix();
      mat.set(ux[i], uy[i], vx[i], vy[i], 0, 0);
      rotationMatrices.push(mat);
    }
  }
  init();
  const groupD8 = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MAIN_DIAGONAL: 10,
    MIRROR_HORIZONTAL: 12,
    REVERSE_DIAGONAL: 14,
    uX: (ind) => ux[ind],
    uY: (ind) => uy[ind],
    vX: (ind) => vx[ind],
    vY: (ind) => vy[ind],
    inv: (rotation) => {
      if (rotation & 8) {
        return rotation & 15;
      }
      return -rotation & 7;
    },
    add: (rotationSecond, rotationFirst) => rotationCayley[rotationSecond][rotationFirst],
    sub: (rotationSecond, rotationFirst) => rotationCayley[rotationSecond][groupD8.inv(rotationFirst)],
    rotate180: (rotation) => rotation ^ 4,
    isVertical: (rotation) => (rotation & 3) === 2,
    byDirection: (dx, dy) => {
      if (Math.abs(dx) * 2 <= Math.abs(dy)) {
        if (dy >= 0) {
          return groupD8.S;
        }
        return groupD8.N;
      } else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
        if (dx > 0) {
          return groupD8.E;
        }
        return groupD8.W;
      } else if (dy > 0) {
        if (dx > 0) {
          return groupD8.SE;
        }
        return groupD8.SW;
      } else if (dx > 0) {
        return groupD8.NE;
      }
      return groupD8.NW;
    },
    matrixAppendRotationInv: (matrix, rotation, tx = 0, ty = 0) => {
      const mat = rotationMatrices[groupD8.inv(rotation)];
      mat.tx = tx;
      mat.ty = ty;
      matrix.append(mat);
    }
  };

  const _Transform = class {
    constructor() {
      this.worldTransform = new Matrix();
      this.localTransform = new Matrix();
      this.position = new ObservablePoint(this.onChange, this, 0, 0);
      this.scale = new ObservablePoint(this.onChange, this, 1, 1);
      this.pivot = new ObservablePoint(this.onChange, this, 0, 0);
      this.skew = new ObservablePoint(this.updateSkew, this, 0, 0);
      this._rotation = 0;
      this._cx = 1;
      this._sx = 0;
      this._cy = 0;
      this._sy = 1;
      this._localID = 0;
      this._currentLocalID = 0;
      this._worldID = 0;
      this._parentID = 0;
    }
    onChange() {
      this._localID++;
    }
    updateSkew() {
      this._cx = Math.cos(this._rotation + this.skew.y);
      this._sx = Math.sin(this._rotation + this.skew.y);
      this._cy = -Math.sin(this._rotation - this.skew.x);
      this._sy = Math.cos(this._rotation - this.skew.x);
      this._localID++;
    }
    updateLocalTransform() {
      const lt = this.localTransform;
      if (this._localID !== this._currentLocalID) {
        lt.a = this._cx * this.scale.x;
        lt.b = this._sx * this.scale.x;
        lt.c = this._cy * this.scale.y;
        lt.d = this._sy * this.scale.y;
        lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
        lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
        this._currentLocalID = this._localID;
        this._parentID = -1;
      }
    }
    updateTransform(parentTransform) {
      const lt = this.localTransform;
      if (this._localID !== this._currentLocalID) {
        lt.a = this._cx * this.scale.x;
        lt.b = this._sx * this.scale.x;
        lt.c = this._cy * this.scale.y;
        lt.d = this._sy * this.scale.y;
        lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
        lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
        this._currentLocalID = this._localID;
        this._parentID = -1;
      }
      if (this._parentID !== parentTransform._worldID) {
        const pt = parentTransform.worldTransform;
        const wt = this.worldTransform;
        wt.a = lt.a * pt.a + lt.b * pt.c;
        wt.b = lt.a * pt.b + lt.b * pt.d;
        wt.c = lt.c * pt.a + lt.d * pt.c;
        wt.d = lt.c * pt.b + lt.d * pt.d;
        wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
        wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
        this._parentID = parentTransform._worldID;
        this._worldID++;
      }
    }
    setFromMatrix(matrix) {
      matrix.decompose(this);
      this._localID++;
    }
    get rotation() {
      return this._rotation;
    }
    set rotation(value) {
      if (this._rotation !== value) {
        this._rotation = value;
        this.updateSkew();
      }
    }
  };
  let Transform = _Transform;
  Transform.IDENTITY = new _Transform();

  class Runner {
    constructor(name) {
      this.items = [];
      this._name = name;
      this._aliasCount = 0;
    }
    emit(a0, a1, a2, a3, a4, a5, a6, a7) {
      if (arguments.length > 8) {
        throw new Error("max arguments reached");
      }
      const { name, items } = this;
      this._aliasCount++;
      for (let i = 0, len = items.length; i < len; i++) {
        items[i][name](a0, a1, a2, a3, a4, a5, a6, a7);
      }
      if (items === this.items) {
        this._aliasCount--;
      }
      return this;
    }
    ensureNonAliasedItems() {
      if (this._aliasCount > 0 && this.items.length > 1) {
        this._aliasCount = 0;
        this.items = this.items.slice(0);
      }
    }
    add(item) {
      if (item[this._name]) {
        this.ensureNonAliasedItems();
        this.remove(item);
        this.items.push(item);
      }
      return this;
    }
    remove(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.ensureNonAliasedItems();
        this.items.splice(index, 1);
      }
      return this;
    }
    contains(item) {
      return this.items.includes(item);
    }
    removeAll() {
      this.ensureNonAliasedItems();
      this.items.length = 0;
      return this;
    }
    destroy() {
      this.removeAll();
      this.items = null;
      this._name = null;
    }
    get empty() {
      return this.items.length === 0;
    }
    get name() {
      return this._name;
    }
  }
  Object.defineProperties(Runner.prototype, {
    dispatch: { value: Runner.prototype.emit },
    run: { value: Runner.prototype.emit }
  });

  const BrowserAdapter = {
    createCanvas: (width, height) => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      return canvas;
    },
    getWebGLRenderingContext: () => WebGLRenderingContext,
    getNavigator: () => navigator,
    getBaseUrl: () => document.baseURI ?? window.location.href,
    getFontFaceSet: () => document.fonts,
    fetch: (url, options) => fetch(url, options)
  };

  var appleIphone = /iPhone/i;
  var appleIpod = /iPod/i;
  var appleTablet = /iPad/i;
  var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
  var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
  var androidTablet = /Android/i;
  var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
  var amazonTablet = /Silk/i;
  var windowsPhone = /Windows Phone/i;
  var windowsTablet = /\bWindows(?:.+)ARM\b/i;
  var otherBlackBerry = /BlackBerry/i;
  var otherBlackBerry10 = /BB10/i;
  var otherOpera = /Opera Mini/i;
  var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
  var otherFirefox = /Mobile(?:.+)Firefox\b/i;
  var isAppleTabletOnIos13 = function (navigator) {
      return (typeof navigator !== 'undefined' &&
          navigator.platform === 'MacIntel' &&
          typeof navigator.maxTouchPoints === 'number' &&
          navigator.maxTouchPoints > 1 &&
          typeof MSStream === 'undefined');
  };
  function createMatch(userAgent) {
      return function (regex) { return regex.test(userAgent); };
  }
  function isMobile$1(param) {
      var nav = {
          userAgent: '',
          platform: '',
          maxTouchPoints: 0
      };
      if (!param && typeof navigator !== 'undefined') {
          nav = {
              userAgent: navigator.userAgent,
              platform: navigator.platform,
              maxTouchPoints: navigator.maxTouchPoints || 0
          };
      }
      else if (typeof param === 'string') {
          nav.userAgent = param;
      }
      else if (param && param.userAgent) {
          nav = {
              userAgent: param.userAgent,
              platform: param.platform,
              maxTouchPoints: param.maxTouchPoints || 0
          };
      }
      var userAgent = nav.userAgent;
      var tmp = userAgent.split('[FBAN');
      if (typeof tmp[1] !== 'undefined') {
          userAgent = tmp[0];
      }
      tmp = userAgent.split('Twitter');
      if (typeof tmp[1] !== 'undefined') {
          userAgent = tmp[0];
      }
      var match = createMatch(userAgent);
      var result = {
          apple: {
              phone: match(appleIphone) && !match(windowsPhone),
              ipod: match(appleIpod),
              tablet: !match(appleIphone) &&
                  (match(appleTablet) || isAppleTabletOnIos13(nav)) &&
                  !match(windowsPhone),
              universal: match(appleUniversal),
              device: (match(appleIphone) ||
                  match(appleIpod) ||
                  match(appleTablet) ||
                  match(appleUniversal) ||
                  isAppleTabletOnIos13(nav)) &&
                  !match(windowsPhone)
          },
          amazon: {
              phone: match(amazonPhone),
              tablet: !match(amazonPhone) && match(amazonTablet),
              device: match(amazonPhone) || match(amazonTablet)
          },
          android: {
              phone: (!match(windowsPhone) && match(amazonPhone)) ||
                  (!match(windowsPhone) && match(androidPhone)),
              tablet: !match(windowsPhone) &&
                  !match(amazonPhone) &&
                  !match(androidPhone) &&
                  (match(amazonTablet) || match(androidTablet)),
              device: (!match(windowsPhone) &&
                  (match(amazonPhone) ||
                      match(amazonTablet) ||
                      match(androidPhone) ||
                      match(androidTablet))) ||
                  match(/\bokhttp\b/i)
          },
          windows: {
              phone: match(windowsPhone),
              tablet: match(windowsTablet),
              device: match(windowsPhone) || match(windowsTablet)
          },
          other: {
              blackberry: match(otherBlackBerry),
              blackberry10: match(otherBlackBerry10),
              opera: match(otherOpera),
              firefox: match(otherFirefox),
              chrome: match(otherChrome),
              device: match(otherBlackBerry) ||
                  match(otherBlackBerry10) ||
                  match(otherOpera) ||
                  match(otherFirefox) ||
                  match(otherChrome)
          },
          any: false,
          phone: false,
          tablet: false
      };
      result.any =
          result.apple.device ||
              result.android.device ||
              result.windows.device ||
              result.other.device;
      result.phone =
          result.apple.phone || result.android.phone || result.windows.phone;
      result.tablet =
          result.apple.tablet || result.android.tablet || result.windows.tablet;
      return result;
  }

  const isMobile = isMobile$1(globalThis.navigator);

  function canUploadSameBuffer() {
    return !isMobile.apple.device;
  }

  function maxRecommendedTextures(max) {
    let allowMax = true;
    if (isMobile.tablet || isMobile.phone) {
      if (isMobile.apple.device) {
        const match = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
        if (match) {
          const majorVersion = parseInt(match[1], 10);
          if (majorVersion < 11) {
            allowMax = false;
          }
        }
      }
      if (isMobile.android.device) {
        const match = navigator.userAgent.match(/Android\s([0-9.]*)/);
        if (match) {
          const majorVersion = parseInt(match[1], 10);
          if (majorVersion < 7) {
            allowMax = false;
          }
        }
      }
    }
    return allowMax ? max : 4;
  }

  const settings = {
    ADAPTER: BrowserAdapter,
    MIPMAP_TEXTURES: MIPMAP_MODES.POW2,
    ANISOTROPIC_LEVEL: 0,
    RESOLUTION: 1,
    FILTER_RESOLUTION: 1,
    FILTER_MULTISAMPLE: MSAA_QUALITY.NONE,
    SPRITE_MAX_TEXTURES: maxRecommendedTextures(32),
    SPRITE_BATCH_SIZE: 4096,
    RENDER_OPTIONS: {
      view: null,
      antialias: false,
      autoDensity: false,
      backgroundColor: 0,
      backgroundAlpha: 1,
      useContextAlpha: true,
      clearBeforeRender: true,
      preserveDrawingBuffer: false,
      width: 800,
      height: 600,
      legacy: false,
      hello: false
    },
    GC_MODE: GC_MODES.AUTO,
    GC_MAX_IDLE: 60 * 60,
    GC_MAX_CHECK_COUNT: 60 * 10,
    WRAP_MODE: WRAP_MODES.CLAMP,
    SCALE_MODE: SCALE_MODES.LINEAR,
    PRECISION_VERTEX: PRECISION.HIGH,
    PRECISION_FRAGMENT: isMobile.apple.device ? PRECISION.HIGH : PRECISION.MEDIUM,
    CAN_UPLOAD_SAME_BUFFER: canUploadSameBuffer(),
    CREATE_IMAGE_BITMAP: false,
    ROUND_PIXELS: false
  };

  settings.TARGET_FPMS = 0.06;

  var UPDATE_PRIORITY = /* @__PURE__ */ ((UPDATE_PRIORITY2) => {
    UPDATE_PRIORITY2[UPDATE_PRIORITY2["HIGH"] = 25] = "HIGH";
    UPDATE_PRIORITY2[UPDATE_PRIORITY2["NORMAL"] = 0] = "NORMAL";
    UPDATE_PRIORITY2[UPDATE_PRIORITY2["LOW"] = -25] = "LOW";
    UPDATE_PRIORITY2[UPDATE_PRIORITY2["UTILITY"] = -50] = "UTILITY";
    return UPDATE_PRIORITY2;
  })(UPDATE_PRIORITY || {});

  class TickerListener {
    constructor(fn, context = null, priority = 0, once = false) {
      this.next = null;
      this.previous = null;
      this._destroyed = false;
      this.fn = fn;
      this.context = context;
      this.priority = priority;
      this.once = once;
    }
    match(fn, context = null) {
      return this.fn === fn && this.context === context;
    }
    emit(deltaTime) {
      if (this.fn) {
        if (this.context) {
          this.fn.call(this.context, deltaTime);
        } else {
          this.fn(deltaTime);
        }
      }
      const redirect = this.next;
      if (this.once) {
        this.destroy(true);
      }
      if (this._destroyed) {
        this.next = null;
      }
      return redirect;
    }
    connect(previous) {
      this.previous = previous;
      if (previous.next) {
        previous.next.previous = this;
      }
      this.next = previous.next;
      previous.next = this;
    }
    destroy(hard = false) {
      this._destroyed = true;
      this.fn = null;
      this.context = null;
      if (this.previous) {
        this.previous.next = this.next;
      }
      if (this.next) {
        this.next.previous = this.previous;
      }
      const redirect = this.next;
      this.next = hard ? null : redirect;
      this.previous = null;
      return redirect;
    }
  }

  class Ticker {
    constructor() {
      this.autoStart = false;
      this.deltaTime = 1;
      this.lastTime = -1;
      this.speed = 1;
      this.started = false;
      this._requestId = null;
      this._maxElapsedMS = 100;
      this._minElapsedMS = 0;
      this._protected = false;
      this._lastFrame = -1;
      this._head = new TickerListener(null, null, Infinity);
      this.deltaMS = 1 / settings.TARGET_FPMS;
      this.elapsedMS = 1 / settings.TARGET_FPMS;
      this._tick = (time) => {
        this._requestId = null;
        if (this.started) {
          this.update(time);
          if (this.started && this._requestId === null && this._head.next) {
            this._requestId = requestAnimationFrame(this._tick);
          }
        }
      };
    }
    _requestIfNeeded() {
      if (this._requestId === null && this._head.next) {
        this.lastTime = performance.now();
        this._lastFrame = this.lastTime;
        this._requestId = requestAnimationFrame(this._tick);
      }
    }
    _cancelIfNeeded() {
      if (this._requestId !== null) {
        cancelAnimationFrame(this._requestId);
        this._requestId = null;
      }
    }
    _startIfPossible() {
      if (this.started) {
        this._requestIfNeeded();
      } else if (this.autoStart) {
        this.start();
      }
    }
    add(fn, context, priority = UPDATE_PRIORITY.NORMAL) {
      return this._addListener(new TickerListener(fn, context, priority));
    }
    addOnce(fn, context, priority = UPDATE_PRIORITY.NORMAL) {
      return this._addListener(new TickerListener(fn, context, priority, true));
    }
    _addListener(listener) {
      let current = this._head.next;
      let previous = this._head;
      if (!current) {
        listener.connect(previous);
      } else {
        while (current) {
          if (listener.priority > current.priority) {
            listener.connect(previous);
            break;
          }
          previous = current;
          current = current.next;
        }
        if (!listener.previous) {
          listener.connect(previous);
        }
      }
      this._startIfPossible();
      return this;
    }
    remove(fn, context) {
      let listener = this._head.next;
      while (listener) {
        if (listener.match(fn, context)) {
          listener = listener.destroy();
        } else {
          listener = listener.next;
        }
      }
      if (!this._head.next) {
        this._cancelIfNeeded();
      }
      return this;
    }
    get count() {
      if (!this._head) {
        return 0;
      }
      let count = 0;
      let current = this._head;
      while (current = current.next) {
        count++;
      }
      return count;
    }
    start() {
      if (!this.started) {
        this.started = true;
        this._requestIfNeeded();
      }
    }
    stop() {
      if (this.started) {
        this.started = false;
        this._cancelIfNeeded();
      }
    }
    destroy() {
      if (!this._protected) {
        this.stop();
        let listener = this._head.next;
        while (listener) {
          listener = listener.destroy(true);
        }
        this._head.destroy();
        this._head = null;
      }
    }
    update(currentTime = performance.now()) {
      let elapsedMS;
      if (currentTime > this.lastTime) {
        elapsedMS = this.elapsedMS = currentTime - this.lastTime;
        if (elapsedMS > this._maxElapsedMS) {
          elapsedMS = this._maxElapsedMS;
        }
        elapsedMS *= this.speed;
        if (this._minElapsedMS) {
          const delta = currentTime - this._lastFrame | 0;
          if (delta < this._minElapsedMS) {
            return;
          }
          this._lastFrame = currentTime - delta % this._minElapsedMS;
        }
        this.deltaMS = elapsedMS;
        this.deltaTime = this.deltaMS * settings.TARGET_FPMS;
        const head = this._head;
        let listener = head.next;
        while (listener) {
          listener = listener.emit(this.deltaTime);
        }
        if (!head.next) {
          this._cancelIfNeeded();
        }
      } else {
        this.deltaTime = this.deltaMS = this.elapsedMS = 0;
      }
      this.lastTime = currentTime;
    }
    get FPS() {
      return 1e3 / this.elapsedMS;
    }
    get minFPS() {
      return 1e3 / this._maxElapsedMS;
    }
    set minFPS(fps) {
      const minFPS = Math.min(this.maxFPS, fps);
      const minFPMS = Math.min(Math.max(0, minFPS) / 1e3, settings.TARGET_FPMS);
      this._maxElapsedMS = 1 / minFPMS;
    }
    get maxFPS() {
      if (this._minElapsedMS) {
        return Math.round(1e3 / this._minElapsedMS);
      }
      return 0;
    }
    set maxFPS(fps) {
      if (fps === 0) {
        this._minElapsedMS = 0;
      } else {
        const maxFPS = Math.max(this.minFPS, fps);
        this._minElapsedMS = 1 / (maxFPS / 1e3);
      }
    }
    static get shared() {
      if (!Ticker._shared) {
        const shared = Ticker._shared = new Ticker();
        shared.autoStart = true;
        shared._protected = true;
      }
      return Ticker._shared;
    }
    static get system() {
      if (!Ticker._system) {
        const system = Ticker._system = new Ticker();
        system.autoStart = true;
        system._protected = true;
      }
      return Ticker._system;
    }
  }

  var ExtensionType = /* @__PURE__ */ ((ExtensionType2) => {
    ExtensionType2["Renderer"] = "renderer";
    ExtensionType2["Application"] = "application";
    ExtensionType2["RendererSystem"] = "renderer-webgl-system";
    ExtensionType2["RendererPlugin"] = "renderer-webgl-plugin";
    ExtensionType2["CanvasRendererSystem"] = "renderer-canvas-system";
    ExtensionType2["CanvasRendererPlugin"] = "renderer-canvas-plugin";
    ExtensionType2["Asset"] = "asset";
    ExtensionType2["LoadParser"] = "load-parser";
    ExtensionType2["ResolveParser"] = "resolve-parser";
    ExtensionType2["CacheParser"] = "cache-parser";
    ExtensionType2["DetectionParser"] = "detection-parser";
    return ExtensionType2;
  })(ExtensionType || {});
  const normalizeExtension = (ext) => {
    if (typeof ext === "function" || typeof ext === "object" && ext.extension) {
      const metadata = typeof ext.extension !== "object" ? { type: ext.extension } : ext.extension;
      ext = { ...metadata, ref: ext };
    }
    if (typeof ext === "object") {
      ext = { ...ext };
    } else {
      throw new Error("Invalid extension type");
    }
    if (typeof ext.type === "string") {
      ext.type = [ext.type];
    }
    return ext;
  };
  const extensions = {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...extensions2) {
      extensions2.map(normalizeExtension).forEach((ext) => {
        ext.type.forEach((type) => this._removeHandlers[type]?.(ext));
      });
      return this;
    },
    add(...extensions2) {
      extensions2.map(normalizeExtension).forEach((ext) => {
        ext.type.forEach((type) => {
          const handlers = this._addHandlers;
          const queue = this._queue;
          if (!handlers[type]) {
            queue[type] = queue[type] || [];
            queue[type].push(ext);
          } else {
            handlers[type](ext);
          }
        });
      });
      return this;
    },
    handle(type, onAdd, onRemove) {
      const addHandlers = this._addHandlers;
      const removeHandlers = this._removeHandlers;
      addHandlers[type] = onAdd;
      removeHandlers[type] = onRemove;
      const queue = this._queue;
      if (queue[type]) {
        queue[type].forEach((ext) => onAdd(ext));
        delete queue[type];
      }
      return this;
    },
    handleByMap(type, map) {
      return this.handle(type, (extension) => {
        map[extension.name] = extension.ref;
      }, (extension) => {
        delete map[extension.name];
      });
    },
    handleByList(type, list) {
      return this.handle(type, (extension) => {
        if (list.includes(extension.ref)) {
          return;
        }
        list.push(extension.ref);
        list.sort((a, b) => (b.priority ?? -1) - (a.priority ?? -1));
      }, (extension) => {
        const index = list.indexOf(extension.ref);
        if (index !== -1) {
          list.splice(index, 1);
        }
      });
    }
  };

  class TickerPlugin {
    static init(options) {
      options = Object.assign({
        autoStart: true,
        sharedTicker: false
      }, options);
      Object.defineProperty(this, "ticker", {
        set(ticker) {
          if (this._ticker) {
            this._ticker.remove(this.render, this);
          }
          this._ticker = ticker;
          if (ticker) {
            ticker.add(this.render, this, UPDATE_PRIORITY.LOW);
          }
        },
        get() {
          return this._ticker;
        }
      });
      this.stop = () => {
        this._ticker.stop();
      };
      this.start = () => {
        this._ticker.start();
      };
      this._ticker = null;
      this.ticker = options.sharedTicker ? Ticker.shared : new Ticker();
      if (options.autoStart) {
        this.start();
      }
    }
    static destroy() {
      if (this._ticker) {
        const oldTicker = this._ticker;
        this.ticker = null;
        oldTicker.destroy();
      }
    }
  }
  TickerPlugin.extension = ExtensionType.Application;
  extensions.add(TickerPlugin);

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var eventemitter3 = {exports: {}};

  (function (module) {

  	var has = Object.prototype.hasOwnProperty
  	  , prefix = '~';

  	/**
  	 * Constructor to create a storage for our `EE` objects.
  	 * An `Events` instance is a plain object whose properties are event names.
  	 *
  	 * @constructor
  	 * @private
  	 */
  	function Events() {}

  	//
  	// We try to not inherit from `Object.prototype`. In some engines creating an
  	// instance in this way is faster than calling `Object.create(null)` directly.
  	// If `Object.create(null)` is not supported we prefix the event names with a
  	// character to make sure that the built-in object properties are not
  	// overridden or used as an attack vector.
  	//
  	if (Object.create) {
  	  Events.prototype = Object.create(null);

  	  //
  	  // This hack is needed because the `__proto__` property is still inherited in
  	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  	  //
  	  if (!new Events().__proto__) prefix = false;
  	}

  	/**
  	 * Representation of a single event listener.
  	 *
  	 * @param {Function} fn The listener function.
  	 * @param {*} context The context to invoke the listener with.
  	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
  	 * @constructor
  	 * @private
  	 */
  	function EE(fn, context, once) {
  	  this.fn = fn;
  	  this.context = context;
  	  this.once = once || false;
  	}

  	/**
  	 * Add a listener for a given event.
  	 *
  	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
  	 * @param {(String|Symbol)} event The event name.
  	 * @param {Function} fn The listener function.
  	 * @param {*} context The context to invoke the listener with.
  	 * @param {Boolean} once Specify if the listener is a one-time listener.
  	 * @returns {EventEmitter}
  	 * @private
  	 */
  	function addListener(emitter, event, fn, context, once) {
  	  if (typeof fn !== 'function') {
  	    throw new TypeError('The listener must be a function');
  	  }

  	  var listener = new EE(fn, context || emitter, once)
  	    , evt = prefix ? prefix + event : event;

  	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  	  else emitter._events[evt] = [emitter._events[evt], listener];

  	  return emitter;
  	}

  	/**
  	 * Clear event by name.
  	 *
  	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
  	 * @param {(String|Symbol)} evt The Event name.
  	 * @private
  	 */
  	function clearEvent(emitter, evt) {
  	  if (--emitter._eventsCount === 0) emitter._events = new Events();
  	  else delete emitter._events[evt];
  	}

  	/**
  	 * Minimal `EventEmitter` interface that is molded against the Node.js
  	 * `EventEmitter` interface.
  	 *
  	 * @constructor
  	 * @public
  	 */
  	function EventEmitter() {
  	  this._events = new Events();
  	  this._eventsCount = 0;
  	}

  	/**
  	 * Return an array listing the events for which the emitter has registered
  	 * listeners.
  	 *
  	 * @returns {Array}
  	 * @public
  	 */
  	EventEmitter.prototype.eventNames = function eventNames() {
  	  var names = []
  	    , events
  	    , name;

  	  if (this._eventsCount === 0) return names;

  	  for (name in (events = this._events)) {
  	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  	  }

  	  if (Object.getOwnPropertySymbols) {
  	    return names.concat(Object.getOwnPropertySymbols(events));
  	  }

  	  return names;
  	};

  	/**
  	 * Return the listeners registered for a given event.
  	 *
  	 * @param {(String|Symbol)} event The event name.
  	 * @returns {Array} The registered listeners.
  	 * @public
  	 */
  	EventEmitter.prototype.listeners = function listeners(event) {
  	  var evt = prefix ? prefix + event : event
  	    , handlers = this._events[evt];

  	  if (!handlers) return [];
  	  if (handlers.fn) return [handlers.fn];

  	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
  	    ee[i] = handlers[i].fn;
  	  }

  	  return ee;
  	};

  	/**
  	 * Return the number of listeners listening to a given event.
  	 *
  	 * @param {(String|Symbol)} event The event name.
  	 * @returns {Number} The number of listeners.
  	 * @public
  	 */
  	EventEmitter.prototype.listenerCount = function listenerCount(event) {
  	  var evt = prefix ? prefix + event : event
  	    , listeners = this._events[evt];

  	  if (!listeners) return 0;
  	  if (listeners.fn) return 1;
  	  return listeners.length;
  	};

  	/**
  	 * Calls each of the listeners registered for a given event.
  	 *
  	 * @param {(String|Symbol)} event The event name.
  	 * @returns {Boolean} `true` if the event had listeners, else `false`.
  	 * @public
  	 */
  	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  	  var evt = prefix ? prefix + event : event;

  	  if (!this._events[evt]) return false;

  	  var listeners = this._events[evt]
  	    , len = arguments.length
  	    , args
  	    , i;

  	  if (listeners.fn) {
  	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

  	    switch (len) {
  	      case 1: return listeners.fn.call(listeners.context), true;
  	      case 2: return listeners.fn.call(listeners.context, a1), true;
  	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
  	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
  	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
  	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
  	    }

  	    for (i = 1, args = new Array(len -1); i < len; i++) {
  	      args[i - 1] = arguments[i];
  	    }

  	    listeners.fn.apply(listeners.context, args);
  	  } else {
  	    var length = listeners.length
  	      , j;

  	    for (i = 0; i < length; i++) {
  	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

  	      switch (len) {
  	        case 1: listeners[i].fn.call(listeners[i].context); break;
  	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
  	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
  	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
  	        default:
  	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
  	            args[j - 1] = arguments[j];
  	          }

  	          listeners[i].fn.apply(listeners[i].context, args);
  	      }
  	    }
  	  }

  	  return true;
  	};

  	/**
  	 * Add a listener for a given event.
  	 *
  	 * @param {(String|Symbol)} event The event name.
  	 * @param {Function} fn The listener function.
  	 * @param {*} [context=this] The context to invoke the listener with.
  	 * @returns {EventEmitter} `this`.
  	 * @public
  	 */
  	EventEmitter.prototype.on = function on(event, fn, context) {
  	  return addListener(this, event, fn, context, false);
  	};

  	/**
  	 * Add a one-time listener for a given event.
  	 *
  	 * @param {(String|Symbol)} event The event name.
  	 * @param {Function} fn The listener function.
  	 * @param {*} [context=this] The context to invoke the listener with.
  	 * @returns {EventEmitter} `this`.
  	 * @public
  	 */
  	EventEmitter.prototype.once = function once(event, fn, context) {
  	  return addListener(this, event, fn, context, true);
  	};

  	/**
  	 * Remove the listeners of a given event.
  	 *
  	 * @param {(String|Symbol)} event The event name.
  	 * @param {Function} fn Only remove the listeners that match this function.
  	 * @param {*} context Only remove the listeners that have this context.
  	 * @param {Boolean} once Only remove one-time listeners.
  	 * @returns {EventEmitter} `this`.
  	 * @public
  	 */
  	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  	  var evt = prefix ? prefix + event : event;

  	  if (!this._events[evt]) return this;
  	  if (!fn) {
  	    clearEvent(this, evt);
  	    return this;
  	  }

  	  var listeners = this._events[evt];

  	  if (listeners.fn) {
  	    if (
  	      listeners.fn === fn &&
  	      (!once || listeners.once) &&
  	      (!context || listeners.context === context)
  	    ) {
  	      clearEvent(this, evt);
  	    }
  	  } else {
  	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
  	      if (
  	        listeners[i].fn !== fn ||
  	        (once && !listeners[i].once) ||
  	        (context && listeners[i].context !== context)
  	      ) {
  	        events.push(listeners[i]);
  	      }
  	    }

  	    //
  	    // Reset the array, or remove it completely if we have no more listeners.
  	    //
  	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
  	    else clearEvent(this, evt);
  	  }

  	  return this;
  	};

  	/**
  	 * Remove all listeners, or those of the specified event.
  	 *
  	 * @param {(String|Symbol)} [event] The event name.
  	 * @returns {EventEmitter} `this`.
  	 * @public
  	 */
  	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  	  var evt;

  	  if (event) {
  	    evt = prefix ? prefix + event : event;
  	    if (this._events[evt]) clearEvent(this, evt);
  	  } else {
  	    this._events = new Events();
  	    this._eventsCount = 0;
  	  }

  	  return this;
  	};

  	//
  	// Alias methods names because people roll like that.
  	//
  	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  	//
  	// Expose the prefix.
  	//
  	EventEmitter.prefixed = prefix;

  	//
  	// Allow `EventEmitter` to be imported as module namespace.
  	//
  	EventEmitter.EventEmitter = EventEmitter;

  	//
  	// Expose the module.
  	//
  	{
  	  module.exports = EventEmitter;
  	}
  } (eventemitter3));

  var EventEmitter = eventemitter3.exports;

  var earcut$1 = {exports: {}};

  earcut$1.exports = earcut;
  earcut$1.exports.default = earcut;

  function earcut(data, holeIndices, dim) {

      dim = dim || 2;

      var hasHoles = holeIndices && holeIndices.length,
          outerLen = hasHoles ? holeIndices[0] * dim : data.length,
          outerNode = linkedList(data, 0, outerLen, dim, true),
          triangles = [];

      if (!outerNode || outerNode.next === outerNode.prev) return triangles;

      var minX, minY, maxX, maxY, x, y, invSize;

      if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

      // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
      if (data.length > 80 * dim) {
          minX = maxX = data[0];
          minY = maxY = data[1];

          for (var i = dim; i < outerLen; i += dim) {
              x = data[i];
              y = data[i + 1];
              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
          }

          // minX, minY and invSize are later used to transform coords into integers for z-order calculation
          invSize = Math.max(maxX - minX, maxY - minY);
          invSize = invSize !== 0 ? 32767 / invSize : 0;
      }

      earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);

      return triangles;
  }

  // create a circular doubly linked list from polygon points in the specified winding order
  function linkedList(data, start, end, dim, clockwise) {
      var i, last;

      if (clockwise === (signedArea(data, start, end, dim) > 0)) {
          for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
      } else {
          for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
      }

      if (last && equals(last, last.next)) {
          removeNode(last);
          last = last.next;
      }

      return last;
  }

  // eliminate colinear or duplicate points
  function filterPoints(start, end) {
      if (!start) return start;
      if (!end) end = start;

      var p = start,
          again;
      do {
          again = false;

          if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
              removeNode(p);
              p = end = p.prev;
              if (p === p.next) break;
              again = true;

          } else {
              p = p.next;
          }
      } while (again || p !== end);

      return end;
  }

  // main ear slicing loop which triangulates a polygon (given as a linked list)
  function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
      if (!ear) return;

      // interlink polygon nodes in z-order
      if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

      var stop = ear,
          prev, next;

      // iterate through ears, slicing them one by one
      while (ear.prev !== ear.next) {
          prev = ear.prev;
          next = ear.next;

          if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
              // cut off the triangle
              triangles.push(prev.i / dim | 0);
              triangles.push(ear.i / dim | 0);
              triangles.push(next.i / dim | 0);

              removeNode(ear);

              // skipping the next vertex leads to less sliver triangles
              ear = next.next;
              stop = next.next;

              continue;
          }

          ear = next;

          // if we looped through the whole remaining polygon and can't find any more ears
          if (ear === stop) {
              // try filtering points and slicing again
              if (!pass) {
                  earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

              // if this didn't work, try curing all small self-intersections locally
              } else if (pass === 1) {
                  ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
                  earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

              // as a last resort, try splitting the remaining polygon into two
              } else if (pass === 2) {
                  splitEarcut(ear, triangles, dim, minX, minY, invSize);
              }

              break;
          }
      }
  }

  // check whether a polygon node forms a valid ear with adjacent nodes
  function isEar(ear) {
      var a = ear.prev,
          b = ear,
          c = ear.next;

      if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

      // now make sure we don't have other points inside the potential ear
      var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;

      // triangle bbox; min & max are calculated like this for speed
      var x0 = ax < bx ? (ax < cx ? ax : cx) : (bx < cx ? bx : cx),
          y0 = ay < by ? (ay < cy ? ay : cy) : (by < cy ? by : cy),
          x1 = ax > bx ? (ax > cx ? ax : cx) : (bx > cx ? bx : cx),
          y1 = ay > by ? (ay > cy ? ay : cy) : (by > cy ? by : cy);

      var p = c.next;
      while (p !== a) {
          if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 &&
              pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) &&
              area(p.prev, p, p.next) >= 0) return false;
          p = p.next;
      }

      return true;
  }

  function isEarHashed(ear, minX, minY, invSize) {
      var a = ear.prev,
          b = ear,
          c = ear.next;

      if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

      var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;

      // triangle bbox; min & max are calculated like this for speed
      var x0 = ax < bx ? (ax < cx ? ax : cx) : (bx < cx ? bx : cx),
          y0 = ay < by ? (ay < cy ? ay : cy) : (by < cy ? by : cy),
          x1 = ax > bx ? (ax > cx ? ax : cx) : (bx > cx ? bx : cx),
          y1 = ay > by ? (ay > cy ? ay : cy) : (by > cy ? by : cy);

      // z-order range for the current triangle bbox;
      var minZ = zOrder(x0, y0, minX, minY, invSize),
          maxZ = zOrder(x1, y1, minX, minY, invSize);

      var p = ear.prevZ,
          n = ear.nextZ;

      // look for points inside the triangle in both directions
      while (p && p.z >= minZ && n && n.z <= maxZ) {
          if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c &&
              pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
          p = p.prevZ;

          if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c &&
              pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
          n = n.nextZ;
      }

      // look for remaining points in decreasing z-order
      while (p && p.z >= minZ) {
          if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c &&
              pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
          p = p.prevZ;
      }

      // look for remaining points in increasing z-order
      while (n && n.z <= maxZ) {
          if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c &&
              pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
          n = n.nextZ;
      }

      return true;
  }

  // go through all polygon nodes and cure small local self-intersections
  function cureLocalIntersections(start, triangles, dim) {
      var p = start;
      do {
          var a = p.prev,
              b = p.next.next;

          if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

              triangles.push(a.i / dim | 0);
              triangles.push(p.i / dim | 0);
              triangles.push(b.i / dim | 0);

              // remove two nodes involved
              removeNode(p);
              removeNode(p.next);

              p = start = b;
          }
          p = p.next;
      } while (p !== start);

      return filterPoints(p);
  }

  // try splitting polygon into two and triangulate them independently
  function splitEarcut(start, triangles, dim, minX, minY, invSize) {
      // look for a valid diagonal that divides the polygon into two
      var a = start;
      do {
          var b = a.next.next;
          while (b !== a.prev) {
              if (a.i !== b.i && isValidDiagonal(a, b)) {
                  // split the polygon in two by the diagonal
                  var c = splitPolygon(a, b);

                  // filter colinear points around the cuts
                  a = filterPoints(a, a.next);
                  c = filterPoints(c, c.next);

                  // run earcut on each half
                  earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
                  earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
                  return;
              }
              b = b.next;
          }
          a = a.next;
      } while (a !== start);
  }

  // link every hole into the outer loop, producing a single-ring polygon without holes
  function eliminateHoles(data, holeIndices, outerNode, dim) {
      var queue = [],
          i, len, start, end, list;

      for (i = 0, len = holeIndices.length; i < len; i++) {
          start = holeIndices[i] * dim;
          end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
          list = linkedList(data, start, end, dim, false);
          if (list === list.next) list.steiner = true;
          queue.push(getLeftmost(list));
      }

      queue.sort(compareX);

      // process holes from left to right
      for (i = 0; i < queue.length; i++) {
          outerNode = eliminateHole(queue[i], outerNode);
      }

      return outerNode;
  }

  function compareX(a, b) {
      return a.x - b.x;
  }

  // find a bridge between vertices that connects hole with an outer ring and and link it
  function eliminateHole(hole, outerNode) {
      var bridge = findHoleBridge(hole, outerNode);
      if (!bridge) {
          return outerNode;
      }

      var bridgeReverse = splitPolygon(bridge, hole);

      // filter collinear points around the cuts
      filterPoints(bridgeReverse, bridgeReverse.next);
      return filterPoints(bridge, bridge.next);
  }

  // David Eberly's algorithm for finding a bridge between hole and outer polygon
  function findHoleBridge(hole, outerNode) {
      var p = outerNode,
          hx = hole.x,
          hy = hole.y,
          qx = -Infinity,
          m;

      // find a segment intersected by a ray from the hole's leftmost point to the left;
      // segment's endpoint with lesser x will be potential connection point
      do {
          if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
              var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
              if (x <= hx && x > qx) {
                  qx = x;
                  m = p.x < p.next.x ? p : p.next;
                  if (x === hx) return m; // hole touches outer segment; pick leftmost endpoint
              }
          }
          p = p.next;
      } while (p !== outerNode);

      if (!m) return null;

      // look for points inside the triangle of hole point, segment intersection and endpoint;
      // if there are no points found, we have a valid connection;
      // otherwise choose the point of the minimum angle with the ray as connection point

      var stop = m,
          mx = m.x,
          my = m.y,
          tanMin = Infinity,
          tan;

      p = m;

      do {
          if (hx >= p.x && p.x >= mx && hx !== p.x &&
                  pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

              tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

              if (locallyInside(p, hole) &&
                  (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
                  m = p;
                  tanMin = tan;
              }
          }

          p = p.next;
      } while (p !== stop);

      return m;
  }

  // whether sector in vertex m contains sector in vertex p in the same coordinates
  function sectorContainsSector(m, p) {
      return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
  }

  // interlink polygon nodes in z-order
  function indexCurve(start, minX, minY, invSize) {
      var p = start;
      do {
          if (p.z === 0) p.z = zOrder(p.x, p.y, minX, minY, invSize);
          p.prevZ = p.prev;
          p.nextZ = p.next;
          p = p.next;
      } while (p !== start);

      p.prevZ.nextZ = null;
      p.prevZ = null;

      sortLinked(p);
  }

  // Simon Tatham's linked list merge sort algorithm
  // http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
  function sortLinked(list) {
      var i, p, q, e, tail, numMerges, pSize, qSize,
          inSize = 1;

      do {
          p = list;
          list = null;
          tail = null;
          numMerges = 0;

          while (p) {
              numMerges++;
              q = p;
              pSize = 0;
              for (i = 0; i < inSize; i++) {
                  pSize++;
                  q = q.nextZ;
                  if (!q) break;
              }
              qSize = inSize;

              while (pSize > 0 || (qSize > 0 && q)) {

                  if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                      e = p;
                      p = p.nextZ;
                      pSize--;
                  } else {
                      e = q;
                      q = q.nextZ;
                      qSize--;
                  }

                  if (tail) tail.nextZ = e;
                  else list = e;

                  e.prevZ = tail;
                  tail = e;
              }

              p = q;
          }

          tail.nextZ = null;
          inSize *= 2;

      } while (numMerges > 1);

      return list;
  }

  // z-order of a point given coords and inverse of the longer side of data bbox
  function zOrder(x, y, minX, minY, invSize) {
      // coords are transformed into non-negative 15-bit integer range
      x = (x - minX) * invSize | 0;
      y = (y - minY) * invSize | 0;

      x = (x | (x << 8)) & 0x00FF00FF;
      x = (x | (x << 4)) & 0x0F0F0F0F;
      x = (x | (x << 2)) & 0x33333333;
      x = (x | (x << 1)) & 0x55555555;

      y = (y | (y << 8)) & 0x00FF00FF;
      y = (y | (y << 4)) & 0x0F0F0F0F;
      y = (y | (y << 2)) & 0x33333333;
      y = (y | (y << 1)) & 0x55555555;

      return x | (y << 1);
  }

  // find the leftmost node of a polygon ring
  function getLeftmost(start) {
      var p = start,
          leftmost = start;
      do {
          if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
          p = p.next;
      } while (p !== start);

      return leftmost;
  }

  // check if a point lies within a convex triangle
  function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
      return (cx - px) * (ay - py) >= (ax - px) * (cy - py) &&
             (ax - px) * (by - py) >= (bx - px) * (ay - py) &&
             (bx - px) * (cy - py) >= (cx - px) * (by - py);
  }

  // check if a diagonal between two polygon nodes is valid (lies in polygon interior)
  function isValidDiagonal(a, b) {
      return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
             (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
              (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
              equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
  }

  // signed area of a triangle
  function area(p, q, r) {
      return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
  }

  // check if two points are equal
  function equals(p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
  }

  // check if two segments intersect
  function intersects(p1, q1, p2, q2) {
      var o1 = sign(area(p1, q1, p2));
      var o2 = sign(area(p1, q1, q2));
      var o3 = sign(area(p2, q2, p1));
      var o4 = sign(area(p2, q2, q1));

      if (o1 !== o2 && o3 !== o4) return true; // general case

      if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
      if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
      if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
      if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

      return false;
  }

  // for collinear points p, q, r, check if point q lies on segment pr
  function onSegment(p, q, r) {
      return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
  }

  function sign(num) {
      return num > 0 ? 1 : num < 0 ? -1 : 0;
  }

  // check if a polygon diagonal intersects any polygon segments
  function intersectsPolygon(a, b) {
      var p = a;
      do {
          if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                  intersects(p, p.next, a, b)) return true;
          p = p.next;
      } while (p !== a);

      return false;
  }

  // check if a polygon diagonal is locally inside the polygon
  function locallyInside(a, b) {
      return area(a.prev, a, a.next) < 0 ?
          area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
          area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
  }

  // check if the middle point of a polygon diagonal is inside the polygon
  function middleInside(a, b) {
      var p = a,
          inside = false,
          px = (a.x + b.x) / 2,
          py = (a.y + b.y) / 2;
      do {
          if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                  (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
              inside = !inside;
          p = p.next;
      } while (p !== a);

      return inside;
  }

  // link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
  // if one belongs to the outer ring and another to a hole, it merges it into a single ring
  function splitPolygon(a, b) {
      var a2 = new Node(a.i, a.x, a.y),
          b2 = new Node(b.i, b.x, b.y),
          an = a.next,
          bp = b.prev;

      a.next = b;
      b.prev = a;

      a2.next = an;
      an.prev = a2;

      b2.next = a2;
      a2.prev = b2;

      bp.next = b2;
      b2.prev = bp;

      return b2;
  }

  // create a node and optionally link it with previous one (in a circular doubly linked list)
  function insertNode(i, x, y, last) {
      var p = new Node(i, x, y);

      if (!last) {
          p.prev = p;
          p.next = p;

      } else {
          p.next = last.next;
          p.prev = last;
          last.next.prev = p;
          last.next = p;
      }
      return p;
  }

  function removeNode(p) {
      p.next.prev = p.prev;
      p.prev.next = p.next;

      if (p.prevZ) p.prevZ.nextZ = p.nextZ;
      if (p.nextZ) p.nextZ.prevZ = p.prevZ;
  }

  function Node(i, x, y) {
      // vertex index in coordinates array
      this.i = i;

      // vertex coordinates
      this.x = x;
      this.y = y;

      // previous and next vertex nodes in a polygon ring
      this.prev = null;
      this.next = null;

      // z-order curve value
      this.z = 0;

      // previous and next nodes in z-order
      this.prevZ = null;
      this.nextZ = null;

      // indicates whether this is a steiner point
      this.steiner = false;
  }

  // return a percentage difference between the polygon area and its triangulation area;
  // used to verify correctness of triangulation
  earcut.deviation = function (data, holeIndices, dim, triangles) {
      var hasHoles = holeIndices && holeIndices.length;
      var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

      var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
      if (hasHoles) {
          for (var i = 0, len = holeIndices.length; i < len; i++) {
              var start = holeIndices[i] * dim;
              var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
              polygonArea -= Math.abs(signedArea(data, start, end, dim));
          }
      }

      var trianglesArea = 0;
      for (i = 0; i < triangles.length; i += 3) {
          var a = triangles[i] * dim;
          var b = triangles[i + 1] * dim;
          var c = triangles[i + 2] * dim;
          trianglesArea += Math.abs(
              (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
              (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
      }

      return polygonArea === 0 && trianglesArea === 0 ? 0 :
          Math.abs((trianglesArea - polygonArea) / polygonArea);
  };

  function signedArea(data, start, end, dim) {
      var sum = 0;
      for (var i = start, j = end - dim; i < end; i += dim) {
          sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
          j = i;
      }
      return sum;
  }

  // turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
  earcut.flatten = function (data) {
      var dim = data[0][0].length,
          result = {vertices: [], holes: [], dimensions: dim},
          holeIndex = 0;

      for (var i = 0; i < data.length; i++) {
          for (var j = 0; j < data[i].length; j++) {
              for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
          }
          if (i > 0) {
              holeIndex += data[i - 1].length;
              result.holes.push(holeIndex);
          }
      }
      return result;
  };

  var punycode$1 = {exports: {}};

  /*! https://mths.be/punycode v1.3.2 by @mathias */

  (function (module, exports) {
  (function(root) {

  		/** Detect free variables */
  		var freeExports = exports &&
  			!exports.nodeType && exports;
  		var freeModule = module &&
  			!module.nodeType && module;
  		var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
  		if (
  			freeGlobal.global === freeGlobal ||
  			freeGlobal.window === freeGlobal ||
  			freeGlobal.self === freeGlobal
  		) {
  			root = freeGlobal;
  		}

  		/**
  		 * The `punycode` object.
  		 * @name punycode
  		 * @type Object
  		 */
  		var punycode,

  		/** Highest positive signed 32-bit float value */
  		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

  		/** Bootstring parameters */
  		base = 36,
  		tMin = 1,
  		tMax = 26,
  		skew = 38,
  		damp = 700,
  		initialBias = 72,
  		initialN = 128, // 0x80
  		delimiter = '-', // '\x2D'

  		/** Regular expressions */
  		regexPunycode = /^xn--/,
  		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
  		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

  		/** Error messages */
  		errors = {
  			'overflow': 'Overflow: input needs wider integers to process',
  			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
  			'invalid-input': 'Invalid input'
  		},

  		/** Convenience shortcuts */
  		baseMinusTMin = base - tMin,
  		floor = Math.floor,
  		stringFromCharCode = String.fromCharCode,

  		/** Temporary variable */
  		key;

  		/*--------------------------------------------------------------------------*/

  		/**
  		 * A generic error utility function.
  		 * @private
  		 * @param {String} type The error type.
  		 * @returns {Error} Throws a `RangeError` with the applicable error message.
  		 */
  		function error(type) {
  			throw RangeError(errors[type]);
  		}

  		/**
  		 * A generic `Array#map` utility function.
  		 * @private
  		 * @param {Array} array The array to iterate over.
  		 * @param {Function} callback The function that gets called for every array
  		 * item.
  		 * @returns {Array} A new array of values returned by the callback function.
  		 */
  		function map(array, fn) {
  			var length = array.length;
  			var result = [];
  			while (length--) {
  				result[length] = fn(array[length]);
  			}
  			return result;
  		}

  		/**
  		 * A simple `Array#map`-like wrapper to work with domain name strings or email
  		 * addresses.
  		 * @private
  		 * @param {String} domain The domain name or email address.
  		 * @param {Function} callback The function that gets called for every
  		 * character.
  		 * @returns {Array} A new string of characters returned by the callback
  		 * function.
  		 */
  		function mapDomain(string, fn) {
  			var parts = string.split('@');
  			var result = '';
  			if (parts.length > 1) {
  				// In email addresses, only the domain name should be punycoded. Leave
  				// the local part (i.e. everything up to `@`) intact.
  				result = parts[0] + '@';
  				string = parts[1];
  			}
  			// Avoid `split(regex)` for IE8 compatibility. See #17.
  			string = string.replace(regexSeparators, '\x2E');
  			var labels = string.split('.');
  			var encoded = map(labels, fn).join('.');
  			return result + encoded;
  		}

  		/**
  		 * Creates an array containing the numeric code points of each Unicode
  		 * character in the string. While JavaScript uses UCS-2 internally,
  		 * this function will convert a pair of surrogate halves (each of which
  		 * UCS-2 exposes as separate characters) into a single code point,
  		 * matching UTF-16.
  		 * @see `punycode.ucs2.encode`
  		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
  		 * @memberOf punycode.ucs2
  		 * @name decode
  		 * @param {String} string The Unicode input string (UCS-2).
  		 * @returns {Array} The new array of code points.
  		 */
  		function ucs2decode(string) {
  			var output = [],
  			    counter = 0,
  			    length = string.length,
  			    value,
  			    extra;
  			while (counter < length) {
  				value = string.charCodeAt(counter++);
  				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
  					// high surrogate, and there is a next character
  					extra = string.charCodeAt(counter++);
  					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
  						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
  					} else {
  						// unmatched surrogate; only append this code unit, in case the next
  						// code unit is the high surrogate of a surrogate pair
  						output.push(value);
  						counter--;
  					}
  				} else {
  					output.push(value);
  				}
  			}
  			return output;
  		}

  		/**
  		 * Creates a string based on an array of numeric code points.
  		 * @see `punycode.ucs2.decode`
  		 * @memberOf punycode.ucs2
  		 * @name encode
  		 * @param {Array} codePoints The array of numeric code points.
  		 * @returns {String} The new Unicode string (UCS-2).
  		 */
  		function ucs2encode(array) {
  			return map(array, function(value) {
  				var output = '';
  				if (value > 0xFFFF) {
  					value -= 0x10000;
  					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
  					value = 0xDC00 | value & 0x3FF;
  				}
  				output += stringFromCharCode(value);
  				return output;
  			}).join('');
  		}

  		/**
  		 * Converts a basic code point into a digit/integer.
  		 * @see `digitToBasic()`
  		 * @private
  		 * @param {Number} codePoint The basic numeric code point value.
  		 * @returns {Number} The numeric value of a basic code point (for use in
  		 * representing integers) in the range `0` to `base - 1`, or `base` if
  		 * the code point does not represent a value.
  		 */
  		function basicToDigit(codePoint) {
  			if (codePoint - 48 < 10) {
  				return codePoint - 22;
  			}
  			if (codePoint - 65 < 26) {
  				return codePoint - 65;
  			}
  			if (codePoint - 97 < 26) {
  				return codePoint - 97;
  			}
  			return base;
  		}

  		/**
  		 * Converts a digit/integer into a basic code point.
  		 * @see `basicToDigit()`
  		 * @private
  		 * @param {Number} digit The numeric value of a basic code point.
  		 * @returns {Number} The basic code point whose value (when used for
  		 * representing integers) is `digit`, which needs to be in the range
  		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
  		 * used; else, the lowercase form is used. The behavior is undefined
  		 * if `flag` is non-zero and `digit` has no uppercase form.
  		 */
  		function digitToBasic(digit, flag) {
  			//  0..25 map to ASCII a..z or A..Z
  			// 26..35 map to ASCII 0..9
  			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  		}

  		/**
  		 * Bias adaptation function as per section 3.4 of RFC 3492.
  		 * http://tools.ietf.org/html/rfc3492#section-3.4
  		 * @private
  		 */
  		function adapt(delta, numPoints, firstTime) {
  			var k = 0;
  			delta = firstTime ? floor(delta / damp) : delta >> 1;
  			delta += floor(delta / numPoints);
  			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
  				delta = floor(delta / baseMinusTMin);
  			}
  			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  		}

  		/**
  		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
  		 * symbols.
  		 * @memberOf punycode
  		 * @param {String} input The Punycode string of ASCII-only symbols.
  		 * @returns {String} The resulting string of Unicode symbols.
  		 */
  		function decode(input) {
  			// Don't use UCS-2
  			var output = [],
  			    inputLength = input.length,
  			    out,
  			    i = 0,
  			    n = initialN,
  			    bias = initialBias,
  			    basic,
  			    j,
  			    index,
  			    oldi,
  			    w,
  			    k,
  			    digit,
  			    t,
  			    /** Cached calculation results */
  			    baseMinusT;

  			// Handle the basic code points: let `basic` be the number of input code
  			// points before the last delimiter, or `0` if there is none, then copy
  			// the first basic code points to the output.

  			basic = input.lastIndexOf(delimiter);
  			if (basic < 0) {
  				basic = 0;
  			}

  			for (j = 0; j < basic; ++j) {
  				// if it's not a basic code point
  				if (input.charCodeAt(j) >= 0x80) {
  					error('not-basic');
  				}
  				output.push(input.charCodeAt(j));
  			}

  			// Main decoding loop: start just after the last delimiter if any basic code
  			// points were copied; start at the beginning otherwise.

  			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

  				// `index` is the index of the next character to be consumed.
  				// Decode a generalized variable-length integer into `delta`,
  				// which gets added to `i`. The overflow checking is easier
  				// if we increase `i` as we go, then subtract off its starting
  				// value at the end to obtain `delta`.
  				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

  					if (index >= inputLength) {
  						error('invalid-input');
  					}

  					digit = basicToDigit(input.charCodeAt(index++));

  					if (digit >= base || digit > floor((maxInt - i) / w)) {
  						error('overflow');
  					}

  					i += digit * w;
  					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

  					if (digit < t) {
  						break;
  					}

  					baseMinusT = base - t;
  					if (w > floor(maxInt / baseMinusT)) {
  						error('overflow');
  					}

  					w *= baseMinusT;

  				}

  				out = output.length + 1;
  				bias = adapt(i - oldi, out, oldi == 0);

  				// `i` was supposed to wrap around from `out` to `0`,
  				// incrementing `n` each time, so we'll fix that now:
  				if (floor(i / out) > maxInt - n) {
  					error('overflow');
  				}

  				n += floor(i / out);
  				i %= out;

  				// Insert `n` at position `i` of the output
  				output.splice(i++, 0, n);

  			}

  			return ucs2encode(output);
  		}

  		/**
  		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
  		 * Punycode string of ASCII-only symbols.
  		 * @memberOf punycode
  		 * @param {String} input The string of Unicode symbols.
  		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
  		 */
  		function encode(input) {
  			var n,
  			    delta,
  			    handledCPCount,
  			    basicLength,
  			    bias,
  			    j,
  			    m,
  			    q,
  			    k,
  			    t,
  			    currentValue,
  			    output = [],
  			    /** `inputLength` will hold the number of code points in `input`. */
  			    inputLength,
  			    /** Cached calculation results */
  			    handledCPCountPlusOne,
  			    baseMinusT,
  			    qMinusT;

  			// Convert the input in UCS-2 to Unicode
  			input = ucs2decode(input);

  			// Cache the length
  			inputLength = input.length;

  			// Initialize the state
  			n = initialN;
  			delta = 0;
  			bias = initialBias;

  			// Handle the basic code points
  			for (j = 0; j < inputLength; ++j) {
  				currentValue = input[j];
  				if (currentValue < 0x80) {
  					output.push(stringFromCharCode(currentValue));
  				}
  			}

  			handledCPCount = basicLength = output.length;

  			// `handledCPCount` is the number of code points that have been handled;
  			// `basicLength` is the number of basic code points.

  			// Finish the basic string - if it is not empty - with a delimiter
  			if (basicLength) {
  				output.push(delimiter);
  			}

  			// Main encoding loop:
  			while (handledCPCount < inputLength) {

  				// All non-basic code points < n have been handled already. Find the next
  				// larger one:
  				for (m = maxInt, j = 0; j < inputLength; ++j) {
  					currentValue = input[j];
  					if (currentValue >= n && currentValue < m) {
  						m = currentValue;
  					}
  				}

  				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
  				// but guard against overflow
  				handledCPCountPlusOne = handledCPCount + 1;
  				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
  					error('overflow');
  				}

  				delta += (m - n) * handledCPCountPlusOne;
  				n = m;

  				for (j = 0; j < inputLength; ++j) {
  					currentValue = input[j];

  					if (currentValue < n && ++delta > maxInt) {
  						error('overflow');
  					}

  					if (currentValue == n) {
  						// Represent delta as a generalized variable-length integer
  						for (q = delta, k = base; /* no condition */; k += base) {
  							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
  							if (q < t) {
  								break;
  							}
  							qMinusT = q - t;
  							baseMinusT = base - t;
  							output.push(
  								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
  							);
  							q = floor(qMinusT / baseMinusT);
  						}

  						output.push(stringFromCharCode(digitToBasic(q, 0)));
  						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
  						delta = 0;
  						++handledCPCount;
  					}
  				}

  				++delta;
  				++n;

  			}
  			return output.join('');
  		}

  		/**
  		 * Converts a Punycode string representing a domain name or an email address
  		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
  		 * it doesn't matter if you call it on a string that has already been
  		 * converted to Unicode.
  		 * @memberOf punycode
  		 * @param {String} input The Punycoded domain name or email address to
  		 * convert to Unicode.
  		 * @returns {String} The Unicode representation of the given Punycode
  		 * string.
  		 */
  		function toUnicode(input) {
  			return mapDomain(input, function(string) {
  				return regexPunycode.test(string)
  					? decode(string.slice(4).toLowerCase())
  					: string;
  			});
  		}

  		/**
  		 * Converts a Unicode string representing a domain name or an email address to
  		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
  		 * i.e. it doesn't matter if you call it with a domain that's already in
  		 * ASCII.
  		 * @memberOf punycode
  		 * @param {String} input The domain name or email address to convert, as a
  		 * Unicode string.
  		 * @returns {String} The Punycode representation of the given domain name or
  		 * email address.
  		 */
  		function toASCII(input) {
  			return mapDomain(input, function(string) {
  				return regexNonASCII.test(string)
  					? 'xn--' + encode(string)
  					: string;
  			});
  		}

  		/*--------------------------------------------------------------------------*/

  		/** Define the public API */
  		punycode = {
  			/**
  			 * A string representing the current Punycode.js version number.
  			 * @memberOf punycode
  			 * @type String
  			 */
  			'version': '1.3.2',
  			/**
  			 * An object of methods to convert from JavaScript's internal character
  			 * representation (UCS-2) to Unicode code points, and back.
  			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
  			 * @memberOf punycode
  			 * @type Object
  			 */
  			'ucs2': {
  				'decode': ucs2decode,
  				'encode': ucs2encode
  			},
  			'decode': decode,
  			'encode': encode,
  			'toASCII': toASCII,
  			'toUnicode': toUnicode
  		};

  		/** Expose `punycode` */
  		// Some AMD build optimizers, like r.js, check for specific condition patterns
  		// like the following:
  		if (freeExports && freeModule) {
  			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
  				freeModule.exports = punycode;
  			} else { // in Narwhal or RingoJS v0.7.0-
  				for (key in punycode) {
  					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
  				}
  			}
  		} else { // in Rhino or a web browser
  			root.punycode = punycode;
  		}

  	}(commonjsGlobal));
  } (punycode$1, punycode$1.exports));

  var util$1 = {
    isString: function(arg) {
      return typeof(arg) === 'string';
    },
    isObject: function(arg) {
      return typeof(arg) === 'object' && arg !== null;
    },
    isNull: function(arg) {
      return arg === null;
    },
    isNullOrUndefined: function(arg) {
      return arg == null;
    }
  };

  var querystring$1 = {};

  // If obj.hasOwnProperty has been overridden, then calling
  // obj.hasOwnProperty(prop) will break.
  // See: https://github.com/joyent/node/issues/1707
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var decode = function(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};

    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }

    var regexp = /\+/g;
    qs = qs.split(sep);

    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }

    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }

    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr, vstr, k, v;

      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }

      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);

      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }

    return obj;
  };

  var stringifyPrimitive = function(v) {
    switch (typeof v) {
      case 'string':
        return v;

      case 'boolean':
        return v ? 'true' : 'false';

      case 'number':
        return isFinite(v) ? v : '';

      default:
        return '';
    }
  };

  var encode = function(obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }

    if (typeof obj === 'object') {
      return Object.keys(obj).map(function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (Array.isArray(obj[k])) {
          return obj[k].map(function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);

    }

    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq +
           encodeURIComponent(stringifyPrimitive(obj));
  };

  querystring$1.decode = querystring$1.parse = decode;
  querystring$1.encode = querystring$1.stringify = encode;

  var punycode = punycode$1.exports;
  var util = util$1;

  var parse = urlParse;
  var resolve = urlResolve;
  var format = urlFormat;

  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }

  // Reference: RFC 3986, RFC 1808, RFC 2396

  // define these here so at least they only have to be
  // compiled once on the first module load.
  var protocolPattern = /^([a-z0-9.+-]+:)/i,
      portPattern = /:[0-9]*$/,

      // Special case for a simple path URL
      simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

      // RFC 2396: characters reserved for delimiting URLs.
      // We actually just auto-escape these.
      delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

      // RFC 2396: characters not allowed for various reasons.
      unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

      // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
      autoEscape = ['\''].concat(unwise),
      // Characters that are never ever allowed in a hostname.
      // Note that any invalid chars are also handled, but these
      // are the ones that are *expected* to be seen, so we fast-path
      // them.
      nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
      hostEndingChars = ['/', '?', '#'],
      hostnameMaxLen = 255,
      hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
      hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      // protocols that can allow "unsafe" and "unwise" chars.
      unsafeProtocol = {
        'javascript': true,
        'javascript:': true
      },
      // protocols that never have a hostname.
      hostlessProtocol = {
        'javascript': true,
        'javascript:': true
      },
      // protocols that always contain a // bit.
      slashedProtocol = {
        'http': true,
        'https': true,
        'ftp': true,
        'gopher': true,
        'file': true,
        'http:': true,
        'https:': true,
        'ftp:': true,
        'gopher:': true,
        'file:': true
      },
      querystring = querystring$1;

  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && util.isObject(url) && url instanceof Url) return url;

    var u = new Url;
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }

  Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
    if (!util.isString(url)) {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    }

    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    var queryIndex = url.indexOf('?'),
        splitter =
            (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
        uSplit = url.split(splitter),
        slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, '/');
    url = uSplit.join(splitter);

    var rest = url;

    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();

    if (!slashesDenoteHost && url.split('#').length === 1) {
      // Try fast path regexp
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.path = rest;
        this.href = rest;
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
          if (parseQueryString) {
            this.query = querystring.parse(this.search.substr(1));
          } else {
            this.query = this.search.substr(1);
          }
        } else if (parseQueryString) {
          this.search = '';
          this.query = {};
        }
        return this;
      }
    }

    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }

    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === '//';
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }

    if (!hostlessProtocol[proto] &&
        (slashes || (proto && !slashedProtocol[proto]))) {

      // there's a hostname.
      // the first instance of /, ?, ;, or # ends the host.
      //
      // If there is an @ in the hostname, then non-host chars *are* allowed
      // to the left of the last @ sign, unless some host-ending character
      // comes *before* the @-sign.
      // URLs are obnoxious.
      //
      // ex:
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:c path:/?@c

      // v0.12 TODO(isaacs): This is not quite how Chrome does things.
      // Review our test case against browsers more comprehensively.

      // find the first instance of any hostEndingChars
      var hostEnd = -1;
      for (var i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
          hostEnd = hec;
      }

      // at this point, either we have an explicit point where the
      // auth portion cannot go past, or the last @ char is the decider.
      var auth, atSign;
      if (hostEnd === -1) {
        // atSign can be anywhere.
        atSign = rest.lastIndexOf('@');
      } else {
        // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf('@', hostEnd);
      }

      // Now we have a portion which is definitely the auth.
      // Pull that off.
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }

      // the host is the remaining to the left of the first non-host char
      hostEnd = -1;
      for (var i = 0; i < nonHostChars.length; i++) {
        var hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
          hostEnd = hec;
      }
      // if we still have not hit it, then the entire thing is a host.
      if (hostEnd === -1)
        hostEnd = rest.length;

      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);

      // pull out port.
      this.parseHost();

      // we've indicated that there is a hostname,
      // so even if it's empty, it has to be present.
      this.hostname = this.hostname || '';

      // if hostname begins with [ and ends with ]
      // assume that it's an IPv6 address.
      var ipv6Hostname = this.hostname[0] === '[' &&
          this.hostname[this.hostname.length - 1] === ']';

      // validate a little.
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) continue;
          if (!part.match(hostnamePartPattern)) {
            var newpart = '';
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                // we replace non-ASCII char with a temporary placeholder
                // we need this to make sure size of hostname is not
                // broken by replacing non-ASCII by nothing
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            }
            // we test again with ASCII char only
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = '/' + notHost.join('.') + rest;
              }
              this.hostname = validParts.join('.');
              break;
            }
          }
        }
      }

      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = '';
      } else {
        // hostnames are always lower case.
        this.hostname = this.hostname.toLowerCase();
      }

      if (!ipv6Hostname) {
        // IDNA Support: Returns a punycoded representation of "domain".
        // It only converts parts of the domain name that
        // have non-ASCII characters, i.e. it doesn't matter if
        // you call it with a domain that already is ASCII-only.
        this.hostname = punycode.toASCII(this.hostname);
      }

      var p = this.port ? ':' + this.port : '';
      var h = this.hostname || '';
      this.host = h + p;
      this.href += this.host;

      // strip [ and ] from the hostname
      // the host field still retains them, though
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== '/') {
          rest = '/' + rest;
        }
      }
    }

    // now rest is set to the post-host stuff.
    // chop off any delim chars.
    if (!unsafeProtocol[lowerProto]) {

      // First, make 100% sure that any "autoEscape" chars get
      // escaped, even if encodeURIComponent doesn't think they
      // need to be.
      for (var i = 0, l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1)
          continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }


    // chop off from the tail first.
    var hash = rest.indexOf('#');
    if (hash !== -1) {
      // got a fragment string.
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = querystring.parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      // no query string, but parseQueryString still requested
      this.search = '';
      this.query = {};
    }
    if (rest) this.pathname = rest;
    if (slashedProtocol[lowerProto] &&
        this.hostname && !this.pathname) {
      this.pathname = '/';
    }

    //to support http.request
    if (this.pathname || this.search) {
      var p = this.pathname || '';
      var s = this.search || '';
      this.path = p + s;
    }

    // finally, reconstruct the href based on what has been validated.
    this.href = this.format();
    return this;
  };

  // format a parsed object into a url string
  function urlFormat(obj) {
    // ensure it's an object, and not a string url.
    // If it's an obj, this is a no-op.
    // this way, you can call url_format() on strings
    // to clean up potentially wonky urls.
    if (util.isString(obj)) obj = urlParse(obj);
    if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
    return obj.format();
  }

  Url.prototype.format = function() {
    var auth = this.auth || '';
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ':');
      auth += '@';
    }

    var protocol = this.protocol || '',
        pathname = this.pathname || '',
        hash = this.hash || '',
        host = false,
        query = '';

    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(':') === -1 ?
          this.hostname :
          '[' + this.hostname + ']');
      if (this.port) {
        host += ':' + this.port;
      }
    }

    if (this.query &&
        util.isObject(this.query) &&
        Object.keys(this.query).length) {
      query = querystring.stringify(this.query);
    }

    var search = this.search || (query && ('?' + query)) || '';

    if (protocol && protocol.substr(-1) !== ':') protocol += ':';

    // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
    // unless they had them to begin with.
    if (this.slashes ||
        (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = '//' + (host || '');
      if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
    } else if (!host) {
      host = '';
    }

    if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
    if (search && search.charAt(0) !== '?') search = '?' + search;

    pathname = pathname.replace(/[?#]/g, function(match) {
      return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');

    return protocol + host + pathname + search + hash;
  };

  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }

  Url.prototype.resolve = function(relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };

  Url.prototype.resolveObject = function(relative) {
    if (util.isString(relative)) {
      var rel = new Url();
      rel.parse(relative, false, true);
      relative = rel;
    }

    var result = new Url();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }

    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;

    // if the relative url is empty, then there's nothing left to do here.
    if (relative.href === '') {
      result.href = result.format();
      return result;
    }

    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative.protocol) {
      // take everything except the protocol from relative
      var rkeys = Object.keys(relative);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if (rkey !== 'protocol')
          result[rkey] = relative[rkey];
      }

      //urlParse appends trailing / to urls like http://www.example.com
      if (slashedProtocol[result.protocol] &&
          result.hostname && !result.pathname) {
        result.path = result.pathname = '/';
      }

      result.href = result.format();
      return result;
    }

    if (relative.protocol && relative.protocol !== result.protocol) {
      // if it's a known url protocol, then changing
      // the protocol does weird things
      // first, if it's not file:, then we MUST have a host,
      // and if there was a path
      // to begin with, then we MUST have a path.
      // if it is file:, then the host is dropped,
      // because that's known to be hostless.
      // anything else is assumed to be absolute.
      if (!slashedProtocol[relative.protocol]) {
        var keys = Object.keys(relative);
        for (var v = 0; v < keys.length; v++) {
          var k = keys[v];
          result[k] = relative[k];
        }
        result.href = result.format();
        return result;
      }

      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || '').split('/');
        while (relPath.length && !(relative.host = relPath.shift()));
        if (!relative.host) relative.host = '';
        if (!relative.hostname) relative.hostname = '';
        if (relPath[0] !== '') relPath.unshift('');
        if (relPath.length < 2) relPath.unshift('');
        result.pathname = relPath.join('/');
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || '';
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      // to support http.request
      if (result.pathname || result.search) {
        var p = result.pathname || '';
        var s = result.search || '';
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }

    var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
        isRelAbs = (
            relative.host ||
            relative.pathname && relative.pathname.charAt(0) === '/'
        ),
        mustEndAbs = (isRelAbs || isSourceAbs ||
                      (result.host && relative.pathname)),
        removeAllDots = mustEndAbs,
        srcPath = result.pathname && result.pathname.split('/') || [],
        relPath = relative.pathname && relative.pathname.split('/') || [],
        psychotic = result.protocol && !slashedProtocol[result.protocol];

    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
      result.hostname = '';
      result.port = null;
      if (result.host) {
        if (srcPath[0] === '') srcPath[0] = result.host;
        else srcPath.unshift(result.host);
      }
      result.host = '';
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === '') relPath[0] = relative.host;
          else relPath.unshift(relative.host);
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }

    if (isRelAbs) {
      // it's absolute.
      result.host = (relative.host || relative.host === '') ?
                    relative.host : result.host;
      result.hostname = (relative.hostname || relative.hostname === '') ?
                        relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
      // fall through to the dot-handling below.
    } else if (relPath.length) {
      // it's relative
      // throw away the existing file, and take the new path instead.
      if (!srcPath) srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (!util.isNullOrUndefined(relative.search)) {
      // just pull out the search.
      // like href='?foo'.
      // Put this after the other two cases because it simplifies the booleans
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        //occationaly the auth can get stuck only in host
        //this especially happens in cases like
        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        var authInHost = result.host && result.host.indexOf('@') > 0 ?
                         result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      //to support http.request
      if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') +
                      (result.search ? result.search : '');
      }
      result.href = result.format();
      return result;
    }

    if (!srcPath.length) {
      // no path at all.  easy.
      // we've already handled the other stuff above.
      result.pathname = null;
      //to support http.request
      if (result.search) {
        result.path = '/' + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }

    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (
        (result.host || relative.host || srcPath.length > 1) &&
        (last === '.' || last === '..') || last === '');

    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last === '.') {
        srcPath.splice(i, 1);
      } else if (last === '..') {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift('..');
      }
    }

    if (mustEndAbs && srcPath[0] !== '' &&
        (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
      srcPath.unshift('');
    }

    if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
      srcPath.push('');
    }

    var isAbsolute = srcPath[0] === '' ||
        (srcPath[0] && srcPath[0].charAt(0) === '/');

    // put the host back
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? '' :
                                      srcPath.length ? srcPath.shift() : '';
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }

    mustEndAbs = mustEndAbs || (result.host && srcPath.length);

    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift('');
    }

    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else {
      result.pathname = srcPath.join('/');
    }

    //to support request.http
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };

  Url.prototype.parseHost = function() {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ':') {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
  };

  const url = {
    parse: parse,
    format: format,
    resolve: resolve
  };

  settings.RETINA_PREFIX = /@([0-9\.]+)x/;
  settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;

  let supported;
  function isWebGLSupported() {
    if (typeof supported === "undefined") {
      supported = function supported2() {
        const contextOptions = {
          stencil: true,
          failIfMajorPerformanceCaveat: settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
        };
        try {
          if (!settings.ADAPTER.getWebGLRenderingContext()) {
            return false;
          }
          const canvas = settings.ADAPTER.createCanvas();
          let gl = canvas.getContext("webgl", contextOptions) || canvas.getContext("experimental-webgl", contextOptions);
          const success = !!(gl && gl.getContextAttributes().stencil);
          if (gl) {
            const loseContext = gl.getExtension("WEBGL_lose_context");
            if (loseContext) {
              loseContext.loseContext();
            }
          }
          gl = null;
          return success;
        } catch (e) {
          return false;
        }
      }();
    }
    return supported;
  }

  var aliceblue = "#f0f8ff";
  var antiquewhite = "#faebd7";
  var aqua = "#00ffff";
  var aquamarine = "#7fffd4";
  var azure = "#f0ffff";
  var beige = "#f5f5dc";
  var bisque = "#ffe4c4";
  var black = "#000000";
  var blanchedalmond = "#ffebcd";
  var blue = "#0000ff";
  var blueviolet = "#8a2be2";
  var brown = "#a52a2a";
  var burlywood = "#deb887";
  var cadetblue = "#5f9ea0";
  var chartreuse = "#7fff00";
  var chocolate = "#d2691e";
  var coral = "#ff7f50";
  var cornflowerblue = "#6495ed";
  var cornsilk = "#fff8dc";
  var crimson = "#dc143c";
  var cyan = "#00ffff";
  var darkblue = "#00008b";
  var darkcyan = "#008b8b";
  var darkgoldenrod = "#b8860b";
  var darkgray = "#a9a9a9";
  var darkgreen = "#006400";
  var darkgrey = "#a9a9a9";
  var darkkhaki = "#bdb76b";
  var darkmagenta = "#8b008b";
  var darkolivegreen = "#556b2f";
  var darkorange = "#ff8c00";
  var darkorchid = "#9932cc";
  var darkred = "#8b0000";
  var darksalmon = "#e9967a";
  var darkseagreen = "#8fbc8f";
  var darkslateblue = "#483d8b";
  var darkslategray = "#2f4f4f";
  var darkslategrey = "#2f4f4f";
  var darkturquoise = "#00ced1";
  var darkviolet = "#9400d3";
  var deeppink = "#ff1493";
  var deepskyblue = "#00bfff";
  var dimgray = "#696969";
  var dimgrey = "#696969";
  var dodgerblue = "#1e90ff";
  var firebrick = "#b22222";
  var floralwhite = "#fffaf0";
  var forestgreen = "#228b22";
  var fuchsia = "#ff00ff";
  var gainsboro = "#dcdcdc";
  var ghostwhite = "#f8f8ff";
  var goldenrod = "#daa520";
  var gold = "#ffd700";
  var gray = "#808080";
  var green = "#008000";
  var greenyellow = "#adff2f";
  var grey = "#808080";
  var honeydew = "#f0fff0";
  var hotpink = "#ff69b4";
  var indianred = "#cd5c5c";
  var indigo = "#4b0082";
  var ivory = "#fffff0";
  var khaki = "#f0e68c";
  var lavenderblush = "#fff0f5";
  var lavender = "#e6e6fa";
  var lawngreen = "#7cfc00";
  var lemonchiffon = "#fffacd";
  var lightblue = "#add8e6";
  var lightcoral = "#f08080";
  var lightcyan = "#e0ffff";
  var lightgoldenrodyellow = "#fafad2";
  var lightgray = "#d3d3d3";
  var lightgreen = "#90ee90";
  var lightgrey = "#d3d3d3";
  var lightpink = "#ffb6c1";
  var lightsalmon = "#ffa07a";
  var lightseagreen = "#20b2aa";
  var lightskyblue = "#87cefa";
  var lightslategray = "#778899";
  var lightslategrey = "#778899";
  var lightsteelblue = "#b0c4de";
  var lightyellow = "#ffffe0";
  var lime = "#00ff00";
  var limegreen = "#32cd32";
  var linen = "#faf0e6";
  var magenta = "#ff00ff";
  var maroon = "#800000";
  var mediumaquamarine = "#66cdaa";
  var mediumblue = "#0000cd";
  var mediumorchid = "#ba55d3";
  var mediumpurple = "#9370db";
  var mediumseagreen = "#3cb371";
  var mediumslateblue = "#7b68ee";
  var mediumspringgreen = "#00fa9a";
  var mediumturquoise = "#48d1cc";
  var mediumvioletred = "#c71585";
  var midnightblue = "#191970";
  var mintcream = "#f5fffa";
  var mistyrose = "#ffe4e1";
  var moccasin = "#ffe4b5";
  var navajowhite = "#ffdead";
  var navy = "#000080";
  var oldlace = "#fdf5e6";
  var olive = "#808000";
  var olivedrab = "#6b8e23";
  var orange = "#ffa500";
  var orangered = "#ff4500";
  var orchid = "#da70d6";
  var palegoldenrod = "#eee8aa";
  var palegreen = "#98fb98";
  var paleturquoise = "#afeeee";
  var palevioletred = "#db7093";
  var papayawhip = "#ffefd5";
  var peachpuff = "#ffdab9";
  var peru = "#cd853f";
  var pink = "#ffc0cb";
  var plum = "#dda0dd";
  var powderblue = "#b0e0e6";
  var purple = "#800080";
  var rebeccapurple = "#663399";
  var red = "#ff0000";
  var rosybrown = "#bc8f8f";
  var royalblue = "#4169e1";
  var saddlebrown = "#8b4513";
  var salmon = "#fa8072";
  var sandybrown = "#f4a460";
  var seagreen = "#2e8b57";
  var seashell = "#fff5ee";
  var sienna = "#a0522d";
  var silver = "#c0c0c0";
  var skyblue = "#87ceeb";
  var slateblue = "#6a5acd";
  var slategray = "#708090";
  var slategrey = "#708090";
  var snow = "#fffafa";
  var springgreen = "#00ff7f";
  var steelblue = "#4682b4";
  var tan = "#d2b48c";
  var teal = "#008080";
  var thistle = "#d8bfd8";
  var tomato = "#ff6347";
  var turquoise = "#40e0d0";
  var violet = "#ee82ee";
  var wheat = "#f5deb3";
  var white = "#ffffff";
  var whitesmoke = "#f5f5f5";
  var yellow = "#ffff00";
  var yellowgreen = "#9acd32";
  var cssColorNames = {
  	aliceblue: aliceblue,
  	antiquewhite: antiquewhite,
  	aqua: aqua,
  	aquamarine: aquamarine,
  	azure: azure,
  	beige: beige,
  	bisque: bisque,
  	black: black,
  	blanchedalmond: blanchedalmond,
  	blue: blue,
  	blueviolet: blueviolet,
  	brown: brown,
  	burlywood: burlywood,
  	cadetblue: cadetblue,
  	chartreuse: chartreuse,
  	chocolate: chocolate,
  	coral: coral,
  	cornflowerblue: cornflowerblue,
  	cornsilk: cornsilk,
  	crimson: crimson,
  	cyan: cyan,
  	darkblue: darkblue,
  	darkcyan: darkcyan,
  	darkgoldenrod: darkgoldenrod,
  	darkgray: darkgray,
  	darkgreen: darkgreen,
  	darkgrey: darkgrey,
  	darkkhaki: darkkhaki,
  	darkmagenta: darkmagenta,
  	darkolivegreen: darkolivegreen,
  	darkorange: darkorange,
  	darkorchid: darkorchid,
  	darkred: darkred,
  	darksalmon: darksalmon,
  	darkseagreen: darkseagreen,
  	darkslateblue: darkslateblue,
  	darkslategray: darkslategray,
  	darkslategrey: darkslategrey,
  	darkturquoise: darkturquoise,
  	darkviolet: darkviolet,
  	deeppink: deeppink,
  	deepskyblue: deepskyblue,
  	dimgray: dimgray,
  	dimgrey: dimgrey,
  	dodgerblue: dodgerblue,
  	firebrick: firebrick,
  	floralwhite: floralwhite,
  	forestgreen: forestgreen,
  	fuchsia: fuchsia,
  	gainsboro: gainsboro,
  	ghostwhite: ghostwhite,
  	goldenrod: goldenrod,
  	gold: gold,
  	gray: gray,
  	green: green,
  	greenyellow: greenyellow,
  	grey: grey,
  	honeydew: honeydew,
  	hotpink: hotpink,
  	indianred: indianred,
  	indigo: indigo,
  	ivory: ivory,
  	khaki: khaki,
  	lavenderblush: lavenderblush,
  	lavender: lavender,
  	lawngreen: lawngreen,
  	lemonchiffon: lemonchiffon,
  	lightblue: lightblue,
  	lightcoral: lightcoral,
  	lightcyan: lightcyan,
  	lightgoldenrodyellow: lightgoldenrodyellow,
  	lightgray: lightgray,
  	lightgreen: lightgreen,
  	lightgrey: lightgrey,
  	lightpink: lightpink,
  	lightsalmon: lightsalmon,
  	lightseagreen: lightseagreen,
  	lightskyblue: lightskyblue,
  	lightslategray: lightslategray,
  	lightslategrey: lightslategrey,
  	lightsteelblue: lightsteelblue,
  	lightyellow: lightyellow,
  	lime: lime,
  	limegreen: limegreen,
  	linen: linen,
  	magenta: magenta,
  	maroon: maroon,
  	mediumaquamarine: mediumaquamarine,
  	mediumblue: mediumblue,
  	mediumorchid: mediumorchid,
  	mediumpurple: mediumpurple,
  	mediumseagreen: mediumseagreen,
  	mediumslateblue: mediumslateblue,
  	mediumspringgreen: mediumspringgreen,
  	mediumturquoise: mediumturquoise,
  	mediumvioletred: mediumvioletred,
  	midnightblue: midnightblue,
  	mintcream: mintcream,
  	mistyrose: mistyrose,
  	moccasin: moccasin,
  	navajowhite: navajowhite,
  	navy: navy,
  	oldlace: oldlace,
  	olive: olive,
  	olivedrab: olivedrab,
  	orange: orange,
  	orangered: orangered,
  	orchid: orchid,
  	palegoldenrod: palegoldenrod,
  	palegreen: palegreen,
  	paleturquoise: paleturquoise,
  	palevioletred: palevioletred,
  	papayawhip: papayawhip,
  	peachpuff: peachpuff,
  	peru: peru,
  	pink: pink,
  	plum: plum,
  	powderblue: powderblue,
  	purple: purple,
  	rebeccapurple: rebeccapurple,
  	red: red,
  	rosybrown: rosybrown,
  	royalblue: royalblue,
  	saddlebrown: saddlebrown,
  	salmon: salmon,
  	sandybrown: sandybrown,
  	seagreen: seagreen,
  	seashell: seashell,
  	sienna: sienna,
  	silver: silver,
  	skyblue: skyblue,
  	slateblue: slateblue,
  	slategray: slategray,
  	slategrey: slategrey,
  	snow: snow,
  	springgreen: springgreen,
  	steelblue: steelblue,
  	tan: tan,
  	teal: teal,
  	thistle: thistle,
  	tomato: tomato,
  	turquoise: turquoise,
  	violet: violet,
  	wheat: wheat,
  	white: white,
  	whitesmoke: whitesmoke,
  	yellow: yellow,
  	yellowgreen: yellowgreen
  };

  function hex2rgb(hex, out = []) {
    out[0] = (hex >> 16 & 255) / 255;
    out[1] = (hex >> 8 & 255) / 255;
    out[2] = (hex & 255) / 255;
    return out;
  }
  function hex2string(hex) {
    let hexString = hex.toString(16);
    hexString = "000000".substring(0, 6 - hexString.length) + hexString;
    return `#${hexString}`;
  }
  function string2hex(string) {
    if (typeof string === "string") {
      string = cssColorNames[string.toLowerCase()] || string;
      if (string[0] === "#") {
        string = string.slice(1);
      }
      if (string.length === 3) {
        const [r, g, b] = string;
        string = r + r + g + g + b + b;
      }
    }
    return parseInt(string, 16);
  }

  function mapPremultipliedBlendModes() {
    const pm = [];
    const npm = [];
    for (let i = 0; i < 32; i++) {
      pm[i] = i;
      npm[i] = i;
    }
    pm[BLEND_MODES.NORMAL_NPM] = BLEND_MODES.NORMAL;
    pm[BLEND_MODES.ADD_NPM] = BLEND_MODES.ADD;
    pm[BLEND_MODES.SCREEN_NPM] = BLEND_MODES.SCREEN;
    npm[BLEND_MODES.NORMAL] = BLEND_MODES.NORMAL_NPM;
    npm[BLEND_MODES.ADD] = BLEND_MODES.ADD_NPM;
    npm[BLEND_MODES.SCREEN] = BLEND_MODES.SCREEN_NPM;
    const array = [];
    array.push(npm);
    array.push(pm);
    return array;
  }
  const premultiplyBlendMode = mapPremultipliedBlendModes();
  function premultiplyTint(tint, alpha) {
    if (alpha === 1) {
      return (alpha * 255 << 24) + tint;
    }
    if (alpha === 0) {
      return 0;
    }
    let R = tint >> 16 & 255;
    let G = tint >> 8 & 255;
    let B = tint & 255;
    R = R * alpha + 0.5 | 0;
    G = G * alpha + 0.5 | 0;
    B = B * alpha + 0.5 | 0;
    return (alpha * 255 << 24) + (R << 16) + (G << 8) + B;
  }

  function getBufferType(array) {
    if (array.BYTES_PER_ELEMENT === 4) {
      if (array instanceof Float32Array) {
        return "Float32Array";
      } else if (array instanceof Uint32Array) {
        return "Uint32Array";
      }
      return "Int32Array";
    } else if (array.BYTES_PER_ELEMENT === 2) {
      if (array instanceof Uint16Array) {
        return "Uint16Array";
      }
    } else if (array.BYTES_PER_ELEMENT === 1) {
      if (array instanceof Uint8Array) {
        return "Uint8Array";
      }
    }
    return null;
  }

  function nextPow2(v) {
    v += v === 0 ? 1 : 0;
    --v;
    v |= v >>> 1;
    v |= v >>> 2;
    v |= v >>> 4;
    v |= v >>> 8;
    v |= v >>> 16;
    return v + 1;
  }
  function isPow2(v) {
    return !(v & v - 1) && !!v;
  }
  function log2(v) {
    let r = (v > 65535 ? 1 : 0) << 4;
    v >>>= r;
    let shift = (v > 255 ? 1 : 0) << 3;
    v >>>= shift;
    r |= shift;
    shift = (v > 15 ? 1 : 0) << 2;
    v >>>= shift;
    r |= shift;
    shift = (v > 3 ? 1 : 0) << 1;
    v >>>= shift;
    r |= shift;
    return r | v >> 1;
  }

  function removeItems(arr, startIdx, removeCount) {
    const length = arr.length;
    let i;
    if (startIdx >= length || removeCount === 0) {
      return;
    }
    removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
    const len = length - removeCount;
    for (i = startIdx; i < len; ++i) {
      arr[i] = arr[i + removeCount];
    }
    arr.length = len;
  }

  let nextUid = 0;
  function uid() {
    return ++nextUid;
  }

  const ProgramCache = {};
  const TextureCache = /* @__PURE__ */ Object.create(null);
  const BaseTextureCache = /* @__PURE__ */ Object.create(null);

  let tempAnchor;
  function determineCrossOrigin(url$1, loc = globalThis.location) {
    if (url$1.startsWith("data:")) {
      return "";
    }
    loc = loc || globalThis.location;
    if (!tempAnchor) {
      tempAnchor = document.createElement("a");
    }
    tempAnchor.href = url$1;
    const parsedUrl = url.parse(tempAnchor.href);
    const samePort = !parsedUrl.port && loc.port === "" || parsedUrl.port === loc.port;
    if (parsedUrl.hostname !== loc.hostname || !samePort || parsedUrl.protocol !== loc.protocol) {
      return "anonymous";
    }
    return "";
  }

  function getResolutionOfUrl(url, defaultValue = 1) {
    const resolution = settings.RETINA_PREFIX.exec(url);
    if (resolution) {
      return parseFloat(resolution[1]);
    }
    return defaultValue;
  }

  settings.PREFER_ENV = ENV.WEBGL2;
  settings.STRICT_TEXTURE_CACHE = false;

  const INSTALLED = [];
  function autoDetectResource(source, options) {
    if (!source) {
      return null;
    }
    let extension = "";
    if (typeof source === "string") {
      const result = /\.(\w{3,4})(?:$|\?|#)/i.exec(source);
      if (result) {
        extension = result[1].toLowerCase();
      }
    }
    for (let i = INSTALLED.length - 1; i >= 0; --i) {
      const ResourcePlugin = INSTALLED[i];
      if (ResourcePlugin.test && ResourcePlugin.test(source, extension)) {
        return new ResourcePlugin(source, options);
      }
    }
    throw new Error("Unrecognized source type to auto-detect Resource");
  }

  class Resource {
    constructor(width = 0, height = 0) {
      this._width = width;
      this._height = height;
      this.destroyed = false;
      this.internal = false;
      this.onResize = new Runner("setRealSize");
      this.onUpdate = new Runner("update");
      this.onError = new Runner("onError");
    }
    bind(baseTexture) {
      this.onResize.add(baseTexture);
      this.onUpdate.add(baseTexture);
      this.onError.add(baseTexture);
      if (this._width || this._height) {
        this.onResize.emit(this._width, this._height);
      }
    }
    unbind(baseTexture) {
      this.onResize.remove(baseTexture);
      this.onUpdate.remove(baseTexture);
      this.onError.remove(baseTexture);
    }
    resize(width, height) {
      if (width !== this._width || height !== this._height) {
        this._width = width;
        this._height = height;
        this.onResize.emit(width, height);
      }
    }
    get valid() {
      return !!this._width && !!this._height;
    }
    update() {
      if (!this.destroyed) {
        this.onUpdate.emit();
      }
    }
    load() {
      return Promise.resolve(this);
    }
    get width() {
      return this._width;
    }
    get height() {
      return this._height;
    }
    style(_renderer, _baseTexture, _glTexture) {
      return false;
    }
    dispose() {
    }
    destroy() {
      if (!this.destroyed) {
        this.destroyed = true;
        this.dispose();
        this.onError.removeAll();
        this.onError = null;
        this.onResize.removeAll();
        this.onResize = null;
        this.onUpdate.removeAll();
        this.onUpdate = null;
      }
    }
    static test(_source, _extension) {
      return false;
    }
  }

  class BufferResource extends Resource {
    constructor(source, options) {
      const { width, height } = options || {};
      if (!width || !height) {
        throw new Error("BufferResource width or height invalid");
      }
      super(width, height);
      this.data = source;
    }
    upload(renderer, baseTexture, glTexture) {
      const gl = renderer.gl;
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === ALPHA_MODES.UNPACK);
      const width = baseTexture.realWidth;
      const height = baseTexture.realHeight;
      if (glTexture.width === width && glTexture.height === height) {
        gl.texSubImage2D(baseTexture.target, 0, 0, 0, width, height, baseTexture.format, glTexture.type, this.data);
      } else {
        glTexture.width = width;
        glTexture.height = height;
        gl.texImage2D(baseTexture.target, 0, glTexture.internalFormat, width, height, 0, baseTexture.format, glTexture.type, this.data);
      }
      return true;
    }
    dispose() {
      this.data = null;
    }
    static test(source) {
      return source instanceof Float32Array || source instanceof Uint8Array || source instanceof Uint32Array;
    }
  }

  const defaultBufferOptions = {
    scaleMode: SCALE_MODES.NEAREST,
    format: FORMATS.RGBA,
    alphaMode: ALPHA_MODES.NPM
  };
  const _BaseTexture = class extends EventEmitter {
    constructor(resource = null, options = null) {
      super();
      options = options || {};
      const {
        alphaMode,
        mipmap,
        anisotropicLevel,
        scaleMode,
        width,
        height,
        wrapMode,
        format,
        type,
        target,
        resolution,
        resourceOptions
      } = options;
      if (resource && !(resource instanceof Resource)) {
        resource = autoDetectResource(resource, resourceOptions);
        resource.internal = true;
      }
      this.resolution = resolution || settings.RESOLUTION;
      this.width = Math.round((width || 0) * this.resolution) / this.resolution;
      this.height = Math.round((height || 0) * this.resolution) / this.resolution;
      this._mipmap = mipmap ?? settings.MIPMAP_TEXTURES;
      this.anisotropicLevel = anisotropicLevel ?? settings.ANISOTROPIC_LEVEL;
      this._wrapMode = wrapMode || settings.WRAP_MODE;
      this._scaleMode = scaleMode ?? settings.SCALE_MODE;
      this.format = format || FORMATS.RGBA;
      this.type = type || TYPES.UNSIGNED_BYTE;
      this.target = target || TARGETS.TEXTURE_2D;
      this.alphaMode = alphaMode ?? ALPHA_MODES.UNPACK;
      this.uid = uid();
      this.touched = 0;
      this.isPowerOfTwo = false;
      this._refreshPOT();
      this._glTextures = {};
      this.dirtyId = 0;
      this.dirtyStyleId = 0;
      this.cacheId = null;
      this.valid = width > 0 && height > 0;
      this.textureCacheIds = [];
      this.destroyed = false;
      this.resource = null;
      this._batchEnabled = 0;
      this._batchLocation = 0;
      this.parentTextureArray = null;
      this.setResource(resource);
    }
    get realWidth() {
      return Math.round(this.width * this.resolution);
    }
    get realHeight() {
      return Math.round(this.height * this.resolution);
    }
    get mipmap() {
      return this._mipmap;
    }
    set mipmap(value) {
      if (this._mipmap !== value) {
        this._mipmap = value;
        this.dirtyStyleId++;
      }
    }
    get scaleMode() {
      return this._scaleMode;
    }
    set scaleMode(value) {
      if (this._scaleMode !== value) {
        this._scaleMode = value;
        this.dirtyStyleId++;
      }
    }
    get wrapMode() {
      return this._wrapMode;
    }
    set wrapMode(value) {
      if (this._wrapMode !== value) {
        this._wrapMode = value;
        this.dirtyStyleId++;
      }
    }
    setStyle(scaleMode, mipmap) {
      let dirty;
      if (scaleMode !== void 0 && scaleMode !== this.scaleMode) {
        this.scaleMode = scaleMode;
        dirty = true;
      }
      if (mipmap !== void 0 && mipmap !== this.mipmap) {
        this.mipmap = mipmap;
        dirty = true;
      }
      if (dirty) {
        this.dirtyStyleId++;
      }
      return this;
    }
    setSize(desiredWidth, desiredHeight, resolution) {
      resolution = resolution || this.resolution;
      return this.setRealSize(desiredWidth * resolution, desiredHeight * resolution, resolution);
    }
    setRealSize(realWidth, realHeight, resolution) {
      this.resolution = resolution || this.resolution;
      this.width = Math.round(realWidth) / this.resolution;
      this.height = Math.round(realHeight) / this.resolution;
      this._refreshPOT();
      this.update();
      return this;
    }
    _refreshPOT() {
      this.isPowerOfTwo = isPow2(this.realWidth) && isPow2(this.realHeight);
    }
    setResolution(resolution) {
      const oldResolution = this.resolution;
      if (oldResolution === resolution) {
        return this;
      }
      this.resolution = resolution;
      if (this.valid) {
        this.width = Math.round(this.width * oldResolution) / resolution;
        this.height = Math.round(this.height * oldResolution) / resolution;
        this.emit("update", this);
      }
      this._refreshPOT();
      return this;
    }
    setResource(resource) {
      if (this.resource === resource) {
        return this;
      }
      if (this.resource) {
        throw new Error("Resource can be set only once");
      }
      resource.bind(this);
      this.resource = resource;
      return this;
    }
    update() {
      if (!this.valid) {
        if (this.width > 0 && this.height > 0) {
          this.valid = true;
          this.emit("loaded", this);
          this.emit("update", this);
        }
      } else {
        this.dirtyId++;
        this.dirtyStyleId++;
        this.emit("update", this);
      }
    }
    onError(event) {
      this.emit("error", this, event);
    }
    destroy() {
      if (this.resource) {
        this.resource.unbind(this);
        if (this.resource.internal) {
          this.resource.destroy();
        }
        this.resource = null;
      }
      if (this.cacheId) {
        delete BaseTextureCache[this.cacheId];
        delete TextureCache[this.cacheId];
        this.cacheId = null;
      }
      this.dispose();
      _BaseTexture.removeFromCache(this);
      this.textureCacheIds = null;
      this.destroyed = true;
    }
    dispose() {
      this.emit("dispose", this);
    }
    castToBaseTexture() {
      return this;
    }
    static from(source, options, strict = settings.STRICT_TEXTURE_CACHE) {
      const isFrame = typeof source === "string";
      let cacheId = null;
      if (isFrame) {
        cacheId = source;
      } else {
        if (!source._pixiId) {
          const prefix = options?.pixiIdPrefix || "pixiid";
          source._pixiId = `${prefix}_${uid()}`;
        }
        cacheId = source._pixiId;
      }
      let baseTexture = BaseTextureCache[cacheId];
      if (isFrame && strict && !baseTexture) {
        throw new Error(`The cacheId "${cacheId}" does not exist in BaseTextureCache.`);
      }
      if (!baseTexture) {
        baseTexture = new _BaseTexture(source, options);
        baseTexture.cacheId = cacheId;
        _BaseTexture.addToCache(baseTexture, cacheId);
      }
      return baseTexture;
    }
    static fromBuffer(buffer, width, height, options) {
      buffer = buffer || new Float32Array(width * height * 4);
      const resource = new BufferResource(buffer, { width, height });
      const type = buffer instanceof Float32Array ? TYPES.FLOAT : TYPES.UNSIGNED_BYTE;
      return new _BaseTexture(resource, Object.assign({}, defaultBufferOptions, options || { width, height, type }));
    }
    static addToCache(baseTexture, id) {
      if (id) {
        if (!baseTexture.textureCacheIds.includes(id)) {
          baseTexture.textureCacheIds.push(id);
        }
        if (BaseTextureCache[id]) {
          console.warn(`BaseTexture added to the cache with an id [${id}] that already had an entry`);
        }
        BaseTextureCache[id] = baseTexture;
      }
    }
    static removeFromCache(baseTexture) {
      if (typeof baseTexture === "string") {
        const baseTextureFromCache = BaseTextureCache[baseTexture];
        if (baseTextureFromCache) {
          const index = baseTextureFromCache.textureCacheIds.indexOf(baseTexture);
          if (index > -1) {
            baseTextureFromCache.textureCacheIds.splice(index, 1);
          }
          delete BaseTextureCache[baseTexture];
          return baseTextureFromCache;
        }
      } else if (baseTexture?.textureCacheIds) {
        for (let i = 0; i < baseTexture.textureCacheIds.length; ++i) {
          delete BaseTextureCache[baseTexture.textureCacheIds[i]];
        }
        baseTexture.textureCacheIds.length = 0;
        return baseTexture;
      }
      return null;
    }
  };
  let BaseTexture = _BaseTexture;
  BaseTexture._globalBatch = 0;

  class AbstractMultiResource extends Resource {
    constructor(length, options) {
      const { width, height } = options || {};
      super(width, height);
      this.items = [];
      this.itemDirtyIds = [];
      for (let i = 0; i < length; i++) {
        const partTexture = new BaseTexture();
        this.items.push(partTexture);
        this.itemDirtyIds.push(-2);
      }
      this.length = length;
      this._load = null;
      this.baseTexture = null;
    }
    initFromArray(resources, options) {
      for (let i = 0; i < this.length; i++) {
        if (!resources[i]) {
          continue;
        }
        if (resources[i].castToBaseTexture) {
          this.addBaseTextureAt(resources[i].castToBaseTexture(), i);
        } else if (resources[i] instanceof Resource) {
          this.addResourceAt(resources[i], i);
        } else {
          this.addResourceAt(autoDetectResource(resources[i], options), i);
        }
      }
    }
    dispose() {
      for (let i = 0, len = this.length; i < len; i++) {
        this.items[i].destroy();
      }
      this.items = null;
      this.itemDirtyIds = null;
      this._load = null;
    }
    addResourceAt(resource, index) {
      if (!this.items[index]) {
        throw new Error(`Index ${index} is out of bounds`);
      }
      if (resource.valid && !this.valid) {
        this.resize(resource.width, resource.height);
      }
      this.items[index].setResource(resource);
      return this;
    }
    bind(baseTexture) {
      if (this.baseTexture !== null) {
        throw new Error("Only one base texture per TextureArray is allowed");
      }
      super.bind(baseTexture);
      for (let i = 0; i < this.length; i++) {
        this.items[i].parentTextureArray = baseTexture;
        this.items[i].on("update", baseTexture.update, baseTexture);
      }
    }
    unbind(baseTexture) {
      super.unbind(baseTexture);
      for (let i = 0; i < this.length; i++) {
        this.items[i].parentTextureArray = null;
        this.items[i].off("update", baseTexture.update, baseTexture);
      }
    }
    load() {
      if (this._load) {
        return this._load;
      }
      const resources = this.items.map((item) => item.resource).filter((item) => item);
      const promises = resources.map((item) => item.load());
      this._load = Promise.all(promises).then(() => {
        const { realWidth, realHeight } = this.items[0];
        this.resize(realWidth, realHeight);
        return Promise.resolve(this);
      });
      return this._load;
    }
  }

  class ArrayResource extends AbstractMultiResource {
    constructor(source, options) {
      const { width, height } = options || {};
      let urls;
      let length;
      if (Array.isArray(source)) {
        urls = source;
        length = source.length;
      } else {
        length = source;
      }
      super(length, { width, height });
      if (urls) {
        this.initFromArray(urls, options);
      }
    }
    addBaseTextureAt(baseTexture, index) {
      if (baseTexture.resource) {
        this.addResourceAt(baseTexture.resource, index);
      } else {
        throw new Error("ArrayResource does not support RenderTexture");
      }
      return this;
    }
    bind(baseTexture) {
      super.bind(baseTexture);
      baseTexture.target = TARGETS.TEXTURE_2D_ARRAY;
    }
    upload(renderer, texture, glTexture) {
      const { length, itemDirtyIds, items } = this;
      const { gl } = renderer;
      if (glTexture.dirtyId < 0) {
        gl.texImage3D(gl.TEXTURE_2D_ARRAY, 0, glTexture.internalFormat, this._width, this._height, length, 0, texture.format, glTexture.type, null);
      }
      for (let i = 0; i < length; i++) {
        const item = items[i];
        if (itemDirtyIds[i] < item.dirtyId) {
          itemDirtyIds[i] = item.dirtyId;
          if (item.valid) {
            gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, 0, 0, 0, i, item.resource.width, item.resource.height, 1, texture.format, glTexture.type, item.resource.source);
          }
        }
      }
      return true;
    }
  }

  class BaseImageResource extends Resource {
    constructor(source) {
      const sourceAny = source;
      const width = sourceAny.naturalWidth || sourceAny.videoWidth || sourceAny.width;
      const height = sourceAny.naturalHeight || sourceAny.videoHeight || sourceAny.height;
      super(width, height);
      this.source = source;
      this.noSubImage = false;
    }
    static crossOrigin(element, url, crossorigin) {
      if (crossorigin === void 0 && !url.startsWith("data:")) {
        element.crossOrigin = determineCrossOrigin(url);
      } else if (crossorigin !== false) {
        element.crossOrigin = typeof crossorigin === "string" ? crossorigin : "anonymous";
      }
    }
    upload(renderer, baseTexture, glTexture, source) {
      const gl = renderer.gl;
      const width = baseTexture.realWidth;
      const height = baseTexture.realHeight;
      source = source || this.source;
      if (typeof HTMLImageElement !== "undefined" && source instanceof HTMLImageElement) {
        if (!source.complete || source.naturalWidth === 0) {
          return false;
        }
      } else if (typeof HTMLVideoElement !== "undefined" && source instanceof HTMLVideoElement) {
        if (source.readyState <= 1 && source.buffered.length === 0) {
          return false;
        }
      }
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === ALPHA_MODES.UNPACK);
      if (!this.noSubImage && baseTexture.target === gl.TEXTURE_2D && glTexture.width === width && glTexture.height === height) {
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, baseTexture.format, glTexture.type, source);
      } else {
        glTexture.width = width;
        glTexture.height = height;
        gl.texImage2D(baseTexture.target, 0, glTexture.internalFormat, baseTexture.format, glTexture.type, source);
      }
      return true;
    }
    update() {
      if (this.destroyed) {
        return;
      }
      const source = this.source;
      const width = source.naturalWidth || source.videoWidth || source.width;
      const height = source.naturalHeight || source.videoHeight || source.height;
      this.resize(width, height);
      super.update();
    }
    dispose() {
      this.source = null;
    }
  }

  class CanvasResource extends BaseImageResource {
    constructor(source) {
      super(source);
    }
    static test(source) {
      const { OffscreenCanvas } = globalThis;
      if (OffscreenCanvas && source instanceof OffscreenCanvas) {
        return true;
      }
      return globalThis.HTMLCanvasElement && source instanceof HTMLCanvasElement;
    }
  }

  const _CubeResource = class extends AbstractMultiResource {
    constructor(source, options) {
      const { width, height, autoLoad, linkBaseTexture } = options || {};
      if (source && source.length !== _CubeResource.SIDES) {
        throw new Error(`Invalid length. Got ${source.length}, expected 6`);
      }
      super(6, { width, height });
      for (let i = 0; i < _CubeResource.SIDES; i++) {
        this.items[i].target = TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + i;
      }
      this.linkBaseTexture = linkBaseTexture !== false;
      if (source) {
        this.initFromArray(source, options);
      }
      if (autoLoad !== false) {
        this.load();
      }
    }
    bind(baseTexture) {
      super.bind(baseTexture);
      baseTexture.target = TARGETS.TEXTURE_CUBE_MAP;
    }
    addBaseTextureAt(baseTexture, index, linkBaseTexture) {
      if (linkBaseTexture === void 0) {
        linkBaseTexture = this.linkBaseTexture;
      }
      if (!this.items[index]) {
        throw new Error(`Index ${index} is out of bounds`);
      }
      if (!this.linkBaseTexture || baseTexture.parentTextureArray || Object.keys(baseTexture._glTextures).length > 0) {
        if (baseTexture.resource) {
          this.addResourceAt(baseTexture.resource, index);
        } else {
          throw new Error(`CubeResource does not support copying of renderTexture.`);
        }
      } else {
        baseTexture.target = TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + index;
        baseTexture.parentTextureArray = this.baseTexture;
        this.items[index] = baseTexture;
      }
      if (baseTexture.valid && !this.valid) {
        this.resize(baseTexture.realWidth, baseTexture.realHeight);
      }
      this.items[index] = baseTexture;
      return this;
    }
    upload(renderer, _baseTexture, glTexture) {
      const dirty = this.itemDirtyIds;
      for (let i = 0; i < _CubeResource.SIDES; i++) {
        const side = this.items[i];
        if (dirty[i] < side.dirtyId || glTexture.dirtyId < _baseTexture.dirtyId) {
          if (side.valid && side.resource) {
            side.resource.upload(renderer, side, glTexture);
            dirty[i] = side.dirtyId;
          } else if (dirty[i] < -1) {
            renderer.gl.texImage2D(side.target, 0, glTexture.internalFormat, _baseTexture.realWidth, _baseTexture.realHeight, 0, _baseTexture.format, glTexture.type, null);
            dirty[i] = -1;
          }
        }
      }
      return true;
    }
    static test(source) {
      return Array.isArray(source) && source.length === _CubeResource.SIDES;
    }
  };
  let CubeResource = _CubeResource;
  CubeResource.SIDES = 6;

  class ImageResource extends BaseImageResource {
    constructor(source, options) {
      options = options || {};
      if (typeof source === "string") {
        const imageElement = new Image();
        BaseImageResource.crossOrigin(imageElement, source, options.crossorigin);
        imageElement.src = source;
        source = imageElement;
      }
      super(source);
      if (!source.complete && !!this._width && !!this._height) {
        this._width = 0;
        this._height = 0;
      }
      this.url = source.src;
      this._process = null;
      this.preserveBitmap = false;
      this.createBitmap = (options.createBitmap ?? settings.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap;
      this.alphaMode = typeof options.alphaMode === "number" ? options.alphaMode : null;
      this.bitmap = null;
      this._load = null;
      if (options.autoLoad !== false) {
        this.load();
      }
    }
    load(createBitmap) {
      if (this._load) {
        return this._load;
      }
      if (createBitmap !== void 0) {
        this.createBitmap = createBitmap;
      }
      this._load = new Promise((resolve, reject) => {
        const source = this.source;
        this.url = source.src;
        const completed = () => {
          if (this.destroyed) {
            return;
          }
          source.onload = null;
          source.onerror = null;
          this.resize(source.width, source.height);
          this._load = null;
          if (this.createBitmap) {
            resolve(this.process());
          } else {
            resolve(this);
          }
        };
        if (source.complete && source.src) {
          completed();
        } else {
          source.onload = completed;
          source.onerror = (event) => {
            reject(event);
            this.onError.emit(event);
          };
        }
      });
      return this._load;
    }
    process() {
      const source = this.source;
      if (this._process !== null) {
        return this._process;
      }
      if (this.bitmap !== null || !globalThis.createImageBitmap) {
        return Promise.resolve(this);
      }
      const createImageBitmap = globalThis.createImageBitmap;
      const cors = !source.crossOrigin || source.crossOrigin === "anonymous";
      this._process = fetch(source.src, {
        mode: cors ? "cors" : "no-cors"
      }).then((r) => r.blob()).then((blob) => createImageBitmap(blob, 0, 0, source.width, source.height, {
        premultiplyAlpha: this.alphaMode === null || this.alphaMode === ALPHA_MODES.UNPACK ? "premultiply" : "none"
      })).then((bitmap) => {
        if (this.destroyed) {
          return Promise.reject();
        }
        this.bitmap = bitmap;
        this.update();
        this._process = null;
        return Promise.resolve(this);
      });
      return this._process;
    }
    upload(renderer, baseTexture, glTexture) {
      if (typeof this.alphaMode === "number") {
        baseTexture.alphaMode = this.alphaMode;
      }
      if (!this.createBitmap) {
        return super.upload(renderer, baseTexture, glTexture);
      }
      if (!this.bitmap) {
        this.process();
        if (!this.bitmap) {
          return false;
        }
      }
      super.upload(renderer, baseTexture, glTexture, this.bitmap);
      if (!this.preserveBitmap) {
        let flag = true;
        const glTextures = baseTexture._glTextures;
        for (const key in glTextures) {
          const otherTex = glTextures[key];
          if (otherTex !== glTexture && otherTex.dirtyId !== baseTexture.dirtyId) {
            flag = false;
            break;
          }
        }
        if (flag) {
          if (this.bitmap.close) {
            this.bitmap.close();
          }
          this.bitmap = null;
        }
      }
      return true;
    }
    dispose() {
      this.source.onload = null;
      this.source.onerror = null;
      super.dispose();
      if (this.bitmap) {
        this.bitmap.close();
        this.bitmap = null;
      }
      this._process = null;
      this._load = null;
    }
    static test(source) {
      return typeof HTMLImageElement !== "undefined" && (typeof source === "string" || source instanceof HTMLImageElement);
    }
  }

  const _SVGResource = class extends BaseImageResource {
    constructor(sourceBase64, options) {
      options = options || {};
      super(settings.ADAPTER.createCanvas());
      this._width = 0;
      this._height = 0;
      this.svg = sourceBase64;
      this.scale = options.scale || 1;
      this._overrideWidth = options.width;
      this._overrideHeight = options.height;
      this._resolve = null;
      this._crossorigin = options.crossorigin;
      this._load = null;
      if (options.autoLoad !== false) {
        this.load();
      }
    }
    load() {
      if (this._load) {
        return this._load;
      }
      this._load = new Promise((resolve) => {
        this._resolve = () => {
          this.resize(this.source.width, this.source.height);
          resolve(this);
        };
        if (_SVGResource.SVG_XML.test(this.svg.trim())) {
          if (!btoa) {
            throw new Error("Your browser doesn't support base64 conversions.");
          }
          this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`;
        }
        this._loadSvg();
      });
      return this._load;
    }
    _loadSvg() {
      const tempImage = new Image();
      BaseImageResource.crossOrigin(tempImage, this.svg, this._crossorigin);
      tempImage.src = this.svg;
      tempImage.onerror = (event) => {
        if (!this._resolve) {
          return;
        }
        tempImage.onerror = null;
        this.onError.emit(event);
      };
      tempImage.onload = () => {
        if (!this._resolve) {
          return;
        }
        const svgWidth = tempImage.width;
        const svgHeight = tempImage.height;
        if (!svgWidth || !svgHeight) {
          throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
        }
        let width = svgWidth * this.scale;
        let height = svgHeight * this.scale;
        if (this._overrideWidth || this._overrideHeight) {
          width = this._overrideWidth || this._overrideHeight / svgHeight * svgWidth;
          height = this._overrideHeight || this._overrideWidth / svgWidth * svgHeight;
        }
        width = Math.round(width);
        height = Math.round(height);
        const canvas = this.source;
        canvas.width = width;
        canvas.height = height;
        canvas._pixiId = `canvas_${uid()}`;
        canvas.getContext("2d").drawImage(tempImage, 0, 0, svgWidth, svgHeight, 0, 0, width, height);
        this._resolve();
        this._resolve = null;
      };
    }
    static getSize(svgString) {
      const sizeMatch = _SVGResource.SVG_SIZE.exec(svgString);
      const size = {};
      if (sizeMatch) {
        size[sizeMatch[1]] = Math.round(parseFloat(sizeMatch[3]));
        size[sizeMatch[5]] = Math.round(parseFloat(sizeMatch[7]));
      }
      return size;
    }
    dispose() {
      super.dispose();
      this._resolve = null;
      this._crossorigin = null;
    }
    static test(source, extension) {
      return extension === "svg" || typeof source === "string" && source.startsWith("data:image/svg+xml") || typeof source === "string" && _SVGResource.SVG_XML.test(source);
    }
  };
  let SVGResource = _SVGResource;
  SVGResource.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m;
  SVGResource.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;

  const _VideoResource = class extends BaseImageResource {
    constructor(source, options) {
      options = options || {};
      if (!(source instanceof HTMLVideoElement)) {
        const videoElement = document.createElement("video");
        videoElement.setAttribute("preload", "auto");
        videoElement.setAttribute("webkit-playsinline", "");
        videoElement.setAttribute("playsinline", "");
        if (typeof source === "string") {
          source = [source];
        }
        const firstSrc = source[0].src || source[0];
        BaseImageResource.crossOrigin(videoElement, firstSrc, options.crossorigin);
        for (let i = 0; i < source.length; ++i) {
          const sourceElement = document.createElement("source");
          let { src, mime } = source[i];
          src = src || source[i];
          const baseSrc = src.split("?").shift().toLowerCase();
          const ext = baseSrc.slice(baseSrc.lastIndexOf(".") + 1);
          mime = mime || _VideoResource.MIME_TYPES[ext] || `video/${ext}`;
          sourceElement.src = src;
          sourceElement.type = mime;
          videoElement.appendChild(sourceElement);
        }
        source = videoElement;
      }
      super(source);
      this.noSubImage = true;
      this._autoUpdate = true;
      this._isConnectedToTicker = false;
      this._updateFPS = options.updateFPS || 0;
      this._msToNextUpdate = 0;
      this.autoPlay = options.autoPlay !== false;
      this._load = null;
      this._resolve = null;
      this._onCanPlay = this._onCanPlay.bind(this);
      this._onError = this._onError.bind(this);
      if (options.autoLoad !== false) {
        this.load();
      }
    }
    update(_deltaTime = 0) {
      if (!this.destroyed) {
        const elapsedMS = Ticker.shared.elapsedMS * this.source.playbackRate;
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - elapsedMS);
        if (!this._updateFPS || this._msToNextUpdate <= 0) {
          super.update();
          this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0;
        }
      }
    }
    load() {
      if (this._load) {
        return this._load;
      }
      const source = this.source;
      if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height) {
        source.complete = true;
      }
      source.addEventListener("play", this._onPlayStart.bind(this));
      source.addEventListener("pause", this._onPlayStop.bind(this));
      if (!this._isSourceReady()) {
        source.addEventListener("canplay", this._onCanPlay);
        source.addEventListener("canplaythrough", this._onCanPlay);
        source.addEventListener("error", this._onError, true);
      } else {
        this._onCanPlay();
      }
      this._load = new Promise((resolve) => {
        if (this.valid) {
          resolve(this);
        } else {
          this._resolve = resolve;
          source.load();
        }
      });
      return this._load;
    }
    _onError(event) {
      this.source.removeEventListener("error", this._onError, true);
      this.onError.emit(event);
    }
    _isSourcePlaying() {
      const source = this.source;
      return !source.paused && !source.ended && this._isSourceReady();
    }
    _isSourceReady() {
      const source = this.source;
      return source.readyState > 2;
    }
    _onPlayStart() {
      if (!this.valid) {
        this._onCanPlay();
      }
      if (this.autoUpdate && !this._isConnectedToTicker) {
        Ticker.shared.add(this.update, this);
        this._isConnectedToTicker = true;
      }
    }
    _onPlayStop() {
      if (this._isConnectedToTicker) {
        Ticker.shared.remove(this.update, this);
        this._isConnectedToTicker = false;
      }
    }
    _onCanPlay() {
      const source = this.source;
      source.removeEventListener("canplay", this._onCanPlay);
      source.removeEventListener("canplaythrough", this._onCanPlay);
      const valid = this.valid;
      this.resize(source.videoWidth, source.videoHeight);
      if (!valid && this._resolve) {
        this._resolve(this);
        this._resolve = null;
      }
      if (this._isSourcePlaying()) {
        this._onPlayStart();
      } else if (this.autoPlay) {
        source.play();
      }
    }
    dispose() {
      if (this._isConnectedToTicker) {
        Ticker.shared.remove(this.update, this);
        this._isConnectedToTicker = false;
      }
      const source = this.source;
      if (source) {
        source.removeEventListener("error", this._onError, true);
        source.pause();
        source.src = "";
        source.load();
      }
      super.dispose();
    }
    get autoUpdate() {
      return this._autoUpdate;
    }
    set autoUpdate(value) {
      if (value !== this._autoUpdate) {
        this._autoUpdate = value;
        if (!this._autoUpdate && this._isConnectedToTicker) {
          Ticker.shared.remove(this.update, this);
          this._isConnectedToTicker = false;
        } else if (this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying()) {
          Ticker.shared.add(this.update, this);
          this._isConnectedToTicker = true;
        }
      }
    }
    get updateFPS() {
      return this._updateFPS;
    }
    set updateFPS(value) {
      if (value !== this._updateFPS) {
        this._updateFPS = value;
      }
    }
    static test(source, extension) {
      return globalThis.HTMLVideoElement && source instanceof HTMLVideoElement || _VideoResource.TYPES.includes(extension);
    }
  };
  let VideoResource = _VideoResource;
  VideoResource.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"];
  VideoResource.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4"
  };

  class ImageBitmapResource extends BaseImageResource {
    constructor(source, options) {
      var __super = (...args) => {
        super(...args);
      };
      options = options || {};
      if (typeof source === "string") {
        __super(ImageBitmapResource.EMPTY);
        this.url = source;
      } else {
        __super(source);
        this.url = null;
      }
      this.crossOrigin = options.crossOrigin ?? true;
      this.alphaMode = typeof options.alphaMode === "number" ? options.alphaMode : null;
      this._load = null;
      if (options.autoLoad !== false) {
        this.load();
      }
    }
    load() {
      if (this._load) {
        return this._load;
      }
      this._load = new Promise(async (resolve, reject) => {
        if (this.url === null) {
          resolve(this);
          return;
        }
        try {
          const response = await settings.ADAPTER.fetch(this.url, {
            mode: this.crossOrigin ? "cors" : "no-cors"
          });
          if (this.destroyed)
            return;
          const imageBlob = await response.blob();
          if (this.destroyed)
            return;
          const imageBitmap = await createImageBitmap(imageBlob, {
            premultiplyAlpha: this.alphaMode === null || this.alphaMode === ALPHA_MODES.UNPACK ? "premultiply" : "none"
          });
          if (this.destroyed)
            return;
          this.source = imageBitmap;
          this.update();
          resolve(this);
        } catch (e) {
          if (this.destroyed)
            return;
          reject(e);
          this.onError.emit(e);
        }
      });
      return this._load;
    }
    upload(renderer, baseTexture, glTexture) {
      if (!(this.source instanceof ImageBitmap)) {
        this.load();
        return false;
      }
      if (typeof this.alphaMode === "number") {
        baseTexture.alphaMode = this.alphaMode;
      }
      return super.upload(renderer, baseTexture, glTexture);
    }
    dispose() {
      if (this.source instanceof ImageBitmap) {
        this.source.close();
      }
      super.dispose();
      this._load = null;
    }
    static test(source) {
      return !!globalThis.createImageBitmap && typeof ImageBitmap !== "undefined" && (typeof source === "string" || source instanceof ImageBitmap);
    }
    static get EMPTY() {
      ImageBitmapResource._EMPTY = ImageBitmapResource._EMPTY ?? settings.ADAPTER.createCanvas(0, 0);
      return ImageBitmapResource._EMPTY;
    }
  }

  INSTALLED.push(ImageBitmapResource, ImageResource, CanvasResource, VideoResource, SVGResource, BufferResource, CubeResource, ArrayResource);

  class DepthResource extends BufferResource {
    upload(renderer, baseTexture, glTexture) {
      const gl = renderer.gl;
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === ALPHA_MODES.UNPACK);
      const width = baseTexture.realWidth;
      const height = baseTexture.realHeight;
      if (glTexture.width === width && glTexture.height === height) {
        gl.texSubImage2D(baseTexture.target, 0, 0, 0, width, height, baseTexture.format, glTexture.type, this.data);
      } else {
        glTexture.width = width;
        glTexture.height = height;
        gl.texImage2D(baseTexture.target, 0, glTexture.internalFormat, width, height, 0, baseTexture.format, glTexture.type, this.data);
      }
      return true;
    }
  }

  class Framebuffer {
    constructor(width, height) {
      this.width = Math.round(width || 100);
      this.height = Math.round(height || 100);
      this.stencil = false;
      this.depth = false;
      this.dirtyId = 0;
      this.dirtyFormat = 0;
      this.dirtySize = 0;
      this.depthTexture = null;
      this.colorTextures = [];
      this.glFramebuffers = {};
      this.disposeRunner = new Runner("disposeFramebuffer");
      this.multisample = MSAA_QUALITY.NONE;
    }
    get colorTexture() {
      return this.colorTextures[0];
    }
    addColorTexture(index = 0, texture) {
      this.colorTextures[index] = texture || new BaseTexture(null, {
        scaleMode: SCALE_MODES.NEAREST,
        resolution: 1,
        mipmap: MIPMAP_MODES.OFF,
        width: this.width,
        height: this.height
      });
      this.dirtyId++;
      this.dirtyFormat++;
      return this;
    }
    addDepthTexture(texture) {
      this.depthTexture = texture || new BaseTexture(new DepthResource(null, { width: this.width, height: this.height }), {
        scaleMode: SCALE_MODES.NEAREST,
        resolution: 1,
        width: this.width,
        height: this.height,
        mipmap: MIPMAP_MODES.OFF,
        format: FORMATS.DEPTH_COMPONENT,
        type: TYPES.UNSIGNED_SHORT
      });
      this.dirtyId++;
      this.dirtyFormat++;
      return this;
    }
    enableDepth() {
      this.depth = true;
      this.dirtyId++;
      this.dirtyFormat++;
      return this;
    }
    enableStencil() {
      this.stencil = true;
      this.dirtyId++;
      this.dirtyFormat++;
      return this;
    }
    resize(width, height) {
      width = Math.round(width);
      height = Math.round(height);
      if (width === this.width && height === this.height)
        return;
      this.width = width;
      this.height = height;
      this.dirtyId++;
      this.dirtySize++;
      for (let i = 0; i < this.colorTextures.length; i++) {
        const texture = this.colorTextures[i];
        const resolution = texture.resolution;
        texture.setSize(width / resolution, height / resolution);
      }
      if (this.depthTexture) {
        const resolution = this.depthTexture.resolution;
        this.depthTexture.setSize(width / resolution, height / resolution);
      }
    }
    dispose() {
      this.disposeRunner.emit(this, false);
    }
    destroyDepthTexture() {
      if (this.depthTexture) {
        this.depthTexture.destroy();
        this.depthTexture = null;
        ++this.dirtyId;
        ++this.dirtyFormat;
      }
    }
  }

  class BaseRenderTexture extends BaseTexture {
    constructor(options = {}) {
      if (typeof options === "number") {
        const width = arguments[0];
        const height = arguments[1];
        const scaleMode = arguments[2];
        const resolution = arguments[3];
        options = { width, height, scaleMode, resolution };
      }
      options.width = options.width || 100;
      options.height = options.height || 100;
      options.multisample ?? (options.multisample = MSAA_QUALITY.NONE);
      super(null, options);
      this.mipmap = MIPMAP_MODES.OFF;
      this.valid = true;
      this.clearColor = [0, 0, 0, 0];
      this.framebuffer = new Framebuffer(this.realWidth, this.realHeight).addColorTexture(0, this);
      this.framebuffer.multisample = options.multisample;
      this.maskStack = [];
      this.filterStack = [{}];
    }
    resize(desiredWidth, desiredHeight) {
      this.framebuffer.resize(desiredWidth * this.resolution, desiredHeight * this.resolution);
      this.setRealSize(this.framebuffer.width, this.framebuffer.height);
    }
    dispose() {
      this.framebuffer.dispose();
      super.dispose();
    }
    destroy() {
      super.destroy();
      this.framebuffer.destroyDepthTexture();
      this.framebuffer = null;
    }
  }

  class TextureUvs {
    constructor() {
      this.x0 = 0;
      this.y0 = 0;
      this.x1 = 1;
      this.y1 = 0;
      this.x2 = 1;
      this.y2 = 1;
      this.x3 = 0;
      this.y3 = 1;
      this.uvsFloat32 = new Float32Array(8);
    }
    set(frame, baseFrame, rotate) {
      const tw = baseFrame.width;
      const th = baseFrame.height;
      if (rotate) {
        const w2 = frame.width / 2 / tw;
        const h2 = frame.height / 2 / th;
        const cX = frame.x / tw + w2;
        const cY = frame.y / th + h2;
        rotate = groupD8.add(rotate, groupD8.NW);
        this.x0 = cX + w2 * groupD8.uX(rotate);
        this.y0 = cY + h2 * groupD8.uY(rotate);
        rotate = groupD8.add(rotate, 2);
        this.x1 = cX + w2 * groupD8.uX(rotate);
        this.y1 = cY + h2 * groupD8.uY(rotate);
        rotate = groupD8.add(rotate, 2);
        this.x2 = cX + w2 * groupD8.uX(rotate);
        this.y2 = cY + h2 * groupD8.uY(rotate);
        rotate = groupD8.add(rotate, 2);
        this.x3 = cX + w2 * groupD8.uX(rotate);
        this.y3 = cY + h2 * groupD8.uY(rotate);
      } else {
        this.x0 = frame.x / tw;
        this.y0 = frame.y / th;
        this.x1 = (frame.x + frame.width) / tw;
        this.y1 = frame.y / th;
        this.x2 = (frame.x + frame.width) / tw;
        this.y2 = (frame.y + frame.height) / th;
        this.x3 = frame.x / tw;
        this.y3 = (frame.y + frame.height) / th;
      }
      this.uvsFloat32[0] = this.x0;
      this.uvsFloat32[1] = this.y0;
      this.uvsFloat32[2] = this.x1;
      this.uvsFloat32[3] = this.y1;
      this.uvsFloat32[4] = this.x2;
      this.uvsFloat32[5] = this.y2;
      this.uvsFloat32[6] = this.x3;
      this.uvsFloat32[7] = this.y3;
    }
  }

  const DEFAULT_UVS = new TextureUvs();
  function removeAllHandlers(tex) {
    tex.destroy = function _emptyDestroy() {
    };
    tex.on = function _emptyOn() {
    };
    tex.once = function _emptyOnce() {
    };
    tex.emit = function _emptyEmit() {
    };
  }
  class Texture extends EventEmitter {
    constructor(baseTexture, frame, orig, trim, rotate, anchor) {
      super();
      this.noFrame = false;
      if (!frame) {
        this.noFrame = true;
        frame = new Rectangle(0, 0, 1, 1);
      }
      if (baseTexture instanceof Texture) {
        baseTexture = baseTexture.baseTexture;
      }
      this.baseTexture = baseTexture;
      this._frame = frame;
      this.trim = trim;
      this.valid = false;
      this._uvs = DEFAULT_UVS;
      this.uvMatrix = null;
      this.orig = orig || frame;
      this._rotate = Number(rotate || 0);
      if (rotate === true) {
        this._rotate = 2;
      } else if (this._rotate % 2 !== 0) {
        throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
      }
      this.defaultAnchor = anchor ? new Point(anchor.x, anchor.y) : new Point(0, 0);
      this._updateID = 0;
      this.textureCacheIds = [];
      if (!baseTexture.valid) {
        baseTexture.once("loaded", this.onBaseTextureUpdated, this);
      } else if (this.noFrame) {
        if (baseTexture.valid) {
          this.onBaseTextureUpdated(baseTexture);
        }
      } else {
        this.frame = frame;
      }
      if (this.noFrame) {
        baseTexture.on("update", this.onBaseTextureUpdated, this);
      }
    }
    update() {
      if (this.baseTexture.resource) {
        this.baseTexture.resource.update();
      }
    }
    onBaseTextureUpdated(baseTexture) {
      if (this.noFrame) {
        if (!this.baseTexture.valid) {
          return;
        }
        this._frame.width = baseTexture.width;
        this._frame.height = baseTexture.height;
        this.valid = true;
        this.updateUvs();
      } else {
        this.frame = this._frame;
      }
      this.emit("update", this);
    }
    destroy(destroyBase) {
      if (this.baseTexture) {
        if (destroyBase) {
          const { resource } = this.baseTexture;
          if (resource?.url && TextureCache[resource.url]) {
            Texture.removeFromCache(resource.url);
          }
          this.baseTexture.destroy();
        }
        this.baseTexture.off("loaded", this.onBaseTextureUpdated, this);
        this.baseTexture.off("update", this.onBaseTextureUpdated, this);
        this.baseTexture = null;
      }
      this._frame = null;
      this._uvs = null;
      this.trim = null;
      this.orig = null;
      this.valid = false;
      Texture.removeFromCache(this);
      this.textureCacheIds = null;
    }
    clone() {
      const clonedFrame = this._frame.clone();
      const clonedOrig = this._frame === this.orig ? clonedFrame : this.orig.clone();
      const clonedTexture = new Texture(this.baseTexture, !this.noFrame && clonedFrame, clonedOrig, this.trim?.clone(), this.rotate, this.defaultAnchor);
      if (this.noFrame) {
        clonedTexture._frame = clonedFrame;
      }
      return clonedTexture;
    }
    updateUvs() {
      if (this._uvs === DEFAULT_UVS) {
        this._uvs = new TextureUvs();
      }
      this._uvs.set(this._frame, this.baseTexture, this.rotate);
      this._updateID++;
    }
    static from(source, options = {}, strict = settings.STRICT_TEXTURE_CACHE) {
      const isFrame = typeof source === "string";
      let cacheId = null;
      if (isFrame) {
        cacheId = source;
      } else if (source instanceof BaseTexture) {
        if (!source.cacheId) {
          const prefix = options?.pixiIdPrefix || "pixiid";
          source.cacheId = `${prefix}-${uid()}`;
          BaseTexture.addToCache(source, source.cacheId);
        }
        cacheId = source.cacheId;
      } else {
        if (!source._pixiId) {
          const prefix = options?.pixiIdPrefix || "pixiid";
          source._pixiId = `${prefix}_${uid()}`;
        }
        cacheId = source._pixiId;
      }
      let texture = TextureCache[cacheId];
      if (isFrame && strict && !texture) {
        throw new Error(`The cacheId "${cacheId}" does not exist in TextureCache.`);
      }
      if (!texture && !(source instanceof BaseTexture)) {
        if (!options.resolution) {
          options.resolution = getResolutionOfUrl(source);
        }
        texture = new Texture(new BaseTexture(source, options));
        texture.baseTexture.cacheId = cacheId;
        BaseTexture.addToCache(texture.baseTexture, cacheId);
        Texture.addToCache(texture, cacheId);
      } else if (!texture && source instanceof BaseTexture) {
        texture = new Texture(source);
        Texture.addToCache(texture, cacheId);
      }
      return texture;
    }
    static fromURL(url, options) {
      const resourceOptions = Object.assign({ autoLoad: false }, options?.resourceOptions);
      const texture = Texture.from(url, Object.assign({ resourceOptions }, options), false);
      const resource = texture.baseTexture.resource;
      if (texture.baseTexture.valid) {
        return Promise.resolve(texture);
      }
      return resource.load().then(() => Promise.resolve(texture));
    }
    static fromBuffer(buffer, width, height, options) {
      return new Texture(BaseTexture.fromBuffer(buffer, width, height, options));
    }
    static fromLoader(source, imageUrl, name, options) {
      const baseTexture = new BaseTexture(source, Object.assign({
        scaleMode: settings.SCALE_MODE,
        resolution: getResolutionOfUrl(imageUrl)
      }, options));
      const { resource } = baseTexture;
      if (resource instanceof ImageResource) {
        resource.url = imageUrl;
      }
      const texture = new Texture(baseTexture);
      if (!name) {
        name = imageUrl;
      }
      BaseTexture.addToCache(texture.baseTexture, name);
      Texture.addToCache(texture, name);
      if (name !== imageUrl) {
        BaseTexture.addToCache(texture.baseTexture, imageUrl);
        Texture.addToCache(texture, imageUrl);
      }
      if (texture.baseTexture.valid) {
        return Promise.resolve(texture);
      }
      return new Promise((resolve) => {
        texture.baseTexture.once("loaded", () => resolve(texture));
      });
    }
    static addToCache(texture, id) {
      if (id) {
        if (!texture.textureCacheIds.includes(id)) {
          texture.textureCacheIds.push(id);
        }
        if (TextureCache[id]) {
          console.warn(`Texture added to the cache with an id [${id}] that already had an entry`);
        }
        TextureCache[id] = texture;
      }
    }
    static removeFromCache(texture) {
      if (typeof texture === "string") {
        const textureFromCache = TextureCache[texture];
        if (textureFromCache) {
          const index = textureFromCache.textureCacheIds.indexOf(texture);
          if (index > -1) {
            textureFromCache.textureCacheIds.splice(index, 1);
          }
          delete TextureCache[texture];
          return textureFromCache;
        }
      } else if (texture?.textureCacheIds) {
        for (let i = 0; i < texture.textureCacheIds.length; ++i) {
          if (TextureCache[texture.textureCacheIds[i]] === texture) {
            delete TextureCache[texture.textureCacheIds[i]];
          }
        }
        texture.textureCacheIds.length = 0;
        return texture;
      }
      return null;
    }
    get resolution() {
      return this.baseTexture.resolution;
    }
    get frame() {
      return this._frame;
    }
    set frame(frame) {
      this._frame = frame;
      this.noFrame = false;
      const { x, y, width, height } = frame;
      const xNotFit = x + width > this.baseTexture.width;
      const yNotFit = y + height > this.baseTexture.height;
      if (xNotFit || yNotFit) {
        const relationship = xNotFit && yNotFit ? "and" : "or";
        const errorX = `X: ${x} + ${width} = ${x + width} > ${this.baseTexture.width}`;
        const errorY = `Y: ${y} + ${height} = ${y + height} > ${this.baseTexture.height}`;
        throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${errorX} ${relationship} ${errorY}`);
      }
      this.valid = width && height && this.baseTexture.valid;
      if (!this.trim && !this.rotate) {
        this.orig = frame;
      }
      if (this.valid) {
        this.updateUvs();
      }
    }
    get rotate() {
      return this._rotate;
    }
    set rotate(rotate) {
      this._rotate = rotate;
      if (this.valid) {
        this.updateUvs();
      }
    }
    get width() {
      return this.orig.width;
    }
    get height() {
      return this.orig.height;
    }
    castToBaseTexture() {
      return this.baseTexture;
    }
    static get EMPTY() {
      if (!Texture._EMPTY) {
        Texture._EMPTY = new Texture(new BaseTexture());
        removeAllHandlers(Texture._EMPTY);
        removeAllHandlers(Texture._EMPTY.baseTexture);
      }
      return Texture._EMPTY;
    }
    static get WHITE() {
      if (!Texture._WHITE) {
        const canvas = settings.ADAPTER.createCanvas(16, 16);
        const context = canvas.getContext("2d");
        canvas.width = 16;
        canvas.height = 16;
        context.fillStyle = "white";
        context.fillRect(0, 0, 16, 16);
        Texture._WHITE = new Texture(BaseTexture.from(canvas));
        removeAllHandlers(Texture._WHITE);
        removeAllHandlers(Texture._WHITE.baseTexture);
      }
      return Texture._WHITE;
    }
  }

  class RenderTexture extends Texture {
    constructor(baseRenderTexture, frame) {
      super(baseRenderTexture, frame);
      this.valid = true;
      this.filterFrame = null;
      this.filterPoolKey = null;
      this.updateUvs();
    }
    get framebuffer() {
      return this.baseTexture.framebuffer;
    }
    get multisample() {
      return this.framebuffer.multisample;
    }
    set multisample(value) {
      this.framebuffer.multisample = value;
    }
    resize(desiredWidth, desiredHeight, resizeBaseTexture = true) {
      const resolution = this.baseTexture.resolution;
      const width = Math.round(desiredWidth * resolution) / resolution;
      const height = Math.round(desiredHeight * resolution) / resolution;
      this.valid = width > 0 && height > 0;
      this._frame.width = this.orig.width = width;
      this._frame.height = this.orig.height = height;
      if (resizeBaseTexture) {
        this.baseTexture.resize(width, height);
      }
      this.updateUvs();
    }
    setResolution(resolution) {
      const { baseTexture } = this;
      if (baseTexture.resolution === resolution) {
        return;
      }
      baseTexture.setResolution(resolution);
      this.resize(baseTexture.width, baseTexture.height, false);
    }
    static create(options) {
      return new RenderTexture(new BaseRenderTexture(options));
    }
  }

  class RenderTexturePool {
    constructor(textureOptions) {
      this.texturePool = {};
      this.textureOptions = textureOptions || {};
      this.enableFullScreen = false;
      this._pixelsWidth = 0;
      this._pixelsHeight = 0;
    }
    createTexture(realWidth, realHeight, multisample = MSAA_QUALITY.NONE) {
      const baseRenderTexture = new BaseRenderTexture(Object.assign({
        width: realWidth,
        height: realHeight,
        resolution: 1,
        multisample
      }, this.textureOptions));
      return new RenderTexture(baseRenderTexture);
    }
    getOptimalTexture(minWidth, minHeight, resolution = 1, multisample = MSAA_QUALITY.NONE) {
      let key;
      minWidth = Math.ceil(minWidth * resolution - 1e-6);
      minHeight = Math.ceil(minHeight * resolution - 1e-6);
      if (!this.enableFullScreen || minWidth !== this._pixelsWidth || minHeight !== this._pixelsHeight) {
        minWidth = nextPow2(minWidth);
        minHeight = nextPow2(minHeight);
        key = ((minWidth & 65535) << 16 | minHeight & 65535) >>> 0;
        if (multisample > 1) {
          key += multisample * 4294967296;
        }
      } else {
        key = multisample > 1 ? -multisample : -1;
      }
      if (!this.texturePool[key]) {
        this.texturePool[key] = [];
      }
      let renderTexture = this.texturePool[key].pop();
      if (!renderTexture) {
        renderTexture = this.createTexture(minWidth, minHeight, multisample);
      }
      renderTexture.filterPoolKey = key;
      renderTexture.setResolution(resolution);
      return renderTexture;
    }
    getFilterTexture(input, resolution, multisample) {
      const filterTexture = this.getOptimalTexture(input.width, input.height, resolution || input.resolution, multisample || MSAA_QUALITY.NONE);
      filterTexture.filterFrame = input.filterFrame;
      return filterTexture;
    }
    returnTexture(renderTexture) {
      const key = renderTexture.filterPoolKey;
      renderTexture.filterFrame = null;
      this.texturePool[key].push(renderTexture);
    }
    returnFilterTexture(renderTexture) {
      this.returnTexture(renderTexture);
    }
    clear(destroyTextures) {
      destroyTextures = destroyTextures !== false;
      if (destroyTextures) {
        for (const i in this.texturePool) {
          const textures = this.texturePool[i];
          if (textures) {
            for (let j = 0; j < textures.length; j++) {
              textures[j].destroy(true);
            }
          }
        }
      }
      this.texturePool = {};
    }
    setScreenSize(size) {
      if (size.width === this._pixelsWidth && size.height === this._pixelsHeight) {
        return;
      }
      this.enableFullScreen = size.width > 0 && size.height > 0;
      for (const i in this.texturePool) {
        if (!(Number(i) < 0)) {
          continue;
        }
        const textures = this.texturePool[i];
        if (textures) {
          for (let j = 0; j < textures.length; j++) {
            textures[j].destroy(true);
          }
        }
        this.texturePool[i] = [];
      }
      this._pixelsWidth = size.width;
      this._pixelsHeight = size.height;
    }
  }
  RenderTexturePool.SCREEN_KEY = -1;

  class Attribute {
    constructor(buffer, size = 0, normalized = false, type = TYPES.FLOAT, stride, start, instance) {
      this.buffer = buffer;
      this.size = size;
      this.normalized = normalized;
      this.type = type;
      this.stride = stride;
      this.start = start;
      this.instance = instance;
    }
    destroy() {
      this.buffer = null;
    }
    static from(buffer, size, normalized, type, stride) {
      return new Attribute(buffer, size, normalized, type, stride);
    }
  }

  let UID$4 = 0;
  class Buffer {
    constructor(data, _static = true, index = false) {
      this.data = data || new Float32Array(1);
      this._glBuffers = {};
      this._updateID = 0;
      this.index = index;
      this.static = _static;
      this.id = UID$4++;
      this.disposeRunner = new Runner("disposeBuffer");
    }
    update(data) {
      if (data instanceof Array) {
        data = new Float32Array(data);
      }
      this.data = data || this.data;
      this._updateID++;
    }
    dispose() {
      this.disposeRunner.emit(this, false);
    }
    destroy() {
      this.dispose();
      this.data = null;
    }
    set index(value) {
      this.type = value ? BUFFER_TYPE.ELEMENT_ARRAY_BUFFER : BUFFER_TYPE.ARRAY_BUFFER;
    }
    get index() {
      return this.type === BUFFER_TYPE.ELEMENT_ARRAY_BUFFER;
    }
    static from(data) {
      if (data instanceof Array) {
        data = new Float32Array(data);
      }
      return new Buffer(data);
    }
  }

  const map$1 = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array
  };
  function interleaveTypedArrays(arrays, sizes) {
    let outSize = 0;
    let stride = 0;
    const views = {};
    for (let i = 0; i < arrays.length; i++) {
      stride += sizes[i];
      outSize += arrays[i].length;
    }
    const buffer = new ArrayBuffer(outSize * 4);
    let out = null;
    let littleOffset = 0;
    for (let i = 0; i < arrays.length; i++) {
      const size = sizes[i];
      const array = arrays[i];
      const type = getBufferType(array);
      if (!views[type]) {
        views[type] = new map$1[type](buffer);
      }
      out = views[type];
      for (let j = 0; j < array.length; j++) {
        const indexStart = (j / size | 0) * stride + littleOffset;
        const index = j % size;
        out[indexStart + index] = array[j];
      }
      littleOffset += size;
    }
    return new Float32Array(buffer);
  }

  const byteSizeMap$1 = { 5126: 4, 5123: 2, 5121: 1 };
  let UID$3 = 0;
  const map = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array,
    Uint16Array
  };
  class Geometry {
    constructor(buffers = [], attributes = {}) {
      this.buffers = buffers;
      this.indexBuffer = null;
      this.attributes = attributes;
      this.glVertexArrayObjects = {};
      this.id = UID$3++;
      this.instanced = false;
      this.instanceCount = 1;
      this.disposeRunner = new Runner("disposeGeometry");
      this.refCount = 0;
    }
    addAttribute(id, buffer, size = 0, normalized = false, type, stride, start, instance = false) {
      if (!buffer) {
        throw new Error("You must pass a buffer when creating an attribute");
      }
      if (!(buffer instanceof Buffer)) {
        if (buffer instanceof Array) {
          buffer = new Float32Array(buffer);
        }
        buffer = new Buffer(buffer);
      }
      const ids = id.split("|");
      if (ids.length > 1) {
        for (let i = 0; i < ids.length; i++) {
          this.addAttribute(ids[i], buffer, size, normalized, type);
        }
        return this;
      }
      let bufferIndex = this.buffers.indexOf(buffer);
      if (bufferIndex === -1) {
        this.buffers.push(buffer);
        bufferIndex = this.buffers.length - 1;
      }
      this.attributes[id] = new Attribute(bufferIndex, size, normalized, type, stride, start, instance);
      this.instanced = this.instanced || instance;
      return this;
    }
    getAttribute(id) {
      return this.attributes[id];
    }
    getBuffer(id) {
      return this.buffers[this.getAttribute(id).buffer];
    }
    addIndex(buffer) {
      if (!(buffer instanceof Buffer)) {
        if (buffer instanceof Array) {
          buffer = new Uint16Array(buffer);
        }
        buffer = new Buffer(buffer);
      }
      buffer.type = BUFFER_TYPE.ELEMENT_ARRAY_BUFFER;
      this.indexBuffer = buffer;
      if (!this.buffers.includes(buffer)) {
        this.buffers.push(buffer);
      }
      return this;
    }
    getIndex() {
      return this.indexBuffer;
    }
    interleave() {
      if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer)
        return this;
      const arrays = [];
      const sizes = [];
      const interleavedBuffer = new Buffer();
      let i;
      for (i in this.attributes) {
        const attribute = this.attributes[i];
        const buffer = this.buffers[attribute.buffer];
        arrays.push(buffer.data);
        sizes.push(attribute.size * byteSizeMap$1[attribute.type] / 4);
        attribute.buffer = 0;
      }
      interleavedBuffer.data = interleaveTypedArrays(arrays, sizes);
      for (i = 0; i < this.buffers.length; i++) {
        if (this.buffers[i] !== this.indexBuffer) {
          this.buffers[i].destroy();
        }
      }
      this.buffers = [interleavedBuffer];
      if (this.indexBuffer) {
        this.buffers.push(this.indexBuffer);
      }
      return this;
    }
    getSize() {
      for (const i in this.attributes) {
        const attribute = this.attributes[i];
        const buffer = this.buffers[attribute.buffer];
        return buffer.data.length / (attribute.stride / 4 || attribute.size);
      }
      return 0;
    }
    dispose() {
      this.disposeRunner.emit(this, false);
    }
    destroy() {
      this.dispose();
      this.buffers = null;
      this.indexBuffer = null;
      this.attributes = null;
    }
    clone() {
      const geometry = new Geometry();
      for (let i = 0; i < this.buffers.length; i++) {
        geometry.buffers[i] = new Buffer(this.buffers[i].data.slice(0));
      }
      for (const i in this.attributes) {
        const attrib = this.attributes[i];
        geometry.attributes[i] = new Attribute(attrib.buffer, attrib.size, attrib.normalized, attrib.type, attrib.stride, attrib.start, attrib.instance);
      }
      if (this.indexBuffer) {
        geometry.indexBuffer = geometry.buffers[this.buffers.indexOf(this.indexBuffer)];
        geometry.indexBuffer.type = BUFFER_TYPE.ELEMENT_ARRAY_BUFFER;
      }
      return geometry;
    }
    static merge(geometries) {
      const geometryOut = new Geometry();
      const arrays = [];
      const sizes = [];
      const offsets = [];
      let geometry;
      for (let i = 0; i < geometries.length; i++) {
        geometry = geometries[i];
        for (let j = 0; j < geometry.buffers.length; j++) {
          sizes[j] = sizes[j] || 0;
          sizes[j] += geometry.buffers[j].data.length;
          offsets[j] = 0;
        }
      }
      for (let i = 0; i < geometry.buffers.length; i++) {
        arrays[i] = new map[getBufferType(geometry.buffers[i].data)](sizes[i]);
        geometryOut.buffers[i] = new Buffer(arrays[i]);
      }
      for (let i = 0; i < geometries.length; i++) {
        geometry = geometries[i];
        for (let j = 0; j < geometry.buffers.length; j++) {
          arrays[j].set(geometry.buffers[j].data, offsets[j]);
          offsets[j] += geometry.buffers[j].data.length;
        }
      }
      geometryOut.attributes = geometry.attributes;
      if (geometry.indexBuffer) {
        geometryOut.indexBuffer = geometryOut.buffers[geometry.buffers.indexOf(geometry.indexBuffer)];
        geometryOut.indexBuffer.type = BUFFER_TYPE.ELEMENT_ARRAY_BUFFER;
        let offset = 0;
        let stride = 0;
        let offset2 = 0;
        let bufferIndexToCount = 0;
        for (let i = 0; i < geometry.buffers.length; i++) {
          if (geometry.buffers[i] !== geometry.indexBuffer) {
            bufferIndexToCount = i;
            break;
          }
        }
        for (const i in geometry.attributes) {
          const attribute = geometry.attributes[i];
          if ((attribute.buffer | 0) === bufferIndexToCount) {
            stride += attribute.size * byteSizeMap$1[attribute.type] / 4;
          }
        }
        for (let i = 0; i < geometries.length; i++) {
          const indexBufferData = geometries[i].indexBuffer.data;
          for (let j = 0; j < indexBufferData.length; j++) {
            geometryOut.indexBuffer.data[j + offset2] += offset;
          }
          offset += geometries[i].buffers[bufferIndexToCount].data.length / stride;
          offset2 += indexBufferData.length;
        }
      }
      return geometryOut;
    }
  }

  class Quad extends Geometry {
    constructor() {
      super();
      this.addAttribute("aVertexPosition", new Float32Array([
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1
      ])).addIndex([0, 1, 3, 2]);
    }
  }

  class QuadUv extends Geometry {
    constructor() {
      super();
      this.vertices = new Float32Array([
        -1,
        -1,
        1,
        -1,
        1,
        1,
        -1,
        1
      ]);
      this.uvs = new Float32Array([
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1
      ]);
      this.vertexBuffer = new Buffer(this.vertices);
      this.uvBuffer = new Buffer(this.uvs);
      this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]);
    }
    map(targetTextureFrame, destinationFrame) {
      let x = 0;
      let y = 0;
      this.uvs[0] = x;
      this.uvs[1] = y;
      this.uvs[2] = x + destinationFrame.width / targetTextureFrame.width;
      this.uvs[3] = y;
      this.uvs[4] = x + destinationFrame.width / targetTextureFrame.width;
      this.uvs[5] = y + destinationFrame.height / targetTextureFrame.height;
      this.uvs[6] = x;
      this.uvs[7] = y + destinationFrame.height / targetTextureFrame.height;
      x = destinationFrame.x;
      y = destinationFrame.y;
      this.vertices[0] = x;
      this.vertices[1] = y;
      this.vertices[2] = x + destinationFrame.width;
      this.vertices[3] = y;
      this.vertices[4] = x + destinationFrame.width;
      this.vertices[5] = y + destinationFrame.height;
      this.vertices[6] = x;
      this.vertices[7] = y + destinationFrame.height;
      this.invalidate();
      return this;
    }
    invalidate() {
      this.vertexBuffer._updateID++;
      this.uvBuffer._updateID++;
      return this;
    }
  }

  let UID$2 = 0;
  class UniformGroup {
    constructor(uniforms, isStatic, isUbo) {
      this.group = true;
      this.syncUniforms = {};
      this.dirtyId = 0;
      this.id = UID$2++;
      this.static = !!isStatic;
      this.ubo = !!isUbo;
      if (uniforms instanceof Buffer) {
        this.buffer = uniforms;
        this.buffer.type = BUFFER_TYPE.UNIFORM_BUFFER;
        this.autoManage = false;
        this.ubo = true;
      } else {
        this.uniforms = uniforms;
        if (this.ubo) {
          this.buffer = new Buffer(new Float32Array(1));
          this.buffer.type = BUFFER_TYPE.UNIFORM_BUFFER;
          this.autoManage = true;
        }
      }
    }
    update() {
      this.dirtyId++;
      if (!this.autoManage && this.buffer) {
        this.buffer.update();
      }
    }
    add(name, uniforms, _static) {
      if (!this.ubo) {
        this.uniforms[name] = new UniformGroup(uniforms, _static);
      } else {
        throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
      }
    }
    static from(uniforms, _static, _ubo) {
      return new UniformGroup(uniforms, _static, _ubo);
    }
    static uboFrom(uniforms, _static) {
      return new UniformGroup(uniforms, _static ?? true, true);
    }
  }

  class FilterState {
    constructor() {
      this.renderTexture = null;
      this.target = null;
      this.legacy = false;
      this.resolution = 1;
      this.multisample = MSAA_QUALITY.NONE;
      this.sourceFrame = new Rectangle();
      this.destinationFrame = new Rectangle();
      this.bindingSourceFrame = new Rectangle();
      this.bindingDestinationFrame = new Rectangle();
      this.filters = [];
      this.transform = null;
    }
    clear() {
      this.target = null;
      this.filters = null;
      this.renderTexture = null;
    }
  }

  const tempPoints = [new Point(), new Point(), new Point(), new Point()];
  const tempMatrix$1 = new Matrix();
  class FilterSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this.defaultFilterStack = [{}];
      this.texturePool = new RenderTexturePool();
      this.statePool = [];
      this.quad = new Quad();
      this.quadUv = new QuadUv();
      this.tempRect = new Rectangle();
      this.activeState = {};
      this.globalUniforms = new UniformGroup({
        outputFrame: new Rectangle(),
        inputSize: new Float32Array(4),
        inputPixel: new Float32Array(4),
        inputClamp: new Float32Array(4),
        resolution: 1,
        filterArea: new Float32Array(4),
        filterClamp: new Float32Array(4)
      }, true);
      this.forceClear = false;
      this.useMaxPadding = false;
    }
    init() {
      this.texturePool.setScreenSize(this.renderer.view);
    }
    push(target, filters) {
      const renderer = this.renderer;
      const filterStack = this.defaultFilterStack;
      const state = this.statePool.pop() || new FilterState();
      const renderTextureSystem = this.renderer.renderTexture;
      let resolution = filters[0].resolution;
      let multisample = filters[0].multisample;
      let padding = filters[0].padding;
      let autoFit = filters[0].autoFit;
      let legacy = filters[0].legacy ?? true;
      for (let i = 1; i < filters.length; i++) {
        const filter = filters[i];
        resolution = Math.min(resolution, filter.resolution);
        multisample = Math.min(multisample, filter.multisample);
        padding = this.useMaxPadding ? Math.max(padding, filter.padding) : padding + filter.padding;
        autoFit = autoFit && filter.autoFit;
        legacy = legacy || (filter.legacy ?? true);
      }
      if (filterStack.length === 1) {
        this.defaultFilterStack[0].renderTexture = renderTextureSystem.current;
      }
      filterStack.push(state);
      state.resolution = resolution;
      state.multisample = multisample;
      state.legacy = legacy;
      state.target = target;
      state.sourceFrame.copyFrom(target.filterArea || target.getBounds(true));
      state.sourceFrame.pad(padding);
      const sourceFrameProjected = this.tempRect.copyFrom(renderTextureSystem.sourceFrame);
      if (renderer.projection.transform) {
        this.transformAABB(tempMatrix$1.copyFrom(renderer.projection.transform).invert(), sourceFrameProjected);
      }
      if (autoFit) {
        state.sourceFrame.fit(sourceFrameProjected);
        if (state.sourceFrame.width <= 0 || state.sourceFrame.height <= 0) {
          state.sourceFrame.width = 0;
          state.sourceFrame.height = 0;
        }
      } else if (!state.sourceFrame.intersects(sourceFrameProjected)) {
        state.sourceFrame.width = 0;
        state.sourceFrame.height = 0;
      }
      this.roundFrame(state.sourceFrame, renderTextureSystem.current ? renderTextureSystem.current.resolution : renderer.resolution, renderTextureSystem.sourceFrame, renderTextureSystem.destinationFrame, renderer.projection.transform);
      state.renderTexture = this.getOptimalFilterTexture(state.sourceFrame.width, state.sourceFrame.height, resolution, multisample);
      state.filters = filters;
      state.destinationFrame.width = state.renderTexture.width;
      state.destinationFrame.height = state.renderTexture.height;
      const destinationFrame = this.tempRect;
      destinationFrame.x = 0;
      destinationFrame.y = 0;
      destinationFrame.width = state.sourceFrame.width;
      destinationFrame.height = state.sourceFrame.height;
      state.renderTexture.filterFrame = state.sourceFrame;
      state.bindingSourceFrame.copyFrom(renderTextureSystem.sourceFrame);
      state.bindingDestinationFrame.copyFrom(renderTextureSystem.destinationFrame);
      state.transform = renderer.projection.transform;
      renderer.projection.transform = null;
      renderTextureSystem.bind(state.renderTexture, state.sourceFrame, destinationFrame);
      renderer.framebuffer.clear(0, 0, 0, 0);
    }
    pop() {
      const filterStack = this.defaultFilterStack;
      const state = filterStack.pop();
      const filters = state.filters;
      this.activeState = state;
      const globalUniforms = this.globalUniforms.uniforms;
      globalUniforms.outputFrame = state.sourceFrame;
      globalUniforms.resolution = state.resolution;
      const inputSize = globalUniforms.inputSize;
      const inputPixel = globalUniforms.inputPixel;
      const inputClamp = globalUniforms.inputClamp;
      inputSize[0] = state.destinationFrame.width;
      inputSize[1] = state.destinationFrame.height;
      inputSize[2] = 1 / inputSize[0];
      inputSize[3] = 1 / inputSize[1];
      inputPixel[0] = Math.round(inputSize[0] * state.resolution);
      inputPixel[1] = Math.round(inputSize[1] * state.resolution);
      inputPixel[2] = 1 / inputPixel[0];
      inputPixel[3] = 1 / inputPixel[1];
      inputClamp[0] = 0.5 * inputPixel[2];
      inputClamp[1] = 0.5 * inputPixel[3];
      inputClamp[2] = state.sourceFrame.width * inputSize[2] - 0.5 * inputPixel[2];
      inputClamp[3] = state.sourceFrame.height * inputSize[3] - 0.5 * inputPixel[3];
      if (state.legacy) {
        const filterArea = globalUniforms.filterArea;
        filterArea[0] = state.destinationFrame.width;
        filterArea[1] = state.destinationFrame.height;
        filterArea[2] = state.sourceFrame.x;
        filterArea[3] = state.sourceFrame.y;
        globalUniforms.filterClamp = globalUniforms.inputClamp;
      }
      this.globalUniforms.update();
      const lastState = filterStack[filterStack.length - 1];
      this.renderer.framebuffer.blit();
      if (filters.length === 1) {
        filters[0].apply(this, state.renderTexture, lastState.renderTexture, CLEAR_MODES.BLEND, state);
        this.returnFilterTexture(state.renderTexture);
      } else {
        let flip = state.renderTexture;
        let flop = this.getOptimalFilterTexture(flip.width, flip.height, state.resolution);
        flop.filterFrame = flip.filterFrame;
        let i = 0;
        for (i = 0; i < filters.length - 1; ++i) {
          if (i === 1 && state.multisample > 1) {
            flop = this.getOptimalFilterTexture(flip.width, flip.height, state.resolution);
            flop.filterFrame = flip.filterFrame;
          }
          filters[i].apply(this, flip, flop, CLEAR_MODES.CLEAR, state);
          const t = flip;
          flip = flop;
          flop = t;
        }
        filters[i].apply(this, flip, lastState.renderTexture, CLEAR_MODES.BLEND, state);
        if (i > 1 && state.multisample > 1) {
          this.returnFilterTexture(state.renderTexture);
        }
        this.returnFilterTexture(flip);
        this.returnFilterTexture(flop);
      }
      state.clear();
      this.statePool.push(state);
    }
    bindAndClear(filterTexture, clearMode = CLEAR_MODES.CLEAR) {
      const {
        renderTexture: renderTextureSystem,
        state: stateSystem
      } = this.renderer;
      if (filterTexture === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture) {
        this.renderer.projection.transform = this.activeState.transform;
      } else {
        this.renderer.projection.transform = null;
      }
      if (filterTexture?.filterFrame) {
        const destinationFrame = this.tempRect;
        destinationFrame.x = 0;
        destinationFrame.y = 0;
        destinationFrame.width = filterTexture.filterFrame.width;
        destinationFrame.height = filterTexture.filterFrame.height;
        renderTextureSystem.bind(filterTexture, filterTexture.filterFrame, destinationFrame);
      } else if (filterTexture !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture) {
        renderTextureSystem.bind(filterTexture);
      } else {
        this.renderer.renderTexture.bind(filterTexture, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
      }
      const autoClear = stateSystem.stateId & 1 || this.forceClear;
      if (clearMode === CLEAR_MODES.CLEAR || clearMode === CLEAR_MODES.BLIT && autoClear) {
        this.renderer.framebuffer.clear(0, 0, 0, 0);
      }
    }
    applyFilter(filter, input, output, clearMode) {
      const renderer = this.renderer;
      renderer.state.set(filter.state);
      this.bindAndClear(output, clearMode);
      filter.uniforms.uSampler = input;
      filter.uniforms.filterGlobals = this.globalUniforms;
      renderer.shader.bind(filter);
      filter.legacy = !!filter.program.attributeData.aTextureCoord;
      if (filter.legacy) {
        this.quadUv.map(input._frame, input.filterFrame);
        renderer.geometry.bind(this.quadUv);
        renderer.geometry.draw(DRAW_MODES.TRIANGLES);
      } else {
        renderer.geometry.bind(this.quad);
        renderer.geometry.draw(DRAW_MODES.TRIANGLE_STRIP);
      }
    }
    calculateSpriteMatrix(outputMatrix, sprite) {
      const { sourceFrame, destinationFrame } = this.activeState;
      const { orig } = sprite._texture;
      const mappedMatrix = outputMatrix.set(destinationFrame.width, 0, 0, destinationFrame.height, sourceFrame.x, sourceFrame.y);
      const worldTransform = sprite.worldTransform.copyTo(Matrix.TEMP_MATRIX);
      worldTransform.invert();
      mappedMatrix.prepend(worldTransform);
      mappedMatrix.scale(1 / orig.width, 1 / orig.height);
      mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);
      return mappedMatrix;
    }
    destroy() {
      this.renderer = null;
      this.texturePool.clear(false);
    }
    getOptimalFilterTexture(minWidth, minHeight, resolution = 1, multisample = MSAA_QUALITY.NONE) {
      return this.texturePool.getOptimalTexture(minWidth, minHeight, resolution, multisample);
    }
    getFilterTexture(input, resolution, multisample) {
      if (typeof input === "number") {
        const swap = input;
        input = resolution;
        resolution = swap;
      }
      input = input || this.activeState.renderTexture;
      const filterTexture = this.texturePool.getOptimalTexture(input.width, input.height, resolution || input.resolution, multisample || MSAA_QUALITY.NONE);
      filterTexture.filterFrame = input.filterFrame;
      return filterTexture;
    }
    returnFilterTexture(renderTexture) {
      this.texturePool.returnTexture(renderTexture);
    }
    emptyPool() {
      this.texturePool.clear(true);
    }
    resize() {
      this.texturePool.setScreenSize(this.renderer.view);
    }
    transformAABB(matrix, rect) {
      const lt = tempPoints[0];
      const lb = tempPoints[1];
      const rt = tempPoints[2];
      const rb = tempPoints[3];
      lt.set(rect.left, rect.top);
      lb.set(rect.left, rect.bottom);
      rt.set(rect.right, rect.top);
      rb.set(rect.right, rect.bottom);
      matrix.apply(lt, lt);
      matrix.apply(lb, lb);
      matrix.apply(rt, rt);
      matrix.apply(rb, rb);
      const x0 = Math.min(lt.x, lb.x, rt.x, rb.x);
      const y0 = Math.min(lt.y, lb.y, rt.y, rb.y);
      const x1 = Math.max(lt.x, lb.x, rt.x, rb.x);
      const y1 = Math.max(lt.y, lb.y, rt.y, rb.y);
      rect.x = x0;
      rect.y = y0;
      rect.width = x1 - x0;
      rect.height = y1 - y0;
    }
    roundFrame(frame, resolution, bindingSourceFrame, bindingDestinationFrame, transform) {
      if (frame.width <= 0 || frame.height <= 0 || bindingSourceFrame.width <= 0 || bindingSourceFrame.height <= 0) {
        return;
      }
      if (transform) {
        const { a, b, c, d } = transform;
        if ((Math.abs(b) > 1e-4 || Math.abs(c) > 1e-4) && (Math.abs(a) > 1e-4 || Math.abs(d) > 1e-4)) {
          return;
        }
      }
      transform = transform ? tempMatrix$1.copyFrom(transform) : tempMatrix$1.identity();
      transform.translate(-bindingSourceFrame.x, -bindingSourceFrame.y).scale(bindingDestinationFrame.width / bindingSourceFrame.width, bindingDestinationFrame.height / bindingSourceFrame.height).translate(bindingDestinationFrame.x, bindingDestinationFrame.y);
      this.transformAABB(transform, frame);
      frame.ceil(resolution);
      this.transformAABB(transform.invert(), frame);
    }
  }
  FilterSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "filter"
  };
  extensions.add(FilterSystem);

  class ObjectRenderer {
    constructor(renderer) {
      this.renderer = renderer;
    }
    flush() {
    }
    destroy() {
      this.renderer = null;
    }
    start() {
    }
    stop() {
      this.flush();
    }
    render(_object) {
    }
  }

  class BatchSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this.emptyRenderer = new ObjectRenderer(renderer);
      this.currentRenderer = this.emptyRenderer;
    }
    setObjectRenderer(objectRenderer) {
      if (this.currentRenderer === objectRenderer) {
        return;
      }
      this.currentRenderer.stop();
      this.currentRenderer = objectRenderer;
      this.currentRenderer.start();
    }
    flush() {
      this.setObjectRenderer(this.emptyRenderer);
    }
    reset() {
      this.setObjectRenderer(this.emptyRenderer);
    }
    copyBoundTextures(arr, maxTextures) {
      const { boundTextures } = this.renderer.texture;
      for (let i = maxTextures - 1; i >= 0; --i) {
        arr[i] = boundTextures[i] || null;
        if (arr[i]) {
          arr[i]._batchLocation = i;
        }
      }
    }
    boundArray(texArray, boundTextures, batchId, maxTextures) {
      const { elements, ids, count } = texArray;
      let j = 0;
      for (let i = 0; i < count; i++) {
        const tex = elements[i];
        const loc = tex._batchLocation;
        if (loc >= 0 && loc < maxTextures && boundTextures[loc] === tex) {
          ids[i] = loc;
          continue;
        }
        while (j < maxTextures) {
          const bound = boundTextures[j];
          if (bound && bound._batchEnabled === batchId && bound._batchLocation === j) {
            j++;
            continue;
          }
          ids[i] = j;
          tex._batchLocation = j;
          boundTextures[j] = tex;
          break;
        }
      }
    }
    destroy() {
      this.renderer = null;
    }
  }
  BatchSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "batch"
  };
  extensions.add(BatchSystem);

  let CONTEXT_UID_COUNTER = 0;
  class ContextSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this.webGLVersion = 1;
      this.extensions = {};
      this.supports = {
        uint32Indices: false
      };
      this.handleContextLost = this.handleContextLost.bind(this);
      this.handleContextRestored = this.handleContextRestored.bind(this);
    }
    get isLost() {
      return !this.gl || this.gl.isContextLost();
    }
    contextChange(gl) {
      this.gl = gl;
      this.renderer.gl = gl;
      this.renderer.CONTEXT_UID = CONTEXT_UID_COUNTER++;
      if (gl.isContextLost() && gl.getExtension("WEBGL_lose_context")) {
        gl.getExtension("WEBGL_lose_context").restoreContext();
      }
    }
    init(options) {
      if (options.context) {
        this.initFromContext(options.context);
      } else {
        const alpha = this.renderer.background.alpha < 1;
        const premultipliedAlpha = options.premultipliedAlpha ?? true;
        this.preserveDrawingBuffer = options.preserveDrawingBuffer;
        this.useContextAlpha = options.useContextAlpha;
        this.powerPreference = options.powerPreference;
        this.initFromOptions({
          alpha,
          premultipliedAlpha,
          antialias: options.antialias,
          stencil: true,
          preserveDrawingBuffer: options.preserveDrawingBuffer,
          powerPreference: options.powerPreference
        });
      }
    }
    initFromContext(gl) {
      this.gl = gl;
      this.validateContext(gl);
      this.renderer.gl = gl;
      this.renderer.CONTEXT_UID = CONTEXT_UID_COUNTER++;
      this.renderer.runners.contextChange.emit(gl);
      const view = this.renderer.view;
      if (view.addEventListener !== void 0) {
        view.addEventListener("webglcontextlost", this.handleContextLost, false);
        view.addEventListener("webglcontextrestored", this.handleContextRestored, false);
      }
    }
    initFromOptions(options) {
      const gl = this.createContext(this.renderer.view, options);
      this.initFromContext(gl);
    }
    createContext(canvas, options) {
      let gl;
      if (settings.PREFER_ENV >= ENV.WEBGL2) {
        gl = canvas.getContext("webgl2", options);
      }
      if (gl) {
        this.webGLVersion = 2;
      } else {
        this.webGLVersion = 1;
        gl = canvas.getContext("webgl", options) || canvas.getContext("experimental-webgl", options);
        if (!gl) {
          throw new Error("This browser does not support WebGL. Try using the canvas renderer");
        }
      }
      this.gl = gl;
      this.getExtensions();
      return this.gl;
    }
    getExtensions() {
      const { gl } = this;
      const common = {
        anisotropicFiltering: gl.getExtension("EXT_texture_filter_anisotropic"),
        floatTextureLinear: gl.getExtension("OES_texture_float_linear"),
        s3tc: gl.getExtension("WEBGL_compressed_texture_s3tc"),
        s3tc_sRGB: gl.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
        etc: gl.getExtension("WEBGL_compressed_texture_etc"),
        etc1: gl.getExtension("WEBGL_compressed_texture_etc1"),
        pvrtc: gl.getExtension("WEBGL_compressed_texture_pvrtc") || gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        atc: gl.getExtension("WEBGL_compressed_texture_atc"),
        astc: gl.getExtension("WEBGL_compressed_texture_astc")
      };
      if (this.webGLVersion === 1) {
        Object.assign(this.extensions, common, {
          drawBuffers: gl.getExtension("WEBGL_draw_buffers"),
          depthTexture: gl.getExtension("WEBGL_depth_texture"),
          loseContext: gl.getExtension("WEBGL_lose_context"),
          vertexArrayObject: gl.getExtension("OES_vertex_array_object") || gl.getExtension("MOZ_OES_vertex_array_object") || gl.getExtension("WEBKIT_OES_vertex_array_object"),
          uint32ElementIndex: gl.getExtension("OES_element_index_uint"),
          floatTexture: gl.getExtension("OES_texture_float"),
          floatTextureLinear: gl.getExtension("OES_texture_float_linear"),
          textureHalfFloat: gl.getExtension("OES_texture_half_float"),
          textureHalfFloatLinear: gl.getExtension("OES_texture_half_float_linear")
        });
      } else if (this.webGLVersion === 2) {
        Object.assign(this.extensions, common, {
          colorBufferFloat: gl.getExtension("EXT_color_buffer_float")
        });
      }
    }
    handleContextLost(event) {
      event.preventDefault();
    }
    handleContextRestored() {
      this.renderer.runners.contextChange.emit(this.gl);
    }
    destroy() {
      const view = this.renderer.view;
      this.renderer = null;
      if (view.removeEventListener !== void 0) {
        view.removeEventListener("webglcontextlost", this.handleContextLost);
        view.removeEventListener("webglcontextrestored", this.handleContextRestored);
      }
      this.gl.useProgram(null);
      if (this.extensions.loseContext) {
        this.extensions.loseContext.loseContext();
      }
    }
    postrender() {
      if (this.renderer.objectRenderer.renderingToScreen) {
        this.gl.flush();
      }
    }
    validateContext(gl) {
      const attributes = gl.getContextAttributes();
      const isWebGl2 = "WebGL2RenderingContext" in globalThis && gl instanceof globalThis.WebGL2RenderingContext;
      if (isWebGl2) {
        this.webGLVersion = 2;
      }
      if (attributes && !attributes.stencil) {
        console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
      }
      const hasuint32 = isWebGl2 || !!gl.getExtension("OES_element_index_uint");
      this.supports.uint32Indices = hasuint32;
      if (!hasuint32) {
        console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly");
      }
    }
  }
  ContextSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "context"
  };
  extensions.add(ContextSystem);

  class GLFramebuffer {
    constructor(framebuffer) {
      this.framebuffer = framebuffer;
      this.stencil = null;
      this.dirtyId = -1;
      this.dirtyFormat = -1;
      this.dirtySize = -1;
      this.multisample = MSAA_QUALITY.NONE;
      this.msaaBuffer = null;
      this.blitFramebuffer = null;
      this.mipLevel = 0;
    }
  }

  const tempRectangle = new Rectangle();
  class FramebufferSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this.managedFramebuffers = [];
      this.unknownFramebuffer = new Framebuffer(10, 10);
      this.msaaSamples = null;
    }
    contextChange() {
      const gl = this.gl = this.renderer.gl;
      this.CONTEXT_UID = this.renderer.CONTEXT_UID;
      this.current = this.unknownFramebuffer;
      this.viewport = new Rectangle();
      this.hasMRT = true;
      this.writeDepthTexture = true;
      this.disposeAll(true);
      if (this.renderer.context.webGLVersion === 1) {
        let nativeDrawBuffersExtension = this.renderer.context.extensions.drawBuffers;
        let nativeDepthTextureExtension = this.renderer.context.extensions.depthTexture;
        if (settings.PREFER_ENV === ENV.WEBGL_LEGACY) {
          nativeDrawBuffersExtension = null;
          nativeDepthTextureExtension = null;
        }
        if (nativeDrawBuffersExtension) {
          gl.drawBuffers = (activeTextures) => nativeDrawBuffersExtension.drawBuffersWEBGL(activeTextures);
        } else {
          this.hasMRT = false;
          gl.drawBuffers = () => {
          };
        }
        if (!nativeDepthTextureExtension) {
          this.writeDepthTexture = false;
        }
      } else {
        this.msaaSamples = gl.getInternalformatParameter(gl.RENDERBUFFER, gl.RGBA8, gl.SAMPLES);
      }
    }
    bind(framebuffer, frame, mipLevel = 0) {
      const { gl } = this;
      if (framebuffer) {
        const fbo = framebuffer.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(framebuffer);
        if (this.current !== framebuffer) {
          this.current = framebuffer;
          gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.framebuffer);
        }
        if (fbo.mipLevel !== mipLevel) {
          framebuffer.dirtyId++;
          framebuffer.dirtyFormat++;
          fbo.mipLevel = mipLevel;
        }
        if (fbo.dirtyId !== framebuffer.dirtyId) {
          fbo.dirtyId = framebuffer.dirtyId;
          if (fbo.dirtyFormat !== framebuffer.dirtyFormat) {
            fbo.dirtyFormat = framebuffer.dirtyFormat;
            fbo.dirtySize = framebuffer.dirtySize;
            this.updateFramebuffer(framebuffer, mipLevel);
          } else if (fbo.dirtySize !== framebuffer.dirtySize) {
            fbo.dirtySize = framebuffer.dirtySize;
            this.resizeFramebuffer(framebuffer);
          }
        }
        for (let i = 0; i < framebuffer.colorTextures.length; i++) {
          const tex = framebuffer.colorTextures[i];
          this.renderer.texture.unbind(tex.parentTextureArray || tex);
        }
        if (framebuffer.depthTexture) {
          this.renderer.texture.unbind(framebuffer.depthTexture);
        }
        if (frame) {
          const mipWidth = frame.width >> mipLevel;
          const mipHeight = frame.height >> mipLevel;
          const scale = mipWidth / frame.width;
          this.setViewport(frame.x * scale, frame.y * scale, mipWidth, mipHeight);
        } else {
          const mipWidth = framebuffer.width >> mipLevel;
          const mipHeight = framebuffer.height >> mipLevel;
          this.setViewport(0, 0, mipWidth, mipHeight);
        }
      } else {
        if (this.current) {
          this.current = null;
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }
        if (frame) {
          this.setViewport(frame.x, frame.y, frame.width, frame.height);
        } else {
          this.setViewport(0, 0, this.renderer.width, this.renderer.height);
        }
      }
    }
    setViewport(x, y, width, height) {
      const v = this.viewport;
      x = Math.round(x);
      y = Math.round(y);
      width = Math.round(width);
      height = Math.round(height);
      if (v.width !== width || v.height !== height || v.x !== x || v.y !== y) {
        v.x = x;
        v.y = y;
        v.width = width;
        v.height = height;
        this.gl.viewport(x, y, width, height);
      }
    }
    get size() {
      if (this.current) {
        return { x: 0, y: 0, width: this.current.width, height: this.current.height };
      }
      return { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height };
    }
    clear(r, g, b, a, mask = BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH) {
      const { gl } = this;
      gl.clearColor(r, g, b, a);
      gl.clear(mask);
    }
    initFramebuffer(framebuffer) {
      const { gl } = this;
      const fbo = new GLFramebuffer(gl.createFramebuffer());
      fbo.multisample = this.detectSamples(framebuffer.multisample);
      framebuffer.glFramebuffers[this.CONTEXT_UID] = fbo;
      this.managedFramebuffers.push(framebuffer);
      framebuffer.disposeRunner.add(this);
      return fbo;
    }
    resizeFramebuffer(framebuffer) {
      const { gl } = this;
      const fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
      if (fbo.stencil) {
        gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.stencil);
        if (fbo.msaaBuffer) {
          gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, gl.DEPTH24_STENCIL8, framebuffer.width, framebuffer.height);
        } else {
          gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, framebuffer.width, framebuffer.height);
        }
      }
      const colorTextures = framebuffer.colorTextures;
      let count = colorTextures.length;
      if (!gl.drawBuffers) {
        count = Math.min(count, 1);
      }
      for (let i = 0; i < count; i++) {
        const texture = colorTextures[i];
        const parentTexture = texture.parentTextureArray || texture;
        this.renderer.texture.bind(parentTexture, 0);
        if (i === 0 && fbo.msaaBuffer) {
          gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.msaaBuffer);
          gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, parentTexture._glTextures[this.CONTEXT_UID].internalFormat, framebuffer.width, framebuffer.height);
        }
      }
      if (framebuffer.depthTexture && this.writeDepthTexture) {
        this.renderer.texture.bind(framebuffer.depthTexture, 0);
      }
    }
    updateFramebuffer(framebuffer, mipLevel) {
      const { gl } = this;
      const fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
      const colorTextures = framebuffer.colorTextures;
      let count = colorTextures.length;
      if (!gl.drawBuffers) {
        count = Math.min(count, 1);
      }
      if (fbo.multisample > 1 && this.canMultisampleFramebuffer(framebuffer)) {
        fbo.msaaBuffer = fbo.msaaBuffer || gl.createRenderbuffer();
      } else if (fbo.msaaBuffer) {
        gl.deleteRenderbuffer(fbo.msaaBuffer);
        fbo.msaaBuffer = null;
        if (fbo.blitFramebuffer) {
          fbo.blitFramebuffer.dispose();
          fbo.blitFramebuffer = null;
        }
      }
      const activeTextures = [];
      for (let i = 0; i < count; i++) {
        const texture = colorTextures[i];
        const parentTexture = texture.parentTextureArray || texture;
        this.renderer.texture.bind(parentTexture, 0);
        if (i === 0 && fbo.msaaBuffer) {
          gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.msaaBuffer);
          gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, parentTexture._glTextures[this.CONTEXT_UID].internalFormat, framebuffer.width, framebuffer.height);
          gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, fbo.msaaBuffer);
        } else {
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, texture.target, parentTexture._glTextures[this.CONTEXT_UID].texture, mipLevel);
          activeTextures.push(gl.COLOR_ATTACHMENT0 + i);
        }
      }
      if (activeTextures.length > 1) {
        gl.drawBuffers(activeTextures);
      }
      if (framebuffer.depthTexture) {
        const writeDepthTexture = this.writeDepthTexture;
        if (writeDepthTexture) {
          const depthTexture = framebuffer.depthTexture;
          this.renderer.texture.bind(depthTexture, 0);
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depthTexture._glTextures[this.CONTEXT_UID].texture, mipLevel);
        }
      }
      if ((framebuffer.stencil || framebuffer.depth) && !(framebuffer.depthTexture && this.writeDepthTexture)) {
        fbo.stencil = fbo.stencil || gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.stencil);
        if (fbo.msaaBuffer) {
          gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, gl.DEPTH24_STENCIL8, framebuffer.width, framebuffer.height);
        } else {
          gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, framebuffer.width, framebuffer.height);
        }
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, fbo.stencil);
      } else if (fbo.stencil) {
        gl.deleteRenderbuffer(fbo.stencil);
        fbo.stencil = null;
      }
    }
    canMultisampleFramebuffer(framebuffer) {
      return this.renderer.context.webGLVersion !== 1 && framebuffer.colorTextures.length <= 1 && !framebuffer.depthTexture;
    }
    detectSamples(samples) {
      const { msaaSamples } = this;
      let res = MSAA_QUALITY.NONE;
      if (samples <= 1 || msaaSamples === null) {
        return res;
      }
      for (let i = 0; i < msaaSamples.length; i++) {
        if (msaaSamples[i] <= samples) {
          res = msaaSamples[i];
          break;
        }
      }
      if (res === 1) {
        res = MSAA_QUALITY.NONE;
      }
      return res;
    }
    blit(framebuffer, sourcePixels, destPixels) {
      const { current, renderer, gl, CONTEXT_UID } = this;
      if (renderer.context.webGLVersion !== 2) {
        return;
      }
      if (!current) {
        return;
      }
      const fbo = current.glFramebuffers[CONTEXT_UID];
      if (!fbo) {
        return;
      }
      if (!framebuffer) {
        if (!fbo.msaaBuffer) {
          return;
        }
        const colorTexture = current.colorTextures[0];
        if (!colorTexture) {
          return;
        }
        if (!fbo.blitFramebuffer) {
          fbo.blitFramebuffer = new Framebuffer(current.width, current.height);
          fbo.blitFramebuffer.addColorTexture(0, colorTexture);
        }
        framebuffer = fbo.blitFramebuffer;
        if (framebuffer.colorTextures[0] !== colorTexture) {
          framebuffer.colorTextures[0] = colorTexture;
          framebuffer.dirtyId++;
          framebuffer.dirtyFormat++;
        }
        if (framebuffer.width !== current.width || framebuffer.height !== current.height) {
          framebuffer.width = current.width;
          framebuffer.height = current.height;
          framebuffer.dirtyId++;
          framebuffer.dirtySize++;
        }
      }
      if (!sourcePixels) {
        sourcePixels = tempRectangle;
        sourcePixels.width = current.width;
        sourcePixels.height = current.height;
      }
      if (!destPixels) {
        destPixels = sourcePixels;
      }
      const sameSize = sourcePixels.width === destPixels.width && sourcePixels.height === destPixels.height;
      this.bind(framebuffer);
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, fbo.framebuffer);
      gl.blitFramebuffer(sourcePixels.left, sourcePixels.top, sourcePixels.right, sourcePixels.bottom, destPixels.left, destPixels.top, destPixels.right, destPixels.bottom, gl.COLOR_BUFFER_BIT, sameSize ? gl.NEAREST : gl.LINEAR);
    }
    disposeFramebuffer(framebuffer, contextLost) {
      const fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
      const gl = this.gl;
      if (!fbo) {
        return;
      }
      delete framebuffer.glFramebuffers[this.CONTEXT_UID];
      const index = this.managedFramebuffers.indexOf(framebuffer);
      if (index >= 0) {
        this.managedFramebuffers.splice(index, 1);
      }
      framebuffer.disposeRunner.remove(this);
      if (!contextLost) {
        gl.deleteFramebuffer(fbo.framebuffer);
        if (fbo.msaaBuffer) {
          gl.deleteRenderbuffer(fbo.msaaBuffer);
        }
        if (fbo.stencil) {
          gl.deleteRenderbuffer(fbo.stencil);
        }
      }
      if (fbo.blitFramebuffer) {
        fbo.blitFramebuffer.dispose();
      }
    }
    disposeAll(contextLost) {
      const list = this.managedFramebuffers;
      this.managedFramebuffers = [];
      for (let i = 0; i < list.length; i++) {
        this.disposeFramebuffer(list[i], contextLost);
      }
    }
    forceStencil() {
      const framebuffer = this.current;
      if (!framebuffer) {
        return;
      }
      const fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
      if (!fbo || fbo.stencil) {
        return;
      }
      framebuffer.stencil = true;
      const w = framebuffer.width;
      const h = framebuffer.height;
      const gl = this.gl;
      const stencil = gl.createRenderbuffer();
      gl.bindRenderbuffer(gl.RENDERBUFFER, stencil);
      if (fbo.msaaBuffer) {
        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, gl.DEPTH24_STENCIL8, w, h);
      } else {
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, w, h);
      }
      fbo.stencil = stencil;
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, stencil);
    }
    reset() {
      this.current = this.unknownFramebuffer;
      this.viewport = new Rectangle();
    }
    destroy() {
      this.renderer = null;
    }
  }
  FramebufferSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "framebuffer"
  };
  extensions.add(FramebufferSystem);

  const byteSizeMap = { 5126: 4, 5123: 2, 5121: 1 };
  class GeometrySystem {
    constructor(renderer) {
      this.renderer = renderer;
      this._activeGeometry = null;
      this._activeVao = null;
      this.hasVao = true;
      this.hasInstance = true;
      this.canUseUInt32ElementIndex = false;
      this.managedGeometries = {};
    }
    contextChange() {
      this.disposeAll(true);
      const gl = this.gl = this.renderer.gl;
      const context = this.renderer.context;
      this.CONTEXT_UID = this.renderer.CONTEXT_UID;
      if (context.webGLVersion !== 2) {
        let nativeVaoExtension = this.renderer.context.extensions.vertexArrayObject;
        if (settings.PREFER_ENV === ENV.WEBGL_LEGACY) {
          nativeVaoExtension = null;
        }
        if (nativeVaoExtension) {
          gl.createVertexArray = () => nativeVaoExtension.createVertexArrayOES();
          gl.bindVertexArray = (vao) => nativeVaoExtension.bindVertexArrayOES(vao);
          gl.deleteVertexArray = (vao) => nativeVaoExtension.deleteVertexArrayOES(vao);
        } else {
          this.hasVao = false;
          gl.createVertexArray = () => null;
          gl.bindVertexArray = () => null;
          gl.deleteVertexArray = () => null;
        }
      }
      if (context.webGLVersion !== 2) {
        const instanceExt = gl.getExtension("ANGLE_instanced_arrays");
        if (instanceExt) {
          gl.vertexAttribDivisor = (a, b) => instanceExt.vertexAttribDivisorANGLE(a, b);
          gl.drawElementsInstanced = (a, b, c, d, e) => instanceExt.drawElementsInstancedANGLE(a, b, c, d, e);
          gl.drawArraysInstanced = (a, b, c, d) => instanceExt.drawArraysInstancedANGLE(a, b, c, d);
        } else {
          this.hasInstance = false;
        }
      }
      this.canUseUInt32ElementIndex = context.webGLVersion === 2 || !!context.extensions.uint32ElementIndex;
    }
    bind(geometry, shader) {
      shader = shader || this.renderer.shader.shader;
      const { gl } = this;
      let vaos = geometry.glVertexArrayObjects[this.CONTEXT_UID];
      let incRefCount = false;
      if (!vaos) {
        this.managedGeometries[geometry.id] = geometry;
        geometry.disposeRunner.add(this);
        geometry.glVertexArrayObjects[this.CONTEXT_UID] = vaos = {};
        incRefCount = true;
      }
      const vao = vaos[shader.program.id] || this.initGeometryVao(geometry, shader, incRefCount);
      this._activeGeometry = geometry;
      if (this._activeVao !== vao) {
        this._activeVao = vao;
        if (this.hasVao) {
          gl.bindVertexArray(vao);
        } else {
          this.activateVao(geometry, shader.program);
        }
      }
      this.updateBuffers();
    }
    reset() {
      this.unbind();
    }
    updateBuffers() {
      const geometry = this._activeGeometry;
      const bufferSystem = this.renderer.buffer;
      for (let i = 0; i < geometry.buffers.length; i++) {
        const buffer = geometry.buffers[i];
        bufferSystem.update(buffer);
      }
    }
    checkCompatibility(geometry, program) {
      const geometryAttributes = geometry.attributes;
      const shaderAttributes = program.attributeData;
      for (const j in shaderAttributes) {
        if (!geometryAttributes[j]) {
          throw new Error(`shader and geometry incompatible, geometry missing the "${j}" attribute`);
        }
      }
    }
    getSignature(geometry, program) {
      const attribs = geometry.attributes;
      const shaderAttributes = program.attributeData;
      const strings = ["g", geometry.id];
      for (const i in attribs) {
        if (shaderAttributes[i]) {
          strings.push(i, shaderAttributes[i].location);
        }
      }
      return strings.join("-");
    }
    initGeometryVao(geometry, shader, incRefCount = true) {
      const gl = this.gl;
      const CONTEXT_UID = this.CONTEXT_UID;
      const bufferSystem = this.renderer.buffer;
      const program = shader.program;
      if (!program.glPrograms[CONTEXT_UID]) {
        this.renderer.shader.generateProgram(shader);
      }
      this.checkCompatibility(geometry, program);
      const signature = this.getSignature(geometry, program);
      const vaoObjectHash = geometry.glVertexArrayObjects[this.CONTEXT_UID];
      let vao = vaoObjectHash[signature];
      if (vao) {
        vaoObjectHash[program.id] = vao;
        return vao;
      }
      const buffers = geometry.buffers;
      const attributes = geometry.attributes;
      const tempStride = {};
      const tempStart = {};
      for (const j in buffers) {
        tempStride[j] = 0;
        tempStart[j] = 0;
      }
      for (const j in attributes) {
        if (!attributes[j].size && program.attributeData[j]) {
          attributes[j].size = program.attributeData[j].size;
        } else if (!attributes[j].size) {
          console.warn(`PIXI Geometry attribute '${j}' size cannot be determined (likely the bound shader does not have the attribute)`);
        }
        tempStride[attributes[j].buffer] += attributes[j].size * byteSizeMap[attributes[j].type];
      }
      for (const j in attributes) {
        const attribute = attributes[j];
        const attribSize = attribute.size;
        if (attribute.stride === void 0) {
          if (tempStride[attribute.buffer] === attribSize * byteSizeMap[attribute.type]) {
            attribute.stride = 0;
          } else {
            attribute.stride = tempStride[attribute.buffer];
          }
        }
        if (attribute.start === void 0) {
          attribute.start = tempStart[attribute.buffer];
          tempStart[attribute.buffer] += attribSize * byteSizeMap[attribute.type];
        }
      }
      vao = gl.createVertexArray();
      gl.bindVertexArray(vao);
      for (let i = 0; i < buffers.length; i++) {
        const buffer = buffers[i];
        bufferSystem.bind(buffer);
        if (incRefCount) {
          buffer._glBuffers[CONTEXT_UID].refCount++;
        }
      }
      this.activateVao(geometry, program);
      vaoObjectHash[program.id] = vao;
      vaoObjectHash[signature] = vao;
      gl.bindVertexArray(null);
      bufferSystem.unbind(BUFFER_TYPE.ARRAY_BUFFER);
      return vao;
    }
    disposeGeometry(geometry, contextLost) {
      if (!this.managedGeometries[geometry.id]) {
        return;
      }
      delete this.managedGeometries[geometry.id];
      const vaos = geometry.glVertexArrayObjects[this.CONTEXT_UID];
      const gl = this.gl;
      const buffers = geometry.buffers;
      const bufferSystem = this.renderer?.buffer;
      geometry.disposeRunner.remove(this);
      if (!vaos) {
        return;
      }
      if (bufferSystem) {
        for (let i = 0; i < buffers.length; i++) {
          const buf = buffers[i]._glBuffers[this.CONTEXT_UID];
          if (buf) {
            buf.refCount--;
            if (buf.refCount === 0 && !contextLost) {
              bufferSystem.dispose(buffers[i], contextLost);
            }
          }
        }
      }
      if (!contextLost) {
        for (const vaoId in vaos) {
          if (vaoId[0] === "g") {
            const vao = vaos[vaoId];
            if (this._activeVao === vao) {
              this.unbind();
            }
            gl.deleteVertexArray(vao);
          }
        }
      }
      delete geometry.glVertexArrayObjects[this.CONTEXT_UID];
    }
    disposeAll(contextLost) {
      const all = Object.keys(this.managedGeometries);
      for (let i = 0; i < all.length; i++) {
        this.disposeGeometry(this.managedGeometries[all[i]], contextLost);
      }
    }
    activateVao(geometry, program) {
      const gl = this.gl;
      const CONTEXT_UID = this.CONTEXT_UID;
      const bufferSystem = this.renderer.buffer;
      const buffers = geometry.buffers;
      const attributes = geometry.attributes;
      if (geometry.indexBuffer) {
        bufferSystem.bind(geometry.indexBuffer);
      }
      let lastBuffer = null;
      for (const j in attributes) {
        const attribute = attributes[j];
        const buffer = buffers[attribute.buffer];
        const glBuffer = buffer._glBuffers[CONTEXT_UID];
        if (program.attributeData[j]) {
          if (lastBuffer !== glBuffer) {
            bufferSystem.bind(buffer);
            lastBuffer = glBuffer;
          }
          const location = program.attributeData[j].location;
          gl.enableVertexAttribArray(location);
          gl.vertexAttribPointer(location, attribute.size, attribute.type || gl.FLOAT, attribute.normalized, attribute.stride, attribute.start);
          if (attribute.instance) {
            if (this.hasInstance) {
              gl.vertexAttribDivisor(location, 1);
            } else {
              throw new Error("geometry error, GPU Instancing is not supported on this device");
            }
          }
        }
      }
    }
    draw(type, size, start, instanceCount) {
      const { gl } = this;
      const geometry = this._activeGeometry;
      if (geometry.indexBuffer) {
        const byteSize = geometry.indexBuffer.data.BYTES_PER_ELEMENT;
        const glType = byteSize === 2 ? gl.UNSIGNED_SHORT : gl.UNSIGNED_INT;
        if (byteSize === 2 || byteSize === 4 && this.canUseUInt32ElementIndex) {
          if (geometry.instanced) {
            gl.drawElementsInstanced(type, size || geometry.indexBuffer.data.length, glType, (start || 0) * byteSize, instanceCount || 1);
          } else {
            gl.drawElements(type, size || geometry.indexBuffer.data.length, glType, (start || 0) * byteSize);
          }
        } else {
          console.warn("unsupported index buffer type: uint32");
        }
      } else if (geometry.instanced) {
        gl.drawArraysInstanced(type, start, size || geometry.getSize(), instanceCount || 1);
      } else {
        gl.drawArrays(type, start, size || geometry.getSize());
      }
      return this;
    }
    unbind() {
      this.gl.bindVertexArray(null);
      this._activeVao = null;
      this._activeGeometry = null;
    }
    destroy() {
      this.renderer = null;
    }
  }
  GeometrySystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "geometry"
  };
  extensions.add(GeometrySystem);

  class MaskData {
    constructor(maskObject = null) {
      this.type = MASK_TYPES.NONE;
      this.autoDetect = true;
      this.maskObject = maskObject || null;
      this.pooled = false;
      this.isMaskData = true;
      this.resolution = null;
      this.multisample = settings.FILTER_MULTISAMPLE;
      this.enabled = true;
      this.colorMask = 15;
      this._filters = null;
      this._stencilCounter = 0;
      this._scissorCounter = 0;
      this._scissorRect = null;
      this._scissorRectLocal = null;
      this._colorMask = 15;
      this._target = null;
    }
    get filter() {
      return this._filters ? this._filters[0] : null;
    }
    set filter(value) {
      if (value) {
        if (this._filters) {
          this._filters[0] = value;
        } else {
          this._filters = [value];
        }
      } else {
        this._filters = null;
      }
    }
    reset() {
      if (this.pooled) {
        this.maskObject = null;
        this.type = MASK_TYPES.NONE;
        this.autoDetect = true;
      }
      this._target = null;
      this._scissorRectLocal = null;
    }
    copyCountersOrReset(maskAbove) {
      if (maskAbove) {
        this._stencilCounter = maskAbove._stencilCounter;
        this._scissorCounter = maskAbove._scissorCounter;
        this._scissorRect = maskAbove._scissorRect;
      } else {
        this._stencilCounter = 0;
        this._scissorCounter = 0;
        this._scissorRect = null;
      }
    }
  }

  function compileShader(gl, type, src) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    return shader;
  }

  function logPrettyShaderError(gl, shader) {
    const shaderSrc = gl.getShaderSource(shader).split("\n").map((line, index) => `${index}: ${line}`);
    const shaderLog = gl.getShaderInfoLog(shader);
    const splitShader = shaderLog.split("\n");
    const dedupe = {};
    const lineNumbers = splitShader.map((line) => parseFloat(line.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter((n) => {
      if (n && !dedupe[n]) {
        dedupe[n] = true;
        return true;
      }
      return false;
    });
    const logArgs = [""];
    lineNumbers.forEach((number) => {
      shaderSrc[number - 1] = `%c${shaderSrc[number - 1]}%c`;
      logArgs.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
    });
    const fragmentSourceToLog = shaderSrc.join("\n");
    logArgs[0] = fragmentSourceToLog;
    console.error(shaderLog);
    console.groupCollapsed("click to view full shader code");
    console.warn(...logArgs);
    console.groupEnd();
  }
  function logProgramError(gl, program, vertexShader, fragmentShader) {
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        logPrettyShaderError(gl, vertexShader);
      }
      if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        logPrettyShaderError(gl, fragmentShader);
      }
      console.error("PixiJS Error: Could not initialize shader.");
      if (gl.getProgramInfoLog(program) !== "") {
        console.warn("PixiJS Warning: gl.getProgramInfoLog()", gl.getProgramInfoLog(program));
      }
    }
  }

  function booleanArray(size) {
    const array = new Array(size);
    for (let i = 0; i < array.length; i++) {
      array[i] = false;
    }
    return array;
  }
  function defaultValue(type, size) {
    switch (type) {
      case "float":
        return 0;
      case "vec2":
        return new Float32Array(2 * size);
      case "vec3":
        return new Float32Array(3 * size);
      case "vec4":
        return new Float32Array(4 * size);
      case "int":
      case "uint":
      case "sampler2D":
      case "sampler2DArray":
        return 0;
      case "ivec2":
        return new Int32Array(2 * size);
      case "ivec3":
        return new Int32Array(3 * size);
      case "ivec4":
        return new Int32Array(4 * size);
      case "uvec2":
        return new Uint32Array(2 * size);
      case "uvec3":
        return new Uint32Array(3 * size);
      case "uvec4":
        return new Uint32Array(4 * size);
      case "bool":
        return false;
      case "bvec2":
        return booleanArray(2 * size);
      case "bvec3":
        return booleanArray(3 * size);
      case "bvec4":
        return booleanArray(4 * size);
      case "mat2":
        return new Float32Array([
          1,
          0,
          0,
          1
        ]);
      case "mat3":
        return new Float32Array([
          1,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          1
        ]);
      case "mat4":
        return new Float32Array([
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        ]);
    }
    return null;
  }

  const unknownContext = {};
  let context = unknownContext;
  function getTestContext() {
    if (context === unknownContext || context?.isContextLost()) {
      const canvas = settings.ADAPTER.createCanvas();
      let gl;
      if (settings.PREFER_ENV >= ENV.WEBGL2) {
        gl = canvas.getContext("webgl2", {});
      }
      if (!gl) {
        gl = canvas.getContext("webgl", {}) || canvas.getContext("experimental-webgl", {});
        if (!gl) {
          gl = null;
        } else {
          gl.getExtension("WEBGL_draw_buffers");
        }
      }
      context = gl;
    }
    return context;
  }

  let maxFragmentPrecision;
  function getMaxFragmentPrecision() {
    if (!maxFragmentPrecision) {
      maxFragmentPrecision = PRECISION.MEDIUM;
      const gl = getTestContext();
      if (gl) {
        if (gl.getShaderPrecisionFormat) {
          const shaderFragment = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
          maxFragmentPrecision = shaderFragment.precision ? PRECISION.HIGH : PRECISION.MEDIUM;
        }
      }
    }
    return maxFragmentPrecision;
  }

  function setPrecision(src, requestedPrecision, maxSupportedPrecision) {
    if (src.substring(0, 9) !== "precision") {
      let precision = requestedPrecision;
      if (requestedPrecision === PRECISION.HIGH && maxSupportedPrecision !== PRECISION.HIGH) {
        precision = PRECISION.MEDIUM;
      }
      return `precision ${precision} float;
${src}`;
    } else if (maxSupportedPrecision !== PRECISION.HIGH && src.substring(0, 15) === "precision highp") {
      return src.replace("precision highp", "precision mediump");
    }
    return src;
  }

  const GLSL_TO_SIZE = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    int: 1,
    ivec2: 2,
    ivec3: 3,
    ivec4: 4,
    uint: 1,
    uvec2: 2,
    uvec3: 3,
    uvec4: 4,
    bool: 1,
    bvec2: 2,
    bvec3: 3,
    bvec4: 4,
    mat2: 4,
    mat3: 9,
    mat4: 16,
    sampler2D: 1
  };
  function mapSize(type) {
    return GLSL_TO_SIZE[type];
  }

  let GL_TABLE = null;
  const GL_TO_GLSL_TYPES = {
    FLOAT: "float",
    FLOAT_VEC2: "vec2",
    FLOAT_VEC3: "vec3",
    FLOAT_VEC4: "vec4",
    INT: "int",
    INT_VEC2: "ivec2",
    INT_VEC3: "ivec3",
    INT_VEC4: "ivec4",
    UNSIGNED_INT: "uint",
    UNSIGNED_INT_VEC2: "uvec2",
    UNSIGNED_INT_VEC3: "uvec3",
    UNSIGNED_INT_VEC4: "uvec4",
    BOOL: "bool",
    BOOL_VEC2: "bvec2",
    BOOL_VEC3: "bvec3",
    BOOL_VEC4: "bvec4",
    FLOAT_MAT2: "mat2",
    FLOAT_MAT3: "mat3",
    FLOAT_MAT4: "mat4",
    SAMPLER_2D: "sampler2D",
    INT_SAMPLER_2D: "sampler2D",
    UNSIGNED_INT_SAMPLER_2D: "sampler2D",
    SAMPLER_CUBE: "samplerCube",
    INT_SAMPLER_CUBE: "samplerCube",
    UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
    SAMPLER_2D_ARRAY: "sampler2DArray",
    INT_SAMPLER_2D_ARRAY: "sampler2DArray",
    UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
  };
  function mapType(gl, type) {
    if (!GL_TABLE) {
      const typeNames = Object.keys(GL_TO_GLSL_TYPES);
      GL_TABLE = {};
      for (let i = 0; i < typeNames.length; ++i) {
        const tn = typeNames[i];
        GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
      }
    }
    return GL_TABLE[type];
  }

  const uniformParsers = [
    {
      test: (data) => data.type === "float" && data.size === 1 && !data.isArray,
      code: (name) => `
            if(uv["${name}"] !== ud["${name}"].value)
            {
                ud["${name}"].value = uv["${name}"]
                gl.uniform1f(ud["${name}"].location, uv["${name}"])
            }
            `
    },
    {
      test: (data, uniform) => (data.type === "sampler2D" || data.type === "samplerCube" || data.type === "sampler2DArray") && data.size === 1 && !data.isArray && (uniform == null || uniform.castToBaseTexture !== void 0),
      code: (name) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${name}"], t);

            if(ud["${name}"].value !== t)
            {
                ud["${name}"].value = t;
                gl.uniform1i(ud["${name}"].location, t);
; // eslint-disable-line max-len
            }`
    },
    {
      test: (data, uniform) => data.type === "mat3" && data.size === 1 && !data.isArray && uniform.a !== void 0,
      code: (name) => `
            gl.uniformMatrix3fv(ud["${name}"].location, false, uv["${name}"].toArray(true));
            `,
      codeUbo: (name) => `
                var ${name}_matrix = uv.${name}.toArray(true);

                data[offset] = ${name}_matrix[0];
                data[offset+1] = ${name}_matrix[1];
                data[offset+2] = ${name}_matrix[2];
        
                data[offset + 4] = ${name}_matrix[3];
                data[offset + 5] = ${name}_matrix[4];
                data[offset + 6] = ${name}_matrix[5];
        
                data[offset + 8] = ${name}_matrix[6];
                data[offset + 9] = ${name}_matrix[7];
                data[offset + 10] = ${name}_matrix[8];
            `
    },
    {
      test: (data, uniform) => data.type === "vec2" && data.size === 1 && !data.isArray && uniform.x !== void 0,
      code: (name) => `
                cv = ud["${name}"].value;
                v = uv["${name}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${name}"].location, v.x, v.y);
                }`,
      codeUbo: (name) => `
                v = uv.${name};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `
    },
    {
      test: (data) => data.type === "vec2" && data.size === 1 && !data.isArray,
      code: (name) => `
                cv = ud["${name}"].value;
                v = uv["${name}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${name}"].location, v[0], v[1]);
                }
            `
    },
    {
      test: (data, uniform) => data.type === "vec4" && data.size === 1 && !data.isArray && uniform.width !== void 0,
      code: (name) => `
                cv = ud["${name}"].value;
                v = uv["${name}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${name}"].location, v.x, v.y, v.width, v.height)
                }`,
      codeUbo: (name) => `
                    v = uv.${name};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `
    },
    {
      test: (data) => data.type === "vec4" && data.size === 1 && !data.isArray,
      code: (name) => `
                cv = ud["${name}"].value;
                v = uv["${name}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${name}"].location, v[0], v[1], v[2], v[3])
                }`
    }
  ];

  const GLSL_TO_SINGLE_SETTERS_CACHED = {
    float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
    vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
    vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
    vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
    int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
    ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
    ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
    uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
    uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
    uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
    uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
    bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
    bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
    bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
    bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
    mat2: "gl.uniformMatrix2fv(location, false, v)",
    mat3: "gl.uniformMatrix3fv(location, false, v)",
    mat4: "gl.uniformMatrix4fv(location, false, v)",
    sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`
  };
  const GLSL_TO_ARRAY_SETTERS = {
    float: `gl.uniform1fv(location, v)`,
    vec2: `gl.uniform2fv(location, v)`,
    vec3: `gl.uniform3fv(location, v)`,
    vec4: "gl.uniform4fv(location, v)",
    mat4: "gl.uniformMatrix4fv(location, false, v)",
    mat3: "gl.uniformMatrix3fv(location, false, v)",
    mat2: "gl.uniformMatrix2fv(location, false, v)",
    int: "gl.uniform1iv(location, v)",
    ivec2: "gl.uniform2iv(location, v)",
    ivec3: "gl.uniform3iv(location, v)",
    ivec4: "gl.uniform4iv(location, v)",
    uint: "gl.uniform1uiv(location, v)",
    uvec2: "gl.uniform2uiv(location, v)",
    uvec3: "gl.uniform3uiv(location, v)",
    uvec4: "gl.uniform4uiv(location, v)",
    bool: "gl.uniform1iv(location, v)",
    bvec2: "gl.uniform2iv(location, v)",
    bvec3: "gl.uniform3iv(location, v)",
    bvec4: "gl.uniform4iv(location, v)",
    sampler2D: "gl.uniform1iv(location, v)",
    samplerCube: "gl.uniform1iv(location, v)",
    sampler2DArray: "gl.uniform1iv(location, v)"
  };
  function generateUniformsSync(group, uniformData) {
    const funcFragments = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];
    for (const i in group.uniforms) {
      const data = uniformData[i];
      if (!data) {
        if (group.uniforms[i]?.group) {
          if (group.uniforms[i].ubo) {
            funcFragments.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${i}, '${i}');
                    `);
          } else {
            funcFragments.push(`
                        renderer.shader.syncUniformGroup(uv.${i}, syncData);
                    `);
          }
        }
        continue;
      }
      const uniform = group.uniforms[i];
      let parsed = false;
      for (let j = 0; j < uniformParsers.length; j++) {
        if (uniformParsers[j].test(data, uniform)) {
          funcFragments.push(uniformParsers[j].code(i, uniform));
          parsed = true;
          break;
        }
      }
      if (!parsed) {
        const templateType = data.size === 1 && !data.isArray ? GLSL_TO_SINGLE_SETTERS_CACHED : GLSL_TO_ARRAY_SETTERS;
        const template = templateType[data.type].replace("location", `ud["${i}"].location`);
        funcFragments.push(`
            cu = ud["${i}"];
            cv = cu.value;
            v = uv["${i}"];
            ${template};`);
      }
    }
    return new Function("ud", "uv", "renderer", "syncData", funcFragments.join("\n"));
  }

  const fragTemplate = [
    "precision mediump float;",
    "void main(void){",
    "float test = 0.1;",
    "%forloop%",
    "gl_FragColor = vec4(0.0);",
    "}"
  ].join("\n");
  function generateIfTestSrc(maxIfs) {
    let src = "";
    for (let i = 0; i < maxIfs; ++i) {
      if (i > 0) {
        src += "\nelse ";
      }
      if (i < maxIfs - 1) {
        src += `if(test == ${i}.0){}`;
      }
    }
    return src;
  }
  function checkMaxIfStatementsInShader(maxIfs, gl) {
    if (maxIfs === 0) {
      throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
    }
    const shader = gl.createShader(gl.FRAGMENT_SHADER);
    while (true) {
      const fragmentSrc = fragTemplate.replace(/%forloop%/gi, generateIfTestSrc(maxIfs));
      gl.shaderSource(shader, fragmentSrc);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        maxIfs = maxIfs / 2 | 0;
      } else {
        break;
      }
    }
    return maxIfs;
  }

  let unsafeEval;
  function unsafeEvalSupported() {
    if (typeof unsafeEval === "boolean") {
      return unsafeEval;
    }
    try {
      const func = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
      unsafeEval = func({ a: "b" }, "a", "b") === true;
    } catch (e) {
      unsafeEval = false;
    }
    return unsafeEval;
  }

  var defaultFragment$2 = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";

  var defaultVertex$2 = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";

  let UID$1 = 0;
  const nameCache = {};
  class Program {
    constructor(vertexSrc, fragmentSrc, name = "pixi-shader", extra = {}) {
      this.extra = {};
      this.id = UID$1++;
      this.vertexSrc = vertexSrc || Program.defaultVertexSrc;
      this.fragmentSrc = fragmentSrc || Program.defaultFragmentSrc;
      this.vertexSrc = this.vertexSrc.trim();
      this.fragmentSrc = this.fragmentSrc.trim();
      this.extra = extra;
      if (this.vertexSrc.substring(0, 8) !== "#version") {
        name = name.replace(/\s+/g, "-");
        if (nameCache[name]) {
          nameCache[name]++;
          name += `-${nameCache[name]}`;
        } else {
          nameCache[name] = 1;
        }
        this.vertexSrc = `#define SHADER_NAME ${name}
${this.vertexSrc}`;
        this.fragmentSrc = `#define SHADER_NAME ${name}
${this.fragmentSrc}`;
        this.vertexSrc = setPrecision(this.vertexSrc, settings.PRECISION_VERTEX, PRECISION.HIGH);
        this.fragmentSrc = setPrecision(this.fragmentSrc, settings.PRECISION_FRAGMENT, getMaxFragmentPrecision());
      }
      this.glPrograms = {};
      this.syncUniforms = null;
    }
    static get defaultVertexSrc() {
      return defaultVertex$2;
    }
    static get defaultFragmentSrc() {
      return defaultFragment$2;
    }
    static from(vertexSrc, fragmentSrc, name) {
      const key = vertexSrc + fragmentSrc;
      let program = ProgramCache[key];
      if (!program) {
        ProgramCache[key] = program = new Program(vertexSrc, fragmentSrc, name);
      }
      return program;
    }
  }

  class Shader {
    constructor(program, uniforms) {
      this.uniformBindCount = 0;
      this.program = program;
      if (uniforms) {
        if (uniforms instanceof UniformGroup) {
          this.uniformGroup = uniforms;
        } else {
          this.uniformGroup = new UniformGroup(uniforms);
        }
      } else {
        this.uniformGroup = new UniformGroup({});
      }
      this.disposeRunner = new Runner("disposeShader");
    }
    checkUniformExists(name, group) {
      if (group.uniforms[name]) {
        return true;
      }
      for (const i in group.uniforms) {
        const uniform = group.uniforms[i];
        if (uniform.group) {
          if (this.checkUniformExists(name, uniform)) {
            return true;
          }
        }
      }
      return false;
    }
    destroy() {
      this.uniformGroup = null;
      this.disposeRunner.emit(this);
      this.disposeRunner.destroy();
    }
    get uniforms() {
      return this.uniformGroup.uniforms;
    }
    static from(vertexSrc, fragmentSrc, uniforms) {
      const program = Program.from(vertexSrc, fragmentSrc);
      return new Shader(program, uniforms);
    }
  }

  const BLEND$1 = 0;
  const OFFSET$1 = 1;
  const CULLING$1 = 2;
  const DEPTH_TEST$1 = 3;
  const WINDING$1 = 4;
  const DEPTH_MASK$1 = 5;
  class State {
    constructor() {
      this.data = 0;
      this.blendMode = BLEND_MODES.NORMAL;
      this.polygonOffset = 0;
      this.blend = true;
      this.depthMask = true;
    }
    get blend() {
      return !!(this.data & 1 << BLEND$1);
    }
    set blend(value) {
      if (!!(this.data & 1 << BLEND$1) !== value) {
        this.data ^= 1 << BLEND$1;
      }
    }
    get offsets() {
      return !!(this.data & 1 << OFFSET$1);
    }
    set offsets(value) {
      if (!!(this.data & 1 << OFFSET$1) !== value) {
        this.data ^= 1 << OFFSET$1;
      }
    }
    get culling() {
      return !!(this.data & 1 << CULLING$1);
    }
    set culling(value) {
      if (!!(this.data & 1 << CULLING$1) !== value) {
        this.data ^= 1 << CULLING$1;
      }
    }
    get depthTest() {
      return !!(this.data & 1 << DEPTH_TEST$1);
    }
    set depthTest(value) {
      if (!!(this.data & 1 << DEPTH_TEST$1) !== value) {
        this.data ^= 1 << DEPTH_TEST$1;
      }
    }
    get depthMask() {
      return !!(this.data & 1 << DEPTH_MASK$1);
    }
    set depthMask(value) {
      if (!!(this.data & 1 << DEPTH_MASK$1) !== value) {
        this.data ^= 1 << DEPTH_MASK$1;
      }
    }
    get clockwiseFrontFace() {
      return !!(this.data & 1 << WINDING$1);
    }
    set clockwiseFrontFace(value) {
      if (!!(this.data & 1 << WINDING$1) !== value) {
        this.data ^= 1 << WINDING$1;
      }
    }
    get blendMode() {
      return this._blendMode;
    }
    set blendMode(value) {
      this.blend = value !== BLEND_MODES.NONE;
      this._blendMode = value;
    }
    get polygonOffset() {
      return this._polygonOffset;
    }
    set polygonOffset(value) {
      this.offsets = !!value;
      this._polygonOffset = value;
    }
    static for2d() {
      const state = new State();
      state.depthTest = false;
      state.blend = true;
      return state;
    }
  }

  var defaultFragment$1 = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n";

  var defaultVertex$1 = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";

  class Filter extends Shader {
    constructor(vertexSrc, fragmentSrc, uniforms) {
      const program = Program.from(vertexSrc || Filter.defaultVertexSrc, fragmentSrc || Filter.defaultFragmentSrc);
      super(program, uniforms);
      this.padding = 0;
      this.resolution = settings.FILTER_RESOLUTION;
      this.multisample = settings.FILTER_MULTISAMPLE;
      this.enabled = true;
      this.autoFit = true;
      this.state = new State();
    }
    apply(filterManager, input, output, clearMode, _currentState) {
      filterManager.applyFilter(this, input, output, clearMode);
    }
    get blendMode() {
      return this.state.blendMode;
    }
    set blendMode(value) {
      this.state.blendMode = value;
    }
    get resolution() {
      return this._resolution;
    }
    set resolution(value) {
      this._resolution = value;
    }
    static get defaultVertexSrc() {
      return defaultVertex$1;
    }
    static get defaultFragmentSrc() {
      return defaultFragment$1;
    }
  }

  var vertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n";

  var fragment = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n";

  const tempMat = new Matrix();
  class TextureMatrix {
    constructor(texture, clampMargin) {
      this._texture = texture;
      this.mapCoord = new Matrix();
      this.uClampFrame = new Float32Array(4);
      this.uClampOffset = new Float32Array(2);
      this._textureID = -1;
      this._updateID = 0;
      this.clampOffset = 0;
      this.clampMargin = typeof clampMargin === "undefined" ? 0.5 : clampMargin;
      this.isSimple = false;
    }
    get texture() {
      return this._texture;
    }
    set texture(value) {
      this._texture = value;
      this._textureID = -1;
    }
    multiplyUvs(uvs, out) {
      if (out === void 0) {
        out = uvs;
      }
      const mat = this.mapCoord;
      for (let i = 0; i < uvs.length; i += 2) {
        const x = uvs[i];
        const y = uvs[i + 1];
        out[i] = x * mat.a + y * mat.c + mat.tx;
        out[i + 1] = x * mat.b + y * mat.d + mat.ty;
      }
      return out;
    }
    update(forceUpdate) {
      const tex = this._texture;
      if (!tex || !tex.valid) {
        return false;
      }
      if (!forceUpdate && this._textureID === tex._updateID) {
        return false;
      }
      this._textureID = tex._updateID;
      this._updateID++;
      const uvs = tex._uvs;
      this.mapCoord.set(uvs.x1 - uvs.x0, uvs.y1 - uvs.y0, uvs.x3 - uvs.x0, uvs.y3 - uvs.y0, uvs.x0, uvs.y0);
      const orig = tex.orig;
      const trim = tex.trim;
      if (trim) {
        tempMat.set(orig.width / trim.width, 0, 0, orig.height / trim.height, -trim.x / trim.width, -trim.y / trim.height);
        this.mapCoord.append(tempMat);
      }
      const texBase = tex.baseTexture;
      const frame = this.uClampFrame;
      const margin = this.clampMargin / texBase.resolution;
      const offset = this.clampOffset;
      frame[0] = (tex._frame.x + margin + offset) / texBase.width;
      frame[1] = (tex._frame.y + margin + offset) / texBase.height;
      frame[2] = (tex._frame.x + tex._frame.width - margin + offset) / texBase.width;
      frame[3] = (tex._frame.y + tex._frame.height - margin + offset) / texBase.height;
      this.uClampOffset[0] = offset / texBase.realWidth;
      this.uClampOffset[1] = offset / texBase.realHeight;
      this.isSimple = tex._frame.width === texBase.width && tex._frame.height === texBase.height && tex.rotate === 0;
      return true;
    }
  }

  class SpriteMaskFilter extends Filter {
    constructor(vertexSrc, fragmentSrc, uniforms) {
      let sprite = null;
      if (typeof vertexSrc !== "string" && fragmentSrc === void 0 && uniforms === void 0) {
        sprite = vertexSrc;
        vertexSrc = void 0;
        fragmentSrc = void 0;
        uniforms = void 0;
      }
      super(vertexSrc || vertex, fragmentSrc || fragment, uniforms);
      this.maskSprite = sprite;
      this.maskMatrix = new Matrix();
    }
    get maskSprite() {
      return this._maskSprite;
    }
    set maskSprite(value) {
      this._maskSprite = value;
      if (this._maskSprite) {
        this._maskSprite.renderable = false;
      }
    }
    apply(filterManager, input, output, clearMode) {
      const maskSprite = this._maskSprite;
      const tex = maskSprite._texture;
      if (!tex.valid) {
        return;
      }
      if (!tex.uvMatrix) {
        tex.uvMatrix = new TextureMatrix(tex, 0);
      }
      tex.uvMatrix.update();
      this.uniforms.npmAlpha = tex.baseTexture.alphaMode ? 0 : 1;
      this.uniforms.mask = tex;
      this.uniforms.otherMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, maskSprite).prepend(tex.uvMatrix.mapCoord);
      this.uniforms.alpha = maskSprite.worldAlpha;
      this.uniforms.maskClamp = tex.uvMatrix.uClampFrame;
      filterManager.applyFilter(this, input, output, clearMode);
    }
  }

  class MaskSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this.enableScissor = true;
      this.alphaMaskPool = [];
      this.maskDataPool = [];
      this.maskStack = [];
      this.alphaMaskIndex = 0;
    }
    setMaskStack(maskStack) {
      this.maskStack = maskStack;
      this.renderer.scissor.setMaskStack(maskStack);
      this.renderer.stencil.setMaskStack(maskStack);
    }
    push(target, maskDataOrTarget) {
      let maskData = maskDataOrTarget;
      if (!maskData.isMaskData) {
        const d = this.maskDataPool.pop() || new MaskData();
        d.pooled = true;
        d.maskObject = maskDataOrTarget;
        maskData = d;
      }
      const maskAbove = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
      maskData.copyCountersOrReset(maskAbove);
      maskData._colorMask = maskAbove ? maskAbove._colorMask : 15;
      if (maskData.autoDetect) {
        this.detect(maskData);
      }
      maskData._target = target;
      if (maskData.type !== MASK_TYPES.SPRITE) {
        this.maskStack.push(maskData);
      }
      if (maskData.enabled) {
        switch (maskData.type) {
          case MASK_TYPES.SCISSOR:
            this.renderer.scissor.push(maskData);
            break;
          case MASK_TYPES.STENCIL:
            this.renderer.stencil.push(maskData);
            break;
          case MASK_TYPES.SPRITE:
            maskData.copyCountersOrReset(null);
            this.pushSpriteMask(maskData);
            break;
          case MASK_TYPES.COLOR:
            this.pushColorMask(maskData);
            break;
        }
      }
      if (maskData.type === MASK_TYPES.SPRITE) {
        this.maskStack.push(maskData);
      }
    }
    pop(target) {
      const maskData = this.maskStack.pop();
      if (!maskData || maskData._target !== target) {
        return;
      }
      if (maskData.enabled) {
        switch (maskData.type) {
          case MASK_TYPES.SCISSOR:
            this.renderer.scissor.pop(maskData);
            break;
          case MASK_TYPES.STENCIL:
            this.renderer.stencil.pop(maskData.maskObject);
            break;
          case MASK_TYPES.SPRITE:
            this.popSpriteMask(maskData);
            break;
          case MASK_TYPES.COLOR:
            this.popColorMask(maskData);
            break;
        }
      }
      maskData.reset();
      if (maskData.pooled) {
        this.maskDataPool.push(maskData);
      }
      if (this.maskStack.length !== 0) {
        const maskCurrent = this.maskStack[this.maskStack.length - 1];
        if (maskCurrent.type === MASK_TYPES.SPRITE && maskCurrent._filters) {
          maskCurrent._filters[0].maskSprite = maskCurrent.maskObject;
        }
      }
    }
    detect(maskData) {
      const maskObject = maskData.maskObject;
      if (!maskObject) {
        maskData.type = MASK_TYPES.COLOR;
      } else if (maskObject.isSprite) {
        maskData.type = MASK_TYPES.SPRITE;
      } else if (this.enableScissor && this.renderer.scissor.testScissor(maskData)) {
        maskData.type = MASK_TYPES.SCISSOR;
      } else {
        maskData.type = MASK_TYPES.STENCIL;
      }
    }
    pushSpriteMask(maskData) {
      const { maskObject } = maskData;
      const target = maskData._target;
      let alphaMaskFilter = maskData._filters;
      if (!alphaMaskFilter) {
        alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex];
        if (!alphaMaskFilter) {
          alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex] = [new SpriteMaskFilter()];
        }
      }
      const renderer = this.renderer;
      const renderTextureSystem = renderer.renderTexture;
      let resolution;
      let multisample;
      if (renderTextureSystem.current) {
        const renderTexture = renderTextureSystem.current;
        resolution = maskData.resolution || renderTexture.resolution;
        multisample = maskData.multisample ?? renderTexture.multisample;
      } else {
        resolution = maskData.resolution || renderer.resolution;
        multisample = maskData.multisample ?? renderer.multisample;
      }
      alphaMaskFilter[0].resolution = resolution;
      alphaMaskFilter[0].multisample = multisample;
      alphaMaskFilter[0].maskSprite = maskObject;
      const stashFilterArea = target.filterArea;
      target.filterArea = maskObject.getBounds(true);
      renderer.filter.push(target, alphaMaskFilter);
      target.filterArea = stashFilterArea;
      if (!maskData._filters) {
        this.alphaMaskIndex++;
      }
    }
    popSpriteMask(maskData) {
      this.renderer.filter.pop();
      if (maskData._filters) {
        maskData._filters[0].maskSprite = null;
      } else {
        this.alphaMaskIndex--;
        this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null;
      }
    }
    pushColorMask(maskData) {
      const currColorMask = maskData._colorMask;
      const nextColorMask = maskData._colorMask = currColorMask & maskData.colorMask;
      if (nextColorMask !== currColorMask) {
        this.renderer.gl.colorMask((nextColorMask & 1) !== 0, (nextColorMask & 2) !== 0, (nextColorMask & 4) !== 0, (nextColorMask & 8) !== 0);
      }
    }
    popColorMask(maskData) {
      const currColorMask = maskData._colorMask;
      const nextColorMask = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
      if (nextColorMask !== currColorMask) {
        this.renderer.gl.colorMask((nextColorMask & 1) !== 0, (nextColorMask & 2) !== 0, (nextColorMask & 4) !== 0, (nextColorMask & 8) !== 0);
      }
    }
    destroy() {
      this.renderer = null;
    }
  }
  MaskSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "mask"
  };
  extensions.add(MaskSystem);

  class AbstractMaskSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this.maskStack = [];
      this.glConst = 0;
    }
    getStackLength() {
      return this.maskStack.length;
    }
    setMaskStack(maskStack) {
      const { gl } = this.renderer;
      const curStackLen = this.getStackLength();
      this.maskStack = maskStack;
      const newStackLen = this.getStackLength();
      if (newStackLen !== curStackLen) {
        if (newStackLen === 0) {
          gl.disable(this.glConst);
        } else {
          gl.enable(this.glConst);
          this._useCurrent();
        }
      }
    }
    _useCurrent() {
    }
    destroy() {
      this.renderer = null;
      this.maskStack = null;
    }
  }

  const tempMatrix = new Matrix();
  const rectPool = [];
  const _ScissorSystem = class extends AbstractMaskSystem {
    constructor(renderer) {
      super(renderer);
      this.glConst = settings.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST;
    }
    getStackLength() {
      const maskData = this.maskStack[this.maskStack.length - 1];
      if (maskData) {
        return maskData._scissorCounter;
      }
      return 0;
    }
    calcScissorRect(maskData) {
      if (maskData._scissorRectLocal) {
        return;
      }
      const prevData = maskData._scissorRect;
      const { maskObject } = maskData;
      const { renderer } = this;
      const renderTextureSystem = renderer.renderTexture;
      const rect = maskObject.getBounds(true, rectPool.pop() ?? new Rectangle());
      this.roundFrameToPixels(rect, renderTextureSystem.current ? renderTextureSystem.current.resolution : renderer.resolution, renderTextureSystem.sourceFrame, renderTextureSystem.destinationFrame, renderer.projection.transform);
      if (prevData) {
        rect.fit(prevData);
      }
      maskData._scissorRectLocal = rect;
    }
    static isMatrixRotated(matrix) {
      if (!matrix) {
        return false;
      }
      const { a, b, c, d } = matrix;
      return (Math.abs(b) > 1e-4 || Math.abs(c) > 1e-4) && (Math.abs(a) > 1e-4 || Math.abs(d) > 1e-4);
    }
    testScissor(maskData) {
      const { maskObject } = maskData;
      if (!maskObject.isFastRect || !maskObject.isFastRect()) {
        return false;
      }
      if (_ScissorSystem.isMatrixRotated(maskObject.worldTransform)) {
        return false;
      }
      if (_ScissorSystem.isMatrixRotated(this.renderer.projection.transform)) {
        return false;
      }
      this.calcScissorRect(maskData);
      const rect = maskData._scissorRectLocal;
      return rect.width > 0 && rect.height > 0;
    }
    roundFrameToPixels(frame, resolution, bindingSourceFrame, bindingDestinationFrame, transform) {
      if (_ScissorSystem.isMatrixRotated(transform)) {
        return;
      }
      transform = transform ? tempMatrix.copyFrom(transform) : tempMatrix.identity();
      transform.translate(-bindingSourceFrame.x, -bindingSourceFrame.y).scale(bindingDestinationFrame.width / bindingSourceFrame.width, bindingDestinationFrame.height / bindingSourceFrame.height).translate(bindingDestinationFrame.x, bindingDestinationFrame.y);
      this.renderer.filter.transformAABB(transform, frame);
      frame.fit(bindingDestinationFrame);
      frame.x = Math.round(frame.x * resolution);
      frame.y = Math.round(frame.y * resolution);
      frame.width = Math.round(frame.width * resolution);
      frame.height = Math.round(frame.height * resolution);
    }
    push(maskData) {
      if (!maskData._scissorRectLocal) {
        this.calcScissorRect(maskData);
      }
      const { gl } = this.renderer;
      if (!maskData._scissorRect) {
        gl.enable(gl.SCISSOR_TEST);
      }
      maskData._scissorCounter++;
      maskData._scissorRect = maskData._scissorRectLocal;
      this._useCurrent();
    }
    pop(maskData) {
      const { gl } = this.renderer;
      if (maskData) {
        rectPool.push(maskData._scissorRectLocal);
      }
      if (this.getStackLength() > 0) {
        this._useCurrent();
      } else {
        gl.disable(gl.SCISSOR_TEST);
      }
    }
    _useCurrent() {
      const rect = this.maskStack[this.maskStack.length - 1]._scissorRect;
      let y;
      if (this.renderer.renderTexture.current) {
        y = rect.y;
      } else {
        y = this.renderer.height - rect.height - rect.y;
      }
      this.renderer.gl.scissor(rect.x, y, rect.width, rect.height);
    }
  };
  let ScissorSystem = _ScissorSystem;
  ScissorSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "scissor"
  };
  extensions.add(ScissorSystem);

  class StencilSystem extends AbstractMaskSystem {
    constructor(renderer) {
      super(renderer);
      this.glConst = settings.ADAPTER.getWebGLRenderingContext().STENCIL_TEST;
    }
    getStackLength() {
      const maskData = this.maskStack[this.maskStack.length - 1];
      if (maskData) {
        return maskData._stencilCounter;
      }
      return 0;
    }
    push(maskData) {
      const maskObject = maskData.maskObject;
      const { gl } = this.renderer;
      const prevMaskCount = maskData._stencilCounter;
      if (prevMaskCount === 0) {
        this.renderer.framebuffer.forceStencil();
        gl.clearStencil(0);
        gl.clear(gl.STENCIL_BUFFER_BIT);
        gl.enable(gl.STENCIL_TEST);
      }
      maskData._stencilCounter++;
      const colorMask = maskData._colorMask;
      if (colorMask !== 0) {
        maskData._colorMask = 0;
        gl.colorMask(false, false, false, false);
      }
      gl.stencilFunc(gl.EQUAL, prevMaskCount, 4294967295);
      gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);
      maskObject.renderable = true;
      maskObject.render(this.renderer);
      this.renderer.batch.flush();
      maskObject.renderable = false;
      if (colorMask !== 0) {
        maskData._colorMask = colorMask;
        gl.colorMask((colorMask & 1) !== 0, (colorMask & 2) !== 0, (colorMask & 4) !== 0, (colorMask & 8) !== 0);
      }
      this._useCurrent();
    }
    pop(maskObject) {
      const gl = this.renderer.gl;
      if (this.getStackLength() === 0) {
        gl.disable(gl.STENCIL_TEST);
      } else {
        const maskData = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
        const colorMask = maskData ? maskData._colorMask : 15;
        if (colorMask !== 0) {
          maskData._colorMask = 0;
          gl.colorMask(false, false, false, false);
        }
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);
        maskObject.renderable = true;
        maskObject.render(this.renderer);
        this.renderer.batch.flush();
        maskObject.renderable = false;
        if (colorMask !== 0) {
          maskData._colorMask = colorMask;
          gl.colorMask((colorMask & 1) !== 0, (colorMask & 2) !== 0, (colorMask & 4) !== 0, (colorMask & 8) !== 0);
        }
        this._useCurrent();
      }
    }
    _useCurrent() {
      const gl = this.renderer.gl;
      gl.stencilFunc(gl.EQUAL, this.getStackLength(), 4294967295);
      gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    }
  }
  StencilSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "stencil"
  };
  extensions.add(StencilSystem);

  class ProjectionSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this.destinationFrame = null;
      this.sourceFrame = null;
      this.defaultFrame = null;
      this.projectionMatrix = new Matrix();
      this.transform = null;
    }
    update(destinationFrame, sourceFrame, resolution, root) {
      this.destinationFrame = destinationFrame || this.destinationFrame || this.defaultFrame;
      this.sourceFrame = sourceFrame || this.sourceFrame || destinationFrame;
      this.calculateProjection(this.destinationFrame, this.sourceFrame, resolution, root);
      if (this.transform) {
        this.projectionMatrix.append(this.transform);
      }
      const renderer = this.renderer;
      renderer.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix;
      renderer.globalUniforms.update();
      if (renderer.shader.shader) {
        renderer.shader.syncUniformGroup(renderer.shader.shader.uniforms.globals);
      }
    }
    calculateProjection(_destinationFrame, sourceFrame, _resolution, root) {
      const pm = this.projectionMatrix;
      const sign = !root ? 1 : -1;
      pm.identity();
      pm.a = 1 / sourceFrame.width * 2;
      pm.d = sign * (1 / sourceFrame.height * 2);
      pm.tx = -1 - sourceFrame.x * pm.a;
      pm.ty = -sign - sourceFrame.y * pm.d;
    }
    setTransform(_matrix) {
    }
    destroy() {
      this.renderer = null;
    }
  }
  ProjectionSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "projection"
  };
  extensions.add(ProjectionSystem);

  const tempRect = new Rectangle();
  const tempRect2 = new Rectangle();
  class RenderTextureSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this.defaultMaskStack = [];
      this.current = null;
      this.sourceFrame = new Rectangle();
      this.destinationFrame = new Rectangle();
      this.viewportFrame = new Rectangle();
    }
    bind(renderTexture = null, sourceFrame, destinationFrame) {
      const renderer = this.renderer;
      this.current = renderTexture;
      let baseTexture;
      let framebuffer;
      let resolution;
      if (renderTexture) {
        baseTexture = renderTexture.baseTexture;
        resolution = baseTexture.resolution;
        if (!sourceFrame) {
          tempRect.width = renderTexture.frame.width;
          tempRect.height = renderTexture.frame.height;
          sourceFrame = tempRect;
        }
        if (!destinationFrame) {
          tempRect2.x = renderTexture.frame.x;
          tempRect2.y = renderTexture.frame.y;
          tempRect2.width = sourceFrame.width;
          tempRect2.height = sourceFrame.height;
          destinationFrame = tempRect2;
        }
        framebuffer = baseTexture.framebuffer;
      } else {
        resolution = renderer.resolution;
        if (!sourceFrame) {
          tempRect.width = renderer._view.screen.width;
          tempRect.height = renderer._view.screen.height;
          sourceFrame = tempRect;
        }
        if (!destinationFrame) {
          destinationFrame = tempRect;
          destinationFrame.width = sourceFrame.width;
          destinationFrame.height = sourceFrame.height;
        }
      }
      const viewportFrame = this.viewportFrame;
      viewportFrame.x = destinationFrame.x * resolution;
      viewportFrame.y = destinationFrame.y * resolution;
      viewportFrame.width = destinationFrame.width * resolution;
      viewportFrame.height = destinationFrame.height * resolution;
      if (!renderTexture) {
        viewportFrame.y = renderer.view.height - (viewportFrame.y + viewportFrame.height);
      }
      viewportFrame.ceil();
      this.renderer.framebuffer.bind(framebuffer, viewportFrame);
      this.renderer.projection.update(destinationFrame, sourceFrame, resolution, !framebuffer);
      if (renderTexture) {
        this.renderer.mask.setMaskStack(baseTexture.maskStack);
      } else {
        this.renderer.mask.setMaskStack(this.defaultMaskStack);
      }
      this.sourceFrame.copyFrom(sourceFrame);
      this.destinationFrame.copyFrom(destinationFrame);
    }
    clear(clearColor, mask) {
      if (this.current) {
        clearColor = clearColor || this.current.baseTexture.clearColor;
      } else {
        clearColor = clearColor || this.renderer.background.colorRgba;
      }
      const destinationFrame = this.destinationFrame;
      const baseFrame = this.current ? this.current.baseTexture : this.renderer._view.screen;
      const clearMask = destinationFrame.width !== baseFrame.width || destinationFrame.height !== baseFrame.height;
      if (clearMask) {
        let { x, y, width, height } = this.viewportFrame;
        x = Math.round(x);
        y = Math.round(y);
        width = Math.round(width);
        height = Math.round(height);
        this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
        this.renderer.gl.scissor(x, y, width, height);
      }
      this.renderer.framebuffer.clear(clearColor[0], clearColor[1], clearColor[2], clearColor[3], mask);
      if (clearMask) {
        this.renderer.scissor.pop();
      }
    }
    resize() {
      this.bind(null);
    }
    reset() {
      this.bind(null);
    }
    destroy() {
      this.renderer = null;
    }
  }
  RenderTextureSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "renderTexture"
  };
  extensions.add(RenderTextureSystem);

  function uboUpdate(_ud, _uv, _renderer, _syncData, buffer) {
    _renderer.buffer.update(buffer);
  }
  const UBO_TO_SINGLE_SETTERS = {
    float: `
        data[offset] = v;
    `,
    vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
    vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
    vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
    mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
    mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
    mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `
  };
  const GLSL_TO_STD40_SIZE = {
    float: 4,
    vec2: 8,
    vec3: 12,
    vec4: 16,
    int: 4,
    ivec2: 8,
    ivec3: 12,
    ivec4: 16,
    uint: 4,
    uvec2: 8,
    uvec3: 12,
    uvec4: 16,
    bool: 4,
    bvec2: 8,
    bvec3: 12,
    bvec4: 16,
    mat2: 16 * 2,
    mat3: 16 * 3,
    mat4: 16 * 4
  };
  function createUBOElements(uniformData) {
    const uboElements = uniformData.map((data) => ({
      data,
      offset: 0,
      dataLen: 0,
      dirty: 0
    }));
    let size = 0;
    let chunkSize = 0;
    let offset = 0;
    for (let i = 0; i < uboElements.length; i++) {
      const uboElement = uboElements[i];
      size = GLSL_TO_STD40_SIZE[uboElement.data.type];
      if (uboElement.data.size > 1) {
        size = Math.max(size, 16) * uboElement.data.size;
      }
      uboElement.dataLen = size;
      if (chunkSize % size !== 0 && chunkSize < 16) {
        const lineUpValue = chunkSize % size % 16;
        chunkSize += lineUpValue;
        offset += lineUpValue;
      }
      if (chunkSize + size > 16) {
        offset = Math.ceil(offset / 16) * 16;
        uboElement.offset = offset;
        offset += size;
        chunkSize = size;
      } else {
        uboElement.offset = offset;
        chunkSize += size;
        offset += size;
      }
    }
    offset = Math.ceil(offset / 16) * 16;
    return { uboElements, size: offset };
  }
  function getUBOData(uniforms, uniformData) {
    const usedUniformDatas = [];
    for (const i in uniforms) {
      if (uniformData[i]) {
        usedUniformDatas.push(uniformData[i]);
      }
    }
    usedUniformDatas.sort((a, b) => a.index - b.index);
    return usedUniformDatas;
  }
  function generateUniformBufferSync(group, uniformData) {
    if (!group.autoManage) {
      return { size: 0, syncFunc: uboUpdate };
    }
    const usedUniformDatas = getUBOData(group.uniforms, uniformData);
    const { uboElements, size } = createUBOElements(usedUniformDatas);
    const funcFragments = [`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];
    for (let i = 0; i < uboElements.length; i++) {
      const uboElement = uboElements[i];
      const uniform = group.uniforms[uboElement.data.name];
      const name = uboElement.data.name;
      let parsed = false;
      for (let j = 0; j < uniformParsers.length; j++) {
        const uniformParser = uniformParsers[j];
        if (uniformParser.codeUbo && uniformParser.test(uboElement.data, uniform)) {
          funcFragments.push(`offset = ${uboElement.offset / 4};`, uniformParsers[j].codeUbo(uboElement.data.name, uniform));
          parsed = true;
          break;
        }
      }
      if (!parsed) {
        if (uboElement.data.size > 1) {
          const size2 = mapSize(uboElement.data.type);
          const rowSize = Math.max(GLSL_TO_STD40_SIZE[uboElement.data.type] / 16, 1);
          const elementSize = size2 / rowSize;
          const remainder = (4 - elementSize % 4) % 4;
          funcFragments.push(`
                cv = ud.${name}.value;
                v = uv.${name};
                offset = ${uboElement.offset / 4};

                t = 0;

                for(var i=0; i < ${uboElement.data.size * rowSize}; i++)
                {
                    for(var j = 0; j < ${elementSize}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${remainder};
                }

                `);
        } else {
          const template = UBO_TO_SINGLE_SETTERS[uboElement.data.type];
          funcFragments.push(`
                cv = ud.${name}.value;
                v = uv.${name};
                offset = ${uboElement.offset / 4};
                ${template};
                `);
        }
      }
    }
    funcFragments.push(`
       renderer.buffer.update(buffer);
    `);
    return {
      size,
      syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", funcFragments.join("\n"))
    };
  }

  class GLProgram {
    constructor(program, uniformData) {
      this.program = program;
      this.uniformData = uniformData;
      this.uniformGroups = {};
      this.uniformDirtyGroups = {};
      this.uniformBufferBindings = {};
    }
    destroy() {
      this.uniformData = null;
      this.uniformGroups = null;
      this.uniformDirtyGroups = null;
      this.uniformBufferBindings = null;
      this.program = null;
    }
  }

  function getAttributeData(program, gl) {
    const attributes = {};
    const totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < totalAttributes; i++) {
      const attribData = gl.getActiveAttrib(program, i);
      if (attribData.name.startsWith("gl_")) {
        continue;
      }
      const type = mapType(gl, attribData.type);
      const data = {
        type,
        name: attribData.name,
        size: mapSize(type),
        location: gl.getAttribLocation(program, attribData.name)
      };
      attributes[attribData.name] = data;
    }
    return attributes;
  }

  function getUniformData(program, gl) {
    const uniforms = {};
    const totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < totalUniforms; i++) {
      const uniformData = gl.getActiveUniform(program, i);
      const name = uniformData.name.replace(/\[.*?\]$/, "");
      const isArray = !!uniformData.name.match(/\[.*?\]$/);
      const type = mapType(gl, uniformData.type);
      uniforms[name] = {
        name,
        index: i,
        type,
        size: uniformData.size,
        isArray,
        value: defaultValue(type, uniformData.size)
      };
    }
    return uniforms;
  }

  function generateProgram(gl, program) {
    const glVertShader = compileShader(gl, gl.VERTEX_SHADER, program.vertexSrc);
    const glFragShader = compileShader(gl, gl.FRAGMENT_SHADER, program.fragmentSrc);
    const webGLProgram = gl.createProgram();
    gl.attachShader(webGLProgram, glVertShader);
    gl.attachShader(webGLProgram, glFragShader);
    const transformFeedbackVaryings = program.extra?.transformFeedbackVaryings;
    if (transformFeedbackVaryings) {
      if (typeof gl.transformFeedbackVaryings !== "function") ; else {
        gl.transformFeedbackVaryings(webGLProgram, transformFeedbackVaryings.names, transformFeedbackVaryings.bufferMode === "separate" ? gl.SEPARATE_ATTRIBS : gl.INTERLEAVED_ATTRIBS);
      }
    }
    gl.linkProgram(webGLProgram);
    if (!gl.getProgramParameter(webGLProgram, gl.LINK_STATUS)) {
      logProgramError(gl, webGLProgram, glVertShader, glFragShader);
    }
    program.attributeData = getAttributeData(webGLProgram, gl);
    program.uniformData = getUniformData(webGLProgram, gl);
    if (!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(program.vertexSrc)) {
      const keys = Object.keys(program.attributeData);
      keys.sort((a, b) => a > b ? 1 : -1);
      for (let i = 0; i < keys.length; i++) {
        program.attributeData[keys[i]].location = i;
        gl.bindAttribLocation(webGLProgram, i, keys[i]);
      }
      gl.linkProgram(webGLProgram);
    }
    gl.deleteShader(glVertShader);
    gl.deleteShader(glFragShader);
    const uniformData = {};
    for (const i in program.uniformData) {
      const data = program.uniformData[i];
      uniformData[i] = {
        location: gl.getUniformLocation(webGLProgram, i),
        value: defaultValue(data.type, data.size)
      };
    }
    const glProgram = new GLProgram(webGLProgram, uniformData);
    return glProgram;
  }

  let UID = 0;
  const defaultSyncData = { textureCount: 0, uboCount: 0 };
  class ShaderSystem {
    constructor(renderer) {
      this.destroyed = false;
      this.renderer = renderer;
      this.systemCheck();
      this.gl = null;
      this.shader = null;
      this.program = null;
      this.cache = {};
      this._uboCache = {};
      this.id = UID++;
    }
    systemCheck() {
      if (!unsafeEvalSupported()) {
        throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
      }
    }
    contextChange(gl) {
      this.gl = gl;
      this.reset();
    }
    bind(shader, dontSync) {
      shader.disposeRunner.add(this);
      shader.uniforms.globals = this.renderer.globalUniforms;
      const program = shader.program;
      const glProgram = program.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(shader);
      this.shader = shader;
      if (this.program !== program) {
        this.program = program;
        this.gl.useProgram(glProgram.program);
      }
      if (!dontSync) {
        defaultSyncData.textureCount = 0;
        defaultSyncData.uboCount = 0;
        this.syncUniformGroup(shader.uniformGroup, defaultSyncData);
      }
      return glProgram;
    }
    setUniforms(uniforms) {
      const shader = this.shader.program;
      const glProgram = shader.glPrograms[this.renderer.CONTEXT_UID];
      shader.syncUniforms(glProgram.uniformData, uniforms, this.renderer);
    }
    syncUniformGroup(group, syncData) {
      const glProgram = this.getGlProgram();
      if (!group.static || group.dirtyId !== glProgram.uniformDirtyGroups[group.id]) {
        glProgram.uniformDirtyGroups[group.id] = group.dirtyId;
        this.syncUniforms(group, glProgram, syncData);
      }
    }
    syncUniforms(group, glProgram, syncData) {
      const syncFunc = group.syncUniforms[this.shader.program.id] || this.createSyncGroups(group);
      syncFunc(glProgram.uniformData, group.uniforms, this.renderer, syncData);
    }
    createSyncGroups(group) {
      const id = this.getSignature(group, this.shader.program.uniformData, "u");
      if (!this.cache[id]) {
        this.cache[id] = generateUniformsSync(group, this.shader.program.uniformData);
      }
      group.syncUniforms[this.shader.program.id] = this.cache[id];
      return group.syncUniforms[this.shader.program.id];
    }
    syncUniformBufferGroup(group, name) {
      const glProgram = this.getGlProgram();
      if (!group.static || group.dirtyId !== 0 || !glProgram.uniformGroups[group.id]) {
        group.dirtyId = 0;
        const syncFunc = glProgram.uniformGroups[group.id] || this.createSyncBufferGroup(group, glProgram, name);
        group.buffer.update();
        syncFunc(glProgram.uniformData, group.uniforms, this.renderer, defaultSyncData, group.buffer);
      }
      this.renderer.buffer.bindBufferBase(group.buffer, glProgram.uniformBufferBindings[name]);
    }
    createSyncBufferGroup(group, glProgram, name) {
      const { gl } = this.renderer;
      this.renderer.buffer.bind(group.buffer);
      const uniformBlockIndex = this.gl.getUniformBlockIndex(glProgram.program, name);
      glProgram.uniformBufferBindings[name] = this.shader.uniformBindCount;
      gl.uniformBlockBinding(glProgram.program, uniformBlockIndex, this.shader.uniformBindCount);
      this.shader.uniformBindCount++;
      const id = this.getSignature(group, this.shader.program.uniformData, "ubo");
      let uboData = this._uboCache[id];
      if (!uboData) {
        uboData = this._uboCache[id] = generateUniformBufferSync(group, this.shader.program.uniformData);
      }
      if (group.autoManage) {
        const data = new Float32Array(uboData.size / 4);
        group.buffer.update(data);
      }
      glProgram.uniformGroups[group.id] = uboData.syncFunc;
      return glProgram.uniformGroups[group.id];
    }
    getSignature(group, uniformData, preFix) {
      const uniforms = group.uniforms;
      const strings = [`${preFix}-`];
      for (const i in uniforms) {
        strings.push(i);
        if (uniformData[i]) {
          strings.push(uniformData[i].type);
        }
      }
      return strings.join("-");
    }
    getGlProgram() {
      if (this.shader) {
        return this.shader.program.glPrograms[this.renderer.CONTEXT_UID];
      }
      return null;
    }
    generateProgram(shader) {
      const gl = this.gl;
      const program = shader.program;
      const glProgram = generateProgram(gl, program);
      program.glPrograms[this.renderer.CONTEXT_UID] = glProgram;
      return glProgram;
    }
    reset() {
      this.program = null;
      this.shader = null;
    }
    disposeShader(shader) {
      if (this.shader === shader) {
        this.shader = null;
      }
    }
    destroy() {
      this.renderer = null;
      this.destroyed = true;
    }
  }
  ShaderSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "shader"
  };
  extensions.add(ShaderSystem);

  function mapWebGLBlendModesToPixi(gl, array = []) {
    array[BLEND_MODES.NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.ADD] = [gl.ONE, gl.ONE];
    array[BLEND_MODES.MULTIPLY] = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.SCREEN] = [gl.ONE, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.OVERLAY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DARKEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.LIGHTEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.COLOR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.COLOR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.HARD_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.SOFT_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DIFFERENCE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.EXCLUSION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.HUE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.SATURATION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.LUMINOSITY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.NONE] = [0, 0];
    array[BLEND_MODES.NORMAL_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.ADD_NPM] = [gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE];
    array[BLEND_MODES.SCREEN_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.SRC_IN] = [gl.DST_ALPHA, gl.ZERO];
    array[BLEND_MODES.SRC_OUT] = [gl.ONE_MINUS_DST_ALPHA, gl.ZERO];
    array[BLEND_MODES.SRC_ATOP] = [gl.DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DST_OVER] = [gl.ONE_MINUS_DST_ALPHA, gl.ONE];
    array[BLEND_MODES.DST_IN] = [gl.ZERO, gl.SRC_ALPHA];
    array[BLEND_MODES.DST_OUT] = [gl.ZERO, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.DST_ATOP] = [gl.ONE_MINUS_DST_ALPHA, gl.SRC_ALPHA];
    array[BLEND_MODES.XOR] = [gl.ONE_MINUS_DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
    array[BLEND_MODES.SUBTRACT] = [gl.ONE, gl.ONE, gl.ONE, gl.ONE, gl.FUNC_REVERSE_SUBTRACT, gl.FUNC_ADD];
    return array;
  }

  const BLEND = 0;
  const OFFSET = 1;
  const CULLING = 2;
  const DEPTH_TEST = 3;
  const WINDING = 4;
  const DEPTH_MASK = 5;
  const _StateSystem = class {
    constructor() {
      this.gl = null;
      this.stateId = 0;
      this.polygonOffset = 0;
      this.blendMode = BLEND_MODES.NONE;
      this._blendEq = false;
      this.map = [];
      this.map[BLEND] = this.setBlend;
      this.map[OFFSET] = this.setOffset;
      this.map[CULLING] = this.setCullFace;
      this.map[DEPTH_TEST] = this.setDepthTest;
      this.map[WINDING] = this.setFrontFace;
      this.map[DEPTH_MASK] = this.setDepthMask;
      this.checks = [];
      this.defaultState = new State();
      this.defaultState.blend = true;
    }
    contextChange(gl) {
      this.gl = gl;
      this.blendModes = mapWebGLBlendModesToPixi(gl);
      this.set(this.defaultState);
      this.reset();
    }
    set(state) {
      state = state || this.defaultState;
      if (this.stateId !== state.data) {
        let diff = this.stateId ^ state.data;
        let i = 0;
        while (diff) {
          if (diff & 1) {
            this.map[i].call(this, !!(state.data & 1 << i));
          }
          diff = diff >> 1;
          i++;
        }
        this.stateId = state.data;
      }
      for (let i = 0; i < this.checks.length; i++) {
        this.checks[i](this, state);
      }
    }
    forceState(state) {
      state = state || this.defaultState;
      for (let i = 0; i < this.map.length; i++) {
        this.map[i].call(this, !!(state.data & 1 << i));
      }
      for (let i = 0; i < this.checks.length; i++) {
        this.checks[i](this, state);
      }
      this.stateId = state.data;
    }
    setBlend(value) {
      this.updateCheck(_StateSystem.checkBlendMode, value);
      this.gl[value ? "enable" : "disable"](this.gl.BLEND);
    }
    setOffset(value) {
      this.updateCheck(_StateSystem.checkPolygonOffset, value);
      this.gl[value ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
    }
    setDepthTest(value) {
      this.gl[value ? "enable" : "disable"](this.gl.DEPTH_TEST);
    }
    setDepthMask(value) {
      this.gl.depthMask(value);
    }
    setCullFace(value) {
      this.gl[value ? "enable" : "disable"](this.gl.CULL_FACE);
    }
    setFrontFace(value) {
      this.gl.frontFace(this.gl[value ? "CW" : "CCW"]);
    }
    setBlendMode(value) {
      if (value === this.blendMode) {
        return;
      }
      this.blendMode = value;
      const mode = this.blendModes[value];
      const gl = this.gl;
      if (mode.length === 2) {
        gl.blendFunc(mode[0], mode[1]);
      } else {
        gl.blendFuncSeparate(mode[0], mode[1], mode[2], mode[3]);
      }
      if (mode.length === 6) {
        this._blendEq = true;
        gl.blendEquationSeparate(mode[4], mode[5]);
      } else if (this._blendEq) {
        this._blendEq = false;
        gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
      }
    }
    setPolygonOffset(value, scale) {
      this.gl.polygonOffset(value, scale);
    }
    reset() {
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
      this.forceState(this.defaultState);
      this._blendEq = true;
      this.blendMode = -1;
      this.setBlendMode(0);
    }
    updateCheck(func, value) {
      const index = this.checks.indexOf(func);
      if (value && index === -1) {
        this.checks.push(func);
      } else if (!value && index !== -1) {
        this.checks.splice(index, 1);
      }
    }
    static checkBlendMode(system, state) {
      system.setBlendMode(state.blendMode);
    }
    static checkPolygonOffset(system, state) {
      system.setPolygonOffset(1, state.polygonOffset);
    }
    destroy() {
      this.gl = null;
    }
  };
  let StateSystem = _StateSystem;
  StateSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "state"
  };
  extensions.add(StateSystem);

  class TextureGCSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this.count = 0;
      this.checkCount = 0;
      this.maxIdle = settings.GC_MAX_IDLE;
      this.checkCountMax = settings.GC_MAX_CHECK_COUNT;
      this.mode = settings.GC_MODE;
    }
    postrender() {
      if (!this.renderer.objectRenderer.renderingToScreen) {
        return;
      }
      this.count++;
      if (this.mode === GC_MODES.MANUAL) {
        return;
      }
      this.checkCount++;
      if (this.checkCount > this.checkCountMax) {
        this.checkCount = 0;
        this.run();
      }
    }
    run() {
      const tm = this.renderer.texture;
      const managedTextures = tm.managedTextures;
      let wasRemoved = false;
      for (let i = 0; i < managedTextures.length; i++) {
        const texture = managedTextures[i];
        if (!texture.framebuffer && this.count - texture.touched > this.maxIdle) {
          tm.destroyTexture(texture, true);
          managedTextures[i] = null;
          wasRemoved = true;
        }
      }
      if (wasRemoved) {
        let j = 0;
        for (let i = 0; i < managedTextures.length; i++) {
          if (managedTextures[i] !== null) {
            managedTextures[j++] = managedTextures[i];
          }
        }
        managedTextures.length = j;
      }
    }
    unload(displayObject) {
      const tm = this.renderer.texture;
      const texture = displayObject._texture;
      if (texture && !texture.framebuffer) {
        tm.destroyTexture(texture);
      }
      for (let i = displayObject.children.length - 1; i >= 0; i--) {
        this.unload(displayObject.children[i]);
      }
    }
    destroy() {
      this.renderer = null;
    }
  }
  TextureGCSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "textureGC"
  };
  extensions.add(TextureGCSystem);

  function mapTypeAndFormatToInternalFormat(gl) {
    let table;
    if ("WebGL2RenderingContext" in globalThis && gl instanceof globalThis.WebGL2RenderingContext) {
      table = {
        [TYPES.UNSIGNED_BYTE]: {
          [FORMATS.RGBA]: gl.RGBA8,
          [FORMATS.RGB]: gl.RGB8,
          [FORMATS.RG]: gl.RG8,
          [FORMATS.RED]: gl.R8,
          [FORMATS.RGBA_INTEGER]: gl.RGBA8UI,
          [FORMATS.RGB_INTEGER]: gl.RGB8UI,
          [FORMATS.RG_INTEGER]: gl.RG8UI,
          [FORMATS.RED_INTEGER]: gl.R8UI,
          [FORMATS.ALPHA]: gl.ALPHA,
          [FORMATS.LUMINANCE]: gl.LUMINANCE,
          [FORMATS.LUMINANCE_ALPHA]: gl.LUMINANCE_ALPHA
        },
        [TYPES.BYTE]: {
          [FORMATS.RGBA]: gl.RGBA8_SNORM,
          [FORMATS.RGB]: gl.RGB8_SNORM,
          [FORMATS.RG]: gl.RG8_SNORM,
          [FORMATS.RED]: gl.R8_SNORM,
          [FORMATS.RGBA_INTEGER]: gl.RGBA8I,
          [FORMATS.RGB_INTEGER]: gl.RGB8I,
          [FORMATS.RG_INTEGER]: gl.RG8I,
          [FORMATS.RED_INTEGER]: gl.R8I
        },
        [TYPES.UNSIGNED_SHORT]: {
          [FORMATS.RGBA_INTEGER]: gl.RGBA16UI,
          [FORMATS.RGB_INTEGER]: gl.RGB16UI,
          [FORMATS.RG_INTEGER]: gl.RG16UI,
          [FORMATS.RED_INTEGER]: gl.R16UI,
          [FORMATS.DEPTH_COMPONENT]: gl.DEPTH_COMPONENT16
        },
        [TYPES.SHORT]: {
          [FORMATS.RGBA_INTEGER]: gl.RGBA16I,
          [FORMATS.RGB_INTEGER]: gl.RGB16I,
          [FORMATS.RG_INTEGER]: gl.RG16I,
          [FORMATS.RED_INTEGER]: gl.R16I
        },
        [TYPES.UNSIGNED_INT]: {
          [FORMATS.RGBA_INTEGER]: gl.RGBA32UI,
          [FORMATS.RGB_INTEGER]: gl.RGB32UI,
          [FORMATS.RG_INTEGER]: gl.RG32UI,
          [FORMATS.RED_INTEGER]: gl.R32UI,
          [FORMATS.DEPTH_COMPONENT]: gl.DEPTH_COMPONENT24
        },
        [TYPES.INT]: {
          [FORMATS.RGBA_INTEGER]: gl.RGBA32I,
          [FORMATS.RGB_INTEGER]: gl.RGB32I,
          [FORMATS.RG_INTEGER]: gl.RG32I,
          [FORMATS.RED_INTEGER]: gl.R32I
        },
        [TYPES.FLOAT]: {
          [FORMATS.RGBA]: gl.RGBA32F,
          [FORMATS.RGB]: gl.RGB32F,
          [FORMATS.RG]: gl.RG32F,
          [FORMATS.RED]: gl.R32F,
          [FORMATS.DEPTH_COMPONENT]: gl.DEPTH_COMPONENT32F
        },
        [TYPES.HALF_FLOAT]: {
          [FORMATS.RGBA]: gl.RGBA16F,
          [FORMATS.RGB]: gl.RGB16F,
          [FORMATS.RG]: gl.RG16F,
          [FORMATS.RED]: gl.R16F
        },
        [TYPES.UNSIGNED_SHORT_5_6_5]: {
          [FORMATS.RGB]: gl.RGB565
        },
        [TYPES.UNSIGNED_SHORT_4_4_4_4]: {
          [FORMATS.RGBA]: gl.RGBA4
        },
        [TYPES.UNSIGNED_SHORT_5_5_5_1]: {
          [FORMATS.RGBA]: gl.RGB5_A1
        },
        [TYPES.UNSIGNED_INT_2_10_10_10_REV]: {
          [FORMATS.RGBA]: gl.RGB10_A2,
          [FORMATS.RGBA_INTEGER]: gl.RGB10_A2UI
        },
        [TYPES.UNSIGNED_INT_10F_11F_11F_REV]: {
          [FORMATS.RGB]: gl.R11F_G11F_B10F
        },
        [TYPES.UNSIGNED_INT_5_9_9_9_REV]: {
          [FORMATS.RGB]: gl.RGB9_E5
        },
        [TYPES.UNSIGNED_INT_24_8]: {
          [FORMATS.DEPTH_STENCIL]: gl.DEPTH24_STENCIL8
        },
        [TYPES.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
          [FORMATS.DEPTH_STENCIL]: gl.DEPTH32F_STENCIL8
        }
      };
    } else {
      table = {
        [TYPES.UNSIGNED_BYTE]: {
          [FORMATS.RGBA]: gl.RGBA,
          [FORMATS.RGB]: gl.RGB,
          [FORMATS.ALPHA]: gl.ALPHA,
          [FORMATS.LUMINANCE]: gl.LUMINANCE,
          [FORMATS.LUMINANCE_ALPHA]: gl.LUMINANCE_ALPHA
        },
        [TYPES.UNSIGNED_SHORT_5_6_5]: {
          [FORMATS.RGB]: gl.RGB
        },
        [TYPES.UNSIGNED_SHORT_4_4_4_4]: {
          [FORMATS.RGBA]: gl.RGBA
        },
        [TYPES.UNSIGNED_SHORT_5_5_5_1]: {
          [FORMATS.RGBA]: gl.RGBA
        }
      };
    }
    return table;
  }

  class GLTexture {
    constructor(texture) {
      this.texture = texture;
      this.width = -1;
      this.height = -1;
      this.dirtyId = -1;
      this.dirtyStyleId = -1;
      this.mipmap = false;
      this.wrapMode = 33071;
      this.type = TYPES.UNSIGNED_BYTE;
      this.internalFormat = FORMATS.RGBA;
      this.samplerType = 0;
    }
  }

  class TextureSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this.boundTextures = [];
      this.currentLocation = -1;
      this.managedTextures = [];
      this._unknownBoundTextures = false;
      this.unknownTexture = new BaseTexture();
      this.hasIntegerTextures = false;
    }
    contextChange() {
      const gl = this.gl = this.renderer.gl;
      this.CONTEXT_UID = this.renderer.CONTEXT_UID;
      this.webGLVersion = this.renderer.context.webGLVersion;
      this.internalFormats = mapTypeAndFormatToInternalFormat(gl);
      const maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
      this.boundTextures.length = maxTextures;
      for (let i = 0; i < maxTextures; i++) {
        this.boundTextures[i] = null;
      }
      this.emptyTextures = {};
      const emptyTexture2D = new GLTexture(gl.createTexture());
      gl.bindTexture(gl.TEXTURE_2D, emptyTexture2D.texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));
      this.emptyTextures[gl.TEXTURE_2D] = emptyTexture2D;
      this.emptyTextures[gl.TEXTURE_CUBE_MAP] = new GLTexture(gl.createTexture());
      gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.emptyTextures[gl.TEXTURE_CUBE_MAP].texture);
      for (let i = 0; i < 6; i++) {
        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      }
      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      for (let i = 0; i < this.boundTextures.length; i++) {
        this.bind(null, i);
      }
    }
    bind(texture, location = 0) {
      const { gl } = this;
      texture = texture?.castToBaseTexture();
      if (texture?.valid && !texture.parentTextureArray) {
        texture.touched = this.renderer.textureGC.count;
        const glTexture = texture._glTextures[this.CONTEXT_UID] || this.initTexture(texture);
        if (this.boundTextures[location] !== texture) {
          if (this.currentLocation !== location) {
            this.currentLocation = location;
            gl.activeTexture(gl.TEXTURE0 + location);
          }
          gl.bindTexture(texture.target, glTexture.texture);
        }
        if (glTexture.dirtyId !== texture.dirtyId) {
          if (this.currentLocation !== location) {
            this.currentLocation = location;
            gl.activeTexture(gl.TEXTURE0 + location);
          }
          this.updateTexture(texture);
        } else if (glTexture.dirtyStyleId !== texture.dirtyStyleId) {
          this.updateTextureStyle(texture);
        }
        this.boundTextures[location] = texture;
      } else {
        if (this.currentLocation !== location) {
          this.currentLocation = location;
          gl.activeTexture(gl.TEXTURE0 + location);
        }
        gl.bindTexture(gl.TEXTURE_2D, this.emptyTextures[gl.TEXTURE_2D].texture);
        this.boundTextures[location] = null;
      }
    }
    reset() {
      this._unknownBoundTextures = true;
      this.hasIntegerTextures = false;
      this.currentLocation = -1;
      for (let i = 0; i < this.boundTextures.length; i++) {
        this.boundTextures[i] = this.unknownTexture;
      }
    }
    unbind(texture) {
      const { gl, boundTextures } = this;
      if (this._unknownBoundTextures) {
        this._unknownBoundTextures = false;
        for (let i = 0; i < boundTextures.length; i++) {
          if (boundTextures[i] === this.unknownTexture) {
            this.bind(null, i);
          }
        }
      }
      for (let i = 0; i < boundTextures.length; i++) {
        if (boundTextures[i] === texture) {
          if (this.currentLocation !== i) {
            gl.activeTexture(gl.TEXTURE0 + i);
            this.currentLocation = i;
          }
          gl.bindTexture(texture.target, this.emptyTextures[texture.target].texture);
          boundTextures[i] = null;
        }
      }
    }
    ensureSamplerType(maxTextures) {
      const { boundTextures, hasIntegerTextures, CONTEXT_UID } = this;
      if (!hasIntegerTextures) {
        return;
      }
      for (let i = maxTextures - 1; i >= 0; --i) {
        const tex = boundTextures[i];
        if (tex) {
          const glTexture = tex._glTextures[CONTEXT_UID];
          if (glTexture.samplerType !== SAMPLER_TYPES.FLOAT) {
            this.renderer.texture.unbind(tex);
          }
        }
      }
    }
    initTexture(texture) {
      const glTexture = new GLTexture(this.gl.createTexture());
      glTexture.dirtyId = -1;
      texture._glTextures[this.CONTEXT_UID] = glTexture;
      this.managedTextures.push(texture);
      texture.on("dispose", this.destroyTexture, this);
      return glTexture;
    }
    initTextureType(texture, glTexture) {
      glTexture.internalFormat = this.internalFormats[texture.type]?.[texture.format] ?? texture.format;
      if (this.webGLVersion === 2 && texture.type === TYPES.HALF_FLOAT) {
        glTexture.type = this.gl.HALF_FLOAT;
      } else {
        glTexture.type = texture.type;
      }
    }
    updateTexture(texture) {
      const glTexture = texture._glTextures[this.CONTEXT_UID];
      if (!glTexture) {
        return;
      }
      const renderer = this.renderer;
      this.initTextureType(texture, glTexture);
      if (texture.resource?.upload(renderer, texture, glTexture)) {
        if (glTexture.samplerType !== SAMPLER_TYPES.FLOAT) {
          this.hasIntegerTextures = true;
        }
      } else {
        const width = texture.realWidth;
        const height = texture.realHeight;
        const gl = renderer.gl;
        if (glTexture.width !== width || glTexture.height !== height || glTexture.dirtyId < 0) {
          glTexture.width = width;
          glTexture.height = height;
          gl.texImage2D(texture.target, 0, glTexture.internalFormat, width, height, 0, texture.format, glTexture.type, null);
        }
      }
      if (texture.dirtyStyleId !== glTexture.dirtyStyleId) {
        this.updateTextureStyle(texture);
      }
      glTexture.dirtyId = texture.dirtyId;
    }
    destroyTexture(texture, skipRemove) {
      const { gl } = this;
      texture = texture.castToBaseTexture();
      if (texture._glTextures[this.CONTEXT_UID]) {
        this.unbind(texture);
        gl.deleteTexture(texture._glTextures[this.CONTEXT_UID].texture);
        texture.off("dispose", this.destroyTexture, this);
        delete texture._glTextures[this.CONTEXT_UID];
        if (!skipRemove) {
          const i = this.managedTextures.indexOf(texture);
          if (i !== -1) {
            removeItems(this.managedTextures, i, 1);
          }
        }
      }
    }
    updateTextureStyle(texture) {
      const glTexture = texture._glTextures[this.CONTEXT_UID];
      if (!glTexture) {
        return;
      }
      if ((texture.mipmap === MIPMAP_MODES.POW2 || this.webGLVersion !== 2) && !texture.isPowerOfTwo) {
        glTexture.mipmap = false;
      } else {
        glTexture.mipmap = texture.mipmap >= 1;
      }
      if (this.webGLVersion !== 2 && !texture.isPowerOfTwo) {
        glTexture.wrapMode = WRAP_MODES.CLAMP;
      } else {
        glTexture.wrapMode = texture.wrapMode;
      }
      if (texture.resource?.style(this.renderer, texture, glTexture)) ; else {
        this.setStyle(texture, glTexture);
      }
      glTexture.dirtyStyleId = texture.dirtyStyleId;
    }
    setStyle(texture, glTexture) {
      const gl = this.gl;
      if (glTexture.mipmap && texture.mipmap !== MIPMAP_MODES.ON_MANUAL) {
        gl.generateMipmap(texture.target);
      }
      gl.texParameteri(texture.target, gl.TEXTURE_WRAP_S, glTexture.wrapMode);
      gl.texParameteri(texture.target, gl.TEXTURE_WRAP_T, glTexture.wrapMode);
      if (glTexture.mipmap) {
        gl.texParameteri(texture.target, gl.TEXTURE_MIN_FILTER, texture.scaleMode === SCALE_MODES.LINEAR ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
        const anisotropicExt = this.renderer.context.extensions.anisotropicFiltering;
        if (anisotropicExt && texture.anisotropicLevel > 0 && texture.scaleMode === SCALE_MODES.LINEAR) {
          const level = Math.min(texture.anisotropicLevel, gl.getParameter(anisotropicExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
          gl.texParameterf(texture.target, anisotropicExt.TEXTURE_MAX_ANISOTROPY_EXT, level);
        }
      } else {
        gl.texParameteri(texture.target, gl.TEXTURE_MIN_FILTER, texture.scaleMode === SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
      }
      gl.texParameteri(texture.target, gl.TEXTURE_MAG_FILTER, texture.scaleMode === SCALE_MODES.LINEAR ? gl.LINEAR : gl.NEAREST);
    }
    destroy() {
      this.renderer = null;
    }
  }
  TextureSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "texture"
  };
  extensions.add(TextureSystem);

  const tempTransform = new Transform();
  class GenerateTextureSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this._tempMatrix = new Matrix();
    }
    generateTexture(displayObject, options) {
      const { region: manualRegion, ...textureOptions } = options || {};
      const region = manualRegion || displayObject.getLocalBounds(null, true);
      if (region.width === 0)
        region.width = 1;
      if (region.height === 0)
        region.height = 1;
      const renderTexture = RenderTexture.create({
        width: region.width,
        height: region.height,
        ...textureOptions
      });
      this._tempMatrix.tx = -region.x;
      this._tempMatrix.ty = -region.y;
      const transform = displayObject.transform;
      displayObject.transform = tempTransform;
      this.renderer.render(displayObject, {
        renderTexture,
        transform: this._tempMatrix,
        skipUpdateTransform: !!displayObject.parent,
        blit: true
      });
      displayObject.transform = transform;
      return renderTexture;
    }
    destroy() {
    }
  }
  GenerateTextureSystem.extension = {
    type: [
      ExtensionType.RendererSystem,
      ExtensionType.CanvasRendererSystem
    ],
    name: "textureGenerator"
  };
  extensions.add(GenerateTextureSystem);

  class BackgroundSystem {
    constructor() {
      this.clearBeforeRender = true;
      this._backgroundColor = 0;
      this._backgroundColorRgba = [0, 0, 0, 1];
      this._backgroundColorString = "#000000";
      this.color = this._backgroundColor;
      this.alpha = 1;
    }
    init(options) {
      this.clearBeforeRender = options.clearBeforeRender;
      if (options.color) {
        this.color = typeof options.color === "string" ? string2hex(options.color) : options.color;
      }
      this.alpha = options.alpha;
    }
    get color() {
      return this._backgroundColor;
    }
    set color(value) {
      this._backgroundColor = value;
      this._backgroundColorString = hex2string(value);
      hex2rgb(value, this._backgroundColorRgba);
    }
    get alpha() {
      return this._backgroundColorRgba[3];
    }
    set alpha(value) {
      this._backgroundColorRgba[3] = value;
    }
    get colorRgba() {
      return this._backgroundColorRgba;
    }
    get colorString() {
      return this._backgroundColorString;
    }
    destroy() {
    }
  }
  BackgroundSystem.extension = {
    type: [
      ExtensionType.RendererSystem,
      ExtensionType.CanvasRendererSystem
    ],
    name: "background"
  };
  extensions.add(BackgroundSystem);

  class ViewSystem {
    constructor(renderer) {
      this.renderer = renderer;
    }
    init(options) {
      this.screen = new Rectangle(0, 0, options.width, options.height);
      this.element = options.view || settings.ADAPTER.createCanvas();
      this.resolution = options.resolution || settings.RESOLUTION;
      this.autoDensity = !!options.autoDensity;
    }
    resizeView(desiredScreenWidth, desiredScreenHeight) {
      this.element.width = Math.round(desiredScreenWidth * this.resolution);
      this.element.height = Math.round(desiredScreenHeight * this.resolution);
      const screenWidth = this.element.width / this.resolution;
      const screenHeight = this.element.height / this.resolution;
      this.screen.width = screenWidth;
      this.screen.height = screenHeight;
      if (this.autoDensity) {
        this.element.style.width = `${screenWidth}px`;
        this.element.style.height = `${screenHeight}px`;
      }
      this.renderer.emit("resize", screenWidth, screenHeight);
      this.renderer.runners.resize.emit(this.screen.width, this.screen.height);
    }
    destroy(removeView) {
      if (removeView) {
        this.element.parentNode?.removeChild(this.element);
      }
      this.renderer = null;
      this.element = null;
      this.screen = null;
    }
  }
  ViewSystem.extension = {
    type: [
      ExtensionType.RendererSystem,
      ExtensionType.CanvasRendererSystem
    ],
    name: "_view"
  };
  extensions.add(ViewSystem);

  class PluginSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this.plugins = {};
    }
    init(staticMap) {
      for (const o in staticMap) {
        this.plugins[o] = new staticMap[o](this.renderer);
      }
    }
    destroy() {
      for (const o in this.plugins) {
        this.plugins[o].destroy();
        this.plugins[o] = null;
      }
    }
  }
  PluginSystem.extension = {
    type: [
      ExtensionType.RendererSystem,
      ExtensionType.CanvasRendererSystem
    ],
    name: "_plugin"
  };
  extensions.add(PluginSystem);

  class SystemManager extends EventEmitter {
    constructor() {
      super(...arguments);
      this.runners = {};
      this._systemsHash = {};
    }
    setup(config) {
      this.addRunners(...config.runners);
      const priority = (config.priority ?? []).filter((key) => config.systems[key]);
      const orderByPriority = [
        ...priority,
        ...Object.keys(config.systems).filter((key) => !priority.includes(key))
      ];
      for (const i of orderByPriority) {
        this.addSystem(config.systems[i], i);
      }
    }
    addRunners(...runnerIds) {
      runnerIds.forEach((runnerId) => {
        this.runners[runnerId] = new Runner(runnerId);
      });
    }
    addSystem(ClassRef, name) {
      const system = new ClassRef(this);
      if (this[name]) {
        throw new Error(`Whoops! The name "${name}" is already in use`);
      }
      this[name] = system;
      this._systemsHash[name] = system;
      for (const i in this.runners) {
        this.runners[i].add(system);
      }
      return this;
    }
    emitWithCustomOptions(runner, options) {
      const systemHashKeys = Object.keys(this._systemsHash);
      runner.items.forEach((system) => {
        const systemName = systemHashKeys.find((systemId) => this._systemsHash[systemId] === system);
        system[runner.name](options[systemName]);
      });
    }
    destroy() {
      Object.values(this.runners).forEach((runner) => {
        runner.destroy();
      });
      this._systemsHash = {};
    }
  }

  class StartupSystem {
    constructor(renderer) {
      this.renderer = renderer;
    }
    run(options) {
      const renderer = this.renderer;
      renderer.emitWithCustomOptions(renderer.runners.init, options);
      if (options.hello) {
        console.log(`PixiJS ${"7.0.4"} - ${renderer.rendererLogId} - https://pixijs.com`);
      }
      renderer.resize(this.renderer.screen.width, this.renderer.screen.height);
    }
    destroy() {
    }
  }
  StartupSystem.extension = {
    type: [
      ExtensionType.RendererSystem,
      ExtensionType.CanvasRendererSystem
    ],
    name: "startup"
  };
  extensions.add(StartupSystem);

  class TransformFeedbackSystem {
    constructor(renderer) {
      this.renderer = renderer;
    }
    contextChange() {
      this.gl = this.renderer.gl;
      this.CONTEXT_UID = this.renderer.CONTEXT_UID;
    }
    bind(transformFeedback) {
      const { gl, CONTEXT_UID } = this;
      const glTransformFeedback = transformFeedback._glTransformFeedbacks[CONTEXT_UID] || this.createGLTransformFeedback(transformFeedback);
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, glTransformFeedback);
    }
    unbind() {
      const { gl } = this;
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
    }
    beginTransformFeedback(drawMode, shader) {
      const { gl, renderer } = this;
      if (shader) {
        renderer.shader.bind(shader);
      }
      gl.beginTransformFeedback(drawMode);
    }
    endTransformFeedback() {
      const { gl } = this;
      gl.endTransformFeedback();
    }
    createGLTransformFeedback(tf) {
      const { gl, renderer, CONTEXT_UID } = this;
      const glTransformFeedback = gl.createTransformFeedback();
      tf._glTransformFeedbacks[CONTEXT_UID] = glTransformFeedback;
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, glTransformFeedback);
      for (let i = 0; i < tf.buffers.length; i++) {
        const buffer = tf.buffers[i];
        if (!buffer)
          continue;
        renderer.buffer.update(buffer);
        buffer._glBuffers[CONTEXT_UID].refCount++;
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, i, buffer._glBuffers[CONTEXT_UID].buffer || null);
      }
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
      tf.disposeRunner.add(this);
      return glTransformFeedback;
    }
    disposeTransformFeedback(tf, contextLost) {
      const glTF = tf._glTransformFeedbacks[this.CONTEXT_UID];
      const gl = this.gl;
      tf.disposeRunner.remove(this);
      const bufferSystem = this.renderer.buffer;
      if (bufferSystem) {
        for (let i = 0; i < tf.buffers.length; i++) {
          const buffer = tf.buffers[i];
          if (!buffer)
            continue;
          const buf = buffer._glBuffers[this.CONTEXT_UID];
          if (buf) {
            buf.refCount--;
            if (buf.refCount === 0 && !contextLost) {
              bufferSystem.dispose(buffer, contextLost);
            }
          }
        }
      }
      if (!glTF) {
        return;
      }
      if (!contextLost) {
        gl.deleteTransformFeedback(glTF);
      }
      delete tf._glTransformFeedbacks[this.CONTEXT_UID];
    }
    destroy() {
      this.renderer = null;
    }
  }
  TransformFeedbackSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "transformFeedback"
  };
  extensions.add(TransformFeedbackSystem);

  const renderers = [];
  extensions.handleByList(ExtensionType.Renderer, renderers);
  function autoDetectRenderer(options) {
    for (const RendererType of renderers) {
      if (RendererType.test(options)) {
        return new RendererType(options);
      }
    }
    throw new Error("Unable to auto-detect a suitable renderer.");
  }

  const _Renderer = class extends SystemManager {
    constructor(options) {
      super();
      options = Object.assign({}, settings.RENDER_OPTIONS, options);
      this.gl = null;
      this.CONTEXT_UID = 0;
      this.globalUniforms = new UniformGroup({
        projectionMatrix: new Matrix()
      }, true);
      const systemConfig = {
        runners: ["init", "destroy", "contextChange", "reset", "update", "postrender", "prerender", "resize"],
        systems: _Renderer.__systems,
        priority: [
          "_view",
          "textureGenerator",
          "background",
          "_plugin",
          "startup",
          "context",
          "state",
          "texture",
          "buffer",
          "geometry",
          "framebuffer",
          "transformFeedback",
          "mask",
          "scissor",
          "stencil",
          "projection",
          "textureGC",
          "filter",
          "renderTexture",
          "batch",
          "objectRenderer",
          "_multisample"
        ]
      };
      this.setup(systemConfig);
      const startupOptions = {
        hello: options.hello,
        _plugin: _Renderer.__plugins,
        background: {
          alpha: options.backgroundAlpha,
          color: options.background ?? options.backgroundColor,
          clearBeforeRender: options.clearBeforeRender
        },
        _view: {
          height: options.height,
          width: options.width,
          autoDensity: options.autoDensity,
          resolution: options.resolution,
          view: options.view
        },
        context: {
          antialias: options.antialias,
          context: options.context,
          powerPreference: options.powerPreference,
          premultipliedAlpha: options.premultipliedAlpha ?? (options.useContextAlpha && options.useContextAlpha !== "notMultiplied"),
          preserveDrawingBuffer: options.preserveDrawingBuffer
        }
      };
      this.startup.run(startupOptions);
    }
    static test(options) {
      if (options?.forceCanvas) {
        return false;
      }
      return isWebGLSupported();
    }
    render(displayObject, options) {
      this.objectRenderer.render(displayObject, options);
    }
    resize(desiredScreenWidth, desiredScreenHeight) {
      this._view.resizeView(desiredScreenWidth, desiredScreenHeight);
    }
    reset() {
      this.runners.reset.emit();
      return this;
    }
    clear() {
      this.renderTexture.bind();
      this.renderTexture.clear();
    }
    destroy(removeView = false) {
      this.runners.destroy.items.reverse();
      this.emitWithCustomOptions(this.runners.destroy, {
        _view: removeView
      });
      super.destroy();
    }
    get plugins() {
      return this._plugin.plugins;
    }
    get multisample() {
      return this._multisample.multisample;
    }
    get width() {
      return this._view.element.width;
    }
    get height() {
      return this._view.element.height;
    }
    get resolution() {
      return this._view.resolution;
    }
    get autoDensity() {
      return this._view.autoDensity;
    }
    get view() {
      return this._view.element;
    }
    get screen() {
      return this._view.screen;
    }
    get lastObjectRendered() {
      return this.objectRenderer.lastObjectRendered;
    }
    get renderingToScreen() {
      return this.objectRenderer.renderingToScreen;
    }
    get rendererLogId() {
      return `WebGL ${this.context.webGLVersion}`;
    }
    get clearBeforeRender() {
      return this.background.clearBeforeRender;
    }
    get useContextAlpha() {
      return this.context.useContextAlpha;
    }
    get preserveDrawingBuffer() {
      return this.context.preserveDrawingBuffer;
    }
    get backgroundColor() {
      return this.background.color;
    }
    set backgroundColor(value) {
      this.background.color = value;
    }
    get backgroundAlpha() {
      return this.background.color;
    }
    set backgroundAlpha(value) {
      this.background.alpha = value;
    }
    get powerPreference() {
      return this.context.powerPreference;
    }
    generateTexture(displayObject, options) {
      return this.textureGenerator.generateTexture(displayObject, options);
    }
  };
  let Renderer = _Renderer;
  Renderer.extension = {
    type: ExtensionType.Renderer,
    priority: 1
  };
  Renderer.__plugins = {};
  Renderer.__systems = {};
  extensions.handleByMap(ExtensionType.RendererPlugin, Renderer.__plugins);
  extensions.handleByMap(ExtensionType.RendererSystem, Renderer.__systems);
  extensions.add(Renderer);

  class BatchDrawCall {
    constructor() {
      this.texArray = null;
      this.blend = 0;
      this.type = DRAW_MODES.TRIANGLES;
      this.start = 0;
      this.size = 0;
      this.data = null;
    }
  }

  class BatchTextureArray {
    constructor() {
      this.elements = [];
      this.ids = [];
      this.count = 0;
    }
    clear() {
      for (let i = 0; i < this.count; i++) {
        this.elements[i] = null;
      }
      this.count = 0;
    }
  }

  class ViewableBuffer {
    constructor(sizeOrBuffer) {
      if (typeof sizeOrBuffer === "number") {
        this.rawBinaryData = new ArrayBuffer(sizeOrBuffer);
      } else if (sizeOrBuffer instanceof Uint8Array) {
        this.rawBinaryData = sizeOrBuffer.buffer;
      } else {
        this.rawBinaryData = sizeOrBuffer;
      }
      this.uint32View = new Uint32Array(this.rawBinaryData);
      this.float32View = new Float32Array(this.rawBinaryData);
    }
    get int8View() {
      if (!this._int8View) {
        this._int8View = new Int8Array(this.rawBinaryData);
      }
      return this._int8View;
    }
    get uint8View() {
      if (!this._uint8View) {
        this._uint8View = new Uint8Array(this.rawBinaryData);
      }
      return this._uint8View;
    }
    get int16View() {
      if (!this._int16View) {
        this._int16View = new Int16Array(this.rawBinaryData);
      }
      return this._int16View;
    }
    get uint16View() {
      if (!this._uint16View) {
        this._uint16View = new Uint16Array(this.rawBinaryData);
      }
      return this._uint16View;
    }
    get int32View() {
      if (!this._int32View) {
        this._int32View = new Int32Array(this.rawBinaryData);
      }
      return this._int32View;
    }
    view(type) {
      return this[`${type}View`];
    }
    destroy() {
      this.rawBinaryData = null;
      this._int8View = null;
      this._uint8View = null;
      this._int16View = null;
      this._uint16View = null;
      this._int32View = null;
      this.uint32View = null;
      this.float32View = null;
    }
    static sizeOf(type) {
      switch (type) {
        case "int8":
        case "uint8":
          return 1;
        case "int16":
        case "uint16":
          return 2;
        case "int32":
        case "uint32":
        case "float32":
          return 4;
        default:
          throw new Error(`${type} isn't a valid view type`);
      }
    }
  }

  class BatchShaderGenerator {
    constructor(vertexSrc, fragTemplate) {
      this.vertexSrc = vertexSrc;
      this.fragTemplate = fragTemplate;
      this.programCache = {};
      this.defaultGroupCache = {};
      if (!fragTemplate.includes("%count%")) {
        throw new Error('Fragment template must contain "%count%".');
      }
      if (!fragTemplate.includes("%forloop%")) {
        throw new Error('Fragment template must contain "%forloop%".');
      }
    }
    generateShader(maxTextures) {
      if (!this.programCache[maxTextures]) {
        const sampleValues = new Int32Array(maxTextures);
        for (let i = 0; i < maxTextures; i++) {
          sampleValues[i] = i;
        }
        this.defaultGroupCache[maxTextures] = UniformGroup.from({ uSamplers: sampleValues }, true);
        let fragmentSrc = this.fragTemplate;
        fragmentSrc = fragmentSrc.replace(/%count%/gi, `${maxTextures}`);
        fragmentSrc = fragmentSrc.replace(/%forloop%/gi, this.generateSampleSrc(maxTextures));
        this.programCache[maxTextures] = new Program(this.vertexSrc, fragmentSrc);
      }
      const uniforms = {
        tint: new Float32Array([1, 1, 1, 1]),
        translationMatrix: new Matrix(),
        default: this.defaultGroupCache[maxTextures]
      };
      return new Shader(this.programCache[maxTextures], uniforms);
    }
    generateSampleSrc(maxTextures) {
      let src = "";
      src += "\n";
      src += "\n";
      for (let i = 0; i < maxTextures; i++) {
        if (i > 0) {
          src += "\nelse ";
        }
        if (i < maxTextures - 1) {
          src += `if(vTextureId < ${i}.5)`;
        }
        src += "\n{";
        src += `
	color = texture2D(uSamplers[${i}], vTextureCoord);`;
        src += "\n}";
      }
      src += "\n";
      src += "\n";
      return src;
    }
  }

  class BatchGeometry extends Geometry {
    constructor(_static = false) {
      super();
      this._buffer = new Buffer(null, _static, false);
      this._indexBuffer = new Buffer(null, _static, true);
      this.addAttribute("aVertexPosition", this._buffer, 2, false, TYPES.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, false, TYPES.FLOAT).addAttribute("aColor", this._buffer, 4, true, TYPES.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, true, TYPES.FLOAT).addIndex(this._indexBuffer);
    }
  }

  var defaultVertex = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n";

  var defaultFragment = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n";

  const _BatchRenderer = class extends ObjectRenderer {
    constructor(renderer) {
      super(renderer);
      this.setShaderGenerator();
      this.geometryClass = BatchGeometry;
      this.vertexSize = 6;
      this.state = State.for2d();
      this.size = settings.SPRITE_BATCH_SIZE * 4;
      this._vertexCount = 0;
      this._indexCount = 0;
      this._bufferedElements = [];
      this._bufferedTextures = [];
      this._bufferSize = 0;
      this._shader = null;
      this._packedGeometries = [];
      this._packedGeometryPoolSize = 2;
      this._flushId = 0;
      this._aBuffers = {};
      this._iBuffers = {};
      this.MAX_TEXTURES = 1;
      this.renderer.on("prerender", this.onPrerender, this);
      renderer.runners.contextChange.add(this);
      this._dcIndex = 0;
      this._aIndex = 0;
      this._iIndex = 0;
      this._attributeBuffer = null;
      this._indexBuffer = null;
      this._tempBoundTextures = [];
    }
    static get defaultVertexSrc() {
      return defaultVertex;
    }
    static get defaultFragmentTemplate() {
      return defaultFragment;
    }
    setShaderGenerator({
      vertex = _BatchRenderer.defaultVertexSrc,
      fragment = _BatchRenderer.defaultFragmentTemplate
    } = {}) {
      this.shaderGenerator = new BatchShaderGenerator(vertex, fragment);
    }
    contextChange() {
      const gl = this.renderer.gl;
      if (settings.PREFER_ENV === ENV.WEBGL_LEGACY) {
        this.MAX_TEXTURES = 1;
      } else {
        this.MAX_TEXTURES = Math.min(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), settings.SPRITE_MAX_TEXTURES);
        this.MAX_TEXTURES = checkMaxIfStatementsInShader(this.MAX_TEXTURES, gl);
      }
      this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
      for (let i = 0; i < this._packedGeometryPoolSize; i++) {
        this._packedGeometries[i] = new this.geometryClass();
      }
      this.initFlushBuffers();
    }
    initFlushBuffers() {
      const {
        _drawCallPool,
        _textureArrayPool
      } = _BatchRenderer;
      const MAX_SPRITES = this.size / 4;
      const MAX_TA = Math.floor(MAX_SPRITES / this.MAX_TEXTURES) + 1;
      while (_drawCallPool.length < MAX_SPRITES) {
        _drawCallPool.push(new BatchDrawCall());
      }
      while (_textureArrayPool.length < MAX_TA) {
        _textureArrayPool.push(new BatchTextureArray());
      }
      for (let i = 0; i < this.MAX_TEXTURES; i++) {
        this._tempBoundTextures[i] = null;
      }
    }
    onPrerender() {
      this._flushId = 0;
    }
    render(element) {
      if (!element._texture.valid) {
        return;
      }
      if (this._vertexCount + element.vertexData.length / 2 > this.size) {
        this.flush();
      }
      this._vertexCount += element.vertexData.length / 2;
      this._indexCount += element.indices.length;
      this._bufferedTextures[this._bufferSize] = element._texture.baseTexture;
      this._bufferedElements[this._bufferSize++] = element;
    }
    buildTexturesAndDrawCalls() {
      const {
        _bufferedTextures: textures,
        MAX_TEXTURES
      } = this;
      const textureArrays = _BatchRenderer._textureArrayPool;
      const batch = this.renderer.batch;
      const boundTextures = this._tempBoundTextures;
      const touch = this.renderer.textureGC.count;
      let TICK = ++BaseTexture._globalBatch;
      let countTexArrays = 0;
      let texArray = textureArrays[0];
      let start = 0;
      batch.copyBoundTextures(boundTextures, MAX_TEXTURES);
      for (let i = 0; i < this._bufferSize; ++i) {
        const tex = textures[i];
        textures[i] = null;
        if (tex._batchEnabled === TICK) {
          continue;
        }
        if (texArray.count >= MAX_TEXTURES) {
          batch.boundArray(texArray, boundTextures, TICK, MAX_TEXTURES);
          this.buildDrawCalls(texArray, start, i);
          start = i;
          texArray = textureArrays[++countTexArrays];
          ++TICK;
        }
        tex._batchEnabled = TICK;
        tex.touched = touch;
        texArray.elements[texArray.count++] = tex;
      }
      if (texArray.count > 0) {
        batch.boundArray(texArray, boundTextures, TICK, MAX_TEXTURES);
        this.buildDrawCalls(texArray, start, this._bufferSize);
        ++countTexArrays;
        ++TICK;
      }
      for (let i = 0; i < boundTextures.length; i++) {
        boundTextures[i] = null;
      }
      BaseTexture._globalBatch = TICK;
    }
    buildDrawCalls(texArray, start, finish) {
      const {
        _bufferedElements: elements,
        _attributeBuffer,
        _indexBuffer,
        vertexSize
      } = this;
      const drawCalls = _BatchRenderer._drawCallPool;
      let dcIndex = this._dcIndex;
      let aIndex = this._aIndex;
      let iIndex = this._iIndex;
      let drawCall = drawCalls[dcIndex];
      drawCall.start = this._iIndex;
      drawCall.texArray = texArray;
      for (let i = start; i < finish; ++i) {
        const sprite = elements[i];
        const tex = sprite._texture.baseTexture;
        const spriteBlendMode = premultiplyBlendMode[tex.alphaMode ? 1 : 0][sprite.blendMode];
        elements[i] = null;
        if (start < i && drawCall.blend !== spriteBlendMode) {
          drawCall.size = iIndex - drawCall.start;
          start = i;
          drawCall = drawCalls[++dcIndex];
          drawCall.texArray = texArray;
          drawCall.start = iIndex;
        }
        this.packInterleavedGeometry(sprite, _attributeBuffer, _indexBuffer, aIndex, iIndex);
        aIndex += sprite.vertexData.length / 2 * vertexSize;
        iIndex += sprite.indices.length;
        drawCall.blend = spriteBlendMode;
      }
      if (start < finish) {
        drawCall.size = iIndex - drawCall.start;
        ++dcIndex;
      }
      this._dcIndex = dcIndex;
      this._aIndex = aIndex;
      this._iIndex = iIndex;
    }
    bindAndClearTexArray(texArray) {
      const textureSystem = this.renderer.texture;
      for (let j = 0; j < texArray.count; j++) {
        textureSystem.bind(texArray.elements[j], texArray.ids[j]);
        texArray.elements[j] = null;
      }
      texArray.count = 0;
    }
    updateGeometry() {
      const {
        _packedGeometries: packedGeometries,
        _attributeBuffer: attributeBuffer,
        _indexBuffer: indexBuffer
      } = this;
      if (!settings.CAN_UPLOAD_SAME_BUFFER) {
        if (this._packedGeometryPoolSize <= this._flushId) {
          this._packedGeometryPoolSize++;
          packedGeometries[this._flushId] = new this.geometryClass();
        }
        packedGeometries[this._flushId]._buffer.update(attributeBuffer.rawBinaryData);
        packedGeometries[this._flushId]._indexBuffer.update(indexBuffer);
        this.renderer.geometry.bind(packedGeometries[this._flushId]);
        this.renderer.geometry.updateBuffers();
        this._flushId++;
      } else {
        packedGeometries[this._flushId]._buffer.update(attributeBuffer.rawBinaryData);
        packedGeometries[this._flushId]._indexBuffer.update(indexBuffer);
        this.renderer.geometry.updateBuffers();
      }
    }
    drawBatches() {
      const dcCount = this._dcIndex;
      const { gl, state: stateSystem } = this.renderer;
      const drawCalls = _BatchRenderer._drawCallPool;
      let curTexArray = null;
      for (let i = 0; i < dcCount; i++) {
        const { texArray, type, size, start, blend } = drawCalls[i];
        if (curTexArray !== texArray) {
          curTexArray = texArray;
          this.bindAndClearTexArray(texArray);
        }
        this.state.blendMode = blend;
        stateSystem.set(this.state);
        gl.drawElements(type, size, gl.UNSIGNED_SHORT, start * 2);
      }
    }
    flush() {
      if (this._vertexCount === 0) {
        return;
      }
      this._attributeBuffer = this.getAttributeBuffer(this._vertexCount);
      this._indexBuffer = this.getIndexBuffer(this._indexCount);
      this._aIndex = 0;
      this._iIndex = 0;
      this._dcIndex = 0;
      this.buildTexturesAndDrawCalls();
      this.updateGeometry();
      this.drawBatches();
      this._bufferSize = 0;
      this._vertexCount = 0;
      this._indexCount = 0;
    }
    start() {
      this.renderer.state.set(this.state);
      this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES);
      this.renderer.shader.bind(this._shader);
      if (settings.CAN_UPLOAD_SAME_BUFFER) {
        this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
      }
    }
    stop() {
      this.flush();
    }
    destroy() {
      for (let i = 0; i < this._packedGeometryPoolSize; i++) {
        if (this._packedGeometries[i]) {
          this._packedGeometries[i].destroy();
        }
      }
      this.renderer.off("prerender", this.onPrerender, this);
      this._aBuffers = null;
      this._iBuffers = null;
      this._packedGeometries = null;
      this._attributeBuffer = null;
      this._indexBuffer = null;
      if (this._shader) {
        this._shader.destroy();
        this._shader = null;
      }
      super.destroy();
    }
    getAttributeBuffer(size) {
      const roundedP2 = nextPow2(Math.ceil(size / 8));
      const roundedSizeIndex = log2(roundedP2);
      const roundedSize = roundedP2 * 8;
      if (this._aBuffers.length <= roundedSizeIndex) {
        this._iBuffers.length = roundedSizeIndex + 1;
      }
      let buffer = this._aBuffers[roundedSize];
      if (!buffer) {
        this._aBuffers[roundedSize] = buffer = new ViewableBuffer(roundedSize * this.vertexSize * 4);
      }
      return buffer;
    }
    getIndexBuffer(size) {
      const roundedP2 = nextPow2(Math.ceil(size / 12));
      const roundedSizeIndex = log2(roundedP2);
      const roundedSize = roundedP2 * 12;
      if (this._iBuffers.length <= roundedSizeIndex) {
        this._iBuffers.length = roundedSizeIndex + 1;
      }
      let buffer = this._iBuffers[roundedSizeIndex];
      if (!buffer) {
        this._iBuffers[roundedSizeIndex] = buffer = new Uint16Array(roundedSize);
      }
      return buffer;
    }
    packInterleavedGeometry(element, attributeBuffer, indexBuffer, aIndex, iIndex) {
      const {
        uint32View,
        float32View
      } = attributeBuffer;
      const packedVertices = aIndex / this.vertexSize;
      const uvs = element.uvs;
      const indicies = element.indices;
      const vertexData = element.vertexData;
      const textureId = element._texture.baseTexture._batchLocation;
      const alpha = Math.min(element.worldAlpha, 1);
      const argb = alpha < 1 && element._texture.baseTexture.alphaMode ? premultiplyTint(element._tintRGB, alpha) : element._tintRGB + (alpha * 255 << 24);
      for (let i = 0; i < vertexData.length; i += 2) {
        float32View[aIndex++] = vertexData[i];
        float32View[aIndex++] = vertexData[i + 1];
        float32View[aIndex++] = uvs[i];
        float32View[aIndex++] = uvs[i + 1];
        uint32View[aIndex++] = argb;
        float32View[aIndex++] = textureId;
      }
      for (let i = 0; i < indicies.length; i++) {
        indexBuffer[iIndex++] = packedVertices + indicies[i];
      }
    }
  };
  let BatchRenderer = _BatchRenderer;
  BatchRenderer.extension = {
    name: "batch",
    type: ExtensionType.RendererPlugin
  };
  BatchRenderer._drawCallPool = [];
  BatchRenderer._textureArrayPool = [];
  extensions.add(BatchRenderer);

  class GLBuffer {
    constructor(buffer) {
      this.buffer = buffer || null;
      this.updateID = -1;
      this.byteLength = -1;
      this.refCount = 0;
    }
  }

  class BufferSystem {
    constructor(renderer) {
      this.renderer = renderer;
      this.managedBuffers = {};
      this.boundBufferBases = {};
    }
    destroy() {
      this.renderer = null;
    }
    contextChange() {
      this.disposeAll(true);
      this.gl = this.renderer.gl;
      this.CONTEXT_UID = this.renderer.CONTEXT_UID;
    }
    bind(buffer) {
      const { gl, CONTEXT_UID } = this;
      const glBuffer = buffer._glBuffers[CONTEXT_UID] || this.createGLBuffer(buffer);
      gl.bindBuffer(buffer.type, glBuffer.buffer);
    }
    unbind(type) {
      const { gl } = this;
      gl.bindBuffer(type, null);
    }
    bindBufferBase(buffer, index) {
      const { gl, CONTEXT_UID } = this;
      if (this.boundBufferBases[index] !== buffer) {
        const glBuffer = buffer._glBuffers[CONTEXT_UID] || this.createGLBuffer(buffer);
        this.boundBufferBases[index] = buffer;
        gl.bindBufferBase(gl.UNIFORM_BUFFER, index, glBuffer.buffer);
      }
    }
    bindBufferRange(buffer, index, offset) {
      const { gl, CONTEXT_UID } = this;
      offset = offset || 0;
      const glBuffer = buffer._glBuffers[CONTEXT_UID] || this.createGLBuffer(buffer);
      gl.bindBufferRange(gl.UNIFORM_BUFFER, index || 0, glBuffer.buffer, offset * 256, 256);
    }
    update(buffer) {
      const { gl, CONTEXT_UID } = this;
      const glBuffer = buffer._glBuffers[CONTEXT_UID] || this.createGLBuffer(buffer);
      if (buffer._updateID === glBuffer.updateID) {
        return;
      }
      glBuffer.updateID = buffer._updateID;
      gl.bindBuffer(buffer.type, glBuffer.buffer);
      if (glBuffer.byteLength >= buffer.data.byteLength) {
        gl.bufferSubData(buffer.type, 0, buffer.data);
      } else {
        const drawType = buffer.static ? gl.STATIC_DRAW : gl.DYNAMIC_DRAW;
        glBuffer.byteLength = buffer.data.byteLength;
        gl.bufferData(buffer.type, buffer.data, drawType);
      }
    }
    dispose(buffer, contextLost) {
      if (!this.managedBuffers[buffer.id]) {
        return;
      }
      delete this.managedBuffers[buffer.id];
      const glBuffer = buffer._glBuffers[this.CONTEXT_UID];
      const gl = this.gl;
      buffer.disposeRunner.remove(this);
      if (!glBuffer) {
        return;
      }
      if (!contextLost) {
        gl.deleteBuffer(glBuffer.buffer);
      }
      delete buffer._glBuffers[this.CONTEXT_UID];
    }
    disposeAll(contextLost) {
      const all = Object.keys(this.managedBuffers);
      for (let i = 0; i < all.length; i++) {
        this.dispose(this.managedBuffers[all[i]], contextLost);
      }
    }
    createGLBuffer(buffer) {
      const { CONTEXT_UID, gl } = this;
      buffer._glBuffers[CONTEXT_UID] = new GLBuffer(gl.createBuffer());
      this.managedBuffers[buffer.id] = buffer;
      buffer.disposeRunner.add(this);
      return buffer._glBuffers[CONTEXT_UID];
    }
  }
  BufferSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "buffer"
  };
  extensions.add(BufferSystem);

  class MultisampleSystem {
    constructor(renderer) {
      this.renderer = renderer;
    }
    contextChange(gl) {
      let samples;
      if (this.renderer.context.webGLVersion === 1) {
        const framebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        samples = gl.getParameter(gl.SAMPLES);
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      } else {
        const framebuffer = gl.getParameter(gl.DRAW_FRAMEBUFFER_BINDING);
        gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
        samples = gl.getParameter(gl.SAMPLES);
        gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, framebuffer);
      }
      if (samples >= MSAA_QUALITY.HIGH) {
        this.multisample = MSAA_QUALITY.HIGH;
      } else if (samples >= MSAA_QUALITY.MEDIUM) {
        this.multisample = MSAA_QUALITY.MEDIUM;
      } else if (samples >= MSAA_QUALITY.LOW) {
        this.multisample = MSAA_QUALITY.LOW;
      } else {
        this.multisample = MSAA_QUALITY.NONE;
      }
    }
    destroy() {
    }
  }
  MultisampleSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "_multisample"
  };
  extensions.add(MultisampleSystem);

  class ObjectRendererSystem {
    constructor(renderer) {
      this.renderer = renderer;
    }
    render(displayObject, options) {
      const renderer = this.renderer;
      let renderTexture;
      let clear;
      let transform;
      let skipUpdateTransform;
      if (options) {
        renderTexture = options.renderTexture;
        clear = options.clear;
        transform = options.transform;
        skipUpdateTransform = options.skipUpdateTransform;
      }
      this.renderingToScreen = !renderTexture;
      renderer.runners.prerender.emit();
      renderer.emit("prerender");
      renderer.projection.transform = transform;
      if (renderer.context.isLost) {
        return;
      }
      if (!renderTexture) {
        this.lastObjectRendered = displayObject;
      }
      if (!skipUpdateTransform) {
        const cacheParent = displayObject.enableTempParent();
        displayObject.updateTransform();
        displayObject.disableTempParent(cacheParent);
      }
      renderer.renderTexture.bind(renderTexture);
      renderer.batch.currentRenderer.start();
      if (clear ?? renderer.background.clearBeforeRender) {
        renderer.renderTexture.clear();
      }
      displayObject.render(renderer);
      renderer.batch.currentRenderer.flush();
      if (renderTexture) {
        if (options.blit) {
          renderer.framebuffer.blit();
        }
        renderTexture.baseTexture.update();
      }
      renderer.runners.postrender.emit();
      renderer.projection.transform = null;
      renderer.emit("postrender");
    }
    destroy() {
      this.renderer = null;
      this.lastObjectRendered = null;
    }
  }
  ObjectRendererSystem.extension = {
    type: ExtensionType.RendererSystem,
    name: "objectRenderer"
  };
  extensions.add(ObjectRendererSystem);

  settings.SORTABLE_CHILDREN = false;

  class Bounds {
    constructor() {
      this.minX = Infinity;
      this.minY = Infinity;
      this.maxX = -Infinity;
      this.maxY = -Infinity;
      this.rect = null;
      this.updateID = -1;
    }
    isEmpty() {
      return this.minX > this.maxX || this.minY > this.maxY;
    }
    clear() {
      this.minX = Infinity;
      this.minY = Infinity;
      this.maxX = -Infinity;
      this.maxY = -Infinity;
    }
    getRectangle(rect) {
      if (this.minX > this.maxX || this.minY > this.maxY) {
        return Rectangle.EMPTY;
      }
      rect = rect || new Rectangle(0, 0, 1, 1);
      rect.x = this.minX;
      rect.y = this.minY;
      rect.width = this.maxX - this.minX;
      rect.height = this.maxY - this.minY;
      return rect;
    }
    addPoint(point) {
      this.minX = Math.min(this.minX, point.x);
      this.maxX = Math.max(this.maxX, point.x);
      this.minY = Math.min(this.minY, point.y);
      this.maxY = Math.max(this.maxY, point.y);
    }
    addPointMatrix(matrix, point) {
      const { a, b, c, d, tx, ty } = matrix;
      const x = a * point.x + c * point.y + tx;
      const y = b * point.x + d * point.y + ty;
      this.minX = Math.min(this.minX, x);
      this.maxX = Math.max(this.maxX, x);
      this.minY = Math.min(this.minY, y);
      this.maxY = Math.max(this.maxY, y);
    }
    addQuad(vertices) {
      let minX = this.minX;
      let minY = this.minY;
      let maxX = this.maxX;
      let maxY = this.maxY;
      let x = vertices[0];
      let y = vertices[1];
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      x = vertices[2];
      y = vertices[3];
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      x = vertices[4];
      y = vertices[5];
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      x = vertices[6];
      y = vertices[7];
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    }
    addFrame(transform, x0, y0, x1, y1) {
      this.addFrameMatrix(transform.worldTransform, x0, y0, x1, y1);
    }
    addFrameMatrix(matrix, x0, y0, x1, y1) {
      const a = matrix.a;
      const b = matrix.b;
      const c = matrix.c;
      const d = matrix.d;
      const tx = matrix.tx;
      const ty = matrix.ty;
      let minX = this.minX;
      let minY = this.minY;
      let maxX = this.maxX;
      let maxY = this.maxY;
      let x = a * x0 + c * y0 + tx;
      let y = b * x0 + d * y0 + ty;
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      x = a * x1 + c * y0 + tx;
      y = b * x1 + d * y0 + ty;
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      x = a * x0 + c * y1 + tx;
      y = b * x0 + d * y1 + ty;
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      x = a * x1 + c * y1 + tx;
      y = b * x1 + d * y1 + ty;
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    }
    addVertexData(vertexData, beginOffset, endOffset) {
      let minX = this.minX;
      let minY = this.minY;
      let maxX = this.maxX;
      let maxY = this.maxY;
      for (let i = beginOffset; i < endOffset; i += 2) {
        const x = vertexData[i];
        const y = vertexData[i + 1];
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
      }
      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    }
    addVertices(transform, vertices, beginOffset, endOffset) {
      this.addVerticesMatrix(transform.worldTransform, vertices, beginOffset, endOffset);
    }
    addVerticesMatrix(matrix, vertices, beginOffset, endOffset, padX = 0, padY = padX) {
      const a = matrix.a;
      const b = matrix.b;
      const c = matrix.c;
      const d = matrix.d;
      const tx = matrix.tx;
      const ty = matrix.ty;
      let minX = this.minX;
      let minY = this.minY;
      let maxX = this.maxX;
      let maxY = this.maxY;
      for (let i = beginOffset; i < endOffset; i += 2) {
        const rawX = vertices[i];
        const rawY = vertices[i + 1];
        const x = a * rawX + c * rawY + tx;
        const y = d * rawY + b * rawX + ty;
        minX = Math.min(minX, x - padX);
        maxX = Math.max(maxX, x + padX);
        minY = Math.min(minY, y - padY);
        maxY = Math.max(maxY, y + padY);
      }
      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    }
    addBounds(bounds) {
      const minX = this.minX;
      const minY = this.minY;
      const maxX = this.maxX;
      const maxY = this.maxY;
      this.minX = bounds.minX < minX ? bounds.minX : minX;
      this.minY = bounds.minY < minY ? bounds.minY : minY;
      this.maxX = bounds.maxX > maxX ? bounds.maxX : maxX;
      this.maxY = bounds.maxY > maxY ? bounds.maxY : maxY;
    }
    addBoundsMask(bounds, mask) {
      const _minX = bounds.minX > mask.minX ? bounds.minX : mask.minX;
      const _minY = bounds.minY > mask.minY ? bounds.minY : mask.minY;
      const _maxX = bounds.maxX < mask.maxX ? bounds.maxX : mask.maxX;
      const _maxY = bounds.maxY < mask.maxY ? bounds.maxY : mask.maxY;
      if (_minX <= _maxX && _minY <= _maxY) {
        const minX = this.minX;
        const minY = this.minY;
        const maxX = this.maxX;
        const maxY = this.maxY;
        this.minX = _minX < minX ? _minX : minX;
        this.minY = _minY < minY ? _minY : minY;
        this.maxX = _maxX > maxX ? _maxX : maxX;
        this.maxY = _maxY > maxY ? _maxY : maxY;
      }
    }
    addBoundsMatrix(bounds, matrix) {
      this.addFrameMatrix(matrix, bounds.minX, bounds.minY, bounds.maxX, bounds.maxY);
    }
    addBoundsArea(bounds, area) {
      const _minX = bounds.minX > area.x ? bounds.minX : area.x;
      const _minY = bounds.minY > area.y ? bounds.minY : area.y;
      const _maxX = bounds.maxX < area.x + area.width ? bounds.maxX : area.x + area.width;
      const _maxY = bounds.maxY < area.y + area.height ? bounds.maxY : area.y + area.height;
      if (_minX <= _maxX && _minY <= _maxY) {
        const minX = this.minX;
        const minY = this.minY;
        const maxX = this.maxX;
        const maxY = this.maxY;
        this.minX = _minX < minX ? _minX : minX;
        this.minY = _minY < minY ? _minY : minY;
        this.maxX = _maxX > maxX ? _maxX : maxX;
        this.maxY = _maxY > maxY ? _maxY : maxY;
      }
    }
    pad(paddingX = 0, paddingY = paddingX) {
      if (!this.isEmpty()) {
        this.minX -= paddingX;
        this.maxX += paddingX;
        this.minY -= paddingY;
        this.maxY += paddingY;
      }
    }
    addFramePad(x0, y0, x1, y1, padX, padY) {
      x0 -= padX;
      y0 -= padY;
      x1 += padX;
      y1 += padY;
      this.minX = this.minX < x0 ? this.minX : x0;
      this.maxX = this.maxX > x1 ? this.maxX : x1;
      this.minY = this.minY < y0 ? this.minY : y0;
      this.maxY = this.maxY > y1 ? this.maxY : y1;
    }
  }

  class DisplayObject extends EventEmitter {
    constructor() {
      super();
      this.tempDisplayObjectParent = null;
      this.transform = new Transform();
      this.alpha = 1;
      this.visible = true;
      this.renderable = true;
      this.cullable = false;
      this.cullArea = null;
      this.parent = null;
      this.worldAlpha = 1;
      this._lastSortedIndex = 0;
      this._zIndex = 0;
      this.filterArea = null;
      this.filters = null;
      this._enabledFilters = null;
      this._bounds = new Bounds();
      this._localBounds = null;
      this._boundsID = 0;
      this._boundsRect = null;
      this._localBoundsRect = null;
      this._mask = null;
      this._maskRefCount = 0;
      this._destroyed = false;
      this.isSprite = false;
      this.isMask = false;
    }
    static mixin(source) {
      const keys = Object.keys(source);
      for (let i = 0; i < keys.length; ++i) {
        const propertyName = keys[i];
        Object.defineProperty(DisplayObject.prototype, propertyName, Object.getOwnPropertyDescriptor(source, propertyName));
      }
    }
    get destroyed() {
      return this._destroyed;
    }
    _recursivePostUpdateTransform() {
      if (this.parent) {
        this.parent._recursivePostUpdateTransform();
        this.transform.updateTransform(this.parent.transform);
      } else {
        this.transform.updateTransform(this._tempDisplayObjectParent.transform);
      }
    }
    updateTransform() {
      this._boundsID++;
      this.transform.updateTransform(this.parent.transform);
      this.worldAlpha = this.alpha * this.parent.worldAlpha;
    }
    getBounds(skipUpdate, rect) {
      if (!skipUpdate) {
        if (!this.parent) {
          this.parent = this._tempDisplayObjectParent;
          this.updateTransform();
          this.parent = null;
        } else {
          this._recursivePostUpdateTransform();
          this.updateTransform();
        }
      }
      if (this._bounds.updateID !== this._boundsID) {
        this.calculateBounds();
        this._bounds.updateID = this._boundsID;
      }
      if (!rect) {
        if (!this._boundsRect) {
          this._boundsRect = new Rectangle();
        }
        rect = this._boundsRect;
      }
      return this._bounds.getRectangle(rect);
    }
    getLocalBounds(rect) {
      if (!rect) {
        if (!this._localBoundsRect) {
          this._localBoundsRect = new Rectangle();
        }
        rect = this._localBoundsRect;
      }
      if (!this._localBounds) {
        this._localBounds = new Bounds();
      }
      const transformRef = this.transform;
      const parentRef = this.parent;
      this.parent = null;
      this.transform = this._tempDisplayObjectParent.transform;
      const worldBounds = this._bounds;
      const worldBoundsID = this._boundsID;
      this._bounds = this._localBounds;
      const bounds = this.getBounds(false, rect);
      this.parent = parentRef;
      this.transform = transformRef;
      this._bounds = worldBounds;
      this._bounds.updateID += this._boundsID - worldBoundsID;
      return bounds;
    }
    toGlobal(position, point, skipUpdate = false) {
      if (!skipUpdate) {
        this._recursivePostUpdateTransform();
        if (!this.parent) {
          this.parent = this._tempDisplayObjectParent;
          this.displayObjectUpdateTransform();
          this.parent = null;
        } else {
          this.displayObjectUpdateTransform();
        }
      }
      return this.worldTransform.apply(position, point);
    }
    toLocal(position, from, point, skipUpdate) {
      if (from) {
        position = from.toGlobal(position, point, skipUpdate);
      }
      if (!skipUpdate) {
        this._recursivePostUpdateTransform();
        if (!this.parent) {
          this.parent = this._tempDisplayObjectParent;
          this.displayObjectUpdateTransform();
          this.parent = null;
        } else {
          this.displayObjectUpdateTransform();
        }
      }
      return this.worldTransform.applyInverse(position, point);
    }
    setParent(container) {
      if (!container || !container.addChild) {
        throw new Error("setParent: Argument must be a Container");
      }
      container.addChild(this);
      return container;
    }
    removeFromParent() {
      this.parent?.removeChild(this);
    }
    setTransform(x = 0, y = 0, scaleX = 1, scaleY = 1, rotation = 0, skewX = 0, skewY = 0, pivotX = 0, pivotY = 0) {
      this.position.x = x;
      this.position.y = y;
      this.scale.x = !scaleX ? 1 : scaleX;
      this.scale.y = !scaleY ? 1 : scaleY;
      this.rotation = rotation;
      this.skew.x = skewX;
      this.skew.y = skewY;
      this.pivot.x = pivotX;
      this.pivot.y = pivotY;
      return this;
    }
    destroy(_options) {
      this.removeFromParent();
      this._destroyed = true;
      this.transform = null;
      this.parent = null;
      this._bounds = null;
      this.mask = null;
      this.cullArea = null;
      this.filters = null;
      this.filterArea = null;
      this.hitArea = null;
      this.interactive = false;
      this.interactiveChildren = false;
      this.emit("destroyed");
      this.removeAllListeners();
    }
    get _tempDisplayObjectParent() {
      if (this.tempDisplayObjectParent === null) {
        this.tempDisplayObjectParent = new TemporaryDisplayObject();
      }
      return this.tempDisplayObjectParent;
    }
    enableTempParent() {
      const myParent = this.parent;
      this.parent = this._tempDisplayObjectParent;
      return myParent;
    }
    disableTempParent(cacheParent) {
      this.parent = cacheParent;
    }
    get x() {
      return this.position.x;
    }
    set x(value) {
      this.transform.position.x = value;
    }
    get y() {
      return this.position.y;
    }
    set y(value) {
      this.transform.position.y = value;
    }
    get worldTransform() {
      return this.transform.worldTransform;
    }
    get localTransform() {
      return this.transform.localTransform;
    }
    get position() {
      return this.transform.position;
    }
    set position(value) {
      this.transform.position.copyFrom(value);
    }
    get scale() {
      return this.transform.scale;
    }
    set scale(value) {
      this.transform.scale.copyFrom(value);
    }
    get pivot() {
      return this.transform.pivot;
    }
    set pivot(value) {
      this.transform.pivot.copyFrom(value);
    }
    get skew() {
      return this.transform.skew;
    }
    set skew(value) {
      this.transform.skew.copyFrom(value);
    }
    get rotation() {
      return this.transform.rotation;
    }
    set rotation(value) {
      this.transform.rotation = value;
    }
    get angle() {
      return this.transform.rotation * RAD_TO_DEG;
    }
    set angle(value) {
      this.transform.rotation = value * DEG_TO_RAD;
    }
    get zIndex() {
      return this._zIndex;
    }
    set zIndex(value) {
      this._zIndex = value;
      if (this.parent) {
        this.parent.sortDirty = true;
      }
    }
    get worldVisible() {
      let item = this;
      do {
        if (!item.visible) {
          return false;
        }
        item = item.parent;
      } while (item);
      return true;
    }
    get mask() {
      return this._mask;
    }
    set mask(value) {
      if (this._mask === value) {
        return;
      }
      if (this._mask) {
        const maskObject = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        if (maskObject) {
          maskObject._maskRefCount--;
          if (maskObject._maskRefCount === 0) {
            maskObject.renderable = true;
            maskObject.isMask = false;
          }
        }
      }
      this._mask = value;
      if (this._mask) {
        const maskObject = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        if (maskObject) {
          if (maskObject._maskRefCount === 0) {
            maskObject.renderable = false;
            maskObject.isMask = true;
          }
          maskObject._maskRefCount++;
        }
      }
    }
  }
  class TemporaryDisplayObject extends DisplayObject {
    constructor() {
      super(...arguments);
      this.sortDirty = null;
    }
  }
  DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;

  function sortChildren(a, b) {
    if (a.zIndex === b.zIndex) {
      return a._lastSortedIndex - b._lastSortedIndex;
    }
    return a.zIndex - b.zIndex;
  }
  class Container extends DisplayObject {
    constructor() {
      super();
      this.children = [];
      this.sortableChildren = settings.SORTABLE_CHILDREN;
      this.sortDirty = false;
    }
    onChildrenChange(_length) {
    }
    addChild(...children) {
      if (children.length > 1) {
        for (let i = 0; i < children.length; i++) {
          this.addChild(children[i]);
        }
      } else {
        const child = children[0];
        if (child.parent) {
          child.parent.removeChild(child);
        }
        child.parent = this;
        this.sortDirty = true;
        child.transform._parentID = -1;
        this.children.push(child);
        this._boundsID++;
        this.onChildrenChange(this.children.length - 1);
        this.emit("childAdded", child, this, this.children.length - 1);
        child.emit("added", this);
      }
      return children[0];
    }
    addChildAt(child, index) {
      if (index < 0 || index > this.children.length) {
        throw new Error(`${child}addChildAt: The index ${index} supplied is out of bounds ${this.children.length}`);
      }
      if (child.parent) {
        child.parent.removeChild(child);
      }
      child.parent = this;
      this.sortDirty = true;
      child.transform._parentID = -1;
      this.children.splice(index, 0, child);
      this._boundsID++;
      this.onChildrenChange(index);
      child.emit("added", this);
      this.emit("childAdded", child, this, index);
      return child;
    }
    swapChildren(child, child2) {
      if (child === child2) {
        return;
      }
      const index1 = this.getChildIndex(child);
      const index2 = this.getChildIndex(child2);
      this.children[index1] = child2;
      this.children[index2] = child;
      this.onChildrenChange(index1 < index2 ? index1 : index2);
    }
    getChildIndex(child) {
      const index = this.children.indexOf(child);
      if (index === -1) {
        throw new Error("The supplied DisplayObject must be a child of the caller");
      }
      return index;
    }
    setChildIndex(child, index) {
      if (index < 0 || index >= this.children.length) {
        throw new Error(`The index ${index} supplied is out of bounds ${this.children.length}`);
      }
      const currentIndex = this.getChildIndex(child);
      removeItems(this.children, currentIndex, 1);
      this.children.splice(index, 0, child);
      this.onChildrenChange(index);
    }
    getChildAt(index) {
      if (index < 0 || index >= this.children.length) {
        throw new Error(`getChildAt: Index (${index}) does not exist.`);
      }
      return this.children[index];
    }
    removeChild(...children) {
      if (children.length > 1) {
        for (let i = 0; i < children.length; i++) {
          this.removeChild(children[i]);
        }
      } else {
        const child = children[0];
        const index = this.children.indexOf(child);
        if (index === -1)
          return null;
        child.parent = null;
        child.transform._parentID = -1;
        removeItems(this.children, index, 1);
        this._boundsID++;
        this.onChildrenChange(index);
        child.emit("removed", this);
        this.emit("childRemoved", child, this, index);
      }
      return children[0];
    }
    removeChildAt(index) {
      const child = this.getChildAt(index);
      child.parent = null;
      child.transform._parentID = -1;
      removeItems(this.children, index, 1);
      this._boundsID++;
      this.onChildrenChange(index);
      child.emit("removed", this);
      this.emit("childRemoved", child, this, index);
      return child;
    }
    removeChildren(beginIndex = 0, endIndex = this.children.length) {
      const begin = beginIndex;
      const end = endIndex;
      const range = end - begin;
      let removed;
      if (range > 0 && range <= end) {
        removed = this.children.splice(begin, range);
        for (let i = 0; i < removed.length; ++i) {
          removed[i].parent = null;
          if (removed[i].transform) {
            removed[i].transform._parentID = -1;
          }
        }
        this._boundsID++;
        this.onChildrenChange(beginIndex);
        for (let i = 0; i < removed.length; ++i) {
          removed[i].emit("removed", this);
          this.emit("childRemoved", removed[i], this, i);
        }
        return removed;
      } else if (range === 0 && this.children.length === 0) {
        return [];
      }
      throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
    }
    sortChildren() {
      let sortRequired = false;
      for (let i = 0, j = this.children.length; i < j; ++i) {
        const child = this.children[i];
        child._lastSortedIndex = i;
        if (!sortRequired && child.zIndex !== 0) {
          sortRequired = true;
        }
      }
      if (sortRequired && this.children.length > 1) {
        this.children.sort(sortChildren);
      }
      this.sortDirty = false;
    }
    updateTransform() {
      if (this.sortableChildren && this.sortDirty) {
        this.sortChildren();
      }
      this._boundsID++;
      this.transform.updateTransform(this.parent.transform);
      this.worldAlpha = this.alpha * this.parent.worldAlpha;
      for (let i = 0, j = this.children.length; i < j; ++i) {
        const child = this.children[i];
        if (child.visible) {
          child.updateTransform();
        }
      }
    }
    calculateBounds() {
      this._bounds.clear();
      this._calculateBounds();
      for (let i = 0; i < this.children.length; i++) {
        const child = this.children[i];
        if (!child.visible || !child.renderable) {
          continue;
        }
        child.calculateBounds();
        if (child._mask) {
          const maskObject = child._mask.isMaskData ? child._mask.maskObject : child._mask;
          if (maskObject) {
            maskObject.calculateBounds();
            this._bounds.addBoundsMask(child._bounds, maskObject._bounds);
          } else {
            this._bounds.addBounds(child._bounds);
          }
        } else if (child.filterArea) {
          this._bounds.addBoundsArea(child._bounds, child.filterArea);
        } else {
          this._bounds.addBounds(child._bounds);
        }
      }
      this._bounds.updateID = this._boundsID;
    }
    getLocalBounds(rect, skipChildrenUpdate = false) {
      const result = super.getLocalBounds(rect);
      if (!skipChildrenUpdate) {
        for (let i = 0, j = this.children.length; i < j; ++i) {
          const child = this.children[i];
          if (child.visible) {
            child.updateTransform();
          }
        }
      }
      return result;
    }
    _calculateBounds() {
    }
    _renderWithCulling(renderer) {
      const sourceFrame = renderer.renderTexture.sourceFrame;
      if (!(sourceFrame.width > 0 && sourceFrame.height > 0)) {
        return;
      }
      let bounds;
      let transform;
      if (this.cullArea) {
        bounds = this.cullArea;
        transform = this.worldTransform;
      } else if (this._render !== Container.prototype._render) {
        bounds = this.getBounds(true);
      }
      if (bounds && sourceFrame.intersects(bounds, transform)) {
        this._render(renderer);
      } else if (this.cullArea) {
        return;
      }
      for (let i = 0, j = this.children.length; i < j; ++i) {
        const child = this.children[i];
        const childCullable = child.cullable;
        child.cullable = childCullable || !this.cullArea;
        child.render(renderer);
        child.cullable = childCullable;
      }
    }
    render(renderer) {
      if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
        return;
      }
      if (this._mask || this.filters?.length) {
        this.renderAdvanced(renderer);
      } else if (this.cullable) {
        this._renderWithCulling(renderer);
      } else {
        this._render(renderer);
        for (let i = 0, j = this.children.length; i < j; ++i) {
          this.children[i].render(renderer);
        }
      }
    }
    renderAdvanced(renderer) {
      const filters = this.filters;
      const mask = this._mask;
      if (filters) {
        if (!this._enabledFilters) {
          this._enabledFilters = [];
        }
        this._enabledFilters.length = 0;
        for (let i = 0; i < filters.length; i++) {
          if (filters[i].enabled) {
            this._enabledFilters.push(filters[i]);
          }
        }
      }
      const flush = filters && this._enabledFilters?.length || mask && (!mask.isMaskData || mask.enabled && (mask.autoDetect || mask.type !== MASK_TYPES.NONE));
      if (flush) {
        renderer.batch.flush();
      }
      if (filters && this._enabledFilters?.length) {
        renderer.filter.push(this, this._enabledFilters);
      }
      if (mask) {
        renderer.mask.push(this, this._mask);
      }
      if (this.cullable) {
        this._renderWithCulling(renderer);
      } else {
        this._render(renderer);
        for (let i = 0, j = this.children.length; i < j; ++i) {
          this.children[i].render(renderer);
        }
      }
      if (flush) {
        renderer.batch.flush();
      }
      if (mask) {
        renderer.mask.pop(this);
      }
      if (filters && this._enabledFilters?.length) {
        renderer.filter.pop();
      }
    }
    _render(_renderer) {
    }
    destroy(options) {
      super.destroy();
      this.sortDirty = false;
      const destroyChildren = typeof options === "boolean" ? options : options?.children;
      const oldChildren = this.removeChildren(0, this.children.length);
      if (destroyChildren) {
        for (let i = 0; i < oldChildren.length; ++i) {
          oldChildren[i].destroy(options);
        }
      }
    }
    get width() {
      return this.scale.x * this.getLocalBounds().width;
    }
    set width(value) {
      const width = this.getLocalBounds().width;
      if (width !== 0) {
        this.scale.x = value / width;
      } else {
        this.scale.x = 1;
      }
      this._width = value;
    }
    get height() {
      return this.scale.y * this.getLocalBounds().height;
    }
    set height(value) {
      const height = this.getLocalBounds().height;
      if (height !== 0) {
        this.scale.y = value / height;
      } else {
        this.scale.y = 1;
      }
      this._height = value;
    }
  }
  Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;

  class FederatedEvent {
    constructor(manager) {
      this.bubbles = true;
      this.cancelBubble = true;
      this.cancelable = false;
      this.composed = false;
      this.defaultPrevented = false;
      this.eventPhase = FederatedEvent.prototype.NONE;
      this.propagationStopped = false;
      this.propagationImmediatelyStopped = false;
      this.layer = new Point();
      this.page = new Point();
      this.AT_TARGET = 1;
      this.BUBBLING_PHASE = 2;
      this.CAPTURING_PHASE = 3;
      this.NONE = 0;
      this.manager = manager;
    }
    get layerX() {
      return this.layer.x;
    }
    get layerY() {
      return this.layer.y;
    }
    get pageX() {
      return this.page.x;
    }
    get pageY() {
      return this.page.y;
    }
    get data() {
      return this;
    }
    composedPath() {
      if (this.manager && (!this.path || this.path[this.path.length - 1] !== this.target)) {
        this.path = this.target ? this.manager.propagationPath(this.target) : [];
      }
      return this.path;
    }
    initEvent(_type, _bubbles, _cancelable) {
      throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
    }
    initUIEvent(_typeArg, _bubblesArg, _cancelableArg, _viewArg, _detailArg) {
      throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
    }
    preventDefault() {
      if (this.nativeEvent instanceof Event && this.nativeEvent.cancelable) {
        this.nativeEvent.preventDefault();
      }
      this.defaultPrevented = true;
    }
    stopImmediatePropagation() {
      this.propagationImmediatelyStopped = true;
    }
    stopPropagation() {
      this.propagationStopped = true;
    }
  }

  class FederatedMouseEvent extends FederatedEvent {
    constructor() {
      super(...arguments);
      this.client = new Point();
      this.movement = new Point();
      this.offset = new Point();
      this.global = new Point();
      this.screen = new Point();
    }
    get clientX() {
      return this.client.x;
    }
    get clientY() {
      return this.client.y;
    }
    get x() {
      return this.clientX;
    }
    get y() {
      return this.clientY;
    }
    get movementX() {
      return this.movement.x;
    }
    get movementY() {
      return this.movement.y;
    }
    get offsetX() {
      return this.offset.x;
    }
    get offsetY() {
      return this.offset.y;
    }
    get globalX() {
      return this.global.x;
    }
    get globalY() {
      return this.global.y;
    }
    get screenX() {
      return this.screen.x;
    }
    get screenY() {
      return this.screen.y;
    }
    getModifierState(key) {
      return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(key);
    }
    initMouseEvent(_typeArg, _canBubbleArg, _cancelableArg, _viewArg, _detailArg, _screenXArg, _screenYArg, _clientXArg, _clientYArg, _ctrlKeyArg, _altKeyArg, _shiftKeyArg, _metaKeyArg, _buttonArg, _relatedTargetArg) {
      throw new Error("Method not implemented.");
    }
  }

  class FederatedPointerEvent extends FederatedMouseEvent {
    constructor() {
      super(...arguments);
      this.width = 0;
      this.height = 0;
      this.isPrimary = false;
    }
    getCoalescedEvents() {
      if (this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove") {
        return [this];
      }
      return [];
    }
    getPredictedEvents() {
      throw new Error("getPredictedEvents is not supported!");
    }
  }

  class FederatedWheelEvent extends FederatedMouseEvent {
    constructor() {
      super(...arguments);
      this.DOM_DELTA_LINE = 0;
      this.DOM_DELTA_PAGE = 1;
      this.DOM_DELTA_PIXEL = 2;
    }
  }

  const PROPAGATION_LIMIT = 2048;
  const tempHitLocation = new Point();
  const tempLocalMapping = new Point();
  class EventBoundary {
    constructor(rootTarget) {
      this.dispatch = new EventEmitter();
      this.moveOnAll = false;
      this.mappingState = {
        trackingData: {}
      };
      this.eventPool = /* @__PURE__ */ new Map();
      this.rootTarget = rootTarget;
      this.hitPruneFn = this.hitPruneFn.bind(this);
      this.hitTestFn = this.hitTestFn.bind(this);
      this.mapPointerDown = this.mapPointerDown.bind(this);
      this.mapPointerMove = this.mapPointerMove.bind(this);
      this.mapPointerOut = this.mapPointerOut.bind(this);
      this.mapPointerOver = this.mapPointerOver.bind(this);
      this.mapPointerUp = this.mapPointerUp.bind(this);
      this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this);
      this.mapWheel = this.mapWheel.bind(this);
      this.mappingTable = {};
      this.addEventMapping("pointerdown", this.mapPointerDown);
      this.addEventMapping("pointermove", this.mapPointerMove);
      this.addEventMapping("pointerout", this.mapPointerOut);
      this.addEventMapping("pointerleave", this.mapPointerOut);
      this.addEventMapping("pointerover", this.mapPointerOver);
      this.addEventMapping("pointerup", this.mapPointerUp);
      this.addEventMapping("pointerupoutside", this.mapPointerUpOutside);
      this.addEventMapping("wheel", this.mapWheel);
    }
    addEventMapping(type, fn) {
      if (!this.mappingTable[type]) {
        this.mappingTable[type] = [];
      }
      this.mappingTable[type].push({
        fn,
        priority: 0
      });
      this.mappingTable[type].sort((a, b) => a.priority - b.priority);
    }
    dispatchEvent(e, type) {
      e.propagationStopped = false;
      e.propagationImmediatelyStopped = false;
      this.propagate(e, type);
      this.dispatch.emit(type || e.type, e);
    }
    mapEvent(e) {
      if (!this.rootTarget) {
        return;
      }
      const mappers = this.mappingTable[e.type];
      if (mappers) {
        for (let i = 0, j = mappers.length; i < j; i++) {
          mappers[i].fn(e);
        }
      } else {
        console.warn(`[EventBoundary]: Event mapping not defined for ${e.type}`);
      }
    }
    hitTest(x, y) {
      const invertedPath = this.hitTestRecursive(this.rootTarget, this.rootTarget.interactive, tempHitLocation.set(x, y), this.hitTestFn, this.hitPruneFn);
      return invertedPath && invertedPath[0];
    }
    propagate(e, type) {
      if (!e.target) {
        return;
      }
      const composedPath = e.composedPath();
      e.eventPhase = e.CAPTURING_PHASE;
      for (let i = 0, j = composedPath.length - 1; i < j; i++) {
        e.currentTarget = composedPath[i];
        this.notifyTarget(e, type);
        if (e.propagationStopped || e.propagationImmediatelyStopped)
          return;
      }
      e.eventPhase = e.AT_TARGET;
      e.currentTarget = e.target;
      this.notifyTarget(e, type);
      if (e.propagationStopped || e.propagationImmediatelyStopped)
        return;
      e.eventPhase = e.BUBBLING_PHASE;
      for (let i = composedPath.length - 2; i >= 0; i--) {
        e.currentTarget = composedPath[i];
        this.notifyTarget(e, type);
        if (e.propagationStopped || e.propagationImmediatelyStopped)
          return;
      }
    }
    all(e, type, target = this.rootTarget) {
      e.eventPhase = e.BUBBLING_PHASE;
      const children = target.children;
      if (children) {
        for (let i = 0; i < children.length; i++) {
          this.all(e, type, children[i]);
        }
      }
      e.currentTarget = target;
      this.notifyTarget(e, type);
    }
    propagationPath(target) {
      const propagationPath = [target];
      for (let i = 0; i < PROPAGATION_LIMIT && target !== this.rootTarget; i++) {
        if (!target.parent) {
          throw new Error("Cannot find propagation path to disconnected target");
        }
        propagationPath.push(target.parent);
        target = target.parent;
      }
      propagationPath.reverse();
      return propagationPath;
    }
    hitTestRecursive(currentTarget, interactive, location, testFn, pruneFn) {
      if (!currentTarget || !currentTarget.visible) {
        return null;
      }
      if (pruneFn(currentTarget, location)) {
        return null;
      }
      if (currentTarget.interactiveChildren && currentTarget.children) {
        const children = currentTarget.children;
        for (let i = children.length - 1; i >= 0; i--) {
          const child = children[i];
          const nestedHit = this.hitTestRecursive(child, interactive || child.interactive, location, testFn, pruneFn);
          if (nestedHit) {
            if (nestedHit.length > 0 && !nestedHit[nestedHit.length - 1].parent) {
              continue;
            }
            if (nestedHit.length > 0 || currentTarget.interactive) {
              nestedHit.push(currentTarget);
            }
            return nestedHit;
          }
        }
      }
      if (interactive && testFn(currentTarget, location)) {
        return currentTarget.interactive ? [currentTarget] : [];
      }
      return null;
    }
    hitPruneFn(displayObject, location) {
      if (displayObject.hitArea) {
        displayObject.worldTransform.applyInverse(location, tempLocalMapping);
        if (!displayObject.hitArea.contains(tempLocalMapping.x, tempLocalMapping.y)) {
          return true;
        }
      }
      if (displayObject._mask) {
        const maskObject = displayObject._mask.isMaskData ? displayObject._mask.maskObject : displayObject._mask;
        if (maskObject && !maskObject.containsPoint?.(location)) {
          return true;
        }
      }
      return false;
    }
    hitTestFn(displayObject, location) {
      if (displayObject.hitArea) {
        return true;
      }
      if (displayObject.containsPoint) {
        return displayObject.containsPoint(location);
      }
      return false;
    }
    notifyTarget(e, type) {
      type = type ?? e.type;
      const key = e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET ? `${type}capture` : type;
      this.notifyListeners(e, key);
      if (e.eventPhase === e.AT_TARGET) {
        this.notifyListeners(e, type);
      }
    }
    mapPointerDown(from) {
      if (!(from instanceof FederatedPointerEvent)) {
        console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
      }
      const e = this.createPointerEvent(from);
      this.dispatchEvent(e, "pointerdown");
      if (e.pointerType === "touch") {
        this.dispatchEvent(e, "touchstart");
      } else if (e.pointerType === "mouse" || e.pointerType === "pen") {
        const isRightButton = e.button === 2;
        this.dispatchEvent(e, isRightButton ? "rightdown" : "mousedown");
      }
      const trackingData = this.trackingData(from.pointerId);
      trackingData.pressTargetsByButton[from.button] = e.composedPath();
      this.freeEvent(e);
    }
    mapPointerMove(from) {
      if (!(from instanceof FederatedPointerEvent)) {
        console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
      }
      const e = this.createPointerEvent(from);
      const isMouse = e.pointerType === "mouse" || e.pointerType === "pen";
      const trackingData = this.trackingData(from.pointerId);
      const outTarget = this.findMountedTarget(trackingData.overTargets);
      if (trackingData.overTargets && outTarget !== e.target) {
        const outType = from.type === "mousemove" ? "mouseout" : "pointerout";
        const outEvent = this.createPointerEvent(from, outType, outTarget);
        this.dispatchEvent(outEvent, "pointerout");
        if (isMouse)
          this.dispatchEvent(outEvent, "mouseout");
        if (!e.composedPath().includes(outTarget)) {
          const leaveEvent = this.createPointerEvent(from, "pointerleave", outTarget);
          leaveEvent.eventPhase = leaveEvent.AT_TARGET;
          while (leaveEvent.target && !e.composedPath().includes(leaveEvent.target)) {
            leaveEvent.currentTarget = leaveEvent.target;
            this.notifyTarget(leaveEvent);
            if (isMouse)
              this.notifyTarget(leaveEvent, "mouseleave");
            leaveEvent.target = leaveEvent.target.parent;
          }
          this.freeEvent(leaveEvent);
        }
        this.freeEvent(outEvent);
      }
      if (outTarget !== e.target) {
        const overType = from.type === "mousemove" ? "mouseover" : "pointerover";
        const overEvent = this.clonePointerEvent(e, overType);
        this.dispatchEvent(overEvent, "pointerover");
        if (isMouse)
          this.dispatchEvent(overEvent, "mouseover");
        let overTargetAncestor = outTarget?.parent;
        while (overTargetAncestor && overTargetAncestor !== this.rootTarget.parent) {
          if (overTargetAncestor === e.target)
            break;
          overTargetAncestor = overTargetAncestor.parent;
        }
        const didPointerEnter = !overTargetAncestor || overTargetAncestor === this.rootTarget.parent;
        if (didPointerEnter) {
          const enterEvent = this.clonePointerEvent(e, "pointerenter");
          enterEvent.eventPhase = enterEvent.AT_TARGET;
          while (enterEvent.target && enterEvent.target !== outTarget && enterEvent.target !== this.rootTarget.parent) {
            enterEvent.currentTarget = enterEvent.target;
            this.notifyTarget(enterEvent);
            if (isMouse)
              this.notifyTarget(enterEvent, "mouseenter");
            enterEvent.target = enterEvent.target.parent;
          }
          this.freeEvent(enterEvent);
        }
        this.freeEvent(overEvent);
      }
      const propagationMethod = this.moveOnAll ? "all" : "dispatchEvent";
      this[propagationMethod](e, "pointermove");
      if (e.pointerType === "touch")
        this[propagationMethod](e, "touchmove");
      if (isMouse) {
        this[propagationMethod](e, "mousemove");
        this.cursor = e.target?.cursor;
      }
      trackingData.overTargets = e.composedPath();
      this.freeEvent(e);
    }
    mapPointerOver(from) {
      if (!(from instanceof FederatedPointerEvent)) {
        console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
      }
      const trackingData = this.trackingData(from.pointerId);
      const e = this.createPointerEvent(from);
      const isMouse = e.pointerType === "mouse" || e.pointerType === "pen";
      this.dispatchEvent(e, "pointerover");
      if (isMouse)
        this.dispatchEvent(e, "mouseover");
      if (e.pointerType === "mouse")
        this.cursor = e.target?.cursor;
      const enterEvent = this.clonePointerEvent(e, "pointerenter");
      enterEvent.eventPhase = enterEvent.AT_TARGET;
      while (enterEvent.target && enterEvent.target !== this.rootTarget.parent) {
        enterEvent.currentTarget = enterEvent.target;
        this.notifyTarget(enterEvent);
        if (isMouse)
          this.notifyTarget(enterEvent, "mouseenter");
        enterEvent.target = enterEvent.target.parent;
      }
      trackingData.overTargets = e.composedPath();
      this.freeEvent(e);
      this.freeEvent(enterEvent);
    }
    mapPointerOut(from) {
      if (!(from instanceof FederatedPointerEvent)) {
        console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
      }
      const trackingData = this.trackingData(from.pointerId);
      if (trackingData.overTargets) {
        const isMouse = from.pointerType === "mouse" || from.pointerType === "pen";
        const outTarget = this.findMountedTarget(trackingData.overTargets);
        const outEvent = this.createPointerEvent(from, "pointerout", outTarget);
        this.dispatchEvent(outEvent);
        if (isMouse)
          this.dispatchEvent(outEvent, "mouseout");
        const leaveEvent = this.createPointerEvent(from, "pointerleave", outTarget);
        leaveEvent.eventPhase = leaveEvent.AT_TARGET;
        while (leaveEvent.target && leaveEvent.target !== this.rootTarget.parent) {
          leaveEvent.currentTarget = leaveEvent.target;
          this.notifyTarget(leaveEvent);
          if (isMouse)
            this.notifyTarget(leaveEvent, "mouseleave");
          leaveEvent.target = leaveEvent.target.parent;
        }
        trackingData.overTargets = null;
        this.freeEvent(outEvent);
        this.freeEvent(leaveEvent);
      }
      this.cursor = null;
    }
    mapPointerUp(from) {
      if (!(from instanceof FederatedPointerEvent)) {
        console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
      }
      const now = performance.now();
      const e = this.createPointerEvent(from);
      this.dispatchEvent(e, "pointerup");
      if (e.pointerType === "touch") {
        this.dispatchEvent(e, "touchend");
      } else if (e.pointerType === "mouse" || e.pointerType === "pen") {
        const isRightButton = e.button === 2;
        this.dispatchEvent(e, isRightButton ? "rightup" : "mouseup");
      }
      const trackingData = this.trackingData(from.pointerId);
      const pressTarget = this.findMountedTarget(trackingData.pressTargetsByButton[from.button]);
      let clickTarget = pressTarget;
      if (pressTarget && !e.composedPath().includes(pressTarget)) {
        let currentTarget = pressTarget;
        while (currentTarget && !e.composedPath().includes(currentTarget)) {
          e.currentTarget = currentTarget;
          this.notifyTarget(e, "pointerupoutside");
          if (e.pointerType === "touch") {
            this.notifyTarget(e, "touchendoutside");
          } else if (e.pointerType === "mouse" || e.pointerType === "pen") {
            const isRightButton = e.button === 2;
            this.notifyTarget(e, isRightButton ? "rightupoutside" : "mouseupoutside");
          }
          currentTarget = currentTarget.parent;
        }
        delete trackingData.pressTargetsByButton[from.button];
        clickTarget = currentTarget;
      }
      if (clickTarget) {
        const clickEvent = this.clonePointerEvent(e, "click");
        clickEvent.target = clickTarget;
        clickEvent.path = null;
        if (!trackingData.clicksByButton[from.button]) {
          trackingData.clicksByButton[from.button] = {
            clickCount: 0,
            target: clickEvent.target,
            timeStamp: now
          };
        }
        const clickHistory = trackingData.clicksByButton[from.button];
        if (clickHistory.target === clickEvent.target && now - clickHistory.timeStamp < 200) {
          ++clickHistory.clickCount;
        } else {
          clickHistory.clickCount = 1;
        }
        clickHistory.target = clickEvent.target;
        clickHistory.timeStamp = now;
        clickEvent.detail = clickHistory.clickCount;
        if (clickEvent.pointerType === "mouse") {
          this.dispatchEvent(clickEvent, "click");
        } else if (clickEvent.pointerType === "touch") {
          this.dispatchEvent(clickEvent, "tap");
        }
        this.dispatchEvent(clickEvent, "pointertap");
        this.freeEvent(clickEvent);
      }
      this.freeEvent(e);
    }
    mapPointerUpOutside(from) {
      if (!(from instanceof FederatedPointerEvent)) {
        console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
        return;
      }
      const trackingData = this.trackingData(from.pointerId);
      const pressTarget = this.findMountedTarget(trackingData.pressTargetsByButton[from.button]);
      const e = this.createPointerEvent(from);
      if (pressTarget) {
        let currentTarget = pressTarget;
        while (currentTarget) {
          e.currentTarget = currentTarget;
          this.notifyTarget(e, "pointerupoutside");
          if (e.pointerType === "touch") {
            this.notifyTarget(e, "touchendoutside");
          } else if (e.pointerType === "mouse" || e.pointerType === "pen") {
            this.notifyTarget(e, e.button === 2 ? "rightupoutside" : "mouseupoutside");
          }
          currentTarget = currentTarget.parent;
        }
        delete trackingData.pressTargetsByButton[from.button];
      }
      this.freeEvent(e);
    }
    mapWheel(from) {
      if (!(from instanceof FederatedWheelEvent)) {
        console.warn("EventBoundary cannot map a non-wheel event as a wheel event");
        return;
      }
      const wheelEvent = this.createWheelEvent(from);
      this.dispatchEvent(wheelEvent);
      this.freeEvent(wheelEvent);
    }
    findMountedTarget(propagationPath) {
      if (!propagationPath) {
        return null;
      }
      let currentTarget = propagationPath[0];
      for (let i = 1; i < propagationPath.length; i++) {
        if (propagationPath[i].parent === currentTarget) {
          currentTarget = propagationPath[i];
        } else {
          break;
        }
      }
      return currentTarget;
    }
    createPointerEvent(from, type, target) {
      const event = this.allocateEvent(FederatedPointerEvent);
      this.copyPointerData(from, event);
      this.copyMouseData(from, event);
      this.copyData(from, event);
      event.nativeEvent = from.nativeEvent;
      event.originalEvent = from;
      event.target = target ?? this.hitTest(event.global.x, event.global.y);
      if (typeof type === "string") {
        event.type = type;
      }
      return event;
    }
    createWheelEvent(from) {
      const event = this.allocateEvent(FederatedWheelEvent);
      this.copyWheelData(from, event);
      this.copyMouseData(from, event);
      this.copyData(from, event);
      event.nativeEvent = from.nativeEvent;
      event.originalEvent = from;
      event.target = this.hitTest(event.global.x, event.global.y);
      return event;
    }
    clonePointerEvent(from, type) {
      const event = this.allocateEvent(FederatedPointerEvent);
      event.nativeEvent = from.nativeEvent;
      event.originalEvent = from.originalEvent;
      this.copyPointerData(from, event);
      this.copyMouseData(from, event);
      this.copyData(from, event);
      event.target = from.target;
      event.path = from.composedPath().slice();
      event.type = type ?? event.type;
      return event;
    }
    copyWheelData(from, to) {
      to.deltaMode = from.deltaMode;
      to.deltaX = from.deltaX;
      to.deltaY = from.deltaY;
      to.deltaZ = from.deltaZ;
    }
    copyPointerData(from, to) {
      if (!(from instanceof FederatedPointerEvent && to instanceof FederatedPointerEvent))
        return;
      to.pointerId = from.pointerId;
      to.width = from.width;
      to.height = from.height;
      to.isPrimary = from.isPrimary;
      to.pointerType = from.pointerType;
      to.pressure = from.pressure;
      to.tangentialPressure = from.tangentialPressure;
      to.tiltX = from.tiltX;
      to.tiltY = from.tiltY;
      to.twist = from.twist;
    }
    copyMouseData(from, to) {
      if (!(from instanceof FederatedMouseEvent && to instanceof FederatedMouseEvent))
        return;
      to.altKey = from.altKey;
      to.button = from.button;
      to.buttons = from.buttons;
      to.client.copyFrom(from.client);
      to.ctrlKey = from.ctrlKey;
      to.metaKey = from.metaKey;
      to.movement.copyFrom(from.movement);
      to.screen.copyFrom(from.screen);
      to.global.copyFrom(from.global);
    }
    copyData(from, to) {
      to.isTrusted = from.isTrusted;
      to.srcElement = from.srcElement;
      to.timeStamp = performance.now();
      to.type = from.type;
      to.detail = from.detail;
      to.view = from.view;
      to.which = from.which;
      to.layer.copyFrom(from.layer);
      to.page.copyFrom(from.page);
    }
    trackingData(id) {
      if (!this.mappingState.trackingData[id]) {
        this.mappingState.trackingData[id] = {
          pressTargetsByButton: {},
          clicksByButton: {},
          overTarget: null
        };
      }
      return this.mappingState.trackingData[id];
    }
    allocateEvent(constructor) {
      if (!this.eventPool.has(constructor)) {
        this.eventPool.set(constructor, []);
      }
      const event = this.eventPool.get(constructor).pop() || new constructor(this);
      event.eventPhase = event.NONE;
      event.currentTarget = null;
      event.path = null;
      event.target = null;
      return event;
    }
    freeEvent(event) {
      if (event.manager !== this)
        throw new Error("It is illegal to free an event not managed by this EventBoundary!");
      const constructor = event.constructor;
      if (!this.eventPool.has(constructor)) {
        this.eventPool.set(constructor, []);
      }
      this.eventPool.get(constructor).push(event);
    }
    notifyListeners(e, type) {
      const listeners = e.currentTarget._events[type];
      if (!listeners)
        return;
      if ("fn" in listeners) {
        listeners.fn.call(listeners.context, e);
      } else {
        for (let i = 0, j = listeners.length; i < j && !e.propagationImmediatelyStopped; i++) {
          listeners[i].fn.call(listeners[i].context, e);
        }
      }
    }
  }

  const MOUSE_POINTER_ID = 1;
  const TOUCH_TO_POINTER = {
    touchstart: "pointerdown",
    touchend: "pointerup",
    touchendoutside: "pointerupoutside",
    touchmove: "pointermove",
    touchcancel: "pointercancel"
  };
  class EventSystem {
    constructor(renderer) {
      this.supportsTouchEvents = "ontouchstart" in globalThis;
      this.supportsPointerEvents = !!globalThis.PointerEvent;
      this.domElement = null;
      this.resolution = 1;
      this.renderer = renderer;
      this.rootBoundary = new EventBoundary(null);
      this.autoPreventDefault = true;
      this.eventsAdded = false;
      this.rootPointerEvent = new FederatedPointerEvent(null);
      this.rootWheelEvent = new FederatedWheelEvent(null);
      this.cursorStyles = {
        default: "inherit",
        pointer: "pointer"
      };
      this.onPointerDown = this.onPointerDown.bind(this);
      this.onPointerMove = this.onPointerMove.bind(this);
      this.onPointerUp = this.onPointerUp.bind(this);
      this.onPointerOverOut = this.onPointerOverOut.bind(this);
      this.onWheel = this.onWheel.bind(this);
    }
    init() {
      const { view, resolution } = this.renderer;
      this.setTargetElement(view);
      this.resolution = resolution;
    }
    destroy() {
      this.setTargetElement(null);
      this.renderer = null;
    }
    setCursor(mode) {
      mode = mode || "default";
      let applyStyles = true;
      if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas) {
        applyStyles = false;
      }
      if (this.currentCursor === mode) {
        return;
      }
      this.currentCursor = mode;
      const style = this.cursorStyles[mode];
      if (style) {
        switch (typeof style) {
          case "string":
            if (applyStyles) {
              this.domElement.style.cursor = style;
            }
            break;
          case "function":
            style(mode);
            break;
          case "object":
            if (applyStyles) {
              Object.assign(this.domElement.style, style);
            }
            break;
        }
      } else if (applyStyles && typeof mode === "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, mode)) {
        this.domElement.style.cursor = mode;
      }
    }
    onPointerDown(nativeEvent) {
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      if (this.supportsTouchEvents && nativeEvent.pointerType === "touch")
        return;
      const events = this.normalizeToPointerData(nativeEvent);
      if (this.autoPreventDefault && events[0].isNormalized) {
        const cancelable = nativeEvent.cancelable || !("cancelable" in nativeEvent);
        if (cancelable) {
          nativeEvent.preventDefault();
        }
      }
      for (let i = 0, j = events.length; i < j; i++) {
        const nativeEvent2 = events[i];
        const federatedEvent = this.bootstrapEvent(this.rootPointerEvent, nativeEvent2);
        this.rootBoundary.mapEvent(federatedEvent);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerMove(nativeEvent) {
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      if (this.supportsTouchEvents && nativeEvent.pointerType === "touch")
        return;
      const normalizedEvents = this.normalizeToPointerData(nativeEvent);
      for (let i = 0, j = normalizedEvents.length; i < j; i++) {
        const event = this.bootstrapEvent(this.rootPointerEvent, normalizedEvents[i]);
        this.rootBoundary.mapEvent(event);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerUp(nativeEvent) {
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      if (this.supportsTouchEvents && nativeEvent.pointerType === "touch")
        return;
      let target = nativeEvent.target;
      if (nativeEvent.composedPath && nativeEvent.composedPath().length > 0) {
        target = nativeEvent.composedPath()[0];
      }
      const outside = target !== this.domElement ? "outside" : "";
      const normalizedEvents = this.normalizeToPointerData(nativeEvent);
      for (let i = 0, j = normalizedEvents.length; i < j; i++) {
        const event = this.bootstrapEvent(this.rootPointerEvent, normalizedEvents[i]);
        event.type += outside;
        this.rootBoundary.mapEvent(event);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerOverOut(nativeEvent) {
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      if (this.supportsTouchEvents && nativeEvent.pointerType === "touch")
        return;
      const normalizedEvents = this.normalizeToPointerData(nativeEvent);
      for (let i = 0, j = normalizedEvents.length; i < j; i++) {
        const event = this.bootstrapEvent(this.rootPointerEvent, normalizedEvents[i]);
        this.rootBoundary.mapEvent(event);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onWheel(nativeEvent) {
      const wheelEvent = this.normalizeWheelEvent(nativeEvent);
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      this.rootBoundary.mapEvent(wheelEvent);
    }
    setTargetElement(element) {
      this.removeEvents();
      this.domElement = element;
      this.addEvents();
    }
    addEvents() {
      if (this.eventsAdded || !this.domElement) {
        return;
      }
      const style = this.domElement.style;
      if (style) {
        if (globalThis.navigator.msPointerEnabled) {
          style.msContentZooming = "none";
          style.msTouchAction = "none";
        } else if (this.supportsPointerEvents) {
          style.touchAction = "none";
        }
      }
      if (this.supportsPointerEvents) {
        globalThis.document.addEventListener("pointermove", this.onPointerMove, true);
        this.domElement.addEventListener("pointerdown", this.onPointerDown, true);
        this.domElement.addEventListener("pointerleave", this.onPointerOverOut, true);
        this.domElement.addEventListener("pointerover", this.onPointerOverOut, true);
        globalThis.addEventListener("pointerup", this.onPointerUp, true);
      } else {
        globalThis.document.addEventListener("mousemove", this.onPointerMove, true);
        this.domElement.addEventListener("mousedown", this.onPointerDown, true);
        this.domElement.addEventListener("mouseout", this.onPointerOverOut, true);
        this.domElement.addEventListener("mouseover", this.onPointerOverOut, true);
        globalThis.addEventListener("mouseup", this.onPointerUp, true);
      }
      if (this.supportsTouchEvents) {
        this.domElement.addEventListener("touchstart", this.onPointerDown, true);
        this.domElement.addEventListener("touchend", this.onPointerUp, true);
        this.domElement.addEventListener("touchmove", this.onPointerMove, true);
      }
      this.domElement.addEventListener("wheel", this.onWheel, {
        passive: true,
        capture: true
      });
      this.eventsAdded = true;
    }
    removeEvents() {
      if (!this.eventsAdded || !this.domElement) {
        return;
      }
      const style = this.domElement.style;
      if (globalThis.navigator.msPointerEnabled) {
        style.msContentZooming = "";
        style.msTouchAction = "";
      } else if (this.supportsPointerEvents) {
        style.touchAction = "";
      }
      if (this.supportsPointerEvents) {
        globalThis.document.removeEventListener("pointermove", this.onPointerMove, true);
        this.domElement.removeEventListener("pointerdown", this.onPointerDown, true);
        this.domElement.removeEventListener("pointerleave", this.onPointerOverOut, true);
        this.domElement.removeEventListener("pointerover", this.onPointerOverOut, true);
        globalThis.removeEventListener("pointerup", this.onPointerUp, true);
      } else {
        globalThis.document.removeEventListener("mousemove", this.onPointerMove, true);
        this.domElement.removeEventListener("mousedown", this.onPointerDown, true);
        this.domElement.removeEventListener("mouseout", this.onPointerOverOut, true);
        this.domElement.removeEventListener("mouseover", this.onPointerOverOut, true);
        globalThis.removeEventListener("mouseup", this.onPointerUp, true);
      }
      if (this.supportsTouchEvents) {
        this.domElement.removeEventListener("touchstart", this.onPointerDown, true);
        this.domElement.removeEventListener("touchend", this.onPointerUp, true);
        this.domElement.removeEventListener("touchmove", this.onPointerMove, true);
      }
      this.domElement.removeEventListener("wheel", this.onWheel, true);
      this.domElement = null;
      this.eventsAdded = false;
    }
    mapPositionToPoint(point, x, y) {
      let rect;
      if (!this.domElement.parentElement) {
        rect = {
          x: 0,
          y: 0,
          width: this.domElement.width,
          height: this.domElement.height,
          left: 0,
          top: 0
        };
      } else {
        rect = this.domElement.getBoundingClientRect();
      }
      const resolutionMultiplier = 1 / this.resolution;
      point.x = (x - rect.left) * (this.domElement.width / rect.width) * resolutionMultiplier;
      point.y = (y - rect.top) * (this.domElement.height / rect.height) * resolutionMultiplier;
    }
    normalizeToPointerData(event) {
      const normalizedEvents = [];
      if (this.supportsTouchEvents && event instanceof TouchEvent) {
        for (let i = 0, li = event.changedTouches.length; i < li; i++) {
          const touch = event.changedTouches[i];
          if (typeof touch.button === "undefined")
            touch.button = 0;
          if (typeof touch.buttons === "undefined")
            touch.buttons = 1;
          if (typeof touch.isPrimary === "undefined") {
            touch.isPrimary = event.touches.length === 1 && event.type === "touchstart";
          }
          if (typeof touch.width === "undefined")
            touch.width = touch.radiusX || 1;
          if (typeof touch.height === "undefined")
            touch.height = touch.radiusY || 1;
          if (typeof touch.tiltX === "undefined")
            touch.tiltX = 0;
          if (typeof touch.tiltY === "undefined")
            touch.tiltY = 0;
          if (typeof touch.pointerType === "undefined")
            touch.pointerType = "touch";
          if (typeof touch.pointerId === "undefined")
            touch.pointerId = touch.identifier || 0;
          if (typeof touch.pressure === "undefined")
            touch.pressure = touch.force || 0.5;
          if (typeof touch.twist === "undefined")
            touch.twist = 0;
          if (typeof touch.tangentialPressure === "undefined")
            touch.tangentialPressure = 0;
          if (typeof touch.layerX === "undefined")
            touch.layerX = touch.offsetX = touch.clientX;
          if (typeof touch.layerY === "undefined")
            touch.layerY = touch.offsetY = touch.clientY;
          touch.isNormalized = true;
          touch.type = event.type;
          normalizedEvents.push(touch);
        }
      } else if (!globalThis.MouseEvent || event instanceof MouseEvent && (!this.supportsPointerEvents || !(event instanceof globalThis.PointerEvent))) {
        const tempEvent = event;
        if (typeof tempEvent.isPrimary === "undefined")
          tempEvent.isPrimary = true;
        if (typeof tempEvent.width === "undefined")
          tempEvent.width = 1;
        if (typeof tempEvent.height === "undefined")
          tempEvent.height = 1;
        if (typeof tempEvent.tiltX === "undefined")
          tempEvent.tiltX = 0;
        if (typeof tempEvent.tiltY === "undefined")
          tempEvent.tiltY = 0;
        if (typeof tempEvent.pointerType === "undefined")
          tempEvent.pointerType = "mouse";
        if (typeof tempEvent.pointerId === "undefined")
          tempEvent.pointerId = MOUSE_POINTER_ID;
        if (typeof tempEvent.pressure === "undefined")
          tempEvent.pressure = 0.5;
        if (typeof tempEvent.twist === "undefined")
          tempEvent.twist = 0;
        if (typeof tempEvent.tangentialPressure === "undefined")
          tempEvent.tangentialPressure = 0;
        tempEvent.isNormalized = true;
        normalizedEvents.push(tempEvent);
      } else {
        normalizedEvents.push(event);
      }
      return normalizedEvents;
    }
    normalizeWheelEvent(nativeEvent) {
      const event = this.rootWheelEvent;
      this.transferMouseData(event, nativeEvent);
      event.deltaMode = nativeEvent.deltaMode;
      event.deltaX = nativeEvent.deltaX;
      event.deltaY = nativeEvent.deltaY;
      event.deltaZ = nativeEvent.deltaZ;
      this.mapPositionToPoint(event.screen, nativeEvent.clientX, nativeEvent.clientY);
      event.global.copyFrom(event.screen);
      event.offset.copyFrom(event.screen);
      event.nativeEvent = nativeEvent;
      event.type = nativeEvent.type;
      return event;
    }
    bootstrapEvent(event, nativeEvent) {
      event.originalEvent = null;
      event.nativeEvent = nativeEvent;
      event.pointerId = nativeEvent.pointerId;
      event.width = nativeEvent.width;
      event.height = nativeEvent.height;
      event.isPrimary = nativeEvent.isPrimary;
      event.pointerType = nativeEvent.pointerType;
      event.pressure = nativeEvent.pressure;
      event.tangentialPressure = nativeEvent.tangentialPressure;
      event.tiltX = nativeEvent.tiltX;
      event.tiltY = nativeEvent.tiltY;
      event.twist = nativeEvent.twist;
      this.transferMouseData(event, nativeEvent);
      this.mapPositionToPoint(event.screen, nativeEvent.clientX, nativeEvent.clientY);
      event.global.copyFrom(event.screen);
      event.offset.copyFrom(event.screen);
      event.isTrusted = nativeEvent.isTrusted;
      if (event.type === "pointerleave") {
        event.type = "pointerout";
      }
      if (event.type.startsWith("mouse")) {
        event.type = event.type.replace("mouse", "pointer");
      }
      if (event.type.startsWith("touch")) {
        event.type = TOUCH_TO_POINTER[event.type] || event.type;
      }
      return event;
    }
    transferMouseData(event, nativeEvent) {
      event.isTrusted = nativeEvent.isTrusted;
      event.srcElement = nativeEvent.srcElement;
      event.timeStamp = performance.now();
      event.type = nativeEvent.type;
      event.altKey = nativeEvent.altKey;
      event.button = nativeEvent.button;
      event.buttons = nativeEvent.buttons;
      event.client.x = nativeEvent.clientX;
      event.client.y = nativeEvent.clientY;
      event.ctrlKey = nativeEvent.ctrlKey;
      event.metaKey = nativeEvent.metaKey;
      event.movement.x = nativeEvent.movementX;
      event.movement.y = nativeEvent.movementY;
      event.page.x = nativeEvent.pageX;
      event.page.y = nativeEvent.pageY;
      event.relatedTarget = null;
      event.shiftKey = nativeEvent.shiftKey;
    }
  }
  EventSystem.extension = {
    name: "events",
    type: [
      ExtensionType.RendererSystem,
      ExtensionType.CanvasRendererSystem
    ]
  };
  extensions.add(EventSystem);

  const FederatedDisplayObject = {
    interactive: false,
    interactiveChildren: true,
    hitArea: null,
    addEventListener(type, listener, options) {
      const capture = typeof options === "boolean" && options || typeof options === "object" && options.capture;
      const context = typeof listener === "function" ? void 0 : listener;
      type = capture ? `${type}capture` : type;
      listener = typeof listener === "function" ? listener : listener.handleEvent;
      this.on(type, listener, context);
    },
    removeEventListener(type, listener, options) {
      const capture = typeof options === "boolean" && options || typeof options === "object" && options.capture;
      const context = typeof listener === "function" ? void 0 : listener;
      type = capture ? `${type}capture` : type;
      listener = typeof listener === "function" ? listener : listener.handleEvent;
      this.off(type, listener, context);
    },
    dispatchEvent(e) {
      if (!(e instanceof FederatedEvent)) {
        throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");
      }
      e.defaultPrevented = false;
      e.path = null;
      e.target = this;
      e.manager.dispatchEvent(e);
      return !e.defaultPrevented;
    }
  };
  DisplayObject.mixin(FederatedDisplayObject);

  DisplayObject.prototype.getGlobalPosition = function getGlobalPosition(point = new Point(), skipUpdate = false) {
    if (this.parent) {
      this.parent.toGlobal(this.position, point, skipUpdate);
    } else {
      point.x = this.position.x;
      point.y = this.position.y;
    }
    return point;
  };

  new Point();

  const _Application = class {
    constructor(options) {
      this.stage = new Container();
      options = Object.assign({
        forceCanvas: false
      }, options);
      this.renderer = autoDetectRenderer(options);
      _Application._plugins.forEach((plugin) => {
        plugin.init.call(this, options);
      });
    }
    render() {
      this.renderer.render(this.stage);
    }
    get view() {
      return this.renderer.view;
    }
    get screen() {
      return this.renderer.screen;
    }
    destroy(removeView, stageOptions) {
      const plugins = _Application._plugins.slice(0);
      plugins.reverse();
      plugins.forEach((plugin) => {
        plugin.destroy.call(this);
      });
      this.stage.destroy(stageOptions);
      this.stage = null;
      this.renderer.destroy(removeView);
      this.renderer = null;
    }
  };
  let Application = _Application;
  Application._plugins = [];
  extensions.handleByList(ExtensionType.Application, Application._plugins);

  class ResizePlugin {
    static init(options) {
      Object.defineProperty(this, "resizeTo", {
        set(dom) {
          globalThis.removeEventListener("resize", this.queueResize);
          this._resizeTo = dom;
          if (dom) {
            globalThis.addEventListener("resize", this.queueResize);
            this.resize();
          }
        },
        get() {
          return this._resizeTo;
        }
      });
      this.queueResize = () => {
        if (!this._resizeTo) {
          return;
        }
        this.cancelResize();
        this._resizeId = requestAnimationFrame(() => this.resize());
      };
      this.cancelResize = () => {
        if (this._resizeId) {
          cancelAnimationFrame(this._resizeId);
          this._resizeId = null;
        }
      };
      this.resize = () => {
        if (!this._resizeTo) {
          return;
        }
        this.cancelResize();
        let width;
        let height;
        if (this._resizeTo === globalThis.window) {
          width = globalThis.innerWidth;
          height = globalThis.innerHeight;
        } else {
          const { clientWidth, clientHeight } = this._resizeTo;
          width = clientWidth;
          height = clientHeight;
        }
        this.renderer.resize(width, height);
        this.render();
      };
      this._resizeId = null;
      this._resizeTo = null;
      this.resizeTo = options.resizeTo || null;
    }
    static destroy() {
      globalThis.removeEventListener("resize", this.queueResize);
      this.cancelResize();
      this.cancelResize = null;
      this.queueResize = null;
      this.resizeTo = null;
      this.resize = null;
    }
  }
  ResizePlugin.extension = ExtensionType.Application;
  extensions.add(ResizePlugin);

  // import Collision from "./collision";
  class Scene {
      // collision: Collision;
      constructor(rendererOptions) {
          this.renderer = new Renderer(rendererOptions);
          this.ticker = new Ticker();
          this.ticker.stop();
          // this.collision = new Collision(PIXI);
      }
  }
  var Lumi = {
      Scene: Scene,
  };

  exports.Lumi = Lumi;

}));
//# sourceMappingURL=lumi.js.map
