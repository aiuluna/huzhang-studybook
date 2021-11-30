/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
    const dp = new Array(k);

    dp[0] = 1;
    let idx3 = 0, idx5 = 0, idx7 = 0;
    for (let i = 1; i < k; i++) {
        dp[i] = Math.min(dp[idx3] * 3, dp[idx5] * 5, dp[idx7] * 7);
        if (dp[i] === dp[idx3] * 3) idx3++;
        if (dp[i] === dp[idx5] * 5) idx5++;
        if (dp[i] === dp[idx7] * 7) idx7++;
    }
    return dp[k-1]          
};