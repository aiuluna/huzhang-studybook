function swap (a, b) {
  const temp = a;
  a = b;
  b = temp;
  return [a, b];
}

function median (a, b, c) {
  if (a > b) swap (a, b);
  if (a > c) swap (a, c);
  if (b > c) swap (b, c);
  return b;
}

// 半边递归
var fastSort = function (arr, start, end) {
    // if (end - start < 1) return;
    while (end - start > 0) {
        // 三点找基准值
        // let pivot = median(arr[start], arr[end], arr[(start + end) >> 1])
        let pivot = arr[start]
        let x = start,
            y = end
        while (x < y) {
            while (x < y && arr[y] >= pivot)
                y--;
            if (x < y) {
                [arr[x], arr[y]] = [arr[y], arr[x]];
                x++;
            }
            while (x < y && arr[x] < pivot)
                x++;
            if (x < y) {
                [arr[x], arr[y]] = [arr[y], arr[x]];
                y--;
            }
        }
        // arr[x] = pivot
        fastSort(arr, start, x - 1)
        start = x + 1
        // fastSort(arr, x + 1, end)
        // end = x - 1;
    }

}


const throlte = 16;

var fastSort = function (arr, start, end) {
    while (end - start > throlte) {
        // 三点找基准值
        let pivot = median(arr[start], arr[end], arr[(start + end) >> 1])
        let x = start,
            y = end
        do {
            while (arr[x] < pivot) x++;
            while (arr[y] > pivot) y--;
            if (x <= y) {
                [arr[x], arr[y]] = [arr[y], arr[x]]
                x++;
                y--;
            }
        } while (x < y)
        fastSort(arr, x, end)
        start = y
    }
    return
}

var insertSort = function (arr, l, r) {
    if (l >= r) return;

    for (let i = l + 1; i <= r; i++) {
        let j = i - 1;
        const current = arr[i]
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current
    }
}