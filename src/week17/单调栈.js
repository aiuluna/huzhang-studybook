// 求数组内每个元素前后的第一个小于该元素的元素下标
var sampleStack = function (arr) {
  const stack = [];
  const prev = [], next = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      next[stack.pop()] = i;
    }

    if (stack.length) {
      prev[i] = stack[stack.length - 1];
    } else {
      prev[i] = -1;
    }

    stack.push(i)
  }

  while(stack.length) {
    next[stack.pop()] = arr.length;
  }

  printFn(arr);
  printFn(prev);
  printFn(next);

  return
}

var printFn = function(arr) {
  let str = '  ';
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + '   ';
  }
  console.log(str)
  return str
}


sampleStack([2,1,3,0,5,9,6,7,8,4])