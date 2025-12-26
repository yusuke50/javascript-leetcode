/**
 * v1 accepted, runtime: 2 ms (22.53%), memory: 53.89 MB (94.87%)
 */
var canMakeArithmeticProgression = function(arr) {
    arr = arr.sort((a, b) => (a - b));
    let delta = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i += 1) {
        if ((arr[i] - arr[i - 1]) != delta) {
            return false;
            break;
        }
    }
    return true;
}

/**
 * v2 accepted, runtime: 0 ms (100%), memory: 51.78 MB (100%)
 */
var canMakeArithmeticProgression = function(arr) {
    arr = arr.sort((a, b) => (a - b));
    let delta = arr[1] - arr[0];
    const len = arr.length;
    for (let i = 2; i < len; i += 1) {
        if ((arr[i] - arr[i - 1]) != delta) {
            return false;
        }
    }
    return true;
}