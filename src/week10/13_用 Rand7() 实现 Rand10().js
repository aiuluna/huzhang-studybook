/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
 var rand10 = function () {
    let r2 = rand7(), r5 = rand7();
    while (r2 === 7) {
        r2 = rand7()
    }
    while(r5 > 5) {
        r5 = rand7()
    }
    return r2 % 2 === 0 ? r5 : (5 + r5)
};