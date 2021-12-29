/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
 var rand10 = function () {
    let random2, random5;
    while ((random2 = rand7()) === 7);
    while ((random5 = rand7()) > 5);
    return random2 % 2 === 1 ? random5 : 5 + random5;
};