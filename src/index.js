import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'

// 导入状态仓库和数据供应组件Provider
// import { Provider } from 'react-redux'
// import store from './store'
import { Provider } from 'mobx-react'
import store from './mobxStore'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

