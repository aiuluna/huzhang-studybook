## Virtual DOM

### virtual dom 是什么？

    ```javascript
    const Component() =>
        <div>
            ...
            <div>...</div>
            <ul>
                <li>...</li>
                <li>...</li>
                <li>...</li>
            </ul>
        </div>

    ```

一个 react 的返回 jsx 对象的函数, react 内置将其使用`React.createElement`转化成一个`virtual tree`。
然后会根据 virtualDom 生成一个或多个 fiber，通过 diff 去更新比较，将更新结果返回给 virtualDom 再绘制页面。



