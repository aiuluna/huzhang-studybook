import useScroll from "../hooks/useScroll";
import usePaging from '../hooks/usePaging';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const ScrollExample = () => {
  useState()
  // 公共组件
  const { onScroll, info } = useScroll();
  // 状态驱动
  const [list, next, prev] = usePaging();
  console.log('render')

  useEffect(() => {
    console.log('useffect')
    const unsub = info.onScrollToBottom(() => {
      console.log('bottom reached')
    });
    return () => {
      unsub()
    }
  }, [])

  return <>
    <div
      onScroll={onScroll}
      style={{
        height: 1000,
        width: 400,
        overflow: 'scroll'
      }}
    >
      <div style={{ width: '100%', height: 800, background: 'red' }} />
      <div style={{ width: '100%', height: 800, background: 'blue' }} />
      <div style={{ width: '100%', height: 800, background: 'yellow' }} />
      {/* <div>
        {list.map(item => <div>
          {item}
        </div>)}
      </div> */}
      <button onClick={() => {
        next()
      }}>next</button>
    </div>
  </>

}

ReactDOM.render(<ScrollExample />, document.getElementById('root'))