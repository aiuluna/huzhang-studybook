function A(a, b) {}
function B(a, b = 1) {}
function C(a, ...args) {}
console.log(A.length) // 2
console.log(B.length) // 1
console.log(C.length) // 1