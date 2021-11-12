module.exports = function (arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}