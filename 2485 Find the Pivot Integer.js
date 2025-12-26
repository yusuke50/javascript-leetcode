/**
 * v1 accepted, runtime: 1 ms (41.59%), memory: 53.72 MB (97.55%)
 */
var pivotInteger = function(n) {
    if (n == 1) {
        return 1;
    }
    for (let i = 1; i < n - 1; i += 1) {
        let sumL = ((1 + i) * i) / 2;
        let sumR = ((i + n) * (n - i + 1)) / 2;
        if (sumL == sumR) {
            return i;
        }
    }
    return -1;
};

/**
 * v2 accepted, runtime: 0 ms (100%), memory: 54.25 MB (92.35%)
 */
var pivotInteger = function(n) {
    const total = n * (n + 1) / 2;
    const x = Math.sqrt(total);
    const pivot = Math.floor(x)
    return x === pivot ? x : -1;
};