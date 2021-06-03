// 路由配置文件

import { Switch,Route } from 'react-router-dom'

import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import User from '../views/User/User'

// react中路由使用组件实现，vue中是对象
export default function MyRouter(){
  // Route组件的属性exact表示精确匹配路由，如果不加，那么 /abc可能匹配到：/、/a、/ab、/abc这几个结果， 
  return (
    <Switch>
      <Route exact path="/" component={Home} ></Route>
      <Route path="/login" component={Login} ></Route>
      {/* 精确匹配路由路径，静态url */}
      <Route exact path="/user" component={User} ></Route>
      {/* 模糊匹配路由路径，动态url传参 */}
      <Route path="/user/:name" component={User} ></Route>
    </Switch>
  )
}