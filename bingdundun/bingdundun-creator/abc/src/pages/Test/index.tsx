import React, { FC, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { getExample } from '@/services/module/test';
// import sw from './sw.js';

const Test: FC<any> = () => {

  // if ('serviceWorker' in window.navigator) {
  //   navigator.serviceWorker.register('./T2020/sw.js');
  // }
  const test = async () =>{
    console.log('%c [ test ]', 'font-size:13px; background:pink; color:#bf2c9f;')
    await getExample({})
  }
  test()
  return <div></div>;
};

export default ReactDOM.render(<Test />, document.querySelector("#root"));
