/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function (citations) {
    if (citations.length === 0) return 0;
    citations.sort((a, b) => a - b);
    let h = 1, n = citations.length - 1;
    while (n >= 0 && citations[n] >= h) {
        h += 1;
        n -= 1;
    }
    return h - 1;
};