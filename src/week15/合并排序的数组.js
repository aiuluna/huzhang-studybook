/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
 var merge = function(A, m, B, n) {
    let a = m - 1, b = n - 1, c = A.length - 1;
    while(a >= 0 && b >= 0) {
        if(A[a] > B[b]) {
            A[c] = A[a];
            c--;
            a--;
        } else {
            A[c] = B[b];
            c--;
            b--;
        }
    }
    if (b >= 0) {
        for (let i = 0; i <= b; i++) {
            A[i] = B[i]
        }
    }
    return A;
};