import React from 'react'
// 这是一个高阶组件,用于对User组件增强优化

// 第一中高阶组件的实现方法:属性代理
// 原理:通过创建新组建来包裹原始组件,把原始组件作为新组建的子组件渲染

export default function myHoc( MyCom ) {
  return class NewCom extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        age: 20
      }
      // 获取原始组件中的数据
      // console.log(MyCom.props,MyCom.state);
      // 使用属性代理时,高阶组件会接收到路由信息,原始组件没有路由信息
      // console.log(this.props,this.state);
      // 可以在属性代理模式下,增删改props数据
      // this.props.location.data.name = "老王";
      // console.log(this.props);

    }
    render(){
      // 高阶组件在使用属性代理包装组件时,原始组件属于子组件,会把原始组件中的props置空(路由信息就丢了),state状态数据不受影响
      // return(
      //   <div>
      //     {/* 此时路由信息在高阶组件中,如果想让原始组件也有路由信息,传入即可 */}
      //     <MyCom {...this.props}></MyCom>
      //   </div>
      // )


      // 渲染劫持:通过条件判断,可阻止原始组件渲染,转而渲染其它的数据内容,或者给原始组件添加新的模板和功能 类似vue中的路由守卫功能

      var isLogin = true;
      if(isLogin){
        return <MyCom {...this.newProps} />
      }else{ 
        // return ( <div>这是登录页的标签模板</div> ) //返回登录页模板
        this.props.history.push('/login')
        return '';
      }

      // 或者给原始组件添加修改模板
    }
  }
}