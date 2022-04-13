import ScrollDescriptor from './ScrollDescriptor'
import { useRef } from 'react';

const useScroll = () => {
  const scrollInfo = useRef(new ScrollDescriptor())

  const scrollHandler = (e) => {
    const scroller = e.currentTarget;
    const left = scroller.scrollLeft;
    const top = scroller.scrollTop;
    const offsetHeight = scroller.offsetHeight;
    const scrollHeight = scroller.scrollHeight;
    scrollInfo.current.update(left, top, offsetHeight, scrollHeight)
  }

  return {
    onScroll: scrollHandler,
    info: scrollInfo.current
  }
}

export default useScroll;