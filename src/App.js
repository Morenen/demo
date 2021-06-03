import React from 'react'
import './App.css';


// 导入路由配置组件，作为路由出口
import RouterCom from './router/index'
// 导入路由跳转组件Link，路由包装的高阶组件(函数)withRouter
import { Link,withRouter } from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">首页</Link>
          <Link to="/login">登录</Link>
          <Link to="user">用户</Link>
        </nav>
        <RouterCom />
      </div>
    )
  }
}

export default withRouter(App);
