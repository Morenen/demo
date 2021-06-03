import React from 'react'
// 导入高阶组件
// import userHOC1 from './UserHOC'
import userHOC2 from './UserHOC2'

class User extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'User'
    }
    console.log(this.props,this.state);
    // 当使用路由跳转到某个组件时，路由会在组件的props对象中添加路由信息，包含以下三个字段：
    // history: 用于路由编程式导航跳转和路由监听
    // location: 用于路由信息显示和传参
    // math: 用于路由配置信息展示和传参
    // console.log(this.props);
  }
  render(){
    return(
      <div>
        {/* 1,url拼接传值不会自动解析，使用location.search接收字符串 */}
        {/* 2,动态路由传值，自动解析到metch.params字段中 */}
        {/* 3,自定义对象传值，为了防止data为空报错使用&&判断 */}
        用户页
        {/* {this.props.location.search || this.props.match.params.name || this.props.location.data?.name} */}

      </div>
    )
  }
}

// 使用高阶组件包装User组件
export default userHOC2(User)