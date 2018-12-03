// gl-matrix 1.2.4 - https://github.com/toji/gl-matrix/blob/master/LICENSE.md
(function(a) {
    a.glMatrixArrayType = a.MatrixArray = null;
    a.vec3 = {};
    a.mat3 = {};
    a.mat4 = {};
    a.quat4 = {};
    a.setMatrixArrayType = function(a) {
        return glMatrixArrayType = MatrixArray = a
    };
    a.determineMatrixArrayType = function() {
        return setMatrixArrayType("undefined" !== typeof Float32Array ? Float32Array : Array)
    };
    determineMatrixArrayType()
})("undefined" != typeof exports ? global : this);
vec3.create = function(a) {
    var b = new MatrixArray(3);
    a ? (b[0] = a[0], b[1] = a[1], b[2] = a[2]) : b[0] = b[1] = b[2] = 0;
    return b
};
vec3.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    return b
};
vec3.add = function(a, b, c) {
    if (!c || a === c) return a[0] += b[0], a[1] += b[1], a[2] += b[2], a;
    c[0] = a[0] + b[0];
    c[1] = a[1] + b[1];
    c[2] = a[2] + b[2];
    return c
};
vec3.subtract = function(a, b, c) {
    if (!c || a === c) return a[0] -= b[0], a[1] -= b[1], a[2] -= b[2], a;
    c[0] = a[0] - b[0];
    c[1] = a[1] - b[1];
    c[2] = a[2] - b[2];
    return c
};
vec3.multiply = function(a, b, c) {
    if (!c || a === c) return a[0] *= b[0], a[1] *= b[1], a[2] *= b[2], a;
    c[0] = a[0] * b[0];
    c[1] = a[1] * b[1];
    c[2] = a[2] * b[2];
    return c
};
vec3.negate = function(a, b) {
    b || (b = a);
    b[0] = -a[0];
    b[1] = -a[1];
    b[2] = -a[2];
    return b
};
vec3.scale = function(a, b, c) {
    if (!c || a === c) return a[0] *= b, a[1] *= b, a[2] *= b, a;
    c[0] = a[0] * b;
    c[1] = a[1] * b;
    c[2] = a[2] * b;
    return c
};
vec3.normalize = function(a, b) {
    b || (b = a);
    var c = a[0],
        d = a[1],
        e = a[2],
        g = Math.sqrt(c * c + d * d + e * e);
    if (g) {
        if (1 === g) return b[0] = c, b[1] = d, b[2] = e, b
    } else return b[0] = 0, b[1] = 0, b[2] = 0, b;
    g = 1 / g;
    b[0] = c * g;
    b[1] = d * g;
    b[2] = e * g;
    return b
};
vec3.cross = function(a, b, c) {
    c || (c = a);
    var d = a[0],
        e = a[1],
        a = a[2],
        g = b[0],
        f = b[1],
        b = b[2];
    c[0] = e * b - a * f;
    c[1] = a * g - d * b;
    c[2] = d * f - e * g;
    return c
};
vec3.length = function(a) {
    var b = a[0],
        c = a[1],
        a = a[2];
    return Math.sqrt(b * b + c * c + a * a)
};
vec3.dot = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
};
vec3.direction = function(a, b, c) {
    c || (c = a);
    var d = a[0] - b[0],
        e = a[1] - b[1],
        a = a[2] - b[2],
        b = Math.sqrt(d * d + e * e + a * a);
    if (!b) return c[0] = 0, c[1] = 0, c[2] = 0, c;
    b = 1 / b;
    c[0] = d * b;
    c[1] = e * b;
    c[2] = a * b;
    return c
};
vec3.lerp = function(a, b, c, d) {
    d || (d = a);
    d[0] = a[0] + c * (b[0] - a[0]);
    d[1] = a[1] + c * (b[1] - a[1]);
    d[2] = a[2] + c * (b[2] - a[2]);
    return d
};
vec3.dist = function(a, b) {
    var c = b[0] - a[0],
        d = b[1] - a[1],
        e = b[2] - a[2];
    return Math.sqrt(c * c + d * d + e * e)
};
vec3.unproject = function(a, b, c, d, e) {
    e || (e = a);
    var g = mat4.create(),
        f = new MatrixArray(4);
    f[0] = 2 * (a[0] - d[0]) / d[2] - 1;
    f[1] = 2 * (a[1] - d[1]) / d[3] - 1;
    f[2] = 2 * a[2] - 1;
    f[3] = 1;
    mat4.multiply(c, b, g);
    if (!mat4.inverse(g)) return null;
    mat4.multiplyVec4(g, f);
    if (0 === f[3]) return null;
    e[0] = f[0] / f[3];
    e[1] = f[1] / f[3];
    e[2] = f[2] / f[3];
    return e
};
vec3.str = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + "]"
};
mat3.create = function(a) {
    var b = new MatrixArray(9);
    a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8]);
    return b
};
mat3.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    return b
};
mat3.identity = function(a) {
    a || (a = mat3.create());
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 1;
    a[5] = 0;
    a[6] = 0;
    a[7] = 0;
    a[8] = 1;
    return a
};
mat3.transpose = function(a, b) {
    if (!b || a === b) {
        var c = a[1],
            d = a[2],
            e = a[5];
        a[1] = a[3];
        a[2] = a[6];
        a[3] = c;
        a[5] = a[7];
        a[6] = d;
        a[7] = e;
        return a
    }
    b[0] = a[0];
    b[1] = a[3];
    b[2] = a[6];
    b[3] = a[1];
    b[4] = a[4];
    b[5] = a[7];
    b[6] = a[2];
    b[7] = a[5];
    b[8] = a[8];
    return b
};
mat3.toMat4 = function(a, b) {
    b || (b = mat4.create());
    b[15] = 1;
    b[14] = 0;
    b[13] = 0;
    b[12] = 0;
    b[11] = 0;
    b[10] = a[8];
    b[9] = a[7];
    b[8] = a[6];
    b[7] = 0;
    b[6] = a[5];
    b[5] = a[4];
    b[4] = a[3];
    b[3] = 0;
    b[2] = a[2];
    b[1] = a[1];
    b[0] = a[0];
    return b
};
mat3.str = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + "]"
};
mat4.create = function(a) {
    var b = new MatrixArray(16);
    a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15]);
    return b
};
mat4.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = a[12];
    b[13] = a[13];
    b[14] = a[14];
    b[15] = a[15];
    return b
};
mat4.identity = function(a) {
    a || (a = mat4.create());
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 1;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = 0;
    a[10] = 1;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
    return a
};
mat4.transpose = function(a, b) {
    if (!b || a === b) {
        var c = a[1],
            d = a[2],
            e = a[3],
            g = a[6],
            f = a[7],
            h = a[11];
        a[1] = a[4];
        a[2] = a[8];
        a[3] = a[12];
        a[4] = c;
        a[6] = a[9];
        a[7] = a[13];
        a[8] = d;
        a[9] = g;
        a[11] = a[14];
        a[12] = e;
        a[13] = f;
        a[14] = h;
        return a
    }
    b[0] = a[0];
    b[1] = a[4];
    b[2] = a[8];
    b[3] = a[12];
    b[4] = a[1];
    b[5] = a[5];
    b[6] = a[9];
    b[7] = a[13];
    b[8] = a[2];
    b[9] = a[6];
    b[10] = a[10];
    b[11] = a[14];
    b[12] = a[3];
    b[13] = a[7];
    b[14] = a[11];
    b[15] = a[15];
    return b
};
mat4.determinant = function(a) {
    var b = a[0],
        c = a[1],
        d = a[2],
        e = a[3],
        g = a[4],
        f = a[5],
        h = a[6],
        i = a[7],
        j = a[8],
        k = a[9],
        l = a[10],
        n = a[11],
        o = a[12],
        m = a[13],
        p = a[14],
        a = a[15];
    return o * k * h * e - j * m * h * e - o * f * l * e + g * m * l * e + j * f * p * e - g * k * p * e - o * k * d * i + j * m * d * i + o * c * l * i - b * m * l * i - j * c * p * i + b * k * p * i + o * f * d * n - g * m * d * n - o * c * h * n + b * m * h * n + g * c * p * n - b * f * p * n - j * f * d * a + g * k * d * a + j * c * h * a - b * k * h * a - g * c * l * a + b * f * l * a
};
mat4.inverse = function(a, b) {
    b || (b = a);
    var c = a[0],
        d = a[1],
        e = a[2],
        g = a[3],
        f = a[4],
        h = a[5],
        i = a[6],
        j = a[7],
        k = a[8],
        l = a[9],
        n = a[10],
        o = a[11],
        m = a[12],
        p = a[13],
        r = a[14],
        s = a[15],
        A = c * h - d * f,
        B = c * i - e * f,
        t = c * j - g * f,
        u = d * i - e * h,
        v = d * j - g * h,
        w = e * j - g * i,
        x = k * p - l * m,
        y = k * r - n * m,
        z = k * s - o * m,
        C = l * r - n * p,
        D = l * s - o * p,
        E = n * s - o * r,
        q = A * E - B * D + t * C + u * z - v * y + w * x;
    if (!q) return null;
    q = 1 / q;
    b[0] = (h * E - i * D + j * C) * q;
    b[1] = (-d * E + e * D - g * C) * q;
    b[2] = (p * w - r * v + s * u) * q;
    b[3] = (-l * w + n * v - o * u) * q;
    b[4] = (-f * E + i * z - j * y) * q;
    b[5] = (c * E - e * z + g * y) * q;
    b[6] = (-m * w + r * t - s * B) * q;
    b[7] = (k * w - n * t + o * B) * q;
    b[8] =
        (f * D - h * z + j * x) * q;
    b[9] = (-c * D + d * z - g * x) * q;
    b[10] = (m * v - p * t + s * A) * q;
    b[11] = (-k * v + l * t - o * A) * q;
    b[12] = (-f * C + h * y - i * x) * q;
    b[13] = (c * C - d * y + e * x) * q;
    b[14] = (-m * u + p * B - r * A) * q;
    b[15] = (k * u - l * B + n * A) * q;
    return b
};
mat4.toRotationMat = function(a, b) {
    b || (b = mat4.create());
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return b
};
mat4.toMat3 = function(a, b) {
    b || (b = mat3.create());
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[4];
    b[4] = a[5];
    b[5] = a[6];
    b[6] = a[8];
    b[7] = a[9];
    b[8] = a[10];
    return b
};
mat4.toInverseMat3 = function(a, b) {
    var c = a[0],
        d = a[1],
        e = a[2],
        g = a[4],
        f = a[5],
        h = a[6],
        i = a[8],
        j = a[9],
        k = a[10],
        l = k * f - h * j,
        n = -k * g + h * i,
        o = j * g - f * i,
        m = c * l + d * n + e * o;
    if (!m) return null;
    m = 1 / m;
    b || (b = mat3.create());
    b[0] = l * m;
    b[1] = (-k * d + e * j) * m;
    b[2] = (h * d - e * f) * m;
    b[3] = n * m;
    b[4] = (k * c - e * i) * m;
    b[5] = (-h * c + e * g) * m;
    b[6] = o * m;
    b[7] = (-j * c + d * i) * m;
    b[8] = (f * c - d * g) * m;
    return b
};
mat4.multiply = function(a, b, c) {
    c || (c = a);
    var d = a[0],
        e = a[1],
        g = a[2],
        f = a[3],
        h = a[4],
        i = a[5],
        j = a[6],
        k = a[7],
        l = a[8],
        n = a[9],
        o = a[10],
        m = a[11],
        p = a[12],
        r = a[13],
        s = a[14],
        a = a[15],
        A = b[0],
        B = b[1],
        t = b[2],
        u = b[3],
        v = b[4],
        w = b[5],
        x = b[6],
        y = b[7],
        z = b[8],
        C = b[9],
        D = b[10],
        E = b[11],
        q = b[12],
        F = b[13],
        G = b[14],
        b = b[15];
    c[0] = A * d + B * h + t * l + u * p;
    c[1] = A * e + B * i + t * n + u * r;
    c[2] = A * g + B * j + t * o + u * s;
    c[3] = A * f + B * k + t * m + u * a;
    c[4] = v * d + w * h + x * l + y * p;
    c[5] = v * e + w * i + x * n + y * r;
    c[6] = v * g + w * j + x * o + y * s;
    c[7] = v * f + w * k + x * m + y * a;
    c[8] = z * d + C * h + D * l + E * p;
    c[9] = z * e + C * i + D * n + E * r;
    c[10] = z * g + C *
        j + D * o + E * s;
    c[11] = z * f + C * k + D * m + E * a;
    c[12] = q * d + F * h + G * l + b * p;
    c[13] = q * e + F * i + G * n + b * r;
    c[14] = q * g + F * j + G * o + b * s;
    c[15] = q * f + F * k + G * m + b * a;
    return c
};
mat4.multiplyVec3 = function(a, b, c) {
    c || (c = b);
    var d = b[0],
        e = b[1],
        b = b[2];
    c[0] = a[0] * d + a[4] * e + a[8] * b + a[12];
    c[1] = a[1] * d + a[5] * e + a[9] * b + a[13];
    c[2] = a[2] * d + a[6] * e + a[10] * b + a[14];
    return c
};
mat4.multiplyVec4 = function(a, b, c) {
    c || (c = b);
    var d = b[0],
        e = b[1],
        g = b[2],
        b = b[3];
    c[0] = a[0] * d + a[4] * e + a[8] * g + a[12] * b;
    c[1] = a[1] * d + a[5] * e + a[9] * g + a[13] * b;
    c[2] = a[2] * d + a[6] * e + a[10] * g + a[14] * b;
    c[3] = a[3] * d + a[7] * e + a[11] * g + a[15] * b;
    return c
};
mat4.translate = function(a, b, c) {
    var d = b[0],
        e = b[1],
        b = b[2],
        g, f, h, i, j, k, l, n, o, m, p, r;
    if (!c || a === c) return a[12] = a[0] * d + a[4] * e + a[8] * b + a[12], a[13] = a[1] * d + a[5] * e + a[9] * b + a[13], a[14] = a[2] * d + a[6] * e + a[10] * b + a[14], a[15] = a[3] * d + a[7] * e + a[11] * b + a[15], a;
    g = a[0];
    f = a[1];
    h = a[2];
    i = a[3];
    j = a[4];
    k = a[5];
    l = a[6];
    n = a[7];
    o = a[8];
    m = a[9];
    p = a[10];
    r = a[11];
    c[0] = g;
    c[1] = f;
    c[2] = h;
    c[3] = i;
    c[4] = j;
    c[5] = k;
    c[6] = l;
    c[7] = n;
    c[8] = o;
    c[9] = m;
    c[10] = p;
    c[11] = r;
    c[12] = g * d + j * e + o * b + a[12];
    c[13] = f * d + k * e + m * b + a[13];
    c[14] = h * d + l * e + p * b + a[14];
    c[15] = i * d + n * e + r * b + a[15];
    return c
};
mat4.scale = function(a, b, c) {
    var d = b[0],
        e = b[1],
        b = b[2];
    if (!c || a === c) 
        return a[0] *= d, a[1] *= d, a[2] *= d, a[3] *= d, a[4] *= e, a[5] *= e, a[6] *= e, a[7] *= e, a[8] *= b, a[9] *= b, a[10] *= b, a[11] *= b, a;
    c[0] = a[0] * d;
    c[1] = a[1] * d;
    c[2] = a[2] * d;
    c[3] = a[3] * d;
    c[4] = a[4] * e;
    c[5] = a[5] * e;
    c[6] = a[6] * e;
    c[7] = a[7] * e;
    c[8] = a[8] * b;
    c[9] = a[9] * b;
    c[10] = a[10] * b;
    c[11] = a[11] * b;
    c[12] = a[12];
    c[13] = a[13];
    c[14] = a[14];
    c[15] = a[15];
    return c
};
mat4.rotate = function(a, b, c, d) {
    var e = c[0],
        g = c[1],
        c = c[2],
        f = Math.sqrt(e * e + g * g + c * c),
        h, i, j, k, l, n, o, m, p, r, s, A, B, t, u, v, w, x, y, z;
    if (!f) return null;
    1 !== f && (f = 1 / f, e *= f, g *= f, c *= f);
    h = Math.sin(b);
    i = Math.cos(b);
    j = 1 - i;
    b = a[0];
    f = a[1];
    k = a[2];
    l = a[3];
    n = a[4];
    o = a[5];
    m = a[6];
    p = a[7];
    r = a[8];
    s = a[9];
    A = a[10];
    B = a[11];
    t = e * e * j + i;
    u = g * e * j + c * h;
    v = c * e * j - g * h;
    w = e * g * j - c * h;
    x = g * g * j + i;
    y = c * g * j + e * h;
    z = e * c * j + g * h;
    e = g * c * j - e * h;
    g = c * c * j + i;
    d ? a !== d && (d[12] = a[12], d[13] = a[13], d[14] = a[14], d[15] = a[15]) : d = a;
    d[0] = b * t + n * u + r * v;
    d[1] = f * t + o * u + s * v;
    d[2] = k * t + m * u + A *
        v;
    d[3] = l * t + p * u + B * v;
    d[4] = b * w + n * x + r * y;
    d[5] = f * w + o * x + s * y;
    d[6] = k * w + m * x + A * y;
    d[7] = l * w + p * x + B * y;
    d[8] = b * z + n * e + r * g;
    d[9] = f * z + o * e + s * g;
    d[10] = k * z + m * e + A * g;
    d[11] = l * z + p * e + B * g;
    return d
};
mat4.rotateX = function(a, b, c) {
    var d = Math.sin(b),
        b = Math.cos(b),
        e = a[4],
        g = a[5],
        f = a[6],
        h = a[7],
        i = a[8],
        j = a[9],
        k = a[10],
        l = a[11];
    c ? a !== c && (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
    c[4] = e * b + i * d;
    c[5] = g * b + j * d;
    c[6] = f * b + k * d;
    c[7] = h * b + l * d;
    c[8] = e * -d + i * b;
    c[9] = g * -d + j * b;
    c[10] = f * -d + k * b;
    c[11] = h * -d + l * b;
    return c
};
mat4.rotateY = function(a, b, c) {
    var d = Math.sin(b),
        b = Math.cos(b),
        e = a[0],
        g = a[1],
        f = a[2],
        h = a[3],
        i = a[8],
        j = a[9],
        k = a[10],
        l = a[11];
    c ? a !== c && (c[4] = a[4], c[5] = a[5], c[6] = a[6], c[7] = a[7], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
    c[0] = e * b + i * -d;
    c[1] = g * b + j * -d;
    c[2] = f * b + k * -d;
    c[3] = h * b + l * -d;
    c[8] = e * d + i * b;
    c[9] = g * d + j * b;
    c[10] = f * d + k * b;
    c[11] = h * d + l * b;
    return c
};
mat4.rotateZ = function(a, b, c) {
    var d = Math.sin(b),
        b = Math.cos(b),
        e = a[0],
        g = a[1],
        f = a[2],
        h = a[3],
        i = a[4],
        j = a[5],
        k = a[6],
        l = a[7];
    c ? a !== c && (c[8] = a[8], c[9] = a[9], c[10] = a[10], c[11] = a[11], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
    c[0] = e * b + i * d;
    c[1] = g * b + j * d;
    c[2] = f * b + k * d;
    c[3] = h * b + l * d;
    c[4] = e * -d + i * b;
    c[5] = g * -d + j * b;
    c[6] = f * -d + k * b;
    c[7] = h * -d + l * b;
    return c
};
mat4.frustum = function(a, b, c, d, e, g, f) {
    f || (f = mat4.create());
    var h = b - a,
        i = d - c,
        j = g - e;
    f[0] = 2 * e / h;
    f[1] = 0;
    f[2] = 0;
    f[3] = 0;
    f[4] = 0;
    f[5] = 2 * e / i;
    f[6] = 0;
    f[7] = 0;
    f[8] = (b + a) / h;
    f[9] = (d + c) / i;
    f[10] = -(g + e) / j;
    f[11] = -1;
    f[12] = 0;
    f[13] = 0;
    f[14] = -(2 * g * e) / j;
    f[15] = 0;
    return f
};
mat4.perspective = function(a, b, c, d, e) {
    a = c * Math.tan(a * Math.PI / 360);
    b *= a;
    return mat4.frustum(-b, b, -a, a, c, d, e)
};
mat4.ortho = function(a, b, c, d, e, g, f) {
    f || (f = mat4.create());
    var h = b - a,
        i = d - c,
        j = g - e;
    f[0] = 2 / h;
    f[1] = 0;
    f[2] = 0;
    f[3] = 0;
    f[4] = 0;
    f[5] = 2 / i;
    f[6] = 0;
    f[7] = 0;
    f[8] = 0;
    f[9] = 0;
    f[10] = -2 / j;
    f[11] = 0;
    f[12] = -(a + b) / h;
    f[13] = -(d + c) / i;
    f[14] = -(g + e) / j;
    f[15] = 1;
    return f
};
mat4.lookAt = function(a, b, c, d) {
    d || (d = mat4.create());
    var e, g, f, h, i, j, k, l, n = a[0],
        o = a[1],
        a = a[2];
    f = c[0];
    h = c[1];
    g = c[2];
    k = b[0];
    c = b[1];
    e = b[2];
    if (n === k && o === c && a === e) return mat4.identity(d);
    b = n - k;
    c = o - c;
    k = a - e;
    l = 1 / Math.sqrt(b * b + c * c + k * k);
    b *= l;
    c *= l;
    k *= l;
    e = h * k - g * c;
    g = g * b - f * k;
    f = f * c - h * b;
    (l = Math.sqrt(e * e + g * g + f * f)) ? (l = 1 / l, e *= l, g *= l, f *= l) : f = g = e = 0;
    h = c * f - k * g;
    i = k * e - b * f;
    j = b * g - c * e;
    (l = Math.sqrt(h * h + i * i + j * j)) ? (l = 1 / l, h *= l, i *= l, j *= l) : j = i = h = 0;
    d[0] = e;
    d[1] = h;
    d[2] = b;
    d[3] = 0;
    d[4] = g;
    d[5] = i;
    d[6] = c;
    d[7] = 0;
    d[8] = f;
    d[9] = j;
    d[10] = k;
    d[11] =
        0;
    d[12] = -(e * n + g * o + f * a);
    d[13] = -(h * n + i * o + j * a);
    d[14] = -(b * n + c * o + k * a);
    d[15] = 1;
    return d
};
mat4.fromRotationTranslation = function(a, b, c) {
    c || (c = mat4.create());
    var d = a[0],
        e = a[1],
        g = a[2],
        f = a[3],
        h = d + d,
        i = e + e,
        j = g + g,
        a = d * h,
        k = d * i,
        d = d * j,
        l = e * i,
        e = e * j,
        g = g * j,
        h = f * h,
        i = f * i,
        f = f * j;
    c[0] = 1 - (l + g);
    c[1] = k + f;
    c[2] = d - i;
    c[3] = 0;
    c[4] = k - f;
    c[5] = 1 - (a + g);
    c[6] = e + h;
    c[7] = 0;
    c[8] = d + i;
    c[9] = e - h;
    c[10] = 1 - (a + l);
    c[11] = 0;
    c[12] = b[0];
    c[13] = b[1];
    c[14] = b[2];
    c[15] = 1;
    return c
};
mat4.str = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + "]"
};
quat4.create = function(a) {
    var b = new MatrixArray(4);
    a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3]);
    return b
};
quat4.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    return b
};
quat4.calculateW = function(a, b) {
    var c = a[0],
        d = a[1],
        e = a[2];
    if (!b || a === b) return a[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e)), a;
    b[0] = c;
    b[1] = d;
    b[2] = e;
    b[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e));
    return b
};
quat4.dot = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
};
quat4.inverse = function(a, b) {
    var c = a[0],
        d = a[1],
        e = a[2],
        g = a[3],
        c = (c = c * c + d * d + e * e + g * g) ? 1 / c : 0;
    if (!b || a === b) return a[0] *= -c, a[1] *= -c, a[2] *= -c, a[3] *= c, a;
    b[0] = -a[0] * c;
    b[1] = -a[1] * c;
    b[2] = -a[2] * c;
    b[3] = a[3] * c;
    return b
};
quat4.conjugate = function(a, b) {
    if (!b || a === b) return a[0] *= -1, a[1] *= -1, a[2] *= -1, a;
    b[0] = -a[0];
    b[1] = -a[1];
    b[2] = -a[2];
    b[3] = a[3];
    return b
};
quat4.length = function(a) {
    var b = a[0],
        c = a[1],
        d = a[2],
        a = a[3];
    return Math.sqrt(b * b + c * c + d * d + a * a)
};
quat4.normalize = function(a, b) {
    b || (b = a);
    var c = a[0],
        d = a[1],
        e = a[2],
        g = a[3],
        f = Math.sqrt(c * c + d * d + e * e + g * g);
    if (0 === f) return b[0] = 0, b[1] = 0, b[2] = 0, b[3] = 0, b;
    f = 1 / f;
    b[0] = c * f;
    b[1] = d * f;
    b[2] = e * f;
    b[3] = g * f;
    return b
};
quat4.multiply = function(a, b, c) {
    c || (c = a);
    var d = a[0],
        e = a[1],
        g = a[2],
        a = a[3],
        f = b[0],
        h = b[1],
        i = b[2],
        b = b[3];
    c[0] = d * b + a * f + e * i - g * h;
    c[1] = e * b + a * h + g * f - d * i;
    c[2] = g * b + a * i + d * h - e * f;
    c[3] = a * b - d * f - e * h - g * i;
    return c
};
quat4.multiplyVec3 = function(a, b, c) {
    c || (c = b);
    var d = b[0],
        e = b[1],
        g = b[2],
        b = a[0],
        f = a[1],
        h = a[2],
        a = a[3],
        i = a * d + f * g - h * e,
        j = a * e + h * d - b * g,
        k = a * g + b * e - f * d,
        d = -b * d - f * e - h * g;
    c[0] = i * a + d * -b + j * -h - k * -f;
    c[1] = j * a + d * -f + k * -b - i * -h;
    c[2] = k * a + d * -h + i * -f - j * -b;
    return c
};
quat4.toMat3 = function(a, b) {
    b || (b = mat3.create());
    var c = a[0],
        d = a[1],
        e = a[2],
        g = a[3],
        f = c + c,
        h = d + d,
        i = e + e,
        j = c * f,
        k = c * h,
        c = c * i,
        l = d * h,
        d = d * i,
        e = e * i,
        f = g * f,
        h = g * h,
        g = g * i;
    b[0] = 1 - (l + e);
    b[1] = k + g;
    b[2] = c - h;
    b[3] = k - g;
    b[4] = 1 - (j + e);
    b[5] = d + f;
    b[6] = c + h;
    b[7] = d - f;
    b[8] = 1 - (j + l);
    return b
};
quat4.toMat4 = function(a, b) {
    b || (b = mat4.create());
    var c = a[0],
        d = a[1],
        e = a[2],
        g = a[3],
        f = c + c,
        h = d + d,
        i = e + e,
        j = c * f,
        k = c * h,
        c = c * i,
        l = d * h,
        d = d * i,
        e = e * i,
        f = g * f,
        h = g * h,
        g = g * i;
    b[0] = 1 - (l + e);
    b[1] = k + g;
    b[2] = c - h;
    b[3] = 0;
    b[4] = k - g;
    b[5] = 1 - (j + e);
    b[6] = d + f;
    b[7] = 0;
    b[8] = c + h;
    b[9] = d - f;
    b[10] = 1 - (j + l);
    b[11] = 0;
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return b
};
quat4.slerp = function(a, b, c, d) {
    d || (d = a);
    var e = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3],
        g, f;
    if (1 <= Math.abs(e)) return d !== a && (d[0] = a[0], d[1] = a[1], d[2] = a[2], d[3] = a[3]), d;
    g = Math.acos(e);
    f = Math.sqrt(1 - e * e);
    if (0.001 > Math.abs(f)) return d[0] = 0.5 * a[0] + 0.5 * b[0], d[1] = 0.5 * a[1] + 0.5 * b[1], d[2] = 0.5 * a[2] + 0.5 * b[2], d[3] = 0.5 * a[3] + 0.5 * b[3], d;
    e = Math.sin((1 - c) * g) / f;
    c = Math.sin(c * g) / f;
    d[0] = a[0] * e + b[0] * c;
    d[1] = a[1] * e + b[1] * c;
    d[2] = a[2] * e + b[2] * c;
    d[3] = a[3] * e + b[3] * c;
    return d
};
quat4.str = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
};