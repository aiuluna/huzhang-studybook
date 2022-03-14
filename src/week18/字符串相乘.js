/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function (num1, num2) {
  const arr1 = new Array(num1.length);
  const arr2 = new Array(num2.length);
  const result = []

  for (let i = num1.length - 1; i >= 0; i--) {
      arr1[i] = +num1[num1.length - 1 - i]
  }
  for (let i = num2.length - 1; i >= 0; i--) {
      arr2[i] = +num2[num2.length - 1 - i]
  }

  for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
          if (!result[i + j]) result[i + j] = 0;
          result[i + j] += (arr1[i] * arr2[j]);
      }
  }
  
  for (let i = 0; i < result.length; i++) {
      if (result[i] >= 10) {  
          if (i === result.length - 1) result.push(0);       
          result[i + 1] += (Math.floor(result[i] / 10)); 
          result[i] = result[i] % 10;
      }
  }

  while (result.length > 1 && result[result.length - 1] === 0) result.pop();

  let ans = '';
  for (let i = result.length - 1; i >= 0; i--) {
      ans += result[i] + '';
  }
  return ans
};