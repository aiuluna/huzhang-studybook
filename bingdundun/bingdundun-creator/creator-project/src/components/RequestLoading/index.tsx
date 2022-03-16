import React from 'react';
import * as ReactDOM from 'react-dom';
import Loading from '../PageLoading';
import './index.less';

let loadingDiv;
export const RequestLoading = () => {
  if (document.body.contains(loadingDiv)) {
    return {
      close,
    };
  }
  const div = document.createElement('div');
  div.className = 'loading-div-component';
  loadingDiv = div;
  function close() {
    ReactDOM.unmountComponentAtNode(loadingDiv);
    if (loadingDiv && loadingDiv.parentNode) {
      loadingDiv.parentNode.removeChild(loadingDiv);
    }
  }
  document.body.appendChild(div);
  ReactDOM.render(
    <div className="loading-content">
      <Loading />
    </div>,
    div
  );
  return {
    close,
  };
};
