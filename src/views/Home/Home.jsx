import React from 'react'
// import { Link } from 'react-router-dom';
// redux
// import { connect } from 'react-redux'
// mobx
import { inject, observer } from 'mobx-react'


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // 跟组件App的父组件Provider中导入了store数据,单数子组件Home中并不会自动继承store数据,此时可以使用高阶组件connect把store数据包装进当前组件
    console.log(props);
  }

  render() {
    return (
      <div>
        主页 <br />
        <button onClick={() => {
          // 高阶组件会向当前组件props中传入dispatch函数，用于状态数据的更新，参数对应reducer函数的dier个参数action
          this.props.dispatch({ type: 'COUNT_ADD' })
        }}>
          {/* {this.props.count}|
          {this.props.student.name}|
          {this.props.isLogin * 1} */}
        </button>
        <button onClick={() => {
          this.props.store.setName('李四')
          this.props.store.setNum()
        }}>
          {this.props.store.name}
          {this.props.store.number}
        </button>

      </div>
    )
  }
}

// 定义映射函数,把状态仓库中的数据映射到一个对象中
/* function mapState(store){
  return {
    count: store.count,
    student: store.student,
    isLogin: store.isLogin
  }
} */

// 使用高阶组件connect把映射的数据对象包装进Home组建的props字段中
// export default connect(mapState)(Home)
// export default connect(state => state)(Home)

// 使用mobx的工具给组件注入状态仓库并设置观察者

export default inject('store')(observer(Home))