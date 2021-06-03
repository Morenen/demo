// 这是一个高阶组件,用于对User组件增强优化

// 高阶组件的第二种实现方法:反向继承
// 原理:高阶组件中的新组件继承于原始组件,

export default function myHoc( MyCom ) {
  
  return class NewCom extends MyCom{
    constructor(props){
      super(props);
      // 反向继承后,可以拿到原始组件的props和state数据
      console.log("HOC1",this.props,this.state);
      // 修改state数据在构造器中改不了
      this.setState({
        name: 'hello'
      })
    }

    // 在组件渲染完成之后,修改state是可以的
    componentDidMount(){
      this.setState({
        name: '你好'
      })
      // 可以在这里发起ajax,更新数据=
    }

    render(){
      // 反向继承时,MyCom是父组件,不能再子组件模板中使用父组件标签

      // 使用super.render()渲染父组件模板
      return super.render();
    }
  }


}
