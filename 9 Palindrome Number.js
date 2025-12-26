/**
 * v1 failed
 */


/**
 * v2 accepted, runtime: 11 ms (26.83%), memory: 64.98 MB (41.41%)
 */
var isPalindrome = function(x) {
    const strX = String(x);
    const len = strX.length;
    let primeX = '';
    for (let i = len - 1; i >= 0; i -= 1) {
        primeX += strX[i]
    }
    return strX == primeX
};


/**
 * v3 accepted, runtime: 4 ms (89.81%), memory: 59.7 MB (100%)
 */
var isPalindrome = function(x) {
    const strX = String(x);
    const len = strX.length;
    const half = Math.ceil(len / 2);
    for (let i = 0; i < half; i += 1) {
        if (strX[i] != strX[len - i - 1]) {
            return false;
        }
    }
    return true;
};


/**
 * v4 accepted, runtime: 5 ms (78.09%), memory: 65.53 MB (69.94%)
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const strX = String(x);
    const len = strX.length;
    for (let i = 0; i < len / 2; i += 1) {
        if (strX[i] !== strX[len - i - 1]) {
            return false;
        }
    }
    return true;
};