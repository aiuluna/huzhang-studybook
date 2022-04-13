import useScroll from ".";
import { useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

const ScrollExample = () => {
  const { onScroll, info } = useScroll();

  useEffect(() => {
    const unsub = info.onScrollToBottom(() => {
      console.log('bottom reached')
    });
    return () => {
      unsub()
    }
  }, [])

  return <div
    onScroll={onScroll}
    style={{
      height: 600,
      width: 400,
      overflow: 'scroll'
    }}
  >
    <div style={{ width: '100%', height: 800, background: 'red' }} />
    <div style={{ width: '100%', height: 800, background: 'blue' }} />
    <div style={{ width: '100%', height: 800, background: 'yellow' }} />
  </div>
}

ReactDOM.render(<ScrollExample />, document.getElementById('root'))