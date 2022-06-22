## react diff

### diff 算法是什么

-   **传统 diff**
    传统 diff 算法是对两个树进行比较，区分出不同节点（最小编辑距离算法）。
    字符串的最小编辑距离算法使用`动态规划`，时间复杂度为 `O(n^2)`。该算法的状态转移方程为：

    ```javascript
    // 初始化a.length === 0 || b.length === 0的情况
    dp[i][j] = Math.max(i, j)
    // 状态转移方程，表示删除，插入，替换
    if (a[i] === b[j]) {
    	dp[i][j] = dp[i - 1][j - 1]
    } else {
    	dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
    }
    ```

    树的 diff 也使用了该方法，个人理解因为树不是一条直线走到底，需要判断走左子树还是右子树，所以需要有策略函数映射每个子树到根节点的路径，然后综合考虑是走哪个子树路径。所以时间复杂度升高为`O(n^3)`。

-   **react diff**
    传统的 diff 算法由于时间复杂度太高，而我们在选择算法时应该平衡选择，在一个前端页面性能可接受范围内的最优算法就可。所以 react 对 diff 算法进行了减法，将大部分求不同节点最小距离的操作改为删除替换整个子树，将性能抛给浏览器引擎渲染 dom，从而减少 diff 的时间复杂度。

    -   不在同一层级
        不在同一层级的 Fiber 直接删除其节点及其子节点

    -   在同一层级
        -   fiber.type 不同
            type 不同的两个 fiber，也是删除原 fiber，再新增
        -   fiber.type 相同
            -   无 key (顺序比较)
                根据组件列表数组下标判断，超出原 fiber 下标的新增
            -   有 key
                根据 key 值判断，同样 key 的 fiber 进行比较

    伪代码如下：

    ```javascript
    class FiberNode {
    	// 如果是原生节点，如div，就是string类型的'div'，组件则是组件类
    	type = 'div' | SomeComponent
    	children: Array[FiberNode]
    	key: string
    }

    function domDiff(vDomOld, vDomNext) {
    	if (!vDomOld) {
    		insertUpdate(idx, vDomNext)
    		return
    	}

    	if (vDomOld.type === vDomNext.type) {
    		if (vDomOld.key === vDomNext.key) {
    			attributeUpdate(vDomOld, vDomNext)
    			if (vDomOld.children && vDomNext.children) {
    				domDiffArray(vDomOld.children, vDomNext.children)
    				return
    			}
    		}
    	}
    	replaceUpdate(vDomOld, vDomNext)
    }

    function domDiffArray(o_arr, n_arr) {
    	const o_map = addKeys(o_arr)
    	const n_map = addKeys(n_arr)

    	// 找出需要删除的节点
    	const deletes = o_arr.filter((item, i) => {
    		return item.key ? !n_map.has(item.key) : i >= n_arr.length
    	})

    	for (let x of deletes) {
    		replaceUpdate(x, null)
    	}

    	// 其他是需要更新的节点
    	// 剩下的要么是n_arr中有的key，要么是长度小于等于n_arr
    	for (let i = 0; i < o_arr.length; i++) {
    		if (o_arr[i].key) {
    			if (n_map.has(o_arr[i].key)) {
    				domDiff(o_arr[i], n_map.get(o_arr[i].key))
    			}
    		} else {
    			if (i < n_arr.length) {
    				domDiff(o_arr[i], n_arr[i])
    			}
    		}
    	}

    	// 需要新增的节点
    	for (let i = 0; i < n_arr.length; i++) {
    		if (n_arr[i].key) {
    			if (!o_map.has(n_arr[i].key)) {
    				insertUpdate(i, n_arr[i])
    			}
    		} else {
    			if (i >= o_arr.length) {
    				insertUpdate(i, n_arr[i])
    			}
    		}
    	}
    }

    function insertUpdate(idx, vDomNext) {}

    function replaceUpdate(vDomOld, vDomNext) {}

    function attributeUpdate(vDomOld, vDomNext) {}

    function addKeys(arr) {
    	const map = new Map()
    	for (let x of arr) {
    		map.put(x.key, x)
    	}
    	return map
    }
    ```