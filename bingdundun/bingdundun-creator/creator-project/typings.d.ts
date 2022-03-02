declare module '*.css';

declare module '*.less' {
  const content: {
    [key: string]: string;
  };
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module 'amfe-env';
declare module 'js-cookie';
declare module 'react-router-dom';
declare module 'react-canvas-poster';
declare module 'qrcode.react';
declare module 'dom-to-image';
interface Window {
  TweenLite: any
}